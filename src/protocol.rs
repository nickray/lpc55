// https://www.nxp.com/docs/en/reference-manual/MCUBOOTRM.pdf
//
// - all fields in packets are little-endian
// - each command sent from host is replied to with response
// - optional data phase, either command or response (not both!)
//   RM uses "incoming" (host->MCU) and "outgoing" (host<-MCU) terminology
//
//
// 1) no data phase:
//   --> command
//   <-- generic response
//
//
// 2) command data phase:
//   --> command (has-data-phase flag set)
//   <-- initial generic response (must signal success status to proceed with data phase)
//   ==> inital command data packet
//   ⋮
//   ==> final command data packet
//   <-- final generic response (contains status for entire operation)
//
//  Device may abort data phase by sending finale generic response early, with status abort
//
//
// 3) response data phase:
//   --> command
//   <-- initial non-generic response (must signal has-data to proceed with data phase)
//   <== initial response data packet
//    ⋮
//   <== final reponse data packet
//   <-- final generic response (contains status for entire operation)
//
//  Device may abort data phase early by sending zero-length packet
//  Host may abort data phase by sending generic response (?is this a thing?)

use core::convert::{TryFrom, TryInto};
use crate::types;

use hidapi::{HidDevice, HidResult};

/// The NXP bootloader protocol. Interact via `fn call(Command) -> Result<Response>`
pub struct Protocol {
    device: HidDevice,
}

/// The NXP bootloader protocol error type
#[derive(thiserror::Error, Debug)]
pub enum Error {
    #[error("expected data response packet")]
    ExpectedDataPacket,
    #[error("expected (non-data) response packet")]
    ExpectedResponsePacket,
    #[error("error from underlying hidapi")]
    HidApi(#[from] hidapi::HidError),
    #[error("invalid HID report ID ({0})")]
    InvalidReportId(u8),
    #[error("unknown response tag ({0})")]
    UnknownResponseTag(u8),

    #[error("unspecified protocol error")]
    Unspecified,
}

/// The NXP bootloader protocol result types
pub type Result<T> = std::result::Result<T, Error>;

pub struct ResponsePacket {
    pub tag: types::ResponseTag,
    pub has_data: bool,
    pub status: Option<types::BootloaderError>,
    // pub mirrored_command_header: [u8; 4],
    pub parameters: Vec<u32>,
}

pub enum ReceivedPacket {
    Response(ResponsePacket),
    Data(Vec<u8>),
}

impl TryFrom<ReceivedPacket> for ResponsePacket {
    type Error = Error;
    fn try_from(packet: ReceivedPacket) -> Result<Self> {
        if let ReceivedPacket::Response(packet) = packet {
            Ok(packet)
        } else {
            Err(Error::ExpectedResponsePacket)
        }
    }
}

impl TryFrom<ReceivedPacket> for Vec<u8> {
    type Error = Error;
    fn try_from(packet: ReceivedPacket) -> Result<Self> {
        if let ReceivedPacket::Data(data) = packet {
            Ok(data)
        } else {
            Err(Error::ExpectedDataPacket)
        }
    }
}

pub const READ_TIMEOUT: i32 = 2000;

impl Protocol {

