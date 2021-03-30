define("userflxTempFiltersController", {
    //Type your controller code here 
});
define("flxTempFiltersControllerActions", {
    //Type your controller code here 
});
define("flxTempFiltersController", ["userflxTempFiltersController", "flxTempFiltersControllerActions"], function() {
    var controller = require("userflxTempFiltersController");
    var controllerActions = ["flxTempFiltersControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
