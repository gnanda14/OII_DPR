/**
 * @Description - Contains the functionality of the Create DPR Form
 * @author - Nakul Gupta
*/

define({
  data : {},

  /**
    * @desc MVC navigation function
    * @param JSON data - contains the data received from other forms while navigating
    * @retun void
  */
  onNavigate : function(data) {
    try{
      this.view.preShow = this.preShow.bind(this, data);
      this.view.postShow = this.postShow.bind(this);
      this.bindAction();
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  preShow : function(inp){
    try{ 
      if(!commonUtils.checkIfEmpty(inp.projectNo)){
        this.view.lblProjectId.text = inp.projectNo;
        this.view.flxProject.setVisibility(true);
      }else{
        this.view.flxProject.setVisibility(false);
      }
      if(!commonUtils.checkIfEmpty(inp.clientName)){
        this.view.lblClientName.text = inp.clientName;
        this.view.flxClientName.setVisibility(true);
      }else{
        this.view.flxClientName.setVisibility(false);
      }
      if(!commonUtils.checkIfEmpty(inp.repName)){
        this.view.lblRepName.text = inp.repName;
        this.view.flxRepName.setVisibility(true);
      }else{
        this.view.flxRepName.setVisibility(false);
      }    
      if(!commonUtils.checkIfEmpty(inp.date)){
        this.view.lblSigndate.text = inp.date;
        this.view.flxDate.setVisibility(true);
      }else{
        this.view.flxDate.setVisibility(false);
      }    
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  postShow : function(){
  },

  bindAction: function(){
    this.view.flxBack.onClick = this.onClickOfBack.bind(this , false);
    this.view.onDeviceBack = this.onClickOfBack.bind(this , false);
    this.view.signaturecapture.onSaveImageSuccess = ()=>{
      this.onClickOfBack(true);
    };
    this.view.signaturecapture.onClick = ()=>{
      this.onClickOfBack(false);
    };
  },

  /**
    * @desc Called on click of the back button
    * @param -
    * @retun void
  */
  onClickOfBack : function(param){
    var base64 = this.view.signaturecapture.getSignatureFromDevice();
    commonUtils.navigateTo("frmDPRInfo" , {
      "signature" : base64,
      "sign" : param,
      "navigatingFrom" : "frmSignature"
    });  
    kony.application.destroyForm("frmSignature");
  }
});