define(['./KonyLogger'], function(konyLoggerModule) {
    var konymp = konymp || {};
    konymp.logger = new konyLoggerModule("signaturecapture/ControllerImplementation");
    var ControllerImplementation = function(componentInstance, componentName) {
        this.componentInstance = componentInstance;
        this.componentName = "signaturecapture";
        this.getNativeController = function() {
            try {
                konymp.logger.trace("-- Entering getNativeController in ControllerImplementation constructor -- ", konymp.logger.FUNCTION_ENTRY);
                if (this.nativeControllerInstance === undefined) {
                    var deviceInfo = kony.os.deviceInfo();
                    var platformName = null;
                    if (deviceInfo.name.toLowerCase() === 'iphone' || deviceInfo.name.toLowerCase() === 'ipad') {
                        platformName = 'IOS';
                    } else if (deviceInfo.name.toLowerCase() === 'android') {
                        platformName = 'Android';
                    } else {
                        platformName = deviceInfo.name.charAt(0).toUpperCase() + deviceInfo.name.slice(1);
                    }
                    var nativeControllerPath = 'com/konymp/' + this.componentName + '/NativeController' + platformName + '.js';
                    var nativeController = require(nativeControllerPath);
                    this.nativeControllerInstance = new nativeController(this.componentInstance);
                }
                konymp.logger.trace("-- Exiting getNativeController in ControllerImplementation constructor -- ", konymp.logger.FUNCTION_EXIT);
                return this.nativeControllerInstance;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                this.componentInstance.onErrorCallback(exception);
            }
        };
    };
    /**
     * @function addSignatureCanvas
     * @private
     * @description: adds the canvas object to the view
     */
    ControllerImplementation.prototype.addSignatureCanvas = function(eventobj, penColor, bgColor, saveType) {
        try {
            konymp.logger.trace("-- Entering addSignatureCanvas -- ", konymp.logger.FUNCTION_ENTRY);
            this.getNativeController().addSignatureCanvas(eventobj, penColor, bgColor, saveType);
            konymp.logger.trace("-- Exiting addSignatureCanvas -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    ControllerImplementation.prototype.validateSignature = function() {
        try {
            konymp.logger.trace("-- Entering validateSignature -- ", konymp.logger.FUNCTION_ENTRY);
            var bool = this.getNativeController().validateSignature();
            this.componentInstance.onCheckValidity(bool);
            konymp.logger.trace("-- Exiting validateSignature -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function onClickClear
     * @private
     * @description: invokes the clear operation
     */
    ControllerImplementation.prototype.onClickClear = function() {
        try {
            konymp.logger.trace("-- Entering onClickClear -- ", konymp.logger.FUNCTION_ENTRY);
            this.getNativeController().onClickClear();
            konymp.logger.trace("-- Exiting onClickClear -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function onClickSave
     * @private
     * @description: invokes the save operation
     */
    ControllerImplementation.prototype.onClickSave = function() {
        try {
            konymp.logger.trace("-- Entering onClickSave -- ", konymp.logger.FUNCTION_ENTRY);
            var imgBase64 = this.getNativeController().onClickSave();
            if (this.componentInstance._saveTo === "Device") {
                var encryptedImage = this.getNativeController().encrypt(imgBase64);
                this.getNativeController().saveToDevice(encryptedImage);
            } else if (this.componentInstance._saveTo === "Network File System") {
                this.getNativeController().makeNFSCall(imgBase64);
            }
            konymp.logger.trace("-- Exiting onClickSave -- ", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
        }
    };
    /**
     * @function getSignatureFromDevice
     * @exposed
     * @description: returns the signature base64
     */
    ControllerImplementation.prototype.getSignatureFromDevice = function() {
        try {
            konymp.logger.trace("-- Entering getSignatureFromDevice -- ", konymp.logger.FUNCTION_ENTRY);
            return this.getNativeController().getSignatureFromDevice();
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            this.componentInstance.onErrorCallback(exception);
            konymp.logger.trace("-- Exiting getSignatureFromDevice -- ", konymp.logger.FUNCTION_EXIT);
        }
    };
    return ControllerImplementation;
});