function AS_FlexContainer_e4fa05dc24534cc09b994b51197f516e(eventobject) {
    oceaneering.oms.appGlobals.type = "Supervisor";
    this.view.flxSelection.isVisible = false;
    var navigationModule = require("navigationModule");
    navigationModule.navigateToFrmDPRInfo(oceaneering.oms.appGlobals.type);
}