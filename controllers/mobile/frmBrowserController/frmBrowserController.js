/* jshint esnext: true */
/**
 * @Description - Contains the functionality of the Create DPR Form
 * @author - Amritpal Singh
*/

define({ 

  /**
    * @desc MVC navigation function
    * @param JSON data - contains the data received from other forms while navigating
    * @retun void
  */
  onNavigate : function(data) {
    try {
      var self = this;
      this.view.flxLoading.setVisibility(true);  
      this.view.preShow = this.preShow.bind(this , data);
      this.view.postShow = this.postShow.bind(this , data);
      this.view.flxBrowserback.onClick = this.onClickBackBrowser.bind(this);
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  preShow : function(inp){
    try{
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  postShow : function(data){
    this.openPDF(data.base64 , data.mime);
  },

  openPDF : function(base64String , mime){
    try {
      let config = { "mimeType": "application/pdf"};   
      if(mime == "pdf"){
         let config = { "mimeType": "application/pdf"}; 
      }else{
        let config = { "mimeType": "application/vnd.ms-word"}; 
      }
      this.view.pdfBrowser.loadData(base64String , config);
      this.view.pdfBrowser.setVisibility(true);
      this.view.flxbrowser.setVisibility(true);   
      this.view.flxLoading.setVisibility(false);
    } catch(error){
      commonUtils.exception(this, error);
    }
  }, 

  onClickBackBrowser : function(){
    this.view.flxLoading.setVisibility(true);
    commonUtils.navigateTo("frmAddDPR", {
      "comingFromBrowser" : true     
    });
  }
});