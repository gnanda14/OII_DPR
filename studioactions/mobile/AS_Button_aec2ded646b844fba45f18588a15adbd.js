function AS_Button_aec2ded646b844fba45f18588a15adbd(eventobject) {
    var projectId = this.view.lblProjectID.text.split("-")[1];
    var navigationModule = require("navigationModule");
    navigationModule.navigateToFrmAddCrew(projectId.trim());
}