define({ 
  /**
  	* @desc MVC navigation function
    * @param <Any> data - contains the data required from other form while navigating
    * @retun void
  */
  onNavigate : function(data) {
    try{
      commonUtils.addbottompopup(this);
      this.dismissPopup();
      this.view.flxLogin.setEnabled(true);
      this.view.flxPopupMain.setVisibility(false);
      this.view.flxLogin.setEnabled(true);
      this.view.preShow = this.preShow.bind(this);
      this.view.postShow = this.postShow.bind(this);
      this.bindAction();
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  postShow : function(){
    this.animateBadge();
  },

  preShow : function(){
    this.dismissLoading();
    this.resetUI();
    this.getRememberMeDetails();
  },

  animateBadge : function(){
    var self = this;  
    var transform = kony.ui.makeAffineTransform();
    transform.rotate(0);
    var transform1 = kony.ui.makeAffineTransform();
    transform1.rotate(180);
    var transform2 = kony.ui.makeAffineTransform();
    transform2.rotate(360);
    this.view.imgBadge1.animate(
      kony.ui.createAnimation({
        "0" : {
          "transform": transform,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "50" : {
          "transform": transform1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "100" : {
          "transform": transform2,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 5,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 3
      }, {
        "animationEnd": ""
      });
    this.view.imgBadge2.animate(
      kony.ui.createAnimation({
        "0" : {
          "transform": transform,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "50" : {
          "transform": transform1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "100" : {
          "transform": transform2, 
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 3,
        "iterationCount": 4,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 3
      }, {
        "animationEnd": ""
      });
    this.view.imgBadge3.animate(
      kony.ui.createAnimation({
        "0" : {
          "transform": transform,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "50" : {
          "transform": transform1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "100" : {
          "transform": transform2, 
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 6,
        "iterationCount": 3,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 3
      }, {
        "animationEnd": ""
      });
    this.view.imgBadge4.animate(
      kony.ui.createAnimation({
        "0" : {
          "transform": transform,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "50" : {
          "transform": transform1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "100" : {
          "transform": transform2, 
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 9,
        "iterationCount": 2,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 3
      }, {
        "animationEnd": ""
      });
    this.view.imgBadge5.animate(
      kony.ui.createAnimation({
        "0" : {
          "transform": transform,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "50" : {
          "transform": transform1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        },
        "100" : {
          "transform": transform2, 
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 12,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 3
      }, {
        "animationEnd": ""
      });
  },

  resetUI : function(){
    this.view.flxLogin.setEnabled(true);
    this.view.lblOrBTWLogin.setVisibility(false);
    this.view.flxTouchIdLogin.setVisibility(false);
    this.view.imgRememberMe.src = "remembermeoff.png";
    this.view.flxPasswordError.setVisibility(false);
    this.view.flxUserNameError.setVisibility(false);
  },

  bindAction : function(){
    try{
      var self = this;
      this.view.lblForgotPassword.onTouchStart = this.sendMail.bind(this);
      this.view.imgRememberMe.onTouchStart =  this.toggleRememberMe.bind(this);
      this.view.btnLogin.onClick = this.onClickOfLogin.bind(this);
      this.view.btnNotNow.onClick = this.onClickOfNotNowInTouchIdPopup.bind(this);
      this.view.btnEnable.onClick = this.enableTouchId.bind(this);
      this.view.btnCancelAuthUsingTouchId.onClick = this.dismissPopup.bind(this , "flxAuthentiacteUsingTouchIdPopup");
      this.view.lblPasswordMasked.onTouchStart = ()=>{
        self.view.tbxPassword.secureTextEntry = !self.view.tbxPassword.secureTextEntry;
        let txt = self.view.lblPasswordMasked.text;
        self.view.lblPasswordMasked.text = (txt == "") ? "" : "";
      };
      this.view.tbxUserName.onTextChange = ()=> {
        self.view.flxUserName.skin = "sknFlxLoginTbxNormal";
        self.view.flxUserNameError.setVisibility(false);
      };
      this.view.tbxPassword.onTextChange = ()=> {
        if(!commonUtils.checkIfEmpty(self.view.tbxPassword.text)){
          self.view.flxPassword.skin = "sknFlxLoginTbxNormal";
          self.view.flxPasswordError.setVisibility(false);
        }
      };   
      this.view.btnErrorCancel.onClick = this.dismissPopup.bind(this , "flxGenericErrorPopup");
      this.view.flxTouchIdLogin.onClick = this.authUsingTouchID.bind(this);
      this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);

      this.view.btnNotNow.onClick = this.onClickOfNotNowInTouchIdPopup.bind(this);
      this.view.btnEnable.onClick = this.enableTouchId.bind(this);
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
  	* @desc Called on click of the login button
    * @param -
    * @retun void
  */

  onClickOfLogin : function() {
    try {           
      var userId = this.view.tbxUserName.text;
      var password = this.view.tbxPassword.text;
      if(commonUtils.checkIfEmpty(userId) && commonUtils.checkIfEmpty(password)) {
        this.showHideAlertUserPass(true, 1);
      } else if (commonUtils.checkIfEmpty(userId)) {
        this.showHideAlertUserPass(true, 2);
      } else if (commonUtils.checkIfEmpty(password)) {
        this.showHideAlertUserPass(true, 3);
      } else {
        kony.store.setItem("triedUserName", this.view.tbxUserName.text);
        this.showHideAlertUserPass(false, 1);
        this.showLoadingIndicator();
        this.initilizeClientSDK_getlogin(); 
      }
    } catch (err) {  
      var username = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.username) ? this.view.tbxUserName.text : oceaneering.oms.appGlobals.username;
      var er =  {
        "username" : username,
        "func" : "onClickOfLogin",
        "ex" : username + "is trying to login - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er, true);

      this.dismissLoading();
      this.showBottomPopUp({
        "msg" : commonUtils.errMessage,
        "option" : "error"
      });
    }
  },

  showHideAlertUserPass : function(val , input){
    switch(input){ // 1 : both , 2 : username , 3 : password
      case 1 : {
        this.view.flxUserNameError.setVisibility(val);
        this.view.flxPasswordError.setVisibility(val);
        this.view.flxUserName.skin = val ? "sknFlxLoginTbxError" : "sknFlxLoginTbxNormal";
        this.view.flxPassword.skin = val ? "sknFlxLoginTbxError" : "sknFlxLoginTbxNormal";
        break;
      }
      case 2 : {
        this.view.flxUserNameError.setVisibility(val);
        this.view.flxUserName.skin = val ? "sknFlxLoginTbxError" : "sknFlxLoginTbxNormal";
        break;
      }
      case 3 : {
        this.view.flxPasswordError.setVisibility(val);
        this.view.flxPassword.skin = val ? "sknFlxLoginTbxError" : "sknFlxLoginTbxNormal";
        break;
      }
    }
  },
  /**
     * @desc Initializes the Client SDK
     * @param -
     * @retun void
     */
  initilizeClientSDK_getlogin : function(){
    try{
      var appKey = oceaneering.oms.appConfig.appKey;
      var appSecret = oceaneering.oms.appConfig.appSecret;
      var serviceUrl = oceaneering.oms.appConfig.serviceUrl;
      oceaneering.oms.appGlobals.client = null;
      oceaneering.oms.appGlobals.client = new kony.sdk();
      oceaneering.oms.appGlobals.client.init(appKey, appSecret, serviceUrl, this.successCallback_getlogin.bind(this), this.errorCallback_getlogin.bind(this));
    } catch(err) {  
      var username = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.username) ? this.view.tbxUserName.text : oceaneering.oms.appGlobals.username;
      var er =  {
        "func" : "initilizeClientSDK_getlogin",
        "ex" : username + " - initilizeClientSDK_getlogin - " +  JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  /**
  	* @desc Success Callback for initializing Client SDK
    * @param JSON response - Success details from the Client SDK init
    * @retun void
  */
  successCallback_getlogin: function(response) {
    try{
      var userId = this.view.tbxUserName.text;
      var password = this.view.tbxPassword.text;
      this.invokeLoginService(userId,password);
    } catch(err){  
      var username = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.username) ? this.view.tbxUserName.text : oceaneering.oms.appGlobals.username;
      var er =  {
        "func" : "successCallback_getlogin",
        "ex" : username + " - is trying login - " + JSON.stringify(err)
      };
      this.dismissLoading();
      commonUtils.exception(this, er , true);
    }
  },

  /**
  	* @desc Error Callback for initializing Client SDK
    * @param JSON error - Error details from the Client SDK init
    * @retun void
  */
  errorCallback_getlogin : function(error) {
    try{
      var inp  = {
        "msg" : "No internet connection. Please try again when network is available.",
        "option" : "error"
      };
      this.showBottomPopUp(inp);
      this.dismissLoading();
      var er =  {
        "func" : "errorCallback_getlogin",
        "err" : JSON.stringify(error)
      };
      commonUtils.exception(this, er , true);
    } catch(err){   
      var er =  {
        "func" : "errorCallback_getlogin",
        "ex" : JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  /**
     * @desc Invokes the login service
     * @param -
     * @retun void
     */
  invokeLoginService : function(userId, password) {
    try {
      var data = {
        "user": userId ,
        "password": password
      };
      var headers = {};
      var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("OMSAuthenticationNew");
      var operationName = "UserLogin";    
      integrationObj.invokeOperation(operationName, headers, data, this.operationSuccess.bind(this, userId, password), this.operationFailure.bind(this));     
    } catch (err) {  
      var er =  {
        "func" : "invokeLoginService",
        "ex" : JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  getEmployeeFullName : function(empid){
    try{
      commonUtils.employeeDetails(empid).then((res)=>{
        oceaneering.oms.appGlobals.jobCode = res.jobCode;
        commonUtils.jobCode(oceaneering.oms.appGlobals.jobCode).then((res)=>{
          if(!commonUtils.checkIfEmpty(res) && res.length > 0){
            oceaneering.oms.appGlobals.jobPosition = res[0].title;
          } else {
            oceaneering.oms.appGlobals.jobPosition = "";
          }
        }, (err)=>{
          kony.print("Error in getting job position");
        });
        oceaneering.oms.appGlobals.offshoreTRCList = res.offshoreTRCList;
      }, (err)=>{
        var er =  {
          "func" : "getEmployeeFullName",
          "ex" : "Errorcalback " + JSON.stringify(err)
        };
        commonUtils.exception(this, er , true);
      });
    }catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },

  /**
  	* @desc Error Callback for login service
    * @param JSON err - Error details from login service
    * @retun void
  */
  operationFailure : function(err) {
    try{
      this.showHideAlertUserPass(true, 1);
      this.showBottomPopUp({
        "msg" : commonUtils.incorrectUserPass,
        "option" : "error"
      });
      this.dismissLoading();
      var er =  {
        "func" : "operationFailure",
        "err" : "ErrorCallback - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    } catch(error){ 
      var er =  {
        "func" : "operationFailure",
        "err" : "Exception - " + JSON.stringify(error)
      };
      commonUtils.exception(this, error , true);
    }
  },

  /**
  	* @desc Success Callback for login service
    * @param JSON res - Contains the logged in user's details
    * @retun void
  */
  operationSuccess : function(userId, password, res) {
    try {      
      if(res.httpStatusCode == 200 && res.opstatus === 0) {     
        if(commonUtils.checkIfEmpty(res.EmpID)){
          this.showHideAlertUserPass(true, 1);
          this.showBottomPopUp({
            "msg" : commonUtils.incorrectUserPass,
            "option" : "error"
          });
          var er =  {
            "func" : "operationSuccess",
            "err" : "ErrorCallBack - " + this.view.tbxUserName.text +  "- Trying loging in - "+ commonUtils.incorrectUserPass
          };
          this.dismissLoading();
          commonUtils.exception(this, er , true);
        } else {
          this.showLoadingIndicator();
          kony.store.setItem("username", userId);
          kony.store.setItem("password", password);
          oceaneering.oms.appGlobals.employeeFullName = res.FirstName + " " + res.LastName;
          oceaneering.oms.appGlobals.username = res.Login;
          oceaneering.oms.appGlobals.employeeId = res.EmpID;
          this.getEmployeeFullName(res.EmpID);
          commonUtils.getServiceLines().then((res)=>{
            oceaneering.oms.appGlobals.serviceLines = res;
          } , (err)=>{
            var er =  {
              "func" : "ServiceLines",
              "ex" : "Errorcalback " + JSON.stringify(err)
            };
            commonUtils.exception(this, er , true);
            oceaneering.oms.appGlobals.serviceLines = [];
          });
          this.afterLoginSuccess(res);   
          push.CallbacksOfApp();
          push.registerHere();
        }            
      } else {   
        this.showBottomPopUp({
          "msg" : commonUtils.errMessage,
          "option" : "error"
        });
        this.dismissLoading();
      }
    } catch(err){
      var er =  {
        "func" : "operationSuccess",
        "ex" : "Exception - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  /**
  	* @desc Called after successful login.
    * @param JSON data - Contains the logged in user's details
    * @retun void
  */
  afterLoginSuccess : function(data) {   
    this.storeEmployeeDataInDevice(data);
  },

  /**
  	* @desc Stored login details into the local DB
    * @param JSON data - Contains the logged in user's details
    * @retun void
  */
  storeEmployeeDataInDevice : function(data) { 
    try{
      var gblAppDataEmployeeId = data.EmpID;
      kony.store.setItem("gblAppDataEmployeeId", gblAppDataEmployeeId);
      if (commonUtils.checkIfEmpty(kony.store.getItem("userId"))) {
        kony.store.setItem("userId", "");
        gblUserId = "";
      }
      if(this.view.imgRememberMe.src == "remembermeoff.png") {
        kony.store.setItem("RememberUser", 0);
      } else {
        kony.store.setItem("RememberUser", 1);
      }
      this.checkTouchId();
    } catch(err){   
      commonUtils.exception(this, err);
    }
  },

  /**
  	* @desc Check if enable touchID popup should be displayed or not
    * @param -
    * @retun void
  */
  checkTouchId : function(){
    try{
      var userId = (this.view.tbxUserName.text.trim()).toLowerCase();
      if(userId != (kony.store.getItem("userId")).toLowerCase()){
        kony.store.setItem("firstTimeLoginOMS", true);
        kony.store.setItem("userId", userId);
        gblUserId = userId;
      }
      if(commonUtils.checkIfEmpty(kony.store.getItem("firstTimeLoginOMS")) || kony.store.getItem("firstTimeLoginOMS") === true) {      
        this.isAuthUsingTouchSupported("checkTouchID");
      } else {
        this.showLoadingIndicator();
        this.checkAppVersion();
      }
    } catch(err){   
      var er =  {
        "func" : "checkTouchId",
        "err" : "Exception - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  afterProjectGet : function(){
    try{
      this.showLoadingIndicator();
      commonUtils.pushAppUsage();
      commonUtils.getProjectList().then((res)=>{
        formStack.push({"frm" : "frmNewLogin" , params : {"navigatingFrom" : "frmNewLogin" , "projects" : res}});
        commonUtils.navigateTo( "frmDashboard" , {"navigatingFrom" : "frmNewLogin" , "projects" : res});
        this.dismissLoading();
      }, (err)=>{
        formStack.push({"frm" : "frmNewLogin" , params : {"navigatingFrom" : "frmNewLogin" , "projects" : [] , "error" : err}});
        commonUtils.navigateTo("frmDashboard" , {"navigatingFrom" : "frmNewLogin" , "projects" : [] , "error" : err});
        this.dismissLoading();
      });
    } catch(err){   
      var er =  {
        "func" : "afterProjectGet",
        "err" : "Exception - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  /**
  	* @desc Check if touchID is supported by the device or not
    * @param -
    * @retun void
  */
  isAuthUsingTouchSupported : function(input){
    try{
      var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
      if (JSON.parse(status) == 5000) {  
        if(kony.store.getItem("firstTimeLoginOMS") === false || kony.store.getItem("firstTimeLoginOMS") == "false"){ 
          this.view.lblOrBTWLogin.setVisibility(true);
          this.view.flxTouchIdLogin.setVisibility(true);
          this.authUsingTouchID();
        } else {       
          kony.store.setItem("firstTimeLoginOMS", false);
          this.showEnablePushNotiPopup(true);
        }
      } else {
        kony.store.setItem("TouchId", 0);
        this.view.flxTouchIdLogin.setVisibility(false);
        this.view.lblOrBTWLogin.setVisibility(false);
        if(!commonUtils.checkIfEmpty(input)){
          this.showEnablePushNotiPopup(false);
        }
      } 
    } catch(err) {   
      var er =  {
        "func" : "isAuthUsingTouchSupported",
        "err" : "Exception - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  /**
  	* @desc Authenticate using touch Id
    * @param -
    * @retun void
  */
  authUsingTouchID : function(){
    try{
      this.dismissPopup();
      var config = {
        "promptMessage": "Place your finger on the home button to Login"
      };
      //#ifdef android
      this.showAuthUsingTouchIdPopup();
      //#endif
      kony.localAuthentication.authenticate(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID, this.statusCallBack.bind(this), config);
    } catch(err){   
      var er =  {
        "func" : "authUsingTouchID",
        "err" : "Exception - " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
    }
  },

  checkActiveNetwork : function() {
    var options = {
      "requestWithPermission" : false,
      "callback" : (network)=>{
        if(network.status != "FAILED"){
          kony.print("Internet Available");
          return true;
        } else {
          var er =  {
            "func" : "checkActiveNetwork",
            "err" :  "Network Status - " +  network.status + " " + JSON.parse(kony.net.getActiveNetworkType(options)) + " - " + kony.store.getItem("username") + " - Date/Time - " + new Date()
          };
          //this.dismissLoading();
          commonUtils.exception(this, er , true);
          return false;

        }
      }
    };
    return kony.net.getActiveNetworkType(options);
  },

  /**
  	* @desc Touch Id Authentication callback
    * @param Int status - contains the touchId status code
    * @param messgae - contains the touchId Authentication message
    * @retun void
  */
  statusCallBack : function(status, message){  
    try{
      if(JSON.parse(status) == 5000){
        var userId = kony.store.getItem("username");
        var password = kony.store.getItem("password");
        if(kony.net.isNetworkAvailable(constants.NETWORK_TYPE_ANY)){
          this.dismissPopup();
          this.showLoadingIndicator();       
          kony.store.setItem("RememberUser", 1);
          this.showHideAlertUserPass(false , 1);
          this.view.lblOrBTWLogin.setVisibility(true);
          this.view.flxTouchIdLogin.setVisibility(true);     
          if(commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.client)){
            this.initilizeClientSDK_navigateToHome(userId , password);
          } else {    
            this.showLoadingIndicator();
            this.invokeLoginService(userId, password);
          }
        } else {
          this.dismissLoading();
          this.showBottomPopUp({
            "msg" : "No internet connection. Please try again when network is available.",
            "option" : "error"
          });
          var errr = {
            "func" : "statusCallBack",
            "err" : kony.store.getItem("username") + " is having Internet Connectivity Issue - " + JSON.parse(this.checkActiveNetwork())
          };
          commonUtils.exception(this, errr , true);
        }
      } else if(JSON.parse(status) == 5002){
        kony.store.setItem("RememberUser", 1);
        this.dismissLoading();
      } else {
        kony.store.setItem("RememberUser", 1);
        this.showBottomPopUp({
          "msg" :  "Touch ID/Face ID does not recognize your identity. Please try again or login using your username and password.",
          "option" : "error"
        });
        this.dismissLoading();
      }
    } catch(err){   
      commonUtils.exception(this, err);
    }
  },

  /**
     * @desc Initializes the Client SDK
     * @param -
     * @retun void
     */
  initilizeClientSDK_navigateToHome : function(username,password) {
    try {
      this.showLoadingIndicator();
      var appKey = oceaneering.oms.appConfig.appKey;
      var appSecret = oceaneering.oms.appConfig.appSecret;
      var serviceUrl = oceaneering.oms.appConfig.serviceUrl;
      oceaneering.oms.appGlobals.client = null;
      oceaneering.oms.appGlobals.client = new kony.sdk();
      oceaneering.oms.appGlobals.client.init(appKey, appSecret, serviceUrl, this.successCallback_navigateToHome.bind(this,username,password), this.errorCallback_navigateToHome.bind(this));
    } catch(err) {
      commonUtils.exception(this, err);
    }
  },

  /**
     * @desc Success Callback for initializing Client SDK
     * @param JSON response - Success details from the Client SDK init
     * @retun void
     */
  successCallback_navigateToHome : function(username, password, response) {
    try {
      kony.print("@@@@@@@@@@@@@@@ In initilizeClientSDKSuccess: " + JSON.stringify(response));
      this.invokeLoginService(username , password);
    }catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },

  /**
     * @desc Error Callback for initializing Client SDK
     * @param JSON error - Error details from the Client SDK init
     * @retun void
     */
  errorCallback_navigateToHome : function(error) {
    try{
      this.dismissLoading();
      this.showBottomPopUp({
        "msg" : "No internet connection. Please try again when network is available." ,
        "option" : "error"
      });
      var er = {
        "func" : "errorCallback_navigateToHome",
        "err" :  "Initialize errorCallback" + " Connection Status - " + JSON.parse(this.checkActiveNetwork())
      };
      commonUtils.exception(this, er , true);
      kony.timer.schedule("timerNetworkConnection", this.dismissBottomPopup, 4, false);
    } catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },


  /**
     * @desc Opens new mail on Click of Forgot Password
     * @param -
     * @retun void
     */
  sendMail : function() {
    try {
      var deviceInfo = kony.os.deviceInfo();
      var to = ["grp-mobile-oii@oceaneering.com"];
      var cc = [];
      var bcc = [];
      // Set the subject.
      var sub = "Forgot Password";
      // Message body.
      var msgbody = "Unable to Login. \n My UserId is: "+ (!commonUtils.checkIfEmpty(kony.store.getItem("triedUserName")) ? kony.store.getItem("triedUserName") : "" )+"\n My EmployeeId is:  \n\nThank You.\n" +
          "\n==================\nDO NOT EDIT\n==================\nApplication: OIIDPR\nVersion: " + oceaneering.oms.appGlobals.version + "\nDevice Model: " + deviceInfo.model +
          "\nOS: " + deviceInfo.name + "\nOS Version: " + deviceInfo.version;
      // Send the email.
      kony.phone.openEmail(to, cc, bcc, sub, msgbody, false);
    } catch (err) {
      kony.print("@@@@@@@@@@@@@@@ Error in sendMail function: " + JSON.stringify(err));
    }
  },

  showLoadingIndicator: function(){
    this.view.flxLoading.setVisibility(true);
    this.view.flxLogin.setEnabled(false);
  },

  /**
  	* @desc Used to toggle remember me between on and off
    * @param -
    * @retun void
  */
  toggleRememberMe: function() {
    try {
      if(this.view.imgRememberMe.src == "remembermeoff.png") {
        this.view.imgRememberMe.src = "remembermeon.png";
      } else {
        this.view.imgRememberMe.src = "remembermeoff.png";
      }
    } catch (err) {
      commonUtils.exception(this, err);
    }
  },
  /**
  	* @desc Called on PostShow of login form. Populated the required fields
    * @param -
    * @retun void
  */
  getRememberMeDetails : function() {
    try {
      var userId = kony.store.getItem("userId");
      var password = kony.store.getItem("password");
      this.dismissPopup();
      this.view.tbxUserName.text = "";
      this.view.tbxPassword.text = "";
      this.view.lblOrBTWLogin.setVisibility(false);
      this.view.flxTouchIdLogin.setVisibility(false);
      if(kony.store.getItem("TouchId") === 1) {
        this.view.tbxUserName.text = userId;
        var deviceInfo = kony.os.deviceInfo();
        if(deviceInfo.name == "iPhone"){
          switch (kony.localAuthentication.getBiometryType()) {
            case constants.BIOMETRY_TYPE_NONE:
              this.view.lblOrBTWLogin.setVisibility(false);
              this.view.flxTouchIdLogin.setVisibility(false);
              break;
            case constants.BIOMETRY_TYPE_TOUCHID:
              this.view.lblTouchIdText.text = "Login with Touch ID";
              this.view.touchIdImage.src = "touch.png";
              this.isAuthUsingTouchSupported();
              break;
            case constants.BIOMETRY_TYPE_FACEID:
              this.view.lblTouchIdText.text = "Login with Face ID";
              this.view.touchIdImage.src = "face.png";
              this.isAuthUsingTouchSupported();
              break;
            case constants.BIOMETRY_TYPE_UNDEFINED:
              this.view.lblOrBTWLogin.setVisibility(false);
              this.view.flxTouchIdLogin.setVisibility(false);
              break;
          }
        } else {
          var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
          if(JSON.parse(status) == 5000){
            this.view.lblOrBTWLogin.setVisibility(true);
            this.view.flxTouchIdLogin.setVisibility(true);
            this.isAuthUsingTouchSupported();
          }else{
            this.view.lblOrBTWLogin.setVisibility(false);
            this.view.flxTouchIdLogin.setVisibility(false);
          }
        }
        this.view.imgRememberMe.src = "remembermeon.png";       
      } else if(kony.store.getItem("RememberUser") == 1) {  
        this.view.imgRememberMe.src = "remembermeon.png";
        this.view.tbxUserName.text = userId;
        this.view.tbxPassword.setFocus(true);
      } else {
        this.view.imgRememberMe.src = "remembermeoff.png";
        this.view.tbxUserName.setFocus(true);
      }
    } catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },

  /**
  	* @desc Shows the enable Touch ID popup for the first time login of a user
    * @param -
    * @retun void
  */
  showEnableTouchIdPopup : function(){
    try{
      this.dismissPopup();
      var deviceInfo = kony.os.deviceInfo();
      if(deviceInfo.name == "iPhone"){
        switch (kony.localAuthentication.getBiometryType()) {
          case constants.BIOMETRY_TYPE_TOUCHID:
            this.view.lblTouchIdText.text = "Login with Touch ID";
            this.view.touchIdImage.src = "touch.png";
            this.view.imgEnableTouchIdPopup.src = "touch.png";
            this.view.lblEnableTouchIdMessage.text = "Would you like to enable Touch ID to login into the application?";
            break;
          case constants.BIOMETRY_TYPE_FACEID:     
            this.view.lblTouchIdText.text = "Login with Face ID";
            this.view.touchIdImage.src = "face.png";
            this.view.imgEnableTouchIdPopup.src = "face.png";
            this.view.lblEnableTouchIdMessage.text = "Would you like to enable Face ID to login into the application?";
            break;
        }
      }
      this.view.flxPopupMain.setVisibility(true);
      this.view.flxEnableTouchIdPopup.setVisibility(true);
      this.view.flxLogin.setEnabled(false);
    } catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },

  /**
  	* @desc Shows the enable Touch ID popup for the first time login of a user
    * @param -
    * @retun void
  */
  showEnablePushNotiPopup : function(input){
    this.showLoadingIndicator();
    this.dismissPopup();
    var deviceInfo = kony.os.deviceInfo();
    this.view.btnNotNowPush.onClick = this.onClickOfNotNowPushPopup.bind(this, input);
    this.view.btnNowPush.onClick = this.onClickOfEnablePush.bind(this , input);
    if(deviceInfo.name != "iPhone"){
      this.view.lblPushNotification.text = "Would you like to enable Push Notifications for this application?";
      this.view.flxPopupMain.setVisibility(true);
      this.view.flxEnablrePushPopUp.setVisibility(true);
      this.view.flxLogin.setEnabled(false);
      this.dismissLoading();
    } else {
      if(!input){
        kony.store.setItem("firstTimeLoginOMS", false);
        this.showLoadingIndicator();
        this.checkAppVersion();
      }else{
        this.showEnableTouchIdPopup();
        this.dismissLoading();
      }
    }
  },

  /**
  	* @desc Disables Touch ID and navigates to Dashboard screen
    * @param -
    * @retun void
  */
  onClickOfNotNowInTouchIdPopup : function(){
    this.showLoadingIndicator();
    kony.store.setItem("TouchId", 0);
    this.view.lblOrBTWLogin.setVisibility(false);
    this.view.flxTouchIdLogin.setVisibility(false);
    this.dismissPopup();
    this.showLoadingIndicator();
    this.checkAppVersion();  
  },

  /**
  	* @desc Enables Touch ID
    * @param -
    * @retun void
  */
  enableTouchId : function(){
    try{
      kony.store.setItem("TouchId", 1);
      this.view.lblOrBTWLogin.setVisibility(true);
      this.view.flxTouchIdLogin.setVisibility(true);
      this.authUsingTouchID();
    } catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },

  /**
  	* @desc Disables Touch ID and navigates to Dashboard screen
    * @param -
    * @retun void
  */
  onClickOfNotNowPushPopup : function(input){
    this.dismissPopup();
    this.showLoadingIndicator();
    push.unregisterPush();
    if(!input){
      kony.store.setItem("firstTimeLoginOMS", false);
      this.showLoadingIndicator();
      this.checkAppVersion();
    }else{
      this.showEnableTouchIdPopup();
      this.dismissLoading();
    }
  },

  /**
  	* @desc Disables Touch ID and navigates to Dashboard screen
    * @param -
    * @retun void
  */
  onClickOfEnablePush : function(input){
    this.dismissPopup();
    this.showLoadingIndicator();
    push.registerHere();
    if(!input){
      kony.store.setItem("firstTimeLoginOMS", false);
      this.showLoadingIndicator();
      this.checkAppVersion();
    }else{
      this.showEnableTouchIdPopup();
      this.dismissLoading();
    }  
  },

  /**
  	* @desc Shows the generic error message popup
    * @param String errorMessage - Contains the error message to be displayed in the popup
    * @retun void
  */
  showGenericErrorPopup : function(errorMessage){
    this.dismissPopup();
    this.view.lblGenericErrorMessage.text = errorMessage;
    this.view.flxGenericErrorPopup.setVisibility(true);
    this.view.flxPopupMain.setVisibility(true);
    this.view.flxLogin.setEnabled(false);
  },



  /**
  	* @desc Dismisses all the popups in the login screen
    * @param -
    * @retun void
  */
  dismissPopup : function(input){
    this.dismissLoading();
    this.view.flxPopupMain.setVisibility(false);
    this.view.flxEnableTouchIdPopup.setVisibility(false);
    this.view.flxGenericErrorPopup.setVisibility(false);
    this.view.flxEnablrePushPopUp.setVisibility(false);
    this.view.flxAuthentiacteUsingTouchIdPopup.setVisibility(false);
    this.view.flxVersionPopupContainer.setVisibility(false);
    var self = this;
    let widget = this.view.flxEnableTouchIdPopup;     
    if(input == "flxEnableTouchIdPopup"){
      widget.animate(
        kony.ui.createAnimation({
          "100": {
            "width": "0%",
            "height" : "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.3
        }, {
          "animationEnd": ()=>{
            self.view.flxEnableTouchIdPopup.setVisibility(false);
            self.view.flxPopupMain.setVisibility(false);
          } 
        });
    } else if(input == "flxAuthentiacteUsingTouchIdPopup"){
      widget = this.view.flxAuthentiacteUsingTouchIdPopup;
      widget.animate(
        kony.ui.createAnimation({
          "100": {
            "width": "0%",
            "height" : "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1 ,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.3
        }, {
          "animationEnd": ()=>{
            self.view.flxAuthentiacteUsingTouchIdPopup.setVisibility(false);
            self.view.flxPopupMain.setVisibility(false);
          }
        });
    } else if(input == "flxEnablrePushPopUp"){
      widget = this.view.flxEnablrePushPopUp;
      widget.animate(
        kony.ui.createAnimation({
          "100": {
            "width": "0%",
            "height" : "0%",
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1 ,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.3
        }, {
          "animationEnd": ()=>{
            self.view.flxEnablrePushPopUp.setVisibility(false);
            self.view.flxPopupMain.setVisibility(false);
          }
        }); 
    } else {
      this.view.flxPopupMain.setVisibility(false);
      this.view.flxEnableTouchIdPopup.setVisibility(false);
      this.view.flxGenericErrorPopup.setVisibility(false);
      this.view.flxEnablrePushPopUp.setVisibility(false);
      this.view.flxAuthentiacteUsingTouchIdPopup.setVisibility(false);
    }
    this.view.flxLogin.setEnabled(true);
  },
  /**
  	* @desc Shows Authenticate using Touch ID ppopup for Android
    * @param -
    * @retun void
  */
  showAuthUsingTouchIdPopup : function(){
    try{
      var self = this;
      this.dismissPopup();
      this.view.flxAuthentiacteUsingTouchIdPopup.width = "94%";
      this.view.flxAuthentiacteUsingTouchIdPopup.height = "28%";
      this.view.flxAuthentiacteUsingTouchIdPopup.setVisibility(true);
      this.view.flxPopupMain.setVisibility(true);
      this.view.flxLogin.setEnabled(false);
    }catch(err){   
      this.dismissLoading();
      commonUtils.exception(this, err);
    }
  },

  dismissLoading : function(){
    this.view.flxLoading.setVisibility(false);
    this.view.flxLogin.setEnabled(true);
  },

  showBottomPopUp : function(input){
    var self = this;
    if(commonUtils.checkIfEmpty(input)){
      var inp  = {
        "msg" : "Sorry! Something went wrong. Please try again later.",
        "option" : "error"
      };
      input = inp;
    }
    this.resetBottomPopUp();
    this.dismissLoading();
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
        this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
        this.view.bottompopup.flxBottomPopUp.height = "200dp";
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
            "timingFunction": kony.anim.LINEAR
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.2
      }, {
        "animationEnd": ()=>{
          self.view.bottompopup.setVisibility(true);
          self.view.bottompopup.flxBottomCover.setVisibility(true);
        }
      });  
  },

  dismissBottomPopup : function(){
    var self = this;
    this.dismissLoading();
    this.view.bottompopup.flxBottomPopUp.animate(
      kony.ui.createAnimation({
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
        "animationEnd": ()=> {
          self.view.bottompopup.setVisibility(false);
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
    this.view.bottompopup.btnBottomNotNow.text = "Cancel";
    this.view.bottompopup.btnBottomEnable.text = "Delete";
  },

  checkAppVersion : function (loginDataResponse) {
    try {
      if(oceaneering.oms.environment == "PROD"){
        let integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("checkAppVersion");
        let operationName = "appVersion";
        let data = {
          "appName": "OII-DPR",
          "appOS": "native"
        };
        let headers = {};
        integrationObj.invokeOperation(operationName, headers, data, this.operation_getVersionSuccess.bind(this, loginDataResponse), this.operation_getVersionFailure.bind(this, loginDataResponse));
      } else {
        this.afterProjectGet();
      }
    } catch (err) {
      commonUtils.exception(this, err);
      kony.print("@@@@@@@@@@@@@@@ Error in checkAppVersion: " + JSON.stringify(err));
    }
  },


  operation_getVersionFailure : function (loginDataResponse, err) {
    try {
      var er =  {
        "func" : "operation_getVersionFailure",
        "ex" : "Errorcalback " + JSON.stringify(err)
      };
      commonUtils.exception(this, er , true);
      kony.print("@@@@@@@@@@@@@@@ ErrorCallback in operation_getVersionFailure: " + JSON.stringify(err));
    }catch(ex){
      commonUtils.exception(this, err);
      kony.print("@@@@@@@@@@@@@@@ Error in operation_getVersionFailure: " + JSON.stringify(err));
    }
  },

  operation_getVersionSuccess : function (loginDataResponse, res) {
    try {
      if (res.httpStatusCode == 200 && res.opstatus === 0) {
        this.view.btnUpdate.onClick = this.onClickOfUpdateApp.bind(this);
        if (oceaneering.oms.appGlobals.version != res.row.appVersion && res.row.isAppBlock == "1") {
          //Mandatory update
          this.view.lblVersionContent.text = "The current version of the application is no longer supported. We apologize for any inconvenience we may have caused you.";
          this.view.btnContinueExit.text = "No, Thanks! Close the app.";

          this.view.btnContinueExit.onClick = this.onClickOfExitApplication.bind(this);
          this.dismissLoading();

          this.view.flxVersionPopupContainer.setVisibility(true);
          this.view.flxLogin.setEnabled(false);
        } else if (oceaneering.oms.appGlobals.version != res.row.appVersion && res.row.isAppUpdate == "1") {
          //Optional Update
          this.view.lblVersionContent.text = "There is a new version of OII-DPR available at Oceaneering App Store. We recommend you to download the latest version.";
          this.view.btnContinueExit.text = "No, Thanks! Continue.";

          this.view.btnContinueExit.onClick = this.onClickOfContinue.bind(this, loginDataResponse);
          this.dismissLoading();
          this.view.flxVersionPopupContainer.setVisibility(true);
          this.view.flxLogin.setEnabled(false);
        } else {
          this.afterProjectGet();
        }
      }
    } catch (err) {
      commonUtils.exception(this, err);
      kony.print("@@@@@@@@@@@@@@@ Error in operation_getVersionSuccess: " + JSON.stringify(err));
    }
  },

  onClickOfExitApplication : function(){
    try{
      this.view.flxVersionPopupContainer.setVisibility(false);
      this.view.flxLogin.setEnabled(true);
      kony.application.exit();
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  onClickOfContinue : function(loginDataResponse){
    try{
      this.view.flxVersionPopupContainer.setVisibility(false);
      this.showLoadingIndicator();  
      this.view.flxLogin.setEnabled(true);
      this.afterProjectGet();
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  onClickOfUpdateApp : function(){
    try {
      if(oceaneering.oms.environment == "PROD"){
        kony.application.openURL("https://mfprd.oii.oceaneering.com/apps/Store");
      } else {
        kony.application.openURL("https://mftst.oii.oceaneering.com/apps/Store") ; 
      }
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  }
});