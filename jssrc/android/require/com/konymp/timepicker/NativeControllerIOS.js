define(['./Inherits', './NativeController'], function(Inherits, NativeController) {
    var konyLoggerModule = require('com/konymp/timepicker/konyLogger');
    var konymp = konymp || {};
    var konympJumio = konympJumio || {};
    konymp.logger = (new konyLoggerModule("Time Picker Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    var NativeControllerIOS = function(componentInstance) {
        konympJumio.controllerContext = this;
        this.componentInstance = componentInstance;
        NativeController.call(this, this.componentInstance);
        this.importClasses();
    };
    Inherits(NativeControllerIOS, NativeController);
    /**
     * @function importClasses
     * @private
     * @description: this function will import all the classes from the frameworks and store in the nativeClasses variable
     */
    NativeControllerIOS.prototype.importClasses = function() {
        try {
            konymp.logger.trace("----------Entering importClasses Function---------", konymp.logger.FUNCTION_ENTRY);
            var timePickerView = objc.import('TimePickerView');
            this.timePickerViewObj = timePickerView.alloc().initWithCallbackAndView(this.onTimeChanged.bind(this), this.componentInstance.view.navTimepicker.getContainerView());
            konymp.logger.trace("----------Exiting importClasses Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if (exception.type === "CUSTOM") {
                throw exception;
            }
        }
    };
    NativeControllerIOS.prototype.setTime = function(time) {
        try {
            if (time.includes(':')) {
                var hoursAndMinutes = time.split(':');
                var meridiem = "";
                var hour = hoursAndMinutes[0];
                var minute = hoursAndMinutes[1];
                if (hour > 12) {
                    hour -= 12;
                    meridiem = "P";
                } else {
                    meridiem = "A";
                }
                if (hour > 12 || hour < 0 || minute > 59 || minute[1] < 0) {
                    throw {
                        "error": "ComponentConfigurationError",
                        "message": "values are invalid",
                        "code": "2100"
                    };
                }
                this.timePickerViewObj.setTime(hour + ":" + minute + " " + meridiem);
            } else {
                throw {
                    "error": "ComponentConfigurationError",
                    "message": "values are invalid",
                    "code": "2100"
                };
            }
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    NativeControllerIOS.prototype.is24HoursView = function() {
        try {
            throw "Platform doesn't support this API";
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    return NativeControllerIOS;
});