/**
 * @Description - Contains the functionality of the add/update crew Form
 * @author - Amritpal Singh
 */
define("userfrmAddCrewController", {
    crewMemberDetails: {},
    projectId: "",
    isHourlyRate: true,
    limit: 1,
    totalCount: 0,
    /**
     * @desc MVC navigation function
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    onNavigate: function(data) {
        this.limit = 1;
        commonUtils.addbottompopup(this);
        this.toggleSearchCrewResults(false);
        this.initializeJSModules(data.operation, data.projectId, data.crewMemberData, data.isHourlyRate);
        this.view.preShow = this.preShow.bind(this, data);
        this.view.postShow = this.postShow.bind(this);
        this.bindActions();
    },
    preShow: function(data) {
        this.view.flxBody.setEnabled(true);
        this.view.flxJobSearchPopUp.setVisibility(false);
        this.getCrewPositions();
        this.dismissBottomPopup();
    },
    postShow: function() {},
    bindActions: function() {
        var self = this;
        this.view.flxBack.onClick = this.onClickOfBack.bind(this);
        this.view.btnCancel.onClick = this.onClickOfBack.bind(this);
        this.view.flxSaveDPR.onClick = this.onClickOfDone.bind(this);
        this.view.flxImgSearch.onClick = this.onDoneInSearch.bind(this);
        this.view.txtCrewSearch.onDone = this.onDoneInSearch.bind(this);
        this.view.segCrewSearchResults.onRowClick = this.onSelectionOfCrew.bind(this);
        this.view.flxJobPositionCon.onClick = this.showJobPositions.bind(this);
        this.view.imgCross.onTouchStart = () => {
            self.view.flxJobSearchPopUp.setVisibility(false);
            self.view.flxBody.setEnabled(true);
        };
        this.view.txtSearchjob.onDone = this.fetchJobPostions.bind(this);
        this.view.flxSearchjob.onClick = this.fetchJobPostions.bind(this);
        this.view.segJobPosition.onRowClick = this.onRowClickjobPosition.bind(this);
        this.view.flxCrewPositionDown.onClick = this.onCrewPositionFlxClick.bind(this);
        this.view.crewPosition.segServiceLine.onRowClick = this.onRowCrewPosition.bind(this);
        this.view.crewPosition.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.crewPosition);
        this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
        this.view.flxCancelSearch.onClick = () => {
            this.view.flxCrewSearchResults.setVisibility(false);
        };
        this.view.flxReset.onClick = this.onResetClick.bind(this);
        var regex = RegExp(/^\d*\.?\d*$/);
        this.view.txtDayHourRate.onTextChange = () => {
            var value = this.view.txtDayHourRate.text;
            if (!commonUtils.checkIfEmpty(value) && !regex.test(value)) {
                self.view.txtDayHourRate.text = value.substr(0, value.length - 1);
            }
        };
        this.view.txtOTRate.onTextChange = () => {
            var value = this.view.txtOTRate.text;
            if (!commonUtils.checkIfEmpty(value) && !regex.test(value)) {
                self.view.txtOTRate.text = value.substr(0, value.length - 1);
            }
        };
        this.view.txtStandByRate.onTextChange = () => {
            var value = this.view.txtStandByRate.text;
            if (!commonUtils.checkIfEmpty(value) && !regex.test(value)) {
                self.view.txtStandByRate.text = value.substr(0, value.length - 1);
            }
        };
        this.view.txtNonDiveRate.onTextChange = () => {
            var value = this.view.txtNonDiveRate.text;
            if (!commonUtils.checkIfEmpty(value) && !regex.test(value)) {
                self.view.txtNonDiveRate.text = value.substr(0, value.length - 1);
            }
        };
    },
    onResetClick: function() {
        this.view.txtDayHourRate.text = "";
        this.view.txtOTRate.text = "";
        this.view.txtStandByRate.text = "";
        this.view.txtNonDiveRate.text = "";
        this.view.cldArrivalDate.clear();
        this.view.cldArrivalDate.placeholder = "----/--/--";
        this.view.cldDepartDate.clear();
        this.view.cldDepartDate.placeholder = "----/--/--";
    },
    onRowClickjobPosition: function() {
        var data = this.view.segJobPosition.selectedRowItems[0];
        this.view.lblJobPositionValue.text = data.lblValue;
        this.view.lblJobPositionCode.text = data.code;
        this.view.flxJobSearchPopUp.setVisibility(false);
        this.view.flxBody.setEnabled(true);
    },
    fetchJobPostions: function() {
        var data = [];
        var self = this;
        var searchText = this.view.txtSearchjob.text;
        if (!commonUtils.checkIfEmpty(searchText)) {
            this.toggleLoadingIndicator(true);
            commonUtils.jobCode(searchText).then((res) => {
                for (var j = 0; j < res.length; j++) {
                    var inp = {
                        "lblValue": res[j].title,
                        "lblCheck": {
                            isVisible: false,
                            skin: commonUtils.TICKUNSELECTED,
                            text: commonUtils.TICKTEXTUNSEL
                        },
                        "code": res[j].code
                    };
                    data.push(inp);
                }
                self.view.flxNoResult.setVisibility(false);
                self.view.segJobPosition.setData(data);
                self.view.segJobPosition.setVisibility(true);
                self.toggleLoadingIndicator(false);
            }, (err) => {
                self.toggleLoadingIndicator(false);
                self.view.segJobPosition.setVisibility(false);
                self.view.flxNoResult.setVisibility(true);
                self.view.segJobPosition.setVisibility(false);
            });
        }
    },
    onCrewPositionFlxClick: function() {
        var data = this.view.crewPosition.segServiceLine.data;
        var selected = this.view.lblCrewPositionValue.text;
        if (!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(selected)) {
            for (var j = 0; j < data.length; j++) {
                if (data[j].lblValue == selected) {
                    data[j].lblCheck.skin = commonUtils.TICKSELECTED;
                    data[j].lblCheck.text = commonUtils.TICK;
                }
            }
            this.view.crewPosition.segServiceLine.setData(data);
        }
        this.onClickListBottom(this.view.crewPosition);
    },
    showJobPositions: function() {
        this.view.segJobPosition.setData([]);
        if (!commonUtils.checkIfEmpty(this.view.lblJobPositionValue.text) && this.view.lblJobPositionValue.text !== "None") {
            var inp = {
                "lblValue": this.view.lblJobPositionValue.text,
                "lblCheck": {
                    skin: commonUtils.TICKSELECTED,
                    text: commonUtils.TICK
                }
            };
            var data = [];
            data.push(inp);
            this.view.segJobPosition.setData(data);
            this.view.segJobPosition.setVisibility(true);
        }
        this.view.txtSearchjob.text = "";
        this.view.flxJobSearchPopUp.setVisibility(true);
        this.view.flxBody.setEnabled(false);
    },
    /**
     * @desc Initializes all the JS modules required in this form
     * @param String operation - contains the operation to be performed i.e. add or update
     * @param String projectId - contains the current project id
     * @param JSON crewMemberData - contains the crew member details in case of update
     * @retun void
     */
    initializeJSModules: function(operation, projectId, crewMemberData, isHourlyRate) {
        this.isHourlyRate = isHourlyRate;
        this.checkOperation(operation, projectId, crewMemberData);
    },
    /**
     * @desc Checks the next operation to be performed
     * @param String operation - contains the operation to be performed i.e. add or update
     * @param String projectId - contains the current project id
     * @param JSON crewMemberData - contains the crew member details in case of update
     * @retun void
     */
    checkOperation: function(operation, projectId, crewMemberData) {
        if (operation == "Add") {
            this.setAddLayout(projectId);
        } else if (operation == "Update") {
            this.setUpdateLayout(crewMemberData);
        }
    },
    /**
     * @desc Resets screen layout according to add operation
     * @param String projectId - contains the current project id
     * @retun void
     */
    setAddLayout: function(projectId) {
        this.projectId = projectId;
        this.crewMemberDetails = {};
        this.resetAddCrewForm();
        this.view.lblTitle.text = "Add Crew";
        this.view.flxCrewSearch.setVisibility(true);
    },
    /**
     * @desc Reset all add crew data to empty
     * @param boolean loadCrewPosition - true: if crew positions needs to be loaded else false
     * @retun void
     */
    resetAddCrewForm: function() {
        this.view.lblNameValue.text = this.view.lblEmpIDValue.text = "";
        this.view.lblJobPositionValue.text = "None";
        this.view.lblCrewPositionValue.text = "None";
        this.view.txtOTRate.text = "";
        this.view.txtDayHourRate.text = this.view.txtStandByRate.text = "";
        this.view.txtNonDiveRate.text = this.view.txtCrewSearch.text = "";
        this.view.lblDayHourRate.text = (this.isHourlyRate) ? "Hourly Rate" : "Day Rate";
        this.view.cldArrivalDate.clear();
        this.view.cldDepartDate.clear();
        this.view.cldArrivalDate.placeholder = "----/--/--";
        this.view.cldDepartDate.placeholder = "----/--/--";
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
     * @desc Resets screen layout according to the update operation
     * @param JSON crewMemberData - contains the crew member details
     * @retun void
     */
    setUpdateLayout: function(crewMemberData) {
        this.projectId = "";
        this.crewMemberDetails = crewMemberData;
        this.view.lblTitle.text = "Update Crew Details";
        this.view.flxCrewSearch.setVisibility(false);
        this.setCrewMemberDetails();
    },
    /**
     * @desc Sets the crew member details in the form
     * @param -
     * @retun void
     */
    setCrewMemberDetails: function() {
        try {
            this.view.lblNameValue.text = this.crewMemberDetails.str_employeeName;
            this.view.lblEmpIDValue.text = this.crewMemberDetails.str_employeeid;
            this.view.lblJobPositionValue.text = commonUtils.checkIfEmpty(this.crewMemberDetails.str_jobPosition) ? "None" : this.crewMemberDetails.str_jobPosition;
            this.view.lblJobPositionCode.text = this.crewMemberDetails.str_positioncode;
            this.view.lblCrewPositionValue.text = commonUtils.checkIfEmpty(this.crewMemberDetails.str_crewPosition) ? "None" : this.crewMemberDetails.str_crewPosition;
            this.view.lblCrewPositionId.text = this.crewMemberDetails.str_crewpositioncode;
            this.view.txtOTRate.text = (commonUtils.checkIfEmpty(this.crewMemberDetails.dbl_ovtrate) || this.crewMemberDetails.dbl_ovtrate == "-") ? "" : (this.crewMemberDetails.dbl_ovtrate).toString();
            this.view.lblDayHourRate.text = (this.isHourlyRate) ? "Hourly" : "Daily";
            if (this.isHourlyRate) {
                this.view.lblDayHourRate.text = "Hourly Rate";
            } else {
                this.view.lblDayHourRate.text = "Day Rate";
            }
            this.view.txtDayHourRate.text = (commonUtils.checkIfEmpty(this.crewMemberDetails.dbl_stdrate) || this.crewMemberDetails.dbl_stdrate == "-") ? "" : (this.crewMemberDetails.dbl_stdrate).toString();
            this.view.txtStandByRate.text = (commonUtils.checkIfEmpty(this.crewMemberDetails.dbl_standbyrate) || this.crewMemberDetails.dbl_standbyrate == "-") ? "" : (this.crewMemberDetails.dbl_standbyrate).toString();
            this.view.txtNonDiveRate.text = (commonUtils.checkIfEmpty(this.crewMemberDetails.dbl_nondivrate) || this.crewMemberDetails.dbl_nondivrate == "-") ? "" : (this.crewMemberDetails.dbl_nondivrate).toString();
            this.view.cldArrivalDate.dateComponents = (commonUtils.checkIfEmpty(this.crewMemberDetails.dte_arrival)) ? [] : this.getDateFromText((this.crewMemberDetails.dte_arrival).substring(0, 10));
            this.view.cldDepartDate.dateComponents = (commonUtils.checkIfEmpty(this.crewMemberDetails.dtr_departure)) ? [] : this.getDateFromText((this.crewMemberDetails.dtr_departure).substring(0, 10));
            this.view.txtCrewSearch.text = "";
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Calls a service to get all the available values for crew position
     * @param -
     * @retun void
     */
    getCrewPositions: function() {
        try {
            var self = this;
            commonUtils.crewPosition().then((res) => {
                self.successCallback_getCrewPositions(res);
            }, (err) => {
                self.errorCallback(err);
            });
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    onRowCrewPosition: function() {
        var selected = this.view.crewPosition.segServiceLine.selectedRowItems[0];
        this.view.lblCrewPositionValue.text = selected.lblValue;
        this.view.lblCrewPositionId.text = selected.code;
        this.HideActivity(this.view.crewPosition);
        this.view.flxMain.setEnabled(true);
    },
    /**
     * @desc Success callback of get crew position service
     * @param JSON response - Contains the crew positions
     * @retun void
     */
    successCallback_getCrewPositions: function(response) {
        var crewPositionData = [];
        for (var i = 0; i < response.length; i++) {
            var inp = {
                "lblValue": response[i].title,
                "lblCheck": {
                    skin: commonUtils.TICKUNSELECTED,
                    text: commonUtils.TICKTEXTUNSEL
                },
                "code": response[i].code.trim()
            };
            crewPositionData.push(inp);
        }
        this.view.crewPosition.segServiceLine.setData(crewPositionData);
    },
    /**
     * @desc On done in search crew member
     * @param -
     * @retun void
     */
    onDoneInSearch: function() {
        var searchText = this.view.txtCrewSearch.text;
        if (!commonUtils.checkIfEmpty(searchText) && searchText.length >= 2) {
            this.getCrewSearchResults(searchText);
        } else {
            this.showErrorMessage("Please enter 2 or more characters to search");
        }
    },
    /**
     * @desc calls a service to get the crew search results
     * @param String searchText - Contains the search string
     * @retun void
     */
    getCrewSearchResults: function(searchText) {
        this.toggleLoadingIndicator(true);
        this.limit = 1;
        var inp = {
            searchText: searchText,
            limit: 0
        };
        commonUtils.employeeSearch(inp).then((res) => {
            this.successCallback_GetCrewSearchResults(res);
        }, (err) => {
            this.errorCallback_GetCrewSearchResults();
        });
    },
    /**
     * @desc Success callback of get crew search result service
     * @param JSON response - Contains the searched crew members
     * @retun void
     */
    successCallback_GetCrewSearchResults: function(response) {
        if (commonUtils.checkIfEmpty(response)) {
            this.view.segCrewSearchResults.setVisibility(false);
            this.view.flxCrewSearchResults.setVisibility(false);
            this.toggleLoadingIndicator(false);
            this.showErrorMessage("No results found");
        } else {
            var arr = [];
            this.limit = this.limit + 1;
            var employeeData = response;
            this.totalCount = response.length;
            for (var j = 0; j < response.length && j < 30; j++) {
                var inpt = {
                    "lblValue": response[j].fullName,
                    "lblCheck": {
                        isVisible: false,
                        skin: commonUtils.TICKUNSELECTED,
                        text: commonUtils.TICKTEXTUNSEL
                    },
                    "empid": response[j].employeeId,
                };
                arr.push(inpt);
            }
            this.view.segCrewSearchResults.setData(arr);
            this.view.lblTotalCount.text = arr.length + " of " + this.totalCount + " results found.";
            this.view.segCrewSearchResults.setVisibility(true);
            this.view.flxCrewSearchResults.setVisibility(true);
            this.toggleLoadingIndicator(false);
        }
    },
    getEmployeeSearchEnd: function() {
        this.toggleLoadingIndicator(true);
        var searchText = this.view.txtCrewSearch.text;
        var inp = {
            searchText: searchText,
            limit: this.limit
        };
        commonUtils.employeeSearch(inp).then((response) => {
            if (!commonUtils.checkIfEmpty(response) && response.length > 0) {
                this.limit = this.limit + 1;
                var arr = [];
                var employeeData = response;
                for (var j = 0; j < response.length; j++) {
                    var inpt = {
                        "lblValue": response[j].fullName,
                        "lblCheck": {
                            isVisible: false,
                            skin: commonUtils.TICKUNSELECTED,
                            text: commonUtils.TICKTEXTUNSEL
                        },
                        "empid": response[j].employeeId,
                    };
                    arr.push(inpt);
                }
                this.view.segCrewSearchResults.addAll(arr);
                this.view.lblTotalCount.text = this.view.segCrewSearchResults.data.length + " of " + this.totalCount + " results found";
                this.view.segCrewSearchResults.setVisibility(true);
                this.view.flxCrewSearchResults.setVisibility(true);
                this.toggleLoadingIndicator(false);
            } else {
                this.toggleLoadingIndicator(false);
            }
        }, (err) => {
            this.errorCallback_GetCrewSearchResults();
        });
    },
    /**
     * @desc Commom error callback for get crew search results service calls
     * @param JSON error - Contains the error message and error code of get crew search results service call
     * @retun void
     */
    errorCallback_GetCrewSearchResults: function(error) {
        this.toggleSearchCrewResults(false);
        this.showErrorMessage();
    },
    /**
     * @desc On Selectioon of crew member from search results
     * @param -
     * @retun void
     */
    onSelectionOfCrew: function() {
        try {
            var self = this;
            var selectedCrewDetails = this.view.segCrewSearchResults.selectedRowItems[0];
            var deviceInfo = kony.os.deviceInfo();
            var index = "";
            if (deviceInfo.name != "iPhone") {
                index = this.view.segCrewSearchResults.selectedRowIndex[1];
            } else {
                index = this.view.segCrewSearchResults.selectedIndex[1];
            }
            var empid = selectedCrewDetails.empid;
            this.view.flxCrewSearchResults.setVisibility(false);
            var filteredArray = commonUtils.crewList.filter(crew => crew.str_employeeid == empid);
            if (filteredArray.length > 0) {
                this.toggleLoadingIndicator(false);
                this.showErrorMessage("Selected crew memebr is already a part of this project.");
                this.view.bottompopup.imgToShow.setVisibility(false);
            } else {
                this.toggleLoadingIndicator(true);
                self.toggleSearchCrewResults(false);
                commonUtils.employeeDetails(empid).then((res) => {
                    self.view.lblEmpIDValue.text = res.employeeId;
                    self.view.lblNameValue.text = res.firstName + " " + res.lastName;
                    self.view.lblJobPositionValue.text = res.jobCodeTitle;
                    self.view.txtCrewSearch.text = res.firstName + " " + res.lastName;
                    commonUtils.jobCode(res.jobCode).then((response) => {
                        if (!commonUtils.checkIfEmpty(response) && response.length > 0) {
                            self.view.lblJobPositionValue.text = response[0].title;
                            self.view.lblJobPositionCode.text = res.jobCode;
                        } else {
                            self.view.lblJobPositionValue.text = "None";
                        }
                        self.toggleLoadingIndicator(false);
                    }, (err) => {
                        self.toggleLoadingIndicator(false);
                    });
                }, (err) => {
                    this.showErrorMessage();
                });
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Checks all the validation before adding crew
     * @param -
     * @retun void
     */
    onClickOfDone: function() {
        try {
            if (commonUtils.checkIfEmpty(this.view.lblEmpIDValue.text)) {
                this.showErrorMessage("Please select a crew member");
            } else if (commonUtils.checkIfEmpty(this.view.lblJobPositionValue.text) || this.view.lblJobPositionValue.text == "None" || commonUtils.checkIfEmpty(this.view.lblCrewPositionValue.text) || this.view.lblCrewPositionValue.text == "None") {
                this.showErrorMessage("Please enter all the required information.");
            } else {
                this.checkNextOperation();
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Checks whether crew member needs to be added or updated
     * @param -
     * @retun void
     */
    checkNextOperation: function() {
        this.toggleLoadingIndicator(true);
        if (this.view.lblTitle.text == "Add Crew") {
            this.prepareAddCrewData();
        } else {
            this.prepareUpdateCrewData();
        }
    },
    /**.
     * @desc Prepares data required to add crew details
     * @param -
     * @retun void
     */
    prepareAddCrewData: function() {
        try {
            var self = this;
            var data = {
                "str_employeeid": this.view.lblEmpIDValue.text,
                "str_employeeName": this.view.lblNameValue.text,
                "role": "crew",
                "str_projid": this.projectId,
                "str_crewPosition": this.view.lblCrewPositionValue.text == "None" ? "" : this.view.lblCrewPositionValue.text,
                "str_crewpositioncode": commonUtils.checkIfEmpty(this.view.lblCrewPositionId.text) ? "" : parseInt(this.view.lblCrewPositionId.text),
                "str_jobPosition": commonUtils.checkIfEmpty(this.view.lblJobPositionValue.text) || this.view.lblJobPositionValue.text == "None" ? "" : this.view.lblJobPositionValue.text,
                "str_positioncode": this.view.lblJobPositionCode.text,
                "dte_arrival": this.convertDateArrayToString(this.view.cldArrivalDate.dateComponents),
                "dtr_departure": this.convertDateArrayToString(this.view.cldDepartDate.dateComponents),
                "dbl_stdrate": commonUtils.checkIfEmpty(this.view.txtDayHourRate.text) ? null : this.view.txtDayHourRate.text,
                "dbl_ovtrate": commonUtils.checkIfEmpty(this.view.txtOTRate.text) ? null : this.view.txtOTRate.text,
                "dbl_standbyrate": commonUtils.checkIfEmpty(this.view.txtStandByRate.text) ? null : this.view.txtStandByRate.text,
                "dbl_nondivrate": commonUtils.checkIfEmpty(this.view.txtNonDiveRate.text) ? null : this.view.txtNonDiveRate.text,
                "str_createdBy": oceaneering.oms.appGlobals.employeeId,
                "dte_createdDate": this.formatDate(new Date()),
                "str_lastModifiedBy": oceaneering.oms.appGlobals.employeeId,
                "dte_lastModifiedDate": this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0, 8),
            };
            if (this.arrivalDeparture()) {
                commonUtils.createCrewInfo(data).then((res) => {
                    kony.timer.schedule("saved", () => {
                        kony.timer.cancel("saved");
                        self.dismissSuccess();
                        self.successCallback_AddCrewDetails();
                    }, 0.6, false);
                    this.showSuccess();
                }, (err) => {
                    this.errorCallback(err);
                });
            } else {
                this.toggleLoadingIndicator(false);
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Success callback of add crew details service
     * @param JSON response - Contains the added crew details
     * @retun void
     */
    successCallback_AddCrewDetails: function(response) {
        this.toggleLoadingIndicator(false);
        this.onClickOfBack();
    },
    /**
     * @desc Prepares data required to update crew details
     * @param -
     * @retun void
     */
    prepareUpdateCrewData: function() {
        try {
            var data = {
                "id": this.crewMemberDetails.id,
                "str_employeeid": this.crewMemberDetails.str_employeeid,
                "str_employeeName": this.view.lblNameValue.text,
                "role": this.crewMemberDetails.role,
                "str_projid": this.crewMemberDetails.str_projid,
                "str_crewPosition": this.view.lblCrewPositionValue.text == "None" ? "" : this.view.lblCrewPositionValue.text,
                "str_crewpositioncode": commonUtils.checkIfEmpty(this.view.lblCrewPositionId.text) ? "" : parseInt(this.view.lblCrewPositionId.text),
                "str_jobPosition": this.view.lblJobPositionValue.text,
                "str_positioncode": this.view.lblJobPositionCode.text,
                "dte_arrival": this.convertDateArrayToString(this.view.cldArrivalDate.dateComponents),
                "dtr_departure": this.convertDateArrayToString(this.view.cldDepartDate.dateComponents),
                "dbl_stdrate": commonUtils.checkIfEmpty(this.view.txtDayHourRate.text) ? null : (this.view.txtDayHourRate.text),
                "dbl_ovtrate": commonUtils.checkIfEmpty(this.view.txtOTRate.text) ? null : (this.view.txtOTRate.text),
                "dbl_standbyrate": commonUtils.checkIfEmpty(this.view.txtStandByRate.text) ? null : (this.view.txtStandByRate.text),
                "dbl_nondivrate": commonUtils.checkIfEmpty(this.view.txtNonDiveRate.text) ? null : (this.view.txtNonDiveRate.text),
                "str_createdBy": this.crewMemberDetails.str_createdBy,
                "dte_createdDate": commonUtils.checkIfEmpty(this.crewMemberDetails.dte_createdDate) ? null : this.crewMemberDetails.dte_createdDate.substring(0, 10),
                "str_lastModifiedBy": oceaneering.oms.appGlobals.employeeId,
                "dte_lastModifiedDate": this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0, 8)
            };
            if (this.arrivalDeparture()) {
                commonUtils.updateCrewInfo(data).then((res) => {
                    kony.timer.schedule("addCrew", () => {
                        kony.timer.cancel("addCrew");
                        this.dismissSuccess();
                        this.successCallback_UpdateCrewDetails();
                    }, 0.6, false);
                    this.showSuccess();
                }, (err) => {
                    this.errorCallback(err);
                });
            } else {
                this.toggleLoadingIndicator(false);
            }
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    /**
     * @desc Success callback of update crew details service
     * @param JSON response - Contains the updated crew details
     * @retun void
     */
    successCallback_UpdateCrewDetails: function(response) {
        this.toggleLoadingIndicator(false);
        this.onClickOfBack();
    },
    /**
     * @desc Toggles search results visibility on and off
     * @param boolean value - True to show search results else false
     * @retun void
     */
    toggleSearchCrewResults: function(value) {
        this.view.flxCrewSearchResults.setVisibility(value);
    },
    /**
     * @desc Navigates back to DPR Info screen
     * @param -
     * @retun void
     */
    onClickOfBack: function() {
        var inp = commonUtils.getPreviousForm();
        commonUtils.navigateTo(inp.frm, {
            "navigatingFrom": "frmAddCrew",
            "isBack": true
        });
        formStack.pop();
        kony.application.destroyForm("frmAddCrew");
    },
    /**
     * @desc Toggles loading indicator on and off
     * @param boolean value - True: to show loading indicator, false: to hide loading indicator
     * @retun void
     */
    toggleLoadingIndicator: function(value) {
        this.view.flxLoading.setEnabled(!value);
        this.view.flxLoading.setVisibility(value);
        this.view.flxMain.setEnabled(!value);
    },
    /**
     * @desc Commom error callback for service calls
     * @param JSON error - Contains the error message and error code of service call
     * @retun void
     */
    errorCallback: function(error) {
        this.showErrorMessage();
    },
    /**
     * @desc Shows the common error message
     * @param -
     * @retun void
     */
    showErrorMessage: function(text) {
        this.toggleLoadingIndicator(false);
        var inp = {
            "msg": commonUtils.checkIfEmpty(text) ? "Sorry, something went worng. please try again." : text,
            "option": "error"
        };
        this.showBottomPopUp(inp);
    },
    decimalTextBox: function() {
        this.view.txtDayHourRate.keyBoardStyle = constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL;
        this.view.txtNonDiveRate.keyBoardStyle = constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL;
        this.view.txtOTRate.keyBoardStyle = constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL;
        this.view.txtStandByRate.keyBoardStyle = constants.TEXTBOX_KEY_BOARD_STYLE_DECIMAL;
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
     * @desc Converts date array to date string
     * @param array dateArray - Contains a date array of a date to be converted into string
     * @retun String - YYYY-MM-DD date
     */
    convertDateArrayToString: function(dateArray) {
        var day = '' + dateArray[0],
            month = '' + dateArray[1],
            year = dateArray[2];
        if (month.length < 2) month = '0' + month;
        if (day.length < 2) day = '0' + day;
        if (year == "-1" || year == -1 || year === 0 || year == "0" || day == "00") {
            return null;
        }
        return year + "-" + month + "-" + day;
    },
    dismissPopUp: function() {
        this.view.flxMain.setEnabled(true);
    },
    // ------------- show Error Pop Up form bottom --------- //
    showBottomPopUp: function(input) {
        var self = this;
        this.resetBottomPopUp();
        this.toggleLoadingIndicator(false);
        this.view.bottompopup.lblBottomMessage.text = input.msg;
        this.view.bottompopup.flxBottomPopUp.height = "210dp";
        switch (input.option) {
            case "enable":
                {
                    this.view.bottompopup.flxEnableTouch.setVisibility(true);
                    this.view.bottompopup.imgToShow.setVisibility(true);
                    this.view.bottompopup.lblBottomMessage.bottom = "100dp";
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
                    this.view.bottompopup.lblBottomMessage.bottom = "100dp";
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
    // ------------------------------- Open List bottom up ------------ //
    onClickListBottom: function(widget) {
        var self = this;
        this.view.flxMain.setEnabled(false);
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
    },
    HideActivity: function(widget) {
        var self = this;
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
                self.view.flxMain.setEnabled(true);
                widget.flxCoontainer.setVisibility(false);
            }
        });
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
            "duration": 0.5
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
    },
    arrivalDeparture: function() {
        var arrival = this.getReportDate(this.view.cldArrivalDate);
        var departure = this.getReportDate(this.view.cldDepartDate);
        if (!commonUtils.checkIfEmpty(arrival) && !commonUtils.checkIfEmpty(departure)) {
            arrival = Date.parse(new Date(arrival));
            departure = Date.parse(new Date(departure));
            if (arrival > departure) {
                var inp = {
                    "msg": "Arrival date is greater than departure date.",
                    "option": "error"
                };
                this.showBottomPopUp(inp);
                return false;
            }
        }
        return true;
    },
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
});
define("frmAddCrewControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c26f66396c174e1996027f6f7a3db69e: function AS_FlexContainer_c26f66396c174e1996027f6f7a3db69e(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onDone defined for txtCrewSearch **/
    AS_TextField_i846a022893c4088a4b93a31e2e05637: function AS_TextField_i846a022893c4088a4b93a31e2e05637(eventobject, changedtext) {
        var self = this;
        this.onDoneInSearch();
    },
    /** onDone defined for txtSearchjob **/
    AS_TextField_b9f79743952548a383185fb311bdc574: function AS_TextField_b9f79743952548a383185fb311bdc574(eventobject, changedtext) {
        var self = this;
        this.onDoneInSearch();
    },
    /** onRowClick defined for segJobPosition **/
    AS_Segment_b2e5ab91b5f44aed8d7b44fe1b765ed0: function AS_Segment_b2e5ab91b5f44aed8d7b44fe1b765ed0(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSelectionOfCrew();
    },
    /** onRowClick defined for segCrewSearchResults **/
    AS_Segment_f75d3dff33764b7daf459fb19f3ad2ca: function AS_Segment_f75d3dff33764b7daf459fb19f3ad2ca(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSelectionOfCrew();
    },
    /** onReachingEnd defined for segCrewSearchResults **/
    AS_Segment_af5e01ab40d64d8ea6aa54b4f5ff3918: function AS_Segment_af5e01ab40d64d8ea6aa54b4f5ff3918(eventobject) {
        var self = this;
        return self.getEmployeeSearchEnd.call(this);
    },
    /** postShow defined for frmAddCrew **/
    AS_Form_ge49cec6ee5b41578e19d9ada274821a: function AS_Form_ge49cec6ee5b41578e19d9ada274821a(eventobject) {
        var self = this;
        this.decimalTextBox();
    },
    /** onDeviceBack defined for frmAddCrew **/
    AS_Form_eb344c897c284aa7bfbfc6f65544ce07: function AS_Form_eb344c897c284aa7bfbfc6f65544ce07(eventobject) {
        var self = this;
        this.onClickOfBack();
    }
});
define("frmAddCrewController", ["userfrmAddCrewController", "frmAddCrewControllerActions"], function() {
    var controller = require("userfrmAddCrewController");
    var controllerActions = ["frmAddCrewControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
