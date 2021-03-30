define({ 

 //Type your controller code here 
  
  onNavigate : function(compdata){  
    this.view.lblTitle.text = "Project - "+compdata.data[0].str_systemid;
    this.view.segDetails.widgetDataMap = {
          "systemid": "str_reportid",
          "reportDateTime": "str_reportDateTime",
          "lblHours": "dbl_billinghour",
        };
    this.view.segDetails.setData(compdata.data);
    this.view.onDeviceBack = this.backFun.bind(this);
    this.view.flxBack.onTouchEnd = this.backFun.bind(this);
    this.view.lblTotal.text = "Total Hours : "+compdata.hours;
  }, 
  
  backFun : function(){
    formStack.pop();
    commonUtils.navigateTo("frmAnalytics", {
      "navigatingFrom": "frmData"
    });
  }

 });