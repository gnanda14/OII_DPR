define(['./Inherits', './NativeController', './KonyLogger'], function(Inherits, NativeController, konyLoggerModule) {
    var konymp = konymp || {};
    konymp.logger = new konyLoggerModule("signaturecapture/NativeControllerIOS");
    var signatureObj;
    var NativeControllerIOS = function(componentInstance) {
        konymp.logger.trace("-- Start constructor NativeControllerIOS --", konymp.logger.FUNCTION_ENTRY);
        self = this;
        this.componentInstance = componentInstance;
        this.signatureClass = objc.import('KonySignatureCapture'); 
        this.signatureObj = this.signatureClass.alloc().create(this.componentInstance.view.natConSignaturePad.getContainerView());
        this._saveType = "";
        
        NativeController(componentInstance);
        konymp.logger.trace("-- Exit constructor NativeControllerIOS -- ", konymp.logger.FUNCTION_EXIT);
    };
    Inherits(NativeControllerIOS, NativeController);
    NativeControllerIOS.prototype.addSignatureCanvas = function(eventobj, penColor, bgColor, saveType) {
        konymp.logger.trace("-- Entering addSignatureCanvas in NativeControllerIOS -- ", konymp.logger.FUNCTION_ENTRY);
        this._saveType = saveType;	
        
      	if (penColor && bgColor) {
            this.signatureObj.lineColor = penColor;
            this.signatureObj.bgColor = bgColor;
        } 
        konymp.logger.trace("-- Exiting addSignatureCanvas in NativeControllerIOS-- ", konymp.logger.FUNCTION_EXIT);
    };
    NativeControllerIOS.prototype.onClickClear = function() {
        konymp.logger.trace("-- Entering onClickClear in NativeControllerIOS -- ", konymp.logger.FUNCTION_ENTRY);
        this.signatureObj.erase();
        konymp.logger.trace("-- Exiting onClickClear in NativeControllerIOS-- ", konymp.logger.FUNCTION_EXIT);
    };
    NativeControllerIOS.prototype.onClickSave = function() {
        konymp.logger.trace("-- Entering onClickSave in NativeControllerIOS -- ", konymp.logger.FUNCTION_ENTRY);
        var imageBitmap = this.signatureObj.captureSignature();
        return imageBitmap;
    };
    NativeControllerIOS.prototype.validateSignature = function() {
        konymp.logger.trace("-- Entering validateSignature in NativeControllerAndroid -- ", konymp.logger.FUNCTION_ENTRY);
        return this.signatureObj.signatureExists();
    };
    return NativeControllerIOS;
});