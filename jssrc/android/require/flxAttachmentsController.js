define("userflxAttachmentsController", {
    //Type your controller code here 
});
define("flxAttachmentsControllerActions", {
    //Type your controller code here 
});
define("flxAttachmentsController", ["userflxAttachmentsController", "flxAttachmentsControllerActions"], function() {
    var controller = require("userflxAttachmentsController");
    var controllerActions = ["flxAttachmentsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
