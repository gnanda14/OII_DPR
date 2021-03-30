define("userflxRoasterController", {
    //Type your controller code here 
});
define("flxRoasterControllerActions", {
    //Type your controller code here 
});
define("flxRoasterController", ["userflxRoasterController", "flxRoasterControllerActions"], function() {
    var controller = require("userflxRoasterController");
    var controllerActions = ["flxRoasterControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
