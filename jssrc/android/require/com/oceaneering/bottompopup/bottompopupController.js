define("com/oceaneering/bottompopup/userbottompopupController", function() {
    return {};
});
define("com/oceaneering/bottompopup/bottompopupControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnBottomNotNow **/
    AS_Button_e62486b6afc941ffbe282aa6e03121ff: function AS_Button_e62486b6afc941ffbe282aa6e03121ff(eventobject) {
        var self = this;
    }
});
define("com/oceaneering/bottompopup/bottompopupController", ["com/oceaneering/bottompopup/userbottompopupController", "com/oceaneering/bottompopup/bottompopupControllerActions"], function() {
    var controller = require("com/oceaneering/bottompopup/userbottompopupController");
    var actions = require("com/oceaneering/bottompopup/bottompopupControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
