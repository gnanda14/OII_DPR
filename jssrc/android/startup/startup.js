//startup.js
var globalhttpheaders = {};
var appConfig = {
    appId: "DPROII",
    appName: "OII-DPR",
    appVersion: "1.0.1",
    isturlbase: "https://mftst.oii.oceaneering.com/services",
    isDebug: true,
    isMFApp: true,
    appKey: "aef0573b3ca1ac719c6c40169a6093a1",
    appSecret: "aff1481a5ce1077fb95caab927dc527",
    serviceUrl: "https://mftst.oii.oceaneering.com/authService/100000002/appconfig",
    svcDoc: {
        "app_version": "1.0",
        "messagingsvc": {
            "appId": "fa742749-f6e6-4137-9f81-8ece4a9156fd",
            "url": "https://mftst.oii.oceaneering.com/kpns/api/v1"
        },
        "baseId": "f42f2601-61d4-42bc-9473-63acaa074191",
        "app_default_version": "1.0",
        "services_meta": {
            "uploadImageService": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/uploadImageService"
            },
            "StagingDBOMS": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/StagingDBOMS"
            },
            "checkAppVersion": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/checkAppVersion"
            },
            "TokenCreateForEmpSearch": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/TokenCreateForEmpSearch"
            },
            "DPRToken": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/DPRToken"
            },
            "OMSAuthentication": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/OMSAuthentication"
            },
            "Project": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/Project"
            },
            "PushNotificationConfigure": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/PushNotificationConfigure"
            },
            "ErrorTracking": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/ErrorTracking"
            },
            "SubmitDPR": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/SubmitDPR"
            },
            "PushAppUsageData": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/PushAppUsageData"
            },
            "GetDPRImage": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/GetDPRImage"
            },
            "OMSAuthenticationNew": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/OMSAuthenticationNew"
            },
            "PeopleSearchResult": {
                "type": "integsvc",
                "version": "1.0",
                "url": "https://mftst.oii.oceaneering.com/services/PeopleSearchResult"
            }
        },
        "selflink": "https://mftst.oii.oceaneering.com/authService/100000002/appconfig",
        "integsvc": {
            "uploadImageService": "https://mftst.oii.oceaneering.com/services/uploadImageService",
            "StagingDBOMS": "https://mftst.oii.oceaneering.com/services/StagingDBOMS",
            "checkAppVersion": "https://mftst.oii.oceaneering.com/services/checkAppVersion",
            "TokenCreateForEmpSearch": "https://mftst.oii.oceaneering.com/services/TokenCreateForEmpSearch",
            "DPRToken": "https://mftst.oii.oceaneering.com/services/DPRToken",
            "OMSAuthentication": "https://mftst.oii.oceaneering.com/services/OMSAuthentication",
            "_internal_logout": "https://mftst.oii.oceaneering.com/services/IST",
            "Project": "https://mftst.oii.oceaneering.com/services/Project",
            "PushNotificationConfigure": "https://mftst.oii.oceaneering.com/services/PushNotificationConfigure",
            "ErrorTracking": "https://mftst.oii.oceaneering.com/services/ErrorTracking",
            "SubmitDPR": "https://mftst.oii.oceaneering.com/services/SubmitDPR",
            "PushAppUsageData": "https://mftst.oii.oceaneering.com/services/PushAppUsageData",
            "GetDPRImage": "https://mftst.oii.oceaneering.com/services/GetDPRImage",
            "OMSAuthenticationNew": "https://mftst.oii.oceaneering.com/services/OMSAuthenticationNew",
            "PeopleSearchResult": "https://mftst.oii.oceaneering.com/services/PeopleSearchResult"
        },
        "service_doc_etag": "0000017863B04E10",
        "appId": "fa742749-f6e6-4137-9f81-8ece4a9156fd",
        "identity_features": {
            "reporting_params_header_allowed": true
        },
        "name": "OII-DPR",
        "reportingsvc": {
            "session": "https://mftst.oii.oceaneering.com/services/IST",
            "custom": "https://mftst.oii.oceaneering.com/services/CMS"
        },
        "Webapp": {
            "url": "https://mftst.oii.oceaneering.com/apps/OIIOMS"
        }
    },
    runtimeAppVersion: "1.0",
    eventTypes: ["FormEntry", "Error", "Crash"],
};
sessionID = "";

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        isMVC: true,
        APILevel: 8400
    })
};

function themeCallBack() {
    initializeGlobalVariables();
    applicationController = require("applicationController");
    callAppMenu();
    kony.application.setApplicationInitializationEvents({
        init: applicationController.appInit,
        preappinit: applicationController.AS_AppEvents_f8936f7d80214af69e74bc5e204b8557,
        postappinit: applicationController.postAppInitCallBack,
        showstartupform: function() {
            new kony.mvc.Navigation("frmNewLogin").navigate();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_NSPDFViewer"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_KonyLogger"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_binarydata"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.ND_binary_util"
    });
    kony.os.loadLibrary({
        "javaclassname": "com.konylabs.ffi.N_WindowsOfflineObjects"
    });
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "appKey": appConfig.appKey,
        "appSecret": appConfig.appSecret,
        "eventTypes": appConfig.eventTypes,
        "serviceUrl": appConfig.serviceUrl
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//This is the entry point for the application.When Locale comes,Local API call will be the entry point.
loadResources();
debugger;