define("userflxSuperCrewController", {
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
define("flxSuperCrewControllerActions", {
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
define("flxSuperCrewController", ["userflxSuperCrewController", "flxSuperCrewControllerActions"], function() {
    var controller = require("userflxSuperCrewController");
    var controllerActions = ["flxSuperCrewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
