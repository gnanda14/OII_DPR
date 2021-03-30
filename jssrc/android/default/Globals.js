if (typeof(oceaneering) === "undefined") {
    oceaneering = {};
}
oceaneering.oms = {};
oceaneering.oms.appGlobals = {
    client: null, //Client SDK Object
    username: "", //Logged in user's username
    employeeFullName: "", //Logged in user's full name
    employeeId: "", //Logged in user's employee id
    jobPosition: "",
    projectManager: "", //Job position of the current employee
    projectSupervisor: "",
    projectSupervisorId: "",
    profilePic: "",
    selServiceLine: "Asset Integrity",
    selServiceLineValue: "IMDS",
    serviceLines: "",
    appId: "",
    version: ""
};
formStack = [];
currentProject = {
    "projectId": "",
    "projectData": ""
};
oceaneering.oms.environment = "TEST";
switch (oceaneering.oms.environment) {
    case "DEV":
        oceaneering.oms.appGlobals.version = "1.0.1";
        oceaneering.oms.appConfig = {
            appKey: "a32ccf585b1101ae1963e237635d4cae",
            appSecret: "e342de139a01aae99d741dc20a023968",
            serviceUrl: "https://mfdev.oii.oceaneering.com/authService/100000002/appconfig"
        };
        break;
    case "TEST":
        oceaneering.oms.appGlobals.version = "1.0.6";
        oceaneering.oms.appGlobals.appId = "fa742749-f6e6-4137-9f81-8ece4a9156fd";
        oceaneering.oms.appConfig = {
            appKey: "32e4a612046e8dc7ae0606e12710b06",
            appSecret: "b220bcbf55c613ad2cf7176d4bd7a4c",
            serviceUrl: "https://mftst.oii.oceaneering.com/authService/100000002/appconfig"
        };
        break;
    case "PROD":
        oceaneering.oms.appGlobals.version = "1.0.4";
        oceaneering.oms.appGlobals.appId = "e8b30b2e-b5be-485a-a5b4-626ad456caf8";
        oceaneering.oms.appConfig = {
            appKey: "4855bfc22b7fc026af57e810a96aacdf",
            appSecret: "c2f94b59964f5195ba2b890ae8ad53c3",
            serviceUrl: "https://mfprd.oii.oceaneering.com:443/authService/100000002/appconfig"
        };
        break;
}