define("userflxProjectStatsController", {
    //Type your controller code here 
});
define("flxProjectStatsControllerActions", {
    //Type your controller code here 
});
define("flxProjectStatsController", ["userflxProjectStatsController", "flxProjectStatsControllerActions"], function() {
    var controller = require("userflxProjectStatsController");
    var controllerActions = ["flxProjectStatsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
