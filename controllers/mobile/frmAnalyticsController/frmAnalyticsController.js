var DataOnClickOfChart = [];
var DataOnClickOfChartBasic = [];
define({ 
  
  

  //Type your controller code here 
  onNavigate: function(navigationData) {
    commonUtils.addbottompopup(this);
    this.view.preShow = this.preShow.bind(this, navigationData);
    this.view.postShow = this.postShow.bind(this, navigationData);
  },

  preShow : function(data){
    this.view.bottompopup.flxBottomContainer.onClick = this.dismissBottomPopup.bind(this);
    this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
    this.view.flxCustom.onClick = this.callBtnCustom.bind(this);
    this.view.flxLastWeek.onClick = this.callBtnLastWeek.bind(this);
    this.view.flxLastMonth.onClick = this.callBtnLastMonth.bind(this);
    this.view.flxBack.onClick = this.backFun.bind(this);
    this.view.onDeviceBack = this.backFun.bind(this);
    if(data.navigatingFrom == "frmDashboard"){
      this.view.flxDonut.setVisibility(false);
      this.view.flxInfoMain.setVisibility(false);}
  },

  postShow : function(data){
    if(data.navigatingFrom == "frmDashboard")
      this.callBtnLastWeek();
  },

  formatDate: function (date) {
    var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return year + "-" + month + "-" + day;
  },

  callBtnCustom : function(){
    this.view.flxInfoMain.setVisibility(false);
    this.view.flxDonut.setVisibility(false);
    this.view.btnApply.onClick = this.onClickOfApplyFilters.bind(this);
    this.view.btnClear.onClick = this.setCurrentDateInFilters.bind(this);
    this.view.flxLastWeek.zIndex = 1;
    this.view.flxLastMonth.zIndex = 1;
    this.view.flxCustom.zIndex = 3;
    this.view.lblLastWeek.skin = commonUtils.DASHBOARD_LBL_UNSEC;
    this.view.lblLastMonth.skin = commonUtils.DASHBOARD_LBL_UNSEC;
    this.view.lblCustom.skin = commonUtils.DASHBOARD_LBL_SEC;
    this.view.flxLineLastWeek.skin = "CopyslFbox0fa54cf9aeaff45";
    this.view.flxLineLastMonth.skin = "CopyslFbox0fa54cf9aeaff45";
    this.view.flxLineCustom.skin = commonUtils.DASHBOARDSELECTD;
    var d = new Date();
    var stDate = new Date(d.getFullYear(), d.getMonth(), 1);
    var inpt = {
      "startDate" : this.formatDate(stDate),
      "endDate" : this.formatDate(d),
      "empId" : oceaneering.oms.appGlobals.employeeId
    };
    this.setCurrentDateInFilters();
    this.onClickOfAnalytics(inpt);
  },

  showBottomPopUp : function(input){
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
  },

  dismissBottomPopup : function(){
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
  },

  resetBottomPopUp : function(){
    this.view.bottompopup.flxBottomPopUp.height = "0dp";
    this.view.bottompopup.flxBottomCover.setVisibility(false);
    this.view.bottompopup.lblBottomMessage.text = "";
    this.view.bottompopup.btnDismissBottomPopUp.setVisibility(false);
    this.view.bottompopup.imgToShow.setVisibility(false);
    this.view.bottompopup.flxEnableTouch.setVisibility(false);
  },

  onClickOfApplyFilters : function(){
    var startDate = this.view.calStartDate.dateComponents;
    var startDateFinal = new Date(parseInt(startDate[2]),parseInt(startDate[1])-1, parseInt(startDate[0]));
    var endDate = this.view.calEndDate.dateComponents;
    var endDateFinal = new Date(parseInt(endDate[2]),parseInt(endDate[1])-1, parseInt(endDate[0]));
    var inpt = {
      "startDate" : this.formatDate(startDateFinal),
      "endDate" : this.formatDate(endDateFinal),
      "empId" : oceaneering.oms.appGlobals.employeeId
    };
    this.onClickOfAnalytics(inpt);
  },

  callBtnLastWeek : function(){
    this.view.flxFilters.setVisibility(false);
    this.view.flxInfoMain.setVisibility(false);
    this.view.flxDonut.setVisibility(false);
    this.view.flxLastWeek.zIndex = 3;
    this.view.flxLastMonth.zIndex = 1;
    this.view.flxCustom.zIndex = 1;
    this.view.lblLastWeek.skin = commonUtils.DASHBOARD_LBL_SEC;
    this.view.lblLastMonth.skin = commonUtils.DASHBOARD_LBL_UNSEC;
    this.view.lblCustom.skin = commonUtils.DASHBOARD_LBL_UNSEC;
    this.view.flxLineLastWeek.skin = commonUtils.DASHBOARDSELECTD;
    this.view.flxLineLastMonth.skin = "CopyslFbox0fa54cf9aeaff45";
    this.view.flxLineCustom.skin = "CopyslFbox0fa54cf9aeaff45";
    var stDate = new Date();
    stDate.setDate(stDate.getDate() - 7);
    var d = new Date();
    var inpt = {
      "startDate" : this.formatDate(stDate),
      "endDate" : this.formatDate(d),
      "empId" : oceaneering.oms.appGlobals.employeeId
    };
    this.onClickOfAnalytics(inpt);
  },

  callBtnLastMonth : function(){
    this.view.flxLastWeek.zIndex = 1;
    this.view.flxLastMonth.zIndex = 3;
    this.view.flxCustom.zIndex = 1;
    this.view.flxFilters.setVisibility(false);
    this.view.flxInfoMain.setVisibility(false);
    this.view.flxDonut.setVisibility(false);
    this.view.lblLastWeek.skin = commonUtils.DASHBOARD_LBL_UNSEC;
    this.view.lblLastMonth.skin = commonUtils.DASHBOARD_LBL_SEC;
    this.view.lblCustom.skin = commonUtils.DASHBOARD_LBL_UNSEC;
    this.view.flxLineLastWeek.skin = "CopyslFbox0fa54cf9aeaff45";
    this.view.flxLineLastMonth.skin = commonUtils.DASHBOARDSELECTD;
    this.view.flxLineCustom.skin = "CopyslFbox0fa54cf9aeaff45";
    var stDate = new Date();
    stDate.setMonth(stDate.getMonth() - 1);
    var d = new Date();
    var inpt = {
      "startDate" : this.formatDate(stDate),
      "endDate" : this.formatDate(d),
      "empId" : oceaneering.oms.appGlobals.employeeId
    };
    this.onClickOfAnalytics(inpt);
  },

  createDonutNew : function(Data){

    var chartjs = new com.konymp.chartjs({
      "autogrowMode": kony.flex.AUTOGROW_NONE,
      "centerX": "48%",
      "centerY": "53%",
      "clipBounds": false,
      "height": "100%",
      "id": "chartjs",
      "isVisible": true,
      "layoutType": kony.flex.FREE_FORM,
      "left": "0dp",
      "masterType": constants.MASTER_TYPE_USERWIDGET,
      "isModalContainer": false,
      "skin": "slFbox",
      "width": "80%",
      "scrollsToTop" : false,
      "bounces" : false,
      "overrides": {
        "chartjs": {
          "right": "viz.val_cleared",
          "bottom": "viz.val_cleared",
          "minWidth": "viz.val_cleared",
          "minHeight": "viz.val_cleared",
          "maxWidth": "viz.val_cleared",
          "maxHeight": "viz.val_cleared"
        }
      }
    }, {
      "overrides": {}
    }, {
      "overrides": {}
    });
    chartjs.enableTitle = false;
    chartjs.enableLegend = false;
    chartjs.duration = 1000;
    //chartjs.showLabel = true;
    chartjs.noOfColumns = "3";
    chartjs.gridChartDataSet = {
      "data": Data,
      "schema": [{
        "columnHeaderTemplate": null,
        "columnHeaderText": "Chart Title",
        "columnHeaderType": "text",
        "columnID": "title",
        "columnText": "Not Defined",
        "columnType": "text",
        "kuid": "j6197f3380ec484b8afb88074db9a145"
      }, {
        "columnHeaderTemplate": null,
        "columnHeaderText": "Chart Type",
        "columnHeaderType": "text",
        "columnID": "chartType",
        "columnText": "Not Defined",
        "columnType": "text",
        "kuid": "af26e516a4e04d05997bd01d0636602b"
      }, {
        "columnHeaderTemplate": null,
        "columnHeaderText": "Chart Labels",
        "columnHeaderType": "text",
        "columnID": "labels",
        "columnText": "Not Defined",
        "columnType": "text",
        "kuid": "dc380bd1857b414b871981c630ce3433"
      }, {
        "columnHeaderTemplate": null,
        "columnHeaderText": "Chart Data",
        "columnHeaderType": "text",
        "columnID": "data",
        "columnText": "Not Defined",
        "columnType": "text",
        "kuid": "d27e4506b4774b5c81ab5ff76e09fb16"
      }, {
        "columnHeaderTemplate": null,
        "columnHeaderText": "Color",
        "columnHeaderType": "text",
        "columnID": "color",
        "columnText": "Not Defined",
        "columnType": "text",
        "kuid": "fcb02cf99b7c4dcd82769056845d566b"
      }, {
        "columnHeaderTemplate": null,
        "columnHeaderText": "Background Color",
        "columnHeaderType": "text",
        "columnID": "bgColor",
        "columnText": "Not Defined",
        "columnType": "text",
        "kuid": "eb549f95677149b7bb50cb8f1ec791d7"
      }]
    };
    chartjs.fontSize = "12";
    chartjs.renderType = true;
    chartjs.fontColor = "#ffffff";
    chartjs.titlePosition = "bottom";
    chartjs.legendPosition = "bottom";
    chartjs.easing = "easeOutQuart";
    chartjs.fontFamily = "Helvetica";
    chartjs.fontStyle = "normal";
    this.view.flxDonut.setVisibility(true);
    this.view.flxDonut.add(chartjs);

  },

  createDonut : function(createChartData){
    var donutChart = new com.konymp.donutchart({
      "clipBounds": true,
      "id": "donutChart",
      "height": "100%",
      "width": "100%",
      "centerY": "50%",
      "centerX": "50%",
      "isVisible": true,
      "zIndex": 1
    }, {}, {});

    /* Setting the component s properties */
    donutChart.bgColor = "#FFFFFF";
    donutChart.enableChartAnimation = true;
    donutChart.enableStaticPreview = true;
    donutChart.chartData ={
      "data": createChartData
    };
    donutChart.enableLegend = false;donutChart.legendFontColor = "#000000";donutChart.legendFontSize = "8";
    donutChart.chartTitle = "";
    donutChart.titleFontColor = "#000000";
    donutChart.titleFontSize = 12;
    this.view.flxDonut.setVisibility(true);
    this.view.flxDonut.add(donutChart);

  },
  
  showDataOnClickOfChartBasic : function(Data){
    var showTimesheets = DataOnClickOfChart.filter(details => details.str_systemid == DataOnClickOfChartBasic[Data.index].label );
    formStack.push({
      "frm": "frmAnalytics",
      params: {
        "loadProjects": true
      }
    });
    commonUtils.navigateTo("frmData", {
      "navigatingFrom": "frmAnalytics",
      "data" : showTimesheets,
      "hours" : DataOnClickOfChartBasic[Data.index].value
    });
  },
  
  showDataOnClickOfChart : function(Data){
    var showTimesheets = DataOnClickOfChart.filter(details => details.str_systemid == Data.projId );
    formStack.push({
      "frm": "frmAnalytics",
      params: {
        "loadProjects": true
      }
    });
    commonUtils.navigateTo("frmData", {
      "navigatingFrom": "frmAnalytics",
      "data" : showTimesheets,
      "hours" : Data.Hours
    });
  },

  showData : function(compData){
    var projId = compData.data[compData.i].label;
    var showTimesheets = compData.filteredArray.filter(details => details.str_systemid == projId);
    formStack.push({
      "frm": "frmAnalytics",
      params: {
        "loadProjects": true
      }
    });
    commonUtils.navigateTo("frmData", {
      "navigatingFrom": "frmAnalytics",
      "data" : showTimesheets,
      "hours" : compData.data[compData.i].value
    });

  },

  createInfoSection : function(data, filteredArray){
    this.view.flxInfo.removeAll();
    for(var i = 0; i < data.length; i++){
      var colorCode = data[i].colorCode.replace("#", "");
      var flxData = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerX": "50%",
        "clipBounds": true,
        "height": "40dp",
        "id": "flxData"+i,
        "isVisible": true,
        "layoutType": kony.flex.FLOW_HORIZONTAL,
        "left": "5dp",
        "isModalContainer": false,
        "skin": "CopyslFbox0c8d4131793a640",
        "focusSkin": "sknFocusDetails",
        "top": "0%",
        "width": "100%",
        "zIndex": 1,
        "onClick": this.showData.bind(this,{i, data, filteredArray})
      }, {}, {});
      flxData.setDefaultUnit(kony.flex.DP);
      var FlexContainer0e30938a8f0f24a = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "FlexContainer0e30938a8f0f24a"+i,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "sknBackground",
        "width": "50%",
        "zIndex": 1
      }, {}, {});
      FlexContainer0e30938a8f0f24a.setDefaultUnit(kony.flex.DP);
      var lblColor = new kony.ui.Label({
        "centerY": "50%",
        "height": "20dp",
        "id": "lblColor"+i,
        "isVisible": true,
        "left": "10%",
        "skin": "CopydefLabel0g8502d426b1c4b",
        "backgroundColor" : colorCode,
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "width": "20dp",
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      var lblHoursC = new kony.ui.Label({
        "centerY": "50%",
        "height": "100%",
        "id": "lblHoursC"+i,
        "isVisible": true,
        "left": "32%",
        "skin": "CopydefLabel0b892ff0a470b4f",
        "text": data[i].label,
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "top": "31dp",
        "width": "60%",
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      FlexContainer0e30938a8f0f24a.add(lblColor, lblHoursC);
      var FlexContainer0c75b9056864047 = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "centerY": "50%",
        "clipBounds": true,
        "height": "90%",
        "id": "FlexContainer0c75b9056864047"+i,
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0%",
        "isModalContainer": false,
        "skin": "sknBackground",
        "top": "31dp",
        "width": "50%",
        "zIndex": 1
      }, {}, {});
      FlexContainer0c75b9056864047.setDefaultUnit(kony.flex.DP);
      var lblProject = new kony.ui.Label({
        "centerX": "50%",
        "centerY": "50%",
        "height": "20dp",
        "id": "lblProject"+i,
        "isVisible": true,
        "left": "32%",
        "skin": "CopydefLabel0b892ff0a470b4f",
        "text": data[i].value,
        "textStyle": {
          "letterSpacing": 0,
          "strikeThrough": false
        },
        "top": "29dp",
        "width": "100%",
        "zIndex": 1
      }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
      }, {
        "textCopyable": false
      });
      FlexContainer0c75b9056864047.add(lblProject);
      flxData.add(FlexContainer0e30938a8f0f24a, FlexContainer0c75b9056864047);
      this.view.flxInfoMain.setVisibility(true);
      this.view.flxInfo.add(flxData);
    }
  },


  onClickOfAnalytics: function (inpt) {
    this.showLoading();
    commonUtils.getDPRAnalyticsData(inpt).then((res)=>{
      var response = res.records;    
      if(this.view.flxLineCustom.skin == commonUtils.DASHBOARDSELECTD)
        this.view.flxFilters.setVisibility(true);
      if(!commonUtils.checkIfEmpty(response) && response.length > 0){
        var filteredArray = JSON.parse(JSON.stringify( response ));
        var finalArray = [];
        for(var i = 0; i < filteredArray.length; i++){
          var index = finalArray.findIndex(p => p.str_systemid == filteredArray[i].str_systemid);
          if(index == -1){
            var pushDataF = filteredArray[i];
            pushDataF.dbl_billinghour = parseFloat(pushDataF.dbl_billinghour).toFixed(2);
            finalArray.push(pushDataF);
          }else{
            var hours = finalArray[index].dbl_billinghour;
            finalArray.splice(index, 1);
            var pushData = filteredArray[i];
            pushData.dbl_billinghour = parseFloat(pushData.dbl_billinghour) + parseFloat(hours);
            pushData.dbl_billinghour = pushData.dbl_billinghour.toFixed(2);
            finalArray.push(pushData);
          }
        }
        var createChartData = [];
        var createBelowData = [];
        var ColorCodes = ["#4CAAC2", "#3284B3", "#355AA0", "#393E86", "#2F2B64", "#003C72","#66CCCC",
                          "#59C1E8", "#ABD7EC", "#243566", "#545D89", "#88A4BD", "#1E90CD", "#3267B2",
                          "#0A7CBE", "#50B0C8", "#0099FF", "#66CCFF", "#3399FF",  "#0066FF", "#0E98BE",
                          "#8FA3D9", "#7489CE", "#7489CE", "#8B6DA8", "#A021E2", "#C229EB", "#DA53EE",
                          "#769FCA", "#A2D1E6", "#1CA3DE", "#188AF0", "#00B7D8", "#307690", "#09EBEE"];
                          
        var colors = ColorCodes.slice(0, finalArray.length);
        colors = colors.toString();
        colors.replace(",", ", ");
        colors = colors.split(",");
        var data = [];
        var labels = [];
        for(var k = 0; k < finalArray.length; k++){
          var bill_hours = finalArray[k].dbl_billinghour;
          if(bill_hours == parseInt(bill_hours)){
            bill_hours = parseInt(bill_hours);
          }
          var dataN = {
            "colorCode" : ColorCodes[k],
            "label" : finalArray[k].str_systemid,
            "value" : bill_hours.toString(),
          };
          createBelowData.push(dataN);
          labels.push(finalArray[k].str_systemid);
          data.push(bill_hours.toString());
        }
        var pushDataNew = {
          "bgColor": "#ffffff",
          "chartType": "Doughnut",
          "color": "[" + colors.toString() + "]",
          "data": "[" + data.toString() + "]",
          "labels": "[" + labels.toString() + "]",
          "title": ""
        };
        createChartData.push(pushDataNew);
        this.dismissLoading();
        var self = this;
        if(createChartData.length > 0){
          this.view.lblNoRecords.setVisibility(false);
          self.view.flxDonut.removeAll(); 
          //this.createDonut(createBelowData);
          this.createDonutNew(createChartData);
          DataOnClickOfChart = response;
          DataOnClickOfChartBasic = createBelowData;
          this.createInfoSection(createBelowData, response);

        }else{
          self.view.lblNoRecords.setVisibility(true);
          self.view.flxInfoMain.setVisibility(false);
          self.view.flxDonut.setVisibility(false);
          self.view.flxInfo.removeAll();
          self.view.forceLayout();
          self.view.flxDonut.removeAll();      
        }


      }else{
        this.dismissLoading();
        this.view.lblNoRecords.setVisibility(true);
        this.view.flxInfoMain.setVisibility(false);
        this.view.flxDonut.setVisibility(false);
        this.view.flxInfo.removeAll();
        this.view.flxDonut.removeAll();
        this.view.forceLayout();
      }      
    }, (err)=>{
      this.dismissLoading();
      this.showBottomPopUp();
      var er =  {
        "func" : "prepareCreateDPRDetails-getAllDPRForProject",
        "err" : err.errmsg
      };   
      commonUtils.exception(this, er , true);
    });
  },

  showLoading : function(){
    this.view.flxLoading.setVisibility(true);
    this.view.flxLoading.setEnabled(false);
  },

  dismissLoading : function(){
    this.view.flxLoading.setVisibility(false);
    this.view.flxLoading.setEnabled(true);
  },

  setCurrentDateInFilters : function(){
    var currentDate = (this.formatDate(new Date())).split("-");
    var stDate = ["01", currentDate[1], currentDate[0]];
    var endDate = [currentDate[2], currentDate[1], currentDate[0]];
    this.view.calStartDate.dateComponents = stDate;
    this.view.calEndDate.dateComponents = endDate;
    this.view.calStartDate.onSelection = this.onSelectionOfStartDate.bind(this, stDate);
    this.view.calEndDate.onSelection = this.onSelectionOfEndDate.bind(this, endDate);
  },
  /**
    * @desc Called on selecting the start date in the filter
    * @param Array previousStartDate - Contains the previous start date populated in the calendar widget
    * @retun void
  */
  onSelectionOfStartDate : function(previousStartDate){
    var StartDate = this.view.calStartDate.dateComponents;
    var startDateFinal = (parseInt(StartDate[2]) * 10000) + (parseInt(StartDate[1]) * 100) + parseInt(StartDate[0]);
    var endDate = this.view.calEndDate.dateComponents;
    var endDateFinal = (parseInt(endDate[2]) * 10000) + (parseInt(endDate[1]) * 100) + parseInt(endDate[0]);
    if(startDateFinal <= endDateFinal){
      this.view.calStartDate.onSelection = this.onSelectionOfStartDate.bind(this, StartDate);
    } else{
      this.showErrorMessage("Start date cannot be higher than end date.");
      this.view.calStartDate.dateComponents = previousStartDate;
    }
  },
  /**
    * @desc Called on selecting the end date in the filter
    * @param Array previousEndDate - Contains the previous end date populated in the calendar widget
    * @retun void
  */
  onSelectionOfEndDate : function(previousEndDate){
    var StartDate = this.view.calStartDate.dateComponents;
    var startDateFinal = (parseInt(StartDate[2]) * 10000) + (parseInt(StartDate[1]) * 100) + parseInt(StartDate[0]);
    var endDate = this.view.calEndDate.dateComponents;
    var endDateFinal = (parseInt(endDate[2]) * 10000) + (parseInt(endDate[1]) * 100) + parseInt(endDate[0]);
    if(endDateFinal >= startDateFinal){
      this.view.calEndDate.onSelection = this.onSelectionOfEndDate.bind(this, endDate);
    } else{
      //this.showBottomPopUp({ "msg" :  "End date cannot be lower than start date.", "option" : "error"});
      this.showErrorMessage("End date cannot be lower than start date.");
      this.view.calEndDate.dateComponents = previousEndDate;
    }
  },
  
  dismissLoadingIndicator: function () {
    this.view.flxLoading.setVisibility(false);
    this.view.flxMain.setEnabled(true);
  },
  
  toggleLoadingIndicator : function(value){
    this.view.flxLoading.setEnabled(!value);
    this.view.flxLoading.setVisibility(value);
  },
  
  showErrorMessage : function(text){
    this.dismissLoadingIndicator();
    var inp = {
      "msg" : commonUtils.checkIfEmpty(text) ? "Sorry, something went wrong. Please try again later." : text,
      "option" : "error"
    };
    this.showBottomPopUp(inp);
  },

  backFun : function(){
    formStack.pop();
    commonUtils.navigateTo("frmDashboard", {
      "navigatingFrom": "frmAnalytics"
    });
  }

});