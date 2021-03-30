/* jshint esnext: true */

var push = {
  messagingClient : null,
  KMSPROP : {
    osType : "",
    UFID : "",
    deviceId : ""
  },

  pushMessage : {
    "projectId" : "",
    "reportDate" : "",
    "dprId" : "",
    "userName" : "",
    "supervisor" : ""
  },

  gbl_claims_token : "",

  /**
 * @class       pushNotificaion
 * @type        Function
 * @param       None
 * return       None.
 * desc         This method sets the call back for push notfications
 */
  CallbacksOfApp : function() {
    try{
      var deviceType = kony.os.deviceInfo().name;
      if (deviceType == "android")
        push.KMSPROP.osType = "androidgcm";
      else
        push.KMSPROP.osType = "iphone";
      kony.push.setCallbacks({
        onsuccessfulregistration: this.onRegistrationSuccess.bind(this),
        onfailureregistration: this.onfailureRegistration.bind(this),
        onlinenotification: this.onlineCallback.bind(this),
        offlinenotification: this.offineCallback.bind(this),
        onsuccessfulderegistration: this.onderegsuccess.bind(this),
        onfailurederegistration: this.onderegfailure.bind(this)
      });    
    } catch(e) {
      kony.print(JSON.stringify(e));
    }
  },

  /*
 * @function regSuccessCallback
 * This function is registration success callback on successful registration of APS or GCM
 * this function is used to register to kony messaging  for push notification
*/
  onRegistrationSuccess : function(regID) {
    push.KMSPROP.deviceId = kony.os.deviceInfo().deviceid;
    push.KMSPROP.UFID =  kony.store.getItem("username").toLowerCase() + "@oceaneering.com";
    try {
      messagingClient = kony.sdk.getCurrentInstance().getMessagingService();
    } catch (exception) {
    }
    messagingClient.register(push.KMSPROP.osType, push.KMSPROP.deviceId, regID, push.KMSPROP.UFID,
                             function(response) {
      // kony.application.dismissLoadingScreen();   
      kony.store.setItem("PUSH_ENABLED", true);
    },
                             function(error) {
      //kony.application.dismissLoadingScreen();
      kony.store.setItem("PUSH_ENABLED", false);
      kony.print("Subscription error " + JSON.stringify(error));   
      kony.print("Sorry you were not able to suscribe for Push Notifications. Please try after some time or if the problem persists try contacting Admin");
    });
  },


  /*
 * @function onfailureRegistration
 * This function is registration failure callback on failure registration of APS or GCM
 */
  onfailureRegistration : function(errormsg) {
    kony.print(errormsg);
    kony.print("Registration Failed ");
    //kony.application.dismissLoadingScreen();
  },


  onderegfailure : function() {
    //kony.application.dismissLoadingScreen(); 
  },

  onderegsuccess : function() {

  },


  /*
 * @function onlinePushNotificationCallback
 * This function is the callback for online push notification
 */
  onlineCallback : function(notification) {
    try {
      var platform = kony.os.deviceInfo().name;
      var alertContent, title;
      if(platform.toLowerCase() == "android" || platform.toLowerCase() =="androidtab"){
        alertContent = notification.content;
        title = notification.title;
      } else if (platform.toLowerCase() == "iphone" || platform.toLowerCase() == "ipad"){
        alertContent = notification.alert.body;
        title = notification.alert.title;
      }else{
        alertContent = notification.notification.body;
        title = notification.notification.title;
      }
      var alertUI = kony.ui.Alert({
        "message": alertContent,
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": title,
        "yesLabel": "OK",
        "noLabel": "",
        "alertIcon": "app_logo.png",
        "alertHandler": ""
      }, {});
    } catch (err) {
      kony.print("KMS Module onlineCallback error" + JSON.stringify(err));
    }
  },

  /*
 * @function offlinePushNotificationCallback
 * This function is the callback for offline push notification
 */
  offineCallback : function(notification) {
    try {
      var platform = kony.os.deviceInfo().name;
      var alertContent,title;
      if(platform.toLowerCase() == "android" || platform.toLowerCase() =="androidtab"){
        alertContent = notification.content;
        title = notification.title;
      } else if (platform.toLowerCase() == "iphone" || platform.toLowerCase() == "ipad"){
        alertContent = notification.alert.body;
        title = notification.alert.title;
      }else{
        alertContent = notification.notification.body;
        title = notification.notification.title;
      }
      var alertUI = kony.ui.Alert({
        "message": alertContent,
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": title,
        "yesLabel": "OK",
        "noLabel": "",
        "alertIcon": "app_logo.png",
        "alertHandler": ""
      }, {});
    } catch (err) {
      kony.print("KMS Module offineCallback error" + JSON.stringify(err));
    }
  },

  /**
 * @class       pushNotificaion
 * @type        Function
 * @param       None
 * return       registration ID.
 * desc         This method allows the user to register for push notfications
 */
  registerHere : function(){
    try {
      // To get regID, use kony.push.register() method 
      var configToRegister;
      //#ifdef android
      configToRegister = {
        senderid: "105696236662"
      };
      //#endif

      //#ifdef iphone
      configToRegister = [0, 1, 2];
      //#endif   

      kony.push.register(configToRegister);
      kony.store.setItem("PUSH_ENABLED" , true);
    }catch(e){
      kony.application.dismissLoadingScreen();
      kony.print("Error in Subscribing" + JSON.stringify(e));
    }
  },


  /**
 * @class       pushNotificaion
 * @type        Function
 * @param       None
 * return       None.
 * desc         This method allows the user to unregister for push notfications
 */
  unregisterPush : function(callback) {
    try {
      messagingClient = kony.sdk.getCurrentInstance().getMessagingService();
      messagingClient.unregister(
        function(response) {      
          kony.store.setItem("PUSH_ENABLED", false);
        },
        function(error) {
          kony.print(JSON.stringify(error));
        });
    } catch (e) {
      kony.print(e);
    }
  },

  getToken : function(){
    var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("PushNotificationConfigure");
    var operationName = "getTokens";
    commonUtils.getProject_Details_staging(push.pushMessage.projectId).then((res)=>{
      push.pushMessage.supervisor = res.createdBy;
      if(!commonUtils.checkIfEmpty(push.pushMessage.supervisor) && (res.createdBy != oceaneering.oms.appGlobals.username)){
        integrationObj.invokeOperation(operationName, {}, {}, this.operationSuccess_getClaimsToken.bind(this), ()=>{
          kony.print("Error Occured");
        });
      }
    },()=>{
		kony.print("Error Occured in getToken");
    });

  },

  operationSuccess_getClaimsToken : function(res) {    
    if(res.httpStatusCode == 200 && res !== null && res.opstatus === 0) {
      push.gbl_claims_token = res.claims_token.value;     
      this.getPushNotificationSubscribers(push.gbl_claims_token);
    }
  },

  getPushNotificationSubscribers : function(gbl_claims_token) {
    try {
      var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("PushNotificationConfigure");
      var operationName = "getAllSubscribers";
      let headers = {"X-Kony-Authorization" : gbl_claims_token};
      integrationObj.invokeOperation(operationName, headers, {}, this.operationSuccess_getPushNotificationSubscribers.bind(this), ()=>{
        kony.print("Error occured");
      });
    } catch (err) {          
    }
  },


  operationSuccess_getPushNotificationSubscribers : function(res) {    
    if(res.httpStatusCode == 200 && res !== null &&  res.opstatus === 0){
      var getksid = "";
      let gblKSID = [];
      for (var i in res.subscribers){
        var deviceId =  res.subscribers[i].appId;
        var ufid = (res.subscribers[i].ufid).toLowerCase();
        if(deviceId ==  oceaneering.oms.appGlobals.appId && res.subscribers[i].subscriptionStatus && (res.subscribers[i].ufid) == `${push.pushMessage.supervisor}@oceaneering.com`){
          gblKSID.push({
            "ksid": res.subscribers[i].ksid
          });
        }
      }
      if(gblKSID.length > 0){
        this.sendPushNotification(gblKSID); 
      }
    }
  },

  sendPushNotification : function(gblKSID) {
    try {
      var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("PushNotificationConfigure");
      var operationName = "sendPushNotifications";
      var pushNotifyTitle = "Timesheet Submitted By: " + oceaneering.oms.appGlobals.employeeFullName;
      var pushNotifyBody = `DPR: ${push.pushMessage.dprId} 
Project/Job: ${push.pushMessage.projectId} 
Report Date: ${(push.pushMessage.reportDate).substring(0,10)}`; 
      var pushNotifyAction = "";
      let  data = {
        "appId": oceaneering.oms.appGlobals.appId,
        "subscriber" : JSON.stringify(gblKSID),
        "data": pushNotifyBody,
        "title": pushNotifyTitle,
        "icon": "app_logo.png",
        "clickAction": ""
      };
      let headers = {
        "X-Kony-Authorization" : push.gbl_claims_token
      };
      integrationObj.invokeOperation(operationName, headers, data, ()=>{
        kony.print("Notification Sent"); 
      }, ()=>{
        kony.print("Error Occured");
      });
    }catch(ex){
      kony.print("Exception occured");
    }
  }
};