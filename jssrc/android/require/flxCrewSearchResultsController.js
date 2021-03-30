define("userflxCrewSearchResultsController", {
    //Type your controller code here 
});
define("flxCrewSearchResultsControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxCrewSearchResultsController", ["userflxCrewSearchResultsController", "flxCrewSearchResultsControllerActions"], function() {
    var controller = require("userflxCrewSearchResultsController");
    var controllerActions = ["flxCrewSearchResultsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