    pub fn call(&self, command: &types::Command) -> Result<types::Response> {

        // construct command packet
        let command_packet = command.hid_packet();

        // send command packet
        self.write(command_packet.as_slice())?;
        trace!(" --> {}", types::to_hex_string(&command_packet));

        let initial_response = self.read_packet()?;

        // parse initial reponse packet
        match (*command, command.tag(), command.data_phase()) {

            // case 1: no data phases
            (command, _tag, types::DataPhase::None) => {

                // we expect a non-data packet, not signaling additional data packets, with
                // successful status, mirroring our command header
                let packet = ResponsePacket::try_from(initial_response)?;

                assert_eq!(packet.has_data, false);
                assert!(packet.status.is_none());
                match command {
                    types::Command::KeyProvisioning(types::KeyProvisioningOperation::Enroll) => {
                        assert_eq!(packet.tag, types::ResponseTag::Generic);

                        // general property of generic responses: 2 parameters, status and mirrored command header
                        assert_eq!(packet.parameters.len(), 1);
                        assert_eq!(packet.parameters[0].to_le_bytes(), command.header());

                        Ok(types::Response::Generic)
                    }
                    types::Command::GetProperty(_property) => {
                        assert_eq!(packet.tag, types::ResponseTag::GetProperty);
                        assert!(!packet.parameters.is_empty());

                        Ok(types::Response::GetProperty(packet.parameters))
                    }
                    _ => todo!()
                }
            }

            (types::Command::ReadMemory { address: _, length }, _, _) => {

                let packet = ResponsePacket::try_from(initial_response)?;
                // assert_eq!([0x03, 0x00, 0x0C, 0x00], &initial_generic_response[..4]);
                assert_eq!(packet.has_data, true);
                assert!(packet.status.is_none());
                assert_eq!(packet.tag, types::ResponseTag::ReadMemory);

                // ReadMemory response: 2 parameters, status and then number of bytes to be
                // sent in data phase
                assert_eq!(packet.parameters.len(), 1);
                assert_eq!(packet.parameters[0] as usize, length);

                let mut data = Vec::new();
                while data.len() < length {
                    let partial_data: Vec<u8> = self.read_packet()?.try_into()?;
                    assert!(data.len() + partial_data.len() <= length);
                    data.extend_from_slice(&partial_data);
                }

                let packet = ResponsePacket::try_from(self.read_packet()?)?;
                assert_eq!(packet.has_data, false);
                assert!(packet.status.is_none());

                assert_eq!(packet.tag, types::ResponseTag::Generic);
                // general property of generic responses: 2 parameters, status and mirrored command header
                assert_eq!(packet.parameters.len(), 1);
                // it seems the device "forgets" about the parameters the original command
                // contained (address + length)
                // ooorrr, Table 4-11 ("The Command tag parameter identifies the response to the command sent by the host.")
                // just means that the command tag is set
                assert_eq!(packet.parameters[0].to_le_bytes()[..2], command.header()[..2]);

                Ok(types::Response::ReadMemory(data))
            }
            _ => todo!()
        }
    }

    pub fn read_packet(&self) -> Result<ReceivedPacket> {

        // read data with timeout
        let mut data = Vec::new();
        data.resize(256, 0);
        let read = self.device.read_timeout(&mut data, READ_TIMEOUT)?;
        data.resize(read, 0);

        let report_id = types::ReportId::try_from(data[0]).map_err(Error::InvalidReportId)?;

        // the device often sends "extra junk"; we split this off early
        let expected_packet_len = u16::from_le_bytes(data[2..4].try_into().unwrap()) as usize;
        data.resize(4 + expected_packet_len, 0);
        trace!("<-- {} ({} bytes)", types::to_hex_string(&data), data.len());

        let response_packet = data.split_off(4);

        // now handle the response packet
        Ok(match report_id {
            types::ReportId::Response => {
                let tag = types::ResponseTag::try_from(response_packet[0]).map_err(Error::UnknownResponseTag)?;
                let has_data = (response_packet[1] & 1) != 0;
                let expected_param_count = response_packet[3] as usize;

                let mut parameters: Vec<u32> = response_packet[4..].chunks(4)
                    .map(|chunk| u32::from_le_bytes(chunk.try_into().unwrap()))
                    .collect();
                assert_eq!(expected_param_count, parameters.len());

                // first parameter is always status
                let status_code = parameters.remove(0);
                let status = match status_code {
                    0 => None,
                    code => Some(types::BootloaderError::from(code)),
                };

                // NB: this is only true for Generic responses
                // // second parameter is always mirrored command header
                // let mirrored_command_header = parameters.remove(0).to_le_bytes();

                ReceivedPacket::Response(ResponsePacket {
                    tag,
                    has_data,
                    status,
                    // mirrored_command_header,
                    parameters,
                })

            },
            types::ReportId::ResponseData => {
                ReceivedPacket::Data(response_packet)
            },
            _ => todo!()
        })
    }

    pub fn write(&self, data: &[u8]) -> Result<()> {
        let sent = self.device.write(data)?;
        let all = data.len();
        if sent == all {
            Ok(())
        } else {
            Err(hidapi::HidError::IncompleteSendError { sent, all })?
        }
    }

    pub fn read_timeout(&self, timeout: usize) -> HidResult<Vec<u8>> {
        let mut data = Vec::new();
        data.resize(256, 0);
        let read = self.device.read_timeout(&mut data, timeout as i32)?;
        data.resize(read, 0);
        Ok(data)
    }

}

impl Protocol {
    pub fn new(device: HidDevice) -> Self {
        Self { device }
    }
}

impl std::fmt::Debug for Protocol {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        f.debug_struct("Device")
            // .debug_struct("HidDevice")
                .field("manufacturer", &self.device.get_manufacturer_string())
                .field("product", &self.device.get_product_string())
                .field("serial number", &self.device.get_serial_number_string())
            // .finish()
        .finish()
    }
}

