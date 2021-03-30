define("userflxEventsController", {
    //Type your controller code here 
});
define("flxEventsControllerActions", {
    //Type your controller code here 
});
define("flxEventsController", ["userflxEventsController", "flxEventsControllerActions"], function() {
    var controller = require("userflxEventsController");
    var controllerActions = ["flxEventsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
