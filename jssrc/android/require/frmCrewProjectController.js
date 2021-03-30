/* jshint esnext: true */
/**
 * @Description - Contains the functionality of the DPR Info Form
   crewMembers JSON - Contains a details of all the crew members for the selected project
   isHourlyRate boolean - True if project rate is hourly else false
   dprsAvailable boolean - True if dprs are available for the selected project else false\
   isNewProject boolean - True if a new project is selected else false
*/
define("userfrmCrewProjectController", {
    isHourlyRate: false,
    data: {},
    navigatingFrom: "",
    /**
     * @desc MVC navigation function
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    onNavigate: function(data) {
        try {
            commonUtils.addbottompopup(this);
            this.navigatingFrom = data.navigatingFrom;
            this.dismissBottomPopup();
            this.view.preShow = this.preShow.bind(this, data);
            this.view.postShow = this.postShow.bind(this);
            this.bindActions(data);
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    preShow: function(data) {
        try {
            this.setProjectDetails(data.projectData);
            this.dismissBottomPopup();
            this.resetBottomPopUp();
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    postShow: function() {},
    bindActions: function(inp) {
        try {
            var self = this;
            this.view.flxFAB.onClick = this.onClickOfCreateDPR.bind(this, inp);
            this.view.flxBack.onClick = this.onClickOfBack.bind(this);
            this.view.bottompopup.flxBottomContainer.onClick = this.dismissBottomPopup.bind(this);
            this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
            this.view.onDeviceBack = () => {
                commonUtils.navigateTo("frmDashboard", {
                    "navigatingFrom": "frmCrewProject",
                    "loadProjects": true
                });
                formStack = [];
            };
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    resetBottomNav: function() {
        this.view.imgproject.src = "projectdetails.png";
        this.view.imgDpr.src = "dprbottom.png";
        this.view.imgCrew.src = "crewdetails.png";
        this.view.imgadddprcrew.src = "adddpr.png";
        this.view.lblproject.skin = "sknLblDashboardNormal";
        this.view.lblDpr.skin = "sknLblDashboardNormal";
        this.view.lblcrew.skin = "sknLblDashboardNormal";
    },
    /**
     * @desc Sets project details on the screen
     * @param JSON projectData - contains the selected projects details
     * @retun void
     */
    setProjectDetails: function(projectData) {
        this.view.lblProjectIdValue.text = projectData.ProjectNumber;
        this.view.lblManagerValue.text = (commonUtils.checkIfEmpty(projectData.OpsManager)) ? "-" : projectData.OpsManager;
        this.view.lblClientValue.text = (commonUtils.checkIfEmpty(projectData.Client)) ? "-" : projectData.Client;
        this.view.location.text = (commonUtils.checkIfEmpty(projectData.Location)) ? "" : projectData.Location;
        this.view.lblCountryValue.text = (commonUtils.checkIfEmpty(projectData.Country)) ? "-" : projectData.Country;
        this.view.lblCountryId.text = (commonUtils.checkIfEmpty(projectData.Countryid)) ? "" : projectData.Countryid;
        this.view.lblCountryCode.text = (commonUtils.checkIfEmpty(projectData.CountryCode)) ? "" : projectData.CountryCode;
        this.view.txtDescriptionValue.text = projectData.ProjectDescription;
        this.view.lblServiceLine.text = oceaneering.oms.appGlobals.selServiceLineValue;
        this.view.lblRegion.text = (commonUtils.checkIfEmpty(projectData.RegionDescription)) ? "-" : projectData.RegionDescription;
        if (commonUtils.checkIfEmpty(projectData.StartDate)) {
            this.view.lblProjectStart.text = "";
            this.view.flxStartDate.setVisibility(false);
        } else {
            this.view.lblProjectStart.text = ((projectData.StartDate).substring(0, 10));
            this.view.flxStartDate.setVisibility(true);
        }
        if (commonUtils.checkIfEmpty(projectData.EndDate)) {
            this.view.lblProjectEnd.text = "";
            this.view.flxEndDate.setVisibility(false);
        } else {
            this.view.lblProjectEnd.text = ((projectData.EndDate).substring(0, 10));
            this.view.flxEndDate.setVisibility(true);
        }
        this.isHourlyRate = (projectData.Is_HourlyRate == "true" || projectData.Is_HourlyRate === true) ? true : false;
        this.view.lblActivitySelected.text = commonUtils.checkIfEmpty(projectData.Activity) ? "-" : (projectData.Activity).split(",")[0];
        this.view.lblActivityId.text = commonUtils.checkIfEmpty(projectData.Activity) ? "" : projectData.Activity;
        this.view.lblRateSelected.text = this.isHourlyRate ? "Hourly" : "Daily";
        var widgets = this.view.flxProjectDetailsBody.widgets();
        for (var j = 0; j < widgets.length; j++) {
            this.view[widgets[j].id].setEnabled(false);
        }
    },
    /**
     * @desc Navigates to dashboard screen on click of back
     * @param -
     * @retun void
     */
    onClickOfBack: function() {
        commonUtils.navigateTo("frmDashboard", {
            "navigatingFrom": "frmCrewProject",
            "loadProjects": true
        });
        formStack = [];
    },
    onClickOfCreateDPR: function(inp) {
        this.toggleLoadingIndicator(true);
        formStack.push({
            "frm": "frmCrewProject",
            "params": inp
        });
        this.toggleLoadingIndicator(false);
        commonUtils.navigateTo("frmCreateDPR", inp);
    },
    /**
     * @desc Generates a string from the report date array
     * @param -
     * @retun String - report date in yyyy-mm-dd format
     */
    getReportDate: function(widget) {
        var month = '' + widget.dateComponents[1],
            day = '' + widget.dateComponents[0],
            year = widget.dateComponents[2];
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        if (year == "-1" || year == -1 || year === 0 || year == "0" || day == "00") {
            return null;
        }
        return year + "-" + month + "-" + day;
    },
    dismissPopUp: function() {
        this.view.flxPopupMain.setVisibility(false);
        this.view.flxMain.setEnabled(true);
    },
    // ------------- show Error Pop Up form bottom --------- //
    showBottomPopUp: function(input) {
        var self = this;
        if (commonUtils.checkIfEmpty(input)) {
            var inp = {
                "msg": "Sorry! Something went wrong.Please try again later.",
                "option": "error"
            };
            input = inp;
        }
        this.resetBottomPopUp();
        this.toggleLoadingIndicator(false);
        this.view.bottompopup.flxBottomPopUp.height = "210dp";
        this.view.bottompopup.lblBottomMessage.bottom = "100dp";
        this.view.bottompopup.lblBottomMessage.text = input.msg;
        switch (input.option) {
            case "enable":
                {
                    this.view.bottompopup.flxEnableTouch.setVisibility(true);
                    this.view.bottompopup.imgToShow.setVisibility(true);
                    this.view.bottompopup.flxBottomContainer.onClick = () => {};
                    break;
                }
            case "error":
                {
                    this.view.bottompopup.lblBottomMessage.bottom = "110dp";
                    this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
                    this.view.bottompopup.flxBottomPopUp.height = "200dp";
                    break;
                }
            case "auth":
                {
                    this.view.bottompopup.imgToShow.setVisibility(true);
                    this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
                    this.view.bottompopup.flxBottomContainer.onClick = () => {};
                    break;
                }
            case "errorOk":
                {
                    this.view.bottompopup.lblBottomMessage.bottom = "110dp";
                    this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
                    this.view.bottompopup.flxBottomPopUp.height = "200dp";
                    this.view.bottompopup.btnDismissBottomPopUp.text = "OK";
                    break;
                }
        }
        this.view.bottompopup.setVisibility(true);
        this.view.bottompopup.flxBottomPopUp.animate(kony.ui.createAnimation({
            "100": {
                "height": "220dp",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
        }, {
            "animationEnd": () => {
                self.view.bottompopup.setVisibility(true);
                self.view.bottompopup.flxBottomCover.setVisibility(true);
            }
        });
    },
    dismissBottomPopup: function() {
        var self = this;
        this.toggleLoadingIndicator(false);
        this.view.bottompopup.flxBottomPopUp.animate(kony.ui.createAnimation({
            "100": {
                "height": "0dp",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
        }, {
            "animationEnd": () => {
                self.view.bottompopup.setVisibility(false);
            }
        });
    },
    resetBottomPopUp: function() {
        this.view.bottompopup.flxBottomPopUp.height = "0dp";
        this.view.bottompopup.flxBottomCover.setVisibility(false);
        this.view.bottompopup.lblBottomMessage.text = "";
        this.view.bottompopup.btnDismissBottomPopUp.setVisibility(false);
        this.view.bottompopup.imgToShow.setVisibility(false);
        this.view.bottompopup.flxEnableTouch.setVisibility(false);
        this.view.bottompopup.btnBottomNotNow.text = "Cancel";
        this.view.bottompopup.btnBottomEnable.text = "Delete";
    },
    /**
     * @desc Toggles loading indicator on and off
     * @param boolean value - True: to show loading indicator, false: to hide loading indicator
     * @retun void
     */
    toggleLoadingIndicator: function(value) {
        this.view.flxLoading.setVisibility(value);
        this.view.flxMain.setEnabled(!value);
    },
});
define("frmCrewProjectControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_fe1a332ffd0644be8e4e9f8381b9f114: function AS_FlexContainer_fe1a332ffd0644be8e4e9f8381b9f114(eventobject) {
        var self = this;
        this.onClickOfBack();
    }
});
define("frmCrewProjectController", ["userfrmCrewProjectController", "frmCrewProjectControllerActions"], function() {
    var controller = require("userfrmCrewProjectController");
    var controllerActions = ["frmCrewProjectControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
