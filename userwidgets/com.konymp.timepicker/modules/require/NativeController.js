define([],function (){
  var konyLoggerModule = require('com/konymp/timepicker/konyLogger');
  var konymp = konymp || {};
  konymp.logger = (new konyLoggerModule("time picker Component")) || function() {};
  konymp.logger.setLogLevel("DEBUG");
  konymp.logger.enableServerLogging = true;

  var NativeController=function(componentInstance){
    this.componentInstance = componentInstance;
  };

  NativeController.prototype.onTimeChanged = function(hours,minutes){
    try{
      this.componentInstance.onTimeChanged(hours + ":" + minutes);
    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;
    }
  };
  NativeController.prototype.getTime = function(){
    try{
      var hours = this.timePickerViewObj.getHour();
      var minutes = this.timePickerViewObj.getMinutes();
      var deviceType = kony.os.deviceInfo().name;
      if (deviceType == "android")
      return (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes);
      else
      return (hours) + ":" + (minutes);

    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;
    }
  };
  NativeController.prototype.show = function(){
    try{
      if(!this.componentInstance.viewAdded){

        //#ifdef android
        this.set24HoursView(this.componentInstance.hoursView);
        if(this.isTimerAdded)
          this.removeFromParent();
        //#endif
        if(this.componentInstance.time !== undefined && this.componentInstance.time !== null && this.componentInstance.time.trim() !==""){
          this.setTime(this.componentInstance.time);
        }
        if(this.componentInstance.bgColor !== undefined && this.componentInstance.bgColor !== null && this.componentInstance.bgColor.trim() !== "" && this.componentInstance.bgColor.length === 6){
          this.setBackgroundColor(this.componentInstance.bgColor);
        }          	
        var count = this.timePickerViewObj.show(this.componentInstance.view.navTimepicker.getContainerView());  
        //#ifdef android
        count = this.componentInstance.view.navTimepicker.getContainerView().getChildCount();
        //#endif
        if(count > 0){
          this.isTimerAdded = true;
          this.componentInstance.viewAdded = true;
        }          		              		
      }
      else{
        this.timePickerViewObj.setVisibility(true);
      }
      this.componentInstance.view.forceLayout();
    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;  
    }
  };
  NativeController.prototype.hide = function(){
    try{
      //#ifdef android
      var count = this.componentInstance.view.navTimepicker.getContainerView().getChildCount();          	
      if(count > 0){
        this.componentInstance.viewAdded = true;
      }
      //#endif
      this.timePickerViewObj.setVisibility(false);
    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;
    }
  };

  NativeController.prototype.setBackgroundColor = function(color){
    try{
      if(color !== undefined && color !== null && color.trim() !== "" && color.length === 6){
        this.timePickerViewObj.setBackgroundColor(color);
      }
    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;
    }
  };

  NativeController.prototype.is24HoursView = function(){
    try{
      throw "This API is not implemented for this platform";
    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;
    }
  };

  NativeController.prototype.setTime = function(time){
    try{
      throw "This API is not implemented for this platform";
    }
    catch(exception){
      konymp.logger.error(JSON.stringify(exception), konymp.logger.EXCEPTION);
      throw exception;
    }
  };

  return NativeController;
});
