define("userflxTempFiltersTypeController", {
    //Type your controller code here 
});
define("flxTempFiltersTypeControllerActions", {
    //Type your controller code here 
});
define("flxTempFiltersTypeController", ["userflxTempFiltersTypeController", "flxTempFiltersTypeControllerActions"], function() {
    var controller = require("userflxTempFiltersTypeController");
    var controllerActions = ["flxTempFiltersTypeControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
