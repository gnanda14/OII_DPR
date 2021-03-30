define("userflxTempSegProjectsController", {
    //Type your controller code here 
});
define("flxTempSegProjectsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTempSegProjectsController", ["userflxTempSegProjectsController", "flxTempSegProjectsControllerActions"], function() {
    var controller = require("userflxTempSegProjectsController");
    var controllerActions = ["flxTempSegProjectsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
