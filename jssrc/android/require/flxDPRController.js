define("userflxDPRController", {
    //Type your controller code here 
});
define("flxDPRControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxDPRController", ["userflxDPRController", "flxDPRControllerActions"], function() {
    var controller = require("userflxDPRController");
    var controllerActions = ["flxDPRControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
