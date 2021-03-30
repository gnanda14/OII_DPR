/**
 * @Description - Contains the functionality of the DPR Info Form
   crewMembers JSON - Contains a details of all the crew members for the selected project
   isHourlyRate boolean - True if project rate is hourly else false
   dprsAvailable boolean - True if dprs are available for the selected project else false\
   isNewProject boolean - True if a new project is selected else false
*/
define("userfrmDPRInfoController", {
    crewMembers: {},
    isHourlyRate: false,
    dprsAvailable: false,
    refreshCrewDetails: false,
    clientId: null,
    clientName: null,
    data: {},
    supervisorListDashboard: [],
    supervisorCrewDashboard: [],
    selectedSignHeader: "",
    activities: {
        "selecetd": "",
        "arr": []
    },
    rates: {
        "selecetd": "",
        "arr": ["Hourly", "Daily"]
    },
    navigatingFrom: "",
    dprList: [],
    existingDateForEdit: {},
    /**
     * @desc MVC navigation function
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    onNavigate: function(data) {
        try {
            commonUtils.addbottompopup(this);
            this.navigatingFrom = data.navigatingFrom;
            if (data.navigatingFrom != "frmSignature") {
                var inp = data;
                this.supervisorListDashboard = [];
                this.supervisorCrewDashboard = [];
                this.dismissBottomPopup();
                this.view.flxDPROverview.setVisibility(false);
                this.view.flxSignature.setVisibility(false);
                this.setCurrentDateInFilters();
                if (inp.navigatingFrom == "frmDashboard") {
                    this.data = data;
                    this.dprsAvailable = false;
                    commonUtils.get_project_details(this.data.projectData.ProjectNumber).then((res) => {
                        this.data.projectData.Activities = res.Activities;
                        this.activities.arr = res.Activities;
                        if (!commonUtils.checkIfEmpty(this.activities.arr)) {
                            this.activities.arr.sort(function(a, b) {
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
                            this.setActivities(this.activities.arr);
                        }
                    }, (err) => {
                        kony.print("Error in getting Activities");
                    });
                }
                this.view.preShow = this.preShow.bind(this, inp);
                this.view.postShow = this.postShow.bind(this);
                this.bindActions();
            } else {
                if (data.sign) {
                    this.toggleLoadingIndicator(true);
                    this.onClickSaveSignature(data.signature);
                } else {
                    this.toggleLoadingIndicator(false);
                }
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    preShow: function(data) {
        try {
            if (this.navigatingFrom !== "frmSignature") {
                this.toggleFilters(true);
                this.HideActivity(this.view.rates);
                this.HideActivity(this.view.activity);
                this.HideActivity(this.view.serviceLine);
                this.HideActivity(this.view.country);
                this.dismissBottomPopup();
                this.checkPreviousForm(data);
                this.resetBottomPopUp();
                this.setCountries();
                this.view.segDPRsHeader.height = "94%";
                this.view.segDPRsHeader.top = "5%";
                var serviceLine = oceaneering.oms.appGlobals.serviceLines;
                this.view.imgDepartment.setVisibility(!commonUtils.checkIfEmpty(serviceLine) && serviceLine.length > 1 ? true : false);
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    postShow: function() {},
    bindActions: function() {
        try {
            var self = this;
            this.view.flxActivityDropDown.onClick = this.onClickActivities.bind(this);
            this.view.flxRateDropDown.onClick = this.onClickRates.bind(this);
            this.view.flxProjectDetailsTab.onClick = this.onTopNavClick.bind(this, "project");
            this.view.flxDPRsTab.onClick = this.onTopNavClick.bind(this, "dpr");
            this.view.flxCrewDetailsTab.onClick = this.onTopNavClick.bind(this, "crew");
            this.view.flxFAB.onClick = this.onClickOfFab.bind(this);
            this.view.segDPRsHeader.onPull = () => {
                self.toggleLoadingIndicator(true);
                self.getDPRs((self.view.lblProjectIdValue.text).trim());
                self.view.flxOption.setVisibility(false);
                self.view.flxFiltersOuter.setVisibility(false);
            };
            this.view.segDPRsHeader.onSwipe = () => {
                self.view.flxOption.setVisibility(false);
            };
            this.view.segDPRsHeader.onRowClick = () => {
                self.view.flxOption.setVisibility(false);
            };
            this.view.flxHeader.onClick = () => {
                self.view.flxOption.setVisibility(false);
            };
            this.view.flxContainerDPR.onClick = () => {
                self.view.flxOption.setVisibility(false);
            };
            this.view.flxDPRCard.onClick = this.closeDPRInfoSection.bind(this);
            this.view.flxBack.onClick = this.onClickOfBack.bind(this);
            this.view.bottompopup.flxBottomContainer.onClick = this.dismissBottomPopup.bind(this);
            this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
            this.view.activity.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.activity);
            this.view.activity.segServiceLine.onRowClick = this.onRowClickActivity.bind(this);
            this.view.rates.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.rates);
            this.view.rates.segServiceLine.onRowClick = this.onRowClickRates.bind(this);
            this.view.flxSeviceLine.onClick = this.onClickServiceLine.bind(this);
            this.view.serviceLine.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.serviceLine);
            this.view.flxProjectDetailsBody.onClick = () => {
                self.view.lblDescription.setFocus(true);
            };
            this.view.onDeviceBack = () => {
                commonUtils.navigateTo("frmDashboard", {
                    "navigatingFrom": "frmDPRInfo",
                    "loadProjects": true
                });
                formStack = [];
            };
            this.view.country.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.country);
            this.view.flxCountryPop.onClick = this.showCountries.bind(this);
            this.view.country.segServiceLine.onRowClick = this.onRowCountry.bind(this);
            this.view.country.tbxSearch.onDone = this.onTextChangeCountry.bind(this);
            this.view.country.flxImgSearch.onClick = this.onTextChangeCountry.bind(this);
            this.view.flxProjectInfoTab.onClick = () => {
                this.toggleContainer(this.view.flxProjectDetails, this.view.lblProjectInfoArrow);
            };
            this.view.flxPersonnelTab.onClick = () => {
                this.toggleContainer(this.view.flxPersonnelDay, this.view.lblPersonnelArrow);
            };
            this.view.flxShiftTab.onClick = () => {
                this.toggleContainer(this.view.flxShiftDesc, this.view.lblShiftsArrow);
            };
            this.view.flxDPRHeaderBack.onClick = () => {
                self.view.flxDPROverview.setVisibility(false);
                self.view.flxSignature.setVisibility(false);
                self.getDPRs(self.view.lblProjectIdValue.text);
            };
            this.view.flxSignClick.onClick = this.openSignature.bind(this);
            this.view.flxSignatureback.onClick = () => {
                this.view.flxSignatureShow.setVisibility(false);
            };
            this.view.flxSaveDPR.onClick = () => {
                self.toggleLoadingIndicator(true);
                self.onClickOfSave();
            };
            this.view.flxRefreshDPR.onClick = () => {
                self.toggleLoadingIndicator(true);
                self.view.flxOption.setVisibility(false);
                self.getDPRs(self.view.lblProjectIdValue.text);
            };
            this.view.flxRefreshCrew.onClick = () => {
                self.toggleLoadingIndicator(true);
                self.getCrewDetails((self.view.lblProjectIdValue.text).trim());
            };
            this.view.flxSettings.onClick = this.onSettingClick.bind(this);
            this.view.btnApply.onClick = this.onApplySuperCrewPrompt.bind(this);
            this.view.btnCancel.onClick = () => {
                this.view.flxContainerCrew.setVisibility(true);
                this.view.flxSupervisorCrew.setVisibility(false);
            };
            this.view.btnReportCancel.onClick = () => {
                this.view.flxReportDate.setVisibility(false);
                this.view.flxMain.setEnabled(true);
            };
            this.view.btnReportOkay.onClick = () => {
                this.view.flxReportDate.setVisibility(false);
                this.view.flxMain.setEnabled(true);
                this.onClickOfCreateDPR();
            };
            this.view.segSupervisorCrew.onRowClick = this.onRowClickSupercrew.bind(this);
            this.view.flxFilterIcon.onClick = () => {
                self.toggleFilters(false);
                self.view.flxOption.setVisibility(false);
            };
            this.view.btnClearFilter.onClick = this.onClickOfResetFilters.bind(this);
            this.view.btnApplyFilter.onClick = this.onClickOfApplyFilters.bind(this);
            this.view.flxOptionContainer.onClick = () => {
                this.view.flxOption.isVisible = !this.view.flxOption.isVisible;
            };
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc Toggles filter on and off
     * @param boolean toggleValue - Contains the current visibility of filters
     * @retun void
     */
    toggleFilters: function(toggleValue) {
        this.view.flxFiltersOuter.setVisibility(!toggleValue);
        this.view.flxFiltersOuter.setEnabled(!toggleValue);
        this.view.flxMain.setEnabled(toggleValue);
    },
    /**
     * @desc Reset start date and end date filters to the current date
     * @param -
     * @retun void
     */
    onClickOfResetFilters: function() {
        if (!commonUtils.checkIfEmpty(this.dprList)) {
            this.setDPRToSegment(this.dprList);
        }
        this.view.segDPRsHeader.height = "94%";
        this.view.segDPRsHeader.top = "5%";
        this.toggleFilters(true);
        this.setCurrentDateInFilters();
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
            var inp = {
                "msg": "End date cannot be lower than start date.",
                "option": "error"
            };
            this.showBottomPopUp(inp);
            this.view.calEndDate.dateComponents = previousEndDate;
        }
    },
    /**
     * @desc Called on click of apply in the filters
     * @param -
     * @retun void
     */
    onClickOfApplyFilters: function() {
        if (!commonUtils.checkIfEmpty(this.dprList) && this.dprList.length > 0) {
            this.getSelectedFilters();
            this.view.segDPRsHeader.height = "94%";
            this.view.segDPRsHeader.top = "5%";
        } else {
            this.toggleFilters(true);
            this.view.segDPRsHeader.height = "94%";
            this.view.segDPRsHeader.top = "5%";
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
        var self = this;
        var filteredData = [];
        for (var i = 0; i < this.dprList.length; i++) {
            var reportDate = (this.dprList[i].reportDate).substring(0, 10).split("-");
            var reportDateFinal = (parseInt(reportDate[0]) * 10000) + (parseInt(reportDate[1]) * 100) + parseInt(reportDate[2]);
            if (startDate <= reportDateFinal && endDate >= reportDateFinal) {
                filteredData.push(this.dprList[i]);
            }
        }
        kony.timer.schedule("filter", () => {
            kony.timer.cancel("filter");
            self.dismissSuccess();
        }, 0.8, false);
        this.showSuccess("filter");
        this.setDPRToSegment(filteredData);
        this.toggleFilters(true);
    },
    /**
     * @desc Sets history data to the segment
     * @param Array of JSON history - Contains the dpr history for the current employee
     * @retun void
     */
    setDPRToSegment: function(history) {
        var self = this;
        if (history.length > 0) {
            history.sort(function(a, b) {
                var nameA = new Date(a.reportDate);
                var nameB = new Date(b.reportDate);
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }
                return 0;
            });
            this.view.segDPRsHeader.setData(history);
            this.view.segDPRsHeader.setVisibility(true);
            this.view.flxNoDPR.setVisibility(false);
            this.toggleLoadingIndicator(false);
        } else {
            this.view.flxNoDPR.setVisibility(true);
            this.toggleLoadingIndicator(false);
            this.view.segDPRsHeader.setVisibility(false);
        }
    },
    onApplySuperCrewPrompt: function() {
        var inp = {
            "msg": "Sure you want to proceed?",
            "option": "enable"
        };
        this.showBottomPopUp(inp);
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.applySupervisor.bind(this);
        this.view.bottompopup.btnBottomNotNow.onClick = () => {
            this.dismissBottomPopup();
        };
        this.view.bottompopup.imgToShow.setVisibility(false);
    },
    applySupervisor: function() {
        try {
            var self = this;
            this.dismissBottomPopup();
            this.toggleLoadingIndicator(true);
            var data = this.view.segSupervisorCrew.data;
            var changes = [];
            var promisesCreate = [];
            var promiseUpdate = [];
            var crewPromise = [];
            for (var j = 0; j < data.length; j++) {
                var inp = {
                    "projectId": this.view.lblProjectIdValue.text,
                    "startDate": this.view.lblProjectStart.text,
                    "endDate": this.view.lblProjectEnd.text,
                    "empId": data[j].empId,
                    "createdBy": oceaneering.oms.appGlobals.employeeId,
                    "createdDate": this.formatDate(new Date()),
                    "isSupervisor": 0,
                    "createdByElse": true
                };
                // if the entry exists in db and need to be updated if already a supervisor , but changes to crew
                var superExistng = this.supervisorCrewDashboard.filter(crew => (crew.empId == data[j].empId) && !data[j].isSupervisor && this.supervisorListDashboard.includes(data[j].empId));
                var filtExisting = this.supervisorCrewDashboard.filter(crew => (crew.empId == data[j].empId) && data[j].isSupervisor && !this.supervisorListDashboard.includes(data[j].empId));
                var exsitingOrNot = this.supervisorCrewDashboard.filter(crew => (crew.empId == data[j].empId));
                var filtNew = commonUtils.crewList.filter(crew => (crew.str_employeeid == data[j].empId) && data[j].isSupervisor && commonUtils.checkIfEmpty(exsitingOrNot));
                var fixedOne = "";
                if (!commonUtils.checkIfEmpty(superExistng) && superExistng.length > 0 && inp.empId !== oceaneering.oms.appGlobals.employeeId) {
                    var id = this.supervisorCrewDashboard.filter(crew => (crew.empId == data[j].empId));
                    inp.id = parseInt(id[0].id);
                    inp.createdBy = id[0].createdBy;
                    inp.createdDate = commonUtils.checkIfEmpty(id[0].createdDate) ? null : (id[0].createdDate).substring(0, 10);
                    inp.isSupervisor = 0;
                    promiseUpdate.push(commonUtils.updateProjectSuperCrew(inp));
                    fixedOne = this.fixedCrewDate(data[j].empId);
                    fixedOne.role = "crew";
                    crewPromise.push(commonUtils.updateCrewInfo(fixedOne));
                } else if (!commonUtils.checkIfEmpty(filtExisting) && filtExisting.length > 0) {
                    var filtid = this.supervisorCrewDashboard.filter(crew => (crew.empId == data[j].empId));
                    inp.id = parseInt(filtid[0].id);
                    inp.createdBy = filtid[0].createdBy;
                    inp.createdDate = commonUtils.checkIfEmpty(filtid[0].createdDate) ? null : (filtid[0].createdDate).substring(0, 10);
                    inp.isSupervisor = 1;
                    promiseUpdate.push(commonUtils.updateProjectSuperCrew(inp));
                    fixedOne = this.fixedCrewDate(data[j].empId);
                    fixedOne.role = "supervisor";
                    crewPromise.push(commonUtils.updateCrewInfo(fixedOne));
                } else if (!commonUtils.checkIfEmpty(filtNew) && filtNew.length > 0) {
                    inp.isSupervisor = 1;
                    promisesCreate.push(commonUtils.createProjectSuperCrew(inp));
                    fixedOne = this.fixedCrewDate(data[j].empId);
                    fixedOne.role = "supervisor";
                    crewPromise.push(commonUtils.updateCrewInfo(fixedOne));
                }
            }
            if (promiseUpdate.length > 0) {
                this.toggleLoadingIndicator(true);
                Promise.all(promiseUpdate).then((res) => {
                    kony.print("Updated All the entries");
                }, (err) => {
                    self.toggleLoadingIndicator(false);
                    kony.print("Failed to update All the entries");
                });
            }
            if (promisesCreate.length > 0) {
                this.toggleLoadingIndicator(true);
                Promise.all(promisesCreate).then((res) => {
                    kony.print("Created All the entries");
                }, (err) => {
                    self.toggleLoadingIndicator(false);
                    kony.print("Failed to create All the entries");
                });
            }
            if (crewPromise.length > 0) {
                Promise.all(crewPromise).then((res) => {
                    self.toggleLoadingIndicator(true);
                    self.getCrewDetails(self.view.lblProjectIdValue.text);
                    kony.print("Updated All the entries");
                }, (err) => {
                    self.toggleLoadingIndicator(false);
                    kony.print("Failed Updation All the entries");
                });
            } else {
                self.toggleLoadingIndicator(false);
            }
            this.view.flxContainerCrew.setVisibility(true);
            this.view.flxSupervisorCrew.setVisibility(false);
        } catch (ex) {
            var er = {
                "func": "applySupervisor",
                "err": ex
            };
            commonUtils.exception(this, er, true);
            this.toggleLoadingIndicator(false);
        }
    },
    fixedCrewDate: function(empid) {
        var data = {};
        for (var j = 0; j < commonUtils.crewList.length; j++) {
            if (empid == commonUtils.crewList[j].str_employeeid) {
                data = commonUtils.crewList[j];
                break;
            }
        }
        if (!commonUtils.checkIfEmpty(data.dte_arrival)) {
            data.dte_arrival = (data.dte_arrival).substring(0, 10) + "T" + (data.dte_arrival).substring(11, 19);
        }
        if (!commonUtils.checkIfEmpty(data.dtr_departure)) {
            data.dtr_departure = (data.dtr_departure).substring(0, 10) + "T" + (data.dtr_departure).substring(11, 19);
        }
        if (!commonUtils.checkIfEmpty(data.dte_lastModifiedDate)) {
            data.dte_lastModifiedDate = (data.dte_lastModifiedDate).substring(0, 10) + "T" + (data.dte_lastModifiedDate).substring(11, 19);
        }
        if (!commonUtils.checkIfEmpty(data.dte_createdDate)) {
            data.dte_createdDate = (data.dte_createdDate).substring(0, 10) + "T" + (data.dte_createdDate).substring(11, 19);
        }
        return data;
    },
    onRowClickSupercrew: function() {
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segSupervisorCrew.selectedRowIndex[1];
        } else {
            index = this.view.segSupervisorCrew.selectedIndex[1];
        }
        var data = this.view.segSupervisorCrew.data[index];
        if (data.lblDelete.skin == commonUtils.TICKUNSELECTED) {
            data.lblDelete.text = commonUtils.TICK;
            data.lblDelete.skin = commonUtils.TICKSELECTED;
            data.imgCrewOrSupervisor.src = "superimg.png";
            data.isSupervisor = true;
        } else {
            data.imgCrewOrSupervisor.src = "crewimg.png";
            data.lblDelete.text = commonUtils.TICKTEXTUNSEL;
            data.lblDelete.skin = commonUtils.TICKUNSELECTED;
            data.isSupervisor = false;
        }
        this.view.segSupervisorCrew.setDataAt(data, index);
    },
    onSettingClick: function() {
        try {
            this.toggleLoadingIndicator(true);
            this.supervisorListDashboard = [];
            this.supervisorCrewDashboard = [];
            var crewList = commonUtils.crewList;
            var supervisor = [];
            var supercrew = [];
            var finalList = [];
            for (var i = 0; i < crewList.length; i++) {
                var inp = {
                    "imgCrewOrSupervisor": {
                        src: "crewimg.png"
                    },
                    "id": crewList[i].id,
                    "empName": crewList[i].str_employeeName,
                    "empId": crewList[i].str_employeeid,
                    "flxDelete": {
                        isVisible: true
                    },
                    "isSupervisor": false,
                    "lblDelete": {
                        text: commonUtils.TICKTEXTUNSEL,
                        skin: commonUtils.TICKUNSELECTED
                    }
                };
                if (inp.empId !== oceaneering.oms.appGlobals.employeeId) {
                    finalList.push(inp);
                }
            }
            var req = {
                "$filter": "projectId eq " + this.view.lblProjectIdValue.text
            };
            commonUtils.getProjectSuperCrewList(req).then((res) => {
                if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                    this.supervisorCrewDashboard = res; // all the created one
                    supervisor = res.filter(crew => (crew.isSupervisor == "1" || crew.isSupervisor == 1) && (crew.createdByElse == "true" || crew.createdByElse === true));
                    // all the supervisors for this particular project id
                    if (!commonUtils.checkIfEmpty(supervisor) && supervisor.length > 0) {
                        for (var j = 0; j < supervisor.length; j++) {
                            supercrew.push(supervisor[j].empId);
                        }
                        this.supervisorListDashboard = supercrew;
                    }
                    if (!commonUtils.checkIfEmpty(supercrew) && supercrew.length > 0) {
                        for (var k = 0; k < finalList.length; k++) {
                            if (supercrew.includes(finalList[k].empId)) {
                                commonUtils.crewList[k].isSupervisor = true;
                                finalList[k].isSupervisor = true;
                                finalList[k].lblDelete = {
                                    text: commonUtils.TICK,
                                    skin: commonUtils.TICKSELECTED
                                };
                                finalList[k].imgCrewOrSupervisor = {
                                    src: "superimg.png"
                                };
                            }
                        }
                    }
                    this.view.segSupervisorCrew.setData(finalList);
                    this.view.flxContainerCrew.setVisibility(false);
                    this.view.flxSupervisorCrew.setVisibility(true);
                    this.toggleLoadingIndicator(false);
                } else {
                    this.view.segSupervisorCrew.setData(finalList);
                    this.view.flxContainerCrew.setVisibility(false);
                    this.toggleLoadingIndicator(false);
                }
            }, (err) => {
                var er = {
                    "func": "onSettingClick",
                    "err": err.errmsg
                };
                commonUtils.exception(this, er, true);
                this.toggleLoadingIndicator(false);
                this.showBottomPopUp();
            });
        } catch (ex) {
            var er = {
                "func": "onSettingClick",
                "err": ex
            };
            commonUtils.exception(this, er, true);
            this.toggleLoadingIndicator(false);
        }
    },
    /**
     * @desc Checks the previous form and performs actions accordingly
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    checkPreviousForm: function(data) {
        try {
            this.resetBottomNav();
            this.view.flxOption.setVisibility(false);
            this.view.flxFiltersOuter.setVisibility(false);
            this.view.flxSettings.setVisibility(false);
            if (data.navigatingFrom == "frmDashboard") {
                this.view.flxSaveDPR.setVisibility(true);
                this.view.flxOptionContainer.setVisibility(false);
                this.view.flxRefreshCrew.setVisibility(false);
                this.existingDateForEdit = data;
                this.resetScreen(data.projectData);
                this.view.lblTitle.text = "Project Details";
                this.view.lblBottomNavAdd.text = "Add DPR";
                this.view.lblproject.skin = "sknLblSelectedBottom";
                this.view.imgproject.src = "projectdetailssel.png";
            } else if (data.navigatingFrom == "frmAddDPR") {
                this.onTopNavClick("dpr");
                this.view.segDPRsHeader.setVisibility(true);
                this.view.lblBottomNavAdd.text = "Add DPR";
                this.view.lblTitle.text = "DPR Info";
                this.getDPRs((this.view.lblProjectIdValue.text).trim());
            } else if (data.navigatingFrom == "frmAddCrew") {
                this.onTopNavClick("crew");
                this.view.lblBottomNavAdd.text = "Add Crew";
                this.view.lblTitle.text = "Crew Details";
                this.view.flxContainerCrew.setVisibility(true);
                this.view.flxSupervisorCrew.setVisibility(false);
                this.getCrewDetails((this.view.lblProjectIdValue.text).trim());
            } else {
                this.toggleLoadingIndicator(false);
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    onTopNavClick: function(input) {
        try {
            switch (input) {
                case "project":
                    {
                        this.onTabClickReset();
                        this.resetBottomNav();
                        this.view.flxSaveDPR.setVisibility(true);
                        this.view.lblBottomNavAdd.text = "Add DPR";
                        this.view.lblproject.skin = "sknLblSelectedBottom";
                        this.view.imgproject.src = "projectdetailssel.png";
                        this.view.lblTitle.text = "Project Details";
                        this.view.flxProjectDetailsBody.setVisibility(true);
                        break;
                    }
                case "dpr":
                    {
                        var inp = {
                            "msg": "Please select the country.",
                            "option": "error"
                        };
                        if (this.view.lblproject.skin == "sknLblSelectedBottom" && commonUtils.checkIfEmpty(this.view.lblCountryId.text)) {
                            this.view.flxProjectDetailsBody.setVisibility(true);
                            this.showBottomPopUp(inp);
                        } else if (this.view.lblproject.skin == "sknLblSelectedBottom" && commonUtils.checkIfEmpty(this.view.lblActivityId.text)) {
                            inp = {
                                "msg": "Please select the activity.",
                                "option": "error"
                            };
                            this.showBottomPopUp(inp);
                        } else {
                            this.dprTabClick();
                        }
                        break;
                    }
                case "crew":
                    {
                        if (this.view.lblproject.skin == "sknLblSelectedBottom" && commonUtils.checkIfEmpty(this.view.lblCountryId.text)) {
                            var inpt = {
                                "msg": "Please select the country.",
                                "option": "error"
                            };
                            this.showBottomPopUp(inpt);
                        } else if (this.view.lblproject.skin == "sknLblSelectedBottom" && commonUtils.checkIfEmpty(this.view.lblActivityId.text)) {
                            var par = {};
                            par = {
                                "msg": "Please select the activity.",
                                "option": "error"
                            };
                            this.showBottomPopUp(par);
                        } else {
                            this.crewTabClick();
                        }
                        break;
                    }
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    onTabClickReset: function() {
        this.view.flxProjectDetailsBody.setVisibility(false);
        this.view.flxDPRsBody.setVisibility(false);
        this.view.flxCrewDetailsBody.setVisibility(false);
        this.view.flxSaveDPR.setVisibility(false);
        this.view.flxOptionContainer.setVisibility(false);
        this.view.flxRefreshCrew.setVisibility(false);
        this.view.flxSettings.setVisibility(false);
        this.view.flxOption.setVisibility(false);
        this.view.flxFiltersOuter.setVisibility(false);
    },
    crewTabClick: function() {
        this.dismissBottomPopup();
        this.onTabClickReset();
        this.resetBottomNav();
        this.view.flxRefreshCrew.setVisibility(true);
        this.view.imgCrew.src = "crewdetailssel.png";
        this.view.imgadddprcrew.src = "addcrew.png";
        this.view.lblcrew.skin = "sknLblSelectedBottom";
        this.view.lblBottomNavAdd.text = "Add Crew";
        this.view.lblTitle.text = "Crew Details";
        this.refreshCrewDetails = true;
        this.toggleLoadingIndicator(true);
        this.getCrewDetails((this.view.lblProjectIdValue.text).trim());
        this.view.flxContainerCrew.setVisibility(true);
        this.view.flxSupervisorCrew.setVisibility(false);
        this.view.flxCrewDetailsBody.setVisibility(true);
    },
    dprTabClick: function() {
        this.dismissBottomPopup();
        this.onTabClickReset();
        this.resetBottomNav();
        this.getDPRs((this.view.lblProjectIdValue.text).trim());
        this.view.imgDpr.src = "dprbottomsel.png";
        this.view.imgadddprcrew.src = "adddpr.png";
        this.toggleLoadingIndicator(true);
        this.view.flxOptionContainer.setVisibility(true);
        this.view.lblDpr.skin = "sknLblSelectedBottom";
        this.view.lblBottomNavAdd.text = "Add DPR";
        this.view.lblTitle.text = "DPR Info";
        this.view.flxDPRsBody.setVisibility(true);
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
     * @desc Prepares project data to save
     * @param JSON projectData - contains the selected projects details
     * @retun void
     */
    onClickOfSave: function() {
        try {
            var projectData = this.data.projectData;
            var inp = {
                "id": parseInt(projectData.id),
                "ProjectNumber": projectData.ProjectNumber,
                "StartDate": projectData.StartDate,
                "EndDate": projectData.EndDate,
                "ProjectDescription": this.view.txtDescriptionValue.text.replace(/\n/g, " "),
                "Country": commonUtils.checkIfEmpty(this.view.lblCountryValue.text) ? "" : this.view.lblCountryValue.text,
                "Location": commonUtils.checkIfEmpty(this.view.location.text) ? null : this.view.location.text.replace(/\n/g, " "),
                "OpsManager": (projectData.OpsManager || null),
                "Is_HourlyRate": (this.rates.selecetd),
                "Activity": commonUtils.checkIfEmpty(this.view.lblActivityId.text) ? null : this.view.lblActivityId.text,
                "Client": (projectData.Client || null),
                "createdBy": (projectData.createdBy || null),
                "createdDate": (projectData.createdDate || null),
                "lastModifiedBy": oceaneering.oms.appGlobals.employeeFullName,
                "lastModifiedDate": this.formatDate(new Date()),
                "supervisorId": (projectData.supervisorId || oceaneering.oms.appGlobals.employeeId),
                "DayRate": (projectData.DayRate || null),
                "Countryid": commonUtils.checkIfEmpty(this.view.lblCountryId.text) ? null : this.view.lblCountryId.text,
                "CountryCode": commonUtils.checkIfEmpty(this.view.lblCountryCode.text) ? null : this.view.lblCountryCode.text,
                "Depth": commonUtils.checkIfEmpty(projectData.depth) ? null : parseInt(projectData.Depth),
                "UOM": commonUtils.checkIfEmpty(projectData.UOM) ? null : projectData.UOM,
                "InventoryModel": commonUtils.checkIfEmpty(projectData.InventoryModel) ? null : projectData.InventoryModel,
                "ProjectAFE": commonUtils.checkIfEmpty(projectData.ProjectAFE) ? null : projectData.ProjectAFE,
                "VesselType": commonUtils.checkIfEmpty(projectData.VesselType) ? null : projectData.VesselType,
                "ClientAFE": commonUtils.checkIfEmpty(projectData.ClientAFE) ? null : projectData.ClientAFE,
                "SystemType": commonUtils.checkIfEmpty(projectData.SystemType) ? null : projectData.SystemType,
                "TotalDiveTime": commonUtils.checkIfEmpty(projectData.TotalDiveTime) ? null : projectData.TotalDiveTime,
                "System": commonUtils.checkIfEmpty(projectData.System) ? null : projectData.System,
                "TotalDownTime": commonUtils.checkIfEmpty(projectData.TotalDownTime) ? null : projectData.TotalDownTime,
                "InvOffshore": commonUtils.checkIfEmpty(projectData.InvOffshore) ? null : projectData.InvOffshore,
                "ClientContact": commonUtils.checkIfEmpty(projectData.ClientContact) ? null : projectData.ClientContact,
                "DeptDivision": commonUtils.checkIfEmpty(projectData.DeptDivision) ? null : projectData.DeptDivision,
                "Is_Primary": commonUtils.checkIfEmpty(projectData.Is_Primary) ? null : projectData.Is_Primary,
                "SystemName": commonUtils.checkIfEmpty(projectData.SystemName) ? null : projectData.SystemName,
                "Mission": commonUtils.checkIfEmpty(projectData.Mission) ? null : projectData.Mission,
                "Activities": commonUtils.checkIfEmpty(projectData.Activities) ? null : projectData.Activities,
                "EquipmentDetail": commonUtils.checkIfEmpty(projectData.EquipmentDetail) ? null : projectData.EquipmentDetail,
                "VesselId": commonUtils.checkIfEmpty(projectData.VesselId) ? null : projectData.VesselId,
                "VesselName": commonUtils.checkIfEmpty(projectData.VesselName) ? null : projectData.VesselName,
                "CrewDetail": commonUtils.checkIfEmpty(projectData.CrewDetail) ? null : projectData.CrewDetail,
                "InvOnshore": commonUtils.checkIfEmpty(projectData.InvOnshore) ? null : projectData.InvOnshore,
                "Region": commonUtils.checkIfEmpty(projectData.Region) ? null : projectData.Region,
                "RM": commonUtils.checkIfEmpty(projectData.RM) ? null : projectData.RM,
                "VesselTypeId": commonUtils.checkIfEmpty(projectData.VesselTypeId) ? null : projectData.VesselTypeId,
                "Contract": commonUtils.checkIfEmpty(projectData.Contract) ? null : projectData.Contract,
                "str_lastSupervisorName": commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.employeeFullName) ? null : (oceaneering.oms.appGlobals.employeeFullName),
                "str_lastSupervisorId": commonUtils.checkIfEmpty((oceaneering.oms.appGlobals.employeeId)) ? null : (oceaneering.oms.appGlobals.employeeId)
            };
            this.updateProjectInfoToStagingDBOMS(inp);
        } catch (ex) {
            var er = {
                "func": "onClickOfSave",
                "err": ex
            };
            commonUtils.exception(this, er, true);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc calls a service to add project info service into Staging DB
     * @param JSON projectData - Contains the data required to update project details into DB
     * @retun void
     */
    updateProjectInfoToStagingDBOMS: function(projectData) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_project_Info_update";
        var headers = {};
        integrationObj.invokeOperation(operationName, headers, projectData, this.successCallback_UpdateProjectInfo.bind(this), this.errorCallback_UpdateProjectInfo.bind(this));
    },
    /**
     * @desc Success callback of add project info service
     * @param JSON response - Contains the new projects info
     * @retun void
     */
    successCallback_UpdateProjectInfo: function(response) {
        try {
            var self = this;
            kony.timer.schedule("saveproject", () => {
                kony.timer.cancel("saveproject");
                self.dismissSuccess();
                self.data.projectData.Activity = commonUtils.checkIfEmpty(self.view.lblActivityId.text) ? "" : self.view.lblActivityId.text;
            }, 0.8, false);
            this.showSuccess("save");
            this.toggleLoadingIndicator(false);
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Error callback of add project info service
     * @param JSON error - Contains the error message and error code of getProjects service call
     * @retun void
     */
    errorCallback_UpdateProjectInfo: function(error) {
        this.toggleLoadingIndicator(false);
        var input = {
            "msg": "Error in saving project details.",
            "option": "error"
        };
        this.showBottomPopUp(input);
    },
    anyChangeInProjectData: function() {
        var data = this.data.projectData;
        var proj = {};
        proj.Location = this.view.location.text;
        proj.Country = this.view.lblCountryValue.text;
        proj.ProjectDescription = this.view.txtDescriptionValue.text;
        proj.Activity = this.view.lblActivityId.text;
        proj.Is_HourlyRate = this.rates.selecetd;
        var keys = Object.keys(proj);
        for (var j = 0; j < keys.length - 1; j++) {
            if (proj[keys[j]] !== data[keys[j]]) {
                return true;
            }
        }
        if (data.Is_HourlyRate == "true" && !this.rates.selecetd || data.Is_HourlyRate == "false" && this.rates.selecetd) {
            return true;
        }
        return false;
    },
    deletePrompt: function() {
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segDPRsHeader.selectedRowIndex[1];
        } else {
            index = this.view.segDPRsHeader.selectedIndex[1];
        }
        var data = this.view.segDPRsHeader.data[index];
        var inp = {
            "msg": "Sure you want to delete DPR?",
            "option": "enable"
        };
        this.showBottomPopUp(inp);
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.deleteDPR.bind(this, {
            "data": data,
            "index": index
        });
        this.view.bottompopup.btnBottomNotNow.onClick = () => {
            this.dismissBottomPopup();
        };
        this.view.bottompopup.imgToShow.setVisibility(false);
    },
    deleteDPR: function(inp) {
        try {
            this.dismissBottomPopup();
            var self = this;
            var data = inp.data;
            var index = inp.index;
            this.toggleLoadingIndicator(true);
            commonUtils.deleteDprHeader(data.dprHeader).then((err) => {
                self.view.segDPRsHeader.removeAt(index);
                if (commonUtils.checkIfEmpty(self.view.segDPRsHeader.data) || self.view.segDPRsHeader.data.length === 0) {
                    this.view.segDPRsHeader.setVisibility(false);
                    this.view.flxNoDPR.setVisibility(true);
                }
                kony.timer.schedule("delete", () => {
                    kony.timer.cancel("delete");
                    self.dismissSuccess();
                }, 0.8, false);
                this.showSuccess("delete");
                this.toggleLoadingIndicator(false);
            }, (err) => {
                this.toggleLoadingIndicator(false);
                var er = {
                    "func": "deleteDPR",
                    "err": err.errmsg
                };
                commonUtils.exception(this, er, true);
                this.showBottomPopUp();
                return;
            });
        } catch (ex) {
            this.view.flxLoading.setVisibility(false);
            commonUtils.exception(this, ex);
        }
    },
    /// -----------------------------------   submit DPR -------------------  ////
    submitDpr: function() {
        try {
            this.toggleLoadingIndicator(true);
            var deviceInfo = kony.os.deviceInfo();
            var index = "";
            if (deviceInfo.name != "iPhone") {
                index = this.view.segDPRsHeader.selectedRowIndex[1];
            } else {
                index = this.view.segDPRsHeader.selectedIndex[1];
            }
            var headerData = this.view.segDPRsHeader.data[index].dprHeader;
            var self = this;
            var projectId = headerData.str_projid;
            var finalDPR = [];
            var inp = {
                "header": commonUtils.getDPRHeaderReturn(headerData),
                "personnelList": []
            };
            commonUtils.getDPRWithDPRID(headerData.str_reportid).then((res) => {
                var data = res.OMS_OP_DailyReportPersonnel;
                inp.personnelList = commonUtils.getDPRPersonnelReturn(data);
                /* fetch the events from stagging table */
                commonUtils.getDPREvents(headerData.str_reportid).then((res) => {
                    if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                        var val = commonUtils.calculateHoursEvents(res);
                        if (val.hours === 0 && val.minutes === 0) {
                            var param = {
                                "msg": "Enter at least one event to submit.", //+ inp.header.systemId + ".",
                                "option": "error"
                            };
                            this.showBottomPopUp(param);
                        } else {
                            inp.eventsList = commonUtils.getEventsResponse(res);
                            this.submitAfterEvents(inp, headerData);
                        }
                    } else {
                        var parm = {
                            "msg": "Enter at least one event to submit.", //for Opeartion: " + inp.header.systemId + ".",
                            "option": "error"
                        };
                        this.showBottomPopUp(parm);
                        self.toggleLoadingIndicator(false);
                    }
                }, (err) => {
                    this.toggleLoadingIndicator(false);
                    var inp = {
                        "msg": commonUtils.errMessage,
                        "option": "error"
                    };
                    var er = {
                        "func": "submitDpr-dpr",
                        "err": err.errmsg
                    };
                    commonUtils.exception(this, er, true);
                    return;
                });
            }, (err) => {
                this.toggleLoadingIndicator(false);
                var inp = {
                    "msg": commonUtils.errMessage,
                    "option": "error"
                };
                self.showBottomPopUp(inp);
                var er = {
                    "func": "submitDpr-dpr",
                    "err": err.errmsg
                };
                commonUtils.exception(this, er, true);
                return;
            });
        } catch (ex) {
            var er = {
                "func": "submitDpr",
                "err": ex
            };
            commonUtils.exception(this, er, true);
            this.view.flxMain.setEnabled(true);
        }
    },
    /// ------------------------------ With events ------------------------------- //
    submitAfterEvents: function(inp, headerData) {
        var self = this;
        inp.header.sja = null;
        inp.rosterList = [];
        inp.chargesList = [];
        inp.attachmentsList = [];
        commonUtils.getDPRRoaster(headerData.str_reportid).then((res) => {
            if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                inp.rosterList = commonUtils.getRosterResponse(res);
            }
            commonUtils.getDPRAssetsTools(headerData.str_reportid).then((res) => {
                if (!commonUtils.checkIfEmpty(res) && res.length > 0) {
                    inp.chargesList = commonUtils.AssetsToolsResponse(res);
                }
                commonUtils.getAttachmentsForSubmit(headerData.str_reportid).then((res) => {
                    inp.attachmentsList = commonUtils.getAttachmentsResponse(res);
                    self.submitDPRWithEvents(inp, headerData);
                }, (err) => {
                    self.submitDPRWithEvents(inp, headerData);
                });
            }, (err) => {
                self.submitDPRWithEvents(inp, headerData);
            });
        }, (err) => {
            self.submitDPRWithEvents(inp, headerData);
        });
    },
    submitDPRWithEvents: function(inp, headerData) {
        var self = this;
        commonUtils.submitDPRWithEvents(inp).then((res) => {
            this.afterSubmit(inp, headerData, res);
        }, (err) => {
            this.toggleLoadingIndicator(false);
            var inp = {
                "msg": commonUtils.errMessage,
                "option": "error"
            };
            self.showBottomPopUp(inp);
            var er = {
                "func": "submitDPRWithEvents",
                "err": err.errmsg
            };
            commonUtils.exception(this, er, true);
            return;
        });
    },
    afterSubmit: function(inp, headerData, res) {
        try {
            var self = this;
            var staggingUpdatde = [];
            var submitFinal = [];
            submitFinal = res;
            var reportid = headerData.str_reportid;
            var header = Object.assign({}, headerData);
            header.dte_reportdate = header.dte_reportdate.substring(0, 10);
            if (submitFinal.status == "1" && submitFinal.message == "Success") {
                header.lng_status = 1;
                header.str_RejectComments = false;
                header.bln_RejectedOnshore = false;
                header.dte_lastModified = !commonUtils.checkIfEmpty(headerData.dte_lastModified) ? (headerData.dte_lastModified).substring(0, 10) + "T" + (headerData.dte_lastModified).substring(11, 19) : null;
                header.str_supervisor = oceaneering.oms.appGlobals.projectSupervisorId;
                header.str_supervisorName = oceaneering.oms.appGlobals.projectSupervisor;
                commonUtils.UpdateDPRHeader(header).then((values) => {
                    kony.timer.schedule("submit", () => {
                        kony.timer.cancel("submit");
                        self.dismissSuccess();
                    }, 0.8, false);
                    this.showSuccess("submit");
                    self.getDPRs(headerData.str_projid);
                }, (err) => {
                    var inpt = {
                        "msg": commonUtils.errMessage,
                        "option": "error"
                    };
                    self.showBottomPopUp(inpt);
                    var er = {
                        "func": "afterSubmit",
                        "err": "Errorcallback " + JSON.stringify(err)
                    };
                    commonUtils.exception(this, er, true);
                    return;
                });
            } else {
                var msg = {
                    "msg": submitFinal.message,
                    "option": "error"
                };
                self.showBottomPopUp(msg);
                var er = {
                    "func": "afterSubmit-dpr",
                    "err": submitFinal.message
                };
                commonUtils.exception(this, er, true);
                return;
            }
        } catch (ex) {
            var er = {
                "func": "submitDpr",
                "err": ex
            };
            commonUtils.exception(this, er, true);
        }
    },
    // ------------------------------------------------------------------ //
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
     * @desc Resets the screen according to default state
     * @param JSON projectData - contains the selected projects details
     * @retun void
     */
    resetScreen: function(projectData) {
        try {
            this.onTopNavClick("project");
            this.view.flxReportDate.setVisibility(false);
            this.view.flxMain.setEnabled(true);
            this.setActivityInitial(projectData);
            this.setProjectDetails(projectData);
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
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
        this.view.lblCountryValue.text = (commonUtils.checkIfEmpty(projectData.Country)) ? "None" : projectData.Country;
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
        this.view.lblActivitySelected.text = commonUtils.checkIfEmpty(projectData.Activity) ? "None" : (projectData.Activity).split(",")[0];
        this.view.lblActivityId.text = commonUtils.checkIfEmpty(projectData.Activity) ? "" : projectData.Activity;
        this.view.lblRateSelected.text = this.isHourlyRate ? "Hourly" : "Daily";
        this.rates.selecetd = this.isHourlyRate;
        this.setRates(this.isHourlyRate);
        this.setActivities(projectData.Activities);
        this.getCrewDetails(projectData.ProjectNumber);
        this.setCountries();
        this.getDPRs(projectData.ProjectNumber);
    },
    /**
     * @desc Navigates to dashboard screen on click of back
     * @param -
     * @retun void
     */
    onClickOfBack: function() {
        this.toggleLoadingIndicator(true);
        if (this.view.flxDPROverview.isVisible || this.view.flxSignature.isVisible) {
            this.view.flxDPROverview.isVisible = false;
            this.view.flxSignature.isVisible = false;
            this.toggleLoadingIndicator(false);
        } else {
            this.toggleLoadingIndicator(false);
            commonUtils.navigateTo("frmDashboard", {
                "navigatingFrom": "frmDPRInfo",
                "loadProjects": true
            });
            formStack = [];
        }
    },
    /**
     * @desc Called on click of the floating action button
     * @param -
     * @retun void
     */
    onClickOfFab: function(data) {
        var selected = "";
        if (this.view.lblcrew.skin == "sknLblSelectedBottom") {
            selected = "crew";
        }
        if (selected === "crew") {
            this.onClickOfAddCrew();
        } else {
            var inp = {
                "msg": "Please select the country before filling timesheet.",
                "option": "error"
            };
            if (this.view.lblproject.skin == "sknLblSelectedBottom" && commonUtils.checkIfEmpty(this.view.lblCountryId.text)) {
                this.showBottomPopUp(inp);
            } else if (this.view.lblproject.skin == "sknLblSelectedBottom" && commonUtils.checkIfEmpty(this.view.lblActivityId.text)) {
                var inpt = {
                    "msg": "Please select the activity before filling timesheet.",
                    "option": "error"
                };
                this.showBottomPopUp(inpt);
            } else {
                this.onClickOfCreateDPR();
            }
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
    /// ------------------------ Project Related ---------------- ///
    onClickActivities: function(input) {
        var selected = this.view.lblActivitySelected.text;
        var arr = this.activities.arr;
        var result = [];
        if (!commonUtils.checkIfEmpty(arr) && arr.length > 0) {
            var res = {
                "lblValue": "None",
                "lblCheck": {
                    "skin": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == "None" ? "sknLblFilterSelected" : "sknLblFilterUnselected",
                    "text": commonUtils.checkIfEmpty(selected) ? commonUtils.TICKTEXTUNSEL : selected == "None" ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                },
                "activity": "",
                "description": "None"
            };
            result.push(res);
            for (var j = 0; j < arr.length; j++) {
                var inp = {
                    "lblValue": arr[j].description + " (" + arr[j].activity + ")",
                    "lblCheck": {
                        "skin": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == arr[j].description ? "sknLblFilterSelected" : "sknLblFilterUnselected",
                        "text": commonUtils.checkIfEmpty(selected) ? commonUtils.TICKTEXTUNSEL : selected == arr[j].description ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                    },
                    "activity": arr[j].activity,
                    "description": arr[j].description
                };
                if (arr[j].project == this.view.lblProjectIdValue.text) {
                    result.push(inp);
                }
            }
            this.view.activity.segServiceLine.setData(result);
            this.onClickListBottom(this.view.activity);
        } else {
            var inpt = {
                "msg": "No Activities Found",
                "option": "error"
            };
            this.showBottomPopUp(inpt);
        }
    },
    setActivityInitial: function(input) {
        var result = [];
        var activity = input.Activity;
        var res = {
            "lblValue": "None",
            "lblCheck": {
                "skin": commonUtils.TICKUNSELECTED,
                "text": commonUtils.TICKTEXTUNSEL
            },
            "activity": "",
            "description": "None"
        };
        result.push(res);
        if (!commonUtils.checkIfEmpty(activity) && activity != "None") {
            var inp = {
                "lblValue": (activity.split(",")[0]) + " (" + (activity.split(",")[1]) + ")",
                "lblCheck": {
                    "skin": "sknLblFilterUnselected",
                    "text": commonUtils.TICK
                },
                "activity": activity.split(",")[1],
                "description": activity.split(",")[0]
            };
            result.push(res);
            this.view.activity.segServiceLine.setData(result);
        } else {
            this.view.activity.segServiceLine.setData([]);
        }
    },
    onClickServiceLine: function() {
        var selected = this.view.lblServiceLine.text;
        var arr = oceaneering.oms.appGlobals.serviceLines;
        var result = [];
        if (!commonUtils.checkIfEmpty(arr) && arr.length > 1) {
            for (var j = 0; j < arr.length; j++) {
                var inp = {
                    "lblValue": arr[j].serviceLineValue,
                    "lblCheck": {
                        "skin": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == arr[j].serviceLineValue ? "sknLblFilterSelected" : "sknLblFilterUnselected",
                        "text": commonUtils.checkIfEmpty(selected) ? commonUtils.TICKTEXTUNSEL : selected == arr[j].serviceLineValue ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                    },
                };
                result.push(inp);
            }
            this.view.serviceLine.segServiceLine.setData(result);
            this.onClickListBottom(this.view.serviceLine);
        } else if (!commonUtils.checkIfEmpty(arr) && arr.length === 0) {
            var inpt = {
                "msg": "No serviceLine Found",
                "option": "error"
            };
            this.showBottomPopUp(inpt);
        }
    },
    onRowClickServiceLine: function() {
        var selected = this.view.serviceLine.segServiceLine.selectedRowItems[0];
        this.view.lblServiceLine.text = selected.serviceLineValue;
        oceaneering.oms.appGlobals.selServiceLineValue = selected.serviceLineValue;
        oceaneering.oms.appGlobals.selServiceLine = selected.serviceLine;
        this.HideActivity(this.view.serviceLine);
    },
    onClickRates: function() {
        var selected = this.view.lblRateSelected.text;
        var arr = this.rates.arr;
        var result = [];
        if (!commonUtils.checkIfEmpty(arr)) {
            for (var j = 0; j < arr.length; j++) {
                var inp = {
                    "lblValue": arr[j],
                    "lblCheck": {
                        "skin": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == arr[j] ? "sknLblFilterSelected" : "sknLblFilterUnselected",
                        "text": commonUtils.checkIfEmpty(selected) ? commonUtils.TICKTEXTUNSEL : selected == arr[j] ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                    }
                };
                result.push(inp);
            }
            this.view.rates.segServiceLine.setData(result);
        }
        this.onClickListBottom(this.view.rates);
    },
    /**
     * @desc Makes project details editable
     * @param -
     * @retun void
     */
    editProjectDetails: function() {
        var projectData = {
            "location": this.view.location.text,
            "country": this.view.lblCountryValue.text,
            "CountryId": this.view.lblCountryId.text,
            "CountryCode": this.view.lblCountryCode.text,
            "description": this.view.txtDescriptionValue.text,
            "rate": this.view.lblRateSelected.text,
            "activity": this.view.lblActivitySelected.text,
            "activityId": this.view.lblActivityId.text,
        };
        this.existingDateForEdit = projectData;
    },
    /**
     * @desc Reset project details and make it non editable
     * @param -
     * @retun void
     */
    onClickOfCancelInEditPrrojectDetails: function(projectData) {
        try {
            this.view.flxNavMenu.setEnabled(true);
            this.activeInActiveDetials(false);
            this.view.location.text = projectData.location;
            this.view.lblCountryValue.text = projectData.country;
            this.view.lblCountryId.text = projectData.CountryId;
            this.view.lblCountryCode.text = projectData.CountryCode;
            this.view.txtDescriptionValue.text = projectData.description;
            this.view.lblActivitySelected.text = commonUtils.checkIfEmpty(projectData.activity) ? "None" : (projectData.activity).split(",")[0];
            this.view.lblActivityId.text = commonUtils.checkIfEmpty(projectData.activityId) ? "" : projectData.activityId;
            this.view.lblRateSelected.text = commonUtils.checkIfEmpty(projectData.rate) ? "None" : projectData.rate;
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /// ---------------------- DPR Related --------------------- //
    /**
     * @desc Calls a service to get all the dprs for the current project
     * @param String projectId - contains the selected project id
     * @retun void
     */
    getDPRs: function(projectID) {
        this.view.flxOption.setVisibility(false);
        this.view.segDPRsHeader.height = "94%";
        this.view.segDPRsHeader.top = "5%";
        this.toggleLoadingIndicator(true);
        commonUtils.getAllDPRForProject(projectID).then((res) => {
            this.successCallback_GetDPRs(res.OMS_OP_Dailyreportheader);
        }, (err) => {
            this.view.segDPRsHeader.removeAll();
            this.view.segDPRsHeader.setVisibility(false);
            this.view.flxNoDPR.setVisibility(true);
            this.errorCallback();
        });
    },
    /**
     * @desc Success callback for get DPRs service
     * @param JSON response - contains all the DPRs for the selected project
     * @retun void
     */
    successCallback_GetDPRs: function(response) {
        try {
            if (commonUtils.checkIfEmpty(response) && response.length === 0) {
                this.dprsAvailable = false;
                this.view.segDPRsHeader.removeAll();
                this.view.flxNoDPR.setVisibility(true);
                this.toggleLoadingIndicator(false);
            } else {
                this.prepareDPRHeaderData(response);
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc Prepares DPR Header data to be set in the segment
     * @param JSON dprData - contains all the DPRs for the selected project
     * @retun void
     */
    prepareDPRHeaderData: function(dprData) {
        try {
            var finalData = [];
            this.toggleLoadingIndicator(true);
            for (var j = 0; j < dprData.length; j++) {
                var status = true;
                var rejected = (!commonUtils.checkIfEmpty(dprData[j].bln_RejectedOnshore) && (dprData[j].bln_RejectedOnshore == "true" || dprData.bln_RejectedOnshore === true || dprData.bln_RejectedOnshore == "1" || dprData.bln_RejectedOnshore === 1)) ? true : false;
                var sign = commonUtils.checkIfEmpty(dprData[j].str_Signature) ? false : true;
                status = dprData[j].lng_status === 0 || dprData[j].lng_status === "0" ? true : false;
                if (status) {
                    this.dprsAvailable = true;
                }
                var len = commonUtils.checkIfEmpty(dprData[j].str_reportDateTime) ? 0 : (dprData[j].str_reportDateTime).length - 5;
                var time = commonUtils.checkIfEmpty(dprData[j].str_reportDateTime) ? "" : dprData[j].str_reportDateTime.substr(len);
                var date = commonUtils.checkIfEmpty(dprData[j].str_reportDateTime) ? "" : dprData[j].str_reportDateTime.substr(0, len - 1);
                var displayDate = (dprData[j].dte_reportdate).substring(0, 10);
                displayDate = commonUtils.getMonthWord(displayDate.substr(5, 2)) + " " + parseInt(displayDate.substr(8, 2)) + ", " + displayDate.substr(0, 4);
                if (displayDate !== date) {
                    date = displayDate;
                }
                var inp = {
                    dprId: dprData[j].str_reportid,
                    reportId: {
                        text: dprData[j].str_reportid,
                        skin: rejected ? "sknLblRejected" : "sknLbl33333380",
                        isVisible: true
                    },
                    str_projid: dprData[j].str_projid,
                    reportDate: dprData[j].dte_reportdate,
                    lblreportDate: date,
                    dprHeader: dprData[j],
                    flxOptionColor: {
                        isVisible: true,
                        skin: status ? (rejected ? "slnFlxDPRTopLineRed" : "slnFlxDPRTopLineOrange") : "sknFlxDPRTopLineGreen"
                    },
                    flxContainer: {
                        isVisible: !status
                    },
                    flxDeleteContainer: {
                        isVisible: status
                    },
                    // recover
                    flxDPRIcon: {
                        isVisible: !status,
                        onClick: this.onClickOfRecover.bind(this)
                    },
                    flxSignAccept: {
                        isVisible: !status,
                        onClick: this.onclickSign.bind(this)
                    },
                    flxRecoverclone: {
                        isVisible: true
                    },
                    flxClone: {
                        isVisible: true,
                        onClick: this.cloneDPRPrompt.bind(this)
                    },
                    lblClone: {
                        skin: "sknBlueIconColor",
                        text: "",
                        isVisible: true
                    },
                    flxDelete: {
                        isVisible: status,
                        onClick: this.deletePrompt.bind(this)
                    },
                    flxSubmit: {
                        isVisible: status,
                        onClick: this.submitDpr.bind(this)
                    },
                    lblDelete: {
                        skin: "sknBlueIconColor",
                        text: "",
                        isVisible: true
                    },
                    lblSubmit: {
                        skin: "sknBlueIconColor",
                        text: "",
                        isVisible: true
                    },
                    imgCalendar: {
                        isVisible: true,
                        src: "calgrey.png"
                    },
                    imgSign: {
                        src: sign ? "imgsigndone.png" : "imgsignpending.png",
                        isVisible: !status,
                    },
                    imgRecover: {
                        isVisible: !status,
                        src: "restore.png"
                    },
                    flxEdit: {
                        isVisible: true,
                    },
                    lblEdit: {
                        skin: "sknBlueIconColor",
                        text: "",
                        isVisible: status
                    },
                    flxView: {
                        isVisible: !status,
                        onClick: this.onClickView.bind(this)
                    },
                    lblView: {
                        text: "",
                        skin: "sknBlueIconColor",
                        isVisible: !status
                    },
                    flxDeleteClone: {
                        isVisible: true
                    },
                    flxCloneDpr: {
                        isVisible: true,
                        onClick: this.cloneDPRPrompt.bind(this)
                    },
                    lblCloneDpr: {
                        text: "",
                        skin: "sknBlueIconColor",
                        isVisible: true
                    },
                    imgtime: {
                        isVisible: true,
                        src: "clockimg.png"
                    },
                    lblTime: {
                        text: time,
                        skin: "sknLbl333333S90",
                        isVisible: true
                    },
                    imgDpr: {
                        isVisible: true,
                        src: "dprbottomsel.png"
                    }
                };
                if (status) {
                    inp.flxEdit.onClick = this.onSelectingDPRHeader.bind(this);
                }
                finalData.push(inp);
            }
            this.view.segDPRsHeader.setData(finalData);
            this.dprList = finalData;
            this.view.segDPRsHeader.setVisibility(true);
            this.view.flxNoDPR.setVisibility(false);
            this.toggleLoadingIndicator(false);
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    onClickView: function() {
        try {
            var self = this;
            this.toggleLoadingIndicator(true);
            var selectedDPRs = this.view.segDPRsHeader.selectedRowItems[0];
            var dprHeaderData = selectedDPRs.dprHeader;
            commonUtils.getDPRWithDPRID(dprHeaderData.str_reportid).then((dprData) => {
                formStack.push({
                    "frm": "frmDPRInfo",
                    params: {
                        navigatingFrom: "frmAddDPR"
                    }
                });
                commonUtils.navigateTo("frmAddDPR", {
                    "reportDate": selectedDPRs.reportDate,
                    "headerData": dprHeaderData,
                    "projectId": selectedDPRs.str_projid,
                    "navigatingFrom": "frmDPRInfo",
                    "operation": "View",
                    "projectData": this.data.projectData,
                    "employeeData": this.data.employeeData,
                    "dpr_Info": dprData.OMS_OP_DailyReportPersonnel
                });
                self.toggleLoadingIndicator(false);
            }, (err) => {
                this.showBottomPopUp();
            });
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    onclickDPROption: function(index) {
        var data = this.view.segDPRsHeader.data[index];
        if (data.lblDpr.skin == commonUtils.TICKSELECTED) {
            data.lblDpr.skin = commonUtils.TICKUNSELECTED;
            data.lblDpr.text = commonUtils.TICKTEXTUNSEL;
        } else {
            data.lblDpr.skin = commonUtils.TICKSELECTED;
            data.lblDpr.text = commonUtils.TICK;
        }
        this.view.segDPRsHeader.setDataAt(data, index);
    },
    onClickOfRecover: function() {
        this.toggleLoadingIndicator(true);
        var self = this;
        var index = "";
        var deviceInfo = kony.os.deviceInfo();
        if (deviceInfo.name != "iPhone") {
            index = this.view.segDPRsHeader.selectedRowIndex[1];
        } else {
            index = this.view.segDPRsHeader.selectedIndex[1];
        }
        var data = this.view.segDPRsHeader.data[index];
        var inp = {
            "msg": "Sure you want to recover DPR?",
            "option": "enable"
        };
        this.showBottomPopUp(inp);
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.onClickRecover.bind(this, {
            "data": data,
            "index": index
        });
        this.view.bottompopup.btnBottomNotNow.onClick = () => {
            this.dismissBottomPopup();
        };
        this.view.bottompopup.imgToShow.setVisibility(false);
    },
    onClickRecover: function(input) {
        try {
            this.dismissBottomPopup();
            this.toggleLoadingIndicator(true);
            var self = this;
            var data = input.data;
            var inp = {
                "reportId": data.dprHeader.str_reportid,
                "novelId": oceaneering.oms.appGlobals.username
            };
            var header = data.dprHeader;
            header.lng_status = 0;
            header.dte_reportdate = (header.dte_reportdate).substring(0, 10);
            header.dte_lastModified = !commonUtils.checkIfEmpty(header.dte_lastModified) ? (header.dte_lastModified).substring(0, 10) + "T" + (header.dte_lastModified).substring(11, 19) : null;
            header.str_supervisor = oceaneering.oms.appGlobals.projectSupervisorId;
            header.str_supervisorName = oceaneering.oms.appGlobals.projectSupervisor;
            commonUtils.recoverDPr(inp).then((res) => {
                if (!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0 && !commonUtils.checkIfEmpty(res.data)) {
                    if (res.data.code == "1" && (res.data.title == "DPR recovered successfully." || res.data.title == "DPR recovered successfully")) {
                        commonUtils.UpdateDPRHeader(header).then((res) => {
                            kony.timer.schedule("recover", () => {
                                kony.timer.cancel("recover");
                                self.dismissSuccess();
                                self.toggleLoadingIndicator(true);
                                self.getDPRs(self.view.lblProjectIdValue.text);
                            }, 0.8, false);
                            this.showSuccess("recover");
                            self.getDPRs(header.str_projid);
                        }, (err) => {
                            var er = {
                                "msg": err,
                                "option": "error"
                            };
                            self.showBottomPopUp(er);
                        });
                    } else {
                        var inp = {
                            "msg": res.data.title,
                            "option": "error"
                        };
                        self.showBottomPopUp(inp);
                    }
                } else {
                    if (!commonUtils.checkIfEmpty(res)) {
                        var input = {
                            "msg": res.message,
                            "option": "error"
                        };
                        self.showBottomPopUp(input);
                    } else {
                        self.showBottomPopUp();
                    }
                }
            }, (err) => {
                var er = {
                    "func": "onClickRecover-dpr",
                    "err": err.errmsg
                };
                commonUtils.exception(this, er, true);
            });
        } catch (ex) {
            var er = {
                "func": "onClickRecover",
                "err": ex
            };
            commonUtils.exception(this, er, true);
        }
    },
    onclickSign: function() {
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        this.toggleLoadingIndicator(true);
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segDPRsHeader.selectedRowIndex[1];
        } else {
            index = this.view.segDPRsHeader.selectedIndex[1];
        }
        var data = this.view.segDPRsHeader.data[index];
        this.selectedSignHeader = data.dprHeader;
        if (!commonUtils.checkIfEmpty(data.dprHeader.str_Signature) && (data.dprHeader.str_Sign || data.dprHeader.str_Sign == "1")) {
            this.view.imgSignature.base64 = data.dprHeader.str_Signature;
            this.view.lblClientShow.text = data.dprHeader.str_clientname;
            this.view.lblRepName.text = data.dprHeader.str_clientcontact;
            this.view.lblSigndate.text = (data.dprHeader.str_signatureDateTime);
            if (commonUtils.checkIfEmpty(this.view.lblClientShow.text)) {
                this.view.flxClientName.setVisibility(false);
            } else {
                this.view.flxClientName.setVisibility(true);
            }
            if (commonUtils.checkIfEmpty(this.view.lblRepName.text)) {
                this.view.flxRepName.setVisibility(false);
            } else {
                this.view.flxRepName.setVisibility(true);
            }
            this.view.flxSignatureShow.setVisibility(true);
            this.toggleLoadingIndicator(false);
        } else {
            this.resetSignScreen();
            var day = [];
            var night = [];
            commonUtils.getDPRWithDPRID(this.selectedSignHeader.str_reportid).then((res) => {
                var data = res.OMS_OP_DailyReportPersonnel;
                for (var j = 0; j < data.length; j++) {
                    var inp = {
                        "name": data[j].str_employeeName,
                        "position": data[j].str_jobPosition,
                        "regHours": commonUtils.checkIfEmpty(data[j].dbl_billinghour) ? "-" : data[j].dbl_billinghour,
                        "overtime": commonUtils.checkIfEmpty(data[j].dbl_othourcompany) ? "-" : data[j].dbl_othourcompany,
                        "daysOnboard": commonUtils.checkIfEmpty(data[j].dbl_othourcompany) ? "-" : data[j].dbl_othourcompany,
                    };
                    if (data[j].lng_shifttype == 1 || data[j].lng_shifttype == "1") {
                        day.push(inp);
                    } else if (data[j].lng_shifttype == 2 || data[j].lng_shifttype == "2") {
                        night.push(inp);
                    }
                }
                this.addDayPersonnel(day);
                this.addNightPersonnel(night);
                this.toggleLoadingIndicator(false);
            }, (err) => {});
            this.view.lblClientName.text = this.selectedSignHeader.str_clientname;
            this.view.lblProjectDetailsId.text = this.selectedSignHeader.str_projid;
            this.view.lblProjectDetailDate.text = (this.selectedSignHeader.dte_reportdate).substring(0, 10); // report Date
            this.view.lblServiceTicket.text = this.selectedSignHeader.str_reportid; // DPR ID
            this.view.lblDaySupervisor.text = !commonUtils.checkIfEmpty(this.selectedSignHeader.str_supervisorName) ? "" : this.selectedSignHeader.str_supervisorName;
            if (commonUtils.checkIfEmpty(this.view.lblDaySupervisor.text)) {
                this.view.flxSep3.setVisibility(false);
                this.view.flxShiftDesc.setVisibility(false);
                this.view.flxShiftTab.setVisibility(false);
            }
            this.view.tbxClient.text = this.selectedSignHeader.str_clientcontact; // client representative
            this.view.flxDPROverview.setVisibility(true);
        }
    },
    resetSignScreen: function() {
        this.view.lblProjectInfoArrow.text = commonUtils.DOWNARROW;
        this.view.lblPersonnelArrow.text = commonUtils.DOWNARROW;
        this.view.lblShiftsArrow.text = commonUtils.DOWNARROW;
        this.view.flxProjectDetails.setVisibility(false);
        this.view.flxPersonnelDay.setVisibility(false);
        this.view.flxShiftDesc.setVisibility(false);
        this.view.flxClientDesc.setVisibility(true);
    },
    /**
     * @desc On click of dpr header
     * @param -
     * @retun void
     */
    onSelectingDPRHeader: function() {
        try {
            var self = this;
            var selectedDPRs = this.view.segDPRsHeader.selectedRowItems[0];
            var headerDPR = selectedDPRs.dprHeader;
            headerDPR.rmNumber = headerDPR.str_rmnumber = headerDPR.str_projid = headerDPR.str_systemid = headerDPR.str_projid;
            headerDPR.dte_reportdate = (headerDPR.dte_reportdate).substring(0, 10);
            headerDPR.str_supervisor = commonUtils.checkIfEmpty(headerDPR.str_supervisor) ? oceaneering.oms.appGlobals.projectSupervisorId : headerDPR.str_supervisor;
            headerDPR.str_supervisorName = commonUtils.checkIfEmpty(headerDPR.str_supervisorName) ? oceaneering.oms.appGlobals.projectSupervisor : headerDPR.str_supervisorName;
            headerDPR.str_CreatedBy = commonUtils.checkIfEmpty(headerDPR.str_CreatedBy) ? oceaneering.oms.appGlobals.projectSupervisorId : headerDPR.str_CreatedBy;
            headerDPR.str_CreatedByUserName = commonUtils.checkIfEmpty(headerDPR.str_CreatedByUserName) ? oceaneering.oms.appGlobals.username : headerDPR.str_CreatedByUserName;
            headerDPR.int_CountryId = commonUtils.checkIfEmpty(this.view.lblCountryId.text) ? null : parseInt(this.view.lblCountryId.text);
            headerDPR.str_clientname = commonUtils.checkIfEmpty(this.view.lblClientValue.text) || this.view.lblClientValue.text == "-" ? null : this.view.lblClientValue.text;
            headerDPR.str_location = commonUtils.checkIfEmpty(this.view.location.text) ? null : this.view.location.text.replace(/\n/g, " ");
            headerDPR.str_ProjectActivity = commonUtils.checkIfEmpty(this.view.lblActivityId.text) || this.view.lblActivityId.text === "" ? null : this.view.lblActivityId.text;
            headerDPR.isMobileCreated = true;
            headerDPR.str_opsmanager = commonUtils.checkIfEmpty(this.view.lblManagerValue.text) || this.view.lblManagerValue.text == "-" ? null : this.view.lblManagerValue.text;
            headerDPR.bln_hourlyrate = commonUtils.checkIfEmpty(headerDPR.bln_hourlyrate) ? false : (headerDPR.bln_hourlyrate === true || headerDPR.bln_hourlyrate == "true") ? true : false; /// this.view.lblRateSelected.text == "Hourly" ? true : false;
            headerDPR.lng_status = 0;
            headerDPR.str_Sign = headerDPR.str_Sign;
            headerDPR.bln_RejectedOnshore = false;
            headerDPR.str_lastModifiedBy = oceaneering.oms.appGlobals.employeeId;
            headerDPR.dte_lastModified = !commonUtils.checkIfEmpty(headerDPR.dte_lastModified) ? (headerDPR.dte_lastModified).substring(0, 10) + "T" + (headerDPR.dte_lastModified).substring(11, 19) : null;
            if (headerDPR.lng_status == "0" || headerDPR.lng_status === 0) {
                this.toggleLoadingIndicator(true);
                commonUtils.getDPRWithDPRID(headerDPR.str_reportid).then((dprData) => {
                    formStack.push({
                        "frm": "frmDPRInfo",
                        params: {
                            navigatingFrom: "frmAddDPR"
                        }
                    });
                    commonUtils.navigateTo("frmAddDPR", {
                        "reportDate": selectedDPRs.reportDate,
                        "headerData": headerDPR,
                        "projectId": selectedDPRs.str_projid,
                        "navigatingFrom": "frmDPRInfo",
                        "operation": "Update",
                        "projectData": this.data.projectData,
                        "employeeData": this.data.employeeData,
                        "dpr_Info": dprData.OMS_OP_DailyReportPersonnel
                    });
                    self.toggleLoadingIndicator(false);
                }, (err) => {
                    this.showBottomPopUp();
                });
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc Closes Dpr info section and shows dpr headers instead
     * @param -
     * @retun void
     */
    closeDPRInfoSection: function() {
        this.onTopNavClick("dpr");
        this.view.segDPRsHeader.setVisibility(true);
    },
    onClickOfCreateDPR: function() {
        this.dismissBottomPopup();
        var projectId = this.view.lblProjectIdValue.text;
        var headerDPR = Object.assign({}, commonUtils.dprHeader);
        headerDPR.reportId = headerDPR.str_reportid = "PROJ_" + projectId + "-" + Date.now();
        headerDPR.rmNumber = headerDPR.str_rmnumber = headerDPR.str_projid = headerDPR.str_systemid = projectId;
        headerDPR.dte_reportdate = this.formatDate(new Date()).substring(0, 10);
        var dtte = this.formatDate(new Date()).substring(0, 10);
        headerDPR.str_reportDateTime = commonUtils.getMonthWord(dtte.substr(5, 2)) + " " + parseInt(dtte.substr(8, 2)) + ", " + dtte.substr(0, 4) + " " + new Date().toTimeString().substring(0, 5);
        headerDPR.str_CreatedBy = oceaneering.oms.appGlobals.employeeId;
        headerDPR.str_CreatedByUserName = oceaneering.oms.appGlobals.username;
        headerDPR.int_CountryId = commonUtils.checkIfEmpty(this.view.lblCountryId.text) ? null : parseInt(this.view.lblCountryId.text);
        headerDPR.str_clientname = commonUtils.checkIfEmpty(this.view.lblClientValue.text) || this.view.lblClientValue.text == "-" ? null : this.view.lblClientValue.text;
        headerDPR.str_location = commonUtils.checkIfEmpty(this.view.location.text) ? null : this.view.location.text.replace(/\n/g, " ");
        headerDPR.str_ProjectActivity = commonUtils.checkIfEmpty(this.view.lblActivityId.text) || this.view.lblActivityId.text === "" ? null : this.view.lblActivityId.text;
        headerDPR.isMobileCreated = true;
        headerDPR.str_opsmanager = commonUtils.checkIfEmpty(this.view.lblManagerValue.text) || this.view.lblManagerValue.text == "-" ? null : this.view.lblManagerValue.text;
        headerDPR.bln_hourlyrate = this.view.lblRateSelected.text == "Hourly" ? true : false;
        headerDPR.lng_status = 0;
        headerDPR.str_Sign = "0";
        headerDPR.bln_RejectedOnshore = false;
        headerDPR.str_lastModifiedBy = oceaneering.oms.appGlobals.employeeId;
        headerDPR.dte_lastModified = this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0, 8);
        headerDPR.str_supervisor = headerDPR.str_CreatedBy = oceaneering.oms.appGlobals.projectSupervisorId;
        headerDPR.str_supervisorName = oceaneering.oms.appGlobals.projectSupervisor;
        var empData = {
            "empId": oceaneering.oms.appGlobals.employeeId,
            "empName": oceaneering.oms.appGlobals.employeeFullName,
            "jobPosition": oceaneering.oms.appGlobals.jobPosition,
            "jobPositionCode": oceaneering.oms.appGlobals.jobCode,
            "role": "supervisor"
        };
        var inp = {
            "projectData": this.data.projectData,
            "projectId": headerDPR.str_projid,
            "headerData": headerDPR,
            "employeeData": empData,
            "navigatingFrom": "frmDPRInfo",
            "operation": "Create",
            "isNewHeader": true,
            "creatingDPRForOtherCrew": true,
            "isBack": false
        };
        formStack.push({
            "frm": "frmDPRInfo",
            params: {
                "navigatingFrom": "frmAddDPR",
                "isBack": true
            }
        });
        formStack.push({
            "frm": "frmAddDPR",
            params: {
                "navigatingFrom": "frmCreateDPR",
                "reportDate": headerDPR.dte_reportdate,
                "projectId": headerDPR.str_projid,
                "operation": "Create",
                "employeeData": empData,
                "projectData": this.data.projectData,
                "headerData": headerDPR,
                "isBack": true
            }
        });
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
    successCallback_updateDPRStatus: function(response) {
        this.toggleLoadingIndicator(false);
        var input = {
            "msg": "DPR submitted",
            "option": "auth"
        };
        this.view.bottompopup.imgToShow.src = "greentick.png";
        this.showBottomPopUp(input);
    },
    /**
     * @desc Commom error callback for service calls
     * @param JSON error - Contains the error message and error code of service call
     * @retun void
     */
    errorCallback: function(error) {
        this.toggleLoadingIndicator(false);
        this.showBottomPopUp({
            "msg": "Sorry, something went wrong. Please try again later.",
            "option": "error"
        });
    },
    /**
     * @desc Toggles loading indicator on and off
     * @param boolean value - True: to show loading indicator, false: to hide loading indicator
     * @retun void
     */
    toggleLoadingIndicator: function(value) {
        this.view.flxLoading.setVisibility(value);
        this.view.flxMain.setEnabled(!value);
        this.view.forceLayout();
    },
    // --------------------------------- Crew Related ------------- //
    /**
     * @desc Calls a service to get the crew members for the current project
     * @param String projectId - contains the selected project id
     * @retun void
     */
    getCrewDetails: function(projectId) {
        try {
            this.crewMembers = {};
            var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
            var operationName = "dbo_crew_OMS_get";
            var data = {
                "$filter": "str_projid eq " + projectId
            };
            var headers = {};
            integrationObj.invokeOperation(operationName, headers, data, this.successCallback_GetCrewDetails.bind(this, projectId), this.errorCallback.bind(this));
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc Success callback for get crew details service
     * @param String projectId - contains the selected project id
     * @param JSON response - contains the crew members details
     * @retun void
     */
    successCallback_GetCrewDetails: function(projectId, response) {
        try {
            var crewInfo = response.crew_OMS;
            commonUtils.crewList = response.crew_OMS;
            var crewData = [];
            if (!commonUtils.checkIfEmpty(crewInfo) && crewInfo.length > 0) {
                for (var i = 0; i < crewInfo.length; i++) {
                    crewData.push({
                        "id": crewInfo[i].id,
                        "crewData": crewInfo[i],
                        "empName": crewInfo[i].str_employeeName,
                        "empId": crewInfo[i].str_employeeid,
                        "imgCrewOrSupervisor": {
                            src: (crewInfo[i].role).toLowerCase() == "supervisor" ? "superimg.png" : "crewimg.png",
                        },
                        "isSupervisor": false,
                        "role": crewInfo[i].role.toLowerCase(),
                        "jobPosition": crewInfo[i].str_jobPosition,
                        "lblNormalHours": this.isHourlyRate ? "Hourly Rate" : "Day Rate",
                        "normalRate": commonUtils.checkIfEmpty(crewInfo[i].dbl_stdrate) ? " - " : crewInfo[i].dbl_stdrate,
                        "lblStandbyHours": "Standby Rate",
                        "standbyRate": commonUtils.checkIfEmpty(crewInfo[i].dbl_standbyrate) ? " - " : crewInfo[i].dbl_standbyrate,
                        "lblOIIOTHours": "OT Rate",
                        "otRate": commonUtils.checkIfEmpty(crewInfo[i].dbl_ovtrate) ? " - " : crewInfo[i].dbl_ovtrate,
                        "lblClientOTHours": "Non-Dive Rate",
                        "nonDiveRate": commonUtils.checkIfEmpty(crewInfo[i].dbl_nondivrate) ? " - " : crewInfo[i].dbl_nondivrate,
                        "projectId": crewInfo[i].str_projid,
                        "flxEdit": {
                            isVisible: true,
                            onClick: this.onClickEditCrew.bind(this, i),
                        },
                        "lblDelete": {
                            isVisible: true,
                        },
                        "lblEdit": {
                            isVisible: true
                        },
                        "flxDelete": {
                            isVisible: crewInfo[i].role == "supervisor" ? false : true,
                            onClick: this.onClickOfDeleteCrew.bind(this, i)
                        },
                        "flxAddDpr": {
                            isVisible: false,
                            onClick: this.onClickOfCreateDPRFromCrewDetails.bind(this, i)
                        },
                        "flxEditDelContainer": {
                            isVisible: true
                        },
                        "imgAddDPR": {
                            isVisible: true
                        }
                    });
                }
                this.setCrewData(crewData, projectId);
                if (this.view.lblcrew.skin == "sknLblSelectedBottom" && commonUtils.validSupervisor) {
                    this.view.flxSettings.setVisibility(true);
                } else {
                    this.view.flxSettings.setVisibility(false);
                }
            } else {
                this.view.flxSettings.setVisibility(false);
                this.view.segCrewDetail.setVisibility(false);
                this.view.flxNoCrew.setVisibility(true);
                this.toggleLoadingIndicator(false);
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc Sets crew member details to the segment
     * @param Array of JSON crewData - contains the formated crew members details
     * @param String projectId - contains the selected project id
     * @retun void
     */
    setCrewData: function(crewData, projectId) {
        try {
            this.view.segCrewDetail.setData(crewData);
            this.view.flxNoCrew.setVisibility(false);
            this.view.segCrewDetail.setVisibility(true);
            this.toggleLoadingIndicator(false);
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    /**
     * @desc On Selecting a crew member, opens edit crew details form 
     * @param -
     * @retun void
     */
    onClickEditCrew: function(index) {
        var crew = this.view.segCrewDetail.data;
        this.onEditCrewMember(crew[index]);
    },
    /**
     * @desc On Selecting a crew member, opens edit crew details form 
     * @param -
     * @retun void
     */
    onEditCrewMember: function(data) {
        formStack.push({
            "frm": "frmDPRInfo",
            params: {
                "navigatingFrom": "frmAddCrew"
            }
        });
        commonUtils.navigateTo("frmAddCrew", {
            "crewMemberData": data.crewData,
            "projectId": data.crewData.str_projid,
            "operation": "Update",
            "isHourlyRate": this.isHourlyRate
        });
    },
    /**
     * @desc Navigates to add crew screen
     * @param -
     * @retun void
     */
    onClickOfAddCrew: function() {
        var projectId = this.view.lblProjectIdValue.text;
        var inp = {
            "projectId": projectId.trim(),
            "operation": "Add",
            "isHourlyRate": this.isHourlyRate
        };
        formStack.push({
            "frm": "frmDPRInfo",
            params: {
                "navigatingFrom": "frmAddCrew"
            }
        });
        commonUtils.navigateTo("frmAddCrew", inp);
    },
    /**
     * @desc Shows Crew Delete Confirmatin Popup
     * @param 
     * @retun void
     */
    onClickOfDeleteCrew: function(index) {
        if (commonUtils.checkIfEmpty(index)) {
            this.showBottomPopUp({
                "msg": "Sorry! Something went wrong.",
                "option": "error"
            });
            return;
        }
        var crewData = this.view.segCrewDetail.data;
        if (crewData[index].role.toLowerCase().includes("crew")) {
            var input = {
                "msg": "Sure you want to delete this crew member?",
                "option": "enable"
            };
            this.showBottomPopUp(input);
            this.view.bottompopup.imgToShow.setVisibility(false);
        }
        this.view.bottompopup.btnBottomNotNow.onClick = this.cancelDeleteCrew.bind(this);
        this.view.bottompopup.btnBottomEnable.onClick = this.confirmDeleteCrew.bind(this, crewData[index]);
    },
    /**
     * @desc Deletes a crew if added unintentionally for a project
     * @param Crew data to be deleted
     * @retun void
     */
    confirmDeleteCrew: function(crewData) {
        this.dismissBottomPopup();
        this.toggleLoadingIndicator(true);
        this.deleteCrewMember(crewData.crewData);
    },
    /**
     * @desc calls a service to delete a crew 
     * @param JSON data - contains the data required to delete crew details
     * @retun void
     */
    deleteCrewMember: function(crewMemberData) {
        var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
        var operationName = "dbo_crew_OMS_delete";
        var headers = {};
        integrationObj.invokeOperation(operationName, headers, crewMemberData, this.successCallback_deleteCrewDetails.bind(this), this.errorCallback.bind(this));
    },
    /**
     * @desc Success callback of update crew details service
     * @param JSON response - Contains the updated crew details
     * @retun void
     */
    successCallback_deleteCrewDetails: function(response) {
        this.refreshCrewDetails = true;
        this.getCrewDetails((this.view.lblProjectIdValue.text).trim());
    },
    /**
     * @desc Hides Crew Delete Confirmatin Popup
     * @param 
     * @retun void
     */
    cancelDeleteCrew: function() {
        this.dismissBottomPopup();
    },
    /**
     * @desc Navigates to create dpr screen
     * @param -
     * @retun void
     */
    onClickOfCreateDPRFromCrewDetails: function(index) {
        try {
            if (commonUtils.checkIfEmpty(index)) {
                this.showBottomPopUp({
                    "msg": "Sorry! Something went wrong.",
                    "option": "error"
                });
                return;
            }
            var data = this.view.segCrewDetail.data[index];
            var projectId = this.view.lblProjectIdValue.text;
            var headerDPR = Object.assign({}, commonUtils.dprHeader);
            headerDPR.reportId = headerDPR.str_reportid = "PROJ_" + projectId + "-" + Date.now();
            headerDPR.rmNumber = headerDPR.str_rmnumber = headerDPR.str_projid = headerDPR.str_systemid = projectId;
            headerDPR.dte_reportdate = this.formatDate(new Date()).substring(0, 10);
            headerDPR.str_supervisor = oceaneering.oms.appGlobals.employeeId;
            headerDPR.str_CreatedBy = oceaneering.oms.appGlobals.employeeId;
            headerDPR.int_CountryId = commonUtils.checkIfEmpty(this.view.lblCountryId.text) ? null : parseInt(this.view.lblCountryId.text);
            headerDPR.str_clientname = commonUtils.checkIfEmpty(this.view.lblClientValue.text) || this.view.lblClientValue.text == "-" ? null : this.view.lblClientValue.text;
            headerDPR.str_location = commonUtils.checkIfEmpty(this.view.location.text) ? null : this.view.location.text.replace(/\n/g, " ");
            headerDPR.str_ProjectActivity = commonUtils.checkIfEmpty(this.view.lblActivityId.text) || this.view.lblActivityId.text === "" ? null : this.view.lblActivityId.text;
            headerDPR.isMobileCreated = true;
            headerDPR.str_opsmanager = commonUtils.checkIfEmpty(this.view.lblManagerValue.text) || this.view.lblManagerValue.text == "-" ? null : this.view.lblManagerValue.text;
            headerDPR.bln_hourlyrate = this.view.lblRateSelected.text == "Hourly" ? true : false;
            headerDPR.lng_reporttype = 1;
            headerDPR.lng_status = 0;
            headerDPR.str_Sign = "0";
            headerDPR.bln_RejectedOnshore = false;
            headerDPR.str_lastModifiedBy = oceaneering.oms.appGlobals.employeeId;
            var role = (data.role.includes("crew")) ? "crew" : "supervisor";
            var inp = {
                "projectId": projectId.trim(),
                "isHourlyRate": this.isHourlyRate,
                "projectData": this.data.projectData,
                "navigatingFrom": "frmDPRInfo",
                "operation": "Create",
                "headerData": this.data.headerData,
                "crewData": data.crewData,
                "employeeData": {
                    "empName": data.crewData.str_employeeName,
                    "empId": data.crewData.str_employeeid,
                    "role": data.role,
                    "crewData": data.crewData
                },
                "creatingDPRForOtherCrew": true
            };
            formStack.push({
                "frm": "frmDPRInfo",
                params: inp
            });
            commonUtils.navigateTo("frmCreateDPR", inp);
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
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
    setActivities: function(arr) {
        var result = [];
        var selected = this.activities.selecetd;
        if (!commonUtils.checkIfEmpty(arr) && arr.length > 0) {
            this.activities.arr = arr;
            var input = {
                "lblValue": "None",
                "lblCheck": {
                    "skin": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == "None" ? "sknLblFilterSelected" : "sknLblFilterUnselected",
                    "text": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == "None" ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                },
                "activity": "",
                "description": "None"
            };
            result.push(input);
            for (var j = 0; j < arr.length; j++) {
                var inp = {
                    "lblValue": arr[j].description,
                    "lblCheck": {
                        "skin": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == arr[j].description ? "sknLblFilterSelected" : "sknLblFilterUnselected",
                        "text": commonUtils.checkIfEmpty(selected) ? "sknLblFilterUnselected" : selected == arr[j].description ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                    },
                    "activity": arr[j].activity,
                    "description": arr[j].description
                };
                if (arr[j].project == this.view.lblProjectIdValue.text) {
                    result.push(inp);
                }
            }
            this.view.activity.segServiceLine.setData(result);
        }
    },
    setRates: function(value) {
        var result = [];
        var inp = {
            "lblValue": "Hourly",
            "lblCheck": {
                "skin": "sknLblFilterUnselected",
                "text": commonUtils.TICKTEXTUNSEL
            }
        };
        result.push(inp);
        var inp1 = {
            "lblValue": "Daily",
            "lblCheck": {
                "skin": "sknLblFilterUnselected",
                "text": commonUtils.TICKTEXTUNSEL
            }
        };
        result.push(inp);
        this.view.rates.segServiceLine.setData(result);
        this.view.rates.segServiceLine.setVisibility(true);
    },
    onRowClickActivity: function() {
        var selected = this.view.activity.segServiceLine.selectedRowItems[0];
        this.view.lblActivitySelected.text = selected.description;
        if (selected.description == "None") {
            this.view.lblActivityId.text = "";
        } else {
            this.view.lblActivityId.text = selected.description + "," + selected.activity;
        }
        this.activities.selecetd = selected.lblValue;
        this.HideActivity(this.view.activity);
    },
    onRowClickRates: function() {
        var selected = this.view.rates.segServiceLine.selectedRowItems[0];
        this.view.lblRateSelected.text = selected.lblValue;
        this.rates.selecetd = (selected.lblValue == "Hourly") ? true : false;
        this.HideActivity(this.view.rates);
    },
    // ------------------------------- Open List bottom up ------------ //
    onClickListBottom: function(widget) {
        var self = this;
        this.view.flxMain.setEnabled(false);
        widget.flxFilterContainer.bottom = "-320dp";
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
                self.toggleLoadingIndicator(false);
            }
        });
    },
    HideActivity: function(widget) {
        var self = this;
        widget.flxFilterContainer.animate(kony.ui.createAnimation({
            "100": {
                "bottom": "-320dp",
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
                self.view.flxMain.setEnabled(true);
                widget.flxCoontainer.setVisibility(false);
            }
        });
    },
    setCountries: function() {
        var data = commonUtils.countries;
        var arr = [];
        for (var j = 0; j < data.length; j++) {
            var inp = {
                "lblValue": data[j].name,
                "code": data[j].code,
                "countryid": data[j].countryid,
                "lblCheck": {
                    skin: data[j].countryid == this.view.lblCountryId.text ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED,
                    text: data[j].countryid == this.view.lblCountryId.text ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                }
            };
            arr.push(inp);
        }
        this.view.country.segServiceLine.setData(arr);
    },
    onRowCountry: function() {
        var selected = this.view.country.segServiceLine.selectedRowItems[0];
        var data = this.view.country.segServiceLine.data;
        this.view.lblCountryValue.text = selected.lblValue;
        this.view.lblCountryId.text = selected.countryid;
        this.view.lblCountryCode.text = selected.code;
        this.HideActivity(this.view.country);
        if (!commonUtils.checkIfEmpty(this.view.lblCountryValue.text) && this.view.lblCountryValue.text !== "None") {
            for (var j = 0; j < data.length; j++) {
                if (this.view.lblCountryValue.text == data[j].lblValue) {
                    data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                    data[j].lblCheck.text = commonUtils.TICK;
                } else {
                    data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
                    data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
                }
            }
            this.view.country.segServiceLine.setData(data);
        }
    },
    showCountries: function() {
        try {
            this.toggleLoadingIndicator(true);
            this.view.country.tbxSearch.text = "";
            this.onClickListBottom(this.view.country);
        } catch (ex) {
            commonUtils.exception(this, ex);
            this.view.flxMain.setEnabled(true);
        }
    },
    onTextChangeCountry: function() {
        var data = [];
        var alldata = [];
        var selected = this.view.lblCountryValue.text;
        var str = this.view.country.tbxSearch.text;
        if (!commonUtils.checkIfEmpty(str)) {
            str = str.trim().toUpperCase();
            this.toggleLoadingIndicator(true);
            for (var j = 0; j < (commonUtils.countries).length; j++) {
                var inp = {
                    "lblValue": commonUtils.countries[j].name,
                    "code": commonUtils.countries[j].code,
                    "countryid": commonUtils.countries[j].countryid,
                    "lblCheck": {
                        skin: selected == commonUtils.countries[j].name ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED,
                        text: selected == commonUtils.countries[j].name ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                    }
                };
                if ((commonUtils.countries[j].name).includes(str)) {
                    data.push(inp);
                } else {
                    alldata.push(inp);
                }
            }
            this.view.country.segServiceLine.setData(data.length > 0 ? data : alldata);
            this.toggleLoadingIndicator(false);
        } else {
            var dat = [];
            this.toggleLoadingIndicator(true);
            for (var i = 0; i < (commonUtils.countries).length; i++) {
                var inpt = {
                    "lblValue": commonUtils.countries[i].name,
                    "code": commonUtils.countries[i].code,
                    "countryid": commonUtils.countries[i].countryid,
                    "lblCheck": {
                        skin: selected == commonUtils.countries[i].name ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED,
                        text: selected == commonUtils.countries[i].name ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
                    }
                };
                dat.push(inpt);
            }
            this.view.country.segServiceLine.setData(dat);
            this.toggleLoadingIndicator(false);
        }
    },
    onClickSaveSignature: function(response) {
        var self = this;
        var base64 = response;
        var header = Object.assign({}, this.selectedSignHeader);
        header.str_Sign = "1";
        header.dte_reportdate = (header.dte_reportdate).substring(0, 10);
        header.str_Signature = base64;
        header.str_clientcontact = this.view.tbxClient.text;
        header.str_signatureDateTime = this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0, 8);
        header.dte_lastModified = !commonUtils.checkIfEmpty(header.dte_lastModified) ? (header.dte_lastModified).substring(0, 10) + "T" + (header.dte_lastModified).substring(11, 19) : null;
        header.str_supervisor = oceaneering.oms.appGlobals.projectSupervisorId;
        header.str_supervisorName = oceaneering.oms.appGlobals.projectSupervisor;
        var popup = {
            "msg": "Error in uploading signature",
            "option": "error"
        };
        var inp = {
            "dprId": this.selectedSignHeader.str_reportid,
            "signature": base64,
            "clientRepresentativeName": this.view.tbxClient.text
        };
        commonUtils.uploadSignature(inp).then((res) => {
            commonUtils.UpdateDPRHeader(header).then((res) => {
                self.view.flxDPROverview.setVisibility(false);
                kony.timer.schedule("signature", () => {
                    self.dismissSuccess();
                    self.toggleLoadingIndicator(true);
                    self.getDPRs(self.view.lblProjectIdValue.text);
                    kony.timer.cancel("signature");
                }, 0.8, false);
                this.showSuccess("sign");
            }, (err) => {
                self.showBottomPopUp(popup);
            });
        }, (err) => {
            var er = {
                "func": "onClickSaveSignature-dpr",
                "err": err.errmsg
            };
            commonUtils.exception(this, er, true);
            self.showBottomPopUp(popup);
        });
    },
    openSignature: function() {
        var name = this.view.tbxClient.text;
        if (commonUtils.checkIfEmpty(name)) {
            var input = {
                "msg": "Please enter client representative name.",
                "option": "error"
            };
            this.showBottomPopUp(input);
        } else {
            commonUtils.navigateTo("frmSignature", {
                "clientName": this.view.lblClientName.text,
                "repName": name,
                "date": this.view.lblProjectDetailDate.text,
                "projectNo": this.view.lblProjectIdValue.text
            });
        }
    },
    toggleContainer: function(container, direction) {
        if (direction.text == commonUtils.DOWNARROW) {
            container.setVisibility(true);
            direction.text = commonUtils.UPARROW;
        } else {
            container.setVisibility(false);
            direction.text = commonUtils.DOWNARROW;
        }
    },
    addDayPersonnel: function(data) {
        if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
            var j;
            this.view.flxNameValueCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxNameValueCon.add(this.addlabelNamePsition(data[j].name, j));
            }
            this.view.flxPositionValueCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxPositionValueCon.add(this.addlabelNamePsition(data[j].position, j));
            }
            this.view.flxRegHoursCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxRegHoursCon.add(this.addLabelHours(data[j].regHours, j));
            }
            this.view.flxOvertimeCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxOvertimeCon.add(this.addLabelHours(data[j].overtime, j));
            }
            this.view.flxDaysOnboardCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxDaysOnboardCon.add(this.addLabelHours(data[j].daysOnboard, j));
            }
            this.view.flxDayShiftHeader.setVisibility(true);
            this.view.flxDayPersonnel.setVisibility(true);
        } else {
            this.view.flxDayShiftHeader.setVisibility(false);
            this.view.flxDayPersonnel.setVisibility(false);
        }
    },
    addNightPersonnel: function(data) {
        if (!commonUtils.checkIfEmpty(data) && data.length > 0) {
            var j;
            this.view.flxNightNameCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxNightNameCon.add(this.addlabelNamePsition(data[j].name, j));
            }
            this.view.flxNightPosition.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxNightPosition.add(this.addlabelNamePsition(data[j].position, j));
            }
            this.view.flxNightRegHoursCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxNightRegHoursCon.add(this.addLabelHours(data[j].regHours, j));
            }
            this.view.flxNIghtOvertimeCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxNIghtOvertimeCon.add(this.addLabelHours(data[j].overtime, j));
            }
            this.view.flxNightOnboardCon.removeAll();
            for (j = 0; j < data.length; j++) {
                this.view.flxNightOnboardCon.add(this.addLabelHours(data[j].daysOnboard, j));
            }
            this.view.flxNightShiftHEader.setVisibility(true);
            this.view.flxNightPersonnel.setVisibility(true);
        } else {
            this.view.flxNightShiftHEader.setVisibility(false);
            this.view.flxNightPersonnel.setVisibility(false);
        }
    },
    addlabelNamePsition: function(text, id) {
        return new kony.ui.Label({
            "id": "lblDayName" + id,
            "isVisible": true,
            "left": "5%",
            "maxNumberOfLines": 2,
            "skin": "sknLblSignDesc",
            "text": text,
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
    },
    addLabelHours: function(text, id) {
        return new kony.ui.Label({
            "id": "lblDayOvertime" + id,
            "isVisible": true,
            "left": "5%",
            "maxNumberOfLines": 1,
            "skin": "sknLblSignDesc",
            "text": text,
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
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
    cloneDPRPrompt: function() {
        this.view.calReportDate.dateComponents = this.getDateFromText(this.formatDate(new Date()).substring(0, 10));
        this.view.flxReportDate.setVisibility(true);
        this.view.flxMain.setEnabled(false);
        this.view.btnReportCancel.onClick = () => {
            this.view.flxReportDate.setVisibility(false);
            this.view.flxMain.setEnabled(true);
        };
        this.view.btnReportOkay.onClick = () => {
            this.view.flxReportDate.setVisibility(false);
            this.view.flxMain.setEnabled(true);
            this.cloneDPR();
        };
    },
    cloneDPR: function() {
        var self = this;
        var deviceInfo = kony.os.deviceInfo();
        this.toggleLoadingIndicator(true);
        var index = "";
        if (deviceInfo.name != "iPhone") {
            index = this.view.segDPRsHeader.selectedRowIndex[1];
        } else {
            index = this.view.segDPRsHeader.selectedIndex[1];
        }
        var data = this.view.segDPRsHeader.data[index];
        var newDprid = "PROJ_" + data.dprHeader.str_projid + "-" + Date.now();
        var promise = [];
        var dte = this.getReportDate(this.view.calReportDate);
        var time = new Date();
        var rptDate = new Date(dte);
        var headerData = Object.assign({}, data.dprHeader);
        headerData.str_reportid = newDprid;
        headerData.dte_reportdate = (dte).substring(0, 10);
        headerData.str_Sign = "0";
        headerData.lng_status = 0;
        headerData.str_Signature = null;
        headerData.str_signatureDateTime = null;
        headerData.dte_lastModified = (dte) + "T" + time.toTimeString().substring(0, 8);
        headerData.str_supervisor = oceaneering.oms.appGlobals.projectSupervisorId;
        headerData.str_supervisorName = oceaneering.oms.appGlobals.projectSupervisor;
        headerData.str_lastModifiedBy = oceaneering.oms.appGlobals.employeeId;
        var dtte = this.getReportDate(this.view.calReportDate);
        headerData.str_reportDateTime = commonUtils.getMonthWord(dtte.substr(5, 2)) + " " + parseInt(dtte.substr(8, 2)) + ", " + dtte.substr(0, 4) + " " + new Date().toTimeString().substring(0, 5);
        headerData.sja = null;
        commonUtils.getDPRWithDPRID(data.dprHeader.str_reportid).then((res) => {
            var response = res.OMS_OP_DailyReportPersonnel;
            for (var j = 0; j < response.length; j++) {
                response[j].str_dprId = newDprid;
                response[j].str_reportid = "PROJ_" + response[j].str_employeeid + "_" + Date.now();
                response[j].str_createdBy = oceaneering.oms.appGlobals.employeeId;
                response[j].dte_createdDate = dte;
                response[j].str_lastModifiedBy = oceaneering.oms.appGlobals.employeeId;
                response[j].dte_lastModifiedDate = dte;
                response[j].dte_arrival = commonUtils.checkIfEmpty(response[j].dte_arrival) ? null : (response[j].dte_arrival).substring(0, 10) + "T" + (response[j].dte_arrival).substring(11, 19);
                response[j].dte_departure = commonUtils.checkIfEmpty(response[j].dte_departure) ? null : (response[j].dte_departure).substring(0, 10) + "T" + (response[j].dte_departure).substring(11, 19);
                response[j].dte_shiftstart = commonUtils.checkIfEmpty(response[j].dte_shiftstart) ? null : (response[j].dte_shiftstart).substring(0, 10) + "T" + (response[j].dte_shiftstart).substring(11, 19);
                response[j].dte_shiftend = commonUtils.checkIfEmpty(response[j].dte_shiftend) ? null : (response[j].dte_shiftend).substring(0, 10) + "T" + (response[j].dte_shiftend).substring(11, 19);
                response[j].dte_otshiftstart = commonUtils.checkIfEmpty(response[j].dte_otshiftstart) ? null : (response[j].dte_otshiftstart).substring(0, 10) + "T" + (response[j].dte_otshiftstart).substring(11, 19);
                response[j].dte_otshiftend = commonUtils.checkIfEmpty(response[j].dte_otshiftend) ? null : (response[j].dte_otshiftend).substring(0, 10) + "T" + (response[j].dte_otshiftend).substring(11, 19);
                promise.push(commonUtils.createDPRPersonnel(response[j]));
            }
            var prmce = [];
            prmce.push(commonUtils.getDPREvents(data.dprHeader.str_reportid));
            prmce.push(commonUtils.getDPRRoaster(data.dprHeader.str_reportid));
            prmce.push(commonUtils.getDPRAssetsTools(data.dprHeader.str_reportid));
            Promise.all(prmce).then((res) => {
                // get all the Events
                if (!commonUtils.checkIfEmpty(res[0]) && res[0].length > 0) {
                    for (var j = 0; j < res[0].length > 0; j++) {
                        var events = res[0][j];
                        events.str_reportid = Date.now();
                        events.str_report_id = newDprid; // used this to fetch the events
                        // related to particular dpr id
                        events.str_systemid = "PROJ_" + data.dprHeader.str_projid;
                        promise.push(commonUtils.addDPREvent(events));
                    }
                }
                //get all the Roster
                if (!commonUtils.checkIfEmpty(res[1]) && res[1].length > 0) {
                    for (var i = 0; i < res[1].length > 0; i++) {
                        var roster = res[1][i];
                        roster.str_report_id = newDprid;
                        roster.str_reportid = Date.now();
                        roster.str_date = this.formatDate(new Date());
                        promise.push(commonUtils.addDPRRoaster(roster));
                    }
                }
                if (!commonUtils.checkIfEmpty(res[2]) && res[2].length > 0) {
                    for (var k = 0; k < res[2].length > 0; k++) {
                        var assetsTools = res[2][k];
                        assetsTools.str_report_id = newDprid;
                        assetsTools.str_reportId = Date.now();
                        assetsTools.dte_startDate = (commonUtils.checkIfEmpty(assetsTools.dte_startDate) || assetsTools.dte_startDate == "None") ? null : (assetsTools.dte_startDate).substring(0, 10);
                        assetsTools.dte_endDate = (commonUtils.checkIfEmpty(assetsTools.dte_endDate) || assetsTools.dte_endDate == "None") ? null : (assetsTools.dte_endDate).substring(0, 10);
                        promise.push(commonUtils.addDPRAssetsTools(assetsTools));
                    }
                }
                commonUtils.createDPRHeader(headerData).then((res) => {
                    Promise.all(promise).then((res) => {
                        this.toggleLoadingIndicator(false);
                        kony.timer.schedule("clone", () => {
                            kony.timer.cancel("clone");
                            self.dismissSuccess();
                            self.toggleLoadingIndicator(true);
                            self.getDPRs(data.dprHeader.str_projid);
                        }, 0.8, false);
                        this.showSuccess("clone");
                    }, (err) => {
                        var er = {
                            "func": "cloneDPR-Promise",
                            "err": err.errmsg
                        };
                        commonUtils.exception(this, er, true);
                        this.showBottomPopUp();
                    });
                }, (err) => {
                    var er = {
                        "func": "cloneDPR-createDPRHeader",
                        "err": err.errmsg
                    };
                    commonUtils.exception(this, er, true);
                    this.showBottomPopUp();
                });
            }, (res) => {
                var er = {
                    "func": "cloneDPR-Promise",
                    "err": err.errmsg
                };
                commonUtils.exception(this, er, true);
                this.showBottomPopUp();
            });
        }, (err) => {
            var er = {
                "func": "cloneDPR",
                "err": err
            };
            commonUtils.exception(this, er, true);
            this.showBottomPopUp();
        });
    },
    showSuccess: function(input) {
        var self = this;
        if (input == "save") {
            this.view.lblSaved.text = " Saved successfully";
        } else if (input == "clone") {
            this.view.lblSaved.text = " DPR cloned";
        } else if (input == "sign") {
            this.view.lblSaved.text = " Signature saved";
        } else if (input == "recover") {
            this.view.lblSaved.text = " DPR recoverd";
        } else if (input == "delete") {
            this.view.lblSaved.text = " DPR deleted";
        } else if (input == "filter") {
            this.view.lblSaved.text = " Filter Applied";
        } else {
            this.view.lblSaved.text = " DPR submitted";
        }
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
            "duration": 0.6
        }, {
            "animationEnd": () => {
                self.view.flxSuccessStatus.setVisibility(true);
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
            "duration": 0.6
        }, {
            "animationEnd": () => {
                self.view.flxSuccessStatus.setVisibility(false);
            }
        });
    }
});
define("frmDPRInfoControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_je3c1da4463d40d6809d536620973afb: function AS_FlexContainer_je3c1da4463d40d6809d536620973afb(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onPull defined for segDPRsHeader **/
    AS_Segment_b4e68a17b74e4616847f69f18fc6d110: function AS_Segment_b4e68a17b74e4616847f69f18fc6d110(eventobject) {
        var self = this;
        this.getDPRs(this.view.lblProjectIdValue.text);
    },
    /** onPush defined for segDPRsHeader **/
    AS_Segment_a297e8fa51854b049464ab3d5d41973d: function AS_Segment_a297e8fa51854b049464ab3d5d41973d(eventobject) {
        var self = this;
        kony.print("");
    },
    /** onClick defined for flxDPRHeaderBack **/
    AS_FlexContainer_ea3b405b3ebe4355a3d8490483ff1a5b: function AS_FlexContainer_ea3b405b3ebe4355a3d8490483ff1a5b(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for btnReportCancel **/
    AS_Button_ha0fd4e4cbc04a67981b150e487550c4: function AS_Button_ha0fd4e4cbc04a67981b150e487550c4(eventobject) {
        var self = this;
    },
    /** onClick defined for flxFiltersInner **/
    AS_FlexContainer_c59c1c8686db45ac87ae8d21c5eeebfc: function AS_FlexContainer_c59c1c8686db45ac87ae8d21c5eeebfc(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    },
    /** onClick defined for flxFilterIcon **/
    AS_FlexContainer_d32c484a77e045d681d4c6ec09047e9e: function AS_FlexContainer_d32c484a77e045d681d4c6ec09047e9e(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    },
});
define("frmDPRInfoController", ["userfrmDPRInfoController", "frmDPRInfoControllerActions"], function() {
    var controller = require("userfrmDPRInfoController");
    var controllerActions = ["frmDPRInfoControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
