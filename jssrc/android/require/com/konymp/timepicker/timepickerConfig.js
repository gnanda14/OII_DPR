define(function() {
    return {
        "properties": [{
            "name": "bgColor",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "hoursView",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "time",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }, {
            "name": "invokeByDefault",
            "enumerable": true,
            "configurable": false,
            "writable": true
        }],
        "apis": ["show", "hide", "getTime", "setTime", "setBackgroundColor", "is24HoursView"],
        "events": ["onCancel", "onApply", "onTimeChanged"]
    }
});