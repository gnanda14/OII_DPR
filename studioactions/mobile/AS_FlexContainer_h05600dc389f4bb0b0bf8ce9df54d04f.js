function AS_FlexContainer_h05600dc389f4bb0b0bf8ce9df54d04f(eventobject) {
    oceaneering.oms.appGlobals.type = "Crew";
    this.view.flxSelection.isVisible = false;
    var navigationModule = require("navigationModule");
    navigationModule.navigateToFrmDPRInfo(oceaneering.oms.appGlobals.type);
}