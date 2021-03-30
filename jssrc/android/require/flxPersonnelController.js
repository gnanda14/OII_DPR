define("userflxPersonnelController", {
    //Type your controller code here 
});
define("flxPersonnelControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnDelete **/
    AS_Button_cca053131c044d22877426a76279d998: function AS_Button_cca053131c044d22877426a76279d998(eventobject, context) {
        var self = this;
        this.onClickOfSubmitDPR();
    }
});
define("flxPersonnelController", ["userflxPersonnelController", "flxPersonnelControllerActions"], function() {
    var controller = require("userflxPersonnelController");
    var controllerActions = ["flxPersonnelControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
