define("com/konymp/timepicker/usertimepickerController", ['./ControllerImplementation.js'], function(ControllerImplementation) {
    return {
        constructor: function(baseConfig, layoutConfig, pspConfig) {
            var analytics = require("com/konymp/" + "timepicker" + "/analytics");
            analytics.notifyAnalytics();
            this.handler = new ControllerImplementation(this, baseConfig.id);
            this._backgroundColor = "";
            this._time = "";
            this._hoursView = false;
            this.viewAdded = false;
        },
        //Logic for getters/setters of custom properties
        initGettersSetters: function() {
            /**
             * @function
             * @property : backgroundColor
             * @description : this property set the background color for the time picker
             * @return : string
             */
            defineSetter(this, "bgColor", function(value) {
                if (value !== undefined && value !== null) this._backgroundColor = value;
                this._backgroundColor = "55555";
            });
            defineGetter(this, "bgColor", function() {
                return this._backgroundColor;
            });
            /**
             * @function
             * @property : time
             * @description : this property set the time for the time picker
             * @return : string
             */
            defineSetter(this, "time", function(value) {
                if (value !== undefined && value !== null) this._time = value;
            });
            defineGetter(this, "time", function() {
                return this._time;
            });
            defineSetter(this, "invokeByDefault", function(value) {
                if (value !== undefined && value !== null) this._invokeByDefault = value;
            });
            defineGetter(this, "invokeByDefault", function() {
                return this._invokeByDefault;
            });
            /**
             * @function
             * @property : hoursView
             * @description : this property set the hours format of the time picker
             * @return : boolean
             */
            defineSetter(this, "hoursView", function(value) {
                if (value !== undefined && value !== null) this._hoursView = value;
            });
            defineGetter(this, "hoursView", function() {
                return this._hoursView;
            });
        },
        /**
         * @api : show
         * @description : This API will show timepicker
         * @return : null
         */
        show: function() {
            try {
                this.handler.show();
            } catch (exception) {
                throw exception;
            }
        },
        /**
         * @api : hide
         * @description : This API will hide the timepicker
         * @return : null
         */
        hide: function() {
            try {
                this.handler.hide();
            } catch (exception) {
                throw exception;
            }
        },
        /**
         * @api : setTime
         * @description : This API will set time to the time picker
         * @param : time - The required time parameter will set the time
         * @return : null
         */
        setTime: function(time) {
            try {
                this.handler.setTime(time);
            } catch (exception) {
                throw exception;
            }
        },
        /**
         * @api : getTime
         * @description : This API will return the time setted for the time picker
         * @return : time
         */
        getTime: function() {
            try {
                return this.handler.getTime();
            } catch (exception) {
                throw exception;
            }
        },
        /**
         * @api : setBackgroundColor
         * @description : This API will set the background color for the time picker
         * @param : color - The required color parameter will set the background color
         * @return : null
         */
        setBackgroundColor: function(color) {
            try {
                this.handler.setBackgroundColor(color);
            } catch (exception) {
                throw exception;
            }
        },
        /**
         * @api : is24HourView
         * @description : This API will return wheather the time picker is in 24 hours format or not
         * @return : enable
         */
        is24HoursView: function() {
            try {
                return this.handler.is24HoursView();
            } catch (exception) {
                throw exception;
            }
        },
        /**
         * @event : onTimeChanged
         * @description : called when time is changed in the component
         * @param : result {String} This event will give you time when ever it is changed
         * @param : time .
         */
        onTimeChanged: function(time) {}
    };
});
define("com/konymp/timepicker/timepickerControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** postShow defined for timepicker **/
    AS_FlexContainer_i0d0c4869ce247059c65467fafa1e378: function AS_FlexContainer_i0d0c4869ce247059c65467fafa1e378(eventobject) {
        var self = this;
        this.viewAdded = false;
        if (this.invokeByDefault) this.show();
    }
});
define("com/konymp/timepicker/timepickerController", ["com/konymp/timepicker/usertimepickerController", "com/konymp/timepicker/timepickerControllerActions"], function() {
    var controller = require("com/konymp/timepicker/usertimepickerController");
    var actions = require("com/konymp/timepicker/timepickerControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    controller.initializeProperties = function() {
        if (this.initGettersSetters) {
            this.initGettersSetters.apply(this, arguments);
        }
    };
    controller.AS_onCancel_b11314e6464d48edacae90cd01e6e6a3 = function() {
        if (this.onCancel) {
            this.onCancel.apply(this, arguments);
        }
    }
    controller.AS_onApply_fd13b8339e14436190ef03978a6d3789 = function() {
        if (this.onApply) {
            this.onApply.apply(this, arguments);
        }
    }
    return controller;
});
