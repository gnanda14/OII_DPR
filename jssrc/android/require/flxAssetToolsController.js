define("userflxAssetToolsController", {
    //Type your controller code here 
});
define("flxAssetToolsControllerActions", {
    //Type your controller code here 
});
define("flxAssetToolsController", ["userflxAssetToolsController", "flxAssetToolsControllerActions"], function() {
    var controller = require("userflxAssetToolsController");
    var controllerActions = ["flxAssetToolsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
