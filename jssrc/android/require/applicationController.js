define({
    AS_AppEvents_f8936f7d80214af69e74bc5e204b8557: function AS_AppEvents_f8936f7d80214af69e74bc5e204b8557(eventobject) {
        var self = this;
        var videoDuration = 7;
        var baseTimeInSeconds = new Date().getTime() / 1000;
        var currentTimeInSeconds = baseTimeInSeconds;
        while (currentTimeInSeconds - baseTimeInSeconds < videoDuration) {
            currentTimeInSeconds = new Date().getTime() / 1000;
        }
    },
    appInit: function(params) {
        skinsInit();
        kony.mvc.registry.add("com.konymp.chartjs", "chartjs", "chartjsController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "chartjs",
            "name": "com.konymp.chartjs"
        });
        kony.mvc.registry.add("com.konymp.signaturecapture", "signaturecapture", "signaturecaptureController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "signaturecapture",
            "name": "com.konymp.signaturecapture"
        });
        kony.mvc.registry.add("com.konymp.timepicker", "timepicker", "timepickerController");
        kony.application.registerMaster({
            "namespace": "com.konymp",
            "classname": "timepicker",
            "name": "com.konymp.timepicker"
        });
        kony.mvc.registry.add("com.oceaneering.bottompopup", "bottompopup", "bottompopupController");
        kony.application.registerMaster({
            "namespace": "com.oceaneering",
            "classname": "bottompopup",
            "name": "com.oceaneering.bottompopup"
        });
        kony.mvc.registry.add("com.oceaneering.listboxAssetType", "listboxAssetType", "listboxAssetTypeController");
        kony.application.registerMaster({
            "namespace": "com.oceaneering",
            "classname": "listboxAssetType",
            "name": "com.oceaneering.listboxAssetType"
        });
        kony.mvc.registry.add("com.oceaneering.listboxData", "listboxData", "listboxDataController");
        kony.application.registerMaster({
            "namespace": "com.oceaneering",
            "classname": "listboxData",
            "name": "com.oceaneering.listboxData"
        });
        kony.mvc.registry.add("com.oceaneering.listboxDPR", "listboxDPR", "listboxDPRController");
        kony.application.registerMaster({
            "namespace": "com.oceaneering",
            "classname": "listboxDPR",
            "name": "com.oceaneering.listboxDPR"
        });
        kony.mvc.registry.add("com.oceaneering.listboxSearch", "listboxSearch", "listboxSearchController");
        kony.application.registerMaster({
            "namespace": "com.oceaneering",
            "classname": "listboxSearch",
            "name": "com.oceaneering.listboxSearch"
        });
        kony.mvc.registry.add("com.oceaneering.listboxTRC", "listboxTRC", "listboxTRCController");
        kony.application.registerMaster({
            "namespace": "com.oceaneering",
            "classname": "listboxTRC",
            "name": "com.oceaneering.listboxTRC"
        });
        kony.mvc.registry.add("flxAssetTools", "flxAssetTools", "flxAssetToolsController");
        kony.mvc.registry.add("flxAttachments", "flxAttachments", "flxAttachmentsController");
        kony.mvc.registry.add("flxCrewDprs", "flxCrewDprs", "flxCrewDprsController");
        kony.mvc.registry.add("flxCrewSearchResults", "flxCrewSearchResults", "flxCrewSearchResultsController");
        kony.mvc.registry.add("flxEvents", "flxEvents", "flxEventsController");
        kony.mvc.registry.add("flxTempFilters", "flxTempFilters", "flxTempFiltersController");
        kony.mvc.registry.add("flxTempFiltersType", "flxTempFiltersType", "flxTempFiltersTypeController");
        kony.mvc.registry.add("flxProjectStats", "flxProjectStats", "flxProjectStatsController");
        kony.mvc.registry.add("flxRoaster", "flxRoaster", "flxRoasterController");
        kony.mvc.registry.add("flxSegCrewDetails", "flxSegCrewDetails", "flxSegCrewDetailsController");
        kony.mvc.registry.add("flxDPR", "flxDPR", "flxDPRController");
        kony.mvc.registry.add("flxTempSegDPRHeader", "flxTempSegDPRHeader", "flxTempSegDPRHeaderController");
        kony.mvc.registry.add("flxTempSegHistory", "flxTempSegHistory", "flxTempSegHistoryController");
        kony.mvc.registry.add("flxPersonnel", "flxPersonnel", "flxPersonnelController");
        kony.mvc.registry.add("flxTempSegProjects", "flxTempSegProjects", "flxTempSegProjectsController");
        kony.mvc.registry.add("flxSearchResults", "flxSearchResults", "flxSearchResultsController");
        kony.mvc.registry.add("flxSuperCrew", "flxSuperCrew", "flxSuperCrewController");
        kony.mvc.registry.add("frmAddCrew", "frmAddCrew", "frmAddCrewController");
        kony.mvc.registry.add("frmAddDPR", "frmAddDPR", "frmAddDPRController");
        kony.mvc.registry.add("frmAnalytics", "frmAnalytics", "frmAnalyticsController");
        kony.mvc.registry.add("frmBrowser", "frmBrowser", "frmBrowserController");
        kony.mvc.registry.add("frmCreateDPR", "frmCreateDPR", "frmCreateDPRController");
        kony.mvc.registry.add("frmCrewProject", "frmCrewProject", "frmCrewProjectController");
        kony.mvc.registry.add("frmDashboard", "frmDashboard", "frmDashboardController");
        kony.mvc.registry.add("frmData", "frmData", "frmDataController");
        kony.mvc.registry.add("frmDPRInfo", "frmDPRInfo", "frmDPRInfoController");
        kony.mvc.registry.add("frmHistory", "frmHistory", "frmHistoryController");
        kony.mvc.registry.add("frmNewLogin", "frmNewLogin", "frmNewLoginController");
        kony.mvc.registry.add("frmSignature", "frmSignature", "frmSignatureController");
        setAppBehaviors();
    },
    postAppInitCallBack: function(eventObj) {},
    appmenuseq: function() {
        new kony.mvc.Navigation("frmNewLogin").navigate();
    }
});