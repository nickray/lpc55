(function() {var implementors = {};
implementors["lpc55"] = [{"text":"impl RefUnwindSafe for Bootloader","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; RefUnwindSafe for GetProperties&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ErrorGroup","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for GenericError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FlashDriverError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SbLoaderError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PropertyStoreError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CrcCheckerError","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Protocol","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ResponsePacket","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Error","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReceivedPacket","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ProtectedFlash","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; RefUnwindSafe for FactoryArea&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; RefUnwindSafe for InfieldArea&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeystoreHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Keycode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ActivationCode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Keystore","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for NxpArea","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BootConfiguration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UsbId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SecureBootConfiguration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PrinceConfiguration","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PrinceSubregion","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RawCustomerData","synthetic":true,"types":[]},{"text":"impl&lt;CustomerData, VendorUsage&gt; RefUnwindSafe for InfieldAreas&lt;CustomerData, VendorUsage&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;CustomerData: RefUnwindSafe,<br>&nbsp;&nbsp;&nbsp;&nbsp;VendorUsage: RefUnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Header","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RawVendorUsage","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sha256Hash","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FactoryAreaProgInProgress","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RotKeysStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PrinceIvCode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for MonotonicCounter","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DebugSecurityPolicies","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BootSpeed","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IspMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for TrustzoneMode","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RotKeyStatus","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DebugSecurityPolicy","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for RawBootCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Certificates","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sb21FileParameters","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for UnsignedSb21File","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sb21CommandPart","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SignedSb21File","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sb21HeaderPart","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Bcd","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Keyblob","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Sb2Header","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FullCertificateBlockHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Filetype","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BootTag","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BootCommandDescriptor","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for BootCommand","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CertificateIndex","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Signature","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SigningKeySource","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for SigningKey","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Version","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AvailablePeripherals","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for IrqNotificationPin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for AvailableCommands","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HidHeader","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Properties","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Property","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for PfrKeystoreUpdateOptions","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for FlashReadMargin","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Key","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for KeystoreOperation","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for CommandTag","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Command","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for DataPhase","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ResponseTag","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for Response","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for ReportId","synthetic":true,"types":[]},{"text":"impl RefUnwindSafe for HttpConfig","synthetic":true,"types":[]},{"text":"impl !RefUnwindSafe for Server","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()