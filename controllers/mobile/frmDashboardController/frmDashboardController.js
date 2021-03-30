/* jshint esnext: true */
/**
 * @Description - Contains the functionality of the Dashboard Form
 */
define({
  projectList: {
    crew: [],
    supervisor: []
  },
  isCrewProjectClick : false,
  /**
	 * @desc MVC navigation function
	 * @param JSON data - contains the data received from other forms while navigating
	 * @retun void
	 */
  onNavigate : function (data) {
    try{
      commonUtils.addbottompopup(this);
      this.isCrewProjectClick = false;
      this.showLoadingIndicator();
      this.resetDashboardScreen();
      if(!commonUtils.checkIfEmpty(data.projects) && data.projects.length > 0) {
        this.successCallback_GetProjectList(data.projects);
      } else {
        this.showLoadingIndicator();
        this.getProjects();
      }
      if(oceaneering.oms.appGlobals.profilePic === "") {
        this.generateToken();
      }
      this.view.preShow = this.preShow.bind(this);
      this.view.postShow = this.postShow.bind(this);
      this.bindActions();
      currentProject.projectData = "";
      currentProject.projectId = "";
      this.view.lblVersion.text = "v" + oceaneering.oms.appGlobals.version;
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  preShow: function () {
    this.dismissBottomPopup();
    this.checkLocalAuth();
    this.checkNotification();
    this.view.lblAddIcon.skin = "sknLblAddProject";
    this.view.lblAddIcon.text = "";
    this.view.lblSearchDpr.text = "";
    this.view.lblSearchDpr.skin = "sknSearchUnSelected";
    this.view.segProjects.height = "100%";
    this.view.flxAddProject.centerX = "50%";
    this.view.flxAddProject.centerY = "120%";
    this.view.btnAddProject.skin = "sknBtnAddProjectDisbaled";
    if(this.view.lblSupervsir.skin == "sknLblDashboardSelected"){
      this.onClickCrewSuper("supervisor");
    }else{
      this.onClickCrewSuper("crew");
    }
  },

  getProjects : function(){
    var self = this;
    this.showLoadingIndicator();
    commonUtils.getProjectList().then((res) => {
      self.successCallback_GetProjectList(res);
    }, (err) => {
      self.errorCallback_GetProjectList(err);
    });
  },

  postShow: function () {},

  bindActions: function () {
    try{
      var self = this;
      this.view.flxDashboard.onClick = ()=>{
        this.showLoadingIndicator();
        this.animateHamburgerback();
        commonUtils.getProjectList().then((res) => {
          this.successCallback_GetProjectList(res);
        }, (err) => {
          this.errorCallback_GetProjectList(err);
        });
      };
      this.view.flxMenuIcon.onClick = this.onHamburgerClick.bind(this);
      this.view.txtSearch.onTextChange = this.onSearchProjects.bind(this);
      this.view.flxSearchIcon.onClick = this.onSearchProjects.bind(this);
      this.view.txtSearch.onDone = this.onSearchProjects.bind(this);

      this.view.segProjects.onRowClick = this.onSelectingProject.bind(this);
      this.view.flxFAB.onClick = this.onClickOfFAB.bind(this);
      this.view.flxSyncAddProject.onClick =  this.onClickOfFAB.bind(this);
      this.view.flxLogout.onClick = this.onClickOfLogout.bind(this);
      this.view.flxTouchId.onClick = this.toggleTouchId.bind(this);
      this.view.flxHistory.onClick = this.onClickOfDPRHistory.bind(this);
      this.view.flxDprHistory.onClick = this.onClickOfDPRHistory.bind(this);
      this.view.flxAnalytics.onClick = this.onClickOfAnalytics.bind(this);
      this.view.txtAddProject.onDone = this.onClickOfAddProject.bind(this);
      this.view.btnAddProject.onClick = this.onClickOfAddProject.bind(this);
      this.view.flxCloseCrewOrSupervisor.onClick = this.animateFABBack.bind(this, "crew");
      this.view.flxAddProject.onClick = () => {};
      this.view.onDeviceBack = () => {};
      this.view.flxMenuBlankArea.onClick = this.dismissSlider.bind(this);
      this.view.flxSearchDPR.onClick = () => {
        if (self.view.lblSearchDpr.skin == "sknSearchUnSelected") {
          self.view.lblSearchDpr.skin = "sknSearchSelected";
          self.animateSearch();
          self.view.flxScrollContainer.height = "91%";
        } else {
          self.view.lblSearchDpr.skin = "sknSearchUnSelected";
          self.animateSearchBack();
          self.view.flxScrollContainer.height = "100%";
        }
      };
      this.view.flxCloseAddProject.onClick = this.animateFABBack.bind(this, "project");
      this.view.flxCrossPopUp.onClick = this.animateFABBack.bind(this, "project");
      this.view.txtAddProject.onTextChange = () => {
        if (!commonUtils.checkIfEmpty(this.view.txtAddProject.text) && this.view.txtAddProject.text.trim().length > 0) {
          self.view.btnAddProject.skin = "sknBtnFocusAddProject";
          self.view.btnAddProject.focusSkin = "sknBtnFocusAddProject";
        } else {
          self.view.btnAddProject.skin = "sknBtnAddProjectDisbaled";
          self.view.btnAddProject.focusSkin = "sknBtnAddProjectDisbaled";
        }
      };
      this.view.flxCancelSearch.onClick = () => {
        self.view.lblSearchDpr.skin = "sknSearchUnSelected";
        this.animateSearchBack();
      };
      this.view.bottompopup.flxBottomContainer.onClick = this.dismissBottomPopup.bind(this);
      this.view.bottompopup.btnDismissBottomPopUp.onClick = this.dismissBottomPopup.bind(this);
      this.view.flxSuperContainer.onClick = this.onClickCrewSuper.bind(this, "supervisor");
      this.view.flxCrewContainer.onClick = this.onClickCrewSuper.bind(this, "crew");
      this.view.flxRefresh.onClick = ()=>{
        self.getProjects();
      };
      this.view.imgNotification.onTouchStart = this.toggleNotification.bind(this);
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  onClickCrewSuper : function (input) {
    try{
      if(input == "supervisor"){
        this.setProjectsToSegment(this.projectList.supervisor);
        this.view.flxSuperContainer.zIndex = 3;
        this.view.flxCrewContainer.zIndex = 1;
        this.view.lblCrewDashboard.skin = commonUtils.DASHBOARD_LBL_UNSEC;
        this.view.lblSupervsir.skin = commonUtils.DASHBOARD_LBL_SEC;
        this.view.flxTopSupervisorLine.skin = commonUtils.DASHBOARDSELECTD;
        this.view.flxTopCrewLine.skin = commonUtils.DASHBOARDUNSELECTED;
        this.view.imgSuper.src = "superimg.png";
        this.view.imgcrewdash.src = "crewimgunsel.png";
      } else {
        this.view.flxSuperContainer.zIndex = 1;
        this.view.flxCrewContainer.zIndex = 3;
        this.view.lblCrewDashboard.skin = commonUtils.DASHBOARD_LBL_SEC;
        this.view.lblSupervsir.skin = commonUtils.DASHBOARD_LBL_UNSEC;
        this.setProjectsToSegment(this.projectList.crew);
        this.view.imgSuper.src = "superimgunsel.png";
        this.view.imgcrewdash.src = "crewimg.png";
        this.view.flxTopSupervisorLine.skin = commonUtils.DASHBOARDUNSELECTED;
        this.view.flxTopCrewLine.skin = commonUtils.DASHBOARDSELECTD;
      }
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Resets Dashboard screen to initial settings
	 * @param -
	 * @retun void
	 */
  resetDashboardScreen: function () {
    this.view.txtSearch.text = "";
    this.view.flxScrollContainer.top = "0%";
    this.view.flxScrollContainer.height = "100%";
    this.view.lblSearchDpr.skin = commonUtils.SEARCHUNSELECTED;
    this.view.flxHamburgerMenuInner.left = "-75%";
    this.view.flxMenuBlankArea.setVisibility(false);
    this.view.flxSearch.setVisibility(false);
    this.view.flxTopSupervisorLine.skin = commonUtils.DASHBOARDSELECTD;
    this.view.flxTopCrewLine.skin = commonUtils.DASHBOARDUNSELECTED;
    this.view.lblUsername.text = oceaneering.oms.appGlobals.employeeFullName;
  },


  checkNotification : function(){
    if(kony.store.getItem("PUSH_ENABLED") === true){
      this.view.imgNotification.src = "switch_on.png"; 
    }else{
      this.view.imgNotification.src = "switch_off.png";
    }
  },
  /**
	 * @desc Checks whether the device has touch id/ face id or not
	 * @param 
	 * @retun void
	 */
  checkLocalAuth: function () {
    var status = kony.localAuthentication.getStatusForAuthenticationMode(constants.LOCAL_AUTHENTICATION_MODE_TOUCH_ID);
    if (status == 5000) {
      this.showLocalAuth();
    } else {
      this.view.flxTouchId.setVisibility(false);
    }
  },

  /**
	 * @desc Displays touch id/ face id option in the hamburger menu
	 * @param -
	 * @retun void
	 */
  showLocalAuth: function () {
    if(kony.store.getItem("TouchId") === 1) {
      this.view.imgTouchId.src = "switch_on.png";
    } else {
      this.view.imgTouchId.src = "switch_off.png";
    }
    var deviceInfo = kony.os.deviceInfo();
    if (deviceInfo.name == "iPhone") {
      switch (kony.localAuthentication.getBiometryType()) {
        case constants.BIOMETRY_TYPE_NONE:
          this.view.flxTouchId.setVisibility(false);
          break;
        case constants.BIOMETRY_TYPE_TOUCHID:
          this.view.imgTouchFace.src = "touch.png";
          this.view.lblTouchId.text = "Touch ID";
          this.view.flxTouchId.setVisibility(true);
          break;
        case constants.BIOMETRY_TYPE_FACEID:
          this.view.imgTouchFace.src = "face.png";
          this.view.lblTouchId.text = "Face ID";
          this.view.flxTouchId.setVisibility(true);
          break;
        case constants.BIOMETRY_TYPE_UNDEFINED:
          this.view.flxTouchId.setVisibility(false);
          break;
      }
    } else {
      this.view.imgTouchFace.src = "touch.png";
      this.view.lblTouchId.text = "Touch ID";
      this.view.flxTouchId.setVisibility(true);
    }
  },


  /**
	 * @desc Error callback of getProjects service call
	 * @param JSON error - Contains the error message and error code of getProjects service call
	 * @retun void
	 */
  errorCallback_GetProjectList : function (error) {
    if (!commonUtils.checkIfEmpty(error) && !(error.opstatus == 8005 && error.errmsg == "empty response received")) {
      this.showBottomPopUp({
        "msg": "Sorry, something went wrong. Please try again later.",
        "option": "error"
      });

      var er = {
        "func" : "errorCallback_GetProjectList",
        "err" :  "Errorcallback - " + JSON.stringify(error)
      };
      commonUtils.exception(this, er , true);
    } else {
      this.dismissLoadingIndicator();
    }
    this.projectList = {};
    this.view.segProjects.setVisibility(false);
    this.view.imgProject.setVisibility(true);
    this.view.lblNoProjects.setVisibility(true);
  },

  /**
	 * @desc Success callback of getProjects service call
	 * @param JSON response - Contains the project list for the current user
	 * @retun void
	 */
  successCallback_GetProjectList : function (response) {
    if (commonUtils.checkIfEmpty(response)) {
      this.view.lblNoProjects.setVisibility(true);
      this.projectList = {};
      this.dismissLoadingIndicator();
    } else {
      this.prepareProjectsData(response);
    }
  },

  /**
	 * @desc Prepares Project data to be displayed in the segment
	 * @param Array of JSON projects - Contains the project list
	 * @retun voidq
	 */
  prepareProjectsData : function (projects) {
    try{
      this.showLoadingIndicator();
      var projectsCrew = [];
      var projectsSuperVisor = [];
      for (var i = 0; i < projects.length; i++) {
        var flag = true;
        if(commonUtils.checkIfEmpty(projects[i].clientName) && commonUtils.checkIfEmpty(projects[i].projectManagerFullName)){
          flag = false;
        }
        var inp = {
          "projectId": projects[i].projectId || "",
          "startDate": (projects[i].startDate || "").substring(0, 10),
          "endDate": (projects[i].endDate || "").substring(0, 10),
          "projectData": projects[i],
          "isSupervisor": projects[i].isSupervisor,
          "crewSupervisor": projects[i].isSupervisor ? "superimg.png" : "crewimg.png",
          "flxProjectClient" : {
            "isVisible" : commonUtils.checkIfEmpty(projects[i].clientName) ? false : true
          },         
          "clientName" : {
            "text" : projects[i].clientName,
            "isVisible" : commonUtils.checkIfEmpty(projects[i].clientName) ? false : true
          },
          "projectManager" :{
            "text" : projects[i].projectDescription,
            "isVisible" : commonUtils.checkIfEmpty(projects[i].projectDescription) ? false : true
          },
          "flxDates" : {
            "isVisible" : !commonUtils.checkIfEmpty(projects[i].startDate) && !commonUtils.checkIfEmpty(projects[i].endDate) 
          },
          "flxTimeSheet" : {
            "isVisible" : !projects[i].isSupervisor,
            "onClick" : this.onSelectingProject.bind(this , "1")
          },
          "lblAdd" : {
            "isVisible" : !projects[i].isSupervisor
          },
          "imgProject" : {
            "isVisible" : true,
            "src" :  "projectdetailssel.png"
          }
        };
        if(projects[i].isSupervisor){
          projectsSuperVisor.push(inp);
        } else {
          projectsCrew.push(inp);
        }
      }
      this.projectList.crew = projectsCrew;
      this.projectList.supervisor = projectsSuperVisor;
      var list = "";
      if(this.view.flxTopSupervisorLine.skin == commonUtils.DASHBOARDSELECTD){
        this.setProjectsToSegment(this.projectList.supervisor);
      } else {
        this.setProjectsToSegment(this.projectList.crew);
      }
      this.dismissLoadingIndicator();
    }catch(ex){
      commonUtils.exception(this, ex);
      this.dismissLoadingIndicator();
    }
  },

  /**
	 * @desc Sets project list to the main segment
	 * @param Array of JSON projects - Contains the project list to be set in the segment
	 * @retun void
	 */
  setProjectsToSegment: function (projects) {
    try{
      if(!commonUtils.checkIfEmpty(projects) &&  projects.length > 0) {
        this.view.segProjects.widgetDataMap = {
          "lblProjectId": "projectId",
          "lblStartDate": "startDate",
          "lblEndDate": "endDate",
          "isSupervisor": "isSupervisor",
          "crewSupervisor": "crewSupervisor",
          "clientName" : "clientName",
          "projectManager" : "projectManager",
          "flxTimeSheet" : "flxTimeSheet",
          "lblAdd" : "lblAdd",
          "flxProjectClient" : "flxProjectClient"
        };
        this.view.segProjects.setData(projects);
        this.view.segProjects.setVisibility(true);
        this.view.lblNoProjects.setVisibility(false);
        this.view.imgProject.setVisibility(false);
        this.view.segProjects.setEnabled(true);
        this.dismissLoadingIndicator();
      } else {
        this.view.segProjects.setVisibility(false);
        this.view.lblNoProjects.setVisibility(true);
        this.view.imgProject.setVisibility(true);
        this.dismissLoadingIndicator();
      }
    }catch(ex){
      commonUtils.exception(this, ex);
      this.dismissLoadingIndicator();
    }
  },

  /**
	 * @desc Searches projects based on project id
	 * @param -
	 * @retun void
	 */
  onSearchProjects : function () {
    try{
      var searchKeyword = this.view.txtSearch.text;
      var list = this.view.lblSupervsir.skin == "sknLblDashboardSelected" ? this.projectList.supervisor : this.projectList.crew;
      if(!commonUtils.checkIfEmpty(list) && list.length > 0) {
        var filteredProjects = (commonUtils.checkIfEmpty(searchKeyword)) ? list : list.filter(project => (project.projectId).toLowerCase().includes(searchKeyword.toLowerCase()));
        this.setProjectsToSegment(filteredProjects);
      }
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Switches touch id on or off in the hamburger menu
	 * @param -
	 * @retun void
	 */
  toggleTouchId : function () {
    if (this.view.imgTouchId.src == "switch_off.png") {
      this.view.imgTouchId.src = "switch_on.png";
      kony.store.setItem("TouchId", 1);
    } else {
      this.view.imgTouchId.src = "switch_off.png";
      kony.store.setItem("TouchId", 0);
    }
  },


  /**
	 * @desc Switches touch id on or off in the hamburger menu
	 * @param -
	 * @retun void
	 */
  toggleNotification : function () {
    var self = this;
    if (self.view.imgNotification.src == "switch_off.png") {
      push.registerHere();
      self.view.imgNotification.src = "switch_on.png";
      kony.store.setItem("PUSH_ENABLED" , true);
    } else {
      push.unregisterPush();
      self.view.imgNotification.src = "switch_off.png";
      kony.store.setItem("PUSH_ENABLED", false);
    }
  },

  /**
	 * @desc Called when a segment row is selected
	 * @param -
	 * @retun void
	 */
  onSelectingProject : function (action) { 
    try{
      var deviceInfo = kony.os.deviceInfo();  
      var index = "";
      if(deviceInfo.name != "iPhone"){
        index = this.view.segProjects.selectedRowIndex[1];
      }else{
        index = this.view.segProjects.selectedIndex[1];
      }
      var projectData = this.view.segProjects.data[index];
      var isSupervisor = projectData.isSupervisor;
      if(isSupervisor || action == "1" && !isSupervisor){
        this.showLoadingIndicator();
        this.onClickofSegDashboard(isSupervisor ? "supervisor" : "crew", projectData, false);
      }else if(!isSupervisor){
        this.isCrewProjectClick = true;
        this.onClickofSegDashboard(isSupervisor ? "supervisor" : "crew", projectData, false);
      }
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  onClickofSegDashboard : function (role, projectData) {
    try{
      var self = this;
      this.showLoadingIndicator();
      this.fetchContract(projectData);
      commonUtils.validSupervisor = true;
      var roleData = {
        "empId": oceaneering.oms.appGlobals.employeeId,
        "empName": oceaneering.oms.appGlobals.employeeFullName,
        "jobPosition": oceaneering.oms.appGlobals.jobPosition,
        "selectedRole": role,
        "createdBy": oceaneering.oms.appGlobals.username,
        "projectId": projectData.projectId,
        "createdDate": this.formatDate(new Date()),
        "lastModifiedBy": "",
        "lastModifiedDate": this.formatDate(new Date())
      };
      if(role.toLowerCase() == "supervisor") {
        roleData.lastModifiedBy = oceaneering.oms.appGlobals.projectSupervisor = oceaneering.oms.appGlobals.employeeFullName;
        oceaneering.oms.appGlobals.projectSupervisorId = oceaneering.oms.appGlobals.employeeId;
      } else {
        oceaneering.oms.appGlobals.projectSupervisor = "";
        oceaneering.oms.appGlobals.projectSupervisorId = "";
      }
      var req = {"$filter": "projectId eq " + projectData.projectId + " and empId eq " + oceaneering.oms.appGlobals.employeeId };
      commonUtils.getProjectSuperCrewList(req).then((res)=>{
        var projectInfo = projectData.projectData;
        if(res.length === 0){
          // need to insert the value in db
          var data = {
            "projectId": projectInfo.projectId,
            "startDate": projectInfo.startDate,
            "endDate": projectInfo.endDate,
            "empId": oceaneering.oms.appGlobals.employeeId,
            "createdBy": oceaneering.oms.appGlobals.employeeId,
            "createdDate": this.formatDate(new Date()),
            "isSupervisor": role == "crew" ? 0 : 1,
            "createdByElse" : false
          };
          commonUtils.validSupervisor = true;
          commonUtils.createProjectSuperCrew(data).then((res)=>{
            kony.print("Created one row in project_details");
          }, (err)=>{
            kony.print("Error in creating in project_details");
          });
        } else {
          // If the User is Supervisor by given a proviledge as supervisor by another supervisor
          if(res[0].createdByElse === true || res[0].createdByElse == "true" ){
            commonUtils.validSupervisor = false;
          }
        }
      }, (err)=>{
        kony.print("Error in saving the response");
      });

      commonUtils.getProject_Details_staging(projectData.projectId).then((res)=>{
        if(!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0 && !commonUtils.checkIfEmpty(res.ProjectNumber)){
          this.onClickOfRole({
            "role": role,
            "projectData" : res,
            "new" : false
          });
        } else {
          commonUtils.get_project_details(projectData.projectId).then((res) => {
            if(!commonUtils.checkIfEmpty(res.Country)){
              res.Countryid = commonUtils.getCountryId(res.Country);
            }
            var activities = res.Activities;
            if(!commonUtils.checkIfEmpty(res.Activity) && !commonUtils.checkIfEmpty(res.Activities) && res.Activities.length > 0){
              res.Activity = commonUtils.getActivity(res.Activities , res.Activity);
            }
            this.onClickOfRole({
              "role": role,
              "projectData" : res,
              "new" : true
            });
          }, (err) => {
            this.showBottomPopUp();
          });
        }
      }, (err) => {
        this.showBottomPopUp();
      });
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  fetchContract : function(projectData){
    commonUtils.get_project_details(projectData.projectId).then((res)=>{
      currentProject.projectData = res;
      currentProject.projectId = res.ProjectNumber;
    }, (err)=>{
      currentProject.projectData = "";
      currentProject.projectId = "";
    });
  },
  /**
	 * @desc Called when the user selects a role
	 * @param String role - role selected by the user for the selected project
	 * @param JSON projectData - Contains the project info of the selected project
	 * @param boolean isNewProject - True if a new project is added else false
	 * @retun void
	 */
  onClickOfRole : function (inp) {
    try{
      this.showLoadingIndicator();
      var role = inp.role;
      var projectData = inp.projectData;
      var roleData = {
        "empId": oceaneering.oms.appGlobals.employeeId,
        "empName": oceaneering.oms.appGlobals.employeeFullName,
        "jobPosition": oceaneering.oms.appGlobals.jobPosition,
        "selectedRole": role,
        "createdBy": oceaneering.oms.appGlobals.username,
        "projectId": projectData.ProjectNumber,
        "createdDate": this.formatDate(new Date()),
        "lastModifiedBy": "",
        "lastModifiedDate": this.formatDate(new Date())
      };
      if(role.toLowerCase() == "supervisor") {
        roleData.lastModifiedBy = oceaneering.oms.appGlobals.projectSupervisor = oceaneering.oms.appGlobals.employeeFullName;
        oceaneering.oms.appGlobals.projectSupervisorId = oceaneering.oms.appGlobals.employeeId;
        projectData.supervisorId =  (projectData.supervisorId || oceaneering.oms.appGlobals.employeeId);
        projectData.str_lastSupervisorName = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.employeeFullName) ? null :  (oceaneering.oms.appGlobals.employeeFullName);
        projectData.str_lastSupervisorId =  commonUtils.checkIfEmpty((oceaneering.oms.appGlobals.employeeId)) ? null : (oceaneering.oms.appGlobals.employeeId);
      } 
      var params = {
        "projectData": projectData,
        "empid": oceaneering.oms.appGlobals.employeeId,
        "roleData": roleData,
        "role": role
      };
      commonUtils.validSupervisor = true;
      if(inp.new){
        this.isCrewProjectClick = true;
        this.addRoleDataToStagingDBOMS(params).then((res) => {
          this.prepareProjectData(params.projectData, params);
          this.prepareProjectDataForStaging(params.projectData, params);
        }, (err) => {
          this.errorCallback();
        });
      } else {
        this.prepareProjectData(params.projectData, params);
        this.prepareProjectDataForStagingUpdate(params.projectData, params);
      }
    }catch(ex){
      this.dismissLoadingIndicator();
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Adding the project Info to staging table
	 * @param inp
	 * @retun void
	 */
  addRoleDataToStagingDBOMS : function (params) {
    var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("StagingDBOMS");
    var operationName = "dbo_project_Details_create";
    var projectData = params.projectData;
    var data = {
      "projectId": projectData.ProjectNumber,
      "startDate": projectData.StartDate,
      "endDate": projectData.EndDate,
      "empId": params.empid,
      "createdBy": projectData.createdBy,
      "createdDate": projectData.createdDate,
      "isSupervisor": params.role == "crew" ? 0 : 1,
      "createdByElse" : false
    };
    var headers = {};
    return new Promise((resolve, reject) => {
      integrationObj.invokeOperation(operationName, {}, data, (res) => {
        resolve(res);
      }, (err) => {
        reject(err);
      });
    });
  },

  /**
	 * @desc Commom error callback for service calls
	 * @param JSON error - Contains the error message and error code of service call
	 * @retun void
	 */
  errorCallback: function (error) {
    this.showBottomPopUp({
      "msg": "Sorry, something went wrong. Please try again later.",
      "option": "error"
    });
    this.animateFABBack();
  },

  /**
	 * @desc Checks user role and navigates to the next screen accordingly
	 * @param JSON data - Contains the user role for this project and the project data
	 * @retun void
	 */
  checkRoleAndNavigate : function (data) {
    try{
      var projectData = data.projectData;
      commonUtils.getLatestProjectData(data.projectData.ProjectNumber);
      if(data.role == "supervisor"){
        data.projectData.createdBy = oceaneering.oms.appGlobals.username;
        data.projectData.str_lastSupervisorId = oceaneering.oms.appGlobals.employeeId;
        data.projectData.str_lastSupervisorName = oceaneering.oms.appGlobals.employeeFullName;
        data.projectData.supervisorId = oceaneering.oms.appGlobals.employeeId;
        var input = {
          "projectData": data.projectData,
          "navigatingFrom": "frmDashboard",
          "operation": "Create",
          "employeeData": {
            "empName": oceaneering.oms.appGlobals.employeeFullName,
            "empId": oceaneering.oms.appGlobals.employeeId,
            "role": "supervisor"
          },
          "creatingDPRForOtherCrew": false
        };
        formStack.push({
          "frm": "frmDashboard",
          params: {
            loadProjects: true
          }
        });
        this.animateFABBack("crew");
        commonUtils.navigateTo("frmDPRInfo", input);
        this.dismissLoadingIndicator();
      } else {  
        var inp = {
          "projectData": data.projectData,
          "navigatingFrom": "frmDashboard",
          "headerData" : "",
          "isNewHeader" : true,
          "operation": "Create",
          "employeeData": {
            "empName": oceaneering.oms.appGlobals.employeeFullName,
            "empId": oceaneering.oms.appGlobals.employeeId,
            "role": "crew"
          },
          "creatingDPRForOtherCrew": false
        };
        var headerDPR = Object.assign({}, commonUtils.dprHeader);
        headerDPR.reportId = headerDPR.str_reportid = "PROJ_" +  projectData.ProjectNumber + "-" +  Date.now();
        headerDPR.rmNumber = headerDPR.str_rmnumber = headerDPR.str_projid =  headerDPR.str_systemid = projectData.ProjectNumber;
        headerDPR.dte_reportdate = this.formatDate(new Date()).substring(0,10);
        var dtte = this.formatDate(new Date()).substring(0,10);
        headerDPR.str_reportDateTime = commonUtils.getMonthWord(dtte.substr(5,2)) + " " + parseInt(dtte.substr(8,2)) +", " +  dtte.substr(0,4) + " " + new Date().toTimeString().substring(0,5);
        headerDPR.str_opsmanager = commonUtils.checkIfEmpty(projectData.OpsManager) ? null : projectData.OpsManager;
        headerDPR.str_CreatedBy = "";
        headerDPR.int_CountryId = commonUtils.checkIfEmpty(projectData.Countryid) ? null : projectData.Countryid;
        headerDPR.str_clientname = commonUtils.checkIfEmpty(projectData.Client) ? null : projectData.Client;
        headerDPR.str_location = commonUtils.checkIfEmpty(projectData.Location) ? null : projectData.Location;
        headerDPR.str_ProjectActivity = commonUtils.checkIfEmpty(projectData.Activity) ? null : projectData.Activity;
        headerDPR.isMobileCreated = true;
        headerDPR.bln_hourlyrate = projectData.Is_HourlyRate ? true : false;
        headerDPR.lng_status =  0;
        headerDPR.bln_RejectedOnshore = false;
        headerDPR.str_lastModifiedBy = "";
        headerDPR.dte_lastModified = this.formatDate(new Date()) + "T" + new Date().toTimeString().substring(0,8);
        headerDPR.str_supervisor = commonUtils.checkIfEmpty(projectData.str_lastSupervisorId) ? "" : projectData.str_lastSupervisorId;
        headerDPR.str_supervisorName = commonUtils.checkIfEmpty(projectData.str_lastSupervisorName) ? "" : projectData.str_lastSupervisorName;
        inp.headerData = headerDPR;
        inp.isNewHeader = true;
        formStack.push({
          "frm": "frmDashboard",
          params: {
            loadProjects: true
          }
        });
        this.animateFABBack("crew");
        if(this.isCrewProjectClick){
          commonUtils.navigateTo("frmCrewProject", inp);
        } else {
          commonUtils.navigateTo("frmCreateDPR", inp);
        }
        this.dismissLoadingIndicator();
      }
    }catch(ex){
      this.dismissLoadingIndicator();
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Called on click of FAB to add a new project
	 * @param -
	 * @retun void
	 */
  onClickOfFAB : function () {
    this.showPopup(this.view.flxAddProject);
  },

  /**
	 * @desc Navigates to DPR History screen
	 * @param -
	 * @retun void
	 */
  onClickOfDPRHistory : function() {
    this.animateHamburgerback();
    this.view.flxMain.setEnabled(true);
    formStack.push({
      "frm": "frmDashboard",
      params: {
        "loadProjects": true
      }
    });
    commonUtils.navigateTo("frmHistory", {
      "navigatingFrom": "frmDashboard"
    });
  },

  /**
	 * @desc Called on click of add project button
	 * @param -
	 * @retun void
	 */
  onClickOfAddProject : function() {
    var projectID = this.view.txtAddProject.text;
    if (!commonUtils.checkIfEmpty(projectID)){
      projectID = projectID.trim();
      this.showLoadingIndicator();
      this.crewSupervisorOption(projectID);
    }
  },

  /**
	 * @desc Checks if the project id is already present in the project list
	 * @param String projectID - Contains the new project id
	 * @retun void
	 */
  checkIfProjectAlreadyInList : function (projectId) {
    try{
      var supervisorlist = this.projectList.supervisor;
      var crewList = this.projectList.crew;
      var filteredProjectsCrew = [];
      var filteredProjectsSupervisor = [];
      var withoutZero = "";
      var withzero = "";

      if(!commonUtils.checkIfEmpty(supervisorlist) &&  supervisorlist.length > 0) {
        filteredProjectsSupervisor = supervisorlist.filter(project => (project.projectId) == projectId);
      }
      if(!commonUtils.checkIfEmpty(crewList) &&  crewList.length > 0) {
        filteredProjectsCrew = crewList.filter(project => (project.projectId) == projectId);
      }
      // Without zero if available
      if(projectId.substr(0,4) != "0000" && (filteredProjectsSupervisor.length === 0 || filteredProjectsSupervisor.length === 0)){
        withzero = "0000" + projectId;
        if(!commonUtils.checkIfEmpty(supervisorlist) &&  supervisorlist.length > 0) {
          filteredProjectsSupervisor = supervisorlist.filter(project => (project.projectId) == withzero);
        }
        if(!commonUtils.checkIfEmpty(crewList) &&  crewList.length > 0) {
          filteredProjectsCrew = crewList.filter(project => (project.projectId) == withzero);
        }
      }

      if(projectId.substr(0,4) == "0000" && (filteredProjectsSupervisor.length === 0 || filteredProjectsSupervisor.length === 0)){
        withoutZero = projectId.substr(4);
        if(!commonUtils.checkIfEmpty(supervisorlist) &&  supervisorlist.length > 0) {
          filteredProjectsSupervisor = supervisorlist.filter(project => (project.projectId) == withoutZero);
        }
        if(!commonUtils.checkIfEmpty(crewList) &&  crewList.length > 0) {
          filteredProjectsCrew = crewList.filter(project => (project.projectId) == withoutZero);
        }
      }

      if(filteredProjectsSupervisor.length > 0 && filteredProjectsCrew.length > 0){
        return filteredProjectsCrew.concat(filteredProjectsSupervisor);
      } else if(filteredProjectsSupervisor.length > 0){
        return filteredProjectsSupervisor;
      } else {
        return filteredProjectsCrew;
      }
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },


  syncProject : function(inp){
    // get the details on the database , then fetch the latest fields , upadte it in the db and navigate to dor sreen
    this.dismissBottomPopup();
    this.showLoadingIndicator();
    commonUtils.validSupervisor = true;
    var projectData = "";
    var role = inp.role;
    var roleData = {
      "empId": oceaneering.oms.appGlobals.employeeId,
      "empName": oceaneering.oms.appGlobals.employeeFullName,
      "jobPosition": oceaneering.oms.appGlobals.jobPosition,
      "selectedRole": role,
      "createdBy": oceaneering.oms.appGlobals.username,
      "projectId": inp.projectId,
      "createdDate": this.formatDate(new Date()),
      "lastModifiedBy":  "",
      "lastModifiedDate": this.formatDate(new Date())
    };
    var params = {
      "projectData": "",
      "empid": oceaneering.oms.appGlobals.employeeId,
      "roleData": roleData,
      "role": role
    }; 
    if(role.toLowerCase() == "supervisor") {
      roleData.lastModifiedBy = oceaneering.oms.appGlobals.projectSupervisor = oceaneering.oms.appGlobals.employeeFullName;
      oceaneering.oms.appGlobals.projectSupervisorId = oceaneering.oms.appGlobals.employeeId;
    } else {
      oceaneering.oms.appGlobals.projectSupervisor = "";
      oceaneering.oms.appGlobals.projectSupervisorId = "";
    }
    commonUtils.getProject_Details_staging(inp.projectId).then((res)=>{
      // if the project is already there , then update otherwise not
      if(!commonUtils.checkIfEmpty(res) && Object.keys(res).length > 0 && !commonUtils.checkIfEmpty(res.ProjectNumber)){
        projectData = params.res = res;
        commonUtils.get_project_details(inp.projectId).then((response)=>{
          // information to upadte on syncing     r
          currentProject.projectData = response;
          currentProject.projectId = response.ProjectNumber;
          projectData.Client = commonUtils.checkIfEmpty(response.Client) ? null : response.Client;
          projectData.Location = commonUtils.checkIfEmpty(response.Location) ? null : response.Location;
          projectData.Country = commonUtils.checkIfEmpty(response.Country) ? null : response.Country;
          projectData.Countryid = commonUtils.checkIfEmpty(response.Countryid) ? null : response.Countryid;
          projectData.ProjectDescription = commonUtils.checkIfEmpty(response.ProjectDescription) ? null : response.ProjectDescription;
          projectData.StartDate = commonUtils.checkIfEmpty(response.StartDate) ? null : response.StartDate;
          projectData.EndDate = commonUtils.checkIfEmpty(response.EndDate) ? null : response.EndDate;
          projectData.ClientContact = commonUtils.checkIfEmpty(response.ClientContact) ? null : response.ClientContact;
          projectData.projectAFE =  commonUtils.checkIfEmpty(response.projectAFE) ? null : response.projectAFE;
          projectData.ClientAFE = commonUtils.checkIfEmpty(response.ClientAFE) ? null : response.ClientAFE;
          projectData.OpsManager = commonUtils.checkIfEmpty(response.OpsManager) ? null : response.OpsManager;
          if(!commonUtils.checkIfEmpty(response.Country) && commonUtils.checkIfEmpty(response.Countryid)){
            projectData.Countryid = commonUtils.getCountryId(response.Country);
          }
          var activities = response.Activities;
          if(!commonUtils.checkIfEmpty(response.Activity) && !commonUtils.checkIfEmpty(response.Activities) && response.Activities.length > 0){
            projectData.Activity = commonUtils.getActivity(response.Activities ,response.Activity);
          }
          projectData.createdDate = commonUtils.checkIfEmpty(projectData.createdDate) ? null : (projectData.createdDate).substring(0, 10) + "T" +  (projectData.createdDate).substring(11, 19);
          projectData.lastModifiedDate = commonUtils.checkIfEmpty(projectData.lastModifiedDate) ? null : (projectData.lastModifiedDate).substring(0, 10) + "T" +  (projectData.lastModifiedDate).substring(11, 19);

          projectData.createdBy = oceaneering.oms.appGlobals.username;
          projectData.supervisorId = (oceaneering.oms.appGlobals.employeeId);
          projectData.str_lastSupervisorName = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.employeeFullName) ? null :  (oceaneering.oms.appGlobals.employeeFullName);
          projectData.str_lastSupervisorId = commonUtils.checkIfEmpty((oceaneering.oms.appGlobals.employeeId)) ? null : (oceaneering.oms.appGlobals.employeeId);
          params.projectData = projectData;
          var req = {"$filter": "projectId eq " + inp.projectId + " and empId eq " + oceaneering.oms.appGlobals.employeeId };
          commonUtils.getProjectSuperCrewList(req).then((res)=>{
            if(res.length === 0){
              // need to insert the value in db
              var data = {
                "projectId": projectData.ProjectNumber,
                "startDate": projectData.StartDate,
                "endDate": projectData.EndDate,
                "empId": oceaneering.oms.appGlobals.employeeId,
                "createdBy": commonUtils.checkIfEmpty(projectData.createdBy) ? oceaneering.oms.appGlobals.employeeId : projectData.createdBy,
                "createdDate": commonUtils.checkIfEmpty(projectData.createdDate) ? this.formatDate(new Date()) : (projectData.createdDate).substring(0,10) + "T" + (projectData.createdDate).substring(11,19),
                "isSupervisor": role == "crew" ? 0 : 1,
                "createdByElse" : false
              };
              commonUtils.validSupervisor = true;
              commonUtils.createProjectSuperCrew(data).then((res)=>{
                kony.print("Created one row in project_details");
              }, (err)=>{
                kony.print("Error in creating in project_details");
              });
            } else {
              if(res[0].createdByElse === true || res[0].createdByElse == "true" ){
                commonUtils.validSupervisor = false;
              }
            }
          }, (err)=>{
            kony.print("Error in saving the response");
          });
          this.showLoadingIndicator();
          this.isCrewProjectClick = true;
          this.prepareProjectData(params.projectData, params);
          this.prepareProjectDataForStagingUpdate(params.projectData , params);
        }, (err)=>{
          var inp = {
            "msg" : err,
            "option" : "error"
          };
          this.showBottomPopUp(inp);
          var er = {
            "func" : "syncProject",
            "err" :  "Errorcallback - " + JSON.stringify(err)
          };
          commonUtils.exception(this, er , true);
        });
      } else {
        commonUtils.get_project_details(inp.projectId).then((response)=>{
          currentProject.projectData = response;
          currentProject.projectId = response.ProjectNumber;
          params.projectData = response;
          var req = {"$filter": "projectId eq " + inp.projectId + " and empId eq " + oceaneering.oms.appGlobals.employeeId };
          commonUtils.getProjectSuperCrewList(req).then((res)=>{
            if(res.length === 0){
              // need to insert the value in db
              var data = {
                "projectId": response.ProjectNumber,
                "startDate": response.StartDate,
                "endDate": response.EndDate,
                "empId": oceaneering.oms.appGlobals.employeeId,
                "createdBy": commonUtils.checkIfEmpty(response.createdBy) ? oceaneering.oms.appGlobals.employeeId : response.createdBy,
                "createdDate": commonUtils.checkIfEmpty(response.createdDate) ? this.formatDate(new Date()) : (response.createdDate).substring(0,10) + "T" + (response.createdDate).substring(11,19),
                "isSupervisor": role == "crew" ? 0 : 1,
                "createdByElse" : false
              };
              commonUtils.validSupervisor = true;
              commonUtils.createProjectSuperCrew(data).then((res)=>{
                kony.print("Created one row in project_details");
              }, (err)=>{
                kony.print("Error in creating in project_details");
              });
            } else {
              if(res[0].createdByElse === true || res[0].createdByElse == "true" ){
                commonUtils.validSupervisor = false;
              }
            }
          }, (err)=>{
            kony.print("Error in saving the response");
          });
          this.isCrewProjectClick = true;
          this.prepareProjectData(params.projectData, params);
          this.prepareProjectDataForStaging(params.projectData, params);
        }, (err)=>{
          var inp = {
            "msg" : err,
            "option" : "error"
          };
          this.showBottomPopUp(inp);
          var er = {
            "func" : "syncProject",
            "err" :  "Errorcallback - " + JSON.stringify(err)
          };
          commonUtils.exception(this, er , true);
        });
      }
    });
  },

  /**
	 * @desc Calls a service to check if the new project id is valide or not
	 * @param String projectID - Contains the new project id
	 * @retun void
	 */
  validateProjectID : function(projectID, role){
    try{
      var self = this;
      var promise = [];
      promise.push(commonUtils.get_project_details_Promise(projectID));
      promise.push(commonUtils.get_project_details_Promise("0000" + projectID));
      Promise.all(promise).then((res)=>{
        if(res[0].status == "1" && res[0].data.length > 0){
          self.successCallback_ValidateProjectID(res[0].data[0].obj_attachmentFile , role);
        } else if(res[1].status == "1" && res[1].data.length > 0){
          self.successCallback_ValidateProjectID(res[1].data[0].obj_attachmentFile , role);
        }else{
          if(res[0].status == "0"){
            self.errorCallback_ValidateProjectID(res[0].message);
          } else if(res[1].status == "0"){
            self.errorCallback_ValidateProjectID(res[1].message);
          }
        }
      }).catch((err)=>{
        self.errorCallback_ValidateProjectID(err);
      });
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Success Callback for validate project id service
	 * @param JSON response - Contains the new project info
	 * @retun void
	 */
  successCallback_ValidateProjectID : function (response, role) {
    try{
      if(!commonUtils.checkIfEmpty(response.Country)){
        response.Countryid = commonUtils.getCountryId(response.Country);
      }
      var activities = response.Activities;
      if(!commonUtils.checkIfEmpty(response.Activity) && !commonUtils.checkIfEmpty(response.Activities) && response.Activities.length > 0){
        response.Activity = commonUtils.getActivity(response.Activities , response.Activity);
      }
      this.onClickOfRole({
        "role": role,
        "projectData" : response,
        "new" : true
      });
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },


  crewSupervisorOption  : function(projectId){
    this.moveToRolePopup();
    this.view.flxCrew.onClick = this.onClickOfCrewSegPopup.bind(this, {
      "role": "crew",
      "projectId" : projectId
    });
    this.view.flxSupervisor.onClick = this.onClickOfCrewSegPopup.bind(this, {
      "role": "supervisor",
      "projectId" : projectId
    });
    this.dismissLoadingIndicator();
  },

  onClickOfCrewSegPopup : function(inpt){
    // check if the filtered value is there
    try{
    var match = "";
    this.showLoadingIndicator();
    var flter = this.checkIfProjectAlreadyInList(inpt.projectId);
    var projectId = "";
    if(!commonUtils.checkIfEmpty(flter) || flter.length > 0) {
      for(var j = 0; j < flter.length; j++){
        if(!commonUtils.checkIfEmpty(flter[j].isSupervisor) && flter[j].isSupervisor && inpt.role == "supervisor"){
          match = "supervisor";
          projectId = flter[j].projectId;
        }
        if(!commonUtils.checkIfEmpty(flter[j].isSupervisor) && !flter[j].isSupervisor && inpt.role == "crew"){
          match = "crew";
          projectId = flter[j].projectId;
        }
      }
      if(!commonUtils.checkIfEmpty(match)){
        this.dismissLoadingIndicator();
        this.view.flxPopups.setVisibility(false);
        this.view.flxAddProject.setVisibility(false);
        this.view.flxCrewOrSupervisor.setVisibility(false);
        this.animateFABBack("project");
        var inp = {
          "msg" : "Project already exists. Do you want to sync it again?",
          "option" : "enable"
        };
        this.showBottomPopUp(inp);
        this.view.bottompopup.btnBottomNotNow.text = "No";
        this.view.bottompopup.btnBottomEnable.text = "Yes";
        this.view.bottompopup.btnBottomEnable.onClick = this.syncProject.bind(this , {
          "projectId": projectId,
          "role" : match
        });
        this.view.bottompopup.btnBottomNotNow.onClick = ()=>{
          this.dismissBottomPopup();
        }; 
        this.view.bottompopup.imgToShow.setVisibility(false);
        this.dismissLoadingIndicator();
      } else {
        this.validateProjectID(inpt.projectId, inpt.role);
      }
    } else {    
      this.validateProjectID(inpt.projectId, inpt.role);
    }
    } catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  prepareProjectDataForStaging : function (projectData , params) {
    try{
      var self = this;
      var projectInfo = {
        "ProjectNumber": (commonUtils.checkIfEmpty(projectData.ProjectNumber)) ? "" : projectData.ProjectNumber,
        "StartDate": (commonUtils.checkIfEmpty(projectData.StartDate) ? null : projectData.StartDate.substring(0, 10)),
        "EndDate": (commonUtils.checkIfEmpty(projectData.EndDate) ? null : projectData.EndDate.substring(0, 10)),
        "Client": (commonUtils.checkIfEmpty(projectData.Client) ? null : projectData.Client),
        "ProjectDescription": (commonUtils.checkIfEmpty(projectData.ProjectDescription) ? null : projectData.ProjectDescription.replace(/\n/g, " ")),
        "Country": (projectData.Country || null),
        "Countryid": (projectData.Countryid || null),
        "CountryCode": (projectData.CountryCode || null),
        "Location": (projectData.Location || null),
        "OpsManager": (projectData.OpsManager || null),
        "DayRate": (projectData.DayRate || null),
        "Is_HourlyRate": (projectData.Is_HourlyRate),
        "Activity": (projectData.Activity || null),
        "Depth": (projectData.Depth || null),
        "createdBy": (oceaneering.oms.appGlobals.username),
        "lastModifiedBy": oceaneering.oms.appGlobals.employeeFullName,
        "createdDate": this.formatDate(new Date()),
        "lastModifiedDate": this.formatDate(new Date()),
        "UOM":  commonUtils.checkIfEmpty(projectData.UOM) ? null : projectData.UOM,
        "InventoryModel": commonUtils.checkIfEmpty(projectData.InventoryModel) ? null : projectData.InventoryModel,
        "ProjectAFE": commonUtils.checkIfEmpty( projectData.ProjectAFE) ? null :  projectData.ProjectAFE,
        "VesselType": commonUtils.checkIfEmpty( projectData.VesselType) ? null :  projectData.VesselType,
        "ClientAFE": commonUtils.checkIfEmpty( projectData.ClientAFE) ? null :  projectData.ClientAFE,
        "SystemType": commonUtils.checkIfEmpty( projectData.SystemType) ? null :  projectData.SystemType, 
        "TotalDiveTime":   commonUtils.checkIfEmpty( projectData.TotalDiveTime) ? null :  projectData.TotalDiveTime, 
        "System": commonUtils.checkIfEmpty( projectData.System) ? null :  projectData.System, 
        "TotalDownTime":  commonUtils.checkIfEmpty( projectData.TotalDownTime) ? null :  projectData.TotalDownTime, 
        "InvOffshore":  commonUtils.checkIfEmpty( projectData.InvOffshore) ? null :  projectData.InvOffshore, 
        "ClientContact": commonUtils.checkIfEmpty( projectData.ClientContact) ? null :  projectData.ClientContact, 
        "DeptDivision":  commonUtils.checkIfEmpty( projectData.DeptDivision) ? null :  projectData.DeptDivision, 
        "Is_Primary":  commonUtils.checkIfEmpty( projectData.Is_Primary) ? null :  projectData.Is_Primary, 
        "SystemName":  commonUtils.checkIfEmpty( projectData.SystemName) ? null :  projectData.SystemName, 
        "Mission": commonUtils.checkIfEmpty( projectData.Mission) ? null :  projectData.Mission, 
        "Activities":  commonUtils.checkIfEmpty( projectData.Activities) ? null :  projectData.Activities, 
        "EquipmentDetail":  commonUtils.checkIfEmpty( projectData.EquipmentDetail) ? null :  projectData.EquipmentDetail, 
        "VesselId":  commonUtils.checkIfEmpty( projectData.VesselId) ? null :  projectData.VesselId, 
        "VesselName":  commonUtils.checkIfEmpty( projectData.VesselName) ? null :  projectData.VesselName, 
        "CrewDetail":  commonUtils.checkIfEmpty( projectData.CrewDetail) ? null :  projectData.CrewDetail, 
        "InvOnshore":  commonUtils.checkIfEmpty( projectData.InvOnshore) ? null :  projectData.InvOnshore, 
        "Region": commonUtils.checkIfEmpty( projectData.Region) ? null :  projectData.Region, 
        "RM": commonUtils.checkIfEmpty( projectData.RM) ? null :  projectData.RM, 
        "VesselTypeId":  commonUtils.checkIfEmpty( projectData.VesselTypeId) ? null :  projectData.VesselTypeId, 
        "Contract":  commonUtils.checkIfEmpty( projectData.Contract) ? null :  projectData.Contract
      };
      if(params.role == "supervisor"){
        projectInfo.createdBy = oceaneering.oms.appGlobals.username;
        projectInfo.supervisorId =  (oceaneering.oms.appGlobals.employeeId);
        projectInfo.str_lastSupervisorName = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.employeeFullName) ? null :  (oceaneering.oms.appGlobals.employeeFullName);
        projectInfo.str_lastSupervisorId = commonUtils.checkIfEmpty((oceaneering.oms.appGlobals.employeeId)) ? null : (oceaneering.oms.appGlobals.employeeId);
      }
      commonUtils.createProjectInfo(projectInfo).then((res)=>{
        kony.print("Saved in Db");
      }, (err)=>{
        kony.print("Not saved in Db");
      });
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
    * @desc Prepares project data to save
    * @param JSON projectData - contains the selected projects details
    * @retun void
  */
  prepareProjectDataForStagingUpdate : function(data , params){
    try{ 
      var projectData = data;
      var inp = {
        "id" : parseInt(projectData.id),
        "ProjectNumber" : projectData.ProjectNumber, 
        "StartDate": projectData.StartDate,
        "EndDate": projectData.EndDate,
        "ProjectDescription" : projectData.EndDate || null,
        "Country": projectData.Country || null,
        "Location": projectData.EndDate || null,
        "OpsManager": (projectData.OpsManager || null),
        "Is_HourlyRate": (projectData.Is_HourlyRate || null),
        "Activity":  (projectData.Activity || null),
        "Client": (projectData.Client || null),
        "createdBy": (projectData.createdBy || null),
        "createdDate": commonUtils.checkIfEmpty(projectData.createdDate) ? null : (projectData.createdDate).substring(0, 10) + "T" +  (projectData.createdDate).substring(11, 19),
        "lastModifiedBy": oceaneering.oms.appGlobals.employeeFullName,
        "lastModifiedDate": this.formatDate(new Date()),

        "DayRate": (projectData.DayRate || null),
        "Countryid": (projectData.Countryid || null),
        "CountryCode": (projectData.CountryCode || null),
        "Depth": commonUtils.checkIfEmpty(projectData.depth)  ? null : parseInt(projectData.Depth),
        "UOM": commonUtils.checkIfEmpty(projectData.UOM) ? null : projectData.UOM,
        "InventoryModel": commonUtils.checkIfEmpty(projectData.InventoryModel) ? null : projectData.InventoryModel,
        "ProjectAFE": commonUtils.checkIfEmpty( projectData.ProjectAFE) ? null :  projectData.ProjectAFE,
        "VesselType": commonUtils.checkIfEmpty( projectData.VesselType) ? null :  projectData.VesselType,
        "ClientAFE": commonUtils.checkIfEmpty( projectData.ClientAFE) ? null :  projectData.ClientAFE,
        "SystemType": commonUtils.checkIfEmpty( projectData.SystemType) ? null :  projectData.SystemType, 
        "TotalDiveTime":   commonUtils.checkIfEmpty( projectData.TotalDiveTime) ? null :  projectData.TotalDiveTime, 
        "System": commonUtils.checkIfEmpty( projectData.System) ? null :  projectData.System, 
        "TotalDownTime":  commonUtils.checkIfEmpty( projectData.TotalDownTime) ? null :  projectData.TotalDownTime, 
        "InvOffshore":  commonUtils.checkIfEmpty( projectData.InvOffshore) ? null :  projectData.InvOffshore, 
        "ClientContact": commonUtils.checkIfEmpty( projectData.ClientContact) ? null :  projectData.ClientContact, 
        "DeptDivision":  commonUtils.checkIfEmpty( projectData.DeptDivision) ? null :  projectData.DeptDivision, 
        "Is_Primary":  commonUtils.checkIfEmpty( projectData.Is_Primary) ? null :  projectData.Is_Primary, 
        "SystemName":  commonUtils.checkIfEmpty( projectData.SystemName) ? null :  projectData.SystemName, 
        "Mission": commonUtils.checkIfEmpty( projectData.Mission) ? null :  projectData.Mission, 
        "Activities":  commonUtils.checkIfEmpty( projectData.Activities) ? null :  projectData.Activities, 
        "EquipmentDetail":  commonUtils.checkIfEmpty( projectData.EquipmentDetail) ? null :  projectData.EquipmentDetail, 
        "VesselId":  commonUtils.checkIfEmpty( projectData.VesselId) ? null :  projectData.VesselId, 
        "VesselName":  commonUtils.checkIfEmpty( projectData.VesselName) ? null :  projectData.VesselName, 
        "CrewDetail":  commonUtils.checkIfEmpty( projectData.CrewDetail) ? null :  projectData.CrewDetail, 
        "InvOnshore":  commonUtils.checkIfEmpty( projectData.InvOnshore) ? null :  projectData.InvOnshore, 
        "Region": commonUtils.checkIfEmpty( projectData.Region) ? null :  projectData.Region, 
        "RM": commonUtils.checkIfEmpty( projectData.RM) ? null :  projectData.RM, 
        "VesselTypeId":  commonUtils.checkIfEmpty( projectData.VesselTypeId) ? null :  projectData.VesselTypeId, 
        "Contract":  commonUtils.checkIfEmpty( projectData.Contract) ? null :  projectData.Contract, 
      };

      if(params.role == "supervisor"){
        inp.createdBy = oceaneering.oms.appGlobals.username;
        inp.supervisorId =  (oceaneering.oms.appGlobals.employeeId);
        inp.str_lastSupervisorName = commonUtils.checkIfEmpty(oceaneering.oms.appGlobals.employeeFullName) ? null :  (oceaneering.oms.appGlobals.employeeFullName);
        inp.str_lastSupervisorId = commonUtils.checkIfEmpty((oceaneering.oms.appGlobals.employeeId)) ? null : (oceaneering.oms.appGlobals.employeeId);
      }
      commonUtils.updateProjectInfo(inp).then((res)=>{
        kony.print("updated sucessfully");
      }, (err)=>{
        kony.print("Failed to update");
      });
    }catch(ex){
      commonUtils.exception(this, ex);
      this.view.flxMain.setEnabled(true);
    }
  },
  /**
	  * @desc Prepares the data required to add a new project into DB
	  * @param JSON projectInfo - Contains all the data of the new project
	  * @param boolean showPopup - True, to show popup; false, to add role to staging db
	  * @param JSON otherData - Contains roledata and isNewProject value
	  * @retun void
	    Take daily rate as default
	*/
  prepareProjectData : function (projectInfo, param) {
    try{
      var projectData = {
        "ProjectNumber" : (commonUtils.checkIfEmpty(projectInfo.ProjectNumber)) ? "" : projectInfo.ProjectNumber,
        "StartDate" : (commonUtils.checkIfEmpty(projectInfo.StartDate) ? "" : projectInfo.StartDate.substring(0, 10)),
        "EndDate" : (commonUtils.checkIfEmpty(projectInfo.EndDate) ? "" : projectInfo.EndDate.substring(0, 10)),
        "Client" : (commonUtils.checkIfEmpty(projectInfo.Client) ? "" : projectInfo.Client),
        "ProjectDescription" : (commonUtils.checkIfEmpty(projectInfo.ProjectDescription) ? "" : projectInfo.ProjectDescription.replace(/\n/g, " ")),
        "Country" : (projectInfo.Country || ""),
        "Countryid" : (projectInfo.Countryid || ""),
        "CountryCode" : (projectInfo.CountryCode || ""),
        "Location" : (projectInfo.Location || ""),
        "OpsManager" : (projectInfo.OpsManager || ""),
        "DayRate" : (projectInfo.DayRate || ""),
        "Is_HourlyRate" : (projectInfo.Is_HourlyRate),
        "Activity" : (projectInfo.Activity || ""),
        "Depth" : (projectInfo.Depth || ""),
        "createdBy" : oceaneering.oms.appGlobals.username,
        "lastModifiedBy" : oceaneering.oms.appGlobals.employeeFullName,
        "createdDate" : this.formatDate(new Date()),
        "lastModifiedDate" : this.formatDate(new Date()),
        "Activities" : (projectInfo.Activities || []),
        "supervisorId":  (projectInfo.supervisorId || null),
        "RegionDescription" : (projectInfo.RegionDescription || null)
      };
      this.checkRoleAndNavigate({
        "role" : param.role,
        "projectData" : projectData,
      });
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Hides add project popup and shows crew/supervisor popup
	 * @param -
	 * @retun void
	 */
  moveToRolePopup: function () {
    try{
      var self = this;
      var newTransform = kony.ui.makeAffineTransform();
      newTransform.setPerspective(1000.0);
      //Sets the perspective as such this will have no effect until it is combined with other transformation matrix.
      newTransform.rotate3D(180, 0, 1, 0);
      //rotates by 45degrees in x and z Axis. Now the perspective can be observed
      this.view.flxAddProject.animate(
        kony.ui.createAnimation({
          "100": {
            "transform": newTransform,
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.6
        }, {
          "animationEnd": () => {
            self.view.flxCrewOrSupervisor.centerX = "50%";
            self.view.flxCrewOrSupervisor.centerY = "50%";
            self.view.flxCrewOrSupervisor.setVisibility(true);
            self.view.flxAddProject.setVisibility(false);
            self.moveToBackProject();
          }
        });
      this.view.flxCrewOrSupervisor.animate(
        kony.ui.createAnimation({
          "100": {
            "stepConfig": {
              "timingFunction": kony.anim.EASE
            }
          }
        }), {
          "delay": 0.2,
          "iterationCount": 1,
          "fillMode": kony.anim.FILL_MODE_FORWARDS,
          "duration": 0.2
        }, {
          "animationEnd": () => {
            self.moveToBackProject();
          }
        });
    }catch(ex){
      commonUtils.exception(this, ex);
    }
  },

  /**
	 * @desc Hides add project popup and shows crew/supervisor popup
	 * @param -
	 * @retun void
	 */
  moveToBackProject: function () {
    var self = this;
    var newTransform = kony.ui.makeAffineTransform();
    newTransform.setPerspective(1000.0);
    //Sets the perspective as such this will have no effect until it is combined with other transformation matrix.
    newTransform.rotate3D(0, 0, 1, 0);
    //rotates by 45degrees in x and z Axis. Now the perspective can be observed
    this.view.flxAddProject.animate(
      kony.ui.createAnimation({
        "100": {
          "transform": newTransform,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.1
      }, {
        "animationEnd": () => {
          self.view.flxAddProject.centerX = "50%";
          self.view.flxAddProject.centerY = "120%";
          self.view.flxAddProject.setVisibility(false);
        }
      });
  },

  /**
	 * @desc Error callback of validate project id service
	 * @param JSON error - Contains the error message and error code of getProjects service call
	 * @retun void
	 */
  errorCallback_ValidateProjectID: function (error) {
    this.dismissLoadingIndicator();
    this.view.flxPopups.setVisibility(false);
    this.view.flxAddProject.setVisibility(false);
    this.view.flxCrewOrSupervisor.setVisibility(false);
    this.showBottomPopUp({
      "msg": error,
      "option": "error"
    });
    this.animateFABBack("project");
  },

  /**
	 * @desc Formats a date object into a string in the format YYYY-MM-DD
	 * @param Date date - Contains a date object of a date to be converted into string
	 * @retun String - YYYY-MM-DD date
	 */
  formatDate: function (date) {
    var month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear();
    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return year + "-" + month + "-" + day;
  },

  /**
	 * @desc Called on click of logout in the hamburger menu
	 * @param -
	 * @retun void
	 */
  onClickOfLogout: function () {
    commonUtils.navigateTo("frmNewLogin", null);
    formStack = [];
  },

  /**
	 * @desc Blocks the screen and shows the loading screen
	 * @param -
	 * @retun void
	 */
  showLoadingIndicator: function () {
    this.view.flxLoading.setVisibility(true);
    this.view.flxMain.setEnabled(false);
  },

  /**
	 * @desc enables the screen and hides the loading screen
	 * @param -
	 * @retun void
	 */
  dismissLoadingIndicator: function () {
    this.view.flxLoading.setVisibility(false);
    this.view.flxMain.setEnabled(true);
  },

  /**
	 * @desc Hides all the popups from the screen
	 * @param -
	 * @retun void
	 */
  dismissPopups: function () {
    this.view.flxHeader.setEnabled(true);
    this.view.flxBody.setEnabled(true);
    this.view.flxFAB.setEnabled(true);
    this.view.flxPopups.setVisibility(false);
    this.view.txtAddProject.text = "";
  },

  /**
	 * @desc shows the selected popup on the screen
	 * @param Widet popupWidget - Contains the popup widget to be displayed
	 * @retun void
	 */
  showPopup: function (popupWidget) {
    this.view.flxHeader.setEnabled(false);
    this.view.flxBody.setEnabled(false);
    this.view.flxFAB.setEnabled(false);
    this.view.flxPopups.setEnabled(true);
    this.view.btnAddProject.skin = "sknBtnAddProjectDisbaled";
    this.animateFAB(popupWidget);
  },


  /**
	 * @desc generates token to be used in header for 
	 * @param -
	 * @retun void
	 */
  generateToken: function () {
    var serviceName = "DPRToken";
    var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService(serviceName);
    var operationName = "getToken";
    var data = {
      "username": kony.store.getItem("userId"),      
      "password": kony.store.getItem("password"),
    };
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, data, this.successCallback_GenerateToken.bind(this), this.errorCallback_GenerateToken.bind(this));
  },

  /**
	 * @desc Error callback of getProjects service call
	 * @param JSON error - Contains the error message and error code of getProjects service call
	 * @retun void
	 */
  errorCallback_GenerateToken: function (error) {
    kony.print("Error in errorCallback_GetProfiePic @@@@ " + JSON.stringify(error));
  },

  /**
	 * @desc Success callback of getProjects service call
	 * @param JSON response - Contains the project list for the current user
	 * @retun void
	 */
  successCallback_GenerateToken: function (response) {
    if(!commonUtils.checkIfEmpty(response.token))
      this.getProfilePic(response.token);
  },

  getProfilePic : function (access_token) {
    var serviceName = "GetDPRImage";
    var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService(serviceName);
    var operationName = "getImage";
    var data = {
      "empIds": [oceaneering.oms.appGlobals.employeeId],
    };
    var headers = {
      "Authorization": "Bearer "+  access_token
    };
    integrationObj.invokeOperation(operationName, headers, data, this.successCallback_GetPic.bind(this), this.errorCallback_GetPic.bind(this));
  },

  /**
	 * @desc Error callback of getProjects service call
	 * @param JSON error - Contains the error message and error code of getProjects service call
	 * @retun void
	 */
  errorCallback_GetPic: function (error) {
    kony.print("Error in errorCallback_GetProfiePic @@@@ " + JSON.stringify(error));
  },

  /**
	 * @desc Success callback of getProjects service call
	 * @param JSON response - Contains the project list for the current user
	 * @retun void
	 */
  successCallback_GetPic: function (response) {
    if (!commonUtils.checkIfEmpty(response.data) && !commonUtils.checkIfEmpty(response.data[0].signedUrl_compressed)){
      oceaneering.oms.appGlobals.profilePic = response.data[0].signedUrl_compressed;
      this.view.imgUser.src = response.data[0].signedUrl_compressed;
    }
  },

  /**
	 * @desc Calls a service to get the project list for the current employee
	 * @param -
	 * @retun void
	 */
  getLOA : function () {
    var integrationObj = oceaneering.oms.appGlobals.client.getIntegrationService("crewLOAtest");
    var operationName = "crewLOA";
    var data = {};
    var headers = {};
    integrationObj.invokeOperation(operationName, headers, data, this.successCallback_GetLOA.bind(this), this.errorCallback_GetLOA.bind(this));
  },

  successCallback_GetLOA: function (response) {
    kony.print("Error in getLOA @@@@ " + JSON.stringify(response));
  },

  errorCallback_GetLOA: function (error) {
    kony.print("Error in getLOA @@@@ " + JSON.stringify(error));
  },

  /**
	 * @desc Dismisses all the popups in the login screen
	 * @param -
	 * @retun void
	 */
  dismissPopup: function () {
    this.dismissLoadingIndicator();
    this.view.flxPopupMain.setVisibility(false);
  },

  ///----------------------- Animations --------------------///

  animateHamburger: function () {
    var widget = this.view.flxHamburgerMenuInner;
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "left": "-1%",
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
          self.view.flxMenuBlankArea.setVisibility(true);
        }
      });
  },

  animateHamburgerback: function () {
    var widget = this.view.flxHamburgerMenuInner;
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "left": "-75%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.4
      }, {
        "animationEnd": () => {
          self.view.flxMenuBlankArea.setVisibility(false);
        }
      });
  },

  onHamburgerClick: function () {
    this.animateHamburger();
  },

  dismissSlider: function () {
    this.animateHamburgerback();
  },

  animateSearch: function () {
    var widget = this.view.flxSearch;
    this.view.flxSearch.setVisibility(true);
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "height": "10%",
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
          self.view.flxSearch.height = "9%";
        }
      });
    //     this.view.flxScrollContainer.animate(
    //       kony.ui.createAnimation({
    //         "100": {
    //           "top": "0%",
    //           "height": "84%",
    //           "stepConfig": {
    //             "timingFunction": kony.anim.EASE_IN
    //           }
    //         }
    //       }), {
    //         "delay": 0,
    //         "iterationCount": 1,
    //         "fillMode": kony.anim.FILL_MODE_FORWARDS,
    //         "duration": 0.2
    //       }, {
    //         "animationEnd": ""
    //       });
  },

  animateSearchBack: function () {
    var widget = this.view.flxSearch;
    var self = this;
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "height": "0%",
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
        "animationEnd": () => {
          self.view.flxSearch.height = "0%";
          self.view.flxSearch.setVisibility(false);
        }
      });
    //     this.view.flxScrollContainer.animate(
    //       kony.ui.createAnimation({
    //         "100": {
    //           "top": "6%",
    //           "height": "94%",
    //           "stepConfig": {
    //             "timingFunction": kony.anim.EASE_IN
    //           }
    //         }
    //       }), {
    //         "delay": 0,
    //         "iterationCount": 1,
    //         "fillMode": kony.anim.FILL_MODE_FORWARDS,
    //         "duration": 0.2
    //       }, {
    //         "animationEnd": ""
    //       });
  },

  showBottomPopUp : function (input) {
    var self = this;
    this.resetBottomPopUp();
    this.dismissLoadingIndicator();
    if(commonUtils.checkIfEmpty(input)){
      input = {
        "msg" : "Sorry! something went wrong. Please try again.",
        "option" : "error"
      };
    }
    this.view.bottompopup.lblBottomMessage.text = input.msg;
    this.view.bottompopup.lblBottomMessage.bottom = "100dp";
    switch (input.option) {
      case "enable":{
        this.view.bottompopup.flxEnableTouch.setVisibility(true);
        this.view.bottompopup.imgToShow.setVisibility(true);
        this.view.bottompopup.flxBottomContainer.onClick = () => {};
        break;
      }
      case "error":{
        this.view.bottompopup.lblBottomMessage.bottom = "110dp";
        this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
        break;
      }
      case "auth":{
        this.view.bottompopup.imgToShow.setVisibility(true);
        this.view.bottompopup.btnDismissBottomPopUp.setVisibility(true);
        this.view.bottompopup.flxBottomContainer.onClick = () => {};
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
          "bottom": "0dp",
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

  dismissBottomPopup: function () {
    var self = this;
    this.dismissLoadingIndicator();
    this.view.bottompopup.flxBottomPopUp.animate(
      kony.ui.createAnimation({
        "100": {
          "bottom": "-220dp",
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

  resetBottomPopUp: function () {
    this.view.bottompopup.flxBottomPopUp.bottom = "-220dp";
    this.view.bottompopup.flxBottomCover.setVisibility(false);
    this.view.bottompopup.lblBottomMessage.text = "";
    this.view.bottompopup.btnDismissBottomPopUp.setVisibility(false);
    this.view.bottompopup.imgToShow.setVisibility(false);
    this.view.bottompopup.flxEnableTouch.setVisibility(false);
  },

  animateFAB : function (popupWidget) {
    var self = this;
    self.view.flxAddProject.centerY = "120%";
    self.view.flxCrewOrSupervisor.setVisibility(false);
    self.view.flxPopups.setVisibility(true);
    popupWidget.setVisibility(true);
    popupWidget.animate(
      kony.ui.createAnimation({
        "100": {
          "centerX": "50%",
          "centerY": "50%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
      }, {
        "animationEnd": () => {
          self.view.flxPopups.setVisibility(true);
        }
      });
    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.rotate(135);
    this.view.flxFAB.animate(
      kony.ui.createAnimation({
        "100": {
          "transform": transformProp1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
      }, {
        "animationEnd": ""
      });
  },

  animateFABBack : function (input) {
    var self = this;
    var widget = (input == "project") ? this.view.flxAddProject : this.view.flxCrewOrSupervisor;
    if (commonUtils.checkIfEmpty(input)) {
      if(this.view.flxAddProject.isVisible) {
        widget = this.view.flxAddProject;
      } else {
        widget = this.view.flxCrewOrSupervisor;
      }
    }
    widget.animate(
      kony.ui.createAnimation({
        "100": {
          "centerX": "50%",
          "centerY": "120%",
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
      }, {
        "animationEnd": () => {
          self.view.flxPopups.setVisibility(false);
          self.view.flxAddProject.setVisibility(true);
          self.view.flxCrewOrSupervisor.setVisibility(false);
          self.view.flxAddProject.centerX = "50%";
          self.view.flxAddProject.centerY = "120%";
          self.view.flxCrewOrSupervisor.centerX = "50%";
          self.view.flxCrewOrSupervisor.centerY = "50%";
        }
      });

    var transformProp1 = kony.ui.makeAffineTransform();
    transformProp1.rotate(0);
    this.view.flxFAB.animate(
      kony.ui.createAnimation({
        "100": {
          "transform": transformProp1,
          "stepConfig": {
            "timingFunction": kony.anim.EASE
          }
        }
      }), {
        "delay": 0,
        "iterationCount": 1,
        "fillMode": kony.anim.FILL_MODE_FORWARDS,
        "duration": 0.5
      }, {
        "animationEnd": () => {
          self.dismissPopups();
        }
      });
  },
  
  onClickOfAnalytics : function(){
    this.animateHamburgerback();
    this.view.flxMain.setEnabled(true);
    formStack.push({
      "frm": "frmDashboard",
      params: {
        "loadProjects": true
      }
    });
    commonUtils.navigateTo("frmAnalytics", {
      "navigatingFrom": "frmDashboard"
    });
  }
});