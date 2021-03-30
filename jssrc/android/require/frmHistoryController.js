/**
 * @Description - Contains the functionality of the History Form
 */
define("userfrmHistoryController", {
    historyList: [],
    /**
     * @desc MVC navigation function
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    onNavigate: function(data) {
        this.toggleFilters(true);
        commonUtils.addbottompopup(this);
        this.view.preShow = this.preShow.bind(this, data);
        this.view.postShow = this.postShow.bind(this);
        this.bindActions();
    },
    preShow: function(data) {
        this.dismissBottomPopup();
        this.showLoadingIndicator();
        this.resetHistoryScreen();
        this.setCurrentDateInFilters();
        this.getDPRHistory();
        this.view.flxOption.setVisibility(false);
    },
    postShow: function() {},
    bindActions: function() {
        var self = this;
        this.view.flxOption.setVisibility(false);
        this.view.flxSearchDPR.onClick = this.showHideSearchTbx.bind(this);
        this.view.txtSearch.onDone = this.onSearchProjects.bind(this);
        this.view.txtSearch.onTextChange = this.onSearchProjects.bind(this);
        this.view.btnClear.onClick = this.onClickOfResetFilters.bind(this);
        this.view.btnApply.onClick = this.onClickOfApplyFilters.bind(this);
        this.view.segDPRHistory.onRowClick = this.onSelectingDPR.bind(this);
        this.view.onDeviceBack = this.onClickOfBack.bind(this);
        this.view.flxMenuIcon.onClick = this.onClickOfBack.bind(this);
        this.view.flxSignatureback.onClick = () => {
            self.view.flxSignatureShow.setVisibility(false);
        };
        this.view.flxFilterIcon.onClick = () => {
            self.toggleFilters(false);
            self.view.flxOption.setVisibility(false);
        };
        this.view.flxRefresh.onClick = () => {
            self.view.flxOption.setVisibility(false);
            self.getDPRHistory();
        };
        this.view.flxOptionContainer.onClick = () => {
            this.view.flxOption.isVisible = !this.view.flxOption.isVisible;
        };
        this.view.flxBody.onClick = () => {
            this.view.flxOption.setVisibility(false);
        };
        this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
    },
    showHideSearchTbx: function() {
        var value = true;
        if (this.view.lblSearchDpr.skin == commonUtils.SEARCHSELECTED) {
            this.view.lblSearchDpr.skin = commonUtils.SEARCHUNSELECTED;
            this.view.flxSearch.setVisibility(false);
            value = false;
        } else {
            this.view.lblSearchDpr.skin = commonUtils.SEARCHSELECTED;
            this.view.flxSearch.setVisibility(true);
        }
        this.view.segDPRHistory.height = value ? "91.5%" : "99.5%";
        this.view.flxOption.setVisibility(false);
    },
    /**
     * @desc Resets History screen to initial settings
     * @param -
     * @retun void
     */
    resetHistoryScreen: function() {
        this.view.txtSearch.text = "";
        this.view.lblSearchDpr.skin = commonUtils.SEARCHUNSELECTED;
        this.view.flxSearch.setVisibility(false);
        this.view.segDPRHistory.height = "99.5%";
        if (!commonUtils.checkIfEmpty(this.view.segDPRHistory.data) && this.view.segDPRHistory.data.length > 0 && !commonUtils.checkIfEmpty(this.view.segDPRHistory.data[0].dprId)) {
            this.view.segDPRHistory.setVisibility(true);
            this.view.lblNoHistory.setVisibility(false);
            this.view.imgdpr.setVisibility(false);
        } else {
            this.view.segDPRHistory.setVisibility(false);
            this.view.lblNoHistory.setVisibility(true);
            this.view.imgdpr.setVisibility(true);
        }
    },
    /**
     * @desc On selecting a dpr from the history list
     * @param -
     * @retun void
     */
    onSelectingDPR: function() {
        try {
            this.showLoadingIndicator();
            var data = this.view.segDPRHistory.selectedRowItems[0];
            commonUtils.getLatestProjectData(data.dprheader.str_projid);
            var pending = (data.dprheader.lng_status == "1" || data.dprheader.lng_status == 1) ? false : true;
            if (pending) {
                var employeeData = {
                    "empName": oceaneering.oms.appGlobals.employeeFullName,
                    "empId": oceaneering.oms.appGlobals.employeeId,
                    role: ""
                };
                var contextData = {
                    "projectData": {
                        "projectId": data.dprheader.str_projid
                    },
                    "navigatingFrom": "frmHistory",
                    "operation": "History",
                    "employeeData": employeeData,
                    "dprData": data.dprData,
                    headerData: data.dprheader
                };
                if (!data.type) {
                    employeeData.role = "supervisor";
                    formStack.push({
                        frm: "frmHistory",
                        params: {
                            isBack: true
                        }
                    });
                    contextData.isBack = false;
                    contextData.reportDate = (data.dprheader.dte_reportdate).substring(0, 10);
                    contextData.projectId = data.dprheader.str_projid;
                    contextData.operation = "History";
                    commonUtils.navigateTo("frmAddDPR", contextData);
                } else {
                    employeeData.role = "crew";
                    formStack.push({
                        frm: "frmHistory",
                        params: {
                            isBack: true
                        }
                    });
                    contextData.isBack = false;
                    contextData.operation = "View";
                    commonUtils.navigateTo("frmCreateDPR", contextData);
                }
            } else {
                var employeeDataDone = {
                    "empName": oceaneering.oms.appGlobals.employeeFullName,
                    "empId": oceaneering.oms.appGlobals.employeeId,
                    role: ""
                };
                var contextDataDone = {
                    "projectData": {
                        "projectId": data.dprheader.str_projid
                    },
                    "navigatingFrom": "frmHistory",
                    "operation": "View",
                    "employeeData": employeeDataDone,
                    "dprData": data.dprData,
                    headerData: data.dprheader
                };
                if (!data.type) {
                    employeeDataDone.role = "supervisor";
                    formStack.push({
                        frm: "frmHistory",
                        params: {
                            isBack: true
                        }
                    });
                    contextDataDone.isBack = false;
                    contextDataDone.reportDate = (data.dprheader.dte_reportdate).substring(0, 10);
                    contextDataDone.projectId = data.dprheader.str_projid;
                    commonUtils.navigateTo("frmAddDPR", contextDataDone);
                } else {
                    employeeDataDone.role = "crew";
                    formStack.push({
                        frm: "frmHistory",
                        params: {
                            isBack: true
                        }
                    });
                    contextDataDone.isBack = false;
                    commonUtils.navigateTo("frmCreateDPR", contextDataDone);
                }
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Called on click of the back button
     * @param -
     * @retun void
     */
    onClickOfBack: function() {
        this.showLoadingIndicator();
        commonUtils.navigateTo("frmDashboard", {
            "isBack": false,
            "loadProjects": true
        });
        formStack = [];
        this.dismissLoadingIndicator();
    },
    /**
     * @desc Toggles filter on and off
     * @param boolean toggleValue - Contains the current visibility of filters
     * @retun void
     */
    toggleFilters: function(toggleValue) {
        this.view.flxFiltersOuter.setVisibility(!toggleValue);
        this.view.flxFiltersOuter.setEnabled(!toggleValue);
        this.view.flxBody.setEnabled(toggleValue);
    },
    /**
     * @desc Calls a service to get DPR history for the current employee
     * @param -
     * @retun void
     */
    getDPRHistory: function() {
        try {
            this.showLoadingIndicator();
            var self = this;
            var empid = oceaneering.oms.appGlobals.employeeId;
            var promiseHistory = [];
            promiseHistory.push(commonUtils.getDPRHeaderHistory(empid));
            promiseHistory.push(commonUtils.getDPRPersonnelHistory(empid));
            Promise.all(promiseHistory).then((res) => {
                this.successCallback_GetHistory(res);
            }).catch((err) => {
                self.dismissLoadingIndicator();
                self.historyList = [];
                self.view.segDPRHistory.setVisibility(false);
                self.view.lblNoHistory.setVisibility(true);
                self.view.imgdpr.setVisibility(false);
            });
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Success callback for get DPR history service
     * @param JSON response - Contains the dpr history for the current employee
     * @retun void
     */
    successCallback_GetHistory: function(response) {
        if (commonUtils.checkIfEmpty(response)) {
            this.historyList = [];
            this.view.segDPRHistory.setVisibility(false);
            this.view.lblNoHistory.setVisibility(true);
            this.view.imgdpr.setVisibility(true);
            this.dismissLoadingIndicator();
        } else {
            this.prepareHistoryData(response);
        }
    },
    /**
     * @desc Prepares history data to be shown in the history segment
     * @param Array of JSON history - Contains the dpr history for the current employee
     * @retun void
     */
    prepareHistoryData: function(history) {
        try {
            var historyData = [];
            var header = history[0].OMS_OP_Dailyreportheader;
            var headerseg = [];
            var personnelSeg = [];
            var dprIds = [];
            if (!commonUtils.checkIfEmpty(header)) {
                for (var i = 0; i < header.length; i++) {
                    var skin = (header[i].lng_status == "1" || header[i].lng_status == 1) ? commonUtils.ACCEPTSKIN : (!commonUtils.checkIfEmpty(header[i].bln_RejectedOnshore) && (header[i].bln_RejectedOnshore == 1 || header[i].bln_RejectedOnshore == "1" || header[i].bln_RejectedOnshore == "true" || header[i].bln_RejectedOnshore === true)) ? "sknLblRejetedHistory" : commonUtils.PENDINGSKIN;
                    var text = (header[i].lng_status == "1" || header[i].lng_status == 1) ? commonUtils.ACCEPTED : commonUtils.PENDING;
                    var sign = !commonUtils.checkIfEmpty(header[i].str_Signature) ? true : false;
                    var val = {
                        "type": 0,
                        "dprId": header[i].str_reportid,
                        "projectId": header[i].str_projid,
                        "lblreportDate": {
                            text: "Report Date: " + (header[i].str_reportDateTime)
                        },
                        "reportDate": (header[i].dte_reportdate).substring(0, 10),
                        "lblStatus": {
                            "skin": skin,
                            "text": text
                        },
                        "flxSign": {
                            isVisible: sign,
                            onClick: this.showSignature.bind(this, header[i])
                        },
                        "imgSign": {
                            src: "imgsigndone.png",
                            isVisible: sign
                        },
                        "lblSignedby": {
                            text: "",
                            isVisible: false
                        },
                        "lastModified": header[i].dte_lastModified,
                        "dprheader": header[i],
                        "dprStatus": header[i].lng_status
                    };
                    if (!commonUtils.checkIfEmpty(header[i].str_clientname)) {
                        val.lblSignedby.text = "Client : " + header[i].str_clientname;
                        val.lblSignedby.isVisible = true;
                    }
                    if (sign && !commonUtils.checkIfEmpty(header[i].str_clientcontact)) {
                        val.lblSignedby.text = "Signed By : " + header[i].str_clientcontact;
                        val.lblSignedby.isVisible = true;
                    }
                    if (commonUtils.checkIfEmpty(val.lblSignedby.text)) {
                        val.lblSignedby.isVisible = false;
                        val.reportDate.bottom = "10dp";
                    }
                    headerseg.push(val);
                    dprIds.push(header[i].str_reportid);
                }
            }
            if (!commonUtils.checkIfEmpty(history[1]) && (history[1]).length > 0) {
                var perData = history[1];
                for (var j = 0; j < perData.length; j++) {
                    var headerper = perData[j].header;
                    var personnalper = perData[j].personnelList;
                    var skinval = headerper.lng_status == "1" ? commonUtils.ACCEPTSKIN : commonUtils.PENDINGSKIN;
                    var textval = headerper.lng_status == "1" ? commonUtils.ACCEPTED : commonUtils.PENDING;
                    var signPer = !commonUtils.checkIfEmpty(headerper.str_Signature) ? true : false;
                    var res = {
                        "type": 1,
                        "dprId": headerper.str_reportid,
                        "projectId": headerper.str_projid,
                        "reportDate": (headerper.dte_reportdate).substring(0, 10),
                        "lblreportDate": {
                            text: "Report Date: " + (headerper.str_reportDateTime)
                        },
                        "lblStatus": {
                            "skin": skinval,
                            "text": textval
                        },
                        "flxSign": {
                            isVisible: signPer,
                            onClick: this.showSignature.bind(this, headerper)
                        },
                        "imgSign": {
                            src: "imgsigndone.png",
                            isVisible: signPer
                        },
                        "lastModified": personnalper.dte_lastModifiedDate,
                        "lblSignedby": {
                            text: !signPer ? "Client : " + headerper.str_clientname : "Signed By : " + headerper.str_clientcontact,
                            isVisible: !commonUtils.checkIfEmpty(headerper.str_clientcontact) || !commonUtils.checkIfEmpty(headerper.str_clientname)
                        },
                        "dprheader": headerper,
                        "dprData": personnalper,
                        "dprStatus": headerper.lng_status
                    };
                    // if the supervisor added his / her timesheet , then he/she will not
                    // be able to see as crew / only supervisor view will be available
                    if (!dprIds.includes(headerper.str_reportid)) {
                        personnelSeg.push(res);
                    }
                }
            }
            historyData = headerseg.concat(personnelSeg);
            this.historyList = historyData;
            this.setHistoryToSegment(this.historyList);
        } catch (ex) {
            var er = {
                "func": "prepareHistoryData",
                "err": ex
            };
            commonUtils.exception(this, er, true);
        }
    },
    showSignature: function() {
        var index = "";
        var deviceInfo = kony.os.deviceInfo();
        if (deviceInfo.name != "iPhone") {
            index = this.view.segDPRHistory.selectedRowIndex[1];
        } else {
            index = this.view.segDPRHistory.selectedIndex[1];
        }
        var response = this.view.segDPRHistory.data[index];
        var data = response.dprheader;
        if (!commonUtils.checkIfEmpty(data.str_Signature)) {
            this.view.imgSignature.base64 = data.str_Signature;
            if (!commonUtils.checkIfEmpty(data.str_clientname)) {
                this.view.lblClientName.text = data.str_clientname;
                this.view.flxClientName.setVisibility(true);
            } else {
                this.view.flxClientName.setVisibility(false);
            }
            if (!commonUtils.checkIfEmpty(data.str_clientcontact)) {
                this.view.lblRepName.text = data.str_clientcontact;
                this.view.flxRepName.setVisibility(true);
            } else {
                this.view.flxRepName.setVisibility(false);
            }
            if (!commonUtils.checkIfEmpty(data.dte_reportdate)) {
                this.view.lblSigndate.text = (data.dte_reportdate).substring(0, 10);
                this.view.flxDate.setVisibility(true);
            } else {
                this.view.flxDate.setVisibility(false);
            }
            this.view.flxSignatureShow.setVisibility(true);
        }
    },
    /**
     * @desc Sets history data to the segment
     * @param Array of JSON history - Contains the dpr history for the current employee
     * @retun void
     */
    setHistoryToSegment: function(history) {
        if (history.length > 0) {
            history.sort(function(a, b) {
                var nameA = new Date(a.lastModified); // ignore upper and lowercase
                var nameB = new Date(b.lastModified); // ignore upper and lowercase
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
            this.view.segDPRHistory.setData(history);
            this.view.segDPRHistory.setVisibility(true);
            this.view.lblNoHistory.setVisibility(false);
            this.view.imgdpr.setVisibility(false);
            this.dismissLoadingIndicator();
        } else {
            this.dismissLoadingIndicator();
            this.view.segDPRHistory.setVisibility(false);
            this.view.lblNoHistory.setVisibility(true);
            this.view.imgdpr.setVisibility(true);
        }
    },
    /**
     * @desc Sets history data to the segment
     * @param Array of JSON history - Contains the dpr history for the current employee
     * @retun void
     */
    onSearchProjects: function() {
        var searchKeyword = this.view.txtSearch.text;
        var filteredHistory = (commonUtils.checkIfEmpty(searchKeyword)) ? this.historyList : this.historyList.filter(history => (history.projectId).toLowerCase().includes(searchKeyword.toLowerCase()));
        this.setHistoryToSegment(filteredHistory);
    },
    /**
     * @desc Error callback for get dpr history service
     * @param JSON error - Contains the error message and error code of getDPRHistory service call
     * @retun void
     */
    errorCallback_GetHistory: function(error) {
        if (!(error.opstatus == 8005 && error.errmsg == "empty response received")) {
            this.showErrorMessage();
        } else {
            this.dismissLoadingIndicator();
        }
        this.historyList = [];
        this.view.lblNoHistory.setVisibility(true);
        this.view.imgdpr.setVisibility(true);
    },
    /**
     * @desc Sets current dates in start date and end date filters
     * @param -
     * @retun void
     */
    setCurrentDateInFilters: function() {
        var currentDate = (this.formatDate(new Date())).split("-");
        this.view.calStartDate.dateComponents = ["01", currentDate[1], currentDate[0]];
        this.view.calEndDate.dateComponents = [currentDate[2], currentDate[1], currentDate[0]];
        this.view.calStartDate.onSelection = this.onSelectionOfStartDate.bind(this, this.view.calStartDate.dateComponents);
        this.view.calEndDate.onSelection = this.onSelectionOfEndDate.bind(this, this.view.calEndDate.dateComponents);
    },
    /**
     * @desc Called on selecting the start date in the filter
     * @param Array previousStartDate - Contains the previous start date populated in the calendar widget
     * @retun void
     */
    onSelectionOfStartDate: function(previousStartDate) {
        var StartDate = this.view.calStartDate.dateComponents;
        var startDateFinal = (parseInt(StartDate[2]) * 10000) + (parseInt(StartDate[1]) * 100) + parseInt(StartDate[0]);
        var endDate = this.view.calEndDate.dateComponents;
        var endDateFinal = (parseInt(endDate[2]) * 10000) + (parseInt(endDate[1]) * 100) + parseInt(endDate[0]);
        if (startDateFinal <= endDateFinal) {
            this.view.calStartDate.onSelection = this.onSelectionOfStartDate.bind(this, StartDate);
        } else {
            this.showErrorMessage("Start date cannot be higher than end date.");
            this.view.calStartDate.dateComponents = previousStartDate;
        }
    },
    /**
     * @desc Called on selecting the end date in the filter
     * @param Array previousEndDate - Contains the previous end date populated in the calendar widget
     * @retun void
     */
    onSelectionOfEndDate: function(previousEndDate) {
        var StartDate = this.view.calStartDate.dateComponents;
        var startDateFinal = (parseInt(StartDate[2]) * 10000) + (parseInt(StartDate[1]) * 100) + parseInt(StartDate[0]);
        var endDate = this.view.calEndDate.dateComponents;
        var endDateFinal = (parseInt(endDate[2]) * 10000) + (parseInt(endDate[1]) * 100) + parseInt(endDate[0]);
        if (endDateFinal >= startDateFinal) {
            this.view.calEndDate.onSelection = this.onSelectionOfEndDate.bind(this, endDate);
        } else {
            this.showErrorMessage("End date cannot be lower than start date.");
            this.view.calEndDate.dateComponents = previousEndDate;
        }
    },
    /**
     * @desc Reset start date and end date filters to the current date
     * @param -
     * @retun void
     */
    onClickOfResetFilters: function() {
        if (!commonUtils.checkIfEmpty(this.historyList)) {
            this.setHistoryToSegment(this.historyList);
        }
        this.toggleFilters(true);
        this.setCurrentDateInFilters();
    },
    /**
     * @desc Called on click of apply in the filters
     * @param -
     * @retun void
     */
    onClickOfApplyFilters: function() {
        if (!commonUtils.checkIfEmpty(this.historyList)) {
            this.getSelectedFilters();
        } else {
            this.toggleFilters(true);
        }
    },
    /**
     * @desc Get selected filter dates
     * @param -
     * @retun void
     */
    getSelectedFilters: function() {
        var startDate = this.view.calStartDate.dateComponents;
        var startDateFinal = (parseInt(startDate[2]) * 10000) + (parseInt(startDate[1]) * 100) + parseInt(startDate[0]);
        var endDate = this.view.calEndDate.dateComponents;
        var endDateFinal = (parseInt(endDate[2]) * 10000) + (parseInt(endDate[1]) * 100) + parseInt(endDate[0]);
        this.getFilteredData(startDateFinal, endDateFinal);
    },
    /**
     * @desc Prepares the filtered data
     * @param int startDate - Contians the selected start date
     * @param int endDate - Contians the selected end date
     * @retun void
     */
    getFilteredData: function(startDate, endDate) {
        var filteredData = [];
        for (var i = 0; i < this.historyList.length; i++) {
            var reportDate = (this.historyList[i].reportDate).substring(0, 10).split("-");
            var reportDateFinal = (parseInt(reportDate[0]) * 10000) + (parseInt(reportDate[1]) * 100) + parseInt(reportDate[2]);
            if (startDate <= reportDateFinal && endDate >= reportDateFinal) {
                filteredData.push(this.historyList[i]);
            }
        }
        kony.timer.schedule("filter", () => {
            kony.timer.cancel("filter");
            this.dismissSuccess();
        }, 0.8, false);
        this.showSuccess();
        this.setHistoryToSegment(filteredData);
        this.toggleFilters(true);
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
    /**
     * @desc Shows the common error message
     * @param -
     * @retun void
     */
    showErrorMessage: function(text) {
        this.dismissLoadingIndicator();
        var inp = {
            "msg": commonUtils.checkIfEmpty(text) ? "Sorry, something went wrong. Please try again later." : text,
            "option": "error"
        };
        this.showBottomPopUp(inp);
    },
    /**
     * @desc Blocks the screen and shows the loading screen
     * @param -
     * @retun void
     */
    showLoadingIndicator: function() {
        this.view.flxLoading.setVisibility(true);
        this.view.flxMain.setEnabled(false);
        this.view.flxFiltersOuter.setEnabled(false);
    },
    /**
     * @desc enables the screen and hides the loading screen
     * @param -
     * @retun void
     */
    dismissLoadingIndicator: function() {
        if (!commonUtils.checkIfEmpty(this) && !commonUtils.checkIfEmpty(this.view)) {
            this.view.flxLoading.setVisibility(false);
            this.view.flxMain.setEnabled(true);
            if (this.view.flxFiltersOuter.isVisible) {
                this.view.flxFiltersOuter.setEnabled(true);
            }
        }
    },
    /**
     * @desc Commom error callback for service calls
     * @param JSON error - Contains the error message and error code of service call
     * @retun void
     */
    errorCallback: function(error) {
        this.showErrorMessage();
    },
    // ------------- show Error Pop Up form bottom --------- //
    showBottomPopUp: function(input) {
        var self = this;
        this.resetBottomPopUp();
        this.dismissLoadingIndicator();
        this.view.bottompopup.lblBottomMessage.text = input.msg;
        this.view.bottompopup.flxBottomPopUp.height = "210dp";
        this.view.bottompopup.lblBottomMessage.bottom = "100dp";
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
        this.dismissLoadingIndicator();
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
            "duration": 0.4
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
    showSuccess: function(input) {
        var self = this;
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
            "duration": 0.7
        }, {
            "animationEnd": () => {
                if (!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.flxSuccessStatus)) {
                    self.view.flxSuccessStatus.setVisibility(true);
                }
            }
        });
    },
    dismissSuccess: function() {
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
            "duration": 0.4
        }, {
            "animationEnd": () => {
                if (!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.flxSuccessStatus)) {
                    self.view.flxSuccessStatus.setVisibility(false);
                }
            }
        });
    }
});
define("frmHistoryControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxSearchIcon **/
    AS_FlexContainer_c75c0375b8a74fb88ea29840ee6b19f5: function AS_FlexContainer_c75c0375b8a74fb88ea29840ee6b19f5(eventobject) {
        var self = this;
        this.onSearchProjects();
    },
    /** onPull defined for segDPRHistory **/
    AS_Segment_b5a2b6e3e9804fc699b56edc8ed7ba8a: function AS_Segment_b5a2b6e3e9804fc699b56edc8ed7ba8a(eventobject) {
        var self = this;
        return self.getDPRHistory.call(this);
    },
    /** onPush defined for segDPRHistory **/
    AS_Segment_jf9b1295227b47239be0574df693caa9: function AS_Segment_jf9b1295227b47239be0574df693caa9(eventobject) {
        var self = this;
        kony.print("");
    },
    /** onClick defined for flxFiltersInner **/
    AS_FlexContainer_a73937d1b23c462fb3b88362fd1e9b4d: function AS_FlexContainer_a73937d1b23c462fb3b88362fd1e9b4d(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    },
    /** onClick defined for flxFilterIcon **/
    AS_FlexContainer_a9b11a486543420dad7fd9e650348ad7: function AS_FlexContainer_a9b11a486543420dad7fd9e650348ad7(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    }
});
define("frmHistoryController", ["userfrmHistoryController", "frmHistoryControllerActions"], function() {
    var controller = require("userfrmHistoryController");
    var controllerActions = ["frmHistoryControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
