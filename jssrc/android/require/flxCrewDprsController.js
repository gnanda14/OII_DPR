define("userflxCrewDprsController", {
    //Type your controller code here 
});
define("flxCrewDprsControllerActions", {
    //Type your controller code here 
});
define("flxCrewDprsController", ["userflxCrewDprsController", "flxCrewDprsControllerActions"], function() {
    var controller = require("userflxCrewDprsController");
    var controllerActions = ["flxCrewDprsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
