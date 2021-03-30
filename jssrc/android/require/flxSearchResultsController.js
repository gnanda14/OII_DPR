define("userflxSearchResultsController", {
    //Type your controller code here 
});
define("flxSearchResultsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSearchResultsController", ["userflxSearchResultsController", "flxSearchResultsControllerActions"], function() {
    var controller = require("userflxSearchResultsController");
    var controllerActions = ["flxSearchResultsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
