define("userflxTempSegHistoryController", {
    //Type your controller code here 
});
define("flxTempSegHistoryControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTempSegHistoryController", ["userflxTempSegHistoryController", "flxTempSegHistoryControllerActions"], function() {
    var controller = require("userflxTempSegHistoryController");
    var controllerActions = ["flxTempSegHistoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
