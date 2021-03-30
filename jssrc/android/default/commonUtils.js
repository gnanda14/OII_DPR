var commonUtils = {
    /**
     * @desc Validates if a variable is empty or not
     * @param <Any> param - Variable to be validated
     * @retun Boolean
     */
    PENDING: "",
    ACCEPTED: "",
    SAVE: "",
    EDIT: "",
    TICK: "",
    USER: "",
    PASSWORD: "",
    ACCEPTSKIN: "sknLblAccepted",
    PENDINGSKIN: "sknLblPending",
    TICKSELECTED: "sknLblFilterSelected",
    TICKUNSELECTED: "sknLblFilterUnselected",
    SEARCHSELECTED: "sknSearchSelected",
    SEARCHUNSELECTED: "sknSearchUnSelected",
    SKNLBLALERT: "sknLblErrorAlert",
    SKNAALERTNORMAL: "sknLblProjectDescValue",
    SKNHEADERNORMAL: "sknLBL1201c1c1c",
    DASHBOARDSELECTD: "sknLblDashboardTopLineSelected",
    DASHBOARDUNSELECTED: "sknLblDashboardTopLineUnselected",
    DASHBOARD_LBL_SEC: "sknLblDashboardSelected",
    DASHBOARD_LBL_UNSEC: "sknLblDashboardUnselected",
    incorrectUserPass: "Incorrect Username or password",
    errMessage: "Sorry, something went wrong. Please try again later",
    DOWNARROW: "",
    UPARROW: "",
    crewList: [],
    TICKSEL: "",
    TICKTEXTUNSEL: "",
    WordFile: "",
    TextFile: "",
    Powerpoint: "",
    Pdf: "",
    excel: "",
    File: "",
    validSupervisor: false,
    checkIfEmpty: function(value) {
        if (value === undefined || value === null || value === "") {
            return true;
        } else {
            if (value.constructor === Object && Object.keys(value).length <= 0) {
                return true;
            } else if (value.constructor === Array && value.length <= 0) {
                return true;
            } else if (value.constructor === String && (value === "null" || value === "NULL" || value === "Null" || value.trim() === "" || (value.trim()).length <= 0)) {
                return true;
            }
        }
        return false;
    },
    /**
     * @desc Validates if a String is empty or not
     * @param String param - String to be validated
     * @retun Boolean
     */
    validateEmptyString: function(param) {
        if (param === undefined || param === null) {
            return true;
        }
        param = param.trim();
        if (param === "") {
            return true;
        }
        return false;
    },
    /**
     * @desc Validates emails id
     * @param String param - Contains the email id to be validated
     * @retun Boolean
     */
    validateEmail: function(param) {
        var emailReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
        if (param === undefined || param === null) {
            return false;
        }
        param = param.trim();
        if (param === "") return false;
        if (emailReg.test(param) === false) {
            return false;
        }
        return true;
    },
    /**
     * @desc Validates mobile number
     * @param String param - Contains the mobile number to be validated
     * @retun Boolean
     */
    validateMobileNumber: function(param) {
        var mobReg = /^(\+)(\d{1,3})(\d{10})$/;
        if (param === undefined || param === null) {
            return false;
        }
        param = param.trim();
        if (param === "") return false;
        if (emailReg.test(param) === false) {
            return false;
        }
        return true;
    },
    exception: function(_this, param, flag) {
        try {
            var deviceInfo = kony.os.deviceInfo();
            if (flag) {
                var inp = {
                    "employee_id": commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.employeeId) ? kony.store.getItem("gblAppDataEmployeeId") : oceaneering.oms.appGlobals.employeeId,
                    "username": commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.username) ? kony.store.getItem("username") : oceaneering.oms.appGlobals.username,
                    "appname": "OII-DPR",
                    "eventname": param.func,
                    "errormessage": commonUtils.checkIfEmpty(param.ex) ? (commonUtils.checkIfEmpty(param.err) ? "" : param.err) : param.ex,
                    "apptype": "Mobile",
                    "appversion": oceaneering.oms.appGlobals.version,
                    "ostype": deviceInfo.model,
                    "osversion": deviceInfo.version
                };
                if (oceaneering.oms.environment == "PROD") {
                    commonUtils.createErrorEntry(inp).then(() => {
                        kony.print("Error Tracking called");
                    }, (err) => {
                        kony.print("Error tracking Error");
                    });
                }
            }
            if (!commonUtils.checkIfEmpty(_this) && !commonUtils.checkIfEmpty(_this.view) && !commonUtils.checkIfEmpty(_this.view.flxLoading)) {
                _this.view.flxLoading.setVisibility(false);
            }
            kony.print("Exception occured" + JSON.stringify(param));
        } catch (ex) {
            kony.print("Exception occured in CommonUtils exception" + JSON.stringify(ex));
        }
    },
    /**
     * @desc Empty function
     * @param -
     * @retun void
     */
    doNothing: function() {
        //DoNothing
    },
    addbottompopup: function(_this) {
        var filterValues = _this.view.widgets();
        var arr = [];
        for (var j = 0; j < filterValues.length; j++) {
            if (!commonUtils.checkIfEmpty(filterValues[j])) arr.push(filterValues[j].id);
        }
        if (arr.indexOf("bottompopup") == -1) {
            var bottompopup = new com.oceaneering.bottompopup({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "bottompopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "skin": "CopyslFbox0de7efbd008044a",
                "top": "0",
                "width": "100%",
                "zIndex": 50,
                "overrides": {
                    "imgToShow": {
                        "src": "face.png"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            _this.view.add(bottompopup);
        }
    },
    getLatestProjectData: function(projectId) {
        commonUtils.get_project_details(projectId).then((res) => {
            currentProject.projectData = res;
            currentProject.projectId = res.ProjectNumber;
        }, (err) => {
            currentProject.projectData = "";
            currentProject.projectId = "";
        });
    },
    get_project_details: function(projectId) {
        try {
            var date = new Date();
            date = commonUtils.formatDateFromCalendarWidget(new Date().getFullYear(), new Date().getMonth() + 1, date.getDate());
            var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
            var operationName = "projectDetails";
            var data = {
                "projectId": projectId,
                maxSyncDateContract: "",
                maxSyncDateCategory: "",
                maxSyncDateSubCategory: "",
                maxSyncDateChildProjects: ""
            };
            var headers = {};
            return new Promise((resolve, reject) => {
                integrationObj.invokeOperation(operationName, headers, data, (res) => {
                    if (!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0 && res.data.length > 0) {
                        resolve(res.data[0].obj_attachmentFile);
                    } else {
                        reject(res.message);
                    }
                }, (err) => {
                    reject(err);
                });
            });
        } catch (ex) {
            kony.print("Exception Occured in Project Details");
        }
    },
    get_project_details_Promise: function(projectId) {
        try {
            var date = new Date();
            date = commonUtils.formatDateFromCalendarWidget(new Date().getFullYear(), new Date().getMonth() + 1, date.getDate());
            var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
            var operationName = "projectDetails";
            var data = {
                "projectId": projectId,
                maxSyncDateContract: date,
                maxSyncDateCategory: date,
                maxSyncDateSubCategory: date,
                maxSyncDateChildProjects: date
            };
            var headers = {};
            return new Promise((resolve, reject) => {
                integrationObj.invokeOperation(operationName, headers, data, (res) => {
                    resolve(res);
                }, (err) => {
                    reject(err);
                });
            });
        } catch (ex) {
            kony.print("Exception Occured in Project Details");
        }
    },
    getProject_Details_staging: function(projectId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Info_get";
        var data = {
            "$filter": "ProjectNumber eq " + projectId
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (res) => {
                if (!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0 && res.project_Info.length > 0) {
                    resolve(res.project_Info[0]);
                } else {
                    resolve([]);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc Calls a service to get the project list for the current employee
     * @param -
     * @retun void
     */
    getProjectList: function() {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "projectsList";
        var data = {
            "empid": oceaneering.oms.appGlobals.employeeId
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (response) => {
                if (!commonUtils.checkIfEmpty(response) && Object.keys(response).length > 0) {
                    resolve(response.res);
                } else {
                    reject(response.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc Calls a service to get the employee Search list for the current employee
     * @param -
     * @retun void
     */
    employeeSearch: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "employeeSearch";
        var data = {
            searchText: inp.searchText,
            resultCount: 30,
            pageNumber: inp.limit
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (res) => {
                if (!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0) {
                    resolve(res.data);
                } else {
                    reject(res.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc Calls a service to get the jobCode for the current employee
     * @param -
     * @retun void
     */
    jobCode: function(searchText) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "JobCode";
        var data = {
            "title": searchText,
            "resultCount": 50
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (res) => {
                if (!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0) {
                    resolve(res.data);
                } else {
                    reject(res.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc Calls a service to get the Crew Position list for the current employee
     * @param -
     * @retun void
     */
    crewPosition: function() {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "crewPosition";
        var data = {
            "serviceLine": oceaneering.oms.appGlobals.selServiceLineValue
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.data);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc Calls a service to get the Details for the current employee
     * @param -
     * @retun void
     */
    employeeDetails: function(empid) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "employeeDetails";
        var data = {
            "empid": empid
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0 & !commonUtils.checkIfEmpty(result.data) && Object.keys(result.data).length > 0 && !commonUtils.checkIfEmpty(result.data.employeeId)) {
                    resolve(result.data);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    navigateTo: function(frmTo, params) {
        var frmObj = new kony.mvc.Navigation(frmTo);
        if (commonUtils.checkIfEmpty(params)) {
            params = {};
        }
        frmObj.navigate(params);
    },
    getPreviousForm: function() {
        if (!commonUtils.checkIfEmpty(formStack) && formStack.length > 0) {
            var frm = formStack.length;
            return formStack[frm - 1];
        } else {
            return "";
        }
    },
    getTimeDiff: function(s2, s1) {
        var time1hours = parseInt(s1.substring(0, 2));
        var time2hours = parseInt(s2.substring(0, 2));
        var time1Min = parseInt(s1.substring(3, 5));
        var time2Min = parseInt(s2.substring(3, 5));
        var date = new Date();
        var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time1hours, time1Min);
        var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time2hours, time2Min);
        var diffH = date2.getHours() - date1.getHours();
        var diffM = date2.getMinutes() - date1.getMinutes();
        var newStartDate = "";
        if (diffH === 0 && diffM === 0) {
            return "24";
        } else if (diffH < 0 || (diffH === 0 && diffM < 0)) {
            newStartDate = new Date(date1.getYear(), date1.getMonth(), date1.getDate() + 1, date1.getHours(), date1.getMinutes(), date1.getSeconds());
            diffH = ((24 - newStartDate.getHours()) * 60 - newStartDate.getMinutes()) + date2.getHours() * 60 + date2.getMinutes();
        } else {
            diffH = (date2.getHours() * 60 + date2.getMinutes()) - (date1.getHours() * 60 + date1.getMinutes());
        }
        var final_mintes = diffH;
        if (diffH > 0) {
            diffH = parseInt(diffH / 60);
        } else {
            diffH = "0";
        }
        diffM = final_mintes % 60;
        if (diffM > 0) {
            return parseFloat(diffH.toString() + "." + diffM.toString());
        } else {
            return diffH.toString();
        }
    },
    recoverDPr: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "recoverDPR";
        var data = {
            "reportId": inp.reportId,
            "novelId": oceaneering.oms.appGlobals.username
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    ////       ----------------------- DPR -----------------------------   ////////s
    submitDPR: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("SubmitDPR");
        var operationName = "uploadDPR";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    submitDPRWithEvents: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("SubmitDPR");
        var operationName = "submitWithRoster";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject({
                        "errmsg": result.message
                    });
                }
            }, (err) => {
                var er = {
                    "func": "submitDPRWithEvents",
                    "err": "Errorcallback " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                reject(err.errmsg);
            });
        });
    },
    uploadSignature: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "signatureDPR";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    if (result.status == "1" && result.message == "Success") {
                        resolve(result);
                    } else {
                        reject(result.message);
                    }
                } else {
                    reject(result.message);
                }
            }, (err) => {
                var er = {
                    "func": "uploadSignature",
                    "err": "Errorcallback " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                reject(err);
            });
        });
    },
    getEventTypes: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "eventTypes";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    if (result.status == "1" && result.message == "Success") {
                        resolve(result.data);
                    }
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getRejectHistory: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("Project");
        var operationName = "rejectHistory";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    if (result.status == "1" && result.message == "Success") {
                        resolve(result);
                    }
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /// ---------------------------------  UPDATE --------------------------------- ////
    UpdateDPRHeader: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    UpdateDPRPersonnel: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportPersonnel_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /// --------------------------------- GET DPR PERSONNEL ---------------------- ///
    getDPRPersonnel: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportPersonnel_get";
        var data = {
            "$filter": " eq " + inp.projectId + " and reportDate eq " + inp.reportDate
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getDPRHeader: function(projectId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_get";
        var data = {
            "$filter": "projectId eq " + projectId
        }; //+ " and reportDate eq " + inp.reportDate};
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getDPRHeaderWithDPRID: function(reportId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_get";
        var data = {
            "$filter": "str_reportid eq " + reportId
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    //  ------------- CREATE DPR----------------------------- //
    createDPRHeader: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    createDPRPersonnel: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportPersonnel_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getAllDPRForProject: function(projectId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_get";
        var data = {
            "$filter": "str_projid eq " + projectId,
            "$orderby": "dte_reportdate desc"
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getAllDPRForProjectToday: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_get";
        var data = {
            "$filter": "str_projid eq " + inp.projectId + " and dte_reportdate eq " + inp.date + " and lng_status eq 0",
            "$orderby": "dte_lastModified desc"
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc get the DPRs's with given Date
     * @param -
     * @retun void
     */
    getDPRWithDPRID: function(reportid) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportPersonnel_get";
        var data = {
            "$filter": "str_dprId eq " + reportid
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    //Service call for fetching analytics data based on custom query
    getDPRAnalyticsData: function(inputs) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_DPRAnalytics";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inputs, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getAllDPRForEMPID: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_get";
        var data = {
            "$filter": "str_supervisor eq " + inp.employeeId + " or str_supervisor eq " + inp.employeeId
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    createProjectInfo: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Info_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    updateProjectInfo: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Info_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    /**
     * @desc Formats a date object into a string in the format YYYY-MM-DD
     * @param String year - Contains year of the date
     * @param String month - Contains month of the date
     * @param String day - Contains year of the day
     * @retun String - YYYY-MM-DD date
     */
    formatDateFromCalendarWidget: function(year, month, day) {
        if (month.toString().length < 2) month = '0' + month;
        if (day.toString().length < 2) day = '0' + day;
        return year + "-" + month + "-" + day;
    },
    getDPRPersonnelHistory: function(empid) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportPersonnel_get";
        var data = {
            "$filter": "str_employeeid eq " + empid
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    var dprIds = [];
                    var dprheader = result.OMS_OP_DailyReportPersonnel;
                    for (var j = 0; j < dprheader.length; j++) {
                        dprIds.push(commonUtils.getDPRHeaderWithDPRID(dprheader[j].str_dprId));
                    }
                    if (dprIds.length > 0) {
                        Promise.all(dprIds).then((res) => {
                            var final = [];
                            if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                                for (var j = 0; j < res.length; j++) {
                                    var value = res[j].OMS_OP_Dailyreportheader;
                                    if (!commonUtils.checkIfEmpty(value) && value.length > 0) {
                                        value = value[0];
                                    }
                                    final.push({
                                        header: value,
                                        personnelList: dprheader[j]
                                    });
                                }
                                if (final.length > 0) {
                                    resolve(final);
                                } else {
                                    resolve([]);
                                }
                            } else {
                                resolve([]);
                            }
                        }).catch((err) => {
                            reject();
                        });
                    } else {
                        resolve();
                    }
                } else {
                    resolve();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getDPRHeaderHistory: function(empid) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_get";
        var data = {
            "$filter": "str_CreatedBy eq " + empid + " or str_lastModifiedBy eq  " + empid,
            "$orderby": "dte_reportdate desc"
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    resolve();
                }
            }, (err) => {
                resolve();
            });
        });
    },
    createCrewInfo: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_crew_OMS_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    updateCrewInfo: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_crew_OMS_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getCrewInfo: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_crew_OMS_get";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getServiceLines: function() {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_serviceLine_DPR_get";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, {}, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.serviceLine_DPR);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteCrewInfo: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_crew_OMS_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteDprHeader: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Dailyreportheader_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    commonUtils.getDPRWithDPRID(inp.str_reportid).then((res) => {
                        var response = res.OMS_OP_DailyReportPersonnel;
                        var promise = [];
                        for (var j = 0; j < response.length; j++) {
                            promise.push(commonUtils.deletePersonnel(response[j]));
                        }
                        Promise.all(promise).then((res) => {
                            resolve(true);
                        }).catch((err) => {
                            reject();
                        });
                    }, (err) => {
                        reject();
                    });
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deletePersonnel: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportPersonnel_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getProjectSuperCrewList: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Details_get";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0 && !commonUtils.checkIfEmpty(result.project_Details) && result.project_Details.length > 0) {
                    resolve(result.project_Details);
                } else {
                    resolve([]);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    createProjectSuperCrew: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Details_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    updateProjectSuperCrew: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Details_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    // -------------------------- Events ------------------------------//
    getDPREvents: function(reportId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportEvent_get";
        var data = {
            "$filter": "str_report_id eq " + reportId
        };
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportEvent);
                } else {
                    resolve([]);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    updateDPREvent: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportEvent_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportEvent);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    addDPREvent: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportEvent_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportEvent);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteDPREvent: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportEvent_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportEvent);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getEventActivities: function(projectid) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_EventActivity_get";
        var headers = {};
        var data = {
            "$filter": "projectid eq " + projectid
        };
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_EventActivity);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    addEventActivity: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_EventActivity_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_EventActivity);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getEventsResponse: function(data) {
        var arr = [];
        if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
            for (var j = 0; j < data.length; j++) {
                var res = {
                    "reportId": data[j].str_report_id,
                    "lineNumber": j + 1,
                    "startTime": data[j].str_starttime,
                    "endTime": commonUtils.checkIfEmpty(data[j].str_endtime) ? null : data[j].str_endtime,
                    "activity": commonUtils.checkIfEmpty(data[j].str_activity) ? null : data[j].str_activity,
                    "diveNumber": commonUtils.checkIfEmpty(data[j].lng_divenumber) ? null : parseInt(data[j].lng_divenumber),
                    "depth": commonUtils.checkIfEmpty(data[j].dbl_depth) ? null : parseInt(data[j].dbl_depth),
                    "eventType": commonUtils.checkIfEmpty(data[j].lng_Eventtype) ? null : parseInt(data[j].lng_Eventtype),
                    "systemId": commonUtils.checkIfEmpty(data[j].str_systemid) ? null : data[j].str_systemid,
                    "depthUom": commonUtils.checkIfEmpty(data[j].lng_DepthUom) ? null : parseInt(data[j].lng_DepthUom),
                    "milestone": data[j].bln_Milestone === false || data[j].bln_Milestone == "false" ? false : true
                };
                arr.push(res);
            }
        }
        return arr;
    },
    getRosterResponse: function(data) {
        if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
            var arr = [];
            for (var j = 0; j < data.length; j++) {
                var res = {
                    "reportId": data[j].str_report_id,
                    "lineNumber": j + 1,
                    "employeeName": data[j].str_name,
                    "crewclass": commonUtils.checkIfEmpty(data[j].str_class) ? null : data[j].str_class,
                    "division": commonUtils.checkIfEmpty(data[j].str_division) ? null : data[j].str_division,
                    "room": commonUtils.checkIfEmpty(data[j].str_room) ? null : data[j].str_room,
                    "phone": commonUtils.checkIfEmpty(data[j].str_phone) ? null : data[j].str_phone,
                    "raftType": (commonUtils.checkIfEmpty(data[j].lng_rafttype) || data[j].lng_rafttype == "81061") ? "N/A" : (data[j].lng_rafttype == "81062") ? "Port" : "StarBoard",
                    "raftTypeid": commonUtils.checkIfEmpty(data[j].lng_rafttype) ? 81061 : parseInt(data[j].lng_rafttype),
                    "crewMember": (data[j].bln_client === false || data[j].bln_client == "false") ? false : true,
                    "adhoc": (data[j].bln_ADHOC === false || data[j].bln_ADHOC == "false") ? false : true,
                    "vor": commonUtils.checkIfEmpty(data[j].str_VOR) ? null : data[j].str_VOR,
                    /*mob */
                    "expat": data[j].bln_mob === false || data[j].bln_mob == "false" ? false : true,
                    /*demob*/
                    "localTechnician": data[j].bln_demob === false || data[j].bln_demob == "false" ? false : true,
                    /*ADHOC */
                    "RosterStatus": commonUtils.checkIfEmpty(data[j].bln_ADHOC) ? 81300 : data[j].bln_ADHOC == "true" ? 81301 : 81300,
                };
                arr.push(res);
            }
            return arr;
        }
    },
    calculateHoursEvents: function(data) {
        var dte = commonUtils.formatDate(new Date());
        data.sort((a, b) => {
            return new Date(dte + "T" + a.str_starttime) - new Date(dte + "T" + b.str_starttime);
        });
        var diffH = 0;
        var diffM = 0;
        var overlap = false;
        var startTime = "";
        var endTime = "";
        var totalHours = 0;
        var totalMin = 0;
        var flag24 = false;
        if (!commonUtils.checkIfEmpty(data) && (data.length > 0)) {
            for (var j = 0; j < data.length; j++) {
                if (data[j].bln_Milestone === false || data[j].bln_Milestone == "false") {
                    startTime = data[j].str_starttime;
                    endTime = data[j].str_endtime;
                    var time1hours = parseInt(startTime.substring(0, 2));
                    var time2hours = parseInt(endTime.substring(0, 2));
                    var time1Min = parseInt(startTime.substring(3, 5));
                    var time2Min = parseInt(endTime.substring(3, 5));
                    var date = new Date();
                    var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time1hours, time1Min);
                    var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time2hours, time2Min);
                    diffH = date2.getHours() - date1.getHours();
                    diffM = date2.getMinutes() - date1.getMinutes();
                    if (j > 0) {
                        var end = (data[j - 1].str_endtime);
                        var start = (data[j].str_starttime);
                        var dat = commonUtils.formatDate(new Date());
                        var startOver = new Date(dat + "T" + start);
                        var endOver = new Date(dat + "T" + end);
                        if (startOver < endOver) {
                            // overlap = true;
                        }
                        if (data[j - 1].str_endtime == data[j].str_endtime && data[j - 1].str_starttime == data[j].str_starttime) {
                            // overlap = true;
                        }
                    }
                    var newStartDate = "";
                    if (diffH === 0 && diffM === 0) {
                        diffH = 24;
                        diffM = 0;
                    } else {
                        if (diffH < 0 || (diffH === 0 && diffM < 0)) {
                            newStartDate = new Date(date1.getYear(), date1.getMonth(), date1.getDate() + 1, date1.getHours(), date1.getMinutes(), date1.getSeconds());
                            diffH = ((24 - newStartDate.getHours()) * 60 - newStartDate.getMinutes()) + date2.getHours() * 60 + date2.getMinutes();
                        } else {
                            diffH = (date2.getHours() * 60 + date2.getMinutes()) - (date1.getHours() * 60 + date1.getMinutes());
                        }
                        var final_mintes = diffH;
                        if (diffH > 0) {
                            diffH = parseInt(diffH / 60);
                        } else {
                            diffH = 0;
                        }
                        diffM = final_mintes % 60;
                    }
                    totalHours = totalHours + diffH;
                    totalMin = totalMin + diffM;
                    if (totalMin >= 60) {
                        totalHours = totalHours + parseInt(totalMin / 60);
                        totalMin = totalMin % 60;
                    }
                }
            }
        }
        return {
            "hours": totalHours,
            "minutes": totalMin,
            "overlap": overlap
        };
    },
    //---------------------------------------- ROASTER ----------------------------------------- //
    getDPRRoaster: function(reportId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportRoster_get";
        var headers = {};
        var data = {
            "$filter": "str_report_id eq " + reportId
        };
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportRoster);
                } else {
                    resolve([]);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    addDPRRoaster: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportRoster_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportRoster);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    updateDPRRoaster: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportRoster_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportRoster);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteDPRRoaster: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportRoster_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportRoster);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    saveRoasterCreate: function(data) {
        var roaster = {};
        roaster.lng_linenumber = 1;
        roaster.str_reportid = Date.now();
        roaster.str_report_id = data.reportId;
        roaster.str_name = data.name;
        roaster.str_class = data.crewPosition;
        roaster.str_date = commonUtils.formatDate(new Date());
        roaster.str_division = null;
        roaster.str_room = null;
        roaster.str_phone = null;
        roaster.lng_rafttype = null;
        roaster.str_VOR = null;
        roaster.bln_client = false;
        roaster.bln_mob = false;
        roaster.bln_demob = false;
        roaster.bln_ADHOC = null;
        commonUtils.addDPRRoaster(roaster).then((res) => {
            kony.print("Added in the table roaster");
        }, (err) => {
            kony.print("failure in the adding row in table roaster");
        });
    },
    //  ------------- CREATE DPR----------------------------- //
    createErrorEntry: function(inp) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("ErrorTracking");
        var operationName = "ErrorTrack";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, inp, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result);
                } else {
                    reject(result.message);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    //-------------------------------- Asset/ Tools -----------------------------------------------------------
    getDPRAssetsTools: function(reportId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportAssetsTools_get";
        var headers = {};
        var data = {
            "$filter": "str_report_id eq " + reportId
        };
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportAssetsTools);
                } else {
                    resolve([]);
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    addDPRAssetsTools: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportAssetsTools_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportAssetsTools);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    updateDPRAssetsTools: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportAssetsTools_update";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportAssetsTools);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteDPRAssetsTools: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_DailyReportAssetsTools_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_DailyReportAssetsTools);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    addAttachment: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    addAttachmentList: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_List_create";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments_List);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getAttachments: function(reportId, docid) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_get";
        var headers = {};
        var data = {
            "$filter": "reportId eq " + reportId + " and str_docid eq " + docid
        };
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getAttachmentsWithDocid: function(param) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_get";
        var headers = {};
        var data = {
            "$filter": param
        };
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    getAttachmentsForSubmit: function(reportId) {
        return new Promise((resolve, reject) => {
            commonUtils.getAttachmentsList(reportId).then((res) => {
                if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                    var filter = "str_docid eq " + res[0].str_docid;
                    for (var j = 1; j < res.length; j++) {
                        filter += " or str_docid eq " + res[j].str_docid;
                    }
                    commonUtils.getAttachmentsWithDocid(filter).then((response) => {
                        resolve(response);
                    }, (err) => {
                        reject();
                    });
                } else {
                    reject();
                }
            }, (err) => {
                reject();
            });
        });
    },
    getAttachmentsList: function(reportId) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_List_get";
        var headers = {};
        var data = {
            "$filter": "reportId eq " + reportId
        };
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments_List);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteAttachment: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    deleteAttachmentList: function(data) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_OMS_OP_Attachments_List_delete";
        var headers = {};
        return new Promise((resolve, reject) => {
            integrationObj.invokeOperation(operationName, headers, data, (result) => {
                if (!commonUtils.checkIfEmpty(result) && Object.keys(result).length > 0) {
                    resolve(result.OMS_OP_Attachments_List);
                } else {
                    reject();
                }
            }, (err) => {
                reject(err);
            });
        });
    },
    AssetsToolsResponse: function(response) {
        var res = [];
        for (var j = 0; j < response.length; j++) {
            var temp = response[j];
            var assetsTools = {
                "lineNumber": j + 1,
                "reportId": commonUtils.checkIfEmpty(temp.str_report_id) ? "" : temp.str_report_id,
                "chargeType": commonUtils.checkIfEmpty(temp.lng_chargeType) ? "" : temp.lng_chargeType,
                "assetId": null,
                "idNumber": commonUtils.checkIfEmpty(temp.str_idNumber) || temp.str_idNumber == "None" ? "" : temp.str_idNumber,
                "description": commonUtils.checkIfEmpty(temp.str_description) || temp.str_description == "None" ? "" : temp.str_description,
                "quantity": commonUtils.checkIfEmpty(temp.dbl_quantity) || temp.dbl_quantity == "None" ? 1 : parseFloat(temp.dbl_quantity),
                "assetType": commonUtils.checkIfEmpty(temp.str_assetType) || temp.str_assetType == "None" ? "" : temp.str_assetType,
                "childProject": commonUtils.checkIfEmpty(temp.str_childProject) || temp.str_childProject == "None" ? "" : temp.str_childProject,
                "sourceType": commonUtils.checkIfEmpty(temp.str_sourceType) || temp.str_sourceType == "None" ? "" : temp.str_sourceType,
                "activity": commonUtils.checkIfEmpty(temp.str_activity) || temp.str_activity == "None" ? "" : (temp.str_activity).split(",")[1],
                "category": commonUtils.checkIfEmpty(temp.str_category) || temp.str_category == "None" ? "" : (temp.str_category).split(",")[1],
                "subCategory": commonUtils.checkIfEmpty(temp.str_subCategory) || temp.str_subCategory == "None" ? "" : (temp.str_subCategory).split(",")[1],
                "contractSerialId": commonUtils.checkIfEmpty(temp.str_contractSerialId) || temp.str_contractSerialId == "None" ? "" : temp.str_contractSerialId,
                "serialId": commonUtils.checkIfEmpty(temp.str_serialId) || temp.str_serialId == "None" ? "" : temp.str_serialId,
                "assetSubType": commonUtils.checkIfEmpty(temp.str_assetSubType) || temp.str_assetSubType == "None" ? "" : temp.str_assetSubType,
                "assetSubType2": commonUtils.checkIfEmpty(temp.str_assetSubType2) ? "" : temp.str_assetSubType2,
                "dailyRate": commonUtils.checkIfEmpty(temp.dbl_dailyRate) || temp.dbl_quantity == "None" ? "" : parseFloat(temp.dbl_dailyRate),
                "startDate": commonUtils.checkIfEmpty(temp.dte_startDate) ? "" : temp.dte_startDate,
                "endDate": commonUtils.checkIfEmpty(temp.dte_endDate) ? "" : temp.dte_endDate,
                "clientAfeNumber": commonUtils.checkIfEmpty(temp.str_clientAfeNumber) || temp.str_clientAfeNumber == "None" ? "" : temp.str_clientAfeNumber,
                "customerEquipment": commonUtils.checkIfEmpty(temp.bln_customerEquipment) || temp.bln_customerEquipment == "None" ? false : temp.bln_customerEquipment,
                "businessUnit": commonUtils.checkIfEmpty(temp.str_businessUnit) || temp.str_businessUnit == "None" ? "" : temp.str_businessUnit,
                "entryFrom": null,
                "uom": null,
                "currency": null
            };
            res.push(assetsTools);
        }
        return res;
    },
    //--------------------------------------------------------------------------------------------------------------------
    isFloat: function(n) {
        return n === +n && n !== (n | 0);
    },
    getDPRPersonnelReturn: function(personnelDta) {
        try {
            var result = [];
            for (var j = 0; j < personnelDta.length; j++) {
                var personnel = Object.assign({}, personnelDta[j]);
                var obj = {
                    "reportId": commonUtils.checkIfEmpty(personnel.str_dprId) ? "" : personnel.str_dprId,
                    "systemId": commonUtils.checkIfEmpty(personnel.str_systemid) ? "" : "PROJ_" + personnel.str_systemid,
                    "lineNumber": parseInt(j + 1),
                    "employeeId": commonUtils.checkIfEmpty(personnel.str_employeeid) ? "" : personnel.str_employeeid,
                    "employeeName": commonUtils.checkIfEmpty(personnel.str_employeeName) ? "" : personnel.str_employeeName,
                    "arrival": commonUtils.checkIfEmpty(personnel.dte_arrival) ? "" : ((personnel.dte_arrival).substring(0, 10) + (commonUtils.checkIfEmpty(personnel.str_arrivalTime) ? "" : " " + (personnel.str_arrivalTime).substring(11, 19))),
                    "departure": commonUtils.checkIfEmpty(personnel.dte_departure) ? "" : ((personnel.dte_departure).substring(0, 10) + (commonUtils.checkIfEmpty(personnel.str_departTime) ? "" : " " + (personnel.str_departTime).substring(11, 19))),
                    "shiftType": commonUtils.checkIfEmpty(personnel.lng_shifttype) ? "" : parseInt(personnel.lng_shifttype),
                    "shiftTypeName": commonUtils.checkIfEmpty(personnel.lng_shifttype) ? "" : commonUtils.getShiftTypeFromId(personnel.lng_shifttype),
                    "shiftStart": commonUtils.checkIfEmpty(personnel.dte_shiftstart) ? "" : personnel.dte_shiftstart,
                    "shiftEnd": commonUtils.checkIfEmpty(personnel.dte_shiftend) ? "" : personnel.dte_shiftend,
                    "otShiftStart": commonUtils.checkIfEmpty(personnel.dte_otshiftstart) ? "" : personnel.dte_otshiftstart,
                    "otShiftEnd": commonUtils.checkIfEmpty(personnel.dte_otshiftend) ? "" : personnel.dte_otshiftend,
                    "transitStatus": commonUtils.checkIfEmpty(personnel.bln_transstatus) ? "" : personnel.bln_transstatus == "true" || personnel.bln_transstatus === true ? true : false,
                    "otHourCompany": commonUtils.checkIfEmpty(personnel.dbl_othourcompany) ? "" : parseFloat(personnel.dbl_othourcompany),
                    "otHoursClient": commonUtils.checkIfEmpty(personnel.dbl_othoursclient) ? "" : parseFloat(personnel.dbl_othoursclient),
                    "otHours": commonUtils.checkIfEmpty(personnel.dbl_othoursclient) ? "" : parseFloat(personnel.dbl_othoursclient),
                    "shiftHour": commonUtils.checkIfEmpty(personnel.dbl_shifthour) ? "" : parseInt(personnel.dbl_shifthour),
                    "billingHour": commonUtils.checkIfEmpty(personnel.dbl_shifthour) ? "" : parseInt(personnel.dbl_shifthour),
                    "standByRate": commonUtils.checkIfEmpty(personnel.dbl_standbyrate) ? "" : parseFloat(personnel.dbl_standbyrate),
                    "nondivrate": commonUtils.checkIfEmpty(personnel.dbl_nondivrate) ? "" : parseFloat(personnel.dbl_nondivrate),
                    "standardRate": commonUtils.checkIfEmpty(personnel.dbl_stdrate) ? "" : parseFloat(personnel.dbl_stdrate),
                    "overTimeRate": commonUtils.checkIfEmpty(personnel.dbl_ovtrate) ? "" : parseFloat(personnel.dbl_ovtrate),
                    "diveDepth": commonUtils.checkIfEmpty(personnel.dbl_divedepth) ? "" : parseFloat(personnel.dbl_divedepth),
                    "depthUom": commonUtils.checkIfEmpty(personnel.lng_DepthUom) ? "" : personnel.lng_DepthUom,
                    "comments": commonUtils.checkIfEmpty(personnel.str_comments) ? "" : personnel.str_comments,
                    "trcCodes": commonUtils.checkIfEmpty(personnel.str_trcCodes) ? "" : personnel.str_trcCodes,
                    "positionCode": commonUtils.checkIfEmpty(personnel.str_positioncode) ? "" : personnel.str_positioncode,
                    "crewpositionCode": null,
                    "crewPositionId": commonUtils.checkIfEmpty(personnel.str_crewpositioncode) ? "" : parseInt(personnel.str_crewpositioncode.trim()),
                    "createdBy": commonUtils.checkIfEmpty(personnel.str_createdBy) ? "" : personnel.str_createdBy,
                    "extracrew": false,
                    "penetration": null,
                    "adsBonus": false,
                    "uom": null,
                    "currency": null,
                    "SourceType": commonUtils.checkIfEmpty(personnel.sourceType) ? "" : personnel.sourceType,
                    "ChildProject": commonUtils.checkIfEmpty(personnel.ProjectNumber) ? "" : personnel.ProjectNumber,
                    "Activity": commonUtils.checkIfEmpty(personnel.Activity) || personnel.Activity == "None" ? "" : (personnel.Activity).split(",")[1],
                    "Category": commonUtils.checkIfEmpty(personnel.category) || personnel.category == "None" ? "" : (personnel.category).split(",")[1],
                    "SubCategory": commonUtils.checkIfEmpty(personnel.subCategory) || personnel.subCategory == "None" ? "" : (personnel.subCategory),
                };
                if (!commonUtils.checkIfEmpty(personnel.str_arrivalTime) && commonUtils.checkIfEmpty(personnel.dte_arrival)) {
                    obj.arrival = commonUtils.formatDate(new Date()) + " " + (personnel.str_arrivalTime).substring(11, 19);
                }
                if (!commonUtils.checkIfEmpty(personnel.str_departTime) && commonUtils.checkIfEmpty(personnel.dte_departure)) {
                    obj.departure = commonUtils.formatDate(new Date()) + " " + (personnel.str_departTime).substring(11, 19);
                }
                Object.keys(obj).forEach((key) => {
                    if (obj[key] === null || obj[key] === "" || obj[key] === undefined) obj[key] = null;
                });
                result.push(obj);
            }
            return result;
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Checks getDateFromText
     * @param -
     * @retun void
     */
    getDateFromText: function(date) {
        var month = "";
        var year = "";
        var day = "";
        var arr = date.split("-");
        return [arr[2], arr[1], arr[0], 0, 0, 0];
    },
    getDPRHeaderReturn: function(headerData) {
        try {
            var header = {
                "reportId": commonUtils.checkIfEmpty(headerData.str_reportid) ? "" : headerData.str_reportid,
                "rmNumber": commonUtils.checkIfEmpty(headerData.str_rmnumber) ? "" : headerData.str_rmnumber,
                "projectId": commonUtils.checkIfEmpty(headerData.str_projid) ? "" : headerData.str_projid,
                "systemId": commonUtils.checkIfEmpty(headerData.str_systemid) ? "" : "PROJ_" + headerData.str_systemid,
                "reportDate": commonUtils.checkIfEmpty(headerData.dte_reportdate) ? "" : (headerData.dte_reportdate).substring(0, 10),
                "supervisor": oceaneering.oms.appGlobals.employeeId,
                "isMobileCreated": true,
                "departmentCode": commonUtils.checkIfEmpty(headerData.departmentCode) ? 4 : headerData.departmentCode,
                "location": commonUtils.checkIfEmpty(headerData.str_location) ? "" : headerData.str_location,
                "opsManager": commonUtils.checkIfEmpty(headerData.str_opsmanager) ? "" : headerData.str_opsmanager,
                "clientName": commonUtils.checkIfEmpty(headerData.str_clientname) ? "" : headerData.str_clientname,
                "clientcontact": commonUtils.checkIfEmpty(headerData.str_clientcontact) ? "" : headerData.str_clientcontact,
                "projectActivity": commonUtils.checkIfEmpty(headerData.str_ProjectActivity) ? "" : (headerData.str_ProjectActivity).split(",")[1],
                "createdBy": commonUtils.checkIfEmpty(headerData.str_CreatedByUserName) ? "" : headerData.str_CreatedByUserName,
                "countryId": commonUtils.checkIfEmpty(headerData.int_CountryId) ? "" : parseInt(headerData.int_CountryId),
                "status": commonUtils.checkIfEmpty(headerData.lng_status) ? "" : parseInt(headerData.lng_status),
                "hourlyRate": commonUtils.checkIfEmpty(headerData.bln_hourlyrate) ? "" : headerData.bln_hourlyrate == "true" || headerData.bln_hourlyrate === true ? true : false,
                "RejectedOnshore": false,
                "comment": commonUtils.checkIfEmpty(headerData.str_Comment) ? "" : headerData.str_Comment,
                "systemRate": commonUtils.checkIfEmpty(headerData.dbl_systemrate) ? "" : headerData.dbl_systemrate,
                "spreadRate": commonUtils.checkIfEmpty(headerData.dbl_spreadrate) ? "" : headerData.dbl_spreadrate,
                "depthChartId": commonUtils.checkIfEmpty(headerData.lng_depthchartid) ? "" : headerData.lng_depthchartid,
                "penetrationRate": commonUtils.checkIfEmpty(headerData.dbl_penetrationrate) ? "" : headerData.dbl_penetrationrate,
                "miniRmNumber": commonUtils.checkIfEmpty(headerData.str_minirmnumber) ? "" : headerData.str_minirmnumber,
                "areaLocation": commonUtils.checkIfEmpty(headerData.lng_arealocation) ? "" : headerData.lng_arealocation,
                "grid": commonUtils.checkIfEmpty(headerData.str_grid) ? "" : headerData.str_grid,
                "reportType": commonUtils.checkIfEmpty(headerData.lng_reporttype) ? "" : headerData.lng_reporttype,
                "sja": null,
                /// -------------- Project Conditions / Project Status / Comments / Future      
                "seas": commonUtils.checkIfEmpty(headerData.str_Seas) ? "" : headerData.str_Seas,
                "winds": commonUtils.checkIfEmpty(headerData.str_Winds) ? "" : headerData.str_Winds,
                "current": commonUtils.checkIfEmpty(headerData.str_current) ? "" : headerData.str_current,
                "skies": commonUtils.checkIfEmpty(headerData.str_Skies) ? "" : headerData.str_Skies,
                "visibility": commonUtils.checkIfEmpty(headerData.str_Visibility) ? "" : headerData.str_Visibility,
                "longitude": commonUtils.checkIfEmpty(headerData.str_Longitude) ? "" : headerData.str_Longitude,
                "latitude": commonUtils.checkIfEmpty(headerData.str_Latitude) ? "" : headerData.str_Latitude,
                "bunks": commonUtils.checkIfEmpty(headerData.lng_bunks) ? null : headerData.lng_bunks,
                "meals": commonUtils.checkIfEmpty(headerData.lng_meals) ? null : headerData.lng_meals,
                "waterUsed": commonUtils.checkIfEmpty(headerData.lng_waterused) ? "" : parseInt(headerData.lng_waterused),
                "waterReceived": commonUtils.checkIfEmpty(headerData.lng_waterrecv) ? "" : parseInt(headerData.lng_waterrecv),
                "waterUsedUOM": commonUtils.checkIfEmpty(headerData.lng_WaterUsedUOM) ? "" : parseInt(headerData.lng_WaterUsedUOM),
                "waterReceivedUOM": commonUtils.checkIfEmpty(headerData.lng_WaterReceivedUOM) ? "" : parseInt(headerData.lng_WaterReceivedUOM),
                "fuelused": commonUtils.checkIfEmpty(headerData.lng_fuelused) ? "" : parseInt(headerData.lng_fuelused),
                "fuelReceived": commonUtils.checkIfEmpty(headerData.lng_Fuelrecv) ? "" : parseInt(headerData.lng_Fuelrecv),
                "fuelUsedUOM": commonUtils.checkIfEmpty(headerData.lng_FuelUsedUOM) ? "" : parseInt(headerData.lng_FuelUsedUOM),
                "fuelReceivedUOM": commonUtils.checkIfEmpty(headerData.lng_FuelReceivedUOM) ? "" : parseInt(headerData.lng_FuelReceivedUOM),
                "lubeUsed": commonUtils.checkIfEmpty(headerData.lng_Lubeused) ? "" : parseInt(headerData.lng_Lubeused),
                "lubeReceived": commonUtils.checkIfEmpty(headerData.lng_Luberecv) ? "" : parseInt(headerData.lng_Luberecv),
                "lubeOilUsedUOM": commonUtils.checkIfEmpty(headerData.lng_LubeOilUsedUOM) ? "" : parseInt(headerData.lng_LubeOilUsedUOM),
                "lubeOilReceivedUOM": commonUtils.checkIfEmpty(headerData.lng_LubeOilReceivedUOM) ? "" : parseInt(headerData.lng_LubeOilReceivedUOM),
                "hydraulicUsed": commonUtils.checkIfEmpty(headerData.lng_hydraulicused) ? "" : parseInt(headerData.lng_hydraulicused),
                "hydraulicReceived": commonUtils.checkIfEmpty(headerData.lng_hydraulicrecv) ? "" : parseInt(headerData.lng_hydraulicrecv),
                "hydraulicUsedUOM": commonUtils.checkIfEmpty(headerData.lng_HydraulicUsedUOM) ? "" : parseInt(headerData.lng_HydraulicUsedUOM),
                "hydraulicReceivedUOM": commonUtils.checkIfEmpty(headerData.lng_HydraulicReceivedUOM) ? "" : parseInt(headerData.lng_HydraulicReceivedUOM),
                "gritUOM": commonUtils.checkIfEmpty(headerData.lng_GritUOM) ? "" : parseInt(headerData.lng_GritUOM),
                "amountOfGritConsumed": commonUtils.checkIfEmpty(headerData.dbl_GritConsumedToday) ? "" : parseInt(headerData.dbl_GritConsumedToday),
                "amountOfGritRemaining": commonUtils.checkIfEmpty(headerData.dbl_GritRemaining) ? "" : parseInt(headerData.dbl_GritRemaining),
                "progress": commonUtils.checkIfEmpty(headerData.str_progress) ? "" : headerData.str_progress,
                "problems": commonUtils.checkIfEmpty(headerData.str_problems) ? "" : headerData.str_problems,
                "plans": commonUtils.checkIfEmpty(headerData.str_plans) ? "" : headerData.str_plans,
                "needs": commonUtils.checkIfEmpty(headerData.str_Needs) ? "" : headerData.str_Needs,
                "nearHit": commonUtils.checkIfEmpty(headerData.dbl_nearhit) ? null : headerData.dbl_nearhit,
                "obsCard": commonUtils.checkIfEmpty(headerData.dbl_obscard) ? "" : headerData.dbl_obscard,
                "stopCard": commonUtils.checkIfEmpty(headerData.dbl_stopcard) ? "" : headerData.dbl_stopcard,
                "toolBoxTalk": commonUtils.checkIfEmpty(headerData.dbl_toolboxtalk) ? "" : headerData.dbl_toolboxtalk,
                "clientAfeNumber": commonUtils.checkIfEmpty(headerData.str_clientafenumber) ? "" : headerData.str_clientafenumber,
                "chartId": commonUtils.checkIfEmpty(headerData.lng_chartid) ? "" : headerData.lng_chartid,
                "miniSystemId": commonUtils.checkIfEmpty(headerData.str_minisystemid) ? "" : headerData.str_minisystemid,
                "projectAfeNumber": commonUtils.checkIfEmpty(headerData.str_Projafenumber) ? "" : headerData.str_Projafenumber,
                "incidentReports": commonUtils.checkIfEmpty(headerData.lng_IncidentReports) ? "" : headerData.lng_IncidentReports,
                "Moc": commonUtils.checkIfEmpty(headerData.lng_MocRecorded) ? "" : headerData.lng_MocRecorded,
                "nonConformanceReports": commonUtils.checkIfEmpty(headerData.lng_NonConformanceReports) ? "" : headerData.lng_NonConformanceReports,
                "equipmentFailure": commonUtils.checkIfEmpty(headerData.lng_EquipmentFailure) ? "" : headerData.lng_EquipmentFailure,
                "ocsNumber": commonUtils.checkIfEmpty(headerData.str_OCSNumber) ? "" : headerData.str_OCSNumber,
                "poNo": commonUtils.checkIfEmpty(headerData.str_PONo) ? "" : headerData.str_PONo,
                "jseaForProject": commonUtils.checkIfEmpty(headerData.dbl_JSEAForProject) ? "" : headerData.dbl_JSEAForProject,
                "obsCardForProject": commonUtils.checkIfEmpty(headerData.dbl_OBSForProject) ? "" : headerData.dbl_OBSForProject,
                "stopCardForProject": commonUtils.checkIfEmpty(headerData.dbl_StopCardForProject) ? "" : headerData.dbl_StopCardForProject,
                "nearHitForProject": commonUtils.checkIfEmpty(headerData.dbl_NearHitForProject) ? "" : headerData.dbl_NearHitForProject,
            };
            Object.keys(header).forEach((key) => {
                if (header[key] === null || header[key] === "" || header[key] === undefined) header[key] = null;
            });
            return header;
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    getAttachmentsResponse: function(data) {
        try {
            var response = [];
            var filesCount = {
                "pdf": 0,
                "doc": 0,
                "gallery": 0,
                "excel": 0,
                "ppt": 0,
                "txt": 0
            };
            for (var j = 0; j < data.length; j++) {
                var exten = commonUtils.getFileTypeImage(data[j].str_attachmentExtension);
                filesCount[exten.substring(0, exten.length - 4)]++;
                var name = "00000" + filesCount[exten.substring(0, exten.length - 4)];
                var attachmentName = commonUtils.getFileTypeImageName(data[j].str_attachmentExtension) + name.substr(-3);
                var arr = {
                    "lineNumber": j,
                    "attachment": attachmentName + commonUtils.getExtensionForAttachments(data[j].str_attachmenttype),
                    "attachmentType": data[j].str_attachmenttype,
                    "reportId": data[j].reportId,
                    "attachmentFileContent": data[j].str_attachmentValue
                };
                response.push(arr);
            }
            return response;
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    getFileTypeImage: function(str_attachmenttype) {
        switch (str_attachmenttype) {
            case "application/pdf":
                {
                    return "pdf.png";
                }
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                {
                    return "excel.png";
                }
            case "application/vnd.ms-excel":
                {
                    return "excel.png";
                }
            case "application/vnd.ms-powerpoint":
                {
                    return "ppt.png";
                }
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                {
                    return "ppt.png";
                }
            case "text/plain":
                {
                    return "txt.png";
                }
            case "application/msword":
                {
                    return "doc.png";
                }
            case "application/vnd.ms-word":
                {
                    return "doc.png";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingm":
                {
                    return "doc.png";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                {
                    return "doc.png";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
                {
                    return "doc.png";
                }
            default:
                {
                    if (str_attachmenttype.substring(0, 5) == "image") {
                        return "gallery.png";
                    }
                    return "folder.png";
                }
        }
    },
    getFileTypeImageName: function(str_attachmenttype) {
        switch (str_attachmenttype) {
            case "application/pdf":
                {
                    return "PDF";
                }
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                {
                    return "EXCEL";
                }
            case "application/vnd.ms-excel":
                {
                    return "EXCEL";
                }
            case "application/vnd.ms-powerpoint":
                {
                    return "PPT";
                }
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                {
                    return "PPT";
                }
            case "text/plain":
                {
                    return "TXT";
                }
            case "application/msword":
                {
                    return "DOC";
                }
            case "application/vnd.ms-word":
                {
                    return "DOC";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingm":
                {
                    return "DOC";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                {
                    return "DOC";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
                {
                    return "DOC";
                }
            default:
                {
                    if (str_attachmenttype.substring(0, 5) == "image") {
                        return "IMG";
                    }
                    return "FILE";
                }
        }
    },
    getExtensionForAttachments: function(data) {
        switch (data) {
            case "application/pdf":
                {
                    return ".pdf";
                }
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                {
                    return ".xlsx";
                }
            case "application/vnd.ms-powerpoint":
                {
                    return ".pptx";
                }
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                {
                    return ".pptx";
                }
            case "application/vnd.ms-excel":
                {
                    return ".xlsx";
                }
            case "text/plain":
                {
                    return ".txt";
                }
            case "application/msword":
                {
                    return ".doc";
                }
            case "application/vnd.ms-word":
                {
                    return ".doc";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingm":
                {
                    return ".doc";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                {
                    return ".doc";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
                {
                    return ".doc";
                }
            default:
                {
                    if ((data).substring(0, 5) == "image") {
                        if ((data).substring(6) == "jpeg") {
                            return ".jpg";
                        } else {
                            return ".png";
                        }
                    }
                }
        }
    },
    getShiftTypeId: function(value) {
        if (value == "Normal") {
            return 1;
        } else if (value == "Night") {
            return 2;
        } else if (value == "Standby") {
            return 4;
        }
    },
    getShiftTypeFromId: function(value) {
        if (value == 1) {
            return "Normal";
        } else if (value == 2) {
            return "Night";
        } else if (value == 4) {
            return "Standby";
        }
    },
    formatDate: function(date) {
        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return year + "-" + month + "-" + day;
    },
    getMonthWord: function(month) {
        if (month == 1) {
            return "January";
        } else if (month == 2) {
            return "February";
        } else if (month == 3) {
            return "March";
        } else if (month == 4) {
            return "April";
        } else if (month == 5) {
            return "May";
        } else if (month == 6) {
            return "June";
        } else if (month == 7) {
            return "July";
        } else if (month == 8) {
            return "August";
        } else if (month == 9) {
            return "September";
        } else if (month == 10) {
            return "October";
        } else if (month == 11) {
            return "November";
        } else if (month == 12) {
            return "December";
        }
    },
    getCountryId: function(country) {
        var countries = commonUtils.countries;
        for (var j = 0; j < countries.length; j++) {
            if (countries[j].name == country) {
                return countries[j].countryid;
            }
        }
        return null;
    },
    getActivity: function(activites, activity) {
        if (!commonUtils.checkIfEmpty(activites) && !commonUtils.checkIfEmpty(activity)) {
            for (var j = 0; j < activites.length; j++) {
                if (activites[j].activity == activity) {
                    return activites[j].description + "," + activites[j].activity;
                }
            }
        }
        return null;
    },
    pushAppUsage: function() {
        try {
            var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("PushAppUsageData");
            var operationName = "PushAppData";
            var userNameAppData = kony.store.getItem("username");
            var deviceInfo = kony.os.deviceInfo();
            var gblAppDataEmployeeId = kony.store.getItem("gblAppDataEmployeeId");
            let data = {
                "employeeid": gblAppDataEmployeeId,
                "username": userNameAppData,
                "emailid": (userNameAppData).toLowerCase() + "@oceaneering.com",
                "appname": "OII-DPR",
                "apptype": "Mobile",
                "appversion": oceaneering.oms.appGlobals.version,
                "ostype": deviceInfo.model,
                "osversion": deviceInfo.version
            };
            integrationObj.invokeOperation(operationName, {}, data, (res) => {
                if (!commonUtils.checkIfEmpty(res)) {
                    kony.print("App push service working");
                }
            }, (err) => {
                var er = {
                    "func": "pushAppUsage",
                    "err": "Errorcallback " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                kony.print("Error in  push service");
            });
        } catch (err) {
            commonUtils.exception(this, err);
        }
    },
    dprPersonnel: {
        "str_reportid": null,
        "str_systemid": null,
        "lng_linenumber": null,
        "str_employeeid": null,
        "str_department": null,
        "dte_arrival": null,
        "dte_departure": null,
        "lng_shifttype": null,
        "dbl_othourcompany": null,
        "dbl_othoursclient": null,
        "dte_shiftstart": null,
        "dte_shiftend": null,
        "dte_otshiftstart": null,
        "dte_otshiftend": null,
        "bln_transstatus": 0,
        "dbl_othours": null,
        "dbl_shifthour": null,
        "dbl_standbyhour": null,
        "dbl_billinghour": null,
        "dbl_stdrate": null,
        "dbl_ovtrate": null,
        "dbl_standbyrate": null,
        "dbl_nondivrate": null,
        "dbl_divedepth": null,
        "lng_DepthUom": null,
        "str_trc": null,
        "str_trcCodes": null,
        "str_jobPosition": null,
        "str_positioncode": null,
        "str_crewPosition": null,
        "str_crewpositioncode": null,
        "str_employeeName": null,
        "lng_JobTitleId": null,
        "str_createdBy": null,
        "dte_createdDate": null,
        "str_lastModifiedBy": null,
        "dte_lastModifiedDate": null,
        "bln_extracrew": false,
        "dbl_penetration": null,
        "bln_adsbonus": false
    },
    dprHeader: {
        "str_reportid": null,
        "str_rmnumber": null,
        "str_projid": null,
        "str_systemid": null,
        "dte_reportdate": null,
        "str_supervisor": null,
        "str_nightsupervisor": null,
        "str_location": null,
        "str_opsmanager": null,
        "str_clientname": null,
        "str_clientcontact": null,
        "str_ProjectActivity": null,
        "str_CreatedBy": null,
        "str_CreatedByUserName": null,
        "int_CountryId": null,
        "byt_Signature": null,
        "str_Signature": null,
        "lng_status": null,
        "bln_hourlyrate": false,
        "dte_lastModified": null,
        "str_Comment": null,
        "str_RejectComments": null,
        "dbl_systemrate": null,
        "dbl_spreadrate": null,
        "lng_depthchartid": null,
        "dbl_penetrationrate": null,
        "str_dlcomment": null,
        "str_minirmnumber": null,
        "str_progress": null,
        "str_problems": null,
        "str_plans": null,
        "str_Needs": null,
        "str_Seas": null,
        "str_Winds": null,
        "str_current": null,
        "lng_reporttype": null,
        "str_Skies": null,
        "str_Visibility": null,
        "str_Longitude": null,
        "str_Latitude": null,
        "lng_fuelused": null,
        "lng_Fuelrecv": null,
        "lng_Lubeused": null,
        "lng_Luberecv": null,
        "lng_waterrecv": null,
        "lng_hydraulicused": null,
        "lng_hydraulicrecv": null,
        "lng_arealocation": null,
        "str_grid": null,
        "lng_bunks": null,
        "lng_meals": null,
        "dbl_sja": null,
        "dbl_nearhit": null,
        "dbl_obscard": null,
        "dbl_stopcard": null,
        "dbl_toolboxtalk": null,
        "str_clientafenumber": null,
        "lng_chartid": null,
        "str_minisystemid": null,
        "lng_waterused": null,
        "bln_RejectedOnshore": false,
        "str_Projafenumber": null,
        "lng_FuelUsedUOM": null,
        "lng_FuelReceivedUOM": null,
        "lng_LubeOilUsedUOM": null,
        "lng_LubeOilReceivedUOM": null,
        "lng_WaterUsedUOM": null,
        "lng_WaterReceivedUOM": null,
        "lng_HydraulicUsedUOM": null,
        "lng_HydraulicReceivedUOM": null,
        "lng_IncidentReports": null,
        "lng_MocRecorded": null,
        "lng_NonConformanceReports": null,
        "lng_EquipmentFailure": null,
        "dbl_GritConsumedToday": null,
        "dbl_GritRemaining": null,
        "str_lastModifiedBy": null,
        "str_Sign": null,
        "dbl_JSEAForProject": null,
        "dbl_OBSForProject": null,
        "dbl_StopCardForProject": null,
        "dbl_NearHitForProject": null,
        "lng_GritUOM": null
    },
    headerSubmit: {
        "reportId": null,
        "rmNumber": null,
        "projectId": null,
        "reportDate": "0001-01-01T00:00:00",
        "supervisor": null,
        "comment": null,
        "status": null,
        "systemRate": null,
        "location": null,
        "spreadRate": null,
        "depthChartId": null,
        "penetrationRate": null,
        "miniRmNumber": null,
        "progress": null,
        "problems": null,
        "plans": null,
        "needs": null,
        "seas": null,
        "winds": null,
        "current": null,
        "reportType": null,
        "skies": null,
        "visibility": null,
        "longitude": null,
        "latitude": null,
        "areaLocation": null,
        "grid": null,
        "bunks": null,
        "meals": null,
        "sja": null,
        "nearHit": null,
        "obsCard": null,
        "toolBoxTalk": null,
        "clientAfeNumber": null,
        "projectAfeNumber": null,
        "contract": null,
        "systemId": null,
        "chartId": null,
        "clientName": null,
        "miniSystemId": null,
        "stopCard": null,
        "createdBy": null,
        "countryId": null,
        "vessel": null,
        "depth": null,
        "opsManager": null,
        "fuelUsedUOM": null,
        "fuelReceivedUOM": null,
        "lubeOilUsedUOM": null,
        "lubeOilReceivedUOM": null,
        "waterUsedUOM": null,
        "waterReceivedUOM": null,
        "hydraulicUsedUOM": null,
        "hydraulicReceivedUOM": null,
        "fuelUsed": null,
        "fuelReceived": null,
        "lubeUsed": null,
        "lubeReceived": null,
        "waterUsed": null,
        "waterReceived": null,
        "hydraulicUsed": null,
        "hydraulicReceived": null,
        "incidentReports": null,
        "Moc": null,
        "nonConformanceReports": null,
        "equipmentFailureReports": null,
        "amountOfGritConsumed": null,
        "amountOfGritRemaining": null,
        "poNo": null,
        "projectActivity": null,
        "ocsNumber": null,
        "jseaForProject": null,
        "nearHitForProject": null,
        "obsCardForProject": null,
        "stopCardForProject": null,
        "gritUOM": null,
        "hourlyRate": null,
        "bidNumber": null,
        "resourceType": null,
        "resourceCategory": null,
        "supervisorName": null,
        "regionCode": null,
        "majorEquipCode": null,
        "vesselList": null,
        "workcountryId": null,
        "isMobileCreated": null
    },
    personnelListSubmit: {
        "reportId": null,
        "lineNumber": null,
        "employeeId": null,
        "employeeName": null,
        "arrival": null,
        "departure": null,
        "shiftType": null,
        "shiftStart": "0001-01-01T00:00:00",
        "shiftEnd": "0001-01-01T00:00:00",
        "otHourCompany": null,
        "otShiftStart": null,
        "transitStatus": false,
        "otHours": null,
        "standByRate": null,
        "overTimeRate": null,
        "diveDepth": null,
        "penetration": null,
        "adsBonus": null,
        "positionCode": null,
        "shiftHour": null,
        "crewPositionCode": null,
        "extraCrew": null,
        "depthUom": null,
        "trcCodes": null,
        "comments": null,
        "billingHour": null,
        "shiftTypeName": null,
        "otShiftEnd": null,
        "standardRate": null,
        "crewPositionId": null,
        "uomDepth": null
    },
    countries: [{
            "countryid": "1",
            "name": "AFGHANISTAN",
            "code": "AF"
        }, {
            "countryid": "2",
            "name": "ALAND ISLANDS",
            "code": "AX"
        }, {
            "countryid": "3",
            "name": "ALBANIA",
            "code": "AL"
        }, {
            "countryid": "4",
            "name": "ALGERIA",
            "code": "DZ"
        }, {
            "countryid": "5",
            "name": "AMERICAN SAMOA",
            "code": "AS"
        }, {
            "countryid": "6",
            "name": "ANDORRA",
            "code": "AD"
        }, {
            "countryid": "7",
            "name": "ANGOLA",
            "code": "AGO"
        }, {
            "countryid": "8",
            "name": "ANGUILLA",
            "code": "AI"
        }, {
            "countryid": "9",
            "name": "ANTARCTICA",
            "code": "AQ"
        }, {
            "countryid": "10",
            "name": "ANTIGUA AND BARBUDA",
            "code": "AG"
        }, {
            "countryid": "11",
            "name": "ARGENTINA",
            "code": "ARG"
        }, {
            "countryid": "12",
            "name": "ARMENIA",
            "code": "AM"
        }, {
            "countryid": "13",
            "name": "ARUBA",
            "code": "AW"
        }, {
            "countryid": "14",
            "name": "AUSTRALIA",
            "code": "AUS"
        }, {
            "countryid": "15",
            "name": "AUSTRIA",
            "code": "AUT"
        }, {
            "countryid": "16",
            "name": "AZERBAIJAN",
            "code": "AZE"
        }, {
            "countryid": "17",
            "name": "BAHAMAS",
            "code": "BS"
        }, {
            "countryid": "18",
            "name": "BAHRAIN",
            "code": "BHR"
        }, {
            "countryid": "19",
            "name": "BANGLADESH",
            "code": "BD"
        }, {
            "countryid": "20",
            "name": "BARBADOS",
            "code": "BB"
        }, {
            "countryid": "21",
            "name": "BELARUS",
            "code": "BY"
        }, {
            "countryid": "22",
            "name": "BELGIUM",
            "code": "BE"
        }, {
            "countryid": "23",
            "name": "BELIZE",
            "code": "BZ"
        }, {
            "countryid": "24",
            "name": "BENIN",
            "code": "BJ"
        }, {
            "countryid": "25",
            "name": "BERMUDA",
            "code": "BM"
        }, {
            "countryid": "26",
            "name": "BHUTAN",
            "code": "BT"
        }, {
            "countryid": "27",
            "name": "BOLIVIA",
            "code": "BOL"
        }, {
            "countryid": "28",
            "name": "BOSNIA AND HERZEGOVINA",
            "code": "BA"
        }, {
            "countryid": "29",
            "name": "BOTSWANA",
            "code": "BW"
        }, {
            "countryid": "30",
            "name": "BOUVET ISLAND",
            "code": "BV"
        }, {
            "countryid": "31",
            "name": "BRAZIL",
            "code": "BRA"
        }, {
            "countryid": "32",
            "name": "BRITISH INDIAN OCEAN TERRITORY",
            "code": "IO"
        }, {
            "countryid": "33",
            "name": "BRUNEI DARUSSALAM",
            "code": "BN"
        }, {
            "countryid": "34",
            "name": "BULGARIA",
            "code": "BGR"
        }, {
            "countryid": "35",
            "name": "BURKINA FASO",
            "code": "BF"
        }, {
            "countryid": "36",
            "name": "BURUNDI",
            "code": "BI"
        }, {
            "countryid": "37",
            "name": "CAMBODIA",
            "code": "KH"
        }, {
            "countryid": "38",
            "name": "CAMEROON",
            "code": "CM"
        }, {
            "countryid": "39",
            "name": "CANADA",
            "code": "CAN"
        }, {
            "countryid": "40",
            "name": "CAPE VERDE",
            "code": "CV"
        }, {
            "countryid": "41",
            "name": "CAYMAN ISLANDS",
            "code": "KY"
        }, {
            "countryid": "42",
            "name": "CENTRAL AFRICAN REPUBLIC",
            "code": "CF"
        }, {
            "countryid": "43",
            "name": "CHAD",
            "code": "TD"
        }, {
            "countryid": "44",
            "name": "CHILE",
            "code": "CL"
        }, {
            "countryid": "45",
            "name": "CHINA",
            "code": "CHN"
        }, {
            "countryid": "46",
            "name": "CHRISTMAS ISLAND",
            "code": "CX"
        }, {
            "countryid": "47",
            "name": "COCOS (KEELING) ISLANDS",
            "code": "CC"
        }, {
            "countryid": "48",
            "name": "COLOMBIA",
            "code": "COL"
        }, {
            "countryid": "49",
            "name": "COMOROS",
            "code": "KM"
        }, {
            "countryid": "50",
            "name": "CONGO",
            "code": "CG"
        }, {
            "countryid": "51",
            "name": "CONGO, THE DEMOCRATIC REPUBLIC OF THE",
            "code": "CD"
        }, {
            "countryid": "52",
            "name": "COOK ISLANDS",
            "code": "CK"
        }, {
            "countryid": "53",
            "name": "COSTA RICA",
            "code": "CRI"
        }, {
            "countryid": "54",
            "name": "COTE D'IVOIRE",
            "code": "CI"
        }, {
            "countryid": "55",
            "name": "CROATIA",
            "code": "HRV"
        }, {
            "countryid": "56",
            "name": "CUBA",
            "code": "CU"
        }, {
            "countryid": "57",
            "name": "CYPRUS",
            "code": "CYP"
        }, {
            "countryid": "58",
            "name": "CZECH REPUBLIC",
            "code": "CZ"
        }, {
            "countryid": "59",
            "name": "DENMARK",
            "code": "DNK"
        }, {
            "countryid": "60",
            "name": "DJIBOUTI",
            "code": "DJ"
        }, {
            "countryid": "61",
            "name": "DOMINICA",
            "code": "DM"
        }, {
            "countryid": "62",
            "name": "DOMINICAN REPUBLIC",
            "code": "DO"
        }, {
            "countryid": "63",
            "name": "ECUADOR",
            "code": "ECU"
        }, {
            "countryid": "64",
            "name": "EGYPT",
            "code": "EGY"
        }, {
            "countryid": "65",
            "name": "EL SALVADOR",
            "code": "SV"
        }, {
            "countryid": "66",
            "name": "EQUATORIAL GUINEA",
            "code": "GQ"
        }, {
            "countryid": "67",
            "name": "ERITREA",
            "code": "ER"
        }, {
            "countryid": "68",
            "name": "ESTONIA",
            "code": "EE"
        }, {
            "countryid": "69",
            "name": "ETHIOPIA",
            "code": "ET"
        }, {
            "countryid": "70",
            "name": "FALKLAND ISLANDS (MALVINAS)",
            "code": "FK"
        }, {
            "countryid": "71",
            "name": "FAROE ISLANDS",
            "code": "FRO"
        }, {
            "countryid": "72",
            "name": "FIJI",
            "code": "FJ"
        }, {
            "countryid": "73",
            "name": "FINLAND",
            "code": "FIN"
        }, {
            "countryid": "74",
            "name": "FRANCE",
            "code": "FRA"
        }, {
            "countryid": "75",
            "name": "FRENCH GUIANA",
            "code": "GF"
        }, {
            "countryid": "76",
            "name": "FRENCH POLYNESIA",
            "code": "PF"
        }, {
            "countryid": "77",
            "name": "FRENCH SOUTHERN TERRITORIES",
            "code": "TF"
        }, {
            "countryid": "78",
            "name": "GABON",
            "code": "GA"
        }, {
            "countryid": "79",
            "name": "GAMBIA",
            "code": "GM"
        }, {
            "countryid": "80",
            "name": "GEORGIA",
            "code": "GHA"
        }, {
            "countryid": "81",
            "name": "GERMANY",
            "code": "DEU"
        }, {
            "countryid": "82",
            "name": "GHANA",
            "code": "GH"
        }, {
            "countryid": "83",
            "name": "GIBRALTAR",
            "code": "GI"
        }, {
            "countryid": "84",
            "name": "GREECE",
            "code": "GRC"
        }, {
            "countryid": "85",
            "name": "GREENLAND",
            "code": "GL"
        }, {
            "countryid": "86",
            "name": "GRENADA",
            "code": "GD"
        }, {
            "countryid": "87",
            "name": "GUADELOUPE",
            "code": "GP"
        }, {
            "countryid": "88",
            "name": "GUAM",
            "code": "GU"
        }, {
            "countryid": "89",
            "name": "GUATEMALA",
            "code": "GT"
        }, {
            "countryid": "90",
            "name": "GUERNSEY",
            "code": "GG"
        }, {
            "countryid": "91",
            "name": "GUINEA",
            "code": "GNQ"
        }, {
            "countryid": "92",
            "name": "GUINEA-BISSAU",
            "code": "GW"
        }, {
            "countryid": "93",
            "name": "GUYANA",
            "code": "GY"
        }, {
            "countryid": "94",
            "name": "HAITI",
            "code": "HT"
        }, {
            "countryid": "95",
            "name": "HEARD ISLAND AND MCDONALD ISLANDS",
            "code": "HM"
        }, {
            "countryid": "96",
            "name": "HOLY SEE (VATICAN CITY STATE)",
            "code": "VA"
        }, {
            "countryid": "97",
            "name": "HONDURAS",
            "code": "HN"
        }, {
            "countryid": "98",
            "name": "HONG KONG",
            "code": "HK"
        }, {
            "countryid": "99",
            "name": "HUNGARY",
            "code": "HU"
        }, {
            "countryid": "100",
            "name": "ICELAND",
            "code": "IS"
        }, {
            "countryid": "101",
            "name": "INDIA",
            "code": "IND"
        }, {
            "countryid": "102",
            "name": "INDONESIA",
            "code": "IDN"
        }, {
            "countryid": "103",
            "name": "IRAN, ISLAMIC REPUBLIC OF",
            "code": "IR"
        }, {
            "countryid": "104",
            "name": "IRAQ",
            "code": "IQ"
        }, {
            "countryid": "105",
            "name": "IRELAND",
            "code": "IRL"
        }, {
            "countryid": "106",
            "name": "ISLE OF MAN",
            "code": "IM"
        }, {
            "countryid": "107",
            "name": "ISRAEL",
            "code": "ISR"
        }, {
            "countryid": "108",
            "name": "ITALY",
            "code": "ITA"
        }, {
            "countryid": "109",
            "name": "JAMAICA",
            "code": "JM"
        }, {
            "countryid": "110",
            "name": "JAPAN",
            "code": "JP"
        }, {
            "countryid": "111",
            "name": "JERSEY",
            "code": "JE"
        }, {
            "countryid": "112",
            "name": "JORDAN",
            "code": "JOR"
        }, {
            "countryid": "113",
            "name": "KAZAKHSTAN",
            "code": "KZ"
        }, {
            "countryid": "114",
            "name": "KENYA",
            "code": "KEN"
        }, {
            "countryid": "115",
            "name": "KIRIBATI",
            "code": "KI"
        }, {
            "countryid": "116",
            "name": "KOREA, DEMOCRATIC PEOPLE'S REPUBLIC OF",
            "code": "KP"
        }, {
            "countryid": "117",
            "name": "KOREA, REPUBLIC OF",
            "code": "KOR"
        }, {
            "countryid": "118",
            "name": "KUWAIT",
            "code": "KW"
        }, {
            "countryid": "119",
            "name": "KYRGYZSTAN",
            "code": "KG"
        }, {
            "countryid": "120",
            "name": "LAO PEOPLE'S DEMOCRATIC REPUBLIC",
            "code": "LA"
        }, {
            "countryid": "121",
            "name": "LATVIA",
            "code": "LV"
        }, {
            "countryid": "122",
            "name": "LEBANON",
            "code": "LBN"
        }, {
            "countryid": "123",
            "name": "LESOTHO",
            "code": "LS"
        }, {
            "countryid": "124",
            "name": "LIBERIA",
            "code": "LR"
        }, {
            "countryid": "125",
            "name": "LIBYAN ARAB JAMAHIRIYA",
            "code": "LBY"
        }, {
            "countryid": "126",
            "name": "LIECHTENSTEIN",
            "code": "LI"
        }, {
            "countryid": "127",
            "name": "LITHUANIA",
            "code": "LTU"
        }, {
            "countryid": "128",
            "name": "LUXEMBOURG",
            "code": "LU"
        }, {
            "countryid": "129",
            "name": "MACAO",
            "code": "MO"
        }, {
            "countryid": "130",
            "name": "MACEDONIA, THE FORMER YUGOSLAV REPUBLIC OF",
            "code": "MKD"
        }, {
            "countryid": "131",
            "name": "MADAGASCAR",
            "code": "MG"
        }, {
            "countryid": "132",
            "name": "MALAWI",
            "code": "MW"
        }, {
            "countryid": "133",
            "name": "MALAYSIA",
            "code": "MYS"
        }, {
            "countryid": "134",
            "name": "MALDIVES",
            "code": "MV"
        }, {
            "countryid": "135",
            "name": "MALI",
            "code": "ML"
        }, {
            "countryid": "136",
            "name": "MALTA",
            "code": "MLT"
        }, {
            "countryid": "137",
            "name": "MARSHALL ISLANDS",
            "code": "MH"
        }, {
            "countryid": "138",
            "name": "MARTINIQUE",
            "code": "MQ"
        }, {
            "countryid": "139",
            "name": "MAURITANIA",
            "code": "MR"
        }, {
            "countryid": "140",
            "name": "MAURITIUS",
            "code": "MU"
        }, {
            "countryid": "141",
            "name": "MAYOTTE",
            "code": "YT"
        }, {
            "countryid": "142",
            "name": "MEXICO",
            "code": "MEX"
        }, {
            "countryid": "143",
            "name": "MICRONESIA, FEDERATED STATES OF",
            "code": "FM"
        }, {
            "countryid": "144",
            "name": "MOLDOVA, REPUBLIC OF",
            "code": "MD"
        }, {
            "countryid": "145",
            "name": "MONACO",
            "code": "MC"
        }, {
            "countryid": "146",
            "name": "MONGOLIA",
            "code": "MN"
        }, {
            "countryid": "147",
            "name": "MONTENEGRO",
            "code": "ME"
        }, {
            "countryid": "148",
            "name": "MONTSERRAT",
            "code": "MS"
        }, {
            "countryid": "149",
            "name": "MOROCCO",
            "code": "MA"
        }, {
            "countryid": "150",
            "name": "MOZAMBIQUE",
            "code": "MZ"
        }, {
            "countryid": "151",
            "name": "MYANMAR",
            "code": "MM"
        }, {
            "countryid": "152",
            "name": "NAMIBIA",
            "code": "NAM"
        }, {
            "countryid": "153",
            "name": "NAURU",
            "code": "NR"
        }, {
            "countryid": "154",
            "name": "NEPAL",
            "code": "NP"
        }, {
            "countryid": "155",
            "name": "NETHERLANDS",
            "code": "NLD"
        }, {
            "countryid": "156",
            "name": "NETHERLANDS ANTILLES",
            "code": "AN"
        }, {
            "countryid": "157",
            "name": "NEW CALEDONIA",
            "code": "NC"
        }, {
            "countryid": "158",
            "name": "NEW ZEALAND",
            "code": "NZL"
        }, {
            "countryid": "159",
            "name": "NICARAGUA",
            "code": "NI"
        }, {
            "countryid": "160",
            "name": "NIGER",
            "code": "NE"
        }, {
            "countryid": "161",
            "name": "NIGERIA",
            "code": "NGA"
        }, {
            "countryid": "162",
            "name": "NIUE",
            "code": "NU"
        }, {
            "countryid": "163",
            "name": "NORFOLK ISLAND",
            "code": "NF"
        }, {
            "countryid": "164",
            "name": "NORTHERN MARIANA ISLANDS",
            "code": "MP"
        }, {
            "countryid": "165",
            "name": "NORWAY",
            "code": "NOR"
        }, {
            "countryid": "166",
            "name": "OMAN",
            "code": "OM"
        }, {
            "countryid": "167",
            "name": "PAKISTAN",
            "code": "PAK"
        }, {
            "countryid": "168",
            "name": "PALAU",
            "code": "PW"
        }, {
            "countryid": "169",
            "name": "PALESTINIAN TERRITORY, OCCUPIED",
            "code": "PS"
        }, {
            "countryid": "170",
            "name": "PANAMA",
            "code": "PA"
        }, {
            "countryid": "171",
            "name": "PAPUA NEW GUINEA",
            "code": "PG"
        }, {
            "countryid": "172",
            "name": "PARAGUAY",
            "code": "PY"
        }, {
            "countryid": "173",
            "name": "PERU",
            "code": "PE"
        }, {
            "countryid": "174",
            "name": "PHILIPPINES",
            "code": "PHL"
        }, {
            "countryid": "175",
            "name": "PITCAIRN",
            "code": "PN"
        }, {
            "countryid": "176",
            "name": "POLAND",
            "code": "POL"
        }, {
            "countryid": "177",
            "name": "PORTUGAL",
            "code": "PRT"
        }, {
            "countryid": "178",
            "name": "PUERTO RICO",
            "code": "PR"
        }, {
            "countryid": "179",
            "name": "QATAR",
            "code": "QAT"
        }, {
            "countryid": "180",
            "name": "R?UNION",
            "code": "RE"
        }, {
            "countryid": "181",
            "name": "ROMANIA",
            "code": "ROU"
        }, {
            "countryid": "182",
            "name": "RUSSIAN FEDERATION",
            "code": "RUS"
        }, {
            "countryid": "183",
            "name": "RWANDA",
            "code": "RW"
        }, {
            "countryid": "184",
            "name": "SAINT HELENA",
            "code": "SH"
        }, {
            "countryid": "185",
            "name": "SAINT KITTS AND NEVIS",
            "code": "KN"
        }, {
            "countryid": "186",
            "name": "SAINT LUCIA",
            "code": "LC"
        }, {
            "countryid": "187",
            "name": "SAINT PIERRE AND MIQUELON",
            "code": "PM"
        }, {
            "countryid": "188",
            "name": "SAINT VINCENT AND THE GRENADINES",
            "code": "VC"
        }, {
            "countryid": "189",
            "name": "SAMOA",
            "code": "WS"
        }, {
            "countryid": "190",
            "name": "SAN MARINO",
            "code": "SM"
        }, {
            "countryid": "191",
            "name": "SAO TOME AND PRINCIPE",
            "code": "ST"
        }, {
            "countryid": "192",
            "name": "SAUDI ARABIA",
            "code": "SA"
        }, {
            "countryid": "193",
            "name": "SENEGAL",
            "code": "SN"
        }, {
            "countryid": "194",
            "name": "SERBIA",
            "code": "RS"
        }, {
            "countryid": "195",
            "name": "SEYCHELLES",
            "code": "SC"
        }, {
            "countryid": "196",
            "name": "SIERRA LEONE",
            "code": "SL"
        }, {
            "countryid": "197",
            "name": "SINGAPORE",
            "code": "SGP"
        }, {
            "countryid": "198",
            "name": "SLOVAKIA",
            "code": "SK"
        }, {
            "countryid": "199",
            "name": "SLOVENIA",
            "code": "SI"
        }, {
            "countryid": "200",
            "name": "SOLOMON ISLANDS",
            "code": "SB"
        }, {
            "countryid": "201",
            "name": "SOMALIA",
            "code": "SO"
        }, {
            "countryid": "202",
            "name": "SOUTH AFRICA",
            "code": "ZAF"
        }, {
            "countryid": "203",
            "name": "SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS",
            "code": "GS"
        }, {
            "countryid": "204",
            "name": "SPAIN",
            "code": "ESP"
        }, {
            "countryid": "205",
            "name": "SRI LANKA",
            "code": "LKA"
        }, {
            "countryid": "206",
            "name": "SUDAN",
            "code": "SD"
        }, {
            "countryid": "207",
            "name": "SURINAME",
            "code": "SR"
        }, {
            "countryid": "208",
            "name": "SVALBARD AND JAN MAYEN",
            "code": "SJ"
        }, {
            "countryid": "209",
            "name": "SWAZILAND",
            "code": "SZ"
        }, {
            "countryid": "210",
            "name": "SWEDEN",
            "code": "SWE"
        }, {
            "countryid": "211",
            "name": "SWITZERLAND",
            "code": "CHE"
        }, {
            "countryid": "212",
            "name": "SYRIAN ARAB REPUBLIC",
            "code": "SY"
        }, {
            "countryid": "213",
            "name": "TAIWAN, PROVINCE OF CHINA",
            "code": "TW"
        }, {
            "countryid": "214",
            "name": "TAJIKISTAN",
            "code": "TJ"
        }, {
            "countryid": "215",
            "name": "TANZANIA, UNITED REPUBLIC OF",
            "code": "TZ"
        }, {
            "countryid": "216",
            "name": "THAILAND",
            "code": "THA"
        }, {
            "countryid": "217",
            "name": "TIMOR-LESTE",
            "code": "TL"
        }, {
            "countryid": "218",
            "name": "TOGO",
            "code": "TG"
        }, {
            "countryid": "219",
            "name": "TOKELAU",
            "code": "TK"
        }, {
            "countryid": "220",
            "name": "TONGA",
            "code": "TO"
        }, {
            "countryid": "221",
            "name": "TRINIDAD AND TOBAGO",
            "code": "TTO"
        }, {
            "countryid": "222",
            "name": "TUNISIA",
            "code": "TN"
        }, {
            "countryid": "223",
            "name": "TURKEY",
            "code": "TR"
        }, {
            "countryid": "224",
            "name": "TURKMENISTAN",
            "code": "TM"
        }, {
            "countryid": "225",
            "name": "TURKS AND CAICOS ISLANDS",
            "code": "TC"
        }, {
            "countryid": "226",
            "name": "TUVALU",
            "code": "TV"
        }, {
            "countryid": "227",
            "name": "UGANDA",
            "code": "UG"
        }, {
            "countryid": "228",
            "name": "UKRAINE",
            "code": "UKR"
        }, {
            "countryid": "229",
            "name": "UNITED ARAB EMIRATES",
            "code": "ARE"
        }, {
            "countryid": "230",
            "name": "UNITED KINGDOM",
            "code": "GBR"
        }, {
            "countryid": "231",
            "name": "UNITED STATES",
            "code": "USA"
        }, {
            "countryid": "232",
            "name": "UNITED STATES MINOR OUTLYING ISLANDS",
            "code": "UM"
        }, {
            "countryid": "233",
            "name": "URUGUAY",
            "code": "UY"
        }, {
            "countryid": "234",
            "name": "UZBEKISTAN",
            "code": "UZ"
        }, {
            "countryid": "235",
            "name": "VANUATU",
            "code": "VU"
        }, {
            "countryid": "236",
            "name": "VENEZUELA",
            "code": "VEN"
        }, {
            "countryid": "237",
            "name": "VIET NAM",
            "code": "VN"
        }, {
            "countryid": "238",
            "name": "VIRGIN ISLANDS, BRITISH",
            "code": "VG"
        }, {
            "countryid": "239",
            "name": "VIRGIN ISLANDS, U.S.",
            "code": "VI"
        }, {
            "countryid": "240",
            "name": "WALLIS AND FUTUNA",
            "code": "WF"
        }, {
            "countryid": "241",
            "name": "WESTERN SAHARA",
            "code": "EH"
        }, {
            "countryid": "242",
            "name": "YEMEN",
            "code": "YE"
        }, {
            "countryid": "243",
            "name": "Zaire see CONGO, THE DEMOCRATIC REPUBLIC OF THE ZAMBIA",
            "code": "ZM"
        }, {
            "countryid": "244",
            "name": "ZIMBABWE",
            "code": "ZWE"
        },
        //     {
        //       "countryid": "245",
        //       "name" : "",
        //       "code" : ""
        //     },
        {
            "countryid": "246",
            "name": "Kosovo",
            "code": "XK"
        }, {
            "countryid": "247",
            "name": "Yugoslavia",
            "code": "YU"
        }, {
            "countryid": "248",
            "name": "Saint Barthelemy",
            "code": "BL"
        }, {
            "countryid": "249",
            "name": "Saint Martin",
            "code": "MF"
        }, {
            "countryid": "250",
            "name": "South Sudan",
            "code": "SS"
        }, {
            "countryid": "251",
            "name": "England",
            "code": ""
        }, {
            "countryid": "252",
            "name": "Northern Ireland",
            "code": ""
        }, {
            "countryid": "253",
            "name": "Scotland",
            "code": ""
        }, {
            "countryid": "254",
            "name": "Wales",
            "code": ""
        }, {
            "countryid": "255",
            "name": "International Waters",
            "code": "XY"
        }, {
            "countryid": "256",
            "name": "Bonaire, Sint Eustatius & Saba",
            "code": "BQ"
        }, {
            "countryid": "257",
            "name": "Curacao",
            "code": "CW"
        }, {
            "countryid": "258",
            "name": "Sint Maarten (Dutch part)",
            "code": "SX"
        }, {
            "countryid": "259",
            "name": "Dummy Country",
            "code": "ZZ"
        }, {
            "countryid": "260",
            "name": "Intl.Global Employment Company",
            "code": "IG"
        }, {
            "countryid": "261",
            "name": "Rest of the World",
            "code": "RW"
        }
    ]
};
//           endTime = data[j].str_endtime;
//           totalMinutesStart = parseInt(startTime.substring(0,3)) * 60;
//           totalMinutesStart += parseInt(startTime.substring(3,5));
//           if((endTime == "00:00" || endTime  == "23:59") && (j == data.length - 1)){
//             endTime = "24:00";
//           }
//           totalMinutesEnd = parseInt(endTime.substring(0,3)) * 60;
//           totalMinutesEnd += parseInt(endTime.substring(3,5));
//           if(j > 0){
//             var end = (data[j-1].str_endtime);
//             var start = (data[j].str_starttime);
//             var date = commonUtils.formatDate(new Date());
//             var startOver = new Date(date + "T" + start);
//             var endOver = new Date(date + "T" + end);
//             if(startOver < endOver){
//               overlap = true;
//             }
//           }
//           var diffMinutes = totalMinutesEnd - totalMinutesStart;
//           hours += parseInt(diffMinutes / 60);
//           minutes += diffMinutes % 60;
//           if(minutes >= 60){
//             hours += minutes/60;
//             minutes = minutes % 60;
//           }
//         }
//       }