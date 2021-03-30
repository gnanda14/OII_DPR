/* jshint esnext: true */

/**
 * @Description - Contains the functionality of the Create DPR Form
 * @author - Amritpal SIngh
*/

define({ 
  isHourlyRate : true,
  navigatingFrom: null,
  DPRData: {},
  dpr_Info_list : [],
  empData:{},
  projectData : {},
  dprDetails : {},
  data : {},
  limit : 1,
  selTRC : [],
  selSubcategory : [],
  totalCount : 0,
  previousValue : {},
  currentValue  : {},

  tbxarr : ["tbxDepth",
            "tbxUOM" ,"tbxStandByHours","txtOIIOTHoursValue","txtClientOTHoursValue",
            "tbxDayRate", "tbxOTRate" , "tbxStandbyRate",
            "tbxNonDiveRate"],
  flxArr : ["flxJobPositionPop","flxCrewPositionDown","flxTRCValue","flxShiftType","flxUOMPopup"],
  shiftType : ["Normal" , "Night" , "Standby"],
  /* 7101 m , 7102 ft */
  UOM : [{
    "value" : "None",
    "desc" : "None",
    "code" : null
  },{
    "value" : "ft",
    "desc" : "Feet (ft)",
    "code" : 7102
  },{
    "value" : "m",
    "desc" : "Meter (m)",
    "code" : 7101
  }],
  newHeader : null,
  existingCrewInDPR : [],
  // --- Contact Details --- //
  subCategory : [],
  contracts : [],
  activities : [],
  childProjects : [],
  filteresContract : [],
  masterCategory : [],
  masterSubCategory : [],
  /**
    * @desc MVC navigation function
    * @param JSON data - contains the data received from other forms while navigating
    * @retun void
  */
  onNavigate : function(data) {
    try{
      commonUtils.addbottompopup(this);
      this.toggleLoadingIndicator(true);      
      this.navigatingFrom = data.navigatingFrom;
      this.empData = commonUtils.checkIfEmpty(data.employeeData) ? "" : data.employeeData;
      this.headerData = commonUtils.checkIfEmpty(data.headerData) ? "" : data.headerData;
      this.data = data;
      this.fetchContractData();
      this.limit = 1;
      this.dpr_Info_list = data.dpr_Info_list;
      this.newHeader = data.isNewHeader;
      this.view.preShow = this.preShow.bind(this , data);
      this.view.postShow = this.postShow.bind(this);
      this.bindAction();
      this.bindContractEvent();
      if(data.employeeData.role == "supervisor"){
        commonUtils.getDPRHeaderWithDPRID(data.headerData.str_reportid).then((res)=>{
          if(!commonUtils.checkIfEmpty(res.OMS_OP_Dailyreportheader) && res.OMS_OP_Dailyreportheader.length > 0){
            this.newHeader = false;
          }else{
            this.newHeader = true;
          }
        }, (err)=>{
          kony.print("Error in getting New Header");
        });
      }
      var req = {"$filter": "str_projid eq " + data.headerData.str_projid};
      commonUtils.getCrewInfo(req).then((res)=>{
        commonUtils.crewList = res.crew_OMS;
      }, (err)=>{
        kony.print("Error in getting crew");
      });
      // ----------------- contarct Data ------------//
    } catch(ex) {
      this.exception(ex);
    }
  },

  preShow : function(data){
    try {
      this.setExistingCrew();
      this.view.flxBody.setEnabled(true); 
      this.view.flxJobSearchPopUp.setVisibility(false);
      this.dismissBottomPopup();
      this.view.lblDateShiftFrom.text   = (data.headerData.dte_reportdate).substring(0,10);
      this.view.lblShiftToDate.text     = (data.headerData.dte_reportdate).substring(0,10);
      this.view.lblShiftToOTDate.text   = (data.headerData.dte_reportdate).substring(0,10);
      this.view.lblShiftFromOTDate.text = (data.headerData.dte_reportdate).substring(0,10);
      this.view.flxNormalHours.setEnabled(false);
      var widgets = this.view.flxPersonnelDetailsBody.widgets();
      for(var j = 0; j < widgets.length ; j++){
        this.view[widgets[j].id].setEnabled(true);
      }
      this.view.calReportDate.dateComponents = this.getDateFromText((data.headerData.dte_reportdate).substring(0,10));
      this.view.lblShowReportdate.text = data.headerData.dte_reportdate;
      this.resetBottomNavUI(data.employeeData.role);
      if(data.navigatingFrom == "frmAddDPR" && data.operation == "Update"){
        this.view.flxReportDate.setEnabled(false);
        this.view.calReportDate.setEnabled(false);
        this.view.calReportDate.setVisibility(false);
        this.view.lblShowReportdate.setVisibility(true);
        this.view.lblTitle.text  = "Update Timesheet";
        this.view.flxTopSearchHeader.setVisibility(false);
        this.view.flxBody.height = "92.5%";
        this.setDPRData(data.headerData, data.dprData);
        this.getCrewPositions();
        this.setShiftType();
        this.setUOM();
        this.view.flxAddCrew.setVisibility(false);
        this.view.flxReset.width = "50%";
        this.view.flxSaveDPR.width = "50%";
      } else {
        this.checkOperation(data);
        this.getCrewPositions();
        this.setShiftType();
        this.setUOM();
      }
      kony.timer.schedule("previous", ()=>{
        kony.timer.cancel("previous");
        this.previousValue = this.captureValues();
      }, 0.5, false);
    } catch(ex){
      this.exception(ex);
    }
  },

  postShow : function(){
  },

  bindAction : function(){
    try{
      var self = this;
      this.view.flxBack.onClick = this.onClickbackPrompt.bind(this);
      this.view.flxJobPositionPop.onClick = this.showjobPosition.bind(this);
      this.view.flxCrewPositionDown.onClick = this.showCrewPosition.bind(this);
      this.view.flxTRCValue.onClick = this.showTRCPopUp.bind(this);
      this.view.flxShiftType.onClick = this.showShiftType.bind(this);
      this.view.flxUOMPopup.onClick = this.showUOM.bind(this);

      this.view.flxCheckContainer.onClick = this.toggleInTransit.bind(this);
      this.view.bottompopup.flxBottomContainer.onClick = this.dismissBottomPopup.bind(this);
      this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
      this.view.imgCross.onTouchStart = ()=>{
        self.view.flxJobSearchPopUp.setVisibility(false);
        self.view.flxBody.setEnabled(true); 
      }; 
      this.view.txtCrewSearch.onDone = this.onSearchEmployee.bind(this);
      this.view.flxImgSearch.onClick = this.onSearchEmployee.bind(this);
      this.view.crewPosition.segServiceLine.onRowClick = this.onRowCrewPosition.bind(this);
      this.view.shiftType.segServiceLine.onRowClick = this.onRowClickShiftType.bind(this);  
      this.view.SegTRC.segServiceLine.onRowClick = this.onRowClickTRC.bind(this);

      this.view.UOM.segServiceLine.onRowClick = this.onRowUOM.bind(this);

      this.view.dprlist.segServiceLine.onRowClick = this.onRowDprList.bind(this);
      this.view.calReportDate.onSelection = ()=>{
        self.data.headerData.dte_reportdate = self.getReportDate(self.view.calReportDate);
        var date = (self.headerData.dte_reportdate).substring(0,10);
        var dtte = date;
        self.data.headerData.str_reportDateTime = commonUtils.getMonthWord(dtte.substr(5,2)) + " " + parseInt(dtte.substr(8,2)) +", " +  dtte.substr(0,4) + " " + new Date().toTimeString().substring(0,5);
      };

      this.view.SegTRC.flxFilterCross.onClick = ()=>{
        self.HideActivity(self.view.SegTRC);
        var data = self.view.SegTRC.segServiceLine.data;
        if(!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){ 
          for(var j  = 0; j < data.length;j++){
            if(self.selTRC.includes(data[j].code)){
              data[j].lblCheck.skin = commonUtils.TICKSELECTED;
              data[j].lblCheck.text = commonUtils.TICK;
            }else{
              data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
              data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
            }
          }
          self.view.SegTRC.segServiceLine.setData(data);
        }
      };

      this.view.shiftType.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.shiftType);
      this.view.crewPosition.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.crewPosition);
      this.view.dprlist.flxFilterCross.onClick  =  this.HideActivity.bind(this, this.view.dprlist);

      this.view.UOM.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.UOM);
      this.view.segJobPosition.onRowClick = this.onRowClickjobPosition.bind(this);
      this.view.segCrewSearchResults.onRowClick = this.onRowClickEmployeeSearch.bind(this);
      this.view.txtSearchjob.onDone = this.fetchJobPostions.bind(this);
      this.view.flxSearchjob.onClick = this.fetchJobPostions.bind(this);  
      this.view.flxSaveDPR.onClick = this.onClickOfSave.bind(this);
      this.view.onDeviceBack = this.onClickbackPrompt.bind(this);

      this.view.segCrewSearchResults.onReachingEnd  = this.getEmployeeOnReachingEnd.bind(this);

      this.view.SegTRC.flxTRC.onClick = this.onAppyTRC.bind(this);
      /// ---------- Shift From --------------------///
      this.view.flxShiftFromPop.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(self.view.lblShiftFromTime.text)){
          self.view.shiftFrom.setTime(self.view.lblShiftFromTime.text);
        }
        self.view.shiftFrom.setVisibility(true);
        self.view.flxMain.setEnabled(false);
      };
      this.view.shiftFrom.onCancel = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.shiftFrom.setVisibility(false);
      };

      this.view.shiftFrom.onApply = ()=>{
        self.view.flxMain.setEnabled(true);  
        self.view.lblShiftFromTime.text = self.view.shiftFrom.getTime();
        self.view.shiftFrom.setVisibility(false);
        if(!commonUtils.checkIfEmpty(self.view.lblShiftToTime.text)  && !self.setNormalHours()){
          self.view.lblShiftFromTime.text = "";
          self.view.lblShiftFromTime.setVisibility(true);
        }else{
          self.view.lblShiftFromTime.setVisibility(true);
        }
      };
      /// ---------- Shift To --------------------///
      this.view.flxShift.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(self.view.lblShiftToTime.text)){
          self.view.shiftTo.setTime(self.view.lblShiftToTime.text);
        }
        self.view.shiftTo.setVisibility(true);
        self.view.flxMain.setEnabled(false);
      };
      this.view.shiftTo.onCancel = ()=>{
        self.view.flxMain.setEnabled(true);     
        self.view.shiftTo.setVisibility(false);
      };
      this.view.shiftTo.onApply = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.lblShiftToTime.text = self.view.shiftTo.getTime();
        self.view.shiftTo.setVisibility(false);
        if(!commonUtils.checkIfEmpty(self.view.lblShiftFromTime.text) && !self.setNormalHours()){
          self.view.lblShiftToTime.text = "";
          self.view.lblShiftToTime.setVisibility(false);
        }else{
          self.view.lblShiftToTime.setVisibility(true);
        }
      };
      // =------------------------- Shift From OT --- //
      this.view.flxShiftFromOTValue.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(this.view.lblShiftFromOTTime.text)){
          self.view.shiftFromOT.setTime(self.view.lblShiftFromOTTime.text);
        }
        self.view.shiftFromOT.setVisibility(true);
        self.view.flxMain.setEnabled(false);
      };
      this.view.shiftFromOT.onCancel = ()=>{
        self.view.flxMain.setEnabled(true);     
        self.view.shiftFromOT.setVisibility(false);
      };
      this.view.shiftFromOT.onApply = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.lblShiftFromOTTime.text = self.view.shiftFromOT.getTime();
        self.view.shiftFromOT.setVisibility(false);    
        if(!commonUtils.checkIfEmpty(self.view.lblShiftTOToTime.text) && !this.checkShiftFromToOT()){
          self.view.lblShiftFromOTTime.setVisibility(false);
          self.view.lblShiftFromOTTime.text = "";
        }else{
          self.view.lblShiftFromOTTime.setVisibility(true);
        }
      };
      // --------------- shift TO OT ------------------------//
      this.view.flxShiftToOTValue.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(self.view.lblShiftTOToTime.text)){
          self.view.shiftToOT.setTime(self.view.lblShiftTOToTime.text);
        } 
        self.view.shiftToOT.setVisibility(true);
        self.view.flxMain.setEnabled(false);
      };
      this.view.shiftToOT.onCancel = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.shiftToOT.setVisibility(false);
      };
      this.view.shiftToOT.onApply = ()=>{
        self.view.flxMain.setEnabled(true);     
        self.view.lblShiftTOToTime.text = self.view.shiftToOT.getTime();
        self.view.shiftToOT.setVisibility(false);
        if(!commonUtils.checkIfEmpty(self.view.lblShiftFromOTTime.text) && !this.checkShiftFromToOT()){
          self.view.lblShiftTOToTime.setVisibility(false);
          self.view.lblShiftTOToTime.text = "";
        }else{
          self.view.lblShiftTOToTime.setVisibility(true);
        }
      };
      // --------------- Arrival Time ------------------------//
      this.view.flxArrivalTimeValue.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(self.view.lblArrivalTime.text)){
          self.view.arrivalTime.setTime(self.view.lblArrivalTime.text);
        }      
        self.view.arrivalTime.setVisibility(true);
        self.view.flxMain.setEnabled(false);
      };
      this.view.arrivalTime.onCancel = ()=>{
        self.view.flxMain.setEnabled(true);      
        self.view.arrivalTime.setVisibility(false);
      };
      this.view.arrivalTime.onApply = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.lblArrivalTime.text = self.view.arrivalTime.getTime();
        self.view.arrivalTime.setVisibility(false);
        self.view.lblArrivalTime.setVisibility(true);
      };
      // --------------- Depart Time ------------------------//
      this.view.flxDepartTimeValue.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(self.view.lblDepartTime.text)){
          self.view.departTime.setTime(self.view.lblDepartTime.text);
        }
        self.view.departTime.setVisibility(true);
        self.view.flxMain.setEnabled(false);
      };
      this.view.departTime.onCancel = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.departTime.setVisibility(false);
      };
      this.view.departTime.onApply = ()=>{
        self.view.flxMain.setEnabled(true);
        self.view.lblDepartTime.text = self.view.departTime.getTime();
        self.view.departTime.setVisibility(false);
        self.view.lblDepartTime.setVisibility(true);
      };

      this.view.flxAddCrew.onClick = ()=>{
        if(!commonUtils.checkIfEmpty(commonUtils.crewList) && commonUtils.crewList.length > 0){
          this.view.flxSegExisting.setVisibility(true);
          this.view.flxNoResultExisting.setVisibility(false);
          this.view.flxExistingCrew.setVisibility(true);
        } else {
          var inp = {
            "msg" : "No existing crew.",
            "option" :"error"
          };
          this.showBottomPopUp(inp);
        }
      };
      this.view.existingCrew.onRowClick = this.onSelectExistngCrew.bind(this);
      this.view.flxExistingCrew.onClick = ()=>{
        this.view.flxExistingCrew.setVisibility(false);
      };
      this.view.flxCancelSearch.onClick = ()=>{
        this.view.flxCrewSearchResults.setVisibility(false);
      };
      this.view.flxCancelExisting.onClick = ()=>{
        this.view.flxExistingCrew.setVisibility(false);
      };
      this.view.tbxStandByHours.onEndEditing = this.countHours.bind(this);
      this.view.txtOIIOTHoursValue.onEndEditing = this.countHours.bind(this);
      this.view.txtClientOTHoursValue.onEndEditing = this.countHours.bind(this);
      this.view.flxReset.onClick = this.onResetClick.bind(this);

      var regex = RegExp(/^\d*\.?\d*$/);
      self.view.tbxDepth.onTextChange = ()=>{
        var value = self.view.tbxDepth.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.tbxDepth.text = value.substr(0, value.length - 1);
        }
      };
      self.view.tbxStandByHours.onTextChange = ()=>{
        var value = self.view.tbxStandByHours.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.tbxStandByHours.text = value.substr(0, value.length - 1);
        }
      };
      self.view.txtOIIOTHoursValue.onTextChange = ()=>{
        var value = self.view.txtOIIOTHoursValue.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.txtOIIOTHoursValue.text = value.substr(0, value.length - 1);
        }
      };
      self.view.txtClientOTHoursValue.onTextChange = ()=>{
        var value = self.view.txtClientOTHoursValue.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.txtClientOTHoursValue.text = value.substr(0, value.length - 1);
        }
      };
      self.view.tbxOTRate.onTextChange = ()=>{
        var value = self.view.tbxOTRate.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.tbxOTRate.text = value.substr(0, value.length - 1);
        }
      };
      self.view.tbxDayRate.onTextChange = ()=>{
        var value = self.view.tbxDayRate.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.tbxDayRate.text = value.substr(0, value.length - 1);
        }
      };
      self.view.tbxStandbyRate.onTextChange = ()=>{
        var value = self.view.tbxStandbyRate.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.tbxStandbyRate.text = value.substr(0, value.length - 1);
        }
      };
      self.view.tbxNonDiveRate.onTextChange = ()=>{
        var value = self.view.tbxNonDiveRate.text;
        if(!commonUtils.checkIfEmpty(value) && !regex.test(value)){
          self.view.tbxNonDiveRate.text = value.substr(0, value.length - 1);
        }
      };
    } catch(ex){
      this.exception(ex);
    }
  },

  resetBottomNavUI : function(role){
    this.view.flxSave.setVisibility(true);
    this.view.flxMain.height = "93%";
    if(role == "supervisor"){
      this.view.flxAddCrew.setVisibility(true);
      this.view.flxReset.width = "35%";
      this.view.flxSaveDPR.width = "30%";
    } else {
      this.view.flxAddCrew.setVisibility(false);
      this.view.flxReset.width = "50%";
      this.view.flxSaveDPR.width = "50%";
    }
  },

  checkAnyChange : function(){
    var keys = Object.keys(this.previousValue);
    for(var j  = 0; j < keys.length; j++){
      if(this.currentValue[keys[j]] !== this.previousValue[keys[j]]){
        return true;
      }
    }
    return false;
  },

  captureValues :  function(){
    if(!commonUtils.checkIfEmpty(this) && !commonUtils.checkIfEmpty(this.view)){
      return {
        "empid" : this.view.lblEmpID.text,
        "job" : this.view.lblJobCode.text,
        "crewPosition" : this.view.lblCrewPositionCode.text,
        "shiftFrom" : this.view.lblShiftFromTime.text,
        "shiftTo" : this.view.lblShiftToTime.text ,
        "normalHours" : this.view.lblNrmlHours.text,
        "TRC" :  this.getTRCResult().trcCodes,
        "ShiftType" : this.view.lblShiftType.text,
        "shiftFromOt" : this.view.lblShiftFromOTTime.text,
        "shiftToOt" : this.view.lblShiftTOToTime.text,
        "uom" : this.view.lblUOM.text,
        "depth" : this.view.tbxDepth.text,
        "standby" : this.view.tbxStandByHours.text,
        "oiiOtHours" : this.view.txtOIIOTHoursValue.text,
        "clientHours" : this.view.txtClientOTHoursValue.text,
        "dayrate" : this.view.tbxDayRate.text,
        "Otrate" : this.view.tbxOTRate.text,
        "standbyRate" : this.view.tbxStandbyRate.text,
        "nonDiveRate" : this.view.tbxNonDiveRate.text,
        "intransit" : this.view.lblCheck.text,
        "arrivalDate" : this.getReportDate(this.view.calArrivalDate),
        "arrivalTime" : this.view.lblArrivalTime.text,
        "departureDate" : this.getReportDate(this.view.calDepartDate),
        "departureTime" : this.view.lblDepartTime.text,
        "comments" : this.view.txtAreaComments.text,
        "sourceType" : this.view.lblSourceType.text,
        "ProjectNumber"  : this.view.lblProject.text,  
        "Activity" : this.view.lblActivityId.text,
        "category" :  this.view.lblCategoryId.text,
        "subCategory": this.getSubcategoryResult().subCategoryCodes
      };
    } 
    return {};
  },

  onResetClick : function(){
    this.view.lblTRCValue.text  = "None";
    this.selTRC = [];
    this.view.lblShiftType.text = "Normal";
    var arr = ["SegTRC","shiftType"];
    for(var i = 0; i < arr.length;  i++){
      var temp = this.view[arr[i]].segServiceLine.data;
      if(!commonUtils.checkIfEmpty(temp) && temp.length > 0){
        for(var j = 0; j < temp.length; j++){
          temp[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
          temp[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
        }
        this.view[arr[i]].segServiceLine.setData(temp);
      }
    }
    this.onAppyTRC();
    this.view.lblShiftFromOTTime.text = "";
    this.view.lblShiftTOToTime.text = "";
    this.view.lblShiftToOTDate.setVisibility(false);
    this.view.lblShiftFromOTDate.setVisibility(false);
    this.view.tbxStandByHours.text = "";
    this.view.txtOIIOTHoursValue.text = "";
    this.view.txtClientOTHoursValue.text = "";
    this.view.tbxDayRate.text = "";
    this.view.lblUOM.text = "None";
    this.view.tbxDepth.text = "";
    this.view.tbxOTRate.text = "";
    this.view.calArrivalDate.clear();
    this.view.calDepartDate.clear();
    this.view.calArrivalDate.placeholder = "----/--/--";
    this.view.calDepartDate.placeholder = "----/--/--";
    this.view.lblArrivalTime.text = "";
    this.view.lblDepartTime.text = "";
    this.view.lblCheck.text = commonUtils.TICKTEXTUNSEL;
    this.view.lblCheck.skin = commonUtils.TICKUNSELECTED;
    this.view.txtAreaComments.text = "";  
  },

  /**
    * @desc Checks the next operation to be performed
    * @param JSON projectData - contains the project data to be displayed on the screen
    * @param JSON employeeData - contains the name, id and role of the current employee
    * @param String operation - contains the operation to be performed i.e. create or update
    * @param JSON dprData - contains the dpr data for the current dpr
    * @retun void
  */
  checkOperation : function(inp){
    try {
      var self = this;
      this.view.lblTitle.text = (inp.operation == "History") ? "Update Timesheet" : inp.operation == "View" ? "Timesheet" : inp.operation + " Timesheet";
      this.view.flxPersonnelDetailsBody.setEnabled(true);
      this.view.calReportDate.setVisibility(true);
      this.view.lblShowReportdate.setVisibility(false);
      if(inp.operation == "Create"){
        if(inp.navigatingFrom == "frmAddDPR"){
          this.view.calReportDate.setVisibility(false);
          this.view.lblShowReportdate.setVisibility(true);
        }
        this.resetScreen(inp.headerData, inp.employeeData , inp.creatingDPRForOtherCrew);
        this.existingCrewInDPR = !commonUtils.checkIfEmpty(inp.dprData) && inp.dprData.length > 0 ? this.getCrewEMPIDs(inp.dprData) : [];    
        this.view.flxTopSearchHeader.setVisibility(false);
        this.view.flxBody.height = "92.5%"; 
        this.view.flxReportDate.setEnabled(true);
        if(inp.employeeData.role == "supervisor"){       
          this.view.flxTopSearchHeader.setVisibility(true);
          this.view.flxBody.height = "85%";
        }
        this.view.lblCountHours.text = "12";
      } else if(inp.operation == "History"){
        if(inp.employeeData.role == "supervisor"){
          this.view.lblShowReportdate.setVisibility(true);
          this.view.calReportDate.setVisibility(false);
          this.view.flxTopSearchHeader.setVisibility(false);
          this.view.flxBody.height = "92.5%";
          var widgets = this.view.flxPersonnelDetailsBody.widgets();
          for(var k = 0; k < widgets.length ; k++){
            this.view[widgets[k].id].setEnabled(true);
          }
          this.view.flxReportDate.setEnabled(false);
          this.view.calReportDate.setEnabled(false);
          this.view.flxAddCrew.setVisibility(false);
          this.view.flxReset.width = "50%";
          this.view.flxSaveDPR.width = "50%";
          this.view.flxSave.setVisibility(true);
        } else {
          var widget = this.view.flxPersonnelDetailsBody.widgets();
          for(var j = 0; j < widget.length ; j++){
            this.view[widget[j].id].setEnabled(false);
          }
          this.view.flxTopSearchHeader.setVisibility(false);
          this.view.flxBody.height = "92.5%";
        }
        this.setDPRData(inp.headerData, inp.dprData);
      } else if(inp.operation == "View"){
        var wid = this.view.flxPersonnelDetailsBody.widgets();
        for(var l = 0; l < wid.length ; l++){
          this.view[wid[l].id].setEnabled(false);
        }    
        this.view.flxReportDate.setEnabled(false);
        this.view.flxTopSearchHeader.setVisibility(false);
        this.view.flxBody.height = "92.5%";
        this.view.flxTopSearchHeader.setEnabled(false);
        this.view.flxSave.setVisibility(false);
        this.view.flxMain.height = "100%";
        this.view.lblShowReportdate.setVisibility(true);
        this.view.calReportDate.setVisibility(false);
        this.setDPRData(inp.headerData, inp.dprData);
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  resetMandatory : function(){
    this.view.lblJobPositionHeader.skin = commonUtils.SKNHEADERNORMAL;
    this.view.lblCrewHeader.skin = commonUtils.SKNHEADERNORMAL;
    this.view.lblShiftFromHeader.skin = commonUtils.SKNHEADERNORMAL;
    this.view.lblShiftToHeader.skin = commonUtils.SKNHEADERNORMAL;
    this.view.lblNormalHoursHeader.skin = commonUtils.SKNHEADERNORMAL;
  },

  getCrewEMPIDs : function(dprData){
    var crewId = [];
    for(var j = 0; j < dprData.length; j++){
      crewId.push(dprData[j].str_employeeid);
    }
    return crewId;
  },

  setExistingCrew : function(){
    var val = commonUtils.crewList;
    var result = [];
    if(!commonUtils.checkIfEmpty(val) && val.length > 0){
      for(var j = 0; j < val.length ; j++){
        var inp = {
          "lblValue" : val[j].str_employeeName,
          "crewData" : val[j],
          "lblCheck" : {
            isVisible : false,
            text : commonUtils.TICKTEXTUNSEL,
            skin : commonUtils.TICKUNSELECTED
          }
        };
        result.push(inp);
      }
      this.view.existingCrew.setData(result);
      this.view.lblTotalCrews.text = val.length + " result found.";
    }
  },

  onSelectExistngCrew : function(){
    try{
      this.toggleLoadingIndicator(true);
      var data = this.view.existingCrew.data;
      var deviceInfo = kony.os.deviceInfo();  
      var index = "";
      if(deviceInfo.name != "iPhone"){
        index = this.view.existingCrew.selectedRowIndex[1];
      }else{
        index = this.view.existingCrew.selectedIndex[1];
      }
      data = data[index].crewData;
      commonUtils.employeeDetails(data.str_employeeid).then((res)=>{       
        this.setTRCData(res.offshoreTRCList);    
        this.view.lblEmplName.text = data.str_employeeName;
        this.view.lblEmpID.text = data.str_employeeid;
        this.view.lblJobPosition.text = commonUtils.checkIfEmpty(data.str_jobPosition) ? "None" : data.str_jobPosition;
        this.view.lblJobCode.text = commonUtils.checkIfEmpty(data.str_positioncode) ? "" : data.str_positioncode;
        this.view.lblCrewPosition.text = commonUtils.checkIfEmpty(data.str_crewPosition) ? "None" : data.str_crewPosition;
        this.view.lblCrewPositionCode.text = commonUtils.checkIfEmpty(data.str_crewpositioncode) ? "" : data.str_crewpositioncode;

        this.view.tbxDayRate.text = commonUtils.checkIfEmpty(data.dbl_stdrate) ? "" : (data.dbl_stdrate).toString();
        this.view.tbxOTRate.text = commonUtils.checkIfEmpty(data.dbl_ovtrate) ? "" : (data.dbl_ovtrate).toString();
        this.view.tbxStandbyRate.text = commonUtils.checkIfEmpty(data.dbl_standbyrate) ? "" : (data.dbl_standbyrate).toString();
        this.view.tbxNonDiveRate.text = commonUtils.checkIfEmpty(data.dbl_nondivrate) ? "" : (data.dbl_nondivrate).toString();
        this.view.calArrivalDate.dateComponents = commonUtils.checkIfEmpty(data.dte_arrival) ? [] : this.getDateFromText((data.dte_arrival).substr(0,10));   
        this.view.calDepartDate.dateComponents = commonUtils.checkIfEmpty(data.dtr_departure) ? [] : this.getDateFromText((data.dtr_departure).substr(0,10));   

        this.view.flxExistingCrew.setVisibility(false);
        this.toggleLoadingIndicator(false);
      }, (res)=>{
        this.toggleLoadingIndicator(false);
        this.view.flxExistingCrew.setVisibility(false);
        kony.print("Error occured in TRC fetching");
      });
    } catch(ex){
      this.exception(ex);
      this.toggleLoadingIndicator(false);
      this.view.flxExistingCrew.setVisibility(false);
    }
  },

  onAppyTRC : function(){
    try{
      var data = this.view.SegTRC.segServiceLine.data;
      var values = [];
      this.selTRC = [];
      if(!commonUtils.checkIfEmpty(data) && data.length > 0){
        for(var j = 0; j < data.length; j++){
          if(data[j].lblCheck.skin == commonUtils.TICKSELECTED){
            values.push(data[j].code); 
            this.selTRC.push(data[j].code);
          }
        }
      }
      if(values.length > 1){
        this.view.lblTRCValue.text = values[0];
        this.view.lblTRCValue.setVisibility(false);
        this.view.flxTRCContainer.removeAll();
        var row = 1;
        var column = 1;
        var count = 0;
        var flx =  this.addTRCFlx(row);
        for(var k = 0; k < values.length; k++){
          count++;
          flx.add(this.addTRCLabel({"index" : k , text : values[k]}));
          if(count === 3){
            this.view.flxTRCContainer.add(flx);
            count = 0;
            flx =  this.addTRCFlx(row);
          }
        }
        if(count !== 0){
          this.view.flxTRCContainer.add(flx);
        }
        this.view.flxTRCContainer.setVisibility(true);
      } else if(values.length == 1) {
        this.view.lblTRCValue.text = values[0];
        this.view.lblTRCValue.setVisibility(true);
        this.view.flxTRCContainer.setVisibility(false);
      } else {
        this.view.lblTRCValue.text = "None";
        this.selTRC = [];
        this.view.lblTRCValue.setVisibility(true);
        this.view.flxTRCContainer.setVisibility(false);
      }
      this.previousValue = this.captureValues();
      this.HideActivity(this.view.SegTRC);
    } catch(ex){
      this.exception(ex);
    }
  },

  fetchJobPostions : function(){
    try{
      var data = [];
      var self = this;
      var searchText = this.view.txtSearchjob.text;
      if(!commonUtils.checkIfEmpty(searchText)){
        this.toggleLoadingIndicator(true);
        commonUtils.jobCode(searchText).then((res)=>{
          if(!commonUtils.checkIfEmpty(res) && res.length > 0){
            for( var j = 0; j < res.length ; j++){
              var inp = {
                "lblValue" : res[j].title,
                "lblCheck" : {
                  isVisible : false,
                  skin : commonUtils.TICKUNSELECTED,
                  text : commonUtils.TICKTEXTUNSEL
                },
                "code" : res[j].code
              };
              data.push(inp);
            }   
            self.view.flxNoJobResult.setVisibility(false);
            self.view.segJobPosition.setData(data);
            self.view.segJobPosition.setVisibility(true);
          } else {
            self.view.flxNoJobResult.setVisibility(true);
            self.view.segJobPosition.setVisibility(false);
          }
          self.toggleLoadingIndicator(false);
        }, (err)=>{
          self.toggleLoadingIndicator(false);
          self.view.segJobPosition.setVisibility(false);
          self.view.flxNoJobResult.setVisibility(true);
          self.view.segJobPosition.setVisibility(false);
        });
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showjobPosition : function(){
    try{
      var data = [];
      this.view.txtSearchjob.text = "";
      if(!commonUtils.checkIfEmpty(this.view.lblJobPosition.text) && this.view.lblJobPosition.text !== "None"){
        var inp = {
          "lblValue" : this.view.lblJobPosition.text,
          "lblCheck" : {
            skin : commonUtils.TICKSELECTED,
            text : commonUtils.TICK,
            isVisible : false
          },
          "code" : this.view.lblJobCode.text,
        };
        data.push(inp);
        this.view.segJobPosition.setData(data);
        this.view.segJobPosition.setVisibility(true);
      }
      this.view.flxJobSearchPopUp.setVisibility(true);
      this.view.flxBody.setEnabled(false);   
    } catch(ex){
      this.exception(ex);
    }
  },

  showCrewPosition : function(){
    try{
      var data = this.view.crewPosition.segServiceLine.data;
      var len = this.view.crewPosition.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){
        if(!commonUtils.checkIfEmpty(this.view.lblCrewPosition.text) && this.view.lblCrewPosition.text !== "None"){
          for(var j = 0; j < data.length; j++){
            if(this.view.lblCrewPosition.text == data[j].lblValue){
              data[j].lblCheck.skin = commonUtils.TICKSELECTED;
              data[j].lblCheck.text = commonUtils.TICK;
            }else{
              data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
              data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
            }
          }
          this.view.crewPosition.segServiceLine.setData(data);
        }
        this.onClickListBottom(this.view.crewPosition);
      }else{
        var input = {
          "msg" : "No Crew positions found.",
          "option" : "error"
        };
        this.showBottomPopUp(input);
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showTRCPopUp : function(){
    try{
      this.view.SegTRC.flxFilterCross.setVisibility(true);
      this.view.SegTRC.flxTRC.setVisibility(true);
      var data = this.view.SegTRC.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){ 
        for(var j  = 0; j < data.length;j++){
          if(this.selTRC.includes(data[j].code)){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          }else{
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.SegTRC.segServiceLine.setData(data);
        this.onClickListBottom(this.view.SegTRC);
      } else {
        this.showBottomPopUp({"msg" : "No TRC found" ,"option" : "error"});
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showShiftType : function(){
    var data = this.view.shiftType.segServiceLine.data;
    var len = this.view.shiftType.segServiceLine.data;
    if(!commonUtils.checkIfEmpty(len)){
      len = len.length;
      if(!commonUtils.checkIfEmpty(this.view.lblShiftType.text)){
        for(var j = 0; j < len; j++){
          if(this.view.lblShiftType.text == data[j].lblValue){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          }else{
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.shiftType.segServiceLine.setData(data);
      }
      this.onClickListBottom(this.view.shiftType);
    }else{
      this.showBottomPopUp({"msg" : "No ShiftType available" ,"option" : "error"});
    }
  },

  showUOM : function(){
    var data = this.view.UOM.segServiceLine.data;
    var len = this.view.UOM.segServiceLine.data;
    if(!commonUtils.checkIfEmpty(len)){
      len = len.length;
      if(!commonUtils.checkIfEmpty(this.view.lblUOM.text)){
        for(var j = 0; j < len; j++){
          if(this.view.lblUOM.text == data[j].desc){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          } else {
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.UOM.segServiceLine.setData(data);
      }
      this.onClickListBottom(this.view.UOM);
    } else {
      this.showBottomPopUp({"msg" : "No ShiftType available" ,"option" : "error"});
    }
  },

  onRowClickjobPosition : function(){
    var data = this.view.segJobPosition.selectedRowItems[0];
    this.view.lblJobPosition.text = data.lblValue;
    this.view.lblJobCode.text = data.code;
    this.view.flxJobSearchPopUp.setVisibility(false);
    this.view.flxBody.setEnabled(true);
  },

  onRowClickEmployeeSearch : function(){
    try{
      this.toggleLoadingIndicator(true);
      var selected = this.view.segCrewSearchResults.selectedRowItems[0];
      var deviceInfo = kony.os.deviceInfo();  
      var index = "";
      if(deviceInfo.name != "iPhone"){
        index = this.view.segCrewSearchResults.selectedRowIndex[1];
      }else{
        index = this.view.segCrewSearchResults.selectedIndex[1];
      }
      selected.lblCheck =  {
        isVisible : false,
        skin : commonUtils.TICKSELECTED,
        text : commonUtils.TICK
      };
      this.view.segCrewSearchResults.setDataAt(selected, index);
      this.view.txtCrewSearch.text = "";
      var empid = selected.empid;
      var filtered = [];
      if(!commonUtils.checkIfEmpty(this.dpr_Info_list) && this.dpr_Info_list.length > 0){
        filtered = this.dpr_Info_list.filter(dpr => dpr.empid == empid);
      }
      if(!commonUtils.checkIfEmpty(filtered) && filtered.length > 0){
        var inp = {
          "msg" : "Timesheet already exists. Sure you want to proceed?",
          "option" :"enable"
        };
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.onClickYesExistingTime.bind(this , empid);
        this.view.bottompopup.btnBottomNotNow.onClick = ()=>{
          this.dismissBottomPopup();
          this.view.flxCrewSearchResults.setVisibility(false);
        }; 
        this.showBottomPopUp(inp);
        this.view.flxCrewSearchResults.setVisibility(false);
        this.view.bottompopup.imgToShow.setVisibility(false);
      } else {
        this.onClickYesExistingTime(empid);
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  onClickYesExistingTime : function(empid){
    this.toggleLoadingIndicator(true);
    this.dismissBottomPopup();
    commonUtils.employeeDetails(empid).then((res)=>{
      this.view.lblEmplName.text = this.empData.empName = res.firstName + " " + res.lastName;
      this.view.lblEmpID.text = this.empData.empid = res.employeeId;    
      this.view.lblJobCode.text = res.jobCode;
      commonUtils.jobCode(res.jobCode).then((res)=>{
        if(!commonUtils.checkIfEmpty(res) && res.length > 0){
          this.view.lblJobPosition.text = res[0].title;
        }else{
          this.view.lblJobPosition.text = "";
        }
        this.toggleLoadingIndicator(false);
      }, (err)=>{
        this.toggleLoadingIndicator(false);
        kony.print("Error in getting job position");
      });
      this.view.lblTRCValue.text = "None";
      this.view.lblCrewPosition.text = "None";
      this.view.lblCrewPositionCode.text = "";
      this.view.lblShiftType.text = "Normal";
      this.setTRCData(res.offshoreTRCList);
      this.view.flxCrewSearchResults.setVisibility(false);
    }, (err)=>{
      this.toggleLoadingIndicator(false);
      this.view.flxCrewSearchResults.setVisibility(false);
      this.showErrorMessage();
    });
  },

  resetDropdows : function(){
    try{
      var trc = this.view.SegTRC.segServiceLine.data;
      var shiftType = this.view.shiftType.segServiceLine.data;
      var crewPosition = this.view.crewPosition.segServiceLine.data;
      this.selTRC = [];
      var arr = ["SegTRC","shiftType","crewPosition"];
      for(var i = 0; i < arr.length;  i++){
        var temp = this.view[arr[i]].segServiceLine.data;
        if(!commonUtils.checkIfEmpty(temp) && temp.length > 0){
          for(var j = 0; j < temp.length; j++){
            temp[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            temp[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
          this.view[arr[i]].segServiceLine.setData(temp);
        }
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  setShiftType : function(){
    try{
      var arr = [];
      if(!commonUtils.checkIfEmpty(this.shiftType) && this.shiftType.length > 0){
        for(var j = 0; j < this.shiftType.length; j++){
          var inp = {
            "lblValue" : this.shiftType[j],
            "lblCheck" : {
              skin : this.shiftType[j] == "Normal" ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED,
              text : this.shiftType[j] == "Normal" ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
            },
          };
          arr.push(inp);
        }
      }
      this.view.shiftType.flxSegServiceLine.setVisibility(true);
      this.view.shiftType.segServiceLine.setData(arr);
      this.view.shiftType.segServiceLine.setVisibility(true);
    }catch(ex){
      this.exception(ex);
    }
  },

  setUOM : function(){
    try{
      var arr = [];
      if(!commonUtils.checkIfEmpty(this.UOM) && this.UOM.length > 0){
        for(var j = 0; j < this.UOM.length; j++){
          var inp = {
            "lblValue" : this.UOM[j].desc,
            "lblCheck" : {
              skin : commonUtils.TICKUNSELECTED,
              text : commonUtils.TICKTEXTUNSEL
            },
            "code" : this.UOM[j].value,
            "desc" : this.UOM[j].desc
          };
          arr.push(inp);
        }
      }
      this.view.UOM.segServiceLine.setVisibility(true);
      this.view.UOM.segServiceLine.setData(arr);
      this.view.UOM.segServiceLine.setVisibility(true);
    }catch(ex){
      this.exception(ex);
    }
  },

  setTRCData : function(data , existing){
    try{
      var arr = [];
      var flagReg = false;
      if(!commonUtils.checkIfEmpty(data) && data.length > 0){
        for(var j = 0; j < data.length; j++){
          var inp = {
            "lblValue" : data[j].title,
            "lblCheck" : {
              skin : (data[j].code == "REG" && !flagReg || !commonUtils.checkIfEmpty(existing)  && existing.length > 0 && existing.includes(data[j].code)) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED,
              text :  (data[j].code == "REG" && !flagReg || !commonUtils.checkIfEmpty(existing)  && existing.length > 0 && existing.includes(data[j].code)) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL,
            },
            "code" : data[j].code
          };
          arr.push(inp);
          if(data[j].code == "REG"){
            flagReg = true;
            this.view.lblTRCValue.text = data[j].title;
          }
        }
        this.view.SegTRC.flxSegServiceLine.setVisibility(true);
        this.view.SegTRC.segServiceLine.setData(arr);
        this.view.SegTRC.segServiceLine.setVisibility(true);
        this.onAppyTRC();
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  onSearchEmployee : function(){
    try{
      var self = this;
      var searchText = this.view.txtCrewSearch.text;
      if(!commonUtils.checkIfEmpty(searchText)){
        var data = [];
        this.toggleLoadingIndicator(true);
        this.limit = 1;
        var inp = {
          searchText : searchText,
          limit : 0,
        };
        commonUtils.employeeSearch(inp).then((res)=>{
          if(!commonUtils.checkIfEmpty(res) && res.length > 0){
            this.limit = this.limit + 1;
            this.totalCount = res.length;
            for(var j = 0; j < res.length && j < 30 ;j++){
              var inp = {
                "lblValue" : res[j].fullName,
                "lblCheck" : {
                  isVisible : false,
                  skin : commonUtils.TICKUNSELECTED,
                  text : commonUtils.TICKTEXTUNSEL
                },
                empid : res[j].employeeId
              };
              data.push(inp);
            }
            self.view.flxSegContainer.setVisibility(true);
            self.view.flxNoResult.setVisibility(false);
            self.view.segCrewSearchResults.setData(data);
            self.view.lblTotalCount.text = data.length + " of "+this.totalCount + " results found";
            self.view.flxCrewSearchResults.setVisibility(true);
            self.toggleLoadingIndicator(false);
          } else {
            var input = {
              "msg" : "No result found.",
              "option" : "error"
            };
            self.toggleLoadingIndicator(false);
            self.view.flxCrewSearchResults.setVisibility(false);
            self.showBottomPopUp(input);
          }
        }, (err)=>{
          self.view.flxSegContainer.setVisibility(false);
          self.view.flxNoResult.setVisibility(true);
          self.toggleLoadingIndicator(false);
        });
      } else {
        this.view.flxCrewSearchResults.setVisibility(false);
        var input = {
          "msg" : "Please enter one or more characters.",
          "option" : "error"
        };
        this.showBottomPopUp(input);
      }
    } catch(ex){
      var er = {
        "func" : "updateDPR",
        "err" : "Exception " +  JSON.stringify(ex)
      };
      commonUtils.exception(this, er , true);
      this.exception(ex);
    }
  },

  getEmployeeOnReachingEnd : function(){
    try{
      var self = this;
      var searchText = this.view.txtCrewSearch.text;
      if(!commonUtils.checkIfEmpty(searchText)){
        var data = [];
        this.toggleLoadingIndicator(true);
        var inp = {
          searchText : searchText,
          limit : this.limit,
        };
        commonUtils.employeeSearch(inp).then((res)=>{
          if(!commonUtils.checkIfEmpty(res) && res.length > 0){
            this.limit = this.limit + 1;
            for(var j = 0; j < res.length ;j++){
              var inp = {
                "lblValue" : res[j].fullName,
                "lblCheck" : {
                  isVisible : false,
                  skin : commonUtils.TICKUNSELECTED,
                  text : commonUtils.TICKTEXTUNSEL
                },
                empid : res[j].employeeId
              };
              data.push(inp);
            }
            self.view.flxSegContainer.setVisibility(true);
            self.view.flxNoResult.setVisibility(false);
            self.view.segCrewSearchResults.addAll(data);
            self.view.lblTotalCount.text = self.view.segCrewSearchResults.data.length + " of "+ self.totalCount + " results found";
            self.view.flxCrewSearchResults.setVisibility(true);
            self.toggleLoadingIndicator(false);
          }else{
            self.toggleLoadingIndicator(false);
          }
        }, (err)=>{
          self.view.flxSegContainer.setVisibility(false);
          self.view.flxNoResult.setVisibility(true);
          self.toggleLoadingIndicator(false);
        });
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  /**
    * @desc Calls a service to get all the available values for crew position
    * @param -
    * @retun void
  */
  getCrewPositions : function() {
    try{
      var self = this;
      commonUtils.crewPosition().then((res)=>{
        self.successCallback_getCrewPositions(res);
      }, (err)=>{
        this.errorCallback(err);
      });
    } catch(ex){
      this.exception(ex);
    }
  },

  /**
    * @desc Success callback of get crew position service
    * @param JSON response - Contains the crew positions
    * @retun void
  */
  successCallback_getCrewPositions : function(response){
    try{
      var crewPositionData = [];
      for(var i = 0; i < response.length; i++){
        var inp = {
          "lblValue" : response[i].title ,
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          },
          "code" : response[i].code
        };
        crewPositionData.push(inp);
      }
      this.view.crewPosition.segServiceLine.setData(crewPositionData);
      this.previousValue = this.captureValues();
    }catch(ex){
      this.exception(ex);
    }
  },

  /**
    * @desc Sets the current DPR data on the screen
    * @param JSON projectData - contains the project data to be displayed on the screen
    * @param JSON employeeData - contains the name, id and role of the current employee
    * @param JSON dprData - contains the dpr data for the current dpr
    * @param boolean getTrc - True if we need to call a service to get TRC else false
    * @retun void
  */
  setDPRData : function(headerData, dprData){
    try{     
      this.fetchTrcEmp(dprData.str_employeeid , dprData.str_trcCodes);
      this.DPRData = dprData;
      this.view.calReportDate.dateComponents = commonUtils.checkIfEmpty(headerData.dte_reportdate) ? this.formatDate(new Date()) : this.getDateFromText((headerData.dte_reportdate).substring(0,10));
      this.view.lblShowReportdate.text = commonUtils.checkIfEmpty(headerData.dte_reportdate) ? "" : (headerData.dte_reportdate).substring(0,10);
      this.view.reportDate.text = commonUtils.checkIfEmpty(headerData.dte_reportdate) ? "" : (headerData.dte_reportdate).substring(0,10);

      this.view.lblEmpID.text = commonUtils.checkIfEmpty(dprData.str_employeeid) ? "" : dprData.str_employeeid;
      this.view.lblProjectDetails.text = "Project Details - " + (commonUtils.checkIfEmpty(headerData.str_projid) ? "" : headerData.str_projid);
      this.view.lblEmplName.text = commonUtils.checkIfEmpty(dprData.str_employeeName) ? "" : dprData.str_employeeName;
      this.view.lblDPRIdValue.text = commonUtils.checkIfEmpty(dprData.str_reportid) ? "" : dprData.str_reportid;

      this.view.lblDayRateheader.text = (headerData.bln_hourlyrate == "true" || headerData.bln_hourlyrate === true) ? "Hourly Rate" : "Day Rate";
      this.view.lblJobPosition.text = commonUtils.checkIfEmpty(dprData.str_jobPosition) ? "None" : dprData.str_jobPosition;
      this.view.lblJobCode.text = commonUtils.checkIfEmpty(dprData.str_positioncode) ? "" : dprData.str_positioncode;
      this.view.lblCrewPosition.text = commonUtils.checkIfEmpty(dprData.str_crewPosition) ? "None": dprData.str_crewPosition;
      this.view.lblCrewPositionCode.text = commonUtils.checkIfEmpty(dprData.str_crewpositioncode) ? "": dprData.str_crewpositioncode;

      this.view.lblTRCValue.text = !commonUtils.checkIfEmpty(dprData.str_trc) ? (dprData.str_trc).split(",")[0] : "None";
      this.view.lblShiftType.text = (commonUtils.checkIfEmpty(dprData.lng_shifttype)) ? "Normal" : commonUtils.getShiftTypeFromId(dprData.lng_shifttype);
      this.view.tbxDepth.text = commonUtils.checkIfEmpty(dprData.dbl_divedepth) ? "" : dprData.dbl_divedepth.toString();
      this.view.lblUOM.text = (commonUtils.checkIfEmpty(dprData.lng_DepthUom)) ? "None" : dprData.lng_DepthUom  === 7101  || dprData.lng_DepthUom  === "7101" ? "Meter (m)" : "Feet (ft)";

      this.view.lblShiftFromTime.text = commonUtils.checkIfEmpty(dprData.dte_shiftstart) ? ""  : dprData.dte_shiftstart.substring(11,16);  
      this.view.lblShiftToTime.text =   commonUtils.checkIfEmpty( dprData.dte_shiftend)  ? "" :  dprData.dte_shiftend.substring(11,16);
      if(!commonUtils.checkIfEmpty(this.view.lblShiftFromTime.text)){
        this.view.lblShiftFromTime.setVisibility(true);
      } else {
        this.view.lblShiftFromTime.setVisibility(false);
      }
      if(!commonUtils.checkIfEmpty(this.view.lblShiftToTime.text)){
        this.view.lblShiftToTime.setVisibility(true);
      } else {
        this.view.lblShiftToTime.setVisibility(false);
      }
      this.view.lblShiftFromOTTime.text = commonUtils.checkIfEmpty(dprData.dte_otshiftstart) ? "" : dprData.dte_otshiftstart.substring(11,16); 
      this.view.lblShiftTOToTime.text = commonUtils.checkIfEmpty(dprData.dte_otshiftend) ? "" : dprData.dte_otshiftend.substring(11,16);

      if(!commonUtils.checkIfEmpty(this.view.lblShiftFromOTTime.text)){
        this.view.lblShiftFromOTTime.setVisibility(true);
      } else {
        this.view.lblShiftFromOTTime.setVisibility(false);
      }
      if(!commonUtils.checkIfEmpty(this.view.lblShiftTOToTime.text)){
        this.view.lblShiftTOToTime.setVisibility(true);
      } else {
        this.view.lblShiftTOToTime.setVisibility(false);
      }
      this.view.lblNrmlHours.text = commonUtils.checkIfEmpty(dprData.dbl_billinghour) ? "" :  (dprData.dbl_billinghour).toString(); 
      this.view.tbxStandByHours.text = commonUtils.checkIfEmpty(dprData.dbl_standbyhour) ? "" :   (dprData.dbl_standbyhour).toString();
      this.view.txtOIIOTHoursValue.text =  commonUtils.checkIfEmpty(dprData.dbl_othourcompany) ? "" : (dprData.dbl_othourcompany).toString();
      this.view.txtClientOTHoursValue.text = commonUtils.checkIfEmpty(dprData.dbl_othoursclient) ? "" :  (dprData.dbl_othoursclient).toString();

      this.view.tbxDayRate.text =  commonUtils.checkIfEmpty(dprData.dbl_stdrate) ? "" : (dprData.dbl_stdrate).toString();
      this.view.tbxOTRate.text =  commonUtils.checkIfEmpty(dprData.dbl_ovtrate) ? "" :   (dprData.dbl_ovtrate).toString();
      this.view.tbxStandbyRate.text = commonUtils.checkIfEmpty(dprData.dbl_standbyrate) ? "" : (dprData.dbl_standbyrate).toString();
      this.view.tbxNonDiveRate.text = commonUtils.checkIfEmpty(dprData.dbl_nondivrate) ? "" : (dprData.dbl_nondivrate).toString();

      this.view.lblCheck.skin = (dprData.bln_transstatus == "true" || dprData.bln_transstatus === true) ? commonUtils.TICKSELECTED : commonUtils.TICKUNSELECTED;
      this.view.lblCheck.text = (dprData.bln_transstatus == "true" || dprData.bln_transstatus === true) ? commonUtils.TICK : commonUtils.TICKTEXTUNSEL;
      this.view.calArrivalDate.dateComponents =  commonUtils.checkIfEmpty(dprData.dte_arrival) ? [] : this.getDateFromText((dprData.dte_arrival).substr(0,10));   
      this.view.calDepartDate.dateComponents =  commonUtils.checkIfEmpty(dprData.dte_departure) ? [] : this.getDateFromText((dprData.dte_departure).substr(0,10));

      this.view.lblArrivalTime.text =  commonUtils.checkIfEmpty(dprData.str_arrivalTime) ? "" : dprData.str_arrivalTime.substring(11,16);
      this.view.lblDepartTime.text =  commonUtils.checkIfEmpty(dprData.str_departTime)   ? "" : dprData.str_departTime.substring(11,16); 

      if(!commonUtils.checkIfEmpty(this.view.lblArrivalTime.text)){
        this.view.lblArrivalTime.setVisibility(true);
      }else{
        this.view.lblArrivalTime.setVisibility(false);
      }
      if(!commonUtils.checkIfEmpty(this.view.lblDepartTime.text)){
        this.view.lblDepartTime.setVisibility(true);
      }else{
        this.view.lblDepartTime.setVisibility(false);
      }
      this.view.txtAreaComments.text = commonUtils.checkIfEmpty(dprData.str_comments) ? "" : dprData.str_comments;  
      this.view.lblSupervisorValue.text = commonUtils.checkIfEmpty(headerData.str_supervisorName) ?  (commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.projectSupervisor) ?  "-" :  oceaneering.oms.appGlobals.projectSupervisor) : headerData.str_supervisorName;
      this.view.lblSupervisorId.text = commonUtils.checkIfEmpty(headerData.str_supervisor) ? (commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.projectSupervisorId) ?  "-" :  oceaneering.oms.appGlobals.projectSupervisorId) : headerData.str_supervisor;
      this.view.lblProjectManagerValue.text = commonUtils.checkIfEmpty(headerData.str_opsmanager) ? "-" : headerData.str_opsmanager;

      this.setNormalHours(true); 
      this.checkShiftFromToOT(true);
      this.previousValue = this.captureValues();
    }catch(ex){
      var er = {
        "func" : "updateDPR",
        "err" :  "Exception " +  JSON.stringify(ex)
      };
      commonUtils.exception(this, er , true);
      this.exception(ex);
    }
  },

  fetchTrcEmp : function(empid ,trc){
    try{
      var dta = commonUtils.checkIfEmpty(trc) || trc.length === 0 ? [] : trc.split(",");
      commonUtils.employeeDetails(empid).then((res)=>{
        this.setTRCData(res.offshoreTRCList , dta);
      }, (err)=>{
        kony.print("No TRC's found for employee");
      });
    }catch(ex){
      this.exception(ex);
    }
  },

  /**
    * @desc Resets all field values
    * @param JSON projectData - contains the project data to be displayed on the screen
    * @param JSON employeeData - contains the name, id and role of the current employee
    * @param boolean getTrc - True if we need to call a service to get TRC else false
    * @retun void
  */
  resetScreen : function(headerData, employeeData , creatingDPRForOtherCrew){
    this.view.lblSupervisorValue.text = commonUtils.checkIfEmpty(headerData.str_lastSupervisorName) ?  commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.projectSupervisor) ?  "-" :  oceaneering.oms.appGlobals.projectSupervisor : headerData.str_lastSupervisorName;
    this.view.lblSupervisorId.text = commonUtils.checkIfEmpty(headerData.str_lastSupervisorId) ?  commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.projectSupervisorId) ?  "-" :  oceaneering.oms.appGlobals.projectSupervisorId : headerData.str_lastSupervisorId;
    this.view.lblProjectManagerValue.text  = commonUtils.checkIfEmpty(headerData.str_opsmanager) ? "-" : headerData.str_opsmanager;
    this.view.lblEmplName.text = this.view.lblEmpID.text = this.view.txtAreaComments.text = "";
    this.view.lblProjectDetails.text = "Project Details - " + headerData.str_projid;
    this.view.calReportDate.dateComponents =  commonUtils.checkIfEmpty(headerData.dte_reportdate) ?  this.getDateFromText(this.formatDate(new Date())) : this.getDateFromText((headerData.dte_reportdate).substring(0,10));
    this.view.lblShowReportdate.text =  commonUtils.checkIfEmpty(headerData.dte_reportdate) ? this.formatDate(new Date())  : (headerData.dte_reportdate).substring(0,10);
    this.view.flxReportDate.setEnabled(true);
    this.view.calReportDate.setEnabled(true);
    this.DPRData = {};
    this.view.lblShiftFromTime.text = "";
    this.view.lblShiftToTime.text = "";
    this.view.lblShiftFromOTTime.text = "";
    this.view.lblShiftTOToTime.text = "";
    this.view.lblArrivalTime.text = "";
    this.view.lblDepartTime.text = "";
    this.view.lblJobPosition.text =  this.view.lblTRCValue.text = this.view.lblCrewPosition.text = "None";
    this.view.lblJobCode.text =  this.view.lblCrewPositionCode.text = "";
    this.view.lblShiftType.text = "Normal";
    this.view.lblUOM.text = "None";
    var skin = "sknTbxCreateActive";
    var arr = this.tbxarr;
    for(var j = 0; j < arr.length; j++){
      this.view[arr[j]].skin = skin;
      this.view[arr[j]].setEnabled(true);
    }
    this.view.lblCheck.skin = commonUtils.TICKUNSELECTED;
    this.view.lblCheck.text = commonUtils.TICKTEXTUNSEL;
    this.view.calArrivalDate.clear();
    this.view.calDepartDate.clear();
    this.view.calArrivalDate.placeholder = "----/--/--";
    this.view.calDepartDate.placeholder = "----/--/--";

    this.view.lblDayRateheader.text = (headerData.bln_hourlyrate == "true" || headerData.bln_hourlyrate === true) ? "Hourly Rate" : "Day Rate";
    this.view.lblEmplName.text = oceaneering.oms.appGlobals.employeeFullName;
    this.view.lblEmpID.text = oceaneering.oms.appGlobals.employeeId;
    this.view.lblJobPosition.text = oceaneering.oms.appGlobals.jobPosition;
    this.view.lblJobCode.text = oceaneering.oms.appGlobals.jobCode;
    this.setTRCData(oceaneering.oms.appGlobals.offshoreTRCList);
    this.setContractDefault();
  },

  onClickbackPrompt : function(){
    try{
      this.toggleLoadingIndicator(true);
      this.currentValue = this.captureValues();
      if(this.checkAnyChange()){
        var inp = commonUtils.getPreviousForm();
        if(this.data.operation !== "View"){
          var input = {
            "msg" : "Sure you want to discard changes?",
            "option" :"enable"
          };
          this.view.bottompopup.btnBottomNotNow.text = "No";
          this.view.bottompopup.btnBottomEnable.text = "Yes";
          this.view.bottompopup.btnBottomEnable.onClick = this.onClickOfBack.bind(this);
          this.view.bottompopup.btnBottomNotNow.onClick = ()=>{
            this.dismissBottomPopup();
            this.view.flxCrewSearchResults.setVisibility(false);
          }; 
          this.toggleLoadingIndicator(false);
          this.showBottomPopUp(input);
          this.view.flxCrewSearchResults.setVisibility(false);
          this.view.bottompopup.imgToShow.setVisibility(false);
        } else {
          this.onClickOfBack();
        }
      } else {
        this.onClickOfBack();
      }
    }catch(ex){
      this.exception(ex);
    }
  },
  /**
    * @desc Called on click of the back button
    * @param -
    * @retun void
  */
  onClickOfBack : function(val){
    this.dismissBottomPopup();
    this.toggleLoadingIndicator(true);
    var inp = commonUtils.getPreviousForm();
    if(val == "1"){
      commonUtils.navigateTo(inp.frm ,inp.params); 
      formStack.pop();
    } else if(commonUtils.checkIfEmpty(this.dpr_Info_list) &&  inp.frm == "frmAddDPR"){
      formStack.pop(); 
      var input = commonUtils.getPreviousForm();
      commonUtils.navigateTo(input.frm ,input.params); 
      formStack.pop();
    } else {
      commonUtils.navigateTo(inp.frm ,inp.params); 
      formStack.pop();
    }
    this.toggleLoadingIndicator(false);
    kony.application.destroyForm("frmCreateDPR");
  },

  /**
    * @desc Toggles the in transit checkbox
    * @param -
    * @retun void
  */
  toggleInTransit : function(){
    if(this.view.lblCheck.skin == commonUtils.TICKUNSELECTED){
      this.view.lblCheck.skin = commonUtils.TICKSELECTED;
      this.view.lblCheck.text = commonUtils.TICK; 
    } else {
      this.view.lblCheck.skin = commonUtils.TICKUNSELECTED;
      this.view.lblCheck.text = commonUtils.TICKTEXTUNSEL; 
    }
  },

  /**
    * @desc Called on click of the save button, checks if all the field are filled or not
    * @param -
    * @retun void
  */
  onClickOfSave : function(){
    try {
      this.toggleLoadingIndicator(true);
      var alert = false;
      var labels = [];
      if(commonUtils.checkIfEmpty(this.view.lblJobPosition.text) || this.view.lblJobPosition.text == "None"){
        alert = true;
        labels.push("lblJobPositionHeader");
      }
      if(commonUtils.checkIfEmpty(this.view.lblCrewPosition.text) || this.view.lblCrewPosition.text == "None"){
        alert = true;
        labels.push("lblCrewHeader");
      }
      if(commonUtils.checkIfEmpty(this.view.lblShiftFromTime.text)){
        alert = true;
        labels.push("lblShiftFromHeader");
      }
      if(commonUtils.checkIfEmpty(this.view.lblShiftToTime.text)){
        alert = true;
        labels.push("lblShiftToHeader");
      }
      if(alert){
        if(labels.length > 0){
          this.view[labels[0]].setFocus(true);
        }
        this.toggleLoadingIndicator(false);
        var input = {
          "msg" : "Please enter all the required information.",
          "option" : "error"
        };
        this.showBottomPopUp(input);
      } else { 
        if(this.view.lblTRCValue.text == "None"){
          var inp = {
            "msg" : "Submit timesheet without selecting TRC?",
            "option" :"enable"
          };
          this.view.bottompopup.btnBottomNotNow.text = "No";
          this.view.bottompopup.btnBottomEnable.text = "Yes";
          this.view.bottompopup.btnBottomEnable.onClick = this.onClickYesTRC.bind(this);
          this.view.bottompopup.btnBottomNotNow.onClick = this.dismissBottomPopup.bind(this);
          this.showBottomPopUp(inp);
          this.view.bottompopup.imgToShow.setVisibility(false);
          this.toggleLoadingIndicator(false);
        } else {
          if(this.everyFieldNumber()){
            if(this.arrivalDeparture()){
              this.onClickYesTRC();
            }else{
              this.toggleLoadingIndicator(false);
            }
          } else {
            var parm = {
              "msg" : "Please fill the data in correct format",
              "option" : "error"
            };
            this.showBottomPopUp(parm);
            this.toggleLoadingIndicator(false);
          }
        }
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  everyFieldNumber : function(){
    var tbx = [ "tbxDepth","tbxStandByHours", "txtOIIOTHoursValue" , "txtClientOTHoursValue",
               "tbxDayRate","tbxOTRate","tbxStandbyRate","tbxNonDiveRate"];
    var lbl = ["lblNormalHoursHeader", "lblDepth", "lblStandbyHeader" , "lblOIIOTHours",
               "lblClientOTHours", "lblDayRateheader","lblOtRateheader","lblStandByrateHeader","lblnondiveHeader"];

    for(var j = 0; j < tbx.length; j++){
      if(!commonUtils.checkIfEmpty(this.view[tbx[j]].text) && isNaN(this.view[tbx[j]].text)){
        this.view[lbl[j]].setFocus(true);
        var inp = {
          "msg" : "Please enter valid data in fields.",
          "option" : "error"
        };
        this.showBottomPopUp(inp);
        return false;
      }
    }
    return true;
  },

  onClickYesTRC : function(){
    this.dismissBottomPopup();
    this.toggleLoadingIndicator(true);
    if(!commonUtils.checkIfEmpty(this.view.lblCountHours.text) && (this.view.lblCountHours.text == ">24" || parseInt(this.view.lblCountHours.text) > 15)){
      var inp = {
        "msg" : "You have entered more than 15 Hours. Sure you want to proceed?",
        "option" : "enable"
      };
      this.view.bottompopup.btnBottomNotNow.text = "No";
      this.view.bottompopup.btnBottomEnable.text = "Yes";
      this.view.bottompopup.btnBottomEnable.onClick = this.checkNextOperation.bind(this);
      this.view.bottompopup.btnBottomNotNow.onClick = this.dismissBottomPopup.bind(this);
      this.showBottomPopUp(inp);
      this.view.bottompopup.imgToShow.setVisibility(false);
      this.toggleLoadingIndicator(false);
    }else{
      this.checkNextOperation();
    }
  },

  /**
    * @desc Checks if the dpr needs to created or updated
    * @param -
    * @retun void
  */
  checkNextOperation : function(){
    this.dismissBottomPopup();
    this.toggleLoadingIndicator(true);
    if(this.view.lblTitle.text == "Create Timesheet"){
      this.prepareCreateDPRDetails();
    } else if(this.view.lblTitle.text == "Update Timesheet"){
      this.prepareUpdateDPRDetails();
    }
  },

  /**
    * @desc Checks getDateFromText
    * @param -
    * @retun void
  */
  getDateFromText : function(date){
    var month = "";
    var year = "";
    var day = "";
    var arr = date.split("-");
    return [arr[2], arr[1], arr[0], 0 , 0 , 0];
  },

  /**
    * @desc Checks if the report date is greater than the current date or not
    * @param -
    * @retun boolen - true if report date is greater than current date else false
  */
  checkIfReportDateGreaterThanToday : function(){
    var reportDate = this.view.calReportDateValue.dateComponents;
    var reportDateFinal = (parseInt(reportDate[2]) * 10000) + (parseInt(reportDate[1]) * 100) + parseInt(reportDate[0]);
    var currentDate = new Date();
    var currentDateFinal = (currentDate.getFullYear() * 10000) + ((currentDate.getMonth() + 1) * 100) + currentDate.getDate();
    return (reportDateFinal > currentDateFinal);
  },

  /**
    * @desc Prepares a JSON containing all the data required to update the dpr
    * @param -
    * @retun void
  */
  prepareUpdateDPRDetails : function(){
    try{
      var dprDetails = Object.assign({}, commonUtils.dprPersonnel);
      dprDetails.str_dprId = this.data.headerData.str_reportid; 
      dprDetails.str_reportid = this.data.dprData.str_reportid;
      dprDetails.str_systemid = this.data.headerData.str_projid;
      dprDetails.lng_linenumber = this.data.dprData.lng_linenumber;

      dprDetails.str_employeeName = this.view.lblEmplName.text;
      dprDetails.str_employeeid = this.view.lblEmpID.text;

      dprDetails.str_jobPosition = (this.view.lblJobPosition.text == "None") ? null : this.view.lblJobPosition.text;
      dprDetails.str_positioncode =  (commonUtils.checkIfEmpty(this.view.lblJobCode.text)) ? null : this.view.lblJobCode.text;
      dprDetails.str_crewPosition =  (this.view.lblCrewPosition.text == "None") ? null : this.view.lblCrewPosition.text;
      dprDetails.str_crewpositioncode = (commonUtils.checkIfEmpty(this.view.lblCrewPositionCode.text)) ? null : this.view.lblCrewPositionCode.text;

      dprDetails.dte_arrival =  this.getReportDate(this.view.calArrivalDate);
      dprDetails.dte_departure =  this.getReportDate(this.view.calDepartDate);

      dprDetails.lng_shifttype = (this.view.lblShiftType == "None") ? null : commonUtils.getShiftTypeId(this.view.lblShiftType.text);

      dprDetails.dbl_othourcompany = commonUtils.checkIfEmpty(this.view.txtOIIOTHoursValue.text) ? null : (this.view.txtOIIOTHoursValue.text).toString();
      dprDetails.dbl_othoursclient = commonUtils.checkIfEmpty(this.view.txtClientOTHoursValue.text) ? null : (this.view.txtClientOTHoursValue.text).toString();
      dprDetails.dbl_shifthour = commonUtils.checkIfEmpty(this.view.lblNrmlHours.text) ? null : (this.view.lblNrmlHours.text).toString();

      dprDetails.dbl_standbyhour = commonUtils.checkIfEmpty(this.view.tbxStandByHours.text) ? null : (this.view.tbxStandByHours.text).toString();
      dprDetails.dbl_billinghour = commonUtils.checkIfEmpty(this.view.lblNrmlHours.text) ? null : (this.view.lblNrmlHours.text).toString();

      dprDetails.dte_shiftstart =  commonUtils.checkIfEmpty(this.view.lblShiftFromTime.text) ? null : this.formatDate(new Date()) +"T" + this.view.lblShiftFromTime.text + ":00";
      dprDetails.dte_shiftend = commonUtils.checkIfEmpty(this.view.lblShiftToTime.text) ? null : this.formatDate(new Date()) +"T" + this.view.lblShiftToTime.text + ":00";
      dprDetails.dte_otshiftstart = commonUtils.checkIfEmpty(this.view.lblShiftFromOTTime.text) ? null : this.formatDate(new Date()) +"T" + this.view.lblShiftFromOTTime.text + ":00";
      dprDetails.dte_otshiftend = commonUtils.checkIfEmpty(this.view.lblShiftTOToTime.text) ? null : this.formatDate(new Date()) + "T" + this.view.lblShiftTOToTime.text + ":00";

      dprDetails.dbl_standbyrate =  commonUtils.checkIfEmpty(this.view.tbxStandbyRate.text) ? null : (this.view.tbxStandbyRate.text).toString();
      dprDetails.dbl_nondivrate =  commonUtils.checkIfEmpty(this.view.tbxNonDiveRate.text) ? null : (this.view.tbxNonDiveRate.text).toString();
      dprDetails.dbl_stdrate = commonUtils.checkIfEmpty(this.view.tbxDayRate.text) ? null : (this.view.tbxDayRate.text).toString();
      dprDetails.dbl_ovtrate = commonUtils.checkIfEmpty(this.view.tbxOTRate.text) ? null : (this.view.tbxOTRate.text).toString();

      dprDetails.bln_transstatus = (this.view.lblCheck.skin == commonUtils.TICKSELECTED)? true : false;

      dprDetails.dbl_divedepth = commonUtils.checkIfEmpty(this.view.tbxDepth.text) ? null : (this.view.tbxDepth.text).toString();
      dprDetails.lng_DepthUom =  this.view.lblUOM.text == "None" ? null : (this.view.lblUOM.text === "Feet (ft)") ? 7102 : 7101;

      dprDetails.str_arrivalTime = commonUtils.checkIfEmpty(this.view.lblArrivalTime.text) ? null : this.formatDate(new Date()) + "T" + this.view.lblArrivalTime.text + ":00";
      dprDetails.str_departTime =  commonUtils.checkIfEmpty(this.view.lblDepartTime.text) ? null : this.formatDate(new Date()) + "T" + this.view.lblDepartTime.text + ":00";
      dprDetails.str_comments = commonUtils.checkIfEmpty(this.view.txtAreaComments.text) ? null : this.view.txtAreaComments.text;

      dprDetails.str_trc = this.getTRCResult().trc;
      dprDetails.str_trcCodes = this.getTRCResult().trcCodes;

      dprDetails.str_createdBy = oceaneering.oms.appGlobals.employeeId;
      dprDetails.dte_createdDate = this.formatDate(new Date());
      dprDetails.str_lastModifiedBy  = oceaneering.oms.appGlobals.employeeId;
      dprDetails.dte_lastModifiedDate = this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0,8);

      dprDetails.sourceType = commonUtils.checkIfEmpty(this.view.lblSourceType.text) ? "" : this.view.lblSourceType.text;
      dprDetails.ProjectNumber = commonUtils.checkIfEmpty(this.view.lblProject.text) ? "" : this.view.lblProject.text;  
      dprDetails.Activity = commonUtils.checkIfEmpty(this.view.lblActivityId.text) ? "" : this.view.lblActivityId.text;
      dprDetails.category = commonUtils.checkIfEmpty(this.view.lblCategoryId.text) ? "" : this.view.lblCategoryId.text;

      var sub = this.getSubcategoryResult().subCategoryCodes;
      dprDetails.subCategory = commonUtils.checkIfEmpty(sub) ? "" : sub;

      var reportDte = new Date(this.data.headerData.dte_reportdate);
      var arrivalDte = commonUtils.checkIfEmpty(dprDetails.dte_arrival) ? null : new Date(dprDetails.dte_arrival);
      var departDte =  commonUtils.checkIfEmpty(dprDetails.dte_departure) ? null :  new Date(dprDetails.dte_departure);
      if ((!commonUtils.checkIfEmpty(dprDetails.dte_arrival) &&  !commonUtils.checkIfEmpty(arrivalDte) && arrivalDte.getFullYear() <= 1900)){
        dprDetails.dte_arrival = null;
        this.view.calArrivalDate.clear();
        this.view.calArrivalDate.placeholder = "----/--/--";
      }
      if (!commonUtils.checkIfEmpty(dprDetails.dte_departure) &&  !commonUtils.checkIfEmpty(departDte) &&  departDte.getFullYear() <= 1900){
        dprDetails.dte_departure = null;
        this.view.calDepartDate.clear(); 
        this.view.calDepartDate.placeholder = "----/--/--";
      }
      if((!commonUtils.checkIfEmpty(dprDetails.dte_departure) && Date.parse(departDte) < Date.parse(reportDte) && (dprDetails.bln_transstatus === false || dprDetails.bln_transstatus == "false"))){
        dprDetails.dte_departure = null;
        this.view.calDepartDate.clear();
        this.view.calDepartDate.placeholder = "----/--/--";
        var inp  = {
          "msg"   : "If crew member is not in transit, then Departure Date cannot be smaller than Report Date",
          "option" : "error"
        }; 
        this.showBottomPopUp(inp);    
      } else if ((!commonUtils.checkIfEmpty(dprDetails.dte_departure) && Date.parse(departDte) > Date.parse(reportDte)  && (dprDetails.bln_transstatus === false || dprDetails.bln_transstatus == "false"))){
        dprDetails.dte_departure = null;
        this.view.calDepartDate.clear(); 
        this.view.calDepartDate.placeholder = "----/--/--";
        var input  = {
          "msg"   : "If crew member is in transit, then Departure Date cannot be greater than Report Date",
          "option" : "error"
        }; 
        this.showBottomPopUp(input);
      }else{
        this.updateDPR(dprDetails);
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  /**
    * @desc Calls a service to update the dpr
    * @param JSON dprDetails - Contains the details of the dpr
    * @retun void
  */
  updateDPR : function(dprDetails){
    var self = this;
    commonUtils.UpdateDPRPersonnel(dprDetails).then((res)=>{
      this.updateCreateCrewList(dprDetails);
      kony.timer.schedule("update", ()=>{
        kony.timer.cancel("update");
        self.dismissSuccess();
        self.successCallback_SaveDPR();
      }, 0.6, false);
      this.showSuccess();
      this.data.headerData.str_lastModifiedBy = oceaneering.oms.appGlobals.employeeId;
      this.data.headerData.dte_reportdate =  (this.data.headerData.dte_reportdate).substring(0,10);
      commonUtils.UpdateDPRHeader(this.data.headerData).then(res =>{
        kony.print("Updted Header");
      }, (err)=>{
        kony.print("Updated Failed");
      });
    }, (err)=>{
      var inp = {
        "msg" : err,
        "option" : "error"
      };
      this.showBottomPopUp(inp);
      this.toggleLoadingIndicator(false);
      var er = {
        "func" : "updateDPR",
        "err" :  "Errorcallback " +  JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    });
  },


  /**
    * @desc Prepares a JSON containing all the data required to create a dpr
    * @param -
    * @retun void
  */
  prepareCreateDPRDetails : function(){
    try{ 
      var self = this;
      var dprDetails = Object.assign({}, commonUtils.dprPersonnel);
      dprDetails.str_reportid = "PROJ_" + this.view.lblEmpID.text + "-" + Date.now();
      dprDetails.str_dprId = this.data.headerData.str_reportid;
      dprDetails.lng_linenumber =  !commonUtils.checkIfEmpty(this.data.dpr_Info_list) && this.data.dpr_Info_list.length > 0 ? this.data.dpr_Info_list.length + 1 : 1;

      dprDetails.str_systemid = this.data.headerData.str_projid;
      dprDetails.str_employeeName = this.view.lblEmplName.text;
      dprDetails.str_employeeid = this.view.lblEmpID.text;

      dprDetails.str_jobPosition = (this.view.lblJobPosition.text == "None") ? null : this.view.lblJobPosition.text;
      dprDetails.str_positioncode =  (commonUtils.checkIfEmpty(this.view.lblJobCode.text)) ? null : this.view.lblJobCode.text;
      dprDetails.str_crewPosition =  (this.view.lblCrewPosition.text == "None") ? null : this.view.lblCrewPosition.text;
      dprDetails.str_crewpositioncode = (commonUtils.checkIfEmpty(this.view.lblCrewPositionCode.text)) ? null : this.view.lblCrewPositionCode.text;

      dprDetails.str_trc = this.getTRCResult().trc;
      dprDetails.str_trcCodes = this.getTRCResult().trcCodes;
      dprDetails.lng_shifttype = (this.view.lblShiftType.text == "None") ? 1 : commonUtils.getShiftTypeId(this.view.lblShiftType.text);

      dprDetails.dbl_divedepth = commonUtils.checkIfEmpty(this.view.tbxDepth.text) ? null : (this.view.tbxDepth.text);
      dprDetails.lng_DepthUom = this.view.lblUOM.text == "None" ? null : (this.view.lblUOM.text == "Feet (ft)") ? 7102 : 7101;

      dprDetails.dte_shiftstart = commonUtils.checkIfEmpty(this.view.lblShiftFromTime.text) ? null : this.formatDate(new Date()) + "T" + this.view.lblShiftFromTime.text + ":00";
      dprDetails.dte_shiftend = commonUtils.checkIfEmpty(this.view.lblShiftToTime.text) ? null :  this.formatDate(new Date()) + "T" + this.view.lblShiftToTime.text + ":00";
      dprDetails.dte_otshiftstart = commonUtils.checkIfEmpty(this.view.lblShiftFromOTTime.text) ? null :  this.formatDate(new Date()) + "T" + this.view.lblShiftFromOTTime.text + ":00";
      dprDetails.dte_otshiftend = commonUtils.checkIfEmpty(this.view.lblShiftTOToTime.text) ? null :  this.formatDate(new Date()) + "T" + this.view.lblShiftTOToTime.text + ":00";

      dprDetails.dbl_billinghour = commonUtils.checkIfEmpty(this.view.lblNrmlHours.text) ? null : (this.view.lblNrmlHours.text).toString();
      dprDetails.dbl_standbyhour = commonUtils.checkIfEmpty(this.view.tbxStandByHours.text) ? null : (this.view.tbxStandByHours.text).toString();
      dprDetails.dbl_othourcompany = commonUtils.checkIfEmpty(this.view.txtOIIOTHoursValue.text) ? null : (this.view.txtOIIOTHoursValue.text).toString();
      dprDetails.dbl_othoursclient = commonUtils.checkIfEmpty(this.view.txtClientOTHoursValue.text) ? null : (this.view.txtClientOTHoursValue.text).toString();
      dprDetails.dbl_shifthour = commonUtils.checkIfEmpty(this.view.lblNrmlHours.text) ? null : (this.view.lblNrmlHours.text).toString();

      dprDetails.dbl_stdrate = commonUtils.checkIfEmpty(this.view.tbxDayRate.text) ? null : (this.view.tbxDayRate.text).toString();
      dprDetails.dbl_ovtrate =  commonUtils.checkIfEmpty(this.view.tbxOTRate.text) ? null : (this.view.tbxOTRate.text).toString();
      dprDetails.dbl_standbyrate = commonUtils.checkIfEmpty(this.view.tbxStandbyRate.text) ? null : (this.view.tbxStandbyRate.text).toString();
      dprDetails.dbl_nondivrate =  commonUtils.checkIfEmpty(this.view.tbxNonDiveRate.text) ? null : (this.view.tbxNonDiveRate.text).toString();

      dprDetails.bln_transstatus = (this.view.lblCheck.skin == commonUtils.TICKSELECTED)? true : false;

      dprDetails.dte_arrival =  this.getReportDate(this.view.calArrivalDate);
      dprDetails.str_arrivalTime = commonUtils.checkIfEmpty(this.view.lblArrivalTime.text) ? null : this.formatDate(new Date()) + "T" + this.view.lblArrivalTime.text + ":00";
      dprDetails.dte_departure =  this.getReportDate(this.view.calDepartDate);
      dprDetails.str_departTime =  commonUtils.checkIfEmpty(this.view.lblDepartTime.text) ? null : this.formatDate(new Date()) + "T" + this.view.lblDepartTime.text + ":00";

      dprDetails.str_comments = commonUtils.checkIfEmpty(this.view.txtAreaComments.text) ? null : this.view.txtAreaComments.text.replace(/\n/g, " ");
      dprDetails.str_createdBy = oceaneering.oms.appGlobals.employeeId;
      dprDetails.dte_createdDate = this.formatDate(new Date());
      dprDetails.str_lastModifiedBy  = oceaneering.oms.appGlobals.employeeId;
      dprDetails.dte_lastModifiedDate = this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0,8);

      dprDetails.sourceType = commonUtils.checkIfEmpty(this.view.lblSourceType.text)  || this.view.lblSourceType.text == "None" ? "" : this.view.lblSourceType.text;
      dprDetails.ProjectNumber = commonUtils.checkIfEmpty(this.view.lblProject.text) || this.view.lblProject.text == "None" ? "" : this.view.lblProject.text;  
      dprDetails.Activity = commonUtils.checkIfEmpty(this.view.lblActivityId.text)  || this.view.lblActivityId.text == "None" ? "" : this.view.lblActivityId.text;
      dprDetails.category = commonUtils.checkIfEmpty(this.view.lblCategoryId.text)  || this.view.lblCategoryId.text == "None" ? "" : this.view.lblCategoryId.text;
      var sub = this.getSubcategoryResult().subCategoryCodes;
      dprDetails.subCategory = commonUtils.checkIfEmpty(sub) ? "" : sub;

      var reportDte = new Date(this.data.headerData.dte_reportdate);
      var arrivalDte = commonUtils.checkIfEmpty(dprDetails.dte_arrival) ? null : new Date(dprDetails.dte_arrival);
      var departDte =  commonUtils.checkIfEmpty(dprDetails.dte_departure) ? null :  new Date(dprDetails.dte_departure);
      if ((!commonUtils.checkIfEmpty(dprDetails.dte_arrival) &&  !commonUtils.checkIfEmpty(arrivalDte) && arrivalDte.getFullYear() <= 1900)){
        dprDetails.dte_arrival = null;
        this.view.calArrivalDate.clear();
        this.view.calArrivalDate.placeholder = "----/--/--";
      }
      if (!commonUtils.checkIfEmpty(dprDetails.dte_departure) &&  !commonUtils.checkIfEmpty(departDte) &&  departDte.getFullYear() <= 1900){
        dprDetails.dte_departure = null;
        this.view.calDepartDate.clear(); 
        this.view.calDepartDate.placeholder = "----/--/--";
      }
      if((!commonUtils.checkIfEmpty(dprDetails.dte_departure) && departDte < reportDte && (dprDetails.bln_transstatus === false || dprDetails.bln_transstatus == "false"))){
        dprDetails.dte_departure = null;
        this.view.calDepartDate.clear();
        this.view.calDepartDate.placeholder = "----/--/--";
        var inp = {
          "msg"   : "If crew member is not in transit, then Departure Date cannot be smaller than Report Date",
          "option" : "error"
        }; 
        this.showBottomPopUp(inp);    
      } else if ((!commonUtils.checkIfEmpty(dprDetails.dte_departure) && departDte > reportDte  && (dprDetails.bln_transstatus === true || dprDetails.bln_transstatus == "true"))){
        dprDetails.dte_departure = null;
        this.view.calDepartDate.clear();
        this.view.calDepartDate.placeholder = "----/--/--";
        var input  = {
          "msg"   : "If crew member is in transit, then Departure Date cannot be greater than Report Date",
          "option" : "error"
        }; 
        this.showBottomPopUp(input);
      } else {          
        if(this.data.employeeData.role == "crew"){
          var header = "";
          var headerList = [];
          var inpt = {
            "date" : this.getReportDate(this.view.calReportDate),
            "projectId" : this.data.headerData.str_projid
          };
          push.pushMessage.reportDate = inpt.date;
          push.pushMessage.projectId = inpt.projectId;
          commonUtils.getAllDPRForProjectToday(inpt).then((res)=>{
            var response = res.OMS_OP_Dailyreportheader;          
            if(!commonUtils.checkIfEmpty(response) && response.length > 0 && response.length == 1){
              header = response[0]; // last modified dpr
              dprDetails.str_dprId = header.str_reportid;
              dprDetails.str_systemid = header.str_systemid;
              self.createDPR(dprDetails, true);
            } else if(!commonUtils.checkIfEmpty(response) && response.length > 0){
              headerList = response; // if there are multiple dprs available
              self.dprDetails = dprDetails;
              self.showDprList(headerList, true);
            } else {
              commonUtils.createDPRHeader(this.data.headerData).then((res)=>{
                self.createDPR(dprDetails, true);
              },(err)=>{
                self.showBottomPopUp();
                var er =  {
                  "func" : "prepareCreateDPRDetails-createDPRHeader",
                  "err" : "ErrorCallback " + JSON.stringify(err)
                };   
                commonUtils.exception(this, er , true);
              });
            }      
          }, (err)=>{
            self.showBottomPopUp();
            var er =  {
              "func" : "prepareCreateDPRDetails-getAllDPRForProject",
              "err" : "ErrorCallback " + JSON.stringify(err)
            };   
            commonUtils.exception(this, er , true);
          });
        } else {
          if(!commonUtils.checkIfEmpty(this.newHeader) && this.newHeader){  
            commonUtils.createDPRHeader(this.data.headerData).then((res)=>{            
              self.createDPR(dprDetails, false);
            }, (err)=>{
              this.toggleLoadingIndicator(false);
              this.showBottomPopUp();
              var er =  {
                "func" : "prepareCreateDPRDetails",
                "err" : "ErrorCallback " + JSON.stringify(err)
              };   
              commonUtils.exception(this, er , true);
            });
          } else if(!commonUtils.checkIfEmpty(this.newHeader) && !this.newHeader){
            self.createDPR(dprDetails, false);
          } else{
            self.toggleLoadingIndicator(false);
          }
        }
      }   
    }catch(ex){
      this.exception(ex);    
    }
  },

  showDprList : function(dprs){
    try{
      var dprsList = [];
      for(var i = 0; i < dprs.length; i++){
        var inp = {
          "lblProject" : dprs[i].str_systemid,
          "lblDate" : (dprs[i].dte_reportdate).substring(0 , 10),
          "lblReportId" : dprs[i].str_reportid,      
          "data" : dprs[i],
          "template" : "flxCrewDprs"
        };
        dprsList.push(inp);
      }
      this.view.dprlist.segServiceLine.setData(dprsList);   
      kony.timer.schedule("dprLst", ()=>{
        kony.timer.cancel("dprLst");
        this.onClickListBottom(this.view.dprlist);
        this.toggleLoadingIndicator(false);
      }, 0.4, false);
    }catch(ex){
      this.exception(ex);
    }
  },

  onRowDprList : function(){
    this.toggleLoadingIndicator(true);
    var selected = this.view.dprlist.segServiceLine.selectedRowItems[0];
    this.onSelectedDpr(selected.data); // value is report Id
    this.HideActivity(this.view.dprlist);
  },

  onSelectedDpr : function(data){
    var details = this.dprDetails;
    details.str_dprId = data.str_reportid;
    details.str_systemid = data.str_systemid;
    push.pushMessage.reportDate = data.dte_reportdate;
    push.pushMessage.projectId = data.str_systemid;
    this.createDPR(details, true);
  },
  /**
    * @desc Calls a service to create a dpr
    * @param JSON dprDetails - Contains the details of the dpr
    * @retun void
  */
  createDPR : function(dprDetails ,crew){
    try{
      var self = this;
      var inp = {
        "reportId" : dprDetails.str_dprId,
        "crewPosition" : dprDetails.str_crewPosition,
        "name" : dprDetails.str_employeeName,
      };
      push.pushMessage.dprId = dprDetails.str_dprId;
      commonUtils.createDPRPersonnel(dprDetails).then((res)=>{
        this.updateCreateCrewList(dprDetails); 
        commonUtils.saveRoasterCreate(inp);    
        push.getToken();
        kony.timer.schedule("success", ()=>{
          kony.timer.cancel("success");
          self.dismissSuccess();
          self.successCallback_SaveDPR(); 
        }, 0.6, false);
        this.showSuccess();
      }, (err)=>{
        this.showErrorMessage();
        var er =  {
          "func" : "createDPR",
          "ex" : "ErrorCallback " + JSON.stringify(err)
        };   
        commonUtils.exception(this, er , true);
      });
    } catch(ex){
      var er = {
        "func" : "createDPR",
        "err" :  "Exception " + JSON.stringify(ex)
      };
      commonUtils.exception(this, er , true);
    }
  },

  /**
    * @desc Success callback of create dpr service
    * @param JSON response - Contains the new dpr info
    * @retun void
  */
  successCallback_SaveDPR : function(){
    this.toggleLoadingIndicator(false);
    this.onClickOfBack("1");
  },

  updateCreateCrewList : function(data){
    try{
      var existingList = commonUtils.crewList;
      var filteredArray = [];
      if(!commonUtils.checkIfEmpty(existingList) && existingList.length > 0){
        filteredArray = commonUtils.crewList.filter(crew => crew.str_employeeid == data.str_employeeid);
      }
      var inp = {
        "str_employeeid": data.str_employeeid ,
        "str_employeeName": data.str_employeeName,
        "role": (data.str_employeeid == oceaneering.oms.appGlobals.employeeId) ? "supervisor" : "crew",
        "str_projid" : this.data.headerData.str_projid,

        "str_crewPosition": commonUtils.checkIfEmpty(data.str_crewPosition) ? null : data.str_crewPosition,
        "str_crewpositioncode":  commonUtils.checkIfEmpty(data.str_crewpositioncode) ? null : data.str_crewpositioncode,
        "str_jobPosition": commonUtils.checkIfEmpty(data.str_jobPosition) ? null : data.str_jobPosition,
        "str_positioncode":  commonUtils.checkIfEmpty(data.str_positioncode) ? null : data.str_positioncode,
        "dte_arrival":  commonUtils.checkIfEmpty(data.dte_arrival) ? null : data.dte_arrival,
        "dtr_departure":  commonUtils.checkIfEmpty(data.dte_departure) ? null : data.dte_departure,

        "dbl_stdrate" :  commonUtils.checkIfEmpty(data.dbl_stdrate) ? null : (data.dbl_stdrate).toString(),
        "dbl_ovtrate":  commonUtils.checkIfEmpty(data.dbl_ovtrate) ? null : (data.dbl_ovtrate).toString(),
        "dbl_standbyrate":  commonUtils.checkIfEmpty(data.dbl_standbyrate) ? null : (data.dbl_standbyrate).toString(),
        "dbl_nondivrate": commonUtils.checkIfEmpty(data.dbl_nondivrate) ? null : (data.dbl_nondivrate).toString(),

        "str_createdBy": data.str_createdBy,
        "dte_createdDate": commonUtils.checkIfEmpty(data.dte_createdDate) ? null : data.dte_createdDate.substring(0 , 10),
        "str_lastModifiedBy": data.str_lastModifiedBy,
        "dte_lastModifiedDate": commonUtils.checkIfEmpty(data.dte_lastModifiedDate) ? null : data.dte_lastModifiedDate.substring(0 , 10)  + "T" +  data.dte_lastModifiedDate.substring(11 , 19)
      }; 
      if(filteredArray.length === 0){
        commonUtils.createCrewInfo(inp).then((res)=>{
          kony.print("Crew Created");
        }, (err)=>{
          kony.print("Crew Creation Failed");
        });
      }else{
        commonUtils.updateCrewInfo(inp).then((res)=>{
          kony.print("Crew Updated");
        }, (err)=>{
          kony.print("Crew Updation Failed");
        });
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  getShiftTypeId : function(value){
    if(value == "Normal"){
      return 1;
    }else if(value == "Night"){
      return 2;
    }else if(value == "Standby"){
      return 4;
    }
  },

  getShiftTypeFromId : function(value){
    if(value == 1){
      return "Normal";
    }else if(value == 2){
      return "Night";
    }else if(value == 4){
      return "Standby";
    }
  },

  /**
    * @desc Generates a string from the report date array
    * @param -
    * @retun String - report date in yyyy-mm-dd format
  */
  getReportDate : function(widget){
    var month = '' + widget.dateComponents[1],
        day = '' + widget.dateComponents[0],
        year = widget.dateComponents[2];
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if(year == "-1" || year == -1 || year === 0 || year == "0" || day == "00"){
      return null;
    }
    return year + "-" + month + "-" + day;
  },

  /**
    * @desc Formats a date object into a string in the format YYYY-MM-DD
    * @param Date date - Contains a date object of a date to be converted into string
    * @retun String - YYYY-MM-DD date
  */
  formatDate : function(date) {
    var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    return year + "-" + month + "-" + day;
  },

  /**
    * @desc Commom error callback for service calls
    * @param JSON error - Contains the error message and error code of service call
    * @retun void
  */
  errorCallback: function(error){
    this.showErrorMessage();
  },

  /**
    * @desc Shows the common error message
    * @param -
    * @retun void
  */
  showErrorMessage : function(){
    this.toggleLoadingIndicator(false);
    this.showBottomPopUp({ "msg" :  commonUtils.errMessage, "option" : "error"});
  },

  /**
    * @desc Toggles loading indicator on and off
    * @param boolean value - True: to show loading indicator, false: to hide loading indicator
    * @retun void
  */
  toggleLoadingIndicator : function(value){
    if(!commonUtils.checkIfEmpty(this) && !commonUtils.checkIfEmpty(this.view)){
      this.view.flxLoading.setVisibility(value);
      this.view.flxLoading.setEnabled(!value);
      this.view.flxMain.setEnabled(!value);
    }
  },

  showBottomPopUp : function(input){
    try{
      var self = this;
      this.toggleLoadingIndicator(false);
      if(commonUtils.checkIfEmpty(input)){
        var inp = {
          "msg" : commonUtils.errMessage,
          "option" : "error"
        };
        input = inp;
      }
      this.resetBottomPopUp();
      this.view.bottompopup.flxBottomPopUp.height = "210dp";
      this.view.bottompopup.lblBottomMessage.bottom = "100dp";
      this.view.bottompopup.lblBottomMessage.text = input.msg;
      switch(input.option){
        case "enable" : {
          this.view.bottompopup.flxEnableTouch.setVisibility(true);
          this.view.bottompopup.imgToShow.setVisibility(true);
          this.view.bottompopup.flxBottomContainer.onClick = ()=>{};
          break;
        }
        case "error" : {
          this.view.bottompopup.lblBottomMessage.bottom = "110dp";
          this.view.bottompopup.flxBottomPopUp.height = "200dp";
          this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
          break;
        }
        case "auth" : {
          this.view.bottompopup.imgToShow.setVisibility(true);
          this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
          this.view.bottompopup.flxBottomContainer.onClick = ()=>{};
          break;
        }
        case "errorOk" : {
          this.view.bottompopup.lblBottomMessage.bottom = "110dp";
          this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
          this.view.bottompopup.flxBottomPopUp.height = "200dp";
          this.view.bottompopup.btnDismissBottomPopUp.text = "OK";
          break;
        }
      }
      this.view.bottompopup.setVisibility(true);
      this.view.bottompopup.flxBottomPopUp.animate(
        kony.ui.createAnimation({
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
          "animationEnd": ()=>{
            if(!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.bottompopup)){
              self.view.bottompopup.setVisibility(true);
              self.view.bottompopup.flxBottomCover.setVisibility(true);
            }
          }
        }); 
    } catch(ex){
      this.exception(ex);
    }
  },

  dismissBottomPopup : function(){
    try{
      var self = this;
      this.view.bottompopup.flxBottomPopUp.animate(
        kony.ui.createAnimation({
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
          "animationEnd": ()=> {
            if(!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.bottompopup)){
              self.view.bottompopup.setVisibility(false);
            }
          }
        });
    }catch(ex){
      this.exception(ex);
    }
  },

  resetBottomPopUp : function(){
    this.view.bottompopup.flxBottomPopUp.height = "0dp";
    this.view.bottompopup.flxBottomCover.setVisibility(false);
    this.view.bottompopup.lblBottomMessage.text = "";
    this.view.bottompopup.btnDismissBottomPopUp.setVisibility(false);
    this.view.bottompopup.imgToShow.setVisibility(false);
    this.view.bottompopup.flxEnableTouch.setVisibility(false);
  },

  // -------------------- Open List bottom up ------------ //
  onClickListBottom : function(widget) {
    try{
      var self = this;
      self.view.flxPersonnelDetailsBody.setEnabled(false);
      widget.setVisibility(true);
      widget.flxFilterContainer.animate(
        kony.ui.createAnimation({
          "100": {
            "bottom" : "0dp",
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
          "animationEnd": ()=>{
            widget.setVisibility(true);
            widget.flxCoontainer.setVisibility(true);
          }
        });
    }catch(ex){
      this.exception(ex);
    }
  },

  HideActivity : function(widget){
    try{
      var self = this;
      if(!commonUtils.checkIfEmpty(self.view)){
        self.view.flxPersonnelDetailsBody.setEnabled(true);
      }
      widget.flxFilterContainer.animate(
        kony.ui.createAnimation({
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
          "animationEnd": ()=> {
            widget.setVisibility(false);
            widget.flxCoontainer.setVisibility(false);
            widget.flxFilterContainer.bottom = "-370dp";
          }
        });
      this.toggleLoadingIndicator(false);
    }catch(ex){
      this.exception(ex);
    }
  },

  onRowCrewPosition : function(){
    var selected = this.view.crewPosition.segServiceLine.selectedRowItems[0];
    this.view.lblCrewPosition.text = selected.lblValue;
    this.view.lblCrewPositionCode.text = selected.code;
    this.HideActivity(this.view.crewPosition);
  },

  onRowClickShiftType : function(){
    var selected = this.view.shiftType.segServiceLine.selectedRowItems[0];
    this.view.lblShiftType.text = selected.lblValue;
    this.HideActivity( this.view.shiftType);
  },

  onRowUOM : function(){
    var selected = this.view.UOM.segServiceLine.selectedRowItems[0];
    this.view.lblUOM.text = selected.desc;
    this.HideActivity(this.view.UOM);
  },

  onRowClickTRC : function(){
    try{
      var selected = this.view.SegTRC.segServiceLine.selectedRowItems[0];
      var deviceInfo = kony.os.deviceInfo();  
      var index = "";
      if(deviceInfo.name != "iPhone"){
        index = this.view.SegTRC.segServiceLine.selectedRowIndex[1];
      }else{
        index = this.view.SegTRC.segServiceLine.selectedIndex[1];
      }
      if(selected.lblCheck.skin == commonUtils.TICKSELECTED){
        selected.lblCheck.skin = commonUtils.TICKUNSELECTED;
        selected.lblCheck.text = commonUtils.TICKTEXTUNSEL;      
      }else{
        selected.lblCheck.skin = commonUtils.TICKSELECTED;
        selected.lblCheck.text = commonUtils.TICK;
      }
      this.view.SegTRC.segServiceLine.setDataAt(selected, index);
    }catch(ex){
     this.exception(ex);
    }
  },

  getTRCResult : function(){
    try{
      var data = this.view.SegTRC.segServiceLine.data;
      var strTrc = "";
      var strTrcCodes = "";
      for(var j = 0; j < data.length; j++){
        if(data[j].lblCheck.skin == commonUtils.TICKSELECTED){
          strTrc += data[j].lblValue;
          if(j != data.length -1){
            strTrc +=",";
          }
          strTrcCodes += data[j].code;
          if(j != data.length -1){
            strTrcCodes +=",";
          }
        }
      }
      return { 
        trc : strTrc,
        trcCodes : strTrcCodes
      };
    }catch(ex){
     this.exception(ex);
    }
  },

  setNormalHours : function(val){
    if(!commonUtils.checkIfEmpty(this.view.lblShiftFromTime.text) && !commonUtils.checkIfEmpty(this.view.lblShiftToTime.text)){
      var from = Date.parse(new Date(this.view.lblDateShiftFrom.text + "T" + this.view.lblShiftFromTime.text + ":00"));
      var to = Date.parse(new Date(this.view.lblShiftToDate.text + "T" +  this.view.lblShiftToTime.text + ":00"));
      this.toggleLoadingIndicator(false);
      this.view.lblNrmlHours.text = commonUtils.getTimeDiff(this.view.lblShiftToTime.text, this.view.lblShiftFromTime.text);
      this.countHours();
      return true;
    } else {
      this.view.lblNrmlHours.text = "12";
      this.view.flxHoursColor.skin = "sknFlxunder15";
    }
    return false;
  },

  checkShiftFromToOT : function(val){
    if(!commonUtils.checkIfEmpty(this.view.lblShiftFromOTTime.text) && !commonUtils.checkIfEmpty(this.view.lblShiftTOToTime.text)){
      var from = Date.parse(new Date(this.view.lblShiftFromOTDate.text + "T" + this.view.lblShiftFromOTTime.text + ":00"));
      var to = Date.parse(new Date(this.view.lblShiftToOTDate.text + "T" + this.view.lblShiftTOToTime.text + ":00"));
      return true;
    }
    return false;
  },

  arrivalDeparture : function(){
    var arrival = this.getReportDate(this.view.calArrivalDate);
    var departure = this.getReportDate(this.view.calDepartDate);
    if(!commonUtils.checkIfEmpty(arrival) && !commonUtils.checkIfEmpty(departure)){
      arrival = Date.parse(new Date(arrival));
      departure = Date.parse(new Date(departure));
      if(arrival > departure){
        var inp = {
          "msg" : "Arrival date is greater than departure date.",
          "option" : "error"
        };
        this.showBottomPopUp(inp);
        return false;
      }
    }
    return true;
  },

  addTRCFlx : function(index){
    var flx = new kony.ui.FlexContainer({
      "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
      "bottom": "5dp",
      "clipBounds": true,
      "id": "flxTRCCodes" + index,
      "isVisible": true,
      "layoutType": kony.flex.FLOW_HORIZONTAL,
      "left": "0",
      "isModalContainer": false,
      "skin": "CopyslFbox0d3f84b5bfb7046",
      "top": 3,
      "width": "100%"
    }, {}, {});
    flx.setDefaultUnit(kony.flex.DP);
    return flx;
  },

  addTRCLabel : function(inp){
    var opt = inp.index % 3;
    if(opt === 0 || opt === 2){
      var lblTRC1 = new kony.ui.Label({
        "id": "lblTRC" + inp.index,
        "isVisible": true,
        "left": opt === 0 ? "8%" : "0%",  
        "maxNumberOfLines": 1,
        "skin": "CopydefLabel0caa4f27fb2ec48",
        "text": inp.text,
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "textTruncatePosition": constants.TEXT_TRUNCATE_END,
        "top": "0dp",
        "width": "26%"
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      return lblTRC1;
    } else {
      var lblTRc2 = new kony.ui.Label({
        "id": "lblTRc" + inp.index,
        "isVisible": true,
        "left": "3%",
        "right": "3%",
        "skin": "CopydefLabel0caa4f27fb2ec48",
        "text": inp.text,
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "top": "0dp",
        "width": "26%"
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [2, 1, 2, 1],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      return lblTRc2;
    }
  },

  countHours : function(){
    try{
      var total = 0;
      var normal = commonUtils.checkIfEmpty(this.view.lblNrmlHours.text) ? 0 : parseFloat(this.view.lblNrmlHours.text);
      var standby = commonUtils.checkIfEmpty(this.view.tbxStandByHours.text) ? 0 : parseFloat(this.view.tbxStandByHours.text);
      var companyOt =  commonUtils.checkIfEmpty(this.view.txtOIIOTHoursValue.text) ? 0 : parseFloat(this.view.txtOIIOTHoursValue.text);
      var clientot = commonUtils.checkIfEmpty(this.view.txtClientOTHoursValue.text) ? 0 : parseFloat(this.view.txtClientOTHoursValue.text);
      total = parseInt(normal + standby + companyOt + clientot);
      if(total <= 15){
        this.view.flxHoursColor.skin = "sknFlxunder15";
      }else if(total <=24){
        this.view.flxHoursColor.skin = "sknFlxunder24";
      }else{
        this.view.flxHoursColor.skin = "sknFlxabove24";
      }
      this.view.lblCountHours.text =  total > 24 ? ">24" : total.toString();
      this.view.flxHoursCount.setVisibility(true);
      return parseFloat(total);
    } catch (ex){
     this.exception(ex);
    }
  },

  showSuccess : function () {
    try{
      var self = this;
      this.view.flxSuccessStatus.setVisibility(true);
      this.view.flxSuccessStatus.animate(
        kony.ui.createAnimation({
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
            if(!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.flxSuccessStatus)){
              self.view.flxSuccessStatus.setVisibility(true);
            }
          }
        });
    } catch(ex){
      this.exception(ex);
    }
  },

  dismissSuccess : function () {
    try{
      var self = this;
      if(!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view)){
        self.view.flxSuccessStatus.animate(
          kony.ui.createAnimation({
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
              if(!commonUtils.checkIfEmpty(self) && !commonUtils.checkIfEmpty(self.view) && !commonUtils.checkIfEmpty(self.view.flxSuccessStatus)){
                self.view.flxSuccessStatus.setVisibility(false);
              }
            }
          });
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  /// ---------------------------------------- Contract ------------------------------------- ///

  bindContractEvent : function(){
    try{
      this.view.sourceType.segServiceLine.onRowClick = this.onSourceTypeClick.bind(this);
      this.view.project.segServiceLine.onRowClick = this.onProjectClick.bind(this);
      this.view.activity.segServiceLine.onRowClick = this.onActivityClick.bind(this);
      this.view.category.segServiceLine.onRowClick = this.onCategoryClick.bind(this);
      this.view.subCategory.segServiceLine.onRowClick = this.onSubCategoryClick.bind(this);

      this.view.project.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.project);
      this.view.sourceType.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.sourceType);
      this.view.activity.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.activity);   
      this.view.category.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.category);

      this.view.subCategory.flxFilterCross.onClick = this.HideActivity.bind(this, this.view.subCategory); 
      this.view.subCategory.flxTRC.onClick = this.onApplySubCategory.bind(this);

      this.view.flxProjectPopUp.onClick = this.showProjects.bind(this);
      this.view.flxSourePopUp.onClick = this.showSourceType.bind(this);
      this.view.flxActivityPopUp.onClick = this.showActivity.bind(this);
      this.view.flxCategoryPopUp.onClick = this.showcategory.bind(this);
      this.view.flxSubCategoryPopUp.onClick = this.showSubCategory.bind(this);
    } catch(ex){
      this.exception(ex);
    }
  },

  // ---------------------------------------------------------------------------------------

  onProjectClick : function(){
    try{
      this.toggleLoadingIndicator(true);
      var previous = this.view.lblProject.text;
      var selected = this.view.project.segServiceLine.selectedRowItems[0];
      this.view.lblProject.text = selected.lblValue;
      if(previous !== this.view.lblProject.text){
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";
        this.view.lblSubCategory.text = "None";
        this.view.lblSubCategory.setVisibility(true);
        this.view.subCategory.segServiceLine.setData([]);
        this.view.category.segServiceLine.setData([]);
        this.selSubcategory = [];
        this.view.flxSubCategoryContainer.setVisibility(false);
        this.setFilter("project");
      }
      this.HideActivity(this.view.project);
    } catch(ex){
      this.exception(ex);
    }
  },

  onSourceTypeClick : function(){
    this.toggleLoadingIndicator(true);
    var previous = this.view.lblSourceType.text;
    var selected = this.view.sourceType.segServiceLine.selectedRowItems[0];
    this.view.lblSourceType.text = selected.lblValue;
    if(previous !== this.view.lblSourceType.text){   
      this.view.lblCategory.text = "None";
      this.view.lblCategoryId.text = "";
      this.view.category.segServiceLine.setData([]);
      this.view.lblSubCategory.text = "None";
      this.view.lblSubCategory.setVisibility(true);
      this.view.subCategory.segServiceLine.setData([]); 
      this.selSubcategory = [];
      this.view.flxSubCategoryContainer.setVisibility(false);
      if(this.view.lblSourceType.text != "None" && this.view.lblActivityId.text != "None"){
        this.getFilteredContract("activity");
        this.setCategory(this.filteresContract);
      }
      this.checkActivityProject();
    }   
    this.HideActivity(this.view.sourceType);
  },

  onActivityClick : function(){
    try{
      this.toggleLoadingIndicator(true);
      var previous = this.view.lblActivityId.text;
      var selected = this.view.activity.segServiceLine.selectedRowItems[0];
      this.view.lblActivity.text = selected.lblValue;
      this.view.lblActivityId.text = selected.activityId;
      if(previous !== this.view.lblActivityId.text){
        this.view.subCategory.segServiceLine.setData([]);
        this.view.category.segServiceLine.setData([]);
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";
        this.view.lblSubCategory.text = "None";
        this.selSubcategory = [];
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);

        this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.projectId)  && (contract.projectId) == (this.view.lblProject.text)));
        this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.activityId) && (contract.activityId) == (this.view.lblActivityId.text).split(",")[1]));
        this.setSourceType(this.filteresContract);
        this.setFilter("activity");
      }  
      this.HideActivity(this.view.activity);
    } catch(ex){
      this.exception(ex);
    }
  },

  checkActivityProject : function(){
    try{
      var projectNumber = this.view.lblProject.text;
      var projectFlag = false;
      var activity = this.view.lblActivityId.text;
      var activityFlag = false;
      var sourceType = this.view.lblSourceType.text;
      var sourceFlag = false;
      for(var j = 0; j < this.filteresContract.length; j++){
        if(this.filteresContract[j].projectId == projectNumber){
          projectFlag = true;
        }
        if(!commonUtils.checkIfEmpty(activity) && (this.filteresContract[j].activityId == (activity).split(",")[1])){
          activityFlag = true;
        }
        if(this.filteresContract[j].resourceType == sourceType){
          sourceFlag = true;
        }
      }

      if(!activityFlag){
        this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.activityId) && (contract.activityId) == (this.view.lblActivityId.text).split(",")[1]));
        this.setSourceType(this.filteresContract);
        this.view.subCategory.segServiceLine.setData([]);
        this.view.category.segServiceLine.setData([]);
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";
        this.view.lblSubCategory.text = "None";
        this.view.subCategory.segServiceLine.setData([]);
        this.view.category.segServiceLine.setData([]);
        this.selSubcategory = [];
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      }
      if(!sourceFlag){
        this.view.lblSourceType.text = "None";
        this.view.subCategory.segServiceLine.setData([]);
        this.view.category.segServiceLine.setData([]);
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";
        this.view.lblSubCategory.text = "None";
        this.view.lblSubCategoryId.text = "";
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  onCategoryClick : function(){
    try{
      this.toggleLoadingIndicator(true);
      var previous = this.view.lblCategoryId.text;
      var selected = this.view.category.segServiceLine.selectedRowItems[0];
      this.view.lblCategory.text = selected.lblValue;
      this.view.lblCategoryId.text = selected.value + "," + selected.code;
      if(previous !== this.view.lblCategoryId.text){
        this.view.subCategory.segServiceLine.setData([]);
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
        this.view.lblSubCategory.text = "None";
        this.selSubcategory = [];
        this.setFilter("category");
      }
      this.HideActivity(this.view.category);
    }catch(ex){
      this.exception(ex);
    }
  },

  onSubCategoryClick : function(){
    try{
      var selected = this.view.subCategory.segServiceLine.selectedRowItems[0];
      var deviceInfo = kony.os.deviceInfo();  
      var index = "";
      if(deviceInfo.name != "iPhone"){
        index = this.view.subCategory.segServiceLine.selectedRowIndex[1];
      } else {
        index = this.view.subCategory.segServiceLine.selectedIndex[1];
      }
      if(selected.lblCheck.skin == commonUtils.TICKSELECTED){
        selected.lblCheck.skin = commonUtils.TICKUNSELECTED;
        selected.lblCheck.text = commonUtils.TICKTEXTUNSEL;      
      } else {
        selected.lblCheck.skin = commonUtils.TICKSELECTED;
        selected.lblCheck.text = commonUtils.TICK;
      }
      this.view.subCategory.segServiceLine.setDataAt(selected, index);
    } catch(ex) {
      this.exception(ex);
    }
  },

  /// ---------------------------------------------------------------------------------------------
  showSourceType : function(){
    try{
      var data = this.view.sourceType.segServiceLine.data;
      var len = this.view.sourceType.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){
        len = len.length;
        for(var j = 0; j < len; j++){
          if(this.view.lblSourceType.text == data[j].lblValue){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          }else{
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j] .lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.sourceType.segServiceLine.setData(data);        
        this.onClickListBottom(this.view.sourceType);     
      } else {
        this.showBottomPopUp({"msg" : "No SourceType Found" ,"option" : "error"});
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showProjects : function(){
    try{
      var data = this.view.project.segServiceLine.data;
      var len = this.view.project.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){
        len = len.length;
        for(var j = 0; j < len; j++){
          if(this.view.lblProject.text == data[j].lblValue){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          } else {
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j] .lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.project.segServiceLine.setData(data);        
        this.onClickListBottom(this.view.project);
      } else {
        this.showBottomPopUp({"msg" : "No Project Found" ,"option" : "error"});
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showActivity : function(){
    try {
      var data = this.view.activity.segServiceLine.data;
      var len = this.view.activity.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){
        len = len.length;
        for(var j = 0; j < len; j++){
          if(this.view.lblActivityId.text == data[j].activityId){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          } else {
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j] .lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.activity.segServiceLine.setData(data);
        this.onClickListBottom(this.view.activity);
      } else {
        this.showBottomPopUp({"msg" : "No Activity Found" ,"option" : "error"});
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showcategory : function(){
    try{
      var data = this.view.category.segServiceLine.data;
      var len = this.view.category.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(len) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){
        len = len.length;
        for(var j = 0; j < len; j++){
          if(this.view.lblCategory.text == data[j].lblValue || (this.view.lblCategory.text == data[j].code)){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          } else {
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j] .lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }         
        }
        this.view.category.segServiceLine.setData(data);
        this.onClickListBottom(this.view.category);
      } else {
        this.showBottomPopUp({"msg" : "No Category Found" ,"option" : "error"});
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  showSubCategory : function(){
    try{
      this.view.subCategory.flxFilterCross.setVisibility(true);
      this.view.subCategory.flxTRC.setVisibility(true);
      var data = this.view.subCategory.segServiceLine.data;
      if(!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){ 
        for(var j  = 0; j < data.length;j++){
          if(this.selSubcategory.includes(data[j].code)){
            data[j].lblCheck.skin = commonUtils.TICKSELECTED;
            data[j].lblCheck.text = commonUtils.TICK;
          }else{
            data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
            data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
          }
        }
        this.view.subCategory.segServiceLine.setData(data);
        this.onClickListBottom(this.view.subCategory);
      } else {
        this.showBottomPopUp({"msg" : "No Sub Category Found" ,"option" : "error"});
      }
    } catch(ex){
      this.exception(ex);
    }
  },
  // ------------------------------------------------------------------------------------------------------

  onApplySubCategory : function(){
    try{
      var data = this.view.subCategory.segServiceLine.data;
      var values = [];
      var subcategoryValues = [];
      this.selSubcategory = [];
      if(!commonUtils.checkIfEmpty(data) && data.length > 0){
        for(var j = 0; j < data.length; j++){
          if(data[j].lblCheck.skin == commonUtils.TICKSELECTED){
            values.push(data[j].code); 
            subcategoryValues.push(data[j].value);
            this.selSubcategory.push(data[j].code);
          }
        }
      }
      if(values.length > 1){
        this.view.lblSubCategory.text = values[0];
        this.view.lblSubCategory.setVisibility(false);
        this.view.flxSubCategoryContainer.removeAll();
        var row = 1;
        var column = 1;
        var count = 0;
        var flx =  this.addTRCFlx(row);
        for(var k = 0; k < values.length; k++){
          count++;
          flx.add(this.addTRCLabel({"index" : k , text : values[k]}));
          if(count === 3){
            this.view.flxSubCategoryContainer.add(flx);
            count = 0;
            flx =  this.addTRCFlx(row);
          }
        }
        if(count !== 0){
          this.view.flxSubCategoryContainer.add(flx);
        }
        this.view.flxSubCategoryContainer.setVisibility(true);
      } else if(values.length == 1) {
        this.view.lblSubCategory.text = subcategoryValues[0] + " ("  + values[0] + ")";
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      } else {
        this.view.lblSubCategory.text = "None";
        this.selSubcategory = [];
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      }
      this.HideActivity(this.view.subCategory);
    }catch(ex){
      this.exception(ex);
    }
  },

  setSubCategoryFromList : function(list){
    var data = this.view.subCategory.segServiceLine.data;
    if(!commonUtils.checkIfEmpty(data) && data.length > 0 && !commonUtils.checkIfEmpty(data[0].lblValue)){ 
      for(var j  = 0; j < data.length;j++){
        if(list.includes(data[j].code)){
          data[j].lblCheck.skin = commonUtils.TICKSELECTED;
          data[j].lblCheck.text = commonUtils.TICK;
        } else {
          data[j].lblCheck.skin = commonUtils.TICKUNSELECTED;
          data[j].lblCheck.text = commonUtils.TICKTEXTUNSEL;
        }
      }
      this.view.subCategory.segServiceLine.setData(data);
    }
  },

  fetchContractData : function(){
    try{
      // latest contract data always
      var flag = false;
      this.toggleLoadingIndicator(true);
      if(currentProject.projectId == this.data.projectData.ProjectNumber && !commonUtils.checkIfEmpty(currentProject.projectData) && !commonUtils.checkIfEmpty(currentProject.projectData.ProjectNumber)){
        if (!commonUtils.checkIfEmpty(currentProject.projectData.RateSetting) && (currentProject.projectData.RateSetting == "true" || currentProject.projectData.RateSetting === true)) {
          flag = true;
        }
        this.view.flxRateSeparator.setVisibility(flag);
        this.view.flxDayrate.setVisibility(flag);
        this.getProjectAfterContract(currentProject.projectData);
      } else {
        commonUtils.get_project_details(this.data.projectData.ProjectNumber).then((res) => {
          currentProject.projectData = res;
          currentProject.projectId = res.ProjectNumber;
          if(!commonUtils.checkIfEmpty(res.RateSetting) && (res.RateSetting == "true" || res.RateSetting === true)){
            flag = true;
          }
          this.view.flxRateSeparator.setVisibility(flag);
          this.view.flxDayrate.setVisibility(flag);
          this.getProjectAfterContract(res);
        }, (err) => {
          this.toggleLoadingIndicator(false);
          kony.print("Error in getting Activities");
        });
      }
    } catch(ex){
      this.toggleLoadingIndicator(false);
      var er = {
        "func" : "fetchContractData",
        "err" :  "Exception " + JSON.stringify(ex)
      };
      commonUtils.exception(this, er , true);
      this.exception(ex);
    }
  },

  getProjectAfterContract : function(res){
    try{
      this.toggleLoadingIndicator(true);
      this.data.projectData.Activities = res.Activities;
      this.activities = res.Activities;
      this.contracts = res.contractList;
      this.childProjects = res.childProjects;

      this.filteresContract = this.contracts;
      this.masterCategory = res.masterCategory;
      this.masterSubCategory = res.masterSubCategory;
      this.filterMaterData();

      // project Numbers
      if(!commonUtils.checkIfEmpty(res.childProjects)){
        this.setInitialChildProject(res.childProjects);
      } 

      // source Type
      if(!commonUtils.checkIfEmpty(this.filteresContract) && this.filteresContract.length > 0){
        this.setSourceType(this.filteresContract);
      } 
      // Activities
      if(!commonUtils.checkIfEmpty(this.activities) && this.activities.length > 0){
        this.activities.sort(function(a, b){
          var nameA = a.description.toUpperCase(); // ignore upper and lowercase
          var nameB = b.description.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if(nameA > nameB) {
            return 1;
          }
          return 0;
        });
        this.setActivities(this.activities);
      }

      if(this.data.operation == "Create"){
        this.setContractDefault();
      } else {
        this.setContractDetails(this.data.projectData ,this.data.dprData);
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  filterMaterData : function(){
    // filter subcategory which exists in master category
    try{
      var masterCat = [];
      var masterSubCat = [];
      for(var j = 0; j < this.contracts.length; j++){
        masterCat.push(this.contracts[j].resourceCategory);
        masterSubCat.push(this.contracts[j].resourceSubCategory);
      }
      masterCat = [...new Set(masterCat)];
      masterSubCat = [...new Set(masterSubCat)];

      this.masterCategory = this.masterCategory.filter(function (temp) {
        return masterCat.includes(temp._id);
      });
      this.masterSubCategory = this.masterSubCategory.filter(function (temp) {
        return masterSubCat.includes(temp._id);
      });
    }catch(ex){
      this.exception(ex);
    }
  },

  // ---------------- Set contract Data ---------------------------//

  setSourceType : function(response , flagSource){
    try {
      var sourceType = [];
      var ar = [];
      var flag = true;
      for(var j = 0; !commonUtils.checkIfEmpty(response) && j < response.length; j++){
        ar.push(response[j].resourceType);
      }
      var arr = [...new Set(ar)];
      for(var i = 0; i < arr.length; i++){
        var inp = {
          "lblValue" : arr[i],
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          }
        };  
        if((arr[i]).slice(-2) == "PN"){
          sourceType.push(inp);
        }
      }
      this.view.sourceType.segServiceLine.setData(sourceType);
      if(commonUtils.checkIfEmpty(flagSource) || !flagSource){
        if(sourceType.length > 0){
          var PN = sourceType[0].lblValue;
          this.view.lblSourceType.text = PN;
          if(!commonUtils.checkIfEmpty(PN)){
            this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType) && ((contract.resourceType) == (PN))));
          }
          this.setCategory(this.filteresContract);
        } else {
          this.view.lblSourceType.text = "None";
          this.view.sourceType.segServiceLine.setData([]);
        }
      }
      if(this.view.lblSourceType.text != "None" && this.view.lblActivity.text != "None"){
        this.getFilteredContract("activity");
        this.setCategory(this.filteresContract);
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  setInitialChildProject : function(response){
    try{
      var projects = [];
      var ar = [];
      for(var j = 0; !commonUtils.checkIfEmpty(response) && j < response.length; j++){
        ar.push(response[j].projectNumber);
      }
      var temp = [];
      var arr = [...new Set(ar)];
      arr = Array.from(arr);
      for(var i = 0; i < response.length; i++){
        var inp = {
          "lblValue" : response[i].projectNumber,
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          },
          "data" :  response[i]
        };
        if(temp.indexOf(response[i].projectNumber) == -1  &&  arr.indexOf(response[i].projectNumber) >= 0){
          temp.push(response[i].projectId);
          projects.push(inp);
        }
      }
      if(projects.length > 0){
        this.view.project.segServiceLine.setData(projects);
      } else {
        var inpt = {
          "lblValue" : (!commonUtils.checkIfEmpty(this.view.lblProject.text) && this.view.lblProject.text != "None") ? this.view.lblProject.text : "",
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          },
          "data" :  ""
        };
        projects.push(inpt);
        if(!commonUtils.checkIfEmpty(this.view.lblProject.text) && this.view.lblProject.text != "None"){
          this.view.project.segServiceLine.setData(projects);
        }
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  setActivities : function(response){
    try{
      var activitiesdata = [];
      var activies = this.activities;
      var temp = [];
      var flag = true;
      for(var g = 0; g < response.length; g++){
        temp.push(response[g].activityId);
      }
      temp = [... new Set(temp)];
      temp = Array.from(temp);
      var tempAfter = [];
      for(var i = 0; !commonUtils.checkIfEmpty(this.activities) && i < this.activities.length; i++){
        var inp = {
          "lblValue" : this.activities[i].description + " (" +   this.activities[i].activity + ")",
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          },
          "activityId" : this.activities[i].description + "," + this.activities[i].activity,
          "data" : this.activities[i]
        };
        if((this.activities[i].project == this.view.lblProject.text) && tempAfter.indexOf(this.activities[i].activity) == -1){
          tempAfter.push(this.activities[i].activity);
          activitiesdata.push(inp);
        }
      }
      activitiesdata = [...new Set(activitiesdata)];
      activitiesdata = Array.from(activitiesdata);
      this.view.activity.segServiceLine.setData(activitiesdata);
      if(activitiesdata.length <= 0){
        this.view.lblSourceType.text = "None";
        this.view.lblActivity.text = "None";
        this.view.lblActivityId.text = "";
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";
        this.view.lblSubCategory.text = "None";
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  setCategory : function(response){
    try {
      var category = [];
      var temp = [];
      for(var j = 0; j < response.length; j++){
        temp.push(response[j].resourceCategory);
      }
      var arr = [...new Set(temp)];
      arr = Array.from(arr);
      var emptyArr = [];
      for(var i = 0; !commonUtils.checkIfEmpty(response) && i < response.length; i++){
        var fltr = this.masterCategory.filter((arr) => {
          return (arr._id === response[i].resourceCategory);
        });
        var value = !commonUtils.checkIfEmpty(fltr) && fltr.length > 0 ?  fltr[0].description : "";
        var inp = {
          "lblValue" : value + " (" + response[i].resourceCategory + ")",
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          },
          "value" : value,
          "code" : response[i].resourceCategory,
          "data" : response[i]
        };
        if(response[i].resourceCategory != "%" && emptyArr.indexOf(response[i].resourceCategory) == -1){
          emptyArr.push(response[i].resourceCategory);
          category.push(inp);
        }     
      }
      this.view.category.segServiceLine.setData(category);
      if(category.length <= 0){
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";
        this.view.lblSubCategory.text = "None";
        this.view.lblSubCategoryId.text = ""; 
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      }
    } catch(ex){
      this.exception(ex);
    }
  },

  setSubCategory : function(response){
    try {
      var subcategory = [];
      for(var i = 0;  !commonUtils.checkIfEmpty(response) &&  i < response.length; i++){
        var fltr = this.masterSubCategory.filter((arr) => {
          return (arr._id === response[i].resourceSubCategory);
        });
        var value = !commonUtils.checkIfEmpty(fltr) && fltr.length > 0 ?  fltr[0].description : "";
        var inp = {
          "lblValue" : value + " (" + response[i].resourceSubCategory + ")",
          "lblCheck" : {
            skin : "sknLblFilterUnselected",
            text : commonUtils.TICKTEXTUNSEL
          },
          "value" : value,
          "code" : response[i].resourceSubCategory,
          "data" : response[i]
        };
        if(response[i].resourceSubCategory != "%"){
          subcategory.push(inp);
        }
      }
      subcategory.sort((a,b)=>{
        if(a.resourceSubCategory < b.resourceSubCategory){
          return -1;
        }
        if(a.resourceSubCategory > b.resourceSubCategory){
          return 1;
        }
        return 0;
      });
      this.view.subCategory.segServiceLine.setData(subcategory);
      if(subcategory.length <= 0){
        this.view.lblSubCategory.text = "None";
        this.view.lblSubCategoryId.text = ""; 
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      }
      this.onApplySubCategory();
    } catch(ex){
      this.exception(ex);
    }
  },

  getSubCategoryResult : function(){
    try {
      var data = this.view.subCategory.segServiceLine.data;
      var subCat = "";
      var subCatCodes = "";
      if(!commonUtils.checkIfEmpty(data)){
        for(var j = 0; j < data.length; j++){
          if(data[j].lblCheck.skin == commonUtils.TICKSELECTED){
            subCat += data[j].value;
            if(j != data.length -1){
              subCat += ",";
            }
            subCatCodes += data[j].code;
            if(j != data.length -1){
              subCatCodes += ",";
            }
          }
        }
      }
      return { 
        subCat : subCat,
        subCatCodes : subCatCodes
      };
    } catch(ex){
      this.exception(ex);
    }
  },

  setFilter : function(inp){
    try{
      switch(inp){
        case "project" : {
          this.getFilteredContract("project");         
          this.setSourceType(this.filteresContract);
          this.setFilter("source");
          break;
        }
        case "source" : {
          this.getFilteredContract("source");
          this.setActivities(this.activities);
          this.checkActivityProject();
          break;
        }
        case "activity" : {
          this.getFilteredContract("activity");
          this.setCategory(this.filteresContract);
          this.checkActivityProject(); // to check whether activity , project , sourceType match wiyh filters or not
          break;
        }
        case "category" : {
          this.getFilteredContract("category");
          this.setSubCategory(this.filteresContract);
          this.onApplySubCategory();
          break;
        }
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  getFilteredContract : function(inp){
    try{
      if(this.view.lblProject.text !== "None"){
        this.filteresContract = this.contracts.filter(contract => (!commonUtils.checkIfEmpty(contract.projectId)  && (contract.projectId) == (this.view.lblProject.text)));
      }
      if(inp == "project") return;
      if(this.view.lblSourceType.text !== "None"){
        this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceType)  && ((contract.resourceType) == (this.view.lblSourceType.text))));
      }
      if(inp == "source") return;
      if(!commonUtils.checkIfEmpty(this.view.lblActivityId.text)){
        this.filteresContract =  this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.activityId) && (contract.activityId) == (this.view.lblActivityId.text).split(",")[1]));
      }
      if(inp == "activity") return;
      if(!commonUtils.checkIfEmpty(this.view.lblCategoryId.text)){
        this.filteresContract = this.filteresContract.filter(contract => (!commonUtils.checkIfEmpty(contract.resourceCategory)) && ((contract.resourceCategory) == (this.view.lblCategoryId.text).split(",")[1]));
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  getSubcategoryResult : function(){
    try{
      var data = this.view.subCategory.segServiceLine.data;
      var strSub = "";
      var strSubCodes = "";
      if(!commonUtils.checkIfEmpty(data)){
        for(var j = 0; j < data.length; j++){
          if(data[j].lblCheck.skin == commonUtils.TICKSELECTED){
            strSub += data[j].lblValue;
            if(j != data.length -1){
              strSub +=",";
            }
            strSubCodes += data[j].code;
            if(j != data.length -1){
              strSubCodes +=",";
            }
          }
        }
      }
      return { 
        subCategory : strSub,
        subCategoryCodes : strSubCodes
      };
    } catch(ex){
     this.exception(ex);
    }
  },

  setContractDefault : function(){
    try {
      this.toggleLoadingIndicator(true);
      var prjectData = this.data.projectData;
      this.view.lblProject.text = prjectData.ProjectNumber;
      if(this.view.lblProject.text !== "None"){
        this.setFilter("project");
      }
      if(this.view.sourceType.text !== "None"){
        this.setFilter("source");
      }
      if(!commonUtils.checkIfEmpty(prjectData.Activity)){
        this.view.lblActivity.text = (prjectData.Activity).split(",")[0] + " (" +(prjectData.Activity).split(",")[1] + ")";
        this.view.lblActivityId.text = prjectData.Activity;
      } else {
        this.view.lblActivity.text = "None";
        this.view.lblActivityId.text = "";
      }
      if(this.view.lblActivity.text !== "None"){
        this.setFilter("activity");
      }
      this.view.lblCategory.text = "None";
      this.view.lblCategoryId.text = "";

      this.view.lblSubCategory.text = "None";  
      this.view.lblSubCategoryId.text = "";
      this.checkActivityProject();
      kony.timer.schedule("loading3", ()=>{
        kony.timer.cancel("loading3");
        this.toggleLoadingIndicator(false);
      }, 1, false);
    } catch(ex){
      this.exception(ex);
    }
  },

  setContractDetails : function(ProjectData, dprData){
    try{
      if(this.contracts.length > 0){
        this.toggleLoadingIndicator(true);
        var flag = false;
        this.view.lblProject.text = commonUtils.checkIfEmpty(dprData.ProjectNumber) ? ProjectData.ProjectNumber : dprData.ProjectNumber;
        // --------------------------------------------------

        this.setActivities(this.activities);
        if(!commonUtils.checkIfEmpty(dprData.sourceType) && dprData.sourceType != "None"){
          this.view.lblSourceType.text = dprData.sourceType;
        } else {
          this.view.lblSourceType.text = "None";
        }
        if(!commonUtils.checkIfEmpty(this.view.sourceType.text) && this.view.sourceType.text !== "None"){
          flag = true;
        }
        this.getFilteredContract("project");
        this.setSourceType(this.filteresContract , flag);
        // --------------------------------------------------
        if(commonUtils.checkIfEmpty(dprData.Activity) && !commonUtils.checkIfEmpty(ProjectData.Activity)){
          this.view.lblActivity.text = (ProjectData.Activity).split(",")[0] + " (" + (ProjectData.Activity).split(",")[1] + ")";
          this.view.lblActivityId.text = ProjectData.Activity;
        } else if(!commonUtils.checkIfEmpty(dprData.Activity)){
          this.view.lblActivity.text = (dprData.Activity).split(",")[0] + " (" + (dprData.Activity).split(",")[1] +")";
          this.view.lblActivityId.text = dprData.Activity;
        } else {
          this.view.lblActivity.text = "None";
          this.view.lblActivityId.text = "";
        }
        this.getFilteredContract("activity");
        this.setCategory(this.filteresContract);
        // --------------------------------------------------------------------
        this.view.lblCategory.text =  commonUtils.checkIfEmpty(dprData.category) || dprData.category == "None"  ? "None" :(dprData.category).split(",")[0] + " (" + (dprData.category).split(",")[1] + ")";
        this.view.lblCategoryId.text = commonUtils.checkIfEmpty(dprData.category) || dprData.category == "None" ? "" : (dprData.category);
        this.getFilteredContract("category");
        this.setSubCategory(this.filteresContract);
        // ------------------------------------------------------------------------
        this.view.lblSubCategory.text = commonUtils.checkIfEmpty(dprData.subCategory) ? "None" : (dprData.subCategory).split(",")[0]; 
        this.view.lblSubCategoryId.text = commonUtils.checkIfEmpty(dprData.subCategory) ? "" : (dprData.subCategory);

        if(!commonUtils.checkIfEmpty(this.view.lblSubCategory.text) && this.view.lblSubCategory.text !== "None"){
          var dta = commonUtils.checkIfEmpty(dprData.subCategory) || dprData.subCategory.length === 0 ? [] : dprData.subCategory.split(",");
          this.setSubCategoryFromList(dta);
          this.onApplySubCategory();
        }
        kony.timer.schedule("check", ()=>{
          kony.timer.cancel("check");
          this.checkActivityProject();
        }, 0.5, false);
        kony.timer.schedule("loading", ()=>{
          kony.timer.cancel("loading");
          this.toggleLoadingIndicator(false);
        }, 1, false);
      } else {
        // If there is No contract Data available
        this.view.lblProject.text = commonUtils.checkIfEmpty(dprData.ProjectNumber) ? ProjectData.ProjectNumber : dprData.ProjectNumber;
        this.setInitialChildProject([]);
        if(commonUtils.checkIfEmpty(dprData.Activity) && !commonUtils.checkIfEmpty(ProjectData.Activity)){
          this.view.lblActivity.text = (ProjectData.Activity).split(",")[0] + " (" + (ProjectData.Activity).split(",")[1] + ")";
          this.view.lblActivityId.text = ProjectData.Activity;
        } else if(!commonUtils.checkIfEmpty(dprData.Activity)){
          this.view.lblActivity.text = (dprData.Activity).split(",")[0] + " (" + (dprData.Activity).split(",")[1] +")";
          this.view.lblActivityId.text = dprData.Activity;
        } else {
          this.view.lblActivity.text = "None";
          this.view.lblActivityId.text = "";
        }
        this.setActivities(this.activities);
        this.view.lblCategory.text = "None";
        this.view.lblCategoryId.text = "";

        this.view.lblSubCategory.text = "None";  
        this.view.lblSubCategoryId.text = "";
        this.view.lblSubCategory.setVisibility(true);
        this.view.flxSubCategoryContainer.setVisibility(false);
      }
    }catch(ex){
      this.exception(ex);
    }
  },

  exception : function(ex){
    commonUtils.exception(this, ex);
    if(!commonUtils.checkIfEmpty(this) && !commonUtils.checkIfEmpty(this.view) && !commonUtils.checkIfEmpty(this.view.flxMain)){     this.view.flxMain.setEnabled(true); this.view.flxLoading.setVisibility(false);  }
  }
  /*

contractList":[
               {
                  "hrsDay":"0",
                  "businessUnit":"B0571",
                  "unitOfMeasure":"%",
                  "rateAmount":"6509",
                  "contractNumber":"CON024790",
                  "parentCustName":"Equinor ASA",
                  "lastSyncDate":null,
                  "customerName":"Equinor Energy AS",
                  "parentId":"C0002179",

                  "effectiveStatus":"A",

                  "projectRole":"%",
                  "resCatDescription":"Bergen",
                  "customerId":"C0000968",
                  "currency":"NOK",
                  "_id":null,
                  "psftRateSet":"21681",
                  "effectiveDate":"2018-04-07T00:00:00",

                  "parentProjectId":"0000184346",
                  "projectId":"0000184346",

                  "resourceType":"ROVPN",
                  "activityId":"1",

	             "resourceCategory":"PERSN",
		         "resCatDescription":"Bergen",

		         "resourceSubCategory":"BERGN"
                 "resSubCatDescription":"Personnel MobDemob Bergen",
}],
*/
});