define(['./Inherits', './NativeController'], function(Inherits, NativeController) {
    var konyLoggerModule = require('com/konymp/timepicker/konyLogger');
    var konymp = konymp || {};
    var konympJumio = konympJumio || {};
    constants = constants || {};
    konymp.logger = (new konyLoggerModule("time picker Component")) || function() {};
    konymp.logger.setLogLevel("DEBUG");
    konymp.logger.enableServerLogging = true;
    var NativeControllerAndroid = function(componentInstance) {
        konympJumio.controllerContext = this;
        this.componentInstance = componentInstance;
        NativeController.call(this, this.componentInstance);
        this.importClasses();
    };
    Inherits(NativeControllerAndroid, NativeController);
    /**
     * @function importClasses
     * @private
     * @description: this function will import all the classes from the franeworks and store in the nativeClasses variable
     */
    NativeControllerAndroid.prototype.importClasses = function() {
        try {
            konymp.logger.trace("----------Entering importClasses Function---------", konymp.logger.FUNCTION_ENTRY);
            var konyContext = java.import("com.konylabs.android.KonyMain").getActContext();
            var timePickerView = java.import('com.konymp.timepicker.TimePickerView');
            this.timePickerViewObj = new timePickerView(konyContext);
            var timePickerListener = java.newClass('lisClass', 'java.lang.Object', ['com.konymp.timepicker.TimePickerListeners'], {
                onTimeChanged: this.onTimeChanged.bind(this)
            });
            this.timePickerViewObj.setListener(new timePickerListener());
            konymp.logger.trace("----------Exiting importClasses Function---------", konymp.logger.FUNCTION_EXIT);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            if (exception.type === "CUSTOM") {
                throw exception;
            }
        }
    };
    NativeControllerAndroid.prototype.removeFromParent = function() {
        try {
            if (this.isTimerAdded) {
                var previousViewGroup = this.timePickerViewObj.getParent();
                if (previousViewGroup !== null) {
                    var childCount = previousViewGroup.getChildCount();
                    if (childCount > 0) {
                        previousViewGroup.removeAllViews();
                    }
                }
            }
        } catch (exception) {
            throw exception;
        }
    };
    NativeControllerAndroid.prototype.setTime = function(time) {
        try {
            if (time !== undefined && time !== null && time.trim() !== "" && time.includes(':')) {
                var hoursAndMinutes = time.split(':');
                var hour = hoursAndMinutes[0];
                var minute = hoursAndMinutes[1];
                if (hour > 23 || hour < 0 || minute > 59 || minute[1] < 0) {
                    throw {
                        "error": "ComponentConfigurationError",
                        "message": "values are invalid",
                        "code": "2100"
                    };
                }
                this.timePickerViewObj.setHour(hour);
                this.timePickerViewObj.setMinute(minute);
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
    NativeControllerAndroid.prototype.is24HoursView = function() {
        try {
            return this.timePickerViewObj.is24HourView();
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    NativeControllerAndroid.prototype.set24HoursView = function(enable) {
        try {
            this.timePickerViewObj.set24HourView(enable);
        } catch (exception) {
            konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
            throw exception;
        }
    };
    return NativeControllerAndroid;
});