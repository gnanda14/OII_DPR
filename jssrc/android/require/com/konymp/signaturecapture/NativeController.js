define(['./KonyLogger', './StringEncoder'], function(konyLoggerModule, stringEncoder) {
    var konymp = konymp || {};
    konymp.logger = new konyLoggerModule("signaturecapture/NativeController");
    var NativeController = function(componentInstance) {
        this.componentInstance = componentInstance;
    };
    NativeController.prototype.addSignatureCanvas = function(eventobj, penColor, bgColor, saveType) {
        var errObj = new Error();
        errObj.name = "Exception:SignatureCapture:addSignatureCanvas";
        errObj.message = "You have to implement the method addSignatureCanvas!";
        errObj.number = 101;
        throw errObj;
    };
    NativeController.prototype.onClickClear = function() {
        var errObj = new Error();
        errObj.name = "Exception:SignatureCapture:onClickClear";
        errObj.message = "You have to implement the method onClickClear!";
        errObj.number = 102;
        throw errObj;
    };
    NativeController.prototype.onClickSave = function() {
        var errObj = new Error();
        errObj.name = "Exception:SignatureCapture:onClickSave";
        errObj.message = "You have to implement the method onClickSave!";
        errObj.number = 103;
        throw errObj;
    };
    NativeController.prototype.validateSignature = function() {
        var errObj = new Error();
        errObj.name = "Exception:SignatureCapture:validateSignature";
        errObj.message = "You have to implement the method validateSignature!";
        errObj.number = 103;
        throw errObj;
    };
    /**
     * @function encrypt
     * @private
     * @description: encrypts the base 64
     */
    NativeController.prototype.encrypt = function(imgBase64) {
        try {
            konymp.logger.trace("-- Entering encrypt -- ", konymp.logger.FUNCTION_ENTRY);
            var prptobj = {
                padding: "pkcs5",
                mode: "cbc",
                initializationvector: "1234567890123456"
            };
            var passphrase = "passphrase";
            var randomInteger = Math.floor(Math.random() * 10);
            var passphraselogo = "md5";
            var passphrasetext = "SignaturePassPhrase";
            var subalgo = "aes";
            var encryptDecryptKey = kony.crypto.newKey(passphrase, 128, {
                passphrasetext: [passphrasetext],
                subalgo: subalgo,
                passphrasehashalgo: passphraselogo
            });
            this._key = encryptDecryptKey;
            var encryptedBytes = kony.crypto.encrypt("aes", encryptDecryptKey, imgBase64, prptobj);
            var encryptedBase64 = kony.convertToBase64(encryptedBytes);
            konymp.logger.trace("-- Exiting encrypt -- ", konymp.logger.FUNCTION_EXIT);
            return encryptedBase64;
        } catch (exception) {
            kony.application.dismissLoadingScreen();
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function getDecryptedSignature
     * @private
     * @description: returns the decrypted signature
     */
    NativeController.prototype.getDecryptedSignature = function() {
        try {
            konymp.logger.trace("-- Entering getDecryptedSignature -- ", konymp.logger.FUNCTION_ENTRY);
            var prptobj = {
                padding: "pkcs5",
                mode: "cbc",
                initializationvector: "1234567890123456"
            };
            var storedB64 = kony.store.getItem("signature");
            var bytesToDecrypt = kony.convertToRawBytes(storedB64);
            var decryptedBase64 = kony.crypto.decrypt("aes", this._key, bytesToDecrypt, prptobj);
            konymp.logger.trace("-- Exiting getDecryptedSignature -- ", konymp.logger.FUNCTION_EXIT);
            return decryptedBase64;
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function makeNFSCall
     * @private
     * @description: makes network call for binary upload
     */
    NativeController.prototype.makeNFSCall = function(base64) {
        try {
            konymp.logger.trace("-- Entering makeNFSCall -- ", konymp.logger.FUNCTION_ENTRY);
            var doubleEncode = new stringEncoder().encodeString(base64);
            var params = {};
            var integrationSvc = kony.sdk.getCurrentInstance().getIntegrationService("uploadImageService");
            this.counter++;
            var tsp = new Date().getTime().toString();
            params.fileNameWithExtension = "signature" + tsp + "." + this.componentInstance._saveAs;
            var rawBytesToUpload = kony.convertToRawBytes(doubleEncode);
            params.rawBytes = rawBytesToUpload;
            params.securityKey = "";
            kony.application.showLoadingScreen("loadskin", "Uploading", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
            integrationSvc.uploadBinaryData("postFile", params, this.onRawBytesUploadStartCallback, this.onRawBytesChunkUploadCompleteCallback, this.onRawBytesUploadCompleteCallback, this.onRawBytesUploadFailureCallback, {});
            konymp.logger.trace("-- Exiting makeNFSCall -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function saveToDevice
     * @private
     * @description: saves encrypted base64 to device
     */
    NativeController.prototype.saveToDevice = function(encryptedImage) {
        try {
            konymp.logger.trace("-- Entering saveToDevice -- ", konymp.logger.FUNCTION_ENTRY);
            kony.application.showLoadingScreen("loadskin", "Saving", constants.LOADING_SCREEN_POSITION_ONLY_CENTER, true, true, null);
            kony.store.setItem("signature", encryptedImage);
            kony.application.dismissLoadingScreen();
            this.componentInstance.onSaveImageSuccess();
            konymp.logger.trace("-- Exiting saveToDevice -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            kony.application.dismissLoadingScreen();
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function getSignatureFromDevice
     * @exposed
     * @description: returns the signature base64
     */
    NativeController.prototype.getSignatureFromDevice = function() {
        try {
            konymp.logger.trace("-- Entering getSignatureFromDevice -- ", konymp.logger.FUNCTION_ENTRY);
            var sig = this.getDecryptedSignature();
            konymp.logger.trace("-- Exiting getSignatureFromDevice -- ", konymp.logger.FUNCTION_EXIT);
            return sig;
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function onRawBytesUploadStartCallback
     * @private
     * @description: callback method for upload start
     */
    NativeController.prototype.onRawBytesUploadStartCallback = function(res) {
        try {
            konymp.logger.trace("-- Entering onRawBytesUploadStartCallback -- ", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.trace("-- Exiting onRawBytesUploadStartCallback -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function onRawBytesChunkUploadCompleteCallback
     * @private
     * @description: callback method for chunck upload complete
     */
    NativeController.prototype.onRawBytesChunkUploadCompleteCallback = function(res) {
        try {
            konymp.logger.trace("-- Entering onRawBytesChunkUploadCompleteCallback -- ", konymp.logger.FUNCTION_ENTRY);
            konymp.logger.trace("-- Exiting onRawBytesChunkUploadCompleteCallback -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function onRawBytesChunkUploadCompleteCallback
     * @private
     * @description: callback method for full upload complete
     */
    NativeController.prototype.onRawBytesUploadCompleteCallback = function(res) {
        try {
            konymp.logger.trace("-- Entering onRawBytesUploadCompleteCallback -- ", konymp.logger.FUNCTION_ENTRY);
            kony.application.dismissLoadingScreen();
            this.componentInstance.onSaveImageSuccess(res);
            konymp.logger.trace("-- Exiting onRawBytesUploadCompleteCallback -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function onRawBytesUploadFailureCallback
     * @private
     * @description: callback method for upload failure
     */
    NativeController.prototype.onRawBytesUploadFailureCallback = function(res) {
        try {
            konymp.logger.trace("-- Entering onRawBytesUploadFailureCallback -- ", konymp.logger.FUNCTION_ENTRY);
            kony.application.dismissLoadingScreen();
            this.componentInstance.onSaveImageFailure(err);
            konymp.logger.trace("-- Exiting onRawBytesUploadFailureCallback -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    return NativeController;
});