(function() {var implementors = {};
implementors["lpc55"] = [{"text":"impl UnwindSafe for Bootloader","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for GetProperties&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorGroup","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GenericError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlashDriverError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SbLoaderError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PropertyStoreError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CrcCheckerError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Protocol","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResponsePacket","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReceivedPacket","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProtectedFlash","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; UnwindSafe for FactoryArea&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; UnwindSafe for InfieldArea&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeystoreHeader","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Keycode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ActivationCode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Keystore","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NxpArea","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BootConfiguration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UsbId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SecureBootConfiguration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PrinceConfiguration","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PrinceSubregion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawCustomerData","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; UnwindSafe for InfieldAreas&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: UnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawVendorUsage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sha256Hash","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FactoryAreaProgInProgress","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RotKeysStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PrinceIvCode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MonotonicCounter","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DebugSecurityPolicies","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BootSpeed","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IspMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TrustzoneMode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RotKeyStatus","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DebugSecurityPolicy","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RawBootCommand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Certificates","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sb21FileParameters","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UnsignedSb21File","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sb21CommandPart","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignedSb21File","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sb21HeaderPart","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Bcd","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Keyblob","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sb2Header","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FullCertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Filetype","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BootTag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BootCommandDescriptor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BootCommand","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CertificateIndex","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Signature","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigningKeySource","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SigningKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AvailablePeripherals","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IrqNotificationPin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AvailableCommands","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HidHeader","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Properties","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Property","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PfrKeystoreUpdateOptions","synthetic":true,"types":[]},{"text":"impl UnwindSafe for FlashReadMargin","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeystoreOperation","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CommandTag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Command","synthetic":true,"types":[]},{"text":"impl UnwindSafe for DataPhase","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResponseTag","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Response","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReportId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HttpConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Server","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()