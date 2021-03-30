define(function() {
    var konyLoggerModule = require('com/konymp/timepicker/konyLogger');
    var konymp = konymp || {};
    konymp.logger = (new konyLoggerModule("time picker Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    var ControllerImplementation = function(componentInstance, componentName) {
        konymp.logger.trace("----------Entering ControllerImplementation Function---------", konymp.logger.FUNCTION_ENTRY);
        this.componentInstance = componentInstance;
        this.getNativeController = function() {
            try {
                konymp.logger.trace("----------Entering getNativeController Function---------", konymp.logger.FUNCTION_ENTRY);
                if (this.nativeControllerInstance === undefined) {
                    var deviceName = kony.os.deviceInfo().name;
                    var platformName = null;
                    if (deviceName.toLowerCase() === 'iphone' || deviceName.toLowerCase() === 'ipad') {
                        platformName = 'IOS';
                    } else if (deviceName.toLowerCase() === 'android') {
                        platformName = 'Android';
                    }
                    var nativeControllerPath = 'com/konymp/' + 'timepicker' + '/NativeController' + platformName + '.js';
                    var nativeController = require(nativeControllerPath);
                    this.nativeControllerInstance = new nativeController(this.componentInstance);
                }
                konymp.logger.trace("----------Exiting getNativeController Function---------", konymp.logger.FUNCTION_EXIT);
                return this.nativeControllerInstance;
            } catch (exception) {
                konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
                if (exception.type === "CUSTOM") {
                    throw exception;
                }
            }
        };
        this.show = function() {
            try {
                this.getNativeController().show();
            } catch (exception) {
                throw exception;
            }
        };
        this.hide = function() {
            try {
                this.getNativeController().hide();
            } catch (exception) {
                throw exception;
            }
        };
        this.setTime = function(time) {
            try {
                return this.getNativeController().setTime(time);
            } catch (exception) {
                throw exception;
            }
        };
        this.getTime = function() {
            try {
                return this.getNativeController().getTime();
            } catch (exception) {
                throw exception;
            }
        };
        this.setBackgroundColor = function(color) {
            try {
                this.getNativeController().setBackgroundColor(color);
            } catch (exception) {
                throw exception;
            }
        };
        this.is24HoursView = function() {
            try {
                return this.getNativeController().is24HoursView();
            } catch (exception) {
                throw exception;
            }
        };
        this.set24HoursView = function(enable) {
            try {
                this.getNativeController().set24HoursView(enable);
            } catch (exception) {
                throw exception;
            }
        };
        konymp.logger.trace("----------Exiting ControllerImplementation Function---------", konymp.logger.FUNCTION_EXIT);
    };
    return ControllerImplementation;
});