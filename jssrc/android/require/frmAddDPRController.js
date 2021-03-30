/* jshint esnext: true */
/**
 * @Description - Contains the functionality of the Create DPR Form
 * @author - Amritpal Singh
 */
define("userfrmAddDPRController", {
    DPRData: {},
    isHourlyRate: true,
    navigatingFrom: null,
    empData: {},
    projectData: {},
    reportDate: "",
    projectId: "",
    operation: "",
    reportId: "",
    headerData: {},
    data: {},
    dpr_Info: {},
    eventActivities: [],
    eventsType: [],
    globaleventstartTime: "00:00",
    eventRow: -1,
    creatingDPRForOtherCrew: false,
    deletingImageId: "",
    /* 7101 m , 7102 ft */
    UOM: [{
        "value": "None",
        "desc": "None",
        "code": null
    }, {
        "value": "ft",
        "desc": "Feet (ft)",
        "code": 7102
    }, {
        "value": "m",
        "desc": "Meter (m)",
        "code": 7101
    }],
    UOMProjectCondition: [{
        "value": "CU Meters",
        "desc": "CU Meters",
        "lbl": "",
        "code": 81077
    }, {
        "value": "Gallon",
        "desc": "Gallon",
        "code": 80847,
        "lbl": "",
    }, {
        "value": "Litre",
        "desc": "Litre",
        "code": 80844,
        "lbl": "",
    }],
    Type: [{
        "value": "Consumable",
        "desc": "Consumable",
        "code": "6007",
        "image": "consumable"
    }, {
        "value": "Deliverable",
        "desc": "Deliverable",
        "code": "81401",
        "image": "deliverable"
    }, {
        "value": "Equipment",
        "desc": "Equipment",
        "code": "6006",
        "image": "equipment"
    }, {
        "value": "Personnel",
        "desc": "Personnel",
        "code": "81400",
        "image": "personnelselected"
    }, {
        "value": "Rental",
        "desc": "Rental",
        "code": "6004",
        "image": "rental"
    }, {
        "value": "Variance",
        "desc": "Variance",
        "code": "6005",
        "image": "variance"
    }],
    activities: [],
    contracts: [],
    childProjects: [],
    filteresContract: [],
    selSubcategory: [],
    masterCategory: [],
    masterSubCategory: [],
    /**
     * @desc MVC navigation function
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    onNavigate: function(data) {
        try {
            var self = this;
            if (commonUtils.checkIfEmpty(data.comingFromBrowser) || (data.comingFromBrowser == "false")) {
                this.showLoading();
                commonUtils.addbottompopup(this);
                this.data = data;
                this.fetchContractData();
                this.operation = data.operation;
                this.empData = data.employeeData;
                this.projectData = data.projectData;
                this.headerData = data.headerData;
                this.navigatingFrom = data.navigatingFrom;
                this.reportDate = data.reportDate;
                this.projectId = data.projectId;
                this.dpr_Info = data.dpr_Info;
                this.setHeaderData(this.headerData);
                commonUtils.getDPRHeaderWithDPRID(this.headerData.str_reportid).then((res) => {
                    self.setHeaderData(res.OMS_OP_Dailyreportheader[0]);
                }, (err) => {
                    kony.print("Error in Dpr Header");
                });
                this.setViewOptions(true);
                this.view.flxSubmitDPR.setVisibility(true);
                if (this.operation == "History") {
                    this.view.flxFAB.setVisibility(false);
                } else if (this.operation == "View") {
                    this.view.flxSubmitDPR.setVisibility(false);
                    this.view.flxFAB.setVisibility(false);
                    this.view.flxDateChange.setVisibility(false);
                    this.view.flxOptionCon.height = "55dp";
                    this.setViewOptions(false);
                } else {
                    this.view.flxFAB.setVisibility(true);
                }
                this.view.flxDateChange.setVisibility(true);
                this.view.flxOptionCon.setVisibility(false);
                this.view.preShow = this.preShow.bind(this, this.data);
                this.view.postShow = this.postShow.bind(this);
                this.view.lblTitle.text = "Personnel";
                this.eventRow = -1;
                this.deletingImageId = "0";
                this.bindAction();
                this.fetchActivites();
                this.bindRoasterEvents();
                this.bindAssetsTools();
                this.bindAttachments();
                this.bindProjectConditions();
                this.onClickMenu("0");
            } else {
                this.onClickMenu("4");
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setViewOptions: function(value) {
        this.view.flxCommentsBody.setEnabled(value);
        this.view.flxSaveComments.setVisibility(value);
        var widgets = this.view.flxConditionBody.widgets();
        for (var j = 0; j < widgets.length; j++) {
            this.view[widgets[j].id].setEnabled(value);
        }
        this.view.flxConditionBody.height = value ? "90%" : "100%";
        this.view.flxSaveConditionContainer.setVisibility(value);
        this.view.flxProgressBody.setEnabled(value);
        this.view.flxProblemBody.setEnabled(value);
        this.view.flxStatusSave.setVisibility(value);
        this.view.flxFuturePlan.setEnabled(value);
        this.view.flxProjectNeeds.setEnabled(value);
        this.view.flxFutureContainer.setVisibility(value);
    },
    preShow: function(inp) {
        try {
            var self = this;
            this.view.flxOptionCon.setVisibility(false);
            this.dismissBottomPopup();
            this.showLoading();
            this.view.segPersonnel.setVisibility(false);
            this.view.flxNoDPR.setVisibility(true);
            this.setEventUOM();
            this.fetchEvents();
            this.updateEventList();
            this.refreshFiles();
            this.updateAssetsToolsList();
            if (commonUtils.checkIfEmpty(this.dpr_Info)) {
                commonUtils.getDPRWithDPRID(this.headerData.str_reportid).then((res) => {
                    self.successCallback_DPRS(res.OMS_OP_DailyReportPersonnel);
                }, (err) => {
                    self.dismissLoading();
                    self.view.flxNoDPR.setVisibility(true);
                    self.view.segPersonnel.setVisibility(false);
                });
            } else {
                self.successCallback_DPRS(this.dpr_Info);
            }
            // ------------------ events -------------------//
            this.view.flxEventENd.setVisibility(true);
            this.view.flxSeparatorEnd.setVisibility(true);
            this.resetEventsAndRoster();
            /// ------------------------------------------ //
        } catch (ex) {
            this.exception(ex);
        }
    },
    postShow: function() {},
    bindAction: function() {
        var self = this;
        this.view.flxFAB.onClick = this.onClickFlxfab.bind(this);
        this.view.flxBack.onClick = this.onClickOfBack.bind(this);
        var widgets = this.view.flxHamburger.widgets();
        for (var j = 0; j < widgets.length; j++) {
            this.view[widgets[j].id].onClick = this.onClickMenu.bind(this, j.toString());
        }
        this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
        this.view.segPersonnel.onRowClick = this.onPersonnelClick.bind(this);
        this.view.onDeviceBack = this.onClickOfBack.bind(this);
        this.view.flxSubmitDPR.onClick = this.onClickSubmit.bind(this);
        this.view.flxOption.onClick = () => {
            this.view.flxOptionCon.isVisible = !this.view.flxOptionCon.isVisible;
        };
        this.view.flxRefresh.onClick = () => {
            self.view.flxOptionCon.setVisibility(false);
            if (this.view.flxPersonnelBody.isVisible) {
                this.showLoading();
                commonUtils.getDPRWithDPRID(this.headerData.str_reportid).then((res) => {
                    self.successCallback_DPRS(res.OMS_OP_DailyReportPersonnel);
                }, (err) => {
                    self.dismissLoading();
                    self.view.flxNoDPR.setVisibility(true);
                    self.view.segPersonnel.setVisibility(false);
                });
            } else if (this.view.flxEventsBody.isVisible) {
                this.showLoading();
                this.updateEventList();
            } else if (this.view.flxRoasterBody.isVisible) {
                this.showLoading();
                this.updateRoasterList();
            } else if (this.view.flxAssetToolsBody.isVisible) {
                this.showLoading();
                this.updateAssetsToolsList();
            } else if (this.view.flxAttachmentBody.isVisible) {
                this.showLoading();
                this.refreshFiles();
            }
        };
        this.view.flxPersonnelBody.onClick = () => {
            this.view.flxOptionCon.setVisibility(false);
        };
        // --------------------- Events -----------------------------------//
        this.view.flxEventsBody.onClick = () => {
            self.view.flxOptionCon.setVisibility(false);
        };
        this.view.flxEventBack.onClick = () => {
            this.view.flxEventsContainer.setVisibility(false);
            this.view.flxDPR.setEnabled(true);
            this.eventRow = -1;
        };
        this.view.segEvent.onRowClick = this.openEventData.bind(this);
        this.view.flxEventStartTime.onClick = () => {
            if (!commonUtils.checkIfEmpty(self.view.lblEventStart.text)) {
                self.view.eventStartTime.setTime(self.view.lblEventStart.text);
            }
            self.view.eventStartTime.setVisibility(true);
            self.view.flxEventsContainer.setEnabled(false);
        };
        this.view.eventStartTime.onCancel = () => {
            self.view.flxEventsContainer.setEnabled(true);
            self.view.eventStartTime.setVisibility(false);
        };
        this.view.eventStartTime.onApply = () => {
            self.view.flxEventsContainer.setEnabled(true);
            self.view.lblEventStart.text = self.view.eventStartTime.getTime();
            self.view.eventStartTime.setVisibility(false);
            if (!commonUtils.checkIfEmpty(self.view.lblEventEnd.text) && !this.checkStartEndTime()) {
                self.view.lblEventStart.text = "";
                self.view.lblEventStart.setVisibility(true);
            } else {
                self.view.lblEventStart.setVisibility(true);
            }
        };
        this.view.flxEventEndTime.onClick = () => {
            if (!commonUtils.checkIfEmpty(self.view.lblEventEnd.text)) {
                self.view.eventEndTime.setTime(self.view.lblEventEnd.text);
            }
            self.view.eventEndTime.setVisibility(true);
            self.view.flxEventsContainer.setEnabled(false);
        };
        this.view.eventEndTime.onCancel = () => {
            self.view.flxEventsContainer.setEnabled(true);
            self.view.eventEndTime.setVisibility(false);
        };
        this.view.eventEndTime.onApply = () => {
            self.view.flxEventsContainer.setEnabled(true);
            self.view.lblEventEnd.text = self.view.eventEndTime.getTime();
            self.view.eventEndTime.setVisibility(false);
            if (!commonUtils.checkIfEmpty(self.view.lblEventStart.text) && !this.checkStartEndTime()) {
                self.view.lblEventEnd.text = "";
                self.view.lblEventEnd.setVisibility(true);
            } else {
                self.view.lblEventEnd.setVisibility(true);
            }
        };
        this.view.flxEventType.onClick = this.showEventType.bind(this);
        this.view.eventType.segServiceLine.onRowClick = this.onRowClickEventType.bind(this);
        this.view.eventType.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.eventType);
        this.view.eventUOM.segServiceLine.onRowClick = this.onRowClickUOM.bind(this);
        this.view.eventUOM.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.eventUOM);
        this.view.flxEventUOM.onClick = this.showUOM.bind(this);
        this.view.flxActivity.onClick = this.showActivity.bind(this);
        this.view.eventActivity.segServiceLine.onRowClick = this.onRowClickEventActivity.bind(this);
        this.view.eventActivity.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.eventActivity);
        this.view.eventActivity.tbxSearch.onDone = this.onTextChangeActvity.bind(this);
        this.view.eventActivity.flxImgSearch.onClick = this.onTextChangeActvity.bind(this);
        this.view.eventActivity.flxTRC.onClick = () => {
            self.view.lblEventActivity.text = commonUtils.checkIfEmpty(this.view.eventActivity.tbxSearch.text) ? "None" : this.view.eventActivity.tbxSearch.text;
            self.HideActivity(this.view.eventActivity);
            self.setActivity();
        };
        this.view.eventActivity.flxCross.onClick = this.HideActivity.bind(this, this.view.eventActivity);
        this.view.flxResetEvent.onClick = this.onResetClickEvent.bind(this);
        this.view.flxSaveEvent.onClick = this.onSaveEvent.bind(this);
        this.view.flxCheckContainer.onClick = this.toggleInTransit.bind(this);
        this.view.btnBottomOK.onClick = () => {
            self.showLoading();
            var date = self.getReportDate(self.view.calReportDate);
            self.view.flxReportDateChange.setVisibility(false);
            self.updateDate(date);
        };
        this.view.btnBottomNot.onClick = () => {
            self.view.flxReportDateChange.setVisibility(false);
        };
        this.view.flxDateChange.onClick = () => {
            self.view.flxOptionCon.setVisibility(false);
            self.view.calReportDate.dateComponents = this.getDateFromText((this.headerData.dte_reportdate).substring(0, 10));
            self.view.flxReportDateChange.setVisibility(true);
        };
    },
    updateDate: function(date) {
        try {
            var headerDPR = this.headerData;
            var self = this;
            headerDPR.dte_reportdate = (date).substring(0, 10);
            var dtte = date;
            headerDPR.str_reportDateTime = commonUtils.getMonthWord(dtte.substr(5, 2)) + " " + parseInt(dtte.substr(8, 2)) + ", " + dtte.substr(0, 4) + " " + new Date().toTimeString().substring(0, 5);
            headerDPR.sja = null;
            commonUtils.UpdateDPRHeader(headerDPR).then(values => {
                kony.timer.schedule("dateChnage", () => {
                    kony.timer.cancel("dateChnage");
                    self.dismissSuccess();
                    self.dismissLoading();
                }, 0.7, false);
                this.showSuccess("dateChange");
            });
        } catch (ex) {
            var er = {
                "func": "updateDate",
                "err": JSON.stringify(ex)
            };
            commonUtils.exception(this, er, true);
            self.dismissLoading();
            kony.print("Exception Occured in the updateDate");
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
    fetchEvents: function() {
        var self = this;
        commonUtils.getEventTypes(commonUtils.checkIfEmpty(this.headerData.departmentCode) ? 4 : this.headerData.departmentCode).then((res) => {
            self.eventsType = res;
            self.setEvents();
        }, (err) => {
            kony.print("Error in fetching the events type");
        });
    },
    onClickFlxfab: function() {
        if (this.view.flxPersonnelBody.isVisible) {
            this.openPersonnalBody();
        } else if (this.view.flxEventsBody.isVisible) {
            this.openEventsBody();
        } else if (this.view.flxRoasterBody.isVisible) {
            this.openRoasterBody();
        } else if (this.view.flxAssetToolsBody.isVisible) {
            this.openAssetsToolsBody();
        } else if (this.view.flxAttachmentBody.isVisible) {
            this.openFileUploadPopUp();
        }
    },
    openPersonnalBody: function() {
        this.view.flxOptionCon.setVisibility(false);
        this.showLoading();
        this.empData = {};
        this.empData.empid = oceaneering.oms.appGlobals.employeeId;
        this.empData.empName = oceaneering.oms.appGlobals.employeeFullName;
        this.empData.jobPosition = oceaneering.oms.appGlobals.jobPosition;
        this.empData.role = "supervisor";
        var inp = {
            "headerData": this.headerData,
            "employeeData": this.empData,
            "navigatingFrom": "frmAddDPR",
            "operation": "Create",
            "isNewHeader": true,
            "isBack": false
        };
        this.addDPR(inp);
    },
    openEventsBody: function() {
        this.view.flxEventsContainer.setEnabled(true);
        this.view.flxOptionCon.setVisibility(false);
        this.view.lblSystemValue.text = "PROJ_" + this.headerData.str_systemid;
        this.onResetClickEvent();
        this.view.lblEventTitle.text = "Create Event";
        this.view.flxEventsContainer.setVisibility(true);
        this.view.flxDPR.setEnabled(false);
        this.globaleventstartTime = this.startTime();
        this.view.lblEventStart.text = this.globaleventstartTime;
        this.eventRow = -1;
    },
    /// ------------------- Event End ----------------------- //
    startTime: function() {
        var events = this.view.segEvent.data;
        if (commonUtils.checkIfEmpty(events) || (events.length > 0 && commonUtils.checkIfEmpty(events[0].lblEventType))) {
            return "00:00";
        } else {
            var startTime = "00:00";
            for (var j = 0; j < events.length; j++) {
                if (events[j].eventData.bln_Milestone === false || events[j].eventData.bln_Milestone == "false") {
                    startTime = (events[j].endTime);
                }
            }
            return startTime;
        }
    },
    calculateHours: function() {
        try {
            var events = this.view.segEvent.data;
            if (commonUtils.checkIfEmpty(events) || (events.length > 0 && commonUtils.checkIfEmpty(events[0].lblEventType))) {
                return {
                    "hours": 0,
                    "minutes": 0
                };
            } else {
                var dte = commonUtils.formatDate(new Date());
                var diffH = 0;
                var diffM = 0;
                var overlap = false;
                var startTime = "";
                var endTime = "";
                var totalHours = 0;
                var totalMin = 0;
                var flag24 = false;
                if (!commonUtils.checkIfEmpty(events) && (events.length > 0)) {
                    for (var j = 0; j < events.length; j++) {
                        if ((this.eventRow == -1) && events[j].lblMilesstone === false || events[j].lblMilesstone == "false") {
                            startTime = events[j].startTime;
                            endTime = events[j].endTime;
                            if (endTime == "00:00" || endTime == "23:59") {
                                endTime = "24:00";
                            }
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
                                var end = (events[j - 1].endTime);
                                var start = (events[j].startTime);
                                var dat = commonUtils.formatDate(new Date());
                                var startOver = new Date(dat + "T" + start);
                                var endOver = new Date(dat + "T" + end);
                                if (startOver < endOver) {
                                    //overlap = true;
                                }
                                if (events[j - 1].endTime == events[j].endTime && events[j - 1].startTime == events[j].startTime) {
                                    //overlap = true;
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
                if (totalHours > 24) {
                    this.view.lblCountHours.text = ">24";
                } else {
                    if (totalMin > 0) {
                        this.view.lblCountHours.text = totalHours.toString() + "." + totalMin.toString();
                    } else {
                        this.view.lblCountHours.text = totalHours.toString();
                    }
                }
                if (parseInt(totalHours) == 24 && totalMin === 0) {
                    this.view.flxHoursColor.skin = "sknFlxunder15Hours"; // green
                } else {
                    this.view.flxHoursColor.skin = "sknFlxUnder24Hours"; // red
                }
                if (totalHours === 24 && totalMin === 0) {
                    this.view.lblCountHours.text = "24";
                    this.view.flxHoursColor.skin = "sknFlxunder15Hours";
                }
                return {
                    "hours": totalHours,
                    "minutes": totalMin,
                    "overlap": overlap
                };
            }
        } catch (ex) {
            var er = {
                "func": "calculateHours",
                "err": "Exception " + JSON.stringify(ex)
            };
            commonUtils.exception(this, er, true);
            this.exception(ex);
        }
    },
    /**
     * @desc Success callback for get DPR history service
     * @param JSON response - Contains the dpr history for the current employee
     * @retun void
     */
    successCallback_DPRS: function(response) {
        if (commonUtils.checkIfEmpty(response)) {
            this.view.flxNoDPR.setVisibility(true);
            this.view.flxSubmitDPR.setVisibility(false);
            this.view.segPersonnel.setVisibility(false);
            this.dismissLoading();
        } else {
            this.view.flxNoDPR.setVisibility(false);
            this.prepareDataDPRS(response);
        }
    },
    /**
     * @desc errorCallback_GetHistory
     * @param err
     * @retun void
     */
    errorCallback_GetHistory: function(err) {
        var inp = {
            "msg": "Sorry, something went wrong. Please try again later.",
            "option": "error"
        };
        this.showBottomPopUp(inp);
        var er = {
            "func": "errorCallback_GetHistory",
            "err": "Errorcllback " + JSON.stringify(err)
        };
        commonUtils.exception(this, er, true);
    },
    onPersonnelClick: function() {
        try {
            var self = this;
            this.view.flxOptionCon.setVisibility(false);
            var operation = "Update";
            this.showLoading();
            var inp = this.view.segPersonnel.selectedRowItems[0];
            if (this.data.operation == "History") {
                operation = "History";
            } else if (this.data.operation == "Create") {
                operation = "Update";
            } else if (this.data.operation == "View") {
                operation = "View";
            }
            formStack.push({
                "frm": "frmAddDPR",
                "params": {
                    "reportDate": this.reportDate,
                    "headerData": this.headerData,
                    "employeeData": this.empData,
                    "projectId": this.projectId,
                    "projectData": this.projectData,
                    "navigatingFrom": "frmCreateDPR",
                    "operation": self.data.operation == "View" ? "View" : "Update",
                    "isBack": true
                }
            });
            commonUtils.navigateTo("frmCreateDPR", {
                "projectData": this.projectData,
                "headerData": this.headerData,
                "employeeData": this.empData,
                "dprData": inp.data,
                "dpr_Info_list": this.view.segPersonnel.data,
                "navigatingFrom": "frmAddDPR",
                "operation": operation,
                "isNewHeader": false,
                "isBack": false
            });
            this.dismissLoading();
            var deviceInfo = kony.os.deviceInfo();
            if (deviceInfo.name != "iPhone") {
                kony.application.destroyForm("frmAddDPR");
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    prepareDataDPRS: function(inp) {
        try {
            var data = [];
            for (var j = 0; j < inp.length; j++) {
                var ar = {
                    "lblName": inp[j].str_employeeName,
                    "lblDesignation": inp[j].str_jobPosition,
                    "lblTitle": inp[j].str_crewPosition,
                    "imgPersonnel": {
                        src: oceaneering.oms.appGlobals.employeeId === inp[j].str_employeeid ? "superimg.png" : "crewimg.png"
                    },
                    "empid": inp[j].str_employeeid,
                    "data": inp[j],
                    "btnDelete": {
                        isVisible: this.data.operation == "View" ? false : true,
                        onClick: this.onDeletePrompt.bind(this)
                    }
                };
                data.push(ar);
            }
            this.view.segPersonnel.setData(data);
            this.view.segPersonnel.setVisibility(true);
            this.dismissLoading();
        } catch (ex) {
            this.exception(ex);
        }
    },
    onDeletePrompt: function() {
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segPersonnel.selectedRowIndex[1];
        } else {
            index = this.view.segPersonnel.selectedIndex[1];
        }
        var response = this.view.segPersonnel.data[index];
        var inp = {
            "msg": "Sure you want to delete timesheet?",
            "option": "enable"
        };
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.onDeleteClick.bind(this, {
            "resposne": response,
            "index": index
        });
        this.view.bottompopup.btnBottomNotNow.onClick = () => {
            this.dismissBottomPopup();
        };
        this.showBottomPopUp(inp);
        this.view.bottompopup.imgToShow.setVisibility(false);
    },
    onDeleteClick: function(inp) {
        var self = this;
        var response = inp.resposne;
        var index = inp.index;
        this.dismissBottomPopup();
        this.showLoading();
        commonUtils.deletePersonnel(response.data).then((res) => {
            self.view.segPersonnel.removeAt(index);
            if (commonUtils.checkIfEmpty(self.view.segPersonnel.data) || self.view.segPersonnel.data.length === 0) {
                this.view.flxNoDPR.setVisibility(true);
                this.view.segPersonnel.setVisibility(false);
                commonUtils.deleteDprHeader(this.headerData).then((res) => {
                    this.onClickOfBack();
                }, (err) => {
                    this.dismissLoading();
                    kony.print("Error in onDeleteClick DPR");
                });
            } else {
                this.dismissLoading();
            }
        }, (err) => {
            kony.print("Deletion Failure");
            this.dismissLoading();
        });
    },
    addDPR: function(data) {
        formStack.push({
            "frm": "frmAddDPR",
            params: {
                "navigatingFrom": "frmCreateDPR",
                "reportDate": this.reportDate,
                "projectId": this.projectId,
                "operation": "Create",
                "employeeData": this.empData,
                "headerData": this.headerData,
                "projectData": this.projectData,
                "isBack": true
            }
        });
        data.projectId = this.projectId;
        data.projectData = this.projectData;
        data.dpr_Info_list = commonUtils.checkIfEmpty(this.view.segPersonnel.data) || this.view.segPersonnel.data.length > 0 ? (this.view.segPersonnel.data) : [];
        data.dprData = commonUtils.checkIfEmpty(this.view.segPersonnel.data) || this.view.segPersonnel.data.length > 0 ? (this.view.segPersonnel.data).data : [];
        data.isNewHeader = commonUtils.checkIfEmpty(this.view.segPersonnel.data) || this.view.segPersonnel.data.length === 0 ? true : false;
        commonUtils.navigateTo("frmCreateDPR", data);
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        if (deviceInfo.name != "iPhone") {
            kony.application.destroyForm("frmAddDPR");
        }
    },
    onClickMenu: function(input) {
        try {
            this.showLoading();
            var widgets = this.view.flxHamburger.widgets();
            if (parseInt(input) < 5 && this.operation !== "View") {
                this.view.flxFAB.setVisibility(true);
            } else {
                this.view.flxFAB.setVisibility(false);
            }
            for (var j = 0; j < widgets.length; j++) {
                var childwidget = this.view[widgets[j].id].widgets();
                this.view[widgets[j].id].skin = "sknFlxHamburgerUnselected";
                this.view[childwidget[0].id].skin = "sknLBL100Hamburger";
                this.view[childwidget[1].id].src = childwidget[1].id + ".png";
                if (j.toString() == input) {
                    this.view[widgets[j].id].skin = "sknFlxHamburgerSelected";
                    this.view[childwidget[0].id].skin = "sknLBL100HamburgerSelected";
                    this.view[childwidget[1].id].src = childwidget[1].id + "selected.png";
                    this.view.lblTitle.text = this.view[childwidget[0].id].text;
                    if (input === 3 || input === "3") {
                        this.view.lblTitle.text = "Tools/Charges";
                    }
                }
            }
            this.onMenuClickBody(input);
        } catch (ex) {
            this.exception(ex);
        }
    },
    onMenuClickBody: function(input) {
        try {
            var self = this;
            var arr = ["flxPersonnelBody", "flxEventsBody", "flxRoasterBody", "flxAssetToolsBody", "flxAttachmentBody", "flxCommentsBody", "flxCondition", "flxStatusBody", "flxFutureBody"];
            for (var j = 0; j < arr.length; j++) {
                this.view[arr[j]].setVisibility(false);
            }
            this.view.flxOptionCon.setVisibility(false);
            if (arr[parseInt(input)] == "flxPersonnelBody") {
                commonUtils.getDPRWithDPRID(this.headerData.str_reportid).then((res) => {
                    self.successCallback_DPRS(res.OMS_OP_DailyReportPersonnel);
                }, (err) => {
                    self.dismissLoading();
                    self.view.flxNoDPR.setVisibility(true);
                    self.view.segPersonnel.setVisibility(false);
                });
            } else if (arr[parseInt(input)] == "flxEventsBody") {
                this.view.segEvent.setVisibility(false);
                this.updateEventList();
            } else if (arr[parseInt(input)] == "flxRoasterBody") {
                this.view.segRoaster.setVisibility(false);
                this.updateRoasterList();
            } else if (arr[parseInt(input)] == "flxAssetToolsBody") {
                this.view.segAssetTools.setVisibility(false);
                this.updateAssetsToolsList();
            } else if (arr[parseInt(input)] == "flxAttachmentBody") {
                this.refreshFiles();
            } else {
                this.dismissLoading();
            }
            this.view[arr[parseInt(input)]].setVisibility(true);
        } catch (ex) {
            this.exception(ex);
        }
    },
    /**
     * @desc Sets the form details
     * @param JSON projectData - contains the project data to be displayed on the screen
     * @param JSON employeeData - contains the name, id and role of the current employee
     * @param boolean getTrc - True if we need to call a service to get TRC else false
     * @retun void
     */
    setDetails: function(projectData, employeeData, getTrc) {
        try {
            this.view.lblProjectDetails.text = "Project Details - " + projectData.projectId;
            this.view.lblSupervisorValue.text = oceaneering.oms.appGlobals.projectSupervisor;
            this.view.lblProjectManagerValue.text = oceaneering.oms.appGlobals.projectManager;
            this.view.lblEmpName.text = " - " + employeeData.empName;
        } catch (ex) {
            this.exception(ex);
        }
    },
    /**
     * @desc Called on click of the back button
     * @param -
     * @retun void
     */
    onClickOfBack: function() {
        this.showLoading();
        this.view.flxDPR.setEnabled(true);
        if (this.view.flxEventsContainer.isVisible) {
            this.eventRow = -1;
            this.view.flxEventsContainer.setVisibility(false);
            this.dismissLoading();
        } else if (this.view.flxRoasterContainer.isVisible) {
            this.view.flxRoasterContainer.setVisibility(false);
            this.dismissLoading();
        } else if (this.view.flxAssetsTools.isVisible) {
            this.view.flxAssetsTools.setVisibility(false);
            this.dismissLoading();
        } else if (this.view.flxGalleryLargerView.isVisible) {
            this.view.flxGalleryLargerView.setVisibility(false);
            this.dismissLoading();
        } else {
            var inp = commonUtils.getPreviousForm();
            this.dismissLoading();
            commonUtils.navigateTo(inp.frm, inp.params);
            formStack.pop();
            kony.application.destroyForm("frmAddDPR");
        }
    },
    showLoading: function() {
        try {
            this.view.flxLoading.setVisibility(true);
            this.view.flxLoading.setEnabled(false);
            this.view.flxHeader.setEnabled(false);
            this.view.flxDPR.setEnabled(false);
            this.view.flxFAB.setEnabled(false);
        } catch (ex) {
            this.exception(ex);
        }
    },
    dismissLoading: function() {
        try {
            this.view.flxLoading.setVisibility(false);
            this.view.flxLoading.setEnabled(true);
            this.view.flxHeader.setEnabled(true);
            this.view.flxDPR.setEnabled(true);
            this.view.flxFAB.setEnabled(true);
        } catch (ex) {
            this.exception(ex);
        }
    },
    showBottomPopUp: function(input) {
        try {
            this.dismissLoading();
            var self = this;
            var inp = {
                "msg": "Sorry, something went wrong.Please try again later.",
                "option": "error"
            };
            if (commonUtils.checkIfEmpty(input)) {
                input = inp;
            }
            this.resetBottomPopUp();
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
                        this.view.bottompopup.flxBottomPopUp.height = "200dp";
                        this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
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
                        "timingFunction": kony.anim.EASE
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
        } catch (ex) {
            this.exception(ex);
        }
    },
    dismissBottomPopup: function() {
        try {
            var self = this;
            this.view.bottompopup.flxBottomPopUp.animate(kony.ui.createAnimation({
                "100": {
                    "height": "0dp",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE
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
        } catch (ex) {
            this.exception(ex);
        }
    },
    resetBottomPopUp: function() {
        this.view.bottompopup.flxBottomPopUp.height = "0dp";
        this.view.bottompopup.flxBottomCover.setVisibility(false);
        this.view.bottompopup.lblBottomMessage.text = "";
        this.view.bottompopup.btnDismissBottomPopUp.setVisibility(false);
        this.view.bottompopup.imgToShow.setVisibility(false);
        this.view.bottompopup.flxEnableTouch.setVisibility(false);
    },
    onClickSubmit: function() {
        try {
            this.showLoading();
            var self = this;
            var projectId = this.headerData.str_projid;
            var DPRs = this.view.segPersonnel.data;
            this.headerData.dte_lastModified = (this.headerData.dte_lastModified).substring(0, 10) + "T" + (this.headerData.dte_lastModified).substring(11, 19);
            var finalDPR = [];
            var inp = {
                "header": commonUtils.getDPRHeaderReturn(this.headerData),
                "personnelList": []
            };
            var arr = [];
            for (var j = 0; j < DPRs.length; j++) {
                arr.push(DPRs[j].data);
            }
            inp.personnelList = commonUtils.getDPRPersonnelReturn(arr);
            if (!commonUtils.checkIfEmpty(this.view.segEvent.data) && !commonUtils.checkIfEmpty(this.view.segEvent.data[0].lblSystemId)) {
                var val = this.calculateHours();
                if (val.hours === 0 && val.minutes === 0) {
                    var param = {
                        "msg": "Enter at least one event to submit.", //"Please enter at least one event for Opeartion: " + inp.header.systemId + ".",
                        "option": "error"
                    };
                    this.showBottomPopUp(param);
                } else {
                    inp.eventsList = this.getEventsResponse();
                    this.submitWithEventsResponse(inp);
                }
            } else {
                var para = {
                    "msg": "Enter at least one event to submit.", //"Please enter at least one event for Opeartion: " + inp.header.systemId + ".",
                    "option": "error"
                };
                this.showBottomPopUp(para);
            }
        } catch (ex) {
            var er = {
                "func": "onClickSubmit",
                "err": "Exception " + JSON.stringify(ex)
            };
            commonUtils.exception(this, er, true);
            this.exception(ex);
        }
    },
    // ---------------------------------------------  With events -------------------- //
    submitWithEventsResponse: function(inp) {
        try {
            var self = this;
            inp.header.sja = null;
            inp.rosterList = [];
            inp.chargesList = [];
            inp.attachmentsList = [];
            commonUtils.getDPRRoaster(this.headerData.str_reportid).then((res) => {
                if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                    inp.rosterList = commonUtils.getRosterResponse(res);
                }
                commonUtils.getDPRAssetsTools(this.headerData.str_reportid).then((res) => {
                    if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                        inp.chargesList = commonUtils.AssetsToolsResponse(res);
                    }
                    //this.submitWithEvent(inp);
                    commonUtils.getAttachmentsForSubmit(this.headerData.str_reportid).then((res) => {
                        inp.attachmentsList = commonUtils.getAttachmentsResponse(res);
                        this.submitWithEvent(inp);
                    }, (err) => {
                        this.submitWithEvent(inp);
                    });
                }, (err) => {
                    this.submitWithEvent(inp);
                });
            }, (err) => {
                this.submitWithEvent(inp);
            });
        } catch (ex) {
            this.dismissLoading();
            this.exception(ex);
        }
    },
    submitWithEvent: function(inp) {
        try {
            commonUtils.submitDPRWithEvents(inp).then((res) => {
                this.afterSubmit(res);
            }, (err) => {
                this.dismissLoading();
                var inp = {
                    "msg": commonUtils.errMessage,
                    "option": "error"
                };
                this.showBottomPopUp(inp);
                var er = {
                    "func": "submitWithEvent",
                    "err": JSON.stringify(er)
                };
                commonUtils.exception(this, er, true);
                return;
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // ------------------------------------------------ ----------------------------------//
    afterSubmit: function(res) {
        try {
            var staggingUpdatde = [];
            var submitFinal = [];
            var self = this;
            submitFinal = res;
            var reportid = self.headerData.str_reportid;
            var header = Object.assign({}, self.headerData);
            header.dte_reportdate = (header.dte_reportdate).substring(0, 10);
            header.sja = null;
            if (submitFinal.status == "1" && submitFinal.message == "Success") {
                header.lng_status = 1;
                header.bln_RejectedOnshore = false;
                header.str_RejectComments = null;
                commonUtils.UpdateDPRHeader(header).then((values) => {
                    kony.timer.schedule("adddrpsubmit", () => {
                        kony.timer.cancel("adddrpsubmit");
                        self.dismissSuccess();
                        var inp = commonUtils.getPreviousForm();
                        commonUtils.navigateTo(inp.frm, inp.params);
                        formStack.pop();
                        kony.application.destroyForm("frmAddDPR");
                    }, 0.7, false);
                    this.showSuccess("submit");
                }, (err) => {
                    var inpt = {
                        "msg": commonUtils.errMessage,
                        "option": "error"
                    };
                    this.showBottomPopUp(inpt);
                    var er = {
                        "func": "afterSubmit",
                        "err": "ErrorCallback " + JSON.stringify(err)
                    };
                    commonUtils.exception(this, er, true);
                    return;
                });
            } else {
                var inptt = {
                    "msg": submitFinal.message,
                    "option": "error"
                };
                this.showBottomPopUp(inptt);
                var er = {
                    "func": "afterSubmit",
                    "err": "ErrorCallBack " + JSON.stringify(submitFinal.message)
                };
                commonUtils.exception(this, er, true);
                return;
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    // ------------------------------------------------------------------------------------//
    showSuccess: function(option) {
        var inp = "";
        switch (option) {
            case "submit":
                {
                    inp = " DPR submitted";
                    break;
                }
            case "event_Save":
                {
                    inp = " Event Saved";
                    break;
                }
            case "event_delete":
                {
                    inp = " Event Deleted";
                    break;
                }
            case "roster_save":
                {
                    inp = " Roster Saved";
                    break;
                }
            case "roster_delete":
                {
                    inp = " Roster Deleted";
                    break;
                }
            case "dateChange":
                {
                    inp = " DPR Date Changed";
                    break;
                }
            case "assetTools_save":
                {
                    inp = " Assets/Tools Saved";
                    break;
                }
            case "assetTools_delete":
                {
                    inp = " Assets/Tools Deleted";
                    break;
                }
            case "uploadSuccess":
                {
                    inp = " File Uploaded Successfully";
                    break;
                }
            case "Delete_file_Success":
                {
                    inp = " File Deleted Successfully";
                    break;
                }
            case "DataSaved":
                {
                    inp = " Data Saved Successfully";
                    break;
                }
        }
        var self = this;
        this.view.lblSaved.text = inp;
        this.view.flxSuccessStatus.setVisibility(true);
        this.view.flxSuccessStatus.animate(kony.ui.createAnimation({
            "100": {
                "left": "0%",
                "stepConfig": {
                    "timingFunction": kony.anim.LINEAR
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.8
        }, {
            "animationEnd": () => {
                if (!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.flxSuccessStatus)) {
                    self.view.flxSuccessStatus.setVisibility(true);
                }
            }
        });
    },
    dismissSuccess: function() {
        try {
            var self = this;
            self.view.flxSuccessStatus.animate(kony.ui.createAnimation({
                "100": {
                    "left": "100%",
                    "stepConfig": {
                        "timingFunction": kony.anim.LINEAR
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.8
            }, {
                "animationEnd": () => {
                    if (!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.flxSuccessStatus)) {
                        self.view.flxSuccessStatus.setVisibility(false);
                        self.dismissLoading();
                    }
                }
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // -------------------- Open List bottom up ------------ //
    onClickListBottom: function(widget) {
        try {
            var self = this;
            widget.flxFilterContainer.bottom = "-370dp";
            widget.setVisibility(true);
            widget.flxFilterContainer.animate(kony.ui.createAnimation({
                "100": {
                    "bottom": "0dp",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE_IN
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": () => {
                    widget.flxCoontainer.setVisibility(true);
                }
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    HideActivity: function(widget) {
        try {
            var self = this;
            this.view.flxEventsContainer.setEnabled(true);
            this.view.flxRoasterContainer.setEnabled(true);
            this.view.flxEventCon.setEnabled(true);
            this.view.flxRoasterCon.setEnabled(true);
            this.view.flxSaveEventCon.setEnabled(true);
            this.view.flxSaveRoaster.setEnabled(true);
            this.view.flxAssetToolsContainer.setEnabled(true);
            this.view.flxSaveAssets.setEnabled(true);
            widget.flxFilterContainer.animate(kony.ui.createAnimation({
                "100": {
                    "bottom": "-370dp",
                    "stepConfig": {
                        "timingFunction": kony.anim.EASE_IN
                    }
                }
            }), {
                "delay": 0,
                "iterationCount": 1,
                "fillMode": kony.anim.FILL_MODE_FORWARDS,
                "duration": 0.4
            }, {
                "animationEnd": () => {
                    widget.setVisibility(false);
                    widget.flxCoontainer.setVisibility(false);
                    self.dismissLoading();
                }
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    ///////////////////////////////  EVENTS ////////////////////////////////////////
    onRowClickEventType: function() {
        var selected = this.view.eventType.segServiceLine.selectedRowItems[0];
        this.view.lblEventType.text = selected.lblValue;
        this.view.lblEventTypeNo.text = selected.lblNumber;
        this.HideActivity(this.view.eventType);
    },
    onRowClickEventActivity: function() {
        var selected = this.view.eventActivity.segServiceLine.selectedRowItems[0];
        this.view.lblEventActivity.text = selected.lblValue;
        this.HideActivity(this.view.eventActivity);
    },
    onRowClickUOM: function() {
        var selected = this.view.eventUOM.segServiceLine.selectedRowItems[0];
        this.view.lblUOM.text = selected.lblValue;
        this.HideActivity(this.view.eventUOM);
    },
    // fetch the events and update the segment
    updateEventList: function() {
        try {
            var self = this;
            commonUtils.getDPREvents(this.headerData.str_reportid).then((res) => {
                self.setEventsList(res);
            }, (err) => {
                this.dismissLoading();
                var inp = {
                    "msg": "something went wrong. Please again later.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
                var er = {
                    "func": "updateEventList",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    setEventsList: function(data) {
        try {
            if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
                var arr = [];
                for (var j = 0; j < data.length; j++) {
                    var inp = {
                        "reportId": this.headerData.str_reportid,
                        "lblSystemId": data[j].str_systemid,
                        "lblEventType": data[j].str_EventType,
                        "lblTime": commonUtils.checkIfEmpty(data[j].str_endtime) ? data[j].str_starttime : data[j].str_starttime + " - " + data[j].str_endtime,
                        "startTime": data[j].str_starttime,
                        "lblMilesstone": data[j].bln_Milestone === false || data[j].bln_Milestone == "false" ? false : true,
                        "endTime": data[j].str_endtime,
                        "eventData": data[j],
                        "btnEventDelete": {
                            isVisible: this.data.operation == "View" ? false : true,
                            onClick: this.deleteEventPrompt.bind(this)
                        }
                    };
                    arr.push(inp);
                }
                var reportDate = (this.headerData.dte_reportdate).substring(0, 10);
                arr.sort((a, b) => {
                    return new Date(reportDate + "T" + a.startTime) - new Date(reportDate + "T" + b.startTime);
                });
                this.view.segEvent.setData(arr);
                this.view.flxNoEvent.setVisibility(false);
                this.view.segEvent.setVisibility(true);
                this.calculateHours();
                this.view.flxHours.setVisibility(true);
                this.dismissLoading();
            } else {
                this.view.flxHours.setVisibility(false);
                this.view.flxNoEvent.setVisibility(true);
                this.view.segEvent.setVisibility(false);
                this.view.segEvent.setData([]);
                this.globaleventstartTime = "00:00";
                this.dismissLoading();
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    // set the existing data for event
    openEventData: function() {
        try {
            // on click of segment
            var self = this;
            var deviceInfo = kony.os.deviceInfo();
            var index = "";
            if (deviceInfo.name != "iPhone") {
                index = this.view.segEvent.selectedRowIndex[1];
            } else {
                index = this.view.segEvent.selectedIndex[1];
            }
            var response = this.view.segEvent.data[index];
            // open the events page
            this.setDPREventData(response.eventData);
            if (this.operation != "View") {
                this.eventRow = index;
            }
            this.view.lblEventTitle.text = "Update Event";
            this.view.flxEventsContainer.setVisibility(true);
            this.view.flxEventsContainer.setEnabled(true);
            if (this.operation == "View") {
                this.view.flxEventCon.setEnabled(false);
                this.view.flxSaveEventCon.setVisibility(false);
            } else {
                this.view.flxEventCon.setEnabled(true);
                this.view.flxSaveEventCon.setVisibility(true);
            }
            this.view.flxDPR.setEnabled(false);
        } catch (ex) {
            this.exception(ex);
        }
    },
    deleteEventPrompt: function() {
        try {
            var self = this;
            var deviceInfo = kony.os.deviceInfo();
            var index = "";
            if (deviceInfo.name != "iPhone") {
                index = this.view.segEvent.selectedRowIndex[1];
            } else {
                index = this.view.segEvent.selectedIndex[1];
            }
            var data = this.view.segEvent.data[index];
            var inp = {
                "msg": "Sure you want to delete event?",
                "option": "enable"
            };
            this.showBottomPopUp(inp);
            this.view.bottompopup.btnBottomNotNow.text = "No";
            this.view.bottompopup.btnBottomEnable.text = "Yes";
            this.view.bottompopup.btnBottomEnable.onClick = this.deleteEvent.bind(this, data.eventData);
            this.view.bottompopup.btnBottomNotNow.onClick = () => {
                this.dismissBottomPopup();
            };
            this.view.bottompopup.imgToShow.setVisibility(false);
        } catch (ex) {
            this.exception(ex);
        }
    },
    // delete te existing event
    deleteEvent: function(data) {
        try {
            this.showLoading();
            var self = this;
            this.dismissBottomPopup();
            commonUtils.deleteDPREvent(data).then((res) => {
                kony.timer.schedule("deleteEvent", () => {
                    kony.timer.cancel("deleteEvent");
                    self.dismissSuccess();
                    self.updateEventList();
                }, 0.7, false);
                this.showSuccess("event_delete");
            }, (err) => {
                var input = {
                    "msg": "Unable to delete event. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "deleteEvent",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // upadate the existing event
    updateEvent: function(data) {
        try {
            var self = this;
            commonUtils.updateDPREvent(data).then((res) => {
                kony.timer.schedule("updateEvent", () => {
                    kony.timer.cancel("updateEvent");
                    self.dismissSuccess();
                    this.eventRow = -1;
                    self.updateEventList();
                    self.view.flxEventsContainer.setVisibility(false);
                }, 0.7, false);
                this.showSuccess("event_save");
            }, (err) => {
                var input = {
                    "msg": "Unable to save event. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "updateEvent",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // adding the new event
    addEventSave: function(activity) {
        try {
            var self = this;
            commonUtils.addDPREvent(activity).then((res) => {
                kony.timer.schedule("addEvent", () => {
                    kony.timer.cancel("addEvent");
                    self.dismissSuccess();
                    this.eventRow = -1;
                    self.updateEventList();
                    self.view.flxEventsContainer.setVisibility(false);
                }, 0.7, false);
                this.showSuccess("event_save");
            }, (err) => {
                var input = {
                    "msg": "Unable to save event. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "addEventSave",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // setting the the data in UI
    setDPREventData: function(data) {
        try {
            this.view.lblSystemValue.text = "PROJ_" + this.headerData.str_systemid;
            this.view.lblEventid.text = data.str_reportid;
            this.view.lblEventStart.text = data.str_starttime;
            this.view.lblEventEnd.text = commonUtils.checkIfEmpty(data.str_endtime) ? "" : data.str_endtime;
            this.view.lblEventType.text = data.str_EventType;
            this.view.lblEventTypeNo.text = data.lng_Eventtype;
            this.view.lblCheck.skin = (data.bln_Milestone == "true" || data.bln_Milestone === true) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED;
            this.view.lblCheck.text = (data.bln_Milestone == "true" || data.bln_Milestone === true) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL;
            this.view.txtDive.text = commonUtils.checkIfEmpty(data.lng_divenumber) ? "" : parseInt(data.lng_divenumber).toString();
            this.view.txtDiveDepth.text = commonUtils.checkIfEmpty(data.dbl_depth) ? "" : parseInt(data.dbl_depth).toString();
            this.view.lblUOM.text = commonUtils.checkIfEmpty(data.lng_DepthUom) ? "None" : this.setUOMValue(data.lng_DepthUom);
            this.view.lblEventActivity.text = commonUtils.checkIfEmpty(data.str_activity) ? "None" : (data.str_activity);
            if (data.bln_Milestone == "true" || data.bln_Milestone === true) {
                this.view.flxDescriptionSep0.setVisibility(false);
                this.view.flxDescriptionSep1.setVisibility(true);
                this.view.lblactivity.skin = "sknLBL1201c1c1cRed";
                this.view.flxSeparatorEnd.setVisibility(false);
                this.view.flxEventENd.setVisibility(false);
            } else {
                this.view.flxDescriptionSep0.setVisibility(true);
                this.view.flxDescriptionSep1.setVisibility(false);
                this.view.lblactivity.skin = "sknLBL1201c1c1c";
                this.view.flxSeparatorEnd.setVisibility(true);
                this.view.flxEventENd.setVisibility(true);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    // Saving the event in stgging table.
    onSaveEvent: function() {
        try {
            this.showLoading();
            var self = this;
            var activity = {};
            activity.str_reportid = Date.now();
            activity.str_report_id = this.headerData.str_reportid; // used this to fetch the events
            // related to particular dpr id
            activity.str_systemid = "PROJ_" + this.headerData.str_systemid;
            activity.lng_linenumber = 1;
            activity.str_starttime = this.view.lblEventStart.text;
            activity.str_endtime = commonUtils.checkIfEmpty(this.view.lblEventEnd.text) ? null : this.view.lblEventEnd.text;
            activity.str_EventType = commonUtils.checkIfEmpty(this.view.lblEventType.text) ? null : this.view.lblEventType.text;
            activity.lng_Eventtype = this.view.lblEventTypeNo.text;
            activity.bln_Milestone = (this.view.lblCheck.skin == commonUtils.TICKSELECTED) ? true : false;
            activity.lng_DepthUom = (this.view.lblUOM.text == "None") ? null : (this.view.lblUOM.text == "ft (Feet)") ? 7102 : 7101;
            activity.lng_divenumber = commonUtils.checkIfEmpty(this.view.txtDive.text) ? null : parseInt(this.view.txtDive.text);
            activity.dbl_depth = commonUtils.checkIfEmpty(this.view.txtDiveDepth.text) ? null : parseInt(this.view.txtDiveDepth.text);
            activity.str_activity = commonUtils.checkIfEmpty(this.view.lblEventActivity.text) || this.view.lblEventActivity.text == "None" ? null : this.view.lblEventActivity.text;
            if (this.mandatoryCheck(activity)) {
                var hrsOutput = this.calculateTotalHours(activity);
                this.checkIsAnyNewActivity(this.view.lblEventActivity.text);
                if (this.view.lblEventTitle.text == "Create Event") {
                    this.addEventSave(activity);
                } else {
                    activity.str_reportid = this.view.lblEventid.text;
                    this.updateEvent(activity);
                }
            } else {
                var inp = {
                    "msg": "Please enter all the required information.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    calculateTotalHours: function(data) {
        try {
            var hoursmin = this.calculateHours();
            var startTime = data.str_starttime;
            var endTime = data.str_endtime;
            var diffH = 0;
            var diffM = 0;
            var flag24 = true;
            if ((data.bln_Milestone === false || data.bln_Milestone == "false")) {
                if (endTime == "00:00" || endTime == "23:59") {
                    endTime = "24:00";
                }
                var time1hours = parseInt(startTime.substring(0, 2));
                var time2hours = parseInt(endTime.substring(0, 2));
                var time1Min = parseInt(startTime.substring(3, 5));
                var time2Min = parseInt(endTime.substring(3, 5));
                var date = new Date();
                var date1 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time1hours, time1Min);
                var date2 = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time2hours, time2Min);
                diffH = date2.getHours() - date1.getHours();
                diffM = date2.getMinutes() - date1.getMinutes();
                var newStartDate = "";
                if (diffH === 0 && diffM === 0) {
                    flag24 = true;
                    diffH = 24;
                    diffM = 0;
                } else {
                    if (diffH < 0 || (diffH === 0 && diffM < 0)) {
                        newStartDate = new Date(date1.getYear(), date1.getMonth(), date1.getDate() + 1, date1.getHours(), date1.getMinutes(), date1.getSeconds());
                        diffH = ((24 - newStartDate.getHours()) * 60 - newStartDate.getMinutes()) + date2.getHours() * 60 + date2.getMinutes();
                    } else {
                        diffH = (date2.getHours() * 60 + date2.getMinutes()) - (date1.getHours() * 60 + date1.getMinutes());
                    }
                }
                var final_mintes = diffH;
                if (diffH > 0) {
                    diffH = parseInt(diffH / 60);
                } else {
                    diffH = 0;
                }
                diffM = final_mintes % 60;
            }
            diffH = diffH + parseInt(hoursmin.hours);
            diffM = diffM + parseInt(hoursmin.minutes);
            if (diffM >= 60) {
                diffH = diffH + parseInt(diffM / 60);
                diffM = diffM % 60;
            }
            return {
                hrs: diffH,
                mins: diffM
            };
        } catch (ex) {
            this.exception(ex);
        }
    },
    mandatoryCheck: function(data) {
        var flag = true;
        if (commonUtils.checkIfEmpty(data.str_starttime)) {
            flag = false;
        }
        if ((data.bln_Milestone === false || data.bln_Milestone == "false") && commonUtils.checkIfEmpty(data.str_endtime)) {
            flag = false;
        }
        if ((data.bln_Milestone === true || data.bln_Milestone == "true") && (commonUtils.checkIfEmpty(data.str_activity) || data.str_activity == "None")) {
            flag = false;
        }
        if ((commonUtils.checkIfEmpty(data.str_EventType)) || data.str_EventType == "None") {
            flag = false;
        }
        return flag;
    },
    setUOMValue: function(value) {
        return value == "7102" || value === 7102 ? "ft (Feet)" : "m (Meter)";
    },
    /**
     * @desc Toggles the in transit checkbox
     * @param -
     * @retun void
     */
    toggleInTransit: function() {
        if (this.view.lblCheck.skin == commonUtils.TICKUNSELECTED) {
            this.view.lblCheck.skin = commonUtils.TICKSELECTED;
            this.view.lblCheck.text = commonUtils.TICK;
            this.view.flxSeparatorEnd.setVisibility(false);
            this.view.flxEventENd.setVisibility(false);
            this.view.lblEventEnd.text = "";
            this.view.flxDescriptionSep0.setVisibility(false);
            this.view.flxDescriptionSep1.setVisibility(true);
            this.view.lblactivity.skin = "sknLBL1201c1c1cRed";
        } else {
            this.view.lblCheck.skin = commonUtils.TICKUNSELECTED;
            this.view.lblCheck.text = commonUtils.TICKTEXTUNSEL;
            this.view.flxSeparatorEnd.setVisibility(true);
            this.view.flxEventENd.setVisibility(true);
            this.view.lblEventStart.text = this.globaleventstartTime;
            this.view.lblEventEnd.text = "";
            this.view.flxDescriptionSep0.setVisibility(true);
            this.view.flxDescriptionSep1.setVisibility(false);
            this.view.lblactivity.skin = "sknLBL1201c1c1c";
        }
    },
    // Resetting the UI of events
    onResetClickEvent: function() {
        try {
            this.view.lblEventStart.text = "";
            this.view.lblEventEnd.text = "";
            this.view.lblEventType.text = "None";
            this.view.lblEventTypeNo.text = "None";
            this.view.lblCheck.skin = commonUtils.TICKUNSELECTED;
            this.view.lblCheck.text = commonUtils.TICKTEXTUNSEL;
            this.view.txtDive.text = "";
            this.view.txtDiveDepth.text = "";
            this.view.lblUOM.text = "None";
            this.view.lblEventActivity.text = "None";
            this.view.lblEventStart.text = this.globaleventstartTime;
            this.view.flxEventENd.setVisibility(true);
            this.view.flxSeparatorEnd.setVisibility(true);
            this.view.flxDescriptionSep0.setVisibility(true);
            this.view.flxDescriptionSep1.setVisibility(false);
            this.view.lblactivity.skin = "sknLBL1201c1c1c";
            var arr = ["eventType", "eventUOM", "eventActivity"];
            for (var i = 0; i < arr.length; i++) {
                var temp = this.view[arr[i]].segServiceLine.data;
                if (!commonUtils.checkIfEmpty(temp) && temp.length > 0) {
                    for (var j = 0; j < temp.length; j++) {
                        temp[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        temp[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                    this.view[arr[i]].segServiceLine.setData(temp);
                }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    // on text change of activty
    onTextChangeActvity: function() {
        var data = [];
        var alldata = [];
        var selected = this.view.lblEventActivity.text;
        var str = this.view.eventActivity.tbxSearch.text;
        if (!commonUtils.checkIfEmpty(str)) {
            this.view.lblEventActivity.text = str;
            for (var j = 0; j < this.eventActivities.length; j++) {
                var inp = {
                    "lblValue": this.eventActivities[j].activity,
                    "lblCheck": {
                        isVisible: false
                    }
                };
                if (this.eventActivities[j].activity.includes(str)) {
                    data.push(inp);
                } else {
                    alldata.push(inp);
                }
            }
            this.view.eventActivity.segServiceLine.setData(data.length > 0 ? data : alldata);
        } else {
            this.showLoading();
            this.setActivity();
            this.dismissLoading();
        }
    },
    // set the values of UOM
    setEventUOM: function() {
        try {
            var val = this.UOM;
            var result = [];
            if (!commonUtils.checkIfEmpty(val) && val.length > 0) {
                for (var j = 0; j < val.length; j++) {
                    var inp = {
                        "lblValue": val[j].desc, //// ------------------
                        "lblCheck": {
                            isVisible: false,
                            text: commonUtils.TICKTEXTUNSEL,
                            skin: commonUtils.TICKUNSELECTED
                        }
                    };
                    result.push(inp);
                }
                this.view.eventUOM.segServiceLine.setData(result);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setActivity: function() {
        try {
            var val = this.eventActivities;
            var result = [];
            if (!commonUtils.checkIfEmpty(val) && val.length > 0) {
                for (var j = 0; j < val.length; j++) {
                    var inp = {
                        "lblValue": val[j].activity,
                        "lblCheck": {
                            isVisible: false,
                            text: commonUtils.TICKTEXTUNSEL,
                            skin: commonUtils.TICKUNSELECTED
                        }
                    };
                    result.push(inp);
                }
                this.view.eventActivity.segServiceLine.setData(result);
            } else {
                this.view.eventActivity.segServiceLine.setVisibility(false);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showActivity: function() {
        try {
            var self = this;
            var data = this.view.eventActivity.segServiceLine.data;
            var len = this.view.eventActivity.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len)) {
                len = len.length;
                if (!commonUtils.checkIfEmpty(self.view.lblEventActivity.text)) {
                    for (var j = 0; j < len; j++) {
                        if (self.view.lblEventActivity.text == data[j].lblValue) {
                            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                            data[j].lblCheck.text = commonUtils.TICK;
                        } else {
                            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                        }
                    }
                    this.view.eventActivity.segServiceLine.setData(data);
                }
                this.view.eventActivity.segServiceLine.setVisibility(true);
            } else {
                this.view.eventActivity.segServiceLine.setVisibility(false);
            }
            this.onClickListBottom(this.view.eventActivity);
        } catch (ex) {
            this.exception(ex);
        }
    },
    showUOM: function() {
        try {
            var data = this.view.eventUOM.segServiceLine.data;
            var len = this.view.eventUOM.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len)) {
                len = len.length;
                if (!commonUtils.checkIfEmpty(this.view.lblUOM.text)) {
                    for (var j = 0; j < len; j++) {
                        if (this.view.lblUOM.text == data[j].lblValue) {
                            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                            data[j].lblCheck.text = commonUtils.TICK;
                        } else {
                            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                        }
                    }
                    this.view.eventUOM.segServiceLine.setData(data);
                }
                this.onClickListBottom(this.view.eventUOM);
            } else {
                this.showBottomPopUp({
                    "msg": "No UOM available",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    // Show the events on click
    showEventType: function() {
        var data = this.view.eventType.segServiceLine.data;
        var len = this.view.eventType.segServiceLine.data;
        if (!commonUtils.checkIfEmpty(len)) {
            len = len.length;
            if (!commonUtils.checkIfEmpty(this.view.lblEventType.text)) {
                for (var j = 0; j < len; j++) {
                    if (this.view.lblEventType.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.eventType.segServiceLine.setData(data);
            }
            this.onClickListBottom(this.view.eventType);
        } else {
            this.showBottomPopUp({
                "msg": "No event type available",
                "option": "error"
            });
        }
    },
    // set the existing activities
    setEvents: function() {
        try {
            var val = this.eventsType;
            var result = [];
            if (!commonUtils.checkIfEmpty(val) && val.length > 0) {
                for (var j = 0; j < val.length; j++) {
                    var inp = {
                        "lblValue": val[j].eventDescription,
                        "lblNumber": val[j].eventId,
                        "lblCheck": {
                            isVisible: false,
                            text: commonUtils.TICKTEXTUNSEL,
                            skin: commonUtils.TICKUNSELECTED
                        }
                    };
                    result.push(inp);
                }
                this.view.eventType.segServiceLine.setData(result);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    // fetch the activities from stagginf table
    fetchActivites: function() {
        var self = this;
        commonUtils.getEventActivities(this.headerData.str_projid).then((res) => {
            self.eventActivities = res;
            self.setActivity();
        }, (err) => {
            kony.print("Error in getting Activities");
        });
    },
    // save the new activity to the database
    saveNewActivity: function(data) {
        var inp = {
            "activity": data,
            "projectid": this.headerData.str_projid,
            "created_Date": this.formatDate(new Date())
        };
        commonUtils.addEventActivity(inp).then((res) => {
            this.fetchActivites();
        }, (err) => {
            kony.print("Error in getting activites");
        });
    },
    // check if new activity is added or not
    checkIsAnyNewActivity: function(newActivity) {
        try {
            if (!commonUtils.checkIfEmpty(this.eventActivities) && this.eventActivities.length > 0) {
                var anyValue = this.eventActivities.filter(arr => arr.activity == newActivity);
                if (!(!commonUtils.checkIfEmpty(anyValue) && anyValue.length > 0)) {
                    this.saveNewActivity(newActivity);
                }
            } else {
                this.saveNewActivity(newActivity);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    /**
     * @desc Formats a date object into a string in the format YYYY-MM-DD
     * @param Date date - Contains a date object of a date to be converted into string
     * @retun String - YYYY-MM-DD date
     */
    formatDate: function(date) {
        var month = '' + (date.getMonth() + 1),
            day = '' + date.getDate(),
            year = date.getFullYear();
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        return year + "-" + month + "-" + day;
    },
    //check if the start time is greater rr equal
    checkStartEndTime: function() {
        if (!commonUtils.checkIfEmpty(this.view.lblEventStart.text) && !commonUtils.checkIfEmpty(this.view.lblEventEnd.text)) {
            var from = Date.parse(new Date((this.headerData.dte_reportdate).substring(0, 10) + "T" + this.view.lblEventStart.text + ":00"));
            var to = Date.parse(new Date((this.headerData.dte_reportdate).substring(0, 10) + "T" + this.view.lblEventEnd.text + ":00"));
            if (from > to) {}
            return true;
        }
        return false;
    },
    getEventsResponse: function() {
        var data = this.view.segEvent.data;
        if (!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblTime)) {
            var arr = [];
            for (var j = 0; j < data.length; j++) {
                var res = {
                    "reportId": data[j].reportId,
                    "lineNumber": j + 1,
                    "startTime": data[j].eventData.str_starttime,
                    "endTime": commonUtils.checkIfEmpty(data[j].eventData.str_endtime) ? null : data[j].eventData.str_endtime,
                    "activity": commonUtils.checkIfEmpty(data[j].eventData.str_activity) ? null : data[j].eventData.str_activity,
                    "diveNumber": commonUtils.checkIfEmpty(data[j].eventData.lng_divenumber) ? null : parseInt(data[j].eventData.lng_divenumber),
                    "depth": commonUtils.checkIfEmpty(data[j].eventData.dbl_depth) ? null : parseInt(data[j].eventData.dbl_depth),
                    "eventType": commonUtils.checkIfEmpty(data[j].eventData.lng_Eventtype) ? null : parseInt(data[j].eventData.lng_Eventtype),
                    "systemId": commonUtils.checkIfEmpty(data[j].eventData.str_systemid) ? null : data[j].eventData.str_systemid,
                    "depthUom": commonUtils.checkIfEmpty(data[j].eventData.lng_DepthUom) ? null : parseInt(data[j].eventData.lng_DepthUom),
                    "milestone": data[j].lblMilesstone === false || data[j].lblMilesstone == "false" ? false : true
                };
                arr.push(res);
            }
            return arr;
        }
    },
    /// --------------------------------------- Roaster ------------------------//
    bindRoasterEvents: function() {
        try {
            var self = this;
            this.view.flxRoasterBack.onClick = () => {
                self.showLoading();
                self.view.flxRoasterContainer.setVisibility(false);
                self.view.flxDPR.setEnabled(true);
                self.dismissLoading();
            };
            this.view.flxRoasterClient.onClick = this.toggleCheckBox.bind(this, "lblRoasterClient");
            this.view.flxMobeCheck.onClick = this.toggleCheckBox.bind(this, "lblMobeCheck");
            this.view.flxDemobeCheck.onClick = this.toggleCheckBox.bind(this, "lblDemobeCheck");
            this.view.flxRoasterSave.onClick = this.saveRoaster.bind(this);
            this.view.flxResetRoaster.onClick = this.onResetClickRoaster.bind(this);
            this.view.roasterRaft.segServiceLine.onRowClick = this.onRowClickRoasterRaft.bind(this);
            this.view.roasterRaft.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.roasterRaft);
            this.view.roasterStatus.segServiceLine.onRowClick = this.onRowClickRoasterStatus.bind(this);
            this.view.roasterStatus.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.roasterStatus);
            this.view.flxRaftPop.onClick = this.showRaft.bind(this);
            this.view.flxAdhocPop.onClick = this.showStatus.bind(this);
            this.view.segRoaster.onRowClick = this.openRoasterData.bind(this);
        } catch (ex) {
            this.exception(ex);
        }
    },
    // set the existing data for event
    openRoasterData: function() {
        // on click of segment
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segRoaster.selectedRowIndex[1];
        } else {
            index = this.view.segRoaster.selectedIndex[1];
        }
        var response = this.view.segRoaster.data[index];
        // open the events page
        this.setRoasterData(response.roasterData);
        this.view.lblHeaderRoaster.text = "Update Roster";
        this.view.flxRoasterContainer.setVisibility(true);
        this.view.flxRoasterContainer.setEnabled(true);
        if (this.operation == "View") {
            this.view.flxRoasterCon.setEnabled(false);
            this.view.flxSaveRoaster.setVisibility(false);
        } else {
            this.view.flxRoasterCon.setEnabled(true);
            this.view.flxSaveRoaster.setVisibility(true);
        }
        this.view.flxDPR.setEnabled(false);
    },
    /**
     * @desc Toggles the in transit checkbox
     * @param -
     * @retun void
     */
    toggleCheckBox: function(widget) {
        if (this.view[widget].skin == commonUtils.TICKUNSELECTED) {
            this.view[widget].skin = commonUtils.TICKSELECTED;
            this.view[widget].text = commonUtils.TICK;
        } else {
            this.view[widget].skin = commonUtils.TICKUNSELECTED;
            this.view[widget].text = commonUtils.TICKTEXTUNSEL;
        }
    },
    openRoasterBody: function() {
        this.view.flxRoasterContainer.setEnabled(true);
        this.onResetClickRoaster();
        this.view.lblHeaderRoaster.text = "Create Roster";
        this.view.txtRoasterName.text = "";
        this.view.txtRoasterClass.text = "";
        this.view.flxRoasterContainer.setVisibility(true);
        this.view.flxDPR.setEnabled(false);
    },
    onResetClickRoaster: function() {
        this.view.txtRoasterClass.text = "";
        this.view.txtRoasterDivision.text = "";
        this.view.txtRoasterRoom.text = "";
        this.view.txtRoasterPhone.text = "";
        this.view.lblRaft.text = "None";
        this.view.txtRoasterVOC.text = "";
        this.view.lblRoasterClient.skin = commonUtils.TICKUNSELECTED;
        this.view.lblRoasterClient.text = commonUtils.TICKTEXTUNSEL;
        this.view.lblMobeCheck.skin = commonUtils.TICKUNSELECTED;
        this.view.lblMobeCheck.text = commonUtils.TICKTEXTUNSEL;
        this.view.lblDemobeCheck.skin = commonUtils.TICKUNSELECTED;
        this.view.lblDemobeCheck.text = commonUtils.TICKTEXTUNSEL;
        this.view.lblStatus.text = "Call-Off";
    },
    saveRoaster: function() {
        try {
            this.showLoading();
            var roster = {};
            roster.lng_linenumber = 1;
            roster.str_report_id = this.headerData.str_reportid;
            roster.str_name = commonUtils.checkIfEmpty(this.view.txtRoasterName.text) ? null : this.view.txtRoasterName.text;
            roster.str_class = commonUtils.checkIfEmpty(this.view.txtRoasterClass.text) ? null : this.view.txtRoasterClass.text;
            roster.str_division = commonUtils.checkIfEmpty(this.view.txtRoasterDivision.text) ? null : this.view.txtRoasterDivision.text;
            roster.str_room = commonUtils.checkIfEmpty(this.view.txtRoasterRoom.text) ? null : this.view.txtRoasterRoom.text;
            roster.str_phone = commonUtils.checkIfEmpty(this.view.txtRoasterPhone.text) ? null : this.view.txtRoasterPhone.text;
            roster.lng_rafttype = (commonUtils.checkIfEmpty(this.view.lblRaft.text) || this.view.lblRaft.text == "None") ? 81061 : (this.view.lblRaft.text == "Port") ? 81062 : 81063;
            roster.str_reportid = Date.now();
            roster.str_VOR = commonUtils.checkIfEmpty(this.view.txtRoasterVOC.text) ? null : this.view.txtRoasterVOC.text;
            roster.bln_client = this.view.lblRoasterClient.skin == commonUtils.TICKSELECTED ? true : false;
            roster.bln_mob = this.view.lblMobeCheck.skin == commonUtils.TICKSELECTED ? true : false;
            roster.bln_demob = this.view.lblDemobeCheck.skin == commonUtils.TICKSELECTED ? true : false;
            roster.bln_ADHOC = (this.view.lblStatus.text == "ADHOC") ? true : false;
            roster.str_date = this.formatDate(new Date());
            if (commonUtils.checkIfEmpty(roster.str_name)) {
                var input = {
                    "msg": "Please enter all the required information.",
                    "option": "error"
                };
                this.showBottomPopUp(input);
                this.dismissLoading();
            } else {
                if (this.view.lblHeaderRoaster.text == "Create Roster") {
                    this.addRoaster(roster);
                } else {
                    roster.str_reportid = parseInt(this.view.lblRoasterId.text);
                    this.updateRoaster(roster);
                }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setRoasterData: function(data) {
        try {
            this.view.lblRoasterId.text = data.str_reportid;
            this.view.txtRoasterName.text = commonUtils.checkIfEmpty(data.str_name) ? "" : data.str_name;
            this.view.txtRoasterClass.text = commonUtils.checkIfEmpty(data.str_class) ? "" : data.str_class;
            this.view.txtRoasterDivision.text = commonUtils.checkIfEmpty(data.str_division) ? "" : data.str_division;
            this.view.txtRoasterRoom.text = commonUtils.checkIfEmpty(data.str_room) ? "" : data.str_room;
            this.view.txtRoasterPhone.text = commonUtils.checkIfEmpty(data.str_phone) ? "" : data.str_phone;
            this.view.txtRoasterVOC.text = commonUtils.checkIfEmpty(data.str_VOR) ? "" : data.str_VOR;
            this.view.lblRaft.text = (commonUtils.checkIfEmpty(data.lng_rafttype) || data.lng_rafttype == "81061") ? "None" : (data.lng_rafttype == "81062") ? "Port" : "StarBoard";
            this.view.lblRoasterClient.skin = commonUtils.checkIfEmpty(data.bln_client) ? commonUtils.TICKUNSELECTED : ("true" == data.bln_client || "1" == data.bln_client) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED;
            this.view.lblRoasterClient.text = commonUtils.checkIfEmpty(data.bln_client) ? commonUtils.TICKTEXTUNSEL : ("true" == data.bln_client || "1" == data.bln_client) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL;
            this.view.lblMobeCheck.skin = commonUtils.checkIfEmpty(data.bln_mob) ? commonUtils.TICKUNSELECTED : ("true" == data.bln_mob || "1" == data.bln_mob) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED;
            this.view.lblMobeCheck.text = commonUtils.checkIfEmpty(data.bln_mob) ? commonUtils.TICKTEXTUNSEL : ("true" == data.bln_mob || "1" == data.bln_mob) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL;
            this.view.lblDemobeCheck.skin = commonUtils.checkIfEmpty(data.bln_demob) ? commonUtils.TICKUNSELECTED : ("true" == data.bln_demob || "1" == data.bln_demob) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED;
            this.view.lblDemobeCheck.text = commonUtils.checkIfEmpty(data.bln_demob) ? commonUtils.TICKTEXTUNSEL : ("true" == data.bln_demob || "1" == data.bln_demob) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL;
            this.view.lblStatus.text = commonUtils.checkIfEmpty(data.bln_ADHOC) ? "Call-Off" : (data.bln_ADHOC == "true") ? "ADHOC" : "Call-Off";
        } catch (ex) {
            this.exception(ex);
        }
    },
    addRoaster: function(data) {
        try {
            var self = this;
            commonUtils.addDPRRoaster(data).then((res) => {
                kony.timer.schedule("addRoaster", () => {
                    kony.timer.cancel("addRoaster");
                    self.dismissSuccess();
                    self.updateRoasterList();
                    self.view.flxRoasterContainer.setVisibility(false);
                }, 0.7, false);
                this.showSuccess("roster_save");
            }, (err) => {
                var input = {
                    "msg": "Unable to save roster. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "addRoaster",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    updateRoaster: function(data) {
        try {
            var self = this;
            commonUtils.updateDPRRoaster(data).then((res) => {
                kony.timer.schedule("updateRoaster", () => {
                    kony.timer.cancel("updateRoaster");
                    self.dismissSuccess();
                    self.updateRoasterList();
                    self.view.flxRoasterContainer.setVisibility(false);
                }, 0.7, false);
                this.showSuccess("roster_save");
            }, (err) => {
                var input = {
                    "msg": "Unable to save roster. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "updateRoaster",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // fetch the events and update the segment
    updateRoasterList: function() {
        try {
            this.showLoading();
            var self = this;
            commonUtils.getDPRRoaster(this.headerData.str_reportid).then((res) => {
                self.setRoasterList(res);
            }, (err) => {
                this.dismissLoading();
                var inp = {
                    "msg": "Something went wrong. Please again later.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
                var er = {
                    "func": "updateRoasterList",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    setRoasterList: function(data) {
        if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
            var arr = [];
            for (var j = 0; j < data.length; j++) {
                var inp = {
                    "reportId": this.headerData.str_reportid,
                    "dateandtime": data[j].str_date,
                    "lblName": data[j].str_name,
                    "lblClass": {
                        isVisible: commonUtils.checkIfEmpty(data[j].str_class) ? false : true,
                        text: data[j].str_class
                    },
                    "lblDivision": data[j].str_division,
                    "roasterData": data[j],
                    "btnRoasterDelete": {
                        isVisible: (this.data.operation == "View") ? false : true,
                        onClick: this.deleteRoasterPrompt.bind(this)
                    }
                };
                arr.push(inp);
            }
            arr.sort((a, b) => {
                return new Date(a) - new Date(b);
            });
            this.view.segRoaster.setData(arr);
            this.view.flxNoRoaster.setVisibility(false);
            this.view.segRoaster.setVisibility(true);
        } else {
            this.view.flxNoRoaster.setVisibility(true);
            this.view.segRoaster.setVisibility(false);
        }
        this.dismissLoading();
    },
    deleteRoasterPrompt: function() {
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segRoaster.selectedRowIndex[1];
        } else {
            index = this.view.segRoaster.selectedIndex[1];
        }
        var data = this.view.segRoaster.data[index];
        var inp = {
            "msg": "Sure you want to delete roster?",
            "option": "enable"
        };
        this.showBottomPopUp(inp);
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.deleteRoaster.bind(this, data.roasterData);
        this.view.bottompopup.btnBottomNotNow.onClick = () => {
            this.dismissBottomPopup();
        };
        this.view.bottompopup.imgToShow.setVisibility(false);
    },
    // delete te existing event
    deleteRoaster: function(data) {
        try {
            this.dismissBottomPopup();
            this.showLoading();
            var self = this;
            commonUtils.deleteDPRRoaster(data).then((res) => {
                kony.timer.schedule("deleteRoaster", () => {
                    kony.timer.cancel("deleteRoaster");
                    self.dismissSuccess();
                    self.updateRoasterList();
                }, 0.7, false);
                this.showSuccess("roster_delete");
            }, (err) => {
                var input = {
                    "msg": "Unable to delete roster. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "deleteRoaster",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    showRaft: function() {
        var data = this.view.roasterRaft.segServiceLine.data;
        var len = this.view.roasterRaft.segServiceLine.data;
        if (!commonUtils.checkIfEmpty(len)) {
            len = len.length;
            if (!commonUtils.checkIfEmpty(this.view.lblRaft.text)) {
                for (var j = 0; j < len; j++) {
                    if (this.view.lblRaft.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.roasterRaft.segServiceLine.setData(data);
            }
            this.onClickListBottom(this.view.roasterRaft);
        } else {
            this.showBottomPopUp({
                "msg": "No raft available",
                "option": "error"
            });
        }
    },
    showStatus: function() {
        var data = this.view.roasterStatus.segServiceLine.data;
        var len = this.view.roasterStatus.segServiceLine.data;
        if (!commonUtils.checkIfEmpty(len)) {
            len = len.length;
            if (!commonUtils.checkIfEmpty(this.view.lblStatus.text)) {
                for (var j = 0; j < len; j++) {
                    if (this.view.lblStatus.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.roasterStatus.segServiceLine.setData(data);
            }
            this.onClickListBottom(this.view.roasterStatus);
        } else {
            this.showBottomPopUp({
                "msg": "No Status available",
                "option": "error"
            });
        }
    },
    onRowClickRoasterRaft: function() {
        var selected = this.view.roasterRaft.segServiceLine.selectedRowItems[0];
        this.view.lblRaft.text = selected.lblValue;
        this.HideActivity(this.view.roasterRaft);
    },
    onRowClickRoasterStatus: function() {
        var selected = this.view.roasterStatus.segServiceLine.selectedRowItems[0];
        this.view.lblStatus.text = selected.lblValue;
        this.HideActivity(this.view.roasterStatus);
    },
    resetEventsAndRoster: function() {
        this.view.flxEventCon.setEnabled(true);
        this.view.flxSaveEventCon.setVisibility(true);
        this.view.flxRoasterCon.setEnabled(true);
        this.view.flxSaveRoaster.setVisibility(true);
    },
    // ----------------------------------------  Assets / Tools -----------------------------------//
    bindAssetsTools: function() {
        try {
            this.view.flxAssetToolsback.onClick = this.onClickOfBack.bind(this);
            this.view.flxTypeAsset.onClick = this.showAssetsType.bind(this);
            this.view.flxAssetToolsSave.onClick = this.onSaveAssetsTools.bind(this);
            this.view.flxAssetToolsReset.onClick = this.resetAssetTools.bind(this);
            this.view.flxCustomerCheck.onClick = this.toggleCustomer.bind(this);
            this.view.segAssetTools.onRowClick = this.openAssetsTools.bind(this);
            this.view.assetType.segServiceLine.onRowClick = this.onTypeClick.bind(this);
            this.view.assetType.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.assetType);
            this.setAssetToolsType();
            this.bindContractEvent();
        } catch (ex) {
            this.exception(ex);
        }
    },
    // set the existing data for event
    openAssetsTools: function() {
        // on click of segment
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        this.showLoading();
        if (deviceInfo.name != "iPhone") {
            index = this.view.segAssetTools.selectedRowIndex[1];
        } else {
            index = this.view.segAssetTools.selectedIndex[1];
        }
        var response = this.view.segAssetTools.data[index];
        // open the events page
        this.setAssetsToolsData(response.AssetToolsData);
        this.view.lblHeaderTools.text = "Update Tools/Charges";
        this.view.flxAssetType.setFocus(true);
        this.view.flxAssetsTools.setVisibility(true);
        this.view.flxAssetsTools.setEnabled(true);
        var widgets = this.view.flxAssetToolsContainer.widgets();
        if (this.operation == "View") {
            for (var j = 0; j < widgets.length; j++) {
                this.view[widgets[j].id].setEnabled(false);
            }
            this.view.flxSaveAssets.setVisibility(false);
            this.view.flxAssetToolsContainer.height = "93%";
        } else {
            for (var k = 0; k < widgets.length; k++) {
                this.view[widgets[k].id].setEnabled(true);
            }
            this.view.flxAssetToolsContainer.setEnabled(true);
            this.view.flxSaveAssets.setVisibility(true);
            this.view.flxAssetToolsContainer.height = "85%";
        }
        this.view.flxDPR.setEnabled(false);
    },
    openAssetsToolsBody: function() {
        this.view.flxAssetType.setFocus(true);
        this.showLoading();
        this.resetAssetTools();
        this.view.flxAssetsTools.setEnabled(true);
        this.view.lblHeaderTools.text = "Create Tools/Charges";
        this.view.flxAssetsTools.setVisibility(true);
        this.view.flxDPR.setEnabled(false);
        this.setContractDefault();
    },
    onSaveAssetsTools: function() {
        try {
            this.showLoading();
            var assetTools = {};
            assetTools.lng_linenumber = 1;
            assetTools.str_reportId = Date.now();
            assetTools.str_report_id = this.headerData.str_reportid;
            assetTools.lng_chargeType = commonUtils.checkIfEmpty(this.view.lblTypeId.text) ? "" : this.view.lblTypeId.text;
            assetTools.str_idNumber = commonUtils.checkIfEmpty(this.view.tbxAssetId.text) ? null : this.view.tbxAssetId.text;
            assetTools.str_description = commonUtils.checkIfEmpty(this.view.txtDescriptionValue.text) ? null : this.view.txtDescriptionValue.text;
            assetTools.dbl_quantity = commonUtils.checkIfEmpty(this.view.tbxQuantity.text) ? 1 : parseInt(this.view.tbxQuantity.text);
            assetTools.str_assetType = commonUtils.checkIfEmpty(this.view.tbxAssetType.text) ? null : this.view.tbxAssetType.text;
            assetTools.str_childProject = commonUtils.checkIfEmpty(this.view.lblChildProject.text) || this.view.lblChildProject.text == "None" ? null : this.view.lblChildProject.text;
            assetTools.str_sourceType = commonUtils.checkIfEmpty(this.view.lblSourceType.text) || this.view.lblSourceType.text == "None" ? null : this.view.lblSourceType.text;
            assetTools.str_activity = commonUtils.checkIfEmpty(this.view.lblAssetActivityId.text) || this.view.lblAssetActivityId.text == "None" ? null : this.view.lblAssetActivityId.text;
            assetTools.str_category = commonUtils.checkIfEmpty(this.view.lblCategoryId.text) || this.view.lblCategoryId.text == "None" ? null : this.view.lblCategoryId.text;
            assetTools.str_subCategory = commonUtils.checkIfEmpty(this.view.lblSubCategoryId.text) || this.view.lblSubCategoryId.text == "None" ? null : this.view.lblSubCategoryId.text;
            assetTools.str_contractSerialId = commonUtils.checkIfEmpty(this.view.lblContractSerial.text) || this.view.lblContractSerial.text == "None" ? null : this.view.lblContractSerial.text;
            assetTools.str_serialId = commonUtils.checkIfEmpty(this.view.tbxSerialId.text) ? null : this.view.tbxSerialId.text;
            assetTools.str_assetSubType = commonUtils.checkIfEmpty(this.view.tbxAssetSubtype1.text) ? null : this.view.tbxAssetSubtype1.text;
            assetTools.str_assetSubType2 = commonUtils.checkIfEmpty(this.view.tbxAssetSubType2.text) ? null : this.view.tbxAssetSubType2.text;
            assetTools.dbl_dailyRate = commonUtils.checkIfEmpty(this.view.tbxRate.text) ? 0 : parseInt(this.view.tbxRate.text);
            assetTools.dte_startDate = this.getReportDate(this.view.cldStartDate);
            assetTools.dte_endDate = this.getReportDate(this.view.cldEndDate);
            assetTools.str_clientAfeNumber = commonUtils.checkIfEmpty(this.view.tbxAefNumber.text) ? null : this.view.tbxAefNumber.text;
            assetTools.bln_customerEquipment = (this.view.lblCustomerCheck.skin == commonUtils.TICKSELECTED) ? true : false;
            assetTools.str_businessUnit = "PROJ_" + this.headerData.str_projid;
            assetTools.str_modifiedBy = oceaneering.oms.appGlobals.employeeId;
            if (commonUtils.checkIfEmpty(assetTools.lng_chargeType) || assetTools.lng_chargeType == "None") {
                var input = {
                    "msg": "Please enter all the required information.",
                    "option": "error"
                };
                this.showBottomPopUp(input);
                this.dismissLoading();
            } else {
                if (this.view.lblHeaderTools.text == "Create Tools/Charges") {
                    assetTools.str_createdby = oceaneering.oms.appGlobals.employeeId;
                    assetTools.dte_createdDate = commonUtils.formatDate(new Date());
                    this.addAssetsTools(assetTools);
                } else {
                    assetTools.dte_createdDate = commonUtils.formatDate(new Date());
                    assetTools.str_reportId = parseInt(this.view.lblReportAssetTools.text);
                    this.updateAssetsTools(assetTools);
                }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setAssetsToolsData: function(data) {
        try {
            var self = this;
            this.view.lblReportAssetTools.text = data.str_reportId;
            this.view.lblType.text = this.getType(data.lng_chargeType);
            this.view.lblTypeId.text = data.lng_chargeType;
            this.view.toolsCharges.src = this.getTypeImage(data.lng_chargeType) + ".png";
            this.view.toolsCharges.setVisibility(true);
            this.view.tbxAssetId.text = commonUtils.checkIfEmpty(data.str_idNumber) ? "" : (data.str_idNumber).toString();
            this.view.txtDescriptionValue.text = commonUtils.checkIfEmpty(data.str_description) ? "" : data.str_description;
            this.view.tbxQuantity.text = commonUtils.checkIfEmpty(data.dbl_quantity) ? "1" : parseFloat(data.dbl_quantity).toString();
            this.view.tbxAssetType.text = commonUtils.checkIfEmpty(data.str_assetType) ? "" : data.str_assetType;
            this.view.lblChildProject.text = commonUtils.checkIfEmpty(data.str_childProject) ? "None" : data.str_childProject;
            this.view.lblSourceType.text = commonUtils.checkIfEmpty(data.str_sourceType) ? "None" : data.str_sourceType;
            this.view.lblAssetActivity.text = commonUtils.checkIfEmpty(data.str_activity) ? "None" : (data.str_activity).split(",")[0] + " (" + (data.str_activity).split(",")[1] + ")";
            this.view.lblAssetActivityId.text = commonUtils.checkIfEmpty(data.str_activity) ? "None" : data.str_activity;
            this.view.lblCategory.text = commonUtils.checkIfEmpty(data.str_category) ? "None" : (data.str_category).split(",")[0] + " (" + (data.str_category).split(",")[1] + ")";
            this.view.lblCategoryId.text = commonUtils.checkIfEmpty(data.str_category) ? "None" : data.str_category;
            this.view.lblSubCategory.text = commonUtils.checkIfEmpty(data.str_subCategory) ? "None" : (data.str_subCategory).split(",")[0] + " (" + (data.str_subCategory).split(",")[1] + ")";
            this.view.lblSubCategoryId.text = commonUtils.checkIfEmpty(data.str_subCategory) ? "None" : data.str_subCategory;
            this.view.lblContractSerial.text = commonUtils.checkIfEmpty(data.str_contractSerialId) ? "None" : data.str_contractSerialId;
            this.view.tbxSerialId.text = commonUtils.checkIfEmpty(data.str_serialId) ? "" : data.str_serialId;
            this.view.tbxAssetSubtype1.text = commonUtils.checkIfEmpty(data.str_assetSubType) ? "" : data.str_assetSubType;
            this.view.tbxAssetSubType2.text = commonUtils.checkIfEmpty(data.str_assetSubType2) ? "" : data.str_assetSubType2;
            this.view.tbxRate.text = commonUtils.checkIfEmpty(data.dbl_dailyRate) ? "0" : parseFloat(data.dbl_dailyRate).toString();
            this.view.cldStartDate.dateComponents = commonUtils.checkIfEmpty(data.dte_startDate) ? "" : commonUtils.getDateFromText(data.dte_startDate);
            this.view.cldEndDate.dateComponents = commonUtils.checkIfEmpty(data.dte_endDate) ? "" : commonUtils.getDateFromText(data.dte_endDate);
            this.view.tbxAefNumber.text = commonUtils.checkIfEmpty(data.str_clientAfeNumber) ? "" : data.str_clientAfeNumber;
            this.view.lblCustomerCheck.skin = commonUtils.checkIfEmpty(data.bln_customerEquipment) ? commonUtils.TICKUNSELECTED : ("true" == data.bln_customerEquipment || "1" == data.bln_customerEquipment) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED;
            this.view.lblCustomerCheck.text = commonUtils.checkIfEmpty(data.bln_customerEquipment) ? commonUtils.TICKTEXTUNSEL : ("true" == data.bln_customerEquipment || "1" == data.bln_customerEquipment) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL;
            this.setContractDetails(this.data.projectData, data);
        } catch (ex) {
            this.exception(ex);
        }
    },
    getType: function(data) {
        for (var j = 0; j < this.Type.length; j++) {
            if (data == this.Type[j].code) {
                return this.Type[j].value;
            }
        }
    },
    getTypeImage: function(data) {
        for (var j = 0; j < this.Type.length; j++) {
            if (data == this.Type[j].code) {
                return this.Type[j].image;
            }
        }
    },
    // ---------------------------------------------------------------------------
    addAssetsTools: function(data) {
        try {
            var self = this;
            commonUtils.addDPRAssetsTools(data).then((res) => {
                kony.timer.schedule("addAssetsTools", () => {
                    kony.timer.cancel("addAssetsTools");
                    self.dismissSuccess();
                    self.updateAssetsToolsList();
                    self.view.flxDPR.setEnabled(true);
                    self.view.flxAssetsTools.setVisibility(false);
                }, 0.7, false);
                this.showSuccess("assetTools_save");
            }, (err) => {
                var input = {
                    "msg": "Unable to save Tools/Charges. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "addAssetsTools",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    updateAssetsTools: function(data) {
        try {
            var self = this;
            this.showLoading();
            commonUtils.updateDPRAssetsTools(data).then((res) => {
                kony.timer.schedule("updateAssetsTools", () => {
                    kony.timer.cancel("updateAssetsTools");
                    self.dismissSuccess();
                    self.updateAssetsToolsList();
                    self.view.flxDPR.setEnabled(true);
                    self.view.flxAssetsTools.setVisibility(false);
                }, 0.7, false);
                this.showSuccess("assetTools_save");
            }, (err) => {
                var input = {
                    "msg": "Unable to save Tools/Charges. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "updateAssetsTools",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // fetch the events and update the segment
    updateAssetsToolsList: function() {
        try {
            this.showLoading();
            var self = this;
            commonUtils.getDPRAssetsTools(this.headerData.str_reportid).then((res) => {
                self.setAssetsToolsList(res);
            }, (err) => {
                this.dismissLoading();
                var inp = {
                    "msg": "Something went wrong. Please again later.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
                var er = {
                    "func": "updateAssetsToolsList",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    //-------------------------------------------------------------------------------------
    setAssetsToolsList: function(data) {
        try {
            var self = this;
            if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
                var arr = [];
                for (var j = 0; j < data.length; j++) {
                    var inp = {
                        "lblId": {
                            isVisible: commonUtils.checkIfEmpty(data[j].str_idNumber) ? false : true,
                            text: data[j].str_idNumber
                        },
                        "lblType": this.getType(data[j].lng_chargeType),
                        "lblAssetType": {
                            isVisible: commonUtils.checkIfEmpty(data[j].str_assetType) ? false : true,
                            text: data[j].str_assetType
                        },
                        "AssetToolsData": data[j],
                        "imgAssetTools": this.getTypeImage(data[j].lng_chargeType) + ".png",
                        "btnAssetDelete": {
                            isVisible: (this.data.operation == "View") ? false : true,
                            onClick: this.deleteAssetsToolsPrompt.bind(this)
                        }
                    };
                    arr.push(inp);
                }
                this.view.segAssetTools.setData(arr);
                this.view.flxNoCharges.setVisibility(false);
                this.view.segAssetTools.setVisibility(true);
                kony.timer.schedule("dismissLoad", () => {
                    kony.timer.cancel("dismissLoad");
                    self.dismissLoading();
                }, 0.4, false);
            } else {
                this.view.flxNoCharges.setVisibility(true);
                this.view.segAssetTools.setVisibility(false);
                this.dismissLoading();
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    //--------------------------------------------------------------------------
    deleteAssetsToolsPrompt: function() {
        try {
            var self = this;
            var deviceInfo = kony.os.deviceInfo();
            var index = "";
            if (deviceInfo.name != "iPhone") {
                index = this.view.segAssetTools.selectedRowIndex[1];
            } else {
                index = this.view.segAssetTools.selectedIndex[1];
            }
            var data = this.view.segAssetTools.data[index];
            var inp = {
                "msg": "Sure you want to delete Tools/Charges?",
                "option": "enable"
            };
            this.showBottomPopUp(inp);
            this.view.bottompopup.btnBottomNotNow.text = "No";
            this.view.bottompopup.btnBottomEnable.text = "Yes";
            this.view.bottompopup.btnBottomEnable.onClick = this.deleteAssetsTools.bind(this, data.AssetToolsData);
            this.view.bottompopup.btnBottomNotNow.onClick = () => {
                this.dismissBottomPopup();
            };
            this.view.bottompopup.imgToShow.setVisibility(false);
        } catch (ex) {
            this.exception(ex);
        }
    },
    // delete te existing event
    deleteAssetsTools: function(data) {
        try {
            this.dismissBottomPopup();
            this.showLoading();
            var self = this;
            commonUtils.deleteDPRAssetsTools(data).then((res) => {
                kony.timer.schedule("deleteRoaster", () => {
                    kony.timer.cancel("deleteRoaster");
                    self.dismissSuccess();
                    self.updateAssetsToolsList();
                }, 0.7, false);
                this.showSuccess("assetTools_delete");
            }, (err) => {
                var input = {
                    "msg": "Unable to delete Tools/Charges. Please try again later.",
                    "option": "error"
                };
                self.showBottomPopUp(input);
                var er = {
                    "func": "deleteAssetsTools",
                    "err": "ErrorCallBack " + JSON.stringify(err)
                };
                commonUtils.exception(this, er, true);
                self.dismissLoading();
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    //--------------------------------------------------------------------------------
    resetAssetTools: function() {
        try {
            this.view.toolsCharges.setVisibility(false);
            this.view.lblType.text = "None";
            this.view.lblTypeId.text = "";
            this.view.tbxAssetId.text = "";
            this.view.txtDescriptionValue.text = "";
            this.view.tbxQuantity.text = "1";
            this.view.tbxAssetType.text = "";
            this.view.lblChildProject.text = "None";
            this.view.lblChildProject.text = "None";
            this.view.lblSourceType.text = "None";
            this.view.lblAssetActivity.text = "None";
            this.view.lblCategory.text = "None";
            this.view.lblSubCategory.text = "None";
            this.view.lblContractSerial.text = "None";
            this.view.tbxSerialId.text = "";
            this.view.tbxAssetSubtype1.text = "";
            this.view.tbxAssetSubType2.text = "";
            this.view.tbxRate.text = "0";
            this.view.cldStartDate.clear();
            this.view.cldStartDate.placeholder = "----/--/--";
            this.view.cldEndDate.clear();
            this.view.cldEndDate.placeholder = "----/--/--";
            this.view.tbxAefNumber.text = "";
            this.view.lblCustomerCheck.text = commonUtils.TICKTEXTUNSEL;
            this.view.lblCustomerCheck.skin = commonUtils.TICKUNSELECTED;
        } catch (ex) {
            this.exception(ex);
        }
    },
    // set the values of UOM
    setAssetToolsType: function() {
        try {
            var val = this.Type;
            var result = [];
            if (!commonUtils.checkIfEmpty(val) && val.length > 0) {
                for (var j = 0; j < val.length; j++) {
                    var inp = {
                        "lblValue": val[j].desc,
                        "lblCheck": {
                            isVisible: false,
                            text: commonUtils.TICKTEXTUNSEL,
                            skin: commonUtils.TICKUNSELECTED
                        },
                        "code": val[j].code,
                        "template": "flxTempFiltersType",
                        "toolsCharges": (val[j].image) + ".png"
                    };
                    result.push(inp);
                }
                this.view.assetType.segServiceLine.setData(result);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showAssetsType: function() {
        try {
            var data = this.view.assetType.segServiceLine.data;
            var len = this.view.assetType.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                len = len.length;
                this.onClickListBottom(this.view.assetType);
            } else {
                this.showBottomPopUp({
                    "msg": "No Assets Types Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    onTypeClick: function() {
        var selected = this.view.assetType.segServiceLine.selectedRowItems[0];
        this.view.lblType.text = selected.lblValue;
        this.view.lblTypeId.text = selected.code;
        this.view.toolsCharges.src = (selected.toolsCharges);
        this.view.toolsCharges.setVisibility(true);
        this.HideActivity(this.view.assetType);
        this.view.flxTypeAsset.forceLayout();
        this.view.flxAssetType.forceLayout();
    },
    /**
     * @desc Toggles the in transit checkbox
     * @param -
     * @retun void
     */
    toggleCustomer: function() {
        if (this.view.lblCustomerCheck.skin == commonUtils.TICKUNSELECTED) {
            this.view.lblCustomerCheck.skin = commonUtils.TICKSELECTED;
            this.view.lblCustomerCheck.text = commonUtils.TICK;
        } else {
            this.view.lblCustomerCheck.skin = commonUtils.TICKUNSELECTED;
            this.view.lblCustomerCheck.text = commonUtils.TICKTEXTUNSEL;
        }
    },
    /// ---------------------------------------- Contract information ------------------------------------- ///
    bindContractEvent: function() {
        try {
            this.view.flxProjectPopUp.onClick = this.showProjects.bind(this);
            this.view.flxSourePopUp.onClick = this.showSourceType.bind(this);
            this.view.flxActivityPopUp.onClick = this.showContractActivity.bind(this);
            this.view.flxCategoryPopUp.onClick = this.showcategory.bind(this);
            this.view.flxSubCategoryPopUp.onClick = this.showSubCategory.bind(this);
            this.view.flxContractSerialCon.onClick = this.showContractSerial.bind(this);
            this.view.sourceType.segServiceLine.onRowClick = this.onSourceTypeClick.bind(this);
            this.view.project.segServiceLine.onRowClick = this.onProjectClick.bind(this);
            this.view.activity.segServiceLine.onRowClick = this.onActivityClick.bind(this);
            this.view.category.segServiceLine.onRowClick = this.onCategoryClick.bind(this);
            this.view.subCategory.segServiceLine.onRowClick = this.onSubCategoryClick.bind(this);
            this.view.contractSerial.segServiceLine.onRowClick = this.onContractSerial.bind(this);
            this.view.project.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.project);
            this.view.sourceType.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.sourceType);
            this.view.activity.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.activity);
            this.view.category.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.category);
            this.view.subCategory.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.subCategory);
            this.view.contractSerial.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.contractSerial);
        } catch (ex) {
            this.exception(ex);
        }
    },
    onProjectClick: function() {
        try {
            this.showLoading();
            var previous = this.view.lblChildProject.text;
            var selected = this.view.project.segServiceLine.selectedRowItems[0];
            this.view.lblChildProject.text = selected.lblValue;
            if (previous !== this.view.lblChildProject.text) {
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
                this.view.subCategory.segServiceLine.setData([]);
                this.view.category.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.setFilter("project");
            }
            this.HideActivity(this.view.project);
        } catch (ex) {
            this.exception(ex);
        }
    },
    onSourceTypeClick: function() {
        try {
            this.showLoading();
            var previous = this.view.lblSourceType.text;
            var selected = this.view.sourceType.segServiceLine.selectedRowItems[0];
            this.view.lblSourceType.text = selected.lblValue;
            if (previous !== this.view.lblSourceType.text) {
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.category.segServiceLine.setData([]);
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.subCategory.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.view.lblContractSerial.text = "None";
                this.checkActivityProject();
                this.HideActivity(this.view.sourceType);
                if (this.view.lblSourceType.text != "None" && this.view.lblAssetActivity.text != "None") {
                    this.getFilteredContract("activity");
                    this.setCategory(this.filteresContract);
                }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    onActivityClick: function() {
        try {
            this.showLoading();
            var previous = this.view.lblAssetActivityId.text;
            var selected = this.view.activity.segServiceLine.selectedRowItems[0];
            this.view.lblAssetActivity.text = selected.lblValue;
            this.view.lblAssetActivityId.text = selected.activityId;
            if (previous !== this.view.lblAssetActivityId.text) {
                this.view.subCategory.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.view.category.segServiceLine.setData([]);
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
                this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.projectId) && (contract.projectId) == (this.view.lblChildProject.text)));
                this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.activityId) && (contract.activityId) == (this.view.lblAssetActivityId.text).split(",")[1]));
                this.HideActivity(this.view.activity);
                if (this.view.lblSourceType.text != "None") {
                    var arr = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType) && contract.resourceType == this.view.lblSourceType.text));
                    if (arr.length <= 0) {
                        this.setSourceType(this.filteresContract);
                    }
                } else {
                    this.setSourceType(this.filteresContract);
                }
                this.setFilter("activity");
            } else {
                this.HideActivity(this.view.activity);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    checkActivityProject: function() {
        try {
            var projectNumber = this.view.lblChildProject.text;
            var projectFlag = false;
            var activity = this.view.lblAssetActivityId.text;
            var activityFlag = false;
            var sourceType = this.view.lblSourceType.text;
            var sourceFlag = false;
            var response = [];
            if (this.view.lblChildProject.text != "None") {
                response = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.projectId) && (contract.projectId) == (this.view.lblChildProject.text)));
            }
            if (this.view.lblAssetActivityId.text != "None") {
                response = response.filter(contract => (!commonUtils.checkIfEmpty(contract.activityId) && (contract.activityId) == (this.view.lblAssetActivityId.text).split(",")[1]));
            }
            if (this.view.lblSourceType.text != "None") {
                response = response.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType) && ((contract.resourceType) == (this.view.lblSourceType.text))));
            }
            // To check if the activity , source type and project Number comes under filtered contracts
            for (var j = 0; j < response.length; j++) {
                if (response[j].projectId == projectNumber) {
                    projectFlag = true;
                }
                if (!commonUtils.checkIfEmpty(activity) && (response[j].activityId == (activity).split(",")[1])) {
                    activityFlag = true;
                }
                if (response[j].resourceType == sourceType) {
                    sourceFlag = true;
                }
            }
            // if the selected activity is not in the filtered contracts
            if (!activityFlag && !sourceFlag) {
                this.view.lblSourceType.text = "None";
                this.view.sourceType.segServiceLine.setData([]);
                this.view.subCategory.segServiceLine.setData([]);
                this.view.category.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
            }
            // if the seleted source is not under the filtered contracts
            if (!sourceFlag && activityFlag) {
                this.view.lblSourceType.text = "None";
                this.view.subCategory.segServiceLine.setData([]);
                this.view.category.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
            }
            if (sourceFlag && !activityFlag && this.view.lblAssetActivity.text != "None") {
                // set the filtered conttracts to the segment 
                this.view.lblAssetActivityId.text = "";
                this.view.lblAssetActivity.text = "None";
                this.view.subCategory.segServiceLine.setData([]);
                this.view.category.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    onCategoryClick: function() {
        try {
            this.showLoading();
            var previous = this.view.lblCategoryId.text;
            var selected = this.view.category.segServiceLine.selectedRowItems[0];
            this.view.lblCategory.text = selected.lblValue;
            this.view.lblCategoryId.text = selected.value + "," + selected.code;
            if (previous !== this.view.lblCategoryId.text) {
                this.view.subCategory.segServiceLine.setData([]);
                this.view.contractSerial.segServiceLine.setData([]);
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
                this.setFilter("category");
            }
            this.HideActivity(this.view.category);
        } catch (ex) {
            this.exception(ex);
        }
    },
    onSubCategoryClick: function() {
        try {
            this.showLoading();
            var previous = this.view.lblSubCategoryId.text;
            var selected = this.view.subCategory.segServiceLine.selectedRowItems[0];
            this.view.lblSubCategory.text = selected.lblValue;
            this.view.lblSubCategoryId.text = selected.value + "," + selected.code;
            this.HideActivity(this.view.subCategory);
            if (previous !== this.view.lblSubCategoryId.text) {
                this.view.lblContractSerial.text = "None";
                this.setFilter("subCategory");
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    onContractSerial: function() {
        try {
            this.showLoading();
            var previous = this.view.lblContractSerial.text;
            var selected = this.view.contractSerial.segServiceLine.selectedRowItems[0];
            this.view.lblContractSerial.text = selected.lblValue;
            this.HideActivity(this.view.contractSerial);
        } catch (ex) {
            this.exception(ex);
        }
    },
    /// ---------------------------------------------------------------------------------------------
    showSourceType: function() {
        try {
            var data = this.view.sourceType.segServiceLine.data;
            var len = this.view.sourceType.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                len = len.length;
                for (var j = 0; j < len; j++) {
                    if (this.view.lblSourceType.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                    this.view.sourceType.segServiceLine.setData(data);
                }
                this.onClickListBottom(this.view.sourceType);
            } else {
                this.showBottomPopUp({
                    "msg": "No SourceType Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showProjects: function() {
        try {
            var data = this.view.project.segServiceLine.data;
            var len = this.view.project.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                len = len.length;
                for (var j = 0; j < len; j++) {
                    if (this.view.lblChildProject.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.project.segServiceLine.setData(data);
                this.onClickListBottom(this.view.project);
            } else {
                this.showBottomPopUp({
                    "msg": "No Project Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showContractActivity: function() {
        try {
            var data = this.view.activity.segServiceLine.data;
            var len = this.view.activity.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                len = len.length;
                for (var j = 0; j < len; j++) {
                    if (this.view.lblAssetActivityId.text == data[j].activityId) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.activity.segServiceLine.setData(data);
                this.onClickListBottom(this.view.activity);
            } else {
                this.showBottomPopUp({
                    "msg": "No Activity Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showcategory: function() {
        try {
            var data = this.view.category.segServiceLine.data;
            var len = this.view.category.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                len = len.length;
                for (var j = 0; j < len; j++) {
                    if (this.view.lblCategory.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.category.segServiceLine.setData(data);
                this.onClickListBottom(this.view.category);
            } else {
                this.showBottomPopUp({
                    "msg": "No Category Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showSubCategory: function() {
        try {
            var data = this.view.subCategory.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                for (var j = 0; j < data.length; j++) {
                    if (this.view.lblSubCategory.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.subCategory.segServiceLine.setData(data);
                this.onClickListBottom(this.view.subCategory);
            } else {
                this.showBottomPopUp({
                    "msg": "No Sub Category Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showContractSerial: function() {
        try {
            var data = this.view.contractSerial.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)) {
                for (var j = 0; j < data.length; j++) {
                    if (this.view.lblContractSerial.text == data[j].lblValue) {
                        data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                        data[j].lblCheck.text = commonUtils.TICK;
                    } else {
                        data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                        data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                    }
                }
                this.view.contractSerial.segServiceLine.setData(data);
                this.onClickListBottom(this.view.contractSerial);
            } else {
                this.showBottomPopUp({
                    "msg": "No Contract Serial Found",
                    "option": "error"
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    fetchContractData: function() {
        try {
            // latest contract data always
            this.showLoading();
            var flag = false;
            if (currentProject.projectId == this.data.projectData.ProjectNumber && !commonUtils.checkIfEmpty(currentProject.projectData) && !commonUtils.checkIfEmpty(currentProject.projectData.ProjectNumber)) {
                if (!commonUtils.checkIfEmpty(currentProject.projectData.RateSetting) && (currentProject.projectData.RateSetting == "true" || currentProject.projectData.RateSetting === true)) {
                    flag = true;
                }
                this.view.flxRate.setVisibility(flag);
                this.view.flxRateSeparator.setVisibility(flag);
                this.view.flxQuantity.setVisibility(flag);
                this.view.flxQualitySeparator.setVisibility(flag);
                this.getProjectAfterContract(currentProject.projectData);
            } else {
                commonUtils.get_project_details(this.data.projectData.ProjectNumber).then((res) => {
                    currentProject.projectData = res;
                    currentProject.projectId = res.ProjectNumber;
                    if (!commonUtils.checkIfEmpty(res.RateSetting) && (res.RateSetting == "true" || res.RateSetting === true)) {
                        flag = true;
                    }
                    this.view.flxRate.setVisibility(flag);
                    this.view.flxRateSeparator.setVisibility(flag);
                    this.view.flxQuantity.setVisibility(flag);
                    this.view.flxQualitySeparator.setVisibility(flag);
                    this.getProjectAfterContract(res);
                }, (err) => {
                    this.dismissLoading();
                    kony.print("Error in getting Activities");
                });
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    getProjectAfterContract: function(res) {
        try {
            this.showLoading();
            this.data.projectData.Activities = res.Activities;
            this.activities = res.Activities;
            this.filteresContract = this.contracts = res.contractList;
            this.childProjects = res.childProjects;
            this.masterCategory = res.masterCategory;
            this.masterSubCategory = res.masterSubCategory;
            this.filterMaterData();
            // project Numbers
            if (!commonUtils.checkIfEmpty(res.childProjects) && res.childProjects.length > 0) {
                this.setInitialChildProject(res.childProjects);
            }
            // source Type
            if (!commonUtils.checkIfEmpty(this.filteresContract) && this.filteresContract.length > 0) {
                this.setSourceType(this.filteresContract, true);
            }
            // Activities
            if (!commonUtils.checkIfEmpty(this.activities)) {
                this.activities.sort(function(a, b) {
                    var nameA = a.description.toUpperCase(); // ignore upper and lowercase
                    var nameB = b.description.toUpperCase(); // ignore upper and lowercase
                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                });
                this.setActivities(this.activities);
            }
            this.dismissLoading();
        } catch (ex) {
            this.exception(ex);
        }
    },
    filterMaterData: function() {
        // filter subcategory which exists in master category
        try {
            var masterCat = [];
            var masterSubCat = [];
            for (var j = 0; j < this.contracts.length; j++) {
                masterCat.push(this.contracts[j].resourceCategory);
                masterSubCat.push(this.contracts[j].resourceSubCategory);
            }
            masterCat = [...new Set(masterCat)];
            masterSubCat = [...new Set(masterSubCat)];
            this.masterCategory = this.masterCategory.filter(function(temp) {
                return masterCat.includes(temp._id);
            });
            this.masterSubCategory = this.masterSubCategory.filter(function(temp) {
                return masterSubCat.includes(temp._id);
            });
        } catch (ex) {
            this.exception(ex);
        }
    },
    // ---------------- Set contract Data ---------------------------//
    setSourceType: function(response, flagSource) {
        try {
            var sourceType = [];
            var ar = [];
            var EQAvail = "";
            var flag = true;
            for (var j = 0; !commonUtils.checkIfEmpty(response) && j < response.length; j++) {
                ar.push(response[j].resourceType);
            }
            var arr = [...new Set(ar)];
            for (var i = 0; i < arr.length; i++) {
                var inp = {
                    "lblValue": arr[i],
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    }
                };
                if ((arr[i]).slice(-2) == "EQ") {
                    EQAvail = inp.lblValue;
                }
                sourceType.push(inp);
            }
            this.view.sourceType.segServiceLine.setData(sourceType);
            if (!(!commonUtils.checkIfEmpty(flagSource) && flagSource)) {
                if (!commonUtils.checkIfEmpty(EQAvail)) {
                    this.view.lblSourceType.text = EQAvail;
                    this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType) && ((contract.resourceType) == (EQAvail))));
                    this.setCategory(this.filteresContract);
                } else if (sourceType.length > 0) {
                    var PN = sourceType[0].lblValue;
                    this.view.lblSourceType.text = PN;
                    if (!commonUtils.checkIfEmpty(PN)) {
                        this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType) && ((contract.resourceType) == (PN))));
                    }
                    this.setCategory(this.filteresContract);
                } else {
                    this.view.lblSourceType.text = "None";
                    this.view.sourceType.segServiceLine.setData([]);
                    this.setCategory([]);
                }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setInitialChildProject: function(response) {
        try {
            var projects = [];
            var ar = [];
            for (var j = 0; !commonUtils.checkIfEmpty(response) && j < response.length; j++) {
                ar.push(response[j].projectNumber);
            }
            var temp = [];
            var arr = [...new Set(ar)];
            arr = Array.from(arr);
            for (var i = 0; i < response.length; i++) {
                var inp = {
                    "lblValue": response[i].projectNumber,
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "data": response[i]
                };
                if (temp.indexOf(response[i].projectNumber) == -1 && arr.indexOf(response[i].projectNumber) >= 0) {
                    temp.push(response[i].projectId);
                    projects.push(inp);
                }
            }
            if (projects.length > 0) {
                this.view.project.segServiceLine.setData(projects);
            } else {
                var inpt = {
                    "lblValue": (!commonUtils.checkIfEmpty(this.view.lblChildProject.text) && this.view.lblChildProject.text != "None") ? (this.view.lblChildProject.text) : "None",
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "data": ""
                };
                projects.push(inpt);
                if (!commonUtils.checkIfEmpty(this.view.lblChildProject.text) && this.view.lblChildProject.text != "None") {
                    this.view.project.segServiceLine.setData(projects);
                }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setActivities: function(response) {
        try {
            var activitiesdata = [];
            var activies = this.activities; // parent 
            var temp = [];
            var flag = true;
            for (var g = 0; g < response.length; g++) {
                temp.push(response[g].activityId);
            }
            temp = [...new Set(temp)];
            temp = Array.from(temp);
            var tempAfter = [];
            for (var i = 0; !commonUtils.checkIfEmpty(this.activities) && i < this.activities.length; i++) {
                var inp = {
                    "lblValue": this.activities[i].description + " (" + this.activities[i].activity + ")",
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "activityId": this.activities[i].description + "," + this.activities[i].activity,
                    "data": this.activities[i]
                };
                if ((this.activities[i].project == this.view.lblChildProject.text) && tempAfter.indexOf(this.activities[i].activity) == -1) {
                    tempAfter.push(this.activities[i].activity);
                    activitiesdata.push(inp);
                }
            }
            activitiesdata = [...new Set(activitiesdata)];
            activitiesdata = Array.from(activitiesdata);
            this.view.activity.segServiceLine.setData(activitiesdata);
            if (activitiesdata.length <= 0) {
                this.view.lblSourceType.text = "None";
                this.view.lblAssetActivity.text = "None";
                this.view.lblAssetActivityId.text = "";
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setCategory: function(response) {
        try {
            var category = [];
            var temp = [];
            for (var j = 0; j < response.length; j++) {
                temp.push(response[j].resourceCategory);
            }
            var arr = [];
            for (var i = 0; !commonUtils.checkIfEmpty(response) && i < response.length; i++) {
                var fltr = this.masterCategory.filter((arr) => {
                    return (arr._id === response[i].resourceCategory);
                });
                var value = !commonUtils.checkIfEmpty(fltr) && fltr.length > 0 ? fltr[0].description : "";
                var inp = {
                    "lblValue": value + " (" + response[i].resourceCategory + ")",
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "value": value,
                    "code": response[i].resourceCategory,
                    "data": response[i]
                };
                if (response[i].resourceCategory != "%" && arr.indexOf(response[i].resourceCategory) == -1) {
                    arr.push(response[i].resourceCategory);
                    category.push(inp);
                }
            }
            this.view.category.segServiceLine.setData(category);
            if (category.length <= 0) {
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setSubCategory: function(response) {
        try {
            var subcategory = [];
            var arr = [];
            for (var i = 0; !commonUtils.checkIfEmpty(response) && i < response.length; i++) {
                var fltr = this.masterSubCategory.filter((arr) => {
                    return (arr._id === response[i].resourceSubCategory);
                });
                var value = !commonUtils.checkIfEmpty(fltr) && fltr.length > 0 ? fltr[0].description : "";
                var inp = {
                    "lblValue": value + " (" + response[i].resourceSubCategory + ")",
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "value": value,
                    "code": response[i].resourceSubCategory,
                    "data": response[i]
                };
                if (response[i].resourceSubCategory != "%" && arr.indexOf(response[i].resourceSubCategory) == -1) {
                    arr.push(response[i].resourceSubCategory);
                    subcategory.push(inp);
                }
            }
            this.view.subCategory.segServiceLine.setData(subcategory);
            if (subcategory.length <= 0) {
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setContractSerial: function(response) {
        try {
            var contract = [];
            var arr = [];
            for (var i = 0; !commonUtils.checkIfEmpty(response) && i < response.length; i++) {
                var inp = {
                    "lblValue": response[i].projectRole,
                    "lblCheck": {
                        skin: "sknLblFilterUnselected",
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "code": response[i].projectRole,
                    "data": response[i]
                };
                if (response[i].projectRole != "%" && arr.indexOf(response[i].projectRole) == -1) {
                    arr.push(response[i].projectRole);
                    contract.push(inp);
                }
            }
            this.view.contractSerial.segServiceLine.setData(contract);
        } catch (ex) {
            this.exception(ex);
        }
    },
    setFilter: function(inp) {
        try {
            switch (inp) {
                case "project":
                    {
                        this.getFilteredContract("project");
                        this.setSourceType(this.filteresContract);
                        this.setFilter("source");
                        break;
                    }
                case "source":
                    {
                        this.getFilteredContract("source");
                        this.setActivities(this.activities);
                        this.checkActivityProject();
                        break;
                    }
                case "activity":
                    {
                        this.getFilteredContract("activity");
                        this.setCategory(this.filteresContract);
                        this.checkActivityProject(); // to check whether activity , project , sourceType match wiyh filters or not
                        break;
                    }
                case "category":
                    {
                        this.getFilteredContract("category");
                        this.setSubCategory(this.filteresContract);
                        break;
                    }
                case "subCategory":
                    {
                        this.getFilteredContract();
                        this.setContractSerial(this.filteresContract);
                        break;
                    }
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    getFilteredContract: function(inp) {
        try {
            if (this.view.lblChildProject.text !== "None") {
                this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.projectId) && (contract.projectId) == (this.view.lblChildProject.text)));
            }
            if (inp == "project") return;
            if (this.view.lblSourceType.text !== "None") {
                this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType) && ((contract.resourceType) == (this.view.lblSourceType.text))));
            }
            if (inp == "source") return;
            if (!commonUtils.checkIfEmpty(this.view.lblAssetActivityId.text)) {
                this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.activityId) && (contract.activityId) == (this.view.lblAssetActivityId.text).split(",")[1]));
            }
            if (inp == "activity") return;
            if (!commonUtils.checkIfEmpty(this.view.lblCategoryId.text)) {
                this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceCategory)) && ((contract.resourceCategory) == (this.view.lblCategoryId.text).split(",")[1]));
            }
            if (inp == "category") return;
            if (!commonUtils.checkIfEmpty(this.view.lblSubCategoryId.text)) {
                this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceSubCategory)) && ((contract.resourceSubCategory) == (this.view.lblSubCategoryId.text).split(",")[1]));
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    setContractDefault: function() {
        try {
            this.showLoading();
            var self = this;
            var prjectData = this.data.projectData;
            this.view.lblChildProject.text = prjectData.ProjectNumber;
            if (this.childProjects.length <= 0) {
                this.setInitialChildProject([]);
            }
            this.view.lblAssetActivity.text = (prjectData.Activity).split(",")[0] + " (" + (prjectData.Activity).split(",")[1] + ")";
            this.view.lblAssetActivityId.text = prjectData.Activity;
            if (this.view.lblChildProject.text !== "None") {
                this.setFilter("project");
            }
            if (this.view.sourceType.text == "None") {
                this.getFilteredContract("project");
                this.setSourceType(this.filteresContract);
            }
            if (this.view.lblAssetActivity.text !== "None") {
                this.setFilter("activity");
            }
            this.view.lblCategory.text = "None";
            this.view.lblCategoryId.text = "";
            this.view.lblSubCategory.text = "None";
            this.view.lblSubCategoryId.text = "";
            this.checkActivityProject();
            kony.timer.schedule("loading4", () => {
                kony.timer.cancel("loading4");
                self.dismissLoading();
            }, 1, false);
        } catch (ex) {
            this.exception(ex);
        }
    },
    setContractDetails: function(ProjectData, assetData) {
        try {
            var self = this;
            if (this.contracts.length > 0) {
                this.showLoading();
                var flag = false;
                this.view.lblChildProject.text = commonUtils.checkIfEmpty(assetData.str_childProject) ? ProjectData.ProjectNumber : assetData.str_childProject;
                if (!commonUtils.checkIfEmpty(this.view.lblSourceType.text) && this.view.lblSourceType.text !== "None") {
                    flag = true;
                }
                this.getFilteredContract("project");
                this.setSourceType(this.filteresContract, flag);
                // --------------------------------------------------
                if (commonUtils.checkIfEmpty(assetData.str_activity) && !commonUtils.checkIfEmpty(ProjectData.Activity)) {
                    this.view.lblAssetActivity.text = (ProjectData.Activity).split(",")[0] + " (" + (ProjectData.Activity).split(",")[1] + ")";
                    this.view.lblAssetActivityId.text = ProjectData.Activity;
                } else if (!commonUtils.checkIfEmpty(assetData.str_activity)) {
                    this.view.lblAssetActivity.text = (assetData.str_activity).split(",")[0] + " (" + (assetData.str_activity).split(",")[1] + ")";
                    this.view.lblAssetActivityId.text = assetData.str_activity;
                } else {
                    this.view.lblAssetActivity.text = "None";
                    this.view.lblAssetActivityId.text = "";
                }
                this.setActivities(this.activities);
                this.getFilteredContract("activity");
                this.setCategory(this.filteresContract);
                // --------------------------------------------------------------------
                this.view.lblCategory.text = commonUtils.checkIfEmpty(assetData.str_category) || assetData.str_category == "None" ? "None" : (assetData.str_category).split(",")[0] + " (" + (assetData.str_category).split(",")[1] + ")";
                this.view.lblCategoryId.text = commonUtils.checkIfEmpty(assetData.str_category) || assetData.str_category == "None" ? "" : (assetData.str_category);
                this.getFilteredContract("category");
                this.setSubCategory(this.filteresContract);
                // ------------------------------------------------------------------------
                this.view.lblSubCategory.text = commonUtils.checkIfEmpty(assetData.str_subCategory) ? "None" : (assetData.str_subCategory).split(",")[0] + " (" + (assetData.str_subCategory).split(",")[1] + ")";
                this.view.lblSubCategoryId.text = commonUtils.checkIfEmpty(assetData.str_subCategory) ? "" : (assetData.str_subCategory);
                this.getFilteredContract();
                this.setContractSerial(this.filteresContract);
                this.view.lblContractSerial.text = commonUtils.checkIfEmpty(assetData.str_contractSerialId) ? "None" : (assetData.str_contractSerialId);
                kony.timer.schedule("check", () => {
                    kony.timer.cancel("check");
                    self.checkActivityProject();
                }, 0.5, false);
                kony.timer.schedule("loading1", () => {
                    kony.timer.cancel("loading1");
                    self.dismissLoading();
                }, 1, false);
            } else {
                this.view.lblChildProject.text = commonUtils.checkIfEmpty(assetData.str_childProject) ? ProjectData.ProjectNumber : assetData.str_childProject;
                this.setInitialChildProject([]);
                if (commonUtils.checkIfEmpty(assetData.str_activity) && !commonUtils.checkIfEmpty(ProjectData.Activity)) {
                    this.view.lblAssetActivity.text = (ProjectData.Activity).split(",")[0] + " (" + (ProjectData.Activity).split(",")[1] + ")";
                    this.view.lblAssetActivityId.text = ProjectData.Activity;
                } else if (!commonUtils.checkIfEmpty(assetData.str_activity)) {
                    this.view.lblAssetActivity.text = (assetData.str_activity).split(",")[0] + " (" + (assetData.str_activity).split(",")[1] + ")";
                    this.view.lblAssetActivityId.text = assetData.str_activity;
                } else {
                    this.view.lblAssetActivity.text = "None";
                    this.view.lblAssetActivityId.text = "";
                }
                this.view.lblCategory.text = "None";
                this.view.lblCategoryId.text = "";
                // ------------------------------------------------------------------------
                this.view.lblSubCategory.text = "None";
                this.view.lblSubCategoryId.text = "";
                this.view.lblContractSerial.text = "None";
                this.setActivities(this.activities);
                this.dismissLoading();
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    exception: function(ex) {
        commonUtils.exception(this, ex);
        if (!commonUtils.checkIfEmpty(this) && !commonUtils.checkIfEmpty(this.view) && !commonUtils.checkIfEmpty(this.view.flxMain)) {
            this.view.flxMain.setEnabled(true);
            this.view.flxLoading.setVisibility(false);
        }
    },
    /// ----------------------------- Attachments -----------------//
    openFileUploadPopUp: function() {
        var self = this;
        this.view.flxGallary.width = "28%";
        this.view.flxCamera.width = "28%";
        this.view.flxFile.width = "28%";
        this.view.flxEditImage.setVisibility(true);
        self.view.FlexContainerData.animate(kony.ui.createAnimation({
            "100": {
                "height": "250dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
        }, {
            "animationEnd": ""
        });
    },
    HideFileUploadPopUp: function() {
        var self = this;
        self.view.FlexContainerData.animate(kony.ui.createAnimation({
            "100": {
                "height": "0dp",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.2
        }, {
            "animationEnd": () => {
                self.view.flxEditImage.setVisibility(false);
            }
        });
    },
    onClickOfCamera: function() {
        try {
            this.HideFileUploadPopUp();
            this.showLoading();
            var base64Image = "";
            var rawByte = this.view.CameraImage.rawBytes;
            var imageObject = kony.image.createImage(rawByte);
            imageObject.compress(0.4);
            imageObject.scale(0.4);
            base64Image = kony.convertToBase64(imageObject.getImageAsRawBytes());
            if (base64Image.length < 100000000) {
                this.saveAttachment(base64Image, "images/*", "Oceaneering" + (Math.random() * 1000).toFixed(0), true);
            } else {
                this.HideFileUploadPopUp();
                var inp = {
                    "msg": "Failed to upload file. Please try again with lesser file size.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
        } catch (err) {
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, err);
        }
    },
    onClickOfOpenGallery: function() {
        try {
            var queryContext = {
                mimetype: "image/*"
            };
            var returnStatus = kony.phone.openMediaGallery(this.onImageSelectionCallbackAndroid.bind(this), queryContext);
        } catch (err) {
            commonUtils.exception(this, err);
        }
    },
    onImageSelectionCallbackAndroid: function(rawBytes, permStatus, mimeType) {
        try {
            this.showLoading();
            if (!commonUtils.checkIfEmpty(rawBytes)) {
                var imageObject = kony.image.createImage(rawBytes);
                imageObject.compress(0.4);
                imageObject.scale(0.4);
                var base64Image = kony.convertToBase64(imageObject.getImageAsRawBytes());
                var resourcePath = rawBytes.getResourcePath();
                var myFileName = new kony.io.File(resourcePath);
                if (base64Image.length < 100000000) {
                    this.saveAttachment(base64Image, mimeType, myFileName.name, true);
                } else {
                    var inpt = {
                        "msg": "Failed to upload file. Please try again with lesser file size.",
                        "option": "error"
                    };
                    this.showBottomPopUp(inpt);
                }
                this.HideFileUploadPopUp();
            } else {
                this.dismissLoading();
                this.HideFileUploadPopUp();
            }
        } catch (err) {
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, err);
        }
    },
    onImageSelectionCallbackIos: function(rawBytes, mimeType) {
        try {
            this.showLoading();
            if (!commonUtils.checkIfEmpty(rawBytes)) {
                var imageObject = kony.image.createImage(rawBytes);
                imageObject.compress(0.4);
                imageObject.scale(0.4);
                var base64Image = kony.convertToBase64(imageObject.getImageAsRawBytes());
                var resourcePath = rawBytes.getResourcePath();
                var myFileName = new kony.io.File(resourcePath);
                if (base64Image.length < 100000000) {
                    this.saveAttachment(base64Image, mimeType, myFileName.name, true);
                } else {
                    var inpt = {
                        "msg": "Failed to upload file. Please try again with lesser file size.",
                        "option": "error"
                    };
                    this.showBottomPopUp(inpt);
                }
                this.HideFileUploadPopUp();
            } else {
                this.dismissLoading();
                this.HideFileUploadPopUp();
            }
        } catch (err) {
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, err);
        }
    },
    onClickOfOpenFileSystem: function() {
        try {
            var queryContext = {
                mimetype: "application/*",
            };
            var returnStatus = kony.phone.openMediaGallery(this.onFileSelectionCallbackAndroid.bind(this), queryContext);
        } catch (err) {
            commonUtils.exception(this, err);
        }
    },
    onFileSelectionCallbackAndroid: function(rawBytes, permStatus, mimeType) {
        try {
            if (!commonUtils.checkIfEmpty(rawBytes) && commonUtils.checkIfEmpty(this.getExtension(mimeType))) {
                var inpt = {
                    "msg": "This file is Not Supported to upload.",
                    "option": "error"
                };
                this.HideFileUploadPopUp();
                this.showBottomPopUp(inpt);
            } else if (!commonUtils.checkIfEmpty(rawBytes)) {
                this.showLoading();
                var base64NPWP = kony.convertToBase64(rawBytes);
                if (!commonUtils.checkIfEmpty(rawBytes)) {
                    var resourcePath = rawBytes.getResourcePath();
                    var myFileName = new kony.io.File(resourcePath);
                    this.HideFileUploadPopUp();
                    if (base64NPWP.length < 100000000) {
                        this.saveAttachment(base64NPWP, mimeType, myFileName.name, false);
                    } else {
                        var inp = {
                            "msg": "Failed to upload file. Please try again with lesser file size.",
                            "option": "error"
                        };
                        this.showBottomPopUp(inp);
                    }
                } else {
                    this.dismissLoading();
                    this.HideFileUploadPopUp();
                }
            } else {
                this.dismissLoading();
                this.HideFileUploadPopUp();
            }
        } catch (err) {
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, err);
        }
    },
    onFileSelectionCallbackIos: function(rawBytes, mimeType) {
        try {
            this.showLoading();
            var base64NPWP = kony.convertToBase64(rawBytes);
            if (!commonUtils.checkIfEmpty(rawBytes)) {
                var resourcePath = rawBytes.getResourcePath();
                var myFileName = new kony.io.File(resourcePath);
                this.HideFileUploadPopUp();
                if (base64NPWP.length < 100000000) {
                    this.saveAttachment(base64NPWP, mimeType, myFileName.name, false);
                } else {
                    var inpt = {
                        "msg": "Failed to upload file. Please try again with lesser file size.",
                        "option": "error"
                    };
                    this.showBottomPopUp(inpt);
                }
            } else {
                this.dismissLoading();
                this.HideFileUploadPopUp();
            }
        } catch (err) {
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, err);
        }
    },
    getExtension: function(mimeType) {
        switch (mimeType) {
            case "application/pdf":
                {
                    return "pdf";
                }
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                {
                    return "xls";
                }
            case "application/vnd.ms-powerpoint":
                {
                    return "ppt";
                }
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                {
                    return "ppt";
                }
            case "application/vnd.ms-excel":
                {
                    return "xls";
                }
            case "text/plain":
                {
                    return "txt";
                }
            case "application/msword":
                {
                    return "doc";
                }
            case "application/vnd.ms-word":
                {
                    return "doc";
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingm":
                {
                    return "doc";
                }
            default:
                {
                    return "";
                }
        }
    },
    bindAttachments: function() {
        var self = this;
        this.view.btnCancel.onClick = this.HideFileUploadPopUp.bind(this);
        this.view.flxGallary.onClick = this.onClickOfOpenGallery.bind(this);
        this.view.CameraImage.onCapture = this.onClickOfCamera.bind(this);
        this.view.CameraImage.onFailure = this.onFailureCamera.bind(this);
        this.view.flxFile.onClick = this.onClickOfOpenFileSystem.bind(this);
        this.view.flxBrowserback.onClick = this.onClickBackBrowser.bind(this);
        this.view.flxCross.onClick = () => {
            self.view.flxGalleryLargerView.setVisibility(false);
        };
    },
    onFailureCamera: function(camera, errorcode) {
        this.HideFileUploadPopUp();
    },
    deleteFilePrompt: function(value) {
        try {
            var self = this;
            var inp = {
                "msg": "Sure you want to delete the File?",
                "option": "enable"
            };
            this.showBottomPopUp(inp);
            this.view.bottompopup.imgToShow.setVisibility(false);
            this.view.bottompopup.btnBottomNotNow.text = "No";
            this.view.bottompopup.btnBottomEnable.text = "Yes";
            var index = "";
            var deviceInfo = kony.os.deviceInfo();
            if (deviceInfo.name != "iPhone") {
                index = this.view.segAttchments.selectedRowIndex[1];
            } else {
                index = this.view.segAttchments.selectedIndex[1];
            }
            value = this.view.segAttchments.data[index].data;
            this.view.bottompopup.btnBottomEnable.onClick = (res) => {
                self.showLoading();
                self.animateFileLoading();
                self.view.flxContainerAnim.setVisibility(true);
                self.view.segAttchments.removeAt(index);
                self.deleteAttachment(value);
                self.dismissLoading();
                if (commonUtils.checkIfEmpty(self.view.segAttchments.data)) {
                    self.view.flxNoAttchments.setVisibility(true);
                    self.view.segAttchments.setVisibility(false);
                    self.view.flxContainerAnim.setVisibility(false);
                }
            };
            this.view.bottompopup.btnBottomNotNow.onClick = () => {
                self.dismissBottomPopup();
            };
            this.view.bottompopup.zIndex = 17;
        } catch (ex) {
            self.view.flxContainerAnim.setVisibility(false);
            commonUtils.exception(this, ex);
        }
    },
    refreshFiles: function() {
        try {
            var self = this;
            commonUtils.getAttachmentsList(this.headerData.str_reportid).then((res) => {
                self.setAttachments(res);
            }, (err) => {
                self.dismissLoading();
                kony.print("Error on refresh Files");
            });
        } catch (ex) {
            this.dismissLoading();
            commonUtils.exception(this, ex);
        }
    },
    setAttachments: function(val) {
        try {
            var files = [];
            var filesCount = {
                "pdf": 0,
                "doc": 0,
                "gallery": 0,
                "excel": 0,
                "ppt": 0,
                "txt": 0
            };
            if (!commonUtils.checkIfEmpty(val) && val.length > 0) {
                for (var j = 0; j < val.length; j++) {
                    var exten = commonUtils.getFileTypeImage(val[j].str_attachmentExtension);
                    filesCount[exten.substring(0, exten.length - 4)]++;
                    var name = "00000" + filesCount[exten.substring(0, exten.length - 4)];
                    var attachmentName = commonUtils.getFileTypeImageName(val[j].str_attachmentExtension) + name.substr(-3);
                    var inp = {
                        "lblName": attachmentName,
                        "lblType": (val[j].dte_dateTime).substring(0, 10),
                        "data": val[j],
                        "lblSize": parseFloat(val[j].str_attachmentpath).toFixed(2) + " KB",
                        "docid": val[j].str_docid,
                        "btnDelete": {
                            "text": "",
                            "isVisible": (this.data.operation == "View") ? false : true,
                            "onClick": this.deleteFilePrompt.bind(this),
                        },
                        "imgAttach": {
                            "src": commonUtils.getFileTypeImage(val[j].str_attachmentExtension)
                        },
                        "btnView": {
                            "text": "",
                            "onClick": this.viewAttachments.bind(this, val[j]),
                        },
                        "base64": ""
                    };
                    files.push(inp);
                }
                this.view.segAttchments.setData(files);
                this.view.flxNoAttchments.setVisibility(false);
                this.view.segAttchments.setVisibility(true);
            } else {
                this.view.segAttchments.setData([]);
                this.view.segAttchments.setVisibility(false);
                this.view.flxNoAttchments.setVisibility(true);
            }
            this.dismissLoading();
        } catch (ex) {
            this.dismissLoading();
            commonUtils.exception(this, ex);
        }
    },
    saveAttachment: function(base64NPWP, mime, name, imageFlag) {
        try {
            var self = this;
            if (name.includes("%")) {
                name = "Oceaneering" + (Math.random() * 1000).toFixed(0);
            }
            this.view.flxContainerAnim.setVisibility(true);
            this.animateFileLoading();
            var param = {
                "lng_linenumber": 1,
                "str_attachment": (name).substring(0, 40),
                "str_attachmentpath": (base64NPWP.length * 0.75) / 1024,
                "str_attachmenttype": mime,
                "str_docid": Date.now(),
                "str_attachmentExtension": mime,
                "dte_dateTime": this.formatDate(new Date()),
                "str_uploadedBy": oceaneering.oms.appGlobals.username,
                "reportId": this.headerData.str_reportid,
                "projectId": this.data.projectData.ProjectNumber
            };
            this.HideFileUploadPopUp();
            var inpt = {
                "msg": "Uploading...",
                "option": "error"
            };
            this.showBottomPopUp(inpt);
            this.view.bottompopup.imgToShow.src = "dropsfilling.gif";
            this.view.bottompopup.imgToShow.setVisibility(true);
            this.dismissLoading();
            kony.timer.schedule("uploading", () => {
                kony.timer.cancel("uploading");
                self.dismissBottomPopup();
            }, 2, false);
            param.str_attachmentValue = base64NPWP;
            commonUtils.addAttachment(param).then((res) => {
                self.dismissBottomPopup();
                self.HideFileUploadPopUp();
                delete param.str_attachmentValue;
                commonUtils.addAttachmentList(param).then((res) => {
                    self.dismissBottomPopup();
                    self.refreshFiles();
                    self.view.flxContainerAnim.setVisibility(false);
                    kony.timer.schedule("uploadSuccess", () => {
                        kony.timer.cancel("uploadSuccess");
                        self.dismissSuccess();
                    }, 0.7, false);
                    self.showSuccess("uploadSuccess");
                }, (err) => {
                    self.view.flxContainerAnim.setVisibility(false);
                    this.HideFileUploadPopUp();
                    this.dismissLoading();
                    var input = {
                        "msg": commonUtils.errMessage,
                        "option": "error"
                    };
                    this.showBottomPopUp(input);
                });
            }, (err) => {
                if (err.errmsg == "Create operation failed on  OMS_OP_Attachments:String or binary data would be truncated.") {
                    var inpt = {
                        "msg": "Failed to upload file. Please try again with lesser file size.",
                        "option": "error"
                    };
                    this.dismissLoading();
                    this.HideFileUploadPopUp();
                    this.showBottomPopUp(inpt);
                } else {
                    this.dismissLoading();
                    this.HideFileUploadPopUp();
                    var input = {
                        "msg": commonUtils.errMessage,
                        "option": "error"
                    };
                    this.showBottomPopUp(input);
                }
                self.view.flxContainerAnim.setVisibility(false);
            });
        } catch (ex) {
            self.view.flxContainerAnim.setVisibility(false);
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, ex);
        }
    },
    deleteAttachment: function(value) {
        try {
            var self = this;
            this.dismissBottomPopup();
            this.showLoading();
            commonUtils.deleteAttachmentList(value).then((res) => {
                value.str_attachmentValue = "";
                value.str_attach = "";
                value.lng_linenumber = "1";
                self.view.flxContainerAnim.setVisibility(false);
                commonUtils.deleteAttachment(value);
                kony.timer.schedule("Delete_file_Success", () => {
                    kony.timer.cancel("Delete_file_Success");
                    self.dismissSuccess();
                }, 0.7, false);
                self.showSuccess("Delete_file_Success");
            }, (err) => {
                self.view.flxContainerAnim.setVisibility(false);
                self.refreshFiles();
            });
        } catch (ex) {
            this.dismissLoading();
            commonUtils.exception(this, ex);
        }
    },
    viewAttachments: function() {
        try {
            this.showLoading();
            var self = this;
            var index = "";
            var deviceInfo = kony.os.deviceInfo();
            if (deviceInfo.name != "iPhone") {
                index = this.view.segAttchments.selectedRowIndex[1];
            } else {
                index = this.view.segAttchments.selectedIndex[1];
            }
            var selected = this.view.segAttchments.data[index];
            var base64NPWP = selected.base64;
            var data = selected.data;
            if (commonUtils.checkIfEmpty(base64NPWP)) { // if the base64 is not yet get
                commonUtils.getAttachments(data.reportId, data.str_docid).then((res) => {
                    if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                        base64NPWP = res[0].str_attachmentValue;
                        selected.base64 = base64NPWP;
                        self.view.segAttchments.setDataAt(selected, index);
                        this.openAcquiredFile(base64NPWP, data);
                        this.dismissLoading();
                    }
                }, (err) => {
                    this.refreshFiles();
                    this.dismissLoading();
                    this.HideFileUploadPopUp();
                    commonUtils.exception(this, err);
                });
            } else {
                this.openAcquiredFile(base64NPWP, data);
            }
        } catch (ex) {
            this.dismissLoading();
            this.HideFileUploadPopUp();
            commonUtils.exception(this, ex);
        }
    },
    openAcquiredFile: function(base64NPWP, data) {
        switch (data.str_attachmenttype) {
            case "application/pdf":
                {
                    this.openPDF(base64NPWP);
                    break;
                }
            case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
                {
                    this.openExcel(base64NPWP);
                    break;
                }
            case "application/vnd.ms-powerpoint":
                {
                    this.openPpt(base64NPWP);
                    break;
                }
            case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
                {
                    this.openPpt(base64NPWP);
                    break;
                }
            case "application/vnd.ms-excel":
                {
                    this.openExcel(base64NPWP);
                    break;
                }
            case "text/plain":
                {
                    this.openDOC(base64NPWP);
                    break;
                }
            case "application/msword":
                {
                    this.openDOC(base64NPWP);
                    break;
                }
            case "application/vnd.ms-word":
                {
                    this.openDOC(base64NPWP);
                    break;
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingm":
                {
                    this.openDOC(base64NPWP);
                    break;
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
                {
                    this.openDOC(base64NPWP);
                    break;
                }
            case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
                {
                    this.openDOC(base64NPWP);
                    break;
                }
            default:
                {
                    if ((data.str_attachmenttype).substring(0, 5) == "image") {
                        this.view.imgShow.base64 = base64NPWP;
                        this.view.imgShow.zoomEnabled = true;
                        this.view.imgShow.zoomValue = 1;
                        this.view.flxGalleryLargerView.setVisibility(true);
                    } else {
                        var input = {
                            "msg": "Not suppoted in this device.",
                            "option": "error"
                        };
                        this.showBottomPopUp(input);
                    }
                    this.dismissLoading();
                }
        }
    },
    openPDF: function(base64String) {
        try {
            this.view.flxbrowser.setVisibility(false);
            this.view.pdfBrowser.setVisibility(false);
            let pdfName = "Oceaneering" + parseInt(Math.random() * 100).toFixed(0);
            let savePDFResponse = NSPDFViewer.savePDF(base64String, pdfName);
            if (savePDFResponse == "PDF Created Successfully") {
                let openPdfResponse = NSPDFViewer.openPDF(pdfName, "com.oceaneering.oms");
                if (openPdfResponse == "PDF Opened Successfully") {
                    this.dismissLoading();
                } else {
                    var input = {
                        "msg": "Not Supported in this device.",
                        "option": "error"
                    };
                    this.showBottomPopUp(input);
                }
            } else {
                var inp = {
                    "msg": "Please enable the storage permission for DPR in settings.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
            this.dismissLoading();
        } catch (error) {
            commonUtils.exception(this, error);
        }
    },
    openDOC: function(base64String) {
        try {
            this.view.flxbrowser.setVisibility(false);
            this.view.pdfBrowser.setVisibility(false);
            let pdfName = "Oceaneering" + parseInt(Math.random() * 100).toFixed(0);
            let savePDFResponse = NSPDFViewer.saveDOC(base64String, pdfName);
            if (savePDFResponse == "DOC Created Successfully") {
                let openPdfResponse = NSPDFViewer.openDOC(pdfName, "com.oceaneering.oms");
                if (openPdfResponse == "DOC Opened Successfully") {
                    this.dismissLoading();
                } else {
                    var input = {
                        "msg": "Not Supported in this device.",
                        "option": "error"
                    };
                    this.showBottomPopUp(input);
                }
            } else {
                var inp = {
                    "msg": "Please enable the storage permission for DPR in settings.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
            this.dismissLoading();
        } catch (error) {
            commonUtils.exception(this, error);
        }
    },
    openExcel: function(base64String) {
        try {
            this.view.flxbrowser.setVisibility(false);
            this.view.pdfBrowser.setVisibility(false);
            let pdfName = "Oceaneering" + parseInt(Math.random() * 100).toFixed(0);
            let savePDFResponse = NSPDFViewer.saveExcel(base64String, pdfName);
            if (savePDFResponse == "Excel Created Successfully") {
                let openPdfResponse = NSPDFViewer.openExcel(pdfName, "com.oceaneering.oms");
                if (openPdfResponse == "Excel Opened Successfully") {
                    this.dismissLoading();
                } else {
                    var input = {
                        "msg": "Not Supported in this device.",
                        "option": "error"
                    };
                    this.showBottomPopUp(input);
                }
            } else {
                var inp = {
                    "msg": "Please enable the storage permission for DPR in settings.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
            this.dismissLoading();
        } catch (error) {
            commonUtils.exception(this, error);
        }
    },
    openPpt: function(base64String) {
        try {
            this.view.flxbrowser.setVisibility(false);
            this.view.pdfBrowser.setVisibility(false);
            let pdfName = "Oceaneering" + parseInt(Math.random() * 100).toFixed(0);
            let savePDFResponse = NSPDFViewer.savePpt(base64String, pdfName);
            if (savePDFResponse == "Ppt Created Successfully") {
                let openPdfResponse = NSPDFViewer.openPpt(pdfName, "com.oceaneering.oms");
                if (openPdfResponse == "Ppt Opened Successfully") {
                    this.dismissLoading();
                } else {
                    var input = {
                        "msg": "Not Supported in this device."
                    };
                    this.showBottomPopUp(input);
                }
            } else {
                var inp = {
                    "msg": "Please enable the storage permission for DPR in settings.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
            this.dismissLoading();
        } catch (error) {
            commonUtils.exception(this, error);
        }
    },
    openTxt: function(base64String) {
        try {
            this.view.flxbrowser.setVisibility(false);
            this.view.pdfBrowser.setVisibility(false);
            let pdfName = "Oceaneering" + parseInt(Math.random() * 100).toFixed(0);
            let savePDFResponse = NSPDFViewer.saveTXT(base64String, pdfName);
            if (savePDFResponse == "txt Created Successfully") {
                let openPdfResponse = NSPDFViewer.openTXT(pdfName, "com.oceaneering.oms");
                if (openPdfResponse == "txt Opened Successfully") {
                    this.dismissLoading();
                } else {
                    var input = {
                        "msg": "Not Supported in this device."
                    };
                    this.showBottomPopUp(input);
                }
            } else {
                var inp = {
                    "msg": "Please enable the storage permission for DPR in settings.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
            }
            this.dismissLoading();
        } catch (error) {
            commonUtils.exception(this, error);
        }
    },
    onClickBackBrowser: function() {
        this.view.flxbrowser.setVisibility(false);
    },
    // binds of After attchments ------------------------------------//
    bindProjectConditions: function() {
        var self = this;
        this.setUOMProjectConditions();
        this.view.lblFuelUOM.text = "CU Meters";
        this.view.lblLubeUOM.text = "CU Meters";
        this.view.lblWaterUOM.text = "CU Meters";
        this.view.lblHydraulicUOM.text = "CU Meters";
        this.view.lblGritUOM.text = "CU Meters";
        this.view.lblPotableWaterUOM.text = "CU Meters";
        this.view.flxFuelUOM.onClick = this.showProjectUOM.bind(this, "lblFuelUOM");
        this.view.flxLubeUOM.onClick = this.showProjectUOM.bind(this, "lblLubeUOM");
        this.view.flxWaterUOM.onClick = this.showProjectUOM.bind(this, "lblWaterUOM");
        this.view.flxHyraulicUOM.onClick = this.showProjectUOM.bind(this, "lblHydraulicUOM");
        this.view.flxGritUOM.onClick = this.showProjectUOM.bind(this, "lblGritUOM");
        this.view.flxPotableWaterUOM.onClick = this.showProjectUOM.bind(this, "lblPotableWaterUOM");
        this.view.flxSaveCommentsTbx.onClick = this.saveProjectConditions.bind(this, "comments");
        this.view.flxResetCommentsTbx.onClick = this.resetComments.bind(this);
        this.view.flxResetProjectCondition.onClick = this.resetProjectConditions.bind(this);
        this.view.flxSavetProjectCondition.onClick = this.saveProjectConditions.bind(this, "conditions");
        this.view.flxResetStatus.onClick = this.resetProjectStatus.bind(this);
        this.view.flxSaveStatus.onClick = this.saveProjectConditions.bind(this, "status");
        this.view.flxResetFuture.onClick = this.resetFuture.bind(this);
        this.view.flxSaveFuture.onClick = this.saveProjectConditions.bind(this, "future");
        this.view.UOMProject.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.UOMProject);
        this.view.UOMProject.segServiceLine.onRowClick = this.onRowClickConditionsUOM.bind(this);
        this.view.tbxComments.onTextChange = () => {
            var value = self.view.tbxComments.text;
            if (!commonUtils.checkIfEmpty(value)) {
                this.view.lblRemaining.text = "Remaining Characters: " + (2000 - value.length);
            }
        };
        this.view.tbxProgess.onTextChange = () => {
            var value = self.view.tbxProgess.text;
            if (!commonUtils.checkIfEmpty(value)) {
                this.view.lblRemainingProgress.text = "Remaining Characters: " + (2000 - value.length);
            }
        };
        this.view.tbxProgess.onTextChange = () => {
            var value = self.view.tbxProgess.text;
            if (!commonUtils.checkIfEmpty(value)) {
                this.view.lblRemainingProgress.text = "Remaining Characters: " + (2000 - value.length);
            }
        };
        this.view.tbxProblem.onTextChange = () => {
            var value = self.view.tbxProblem.text;
            if (!commonUtils.checkIfEmpty(value)) {
                this.view.lblRemainingProblem.text = "Remaining Characters: " + (2000 - value.length);
            }
        };
        this.view.tbxPlansTom.onTextChange = () => {
            var value = self.view.tbxPlansTom.text;
            if (!commonUtils.checkIfEmpty(value)) {
                this.view.lblRemainingPlans.text = "Remaining Characters: " + (2000 - value.length);
            }
        };
        this.view.tbxProjectNeeds.onTextChange = () => {
            var value = self.view.tbxProjectNeeds.text;
            if (!commonUtils.checkIfEmpty(value)) {
                this.view.lblRemainingNeeds.text = "Remaining Characters: " + (2000 - value.length);
            }
        };
    },
    setUOMProjectConditions: function() {
        try {
            var val = this.UOMProjectCondition;
            var result = [];
            if (!commonUtils.checkIfEmpty(val) && val.length > 0) {
                for (var j = 0; j < val.length; j++) {
                    var inp = {
                        "lblValue": val[j].desc, //// ------------------
                        "lblCheck": {
                            isVisible: true,
                            text: commonUtils.TICKTEXTUNSEL,
                            skin: commonUtils.TICKUNSELECTED
                        }
                    };
                    result.push(inp);
                }
                this.view.UOMProject.segServiceLine.setData(result);
            }
        } catch (ex) {
            this.exception(ex);
        }
    },
    showProjectUOM: function(value) {
        try {
            var self = this;
            var data = this.view.UOMProject.segServiceLine.data;
            var len = this.view.UOMProject.segServiceLine.data;
            if (!commonUtils.checkIfEmpty(len)) {
                len = len.length;
                if (!commonUtils.checkIfEmpty(self.view[value].text)) {
                    for (var j = 0; j < len; j++) {
                        if (self.view[value].text == data[j].lblValue) {
                            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                            data[j].lblCheck.text = commonUtils.TICK;
                        } else {
                            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                        }
                        data[j].lbl = value;
                    }
                    this.view.UOMProject.segServiceLine.setData(data);
                }
                this.view.UOMProject.segServiceLine.setVisibility(true);
            } else {
                this.view.UOMProject.segServiceLine.setVisibility(false);
            }
            this.onClickListBottom(this.view.UOMProject);
        } catch (ex) {
            this.exception(ex);
        }
    },
    getCodeForProjectConditionUOM: function(value) {
        switch (value) {
            case "CU Meters":
                {
                    return 81077;
                }
            case "Litre":
                {
                    return 80844;
                }
            case "Gallon":
                {
                    return 80847;
                }
        }
    },
    getValueFromCodeProjectCondition: function(value) {
        switch (value) {
            case "81077":
                {
                    return "CU Meters";
                }
            case "80844":
                {
                    return "Litre";
                }
            case "80847":
                {
                    return "Gallon";
                }
            case 81077:
                {
                    return "CU Meters";
                }
            case 80844:
                {
                    return "Litre";
                }
            case 80847:
                {
                    return "Gallon";
                }
            default:
                {
                    return "CU Meters";
                }
        }
    },
    resetComments: function() {
        this.view.tbxComments.text = "";
        this.view.lblRemaining.text = "Remaining Characters: 2000";
    },
    // ------------------- Project COnditions -----------------//
    saveProjectConditions: function(value) {
        this.showLoading();
        var self = this;
        var data = this.headerData;
        switch (value) {
            case "comments":
                {
                    data.str_Comment = commonUtils.checkIfEmpty(this.view.tbxComments.text) ? "" : this.view.tbxComments.text;
                    break;
                }
            case "conditions":
                {
                    data.str_Latitude = commonUtils.checkIfEmpty(this.view.tbxLatitude.text) ? "" : this.view.tbxLatitude.text;
                    data.str_Longitude = commonUtils.checkIfEmpty(this.view.tbxLongitude.text) ? "" : this.view.tbxLongitude.text;
                    data.str_current = commonUtils.checkIfEmpty(this.view.tbxSeaCurrents.text) ? "" : this.view.tbxSeaCurrents.text;
                    data.str_Seas = commonUtils.checkIfEmpty(this.view.tbxSeas.text) ? "" : this.view.tbxSeas.text;
                    data.str_Skies = commonUtils.checkIfEmpty(this.view.tbxSkies.text) ? "" : this.view.tbxSkies.text;
                    data.str_Winds = commonUtils.checkIfEmpty(this.view.tbxWinds.text) ? "" : this.view.tbxWinds.text;
                    data.str_Visibility = commonUtils.checkIfEmpty(this.view.tbxVisibility.text) ? "" : this.view.tbxVisibility.text;
                    data.lng_bunks = commonUtils.checkIfEmpty(this.view.tbxBunks.text) ? null : this.view.tbxBunks.text;
                    data.lng_meals = commonUtils.checkIfEmpty(this.view.tbxMeals.text) ? null : this.view.tbxMeals.text;
                    data.lng_fuelused = commonUtils.checkIfEmpty(this.view.tbxFuelUsed.text) ? null : this.view.tbxFuelUsed.text;
                    data.lng_Fuelrecv = commonUtils.checkIfEmpty(this.view.tbxFuelRecieved.text) ? null : this.view.tbxFuelRecieved.text;
                    data.lng_FuelUsedUOM = this.getCodeForProjectConditionUOM(this.view.lblFuelUOM.text);
                    data.lng_FuelReceivedUOM = this.getCodeForProjectConditionUOM(this.view.lblFuelUOM.text);
                    data.lng_Lubeused = commonUtils.checkIfEmpty(this.view.tbxLudeOilUsed.text) ? null : this.view.tbxLudeOilUsed.text;
                    data.lng_Luberecv = commonUtils.checkIfEmpty(this.view.tbxLubeOilReceived.text) ? null : this.view.tbxLubeOilReceived.text;
                    data.lng_LubeOilUsedUOM = this.getCodeForProjectConditionUOM(this.view.lblLubeUOM.text);
                    data.lng_LubeOilReceivedUOM = this.getCodeForProjectConditionUOM(this.view.lblLubeUOM.text);
                    data.lng_waterused = commonUtils.checkIfEmpty(this.view.tbxWaterUsed.text) ? null : this.view.tbxWaterUsed.text;
                    data.lng_waterrecv = commonUtils.checkIfEmpty(this.view.tbxWaterReceived.text) ? null : this.view.tbxWaterReceived.text;
                    data.lng_WaterUsedUOM = this.getCodeForProjectConditionUOM(this.view.lblWaterUOM.text);
                    data.lng_WaterReceivedUOM = this.getCodeForProjectConditionUOM(this.view.lblWaterUOM.text);
                    data.lng_hydraulicused = commonUtils.checkIfEmpty(this.view.tbxHydraulicUsed.text) ? null : this.view.tbxHydraulicUsed.text;
                    data.lng_hydraulicrecv = commonUtils.checkIfEmpty(this.view.tbxHydraulicReceived.text) ? null : this.view.tbxHydraulicReceived.text;
                    data.lng_HydraulicUsedUOM = this.getCodeForProjectConditionUOM(this.view.lblHydraulicUOM.text);
                    data.lng_HydraulicReceivedUOM = this.getCodeForProjectConditionUOM(this.view.lblHydraulicUOM.text);
                    data.dbl_GritConsumedToday = commonUtils.checkIfEmpty(this.view.tbxGritConsumed.text) ? null : this.view.tbxGritConsumed.text;
                    data.dbl_GritRemaining = commonUtils.checkIfEmpty(this.view.tbxGritRemaining.text) ? null : this.view.tbxGritRemaining.text;
                    data.lng_GritUOM = this.getCodeForProjectConditionUOM(this.view.lblGritUOM.text);
                    data.potableWater = commonUtils.checkIfEmpty(this.view.tbxPotableWaterBoard.text) ? null : this.view.tbxPotableWaterBoard.text;
                    data.potableWaterUOM = this.getCodeForProjectConditionUOM(this.view.lblPotableWaterUOM.text);
                    break;
                }
            case "status":
                {
                    data.str_progress = commonUtils.checkIfEmpty(this.view.tbxProgess.text) ? "" : this.view.tbxProgess.text;
                    data.str_problems = commonUtils.checkIfEmpty(this.view.tbxProblem.text) ? "" : this.view.tbxProblem.text;
                    break;
                }
            case "future":
                {
                    data.str_plans = commonUtils.checkIfEmpty(this.view.tbxPlansTom.text) ? "" : this.view.tbxPlansTom.text;
                    data.str_Needs = commonUtils.checkIfEmpty(this.view.tbxProjectNeeds.text) ? "" : this.view.tbxProjectNeeds.text;
                    break;
                }
        }
        data.dte_reportdate = (data.dte_reportdate).substring(0, 10);
        data.sja = null;
        commonUtils.UpdateDPRHeader(data).then((res) => {
            kony.timer.schedule("updateConditions", () => {
                kony.timer.cancel("updateConditions");
                self.dismissLoading();
                self.dismissSuccess();
                if (!commonUtils.checkIfEmpty(res) && (res.OMS_OP_Dailyreportheader).length > 0) {
                    self.headerData = res.OMS_OP_Dailyreportheader[0];
                }
            }, 0.7, false);
            this.showSuccess("DataSaved");
        }, (err) => {
            this.dismissLoading();
            var param = {
                "func": "saveProjectConditions",
                "err": err.errmsg
            };
            commonUtils.exception(this, param, true);
        });
    },
    resetProjectConditions: function() {
        this.view.tbxLatitude.text = "";
        this.view.tbxLongitude.text = "";
        this.view.tbxSeaCurrents.text = "";
        this.view.tbxSeas.text = "";
        this.view.tbxSkies.text = "";
        this.view.tbxWinds.text = "";
        this.view.tbxVisibility.text = "";
        this.view.tbxBunks.text = "";
        this.view.tbxMeals.text = "";
        this.view.tbxFuelUsed.text = "";
        this.view.tbxFuelRecieved.text = "";
        this.view.lblFuelUOM.text = "CU Meters";
        this.view.tbxLudeOilUsed.text = "";
        this.view.tbxLubeOilReceived.text = "";
        this.view.lblLubeUOM.text = "CU Meters";
        this.view.tbxWaterUsed.text = "";
        this.view.tbxWaterReceived.text = "";
        this.view.lblWaterUOM.text = "CU Meters";
        this.view.tbxHydraulicUsed.text = "";
        this.view.tbxHydraulicReceived.text = "";
        this.view.lblHydraulicUOM.text = "CU Meters";
        this.view.tbxGritConsumed.text = "";
        this.view.tbxGritRemaining.text = "";
        this.view.lblGritUOM.text = "CU Meters";
        this.view.tbxPotableWaterBoard.text = "";
        this.view.lblPotableWaterUOM.text = "CU Meters";
    },
    /// ------------------ project Status ------------------//
    resetProjectStatus: function() {
        this.view.tbxProgess.text = "";
        this.view.tbxProblem.text = "";
        this.view.lblRemainingProgress.text = "Remaining Characters: 2000";
        this.view.lblRemainingProblem.text = "Remaining Characters: 2000";
    },
    // ------------------- Future --------------------------//
    resetFuture: function() {
        this.view.tbxPlansTom.text = "";
        this.view.tbxProjectNeeds.text = "";
        this.view.lblRemainingPlans.text = "Remaining Characters: 2000";
        this.view.lblRemainingNeeds.text = "Remaining Characters: 2000";
    },
    setHeaderData: function(header) {
        try {
            var self = this;
            this.view.tbxComments.text = commonUtils.checkIfEmpty(header.str_Comment) ? "" : header.str_Comment;
            this.view.tbxLatitude.text = commonUtils.checkIfEmpty(header.str_Latitude) ? "" : header.str_Latitude;
            this.view.tbxLongitude.text = commonUtils.checkIfEmpty(header.str_Longitude) ? "" : header.str_Longitude;
            this.view.tbxSeaCurrents.text = commonUtils.checkIfEmpty(header.str_current) ? "" : header.str_current;
            this.view.tbxSeas.text = commonUtils.checkIfEmpty(header.str_Seas) ? "" : header.str_Seas;
            this.view.tbxSkies.text = commonUtils.checkIfEmpty(header.str_Skies) ? "" : header.str_Skies;
            this.view.tbxWinds.text = commonUtils.checkIfEmpty(header.str_Winds) ? "" : header.str_Winds;
            this.view.tbxVisibility.text = commonUtils.checkIfEmpty(header.str_Visibility) ? "" : header.str_Visibility;
            this.view.tbxBunks.text = commonUtils.checkIfEmpty(header.lng_bunks) ? "" : (commonUtils.isFloat(parseFloat(header.lng_bunks)) ? parseFloat(header.lng_bunks) : parseInt(header.lng_bunks).toString());
            this.view.tbxMeals.text = commonUtils.checkIfEmpty(header.lng_meals) ? "" : (commonUtils.isFloat(parseFloat(header.lng_meals)) ? parseFloat(header.lng_meals) : parseInt(header.lng_meals).toString());
            this.view.tbxFuelUsed.text = commonUtils.checkIfEmpty(header.lng_fuelused) ? "" : (commonUtils.isFloat(parseFloat(header.lng_fuelused)) ? parseFloat(header.lng_fuelused) : parseInt(header.lng_fuelused).toString());
            this.view.tbxFuelRecieved.text = commonUtils.checkIfEmpty(header.lng_Fuelrecv) ? "" : (commonUtils.isFloat(parseFloat(header.lng_Fuelrecv)) ? parseFloat(header.lng_Fuelrecv) : parseInt(header.lng_Fuelrecv).toString());
            this.view.lblFuelUOM.text = this.getValueFromCodeProjectCondition(header.lng_FuelUsedUOM);
            this.view.tbxLudeOilUsed.text = commonUtils.checkIfEmpty(header.lng_Lubeused) ? "" : (commonUtils.isFloat(parseFloat(header.lng_Lubeused)) ? parseFloat(header.lng_Lubeused) : parseInt(header.lng_Lubeused).toString());
            this.view.tbxLubeOilReceived.text = commonUtils.checkIfEmpty(header.lng_Luberecv) ? "" : (commonUtils.isFloat(parseFloat(header.lng_Luberecv)) ? parseFloat(header.lng_Luberecv) : parseInt(header.lng_Luberecv).toString());
            this.view.lblLubeUOM.text = this.getValueFromCodeProjectCondition(header.lng_LubeOilUsedUOM);
            this.view.tbxWaterUsed.text = commonUtils.checkIfEmpty(header.lng_waterused) ? "" : (commonUtils.isFloat(parseFloat(header.lng_waterused)) ? parseFloat(header.lng_waterused) : parseInt(header.lng_waterused).toString());
            this.view.tbxWaterReceived.text = commonUtils.checkIfEmpty(header.lng_waterrecv) ? "" : (commonUtils.isFloat(parseFloat(header.lng_waterrecv)) ? parseFloat(header.lng_waterrecv) : parseInt(header.lng_waterrecv).toString());
            this.view.lblWaterUOM.text = this.getValueFromCodeProjectCondition(header.lng_WaterUsedUOM);
            this.view.tbxHydraulicUsed.text = commonUtils.checkIfEmpty(header.lng_hydraulicused) ? "" : (commonUtils.isFloat(parseFloat(header.lng_hydraulicused)) ? parseFloat(header.lng_hydraulicused) : parseInt(header.lng_hydraulicused).toString());
            this.view.tbxHydraulicReceived.text = commonUtils.checkIfEmpty(header.lng_hydraulicrecv) ? "" : (commonUtils.isFloat(parseFloat(header.lng_hydraulicrecv)) ? parseFloat(header.lng_hydraulicrecv) : parseInt(header.lng_hydraulicrecv).toString());
            this.view.lblHydraulicUOM.text = this.getValueFromCodeProjectCondition(header.lng_HydraulicUsedUOM);
            this.view.tbxGritConsumed.text = commonUtils.checkIfEmpty(header.dbl_GritConsumedToday) ? "" : (commonUtils.isFloat(parseFloat(header.dbl_GritConsumedToday)) ? parseFloat(header.dbl_GritConsumedToday) : parseInt(header.dbl_GritConsumedToday).toString());
            this.view.tbxGritRemaining.text = commonUtils.checkIfEmpty(header.dbl_GritRemaining) ? "" : (commonUtils.isFloat(parseFloat(header.dbl_GritRemaining)) ? parseFloat(header.dbl_GritRemaining) : parseInt(header.dbl_GritRemaining).toString());
            this.view.lblGritUOM.text = this.getValueFromCodeProjectCondition(header.lng_GritUOM);
            // this.view.tbxPotableWaterBoard.text = commonUtils.checkIfEmpty(header.dbl_GritRemaining) ? "" : header.dbl_GritRemaining;
            // this.view.lblPotableWaterUOM.text =  this.getValueFromCodeProjectCondition(header);
            this.view.tbxProgess.text = commonUtils.checkIfEmpty(header.str_progress) ? "" : header.str_progress;
            this.view.tbxProblem.text = commonUtils.checkIfEmpty(header.str_problems) ? "" : header.str_problems;
            this.view.tbxPlansTom.text = commonUtils.checkIfEmpty(header.str_plans) ? "" : header.str_plans;
            this.view.tbxProjectNeeds.text = commonUtils.checkIfEmpty(header.str_Needs) ? "" : header.str_Needs;
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    onRowClickConditionsUOM: function() {
        try {
            this.showLoading();
            var selected = this.view.UOMProject.segServiceLine.selectedRowItems[0];
            this.view[selected.lbl].text = selected.lblValue;
            this.HideActivity(this.view.UOMProject);
        } catch (ex) {
            this.exception(ex);
        }
    },
    animateFileLoading: function() {
        var self = this;
        var transform = kony.ui.makeAffineTransform();
        transform.translate(340, 0);
        var transform2 = kony.ui.makeAffineTransform();
        transform.translate(-340, 0);
        this.view.flxAnimSubCon.animate(kony.ui.createAnimation({
            "0": {
                "transform": transform,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            },
            "100": {
                "transform": transform2,
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 0,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 3
        }, {
            "animationEnd": ""
        });
    }
});
// Dynamic images container
//   addFlxImageContainer : function(id){
//     var flximage = new kony.ui.FlexContainer({
//       "autogrowMode": kony.flex.AUTOGROW_NONE,
//       "clipBounds": true,
//       "height": "115dp",
//       "id": "flximage" + id,
//       "isVisible": true,
//       "layoutType": kony.flex.FLOW_HORIZONTAL,
//       "left": "0",
//       "isModalContainer": false,
//       "skin": "slFbox",
//       "top": 5,
//       "width": "100%"
//     }, {}, {});
//     flximage.setDefaultUnit(kony.flex.DP);
//     return flximage;
//   },
//   setImagesDynamically : function(data){
//     if(this.view.flxGalleryContent.isVisible){
//       this.showLoading();
//     }
//     var j;
//     this.view.flxGalleryContainer.removeAll();
//     var self = this;
//     var k = 0;
//     if(!commonUtils.checkIfEmpty(data) && data.length > 0){
//       var flxContainer = this.addFlxImageContainer(0);
//       for(j = 0; j < data.length ; j++){
//         var flxvar = this.addImage(j ,j % 3, data[j].base64);
//         var img = "img" + j;
//         flxvar.onClick = (obj)=>{
//           img = "img" + (obj.id).substr(6);
//           self.deletingImageId = (obj.id).substr(6);
//           self.view.imgShow.base64 = self.view[img].base64;
//           self.view.imgShow.zoomEnabled = true;
//           self.view.imgShow.zoomValue = 1;
//           self.view.flxGalleryHeader.setEnabled(false);
//           self.view.flxGalleryContainer.setEnabled(false);
//           self.view.flxGalleryLargerView.setVisibility(true);
//         };
//         flxContainer.add(flxvar);
//         if(k % 3 == 2){
//           k = 0;
//           this.view.flxGalleryContainer.add(flxContainer);
//           flxContainer = this.addFlxImageContainer(j+1);
//         } else {
//           k++;
//         }
//       }
//       if(k > 0){
//         this.view.flxGalleryContainer.add(flxContainer);  
//       }
//     } 
//     if(this.view.flxGalleryContent.isVisible){
//       this.dismissLoading();
//     }
//   },
//   addImage : function(id , position , base64){
//     switch (position){
//       case 0 : {
//         var flximg = new kony.ui.FlexContainer({
//           "autogrowMode": kony.flex.AUTOGROW_NONE,
//           "clipBounds": true,
//           "height": "110dp",
//           "id": "flximg" + id, 
//           "isVisible": true,
//           "layoutType": kony.flex.FREE_FORM,
//           "left": "5%",
//           "isModalContainer": false,
//           "skin": "slFbox",
//           "top": "0",
//           "width": "25%"
//         }, {}, {});
//         flximg.setDefaultUnit(kony.flex.DP);
//         var img1 = new kony.ui.Image2({
//           "height": "100%",
//           "id": "img" + id,
//           "isVisible": true,
//           "left": "0%",
//           "skin": "slImage",
//           "top": "0",
//           "width": "100%"
//         }, {
//           "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
//           "padding": [0, 0, 0, 0],
//           "paddingInPixel": false
//         }, {});
//         img1.base64 = base64;
//         flximg.add(img1);
//         return flximg;
//       }
//       case 1 : {
//         var flximg2 = new kony.ui.FlexContainer({
//           "autogrowMode": kony.flex.AUTOGROW_NONE,
//           "clipBounds": true,
//           "height": "110dp",
//           "id": "flximg" + id,
//           "isVisible": true,
//           "layoutType": kony.flex.FREE_FORM,
//           "left": "7.50%",
//           "isModalContainer": false,
//           "right": "7.50%",
//           "skin": "slFbox",
//           "top": "0",
//           "width": "25%"
//         }, {}, {});
//         flximg2.setDefaultUnit(kony.flex.DP);
//         var img2 = new kony.ui.Image2({
//           "height": "100%",
//           "id": "img" + id,
//           "isVisible": true,
//           "left": "0%",
//           "skin": "slImage",
//           "top": "0",
//           "width": "100%"
//         }, {
//           "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
//           "padding": [0, 0, 0, 0],
//           "paddingInPixel": false
//         }, {});
//         img2.base64 = base64;
//         flximg2.add(img2);
//         return flximg2;
//       }
//       case 2 : {
//         var flximg3 = new kony.ui.FlexContainer({
//           "autogrowMode": kony.flex.AUTOGROW_NONE,
//           "clipBounds": true,
//           "height": "110dp",
//           "id": "flximg" + id,
//           "isVisible": true,
//           "layoutType": kony.flex.FREE_FORM,
//           "left": "0%",
//           "isModalContainer": false,
//           "right": "5%",
//           "skin": "slFbox",
//           "top": "0",
//           "width": "25%"
//         }, {}, {});
//         flximg3.setDefaultUnit(kony.flex.DP);
//         var img3 = new kony.ui.Image2({
//           "height": "100%",
//           "id": "img" + id,
//           "isVisible": true,
//           "left": "0%",
//           "skin": "slImage",
//           "top": "0",
//           "width": "100%"
//         }, {
//           "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
//           "padding": [0, 0, 0, 0],
//           "paddingInPixel": false
//         }, {});
//         img3.base64 = base64;
//         flximg3.add(img3);
//         return flximg3;
//       }
//     }
//   },
define("frmAddDPRControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c5bd154ee0d6466ab13f1fc26fdd7e6a: function AS_FlexContainer_c5bd154ee0d6466ab13f1fc26fdd7e6a(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for flxDoneTRCPopup **/
    AS_FlexContainer_bb862ad904804d62bc85e5c20d82db24: function AS_FlexContainer_bb862ad904804d62bc85e5c20d82db24(eventobject) {
        var self = this;
        this.onDoneOfTRCPopup();
    },
    /** onClick defined for flxTRCPopup **/
    AS_FlexContainer_e47e159a0a1041808c5e09b8e33ec9c1: function AS_FlexContainer_e47e159a0a1041808c5e09b8e33ec9c1(eventobject) {
        var self = this;
        this.doNothing();
    },
    /** onClick defined for flxPopups **/
    AS_FlexContainer_a2b3b676de2843cfafe67fb4e7f3cfbf: function AS_FlexContainer_a2b3b676de2843cfafe67fb4e7f3cfbf(eventobject) {
        var self = this;
        this.dismissPopups();
    },
    /** onClick defined for flxEventBack **/
    AS_FlexContainer_bd12c64518d74ac3b3a8a6a11694746d: function AS_FlexContainer_bd12c64518d74ac3b3a8a6a11694746d(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for flxInTransitValue **/
    AS_FlexContainer_f1467bea424243d98b11a80d61cdccfe: function AS_FlexContainer_f1467bea424243d98b11a80d61cdccfe(eventobject) {
        var self = this;
        this.toggleInTransit();
    },
    /** onClick defined for flxAssetToolsback **/
    AS_FlexContainer_a05c3be2928f447a8a92e01b90cafb63: function AS_FlexContainer_a05c3be2928f447a8a92e01b90cafb63(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for flxRoasterBack **/
    AS_FlexContainer_ic77e711205341ab91c770db68b0b4b8: function AS_FlexContainer_ic77e711205341ab91c770db68b0b4b8(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for btnBottomNot **/
    AS_Button_f41c2c48e2ef468aa94591f12f43f2dc: function AS_Button_f41c2c48e2ef468aa94591f12f43f2dc(eventobject) {
        var self = this;
    },
    /** onClick defined for flxBrowserback **/
    AS_FlexContainer_c5aacdc7b0bf444ea9f2e681b4d6dc49: function AS_FlexContainer_c5aacdc7b0bf444ea9f2e681b4d6dc49(eventobject) {
        var self = this;
        this.onClickOfBack();
    }
});
define("frmAddDPRController", ["userfrmAddDPRController", "frmAddDPRControllerActions"], function() {
    var controller = require("userfrmAddDPRController");
    var controllerActions = ["frmAddDPRControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
