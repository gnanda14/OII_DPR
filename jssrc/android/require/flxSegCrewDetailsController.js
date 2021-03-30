define("userflxSegCrewDetailsController", {
    getRowIndexValueForDelete: function(obj, context) {
        try {
            var getSelectedRowindex = context.rowIndex;
            this.executeOnParent("onClickOfDeleteCrew", getSelectedRowindex);
        } catch (err) {
            kony.print("Error in getRowIndexValue function - " + JSON.stringify(err));
        }
    },
    getRowIndexValueForEdit: function(obj, context) {
        try {
            var getSelectedRowindex = context.rowIndex;
            this.executeOnParent("onClickOfEditCrew", getSelectedRowindex);
        } catch (err) {
            kony.print("Error in getRowIndexValue function - " + JSON.stringify(err));
        }
    },
});
define("flxSegCrewDetailsControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxSegCrewDetailsController", ["userflxSegCrewDetailsController", "flxSegCrewDetailsControllerActions"], function() {
    var controller = require("userflxSegCrewDetailsController");
    var controllerActions = ["flxSegCrewDetailsControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
