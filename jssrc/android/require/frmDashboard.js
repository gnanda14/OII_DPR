define("frmDashboard", function() {
    return function(controller) {
        function addWidgetsfrmDashboard() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxMenuIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "50%",
                "id": "flxMenuIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "8%",
                "zIndex": 1
            }, {}, {});
            flxMenuIcon.setDefaultUnit(kony.flex.DP);
            var imgMenu = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgMenu",
                "isVisible": true,
                "skin": "slImage",
                "src": "hamburgermenuicon.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMenuIcon.add(imgMenu);
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Projects",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSearchDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSearchDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "CopyslFbox0b87bd5ef28ff43",
                "width": "40dp",
                "zIndex": 5
            }, {}, {});
            flxSearchDPR.setDefaultUnit(kony.flex.DP);
            var lblSearchDpr = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSearchDpr",
                "isVisible": true,
                "left": "0",
                "skin": "sknSearchUnSelected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSearchDPR.add(lblSearchDpr);
            var flxRefresh = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRefresh",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "45dp",
                "skin": "CopyslFbox0b87bd5ef28ff43",
                "width": "40dp",
                "zIndex": 5
            }, {}, {});
            flxRefresh.setDefaultUnit(kony.flex.DP);
            var CopylblSearchDpr0dce97f81c3db4e = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblSearchDpr0dce97f81c3db4e",
                "isVisible": true,
                "left": "0",
                "skin": "sknSearchUnSelected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRefresh.add(CopylblSearchDpr0dce97f81c3db4e);
            flxHeader.add(flxMenuIcon, lblTitle, flxSearchDPR, flxRefresh);
            var flxDashBoardSwitch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxDashBoardSwitch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknFlxFFFFFFOp0g02028e6350e4c",
                "top": "7%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDashBoardSwitch.setDefaultUnit(kony.flex.DP);
            var flxSuperContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSuperContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlxDashboard",
                "top": "0dp",
                "width": "50%",
                "zIndex": 3
            }, {}, {});
            flxSuperContainer.setDefaultUnit(kony.flex.DP);
            var flxSupervisorDashbOard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "90%",
                "id": "flxSupervisorDashbOard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "1%",
                "isModalContainer": false,
                "skin": "CopyslFbox0jfb86d156c5b4a",
                "width": "98%",
                "zIndex": 2
            }, {}, {});
            flxSupervisorDashbOard.setDefaultUnit(kony.flex.DP);
            var imgSuper = new kony.ui.Image2({
                "centerX": "25%",
                "centerY": "50%",
                "height": "22dp",
                "id": "imgSuper",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "superimg.png",
                "top": "0",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSupervsir = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSupervsir",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblDashboardSelected",
                "text": "Supervisor",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSupervisorDashbOard.add(imgSuper, lblSupervsir);
            var flxTopSupervisorLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7%",
                "id": "flxTopSupervisorLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknLblDashboardTopLineSelected",
                "width": "97%",
                "zIndex": 4
            }, {}, {});
            flxTopSupervisorLine.setDefaultUnit(kony.flex.DP);
            flxTopSupervisorLine.add();
            flxSuperContainer.add(flxSupervisorDashbOard, flxTopSupervisorLine);
            var flxCrewContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCrewContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "50%",
                "isModalContainer": false,
                "skin": "sknFlxDashboard",
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {}, {});
            flxCrewContainer.setDefaultUnit(kony.flex.DP);
            var flxCrewDashboard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxCrewDashboard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "1%",
                "isModalContainer": false,
                "skin": "CopyslFbox0jfb86d156c5b4a",
                "width": "98%",
                "zIndex": 3
            }, {}, {});
            flxCrewDashboard.setDefaultUnit(kony.flex.DP);
            var imgcrewdash = new kony.ui.Image2({
                "centerX": "33%",
                "centerY": "50%",
                "height": "22dp",
                "id": "imgcrewdash",
                "isVisible": true,
                "left": "3%",
                "skin": "slImage",
                "src": "crewimgunsel.png",
                "top": "0",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCrewDashboard = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewDashboard",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblDashboardUnselected",
                "text": "Crew",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCrewDashboard.add(imgcrewdash, lblCrewDashboard);
            var flxTopCrewLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7%",
                "id": "flxTopCrewLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "1%",
                "isModalContainer": false,
                "skin": "sknLblDashboardTopLineUnselected",
                "width": "97%",
                "zIndex": 3
            }, {}, {});
            flxTopCrewLine.setDefaultUnit(kony.flex.DP);
            flxTopCrewLine.add();
            flxCrewContainer.add(flxCrewDashboard, flxTopCrewLine);
            var CopyFlexContainer0j9d9120820df45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "CopyFlexContainer0j9d9120820df45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fa54cf9aeaff45",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyFlexContainer0j9d9120820df45.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0j9d9120820df45.add();
            flxDashBoardSwitch.add(flxSuperContainer, flxCrewContainer, CopyFlexContainer0j9d9120820df45);
            var flxBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "77%",
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFSbox0ae1c0e10783740",
                "top": "16%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9%",
                "id": "flxSearch",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "CopysknFlx0f89c6acf900b48",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearch.setDefaultUnit(kony.flex.DP);
            var flxSeachArea = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "75%",
                "id": "flxSeachArea",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "2%",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100BorderFFFFFFOp100Radius25px",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            flxSeachArea.setDefaultUnit(kony.flex.DP);
            var flxSearchIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "45%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxSearchIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f5c064e09ef24eedb9b3a6d835d5022a,
                "skin": "slFbox",
                "width": "14%",
                "zIndex": 1
            }, {}, {});
            flxSearchIcon.setDefaultUnit(kony.flex.DP);
            var imgSearch = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "90%",
                "id": "imgSearch",
                "isVisible": true,
                "skin": "slImage",
                "src": "search_icon.png",
                "width": "90%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchIcon.add(imgSearch);
            var txtSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": "5%",
                "centerY": "48%",
                "focusSkin": "sknFFFFFFOp100Font333333Op100S100Perc",
                "height": "90%",
                "id": "txtSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "placeholder": "Enter Project ID",
                "secureTextEntry": false,
                "skin": "sknFFFFFFOp100Font333333Op100S100Perc",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "83%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder0i08e2390db6249",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxSeachArea.add(flxSearchIcon, txtSearch);
            var flxCancelSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "65%",
                "id": "flxCancelSearch",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "right": "2%",
                "skin": "CopyslFbox0ee3e7d432da84f",
                "top": "9dp",
                "width": "19%"
            }, {}, {});
            flxCancelSearch.setDefaultUnit(kony.flex.DP);
            var lblCancel = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCancel",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0b99d660d047b47",
                "text": "Cancel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCancelSearch.add(lblCancel);
            flxSearch.add(flxSeachArea, flxCancelSearch);
            var flxSegHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxSegHeader",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxFFFFFFOp0g02028e6350e4c",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegHeader.setDefaultUnit(kony.flex.DP);
            var lblProjectIdTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProjectIdTitle",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLbl25536EOp100S110Perc",
                "text": "Project ID",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [1, 2, 1, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblStartDateTitle = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStartDateTitle",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLbl25536EOp100S110Perc",
                "text": "Start Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [1, 2, 1, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEndDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEndDate",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLbl25536EOp100S110Perc",
                "text": "End Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [1, 2, 1, 2],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSegHeader.add(lblProjectIdTitle, lblStartDateTitle, lblEndDate);
            var flxHeaderLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxHeaderLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxAAAAAAOp100",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderLine.setDefaultUnit(kony.flex.DP);
            flxHeaderLine.add();
            var flxScrollContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxScrollContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFbox0d9d5fd039e2f44",
                "top": "0.00%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxScrollContainer.setDefaultUnit(kony.flex.DP);
            kony.mvc.registry.add('tempSegProjects', 'tempSegProjects', 'tempSegProjectsController');
            var segProjects = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "clientName": "",
                    "imgProject": "",
                    "lblAdd": "",
                    "lblEndDate": "",
                    "lblProjectId": "",
                    "lblStartDate": "",
                    "lblto": "",
                    "projectManager": ""
                }],
                "groupCells": false,
                "height": "98%",
                "id": "segProjects",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "Copyseg0a70203074bb741",
                "rowSkin": "Copyseg0e0f21221e03047",
                "rowTemplate": "flxTempSegProjects",
                "scrollingEvents": {
                    "onPull": controller.AS_Segment_ff608702f2de49a8b8b6fdfdd4025803,
                    "onPush": controller.AS_Segment_j3a36dc6eaff408fa40dd551aad11488
                },
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "separatorThickness": 0,
                "showScrollbars": true,
                "top": "1%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "clientName": "clientName",
                    "flxContainer": "flxContainer",
                    "flxDates": "flxDates",
                    "flxProject": "flxProject",
                    "flxProjectClient": "flxProjectClient",
                    "flxStartEnd": "flxStartEnd",
                    "flxTempSegProjects": "flxTempSegProjects",
                    "flxTimeSheet": "flxTimeSheet",
                    "imgProject": "imgProject",
                    "lblAdd": "lblAdd",
                    "lblEndDate": "lblEndDate",
                    "lblProjectId": "lblProjectId",
                    "lblStartDate": "lblStartDate",
                    "lblto": "lblto",
                    "projectManager": "projectManager"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoProjectsIcon = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "40%",
                "height": "50dp",
                "id": "lblNoProjectsIcon",
                "isVisible": false,
                "skin": "CopysknLbl0aa424eb8a44c44",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "120dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNoProjects = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "48%",
                "id": "lblNoProjects",
                "isVisible": true,
                "skin": "CopysknLbl0cbe063539dd742",
                "text": "No Projects Found.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgProject = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "50dp",
                "id": "imgProject",
                "isVisible": true,
                "left": "10%",
                "skin": "slImage",
                "src": "projectdetails.png",
                "top": "18dp",
                "width": "120dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxScrollContainer.add(segProjects, lblNoProjectsIcon, lblNoProjects, imgProject);
            flxBody.add(flxSearch, flxSegHeader, flxHeaderLine, flxScrollContainer);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "7%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxFAB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "4%",
                "clipBounds": true,
                "height": "60dp",
                "id": "flxFAB",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "CopysknFlxOp0c430c1b9116e41",
                "width": "60dp",
                "zIndex": 20
            }, {}, {});
            flxFAB.setDefaultUnit(kony.flex.DP);
            var imgAdd = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgAdd",
                "isVisible": true,
                "skin": "slImage",
                "src": "addbutton.png",
                "width": "100%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAddIcon = new kony.ui.Label({
                "height": "100%",
                "id": "lblAddIcon",
                "isVisible": false,
                "left": "0",
                "skin": "sknLblAddProject",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%",
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFAB.add(imgAdd, lblAddIcon);
            var flxPopups = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopups",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlx0f48c59165cd744",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxPopups.setDefaultUnit(kony.flex.DP);
            var flxCrewOrSupervisor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxCrewOrSupervisor",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFOp100BorderFFFFFFS1pRounded",
                "width": "85%",
                "zIndex": 5
            }, {}, {});
            flxCrewOrSupervisor.setDefaultUnit(kony.flex.DP);
            var CopyflxAddHeader0g242c555700b40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "30%",
                "id": "CopyflxAddHeader0g242c555700b40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bc5b5f8e23ff4d",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxAddHeader0g242c555700b40.setDefaultUnit(kony.flex.DP);
            var flxCloseCrewOrSupervisor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCloseCrewOrSupervisor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "CopyslFbox0j9f6b79e8c004c",
                "top": "5%",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxCloseCrewOrSupervisor.setDefaultUnit(kony.flex.DP);
            var CopyimgCloseAddProject0b669b167c79e45 = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "CopyimgCloseAddProject0b669b167c79e45",
                "isVisible": true,
                "skin": "slImage",
                "src": "close_icon.png",
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseCrewOrSupervisor.add(CopyimgCloseAddProject0b669b167c79e45);
            var CopylblAddProject0d27eb57378c741 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblAddProject0d27eb57378c741",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblFont000000Op100S125pBold",
                "text": "Are You",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxAddHeader0g242c555700b40.add(flxCloseCrewOrSupervisor, CopylblAddProject0d27eb57378c741);
            var flxCrewOrSupervisorBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxCrewOrSupervisorBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "30%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCrewOrSupervisorBody.setDefaultUnit(kony.flex.DP);
            var flxCrew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopysknFlxBorderABD0f23fa0c341ed4d",
                "height": "70%",
                "id": "flxCrew",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "8%",
                "isModalContainer": false,
                "skin": "sknFlxBorderABD3D9Op100S1pxRounded",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxCrew.setDefaultUnit(kony.flex.DP);
            var imgCrew = new kony.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgCrew",
                "isVisible": true,
                "skin": "slImage",
                "src": "crewimg.png",
                "top": "5%",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCrew = new kony.ui.Label({
                "bottom": "10%",
                "centerX": "50%",
                "id": "lblCrew",
                "isVisible": true,
                "skin": "CopysknLblFont0eeb1b9e7d24343",
                "text": "Crew",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCrew.add(imgCrew, lblCrew);
            var flxSupervisor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopysknFlxBorderABD0f23fa0c341ed4d",
                "height": "70%",
                "id": "flxSupervisor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "8%",
                "skin": "sknFlxBorderABD3D9Op100S1pxRounded",
                "width": "35%",
                "zIndex": 1
            }, {}, {});
            flxSupervisor.setDefaultUnit(kony.flex.DP);
            var imgSupervisor = new kony.ui.Image2({
                "centerX": "53.50%",
                "height": "50%",
                "id": "imgSupervisor",
                "isVisible": true,
                "skin": "slImage",
                "src": "superimg.png",
                "top": "5%",
                "width": "50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSupervisor = new kony.ui.Label({
                "bottom": "10%",
                "centerX": "50%",
                "id": "lblSupervisor",
                "isVisible": true,
                "skin": "CopysknLblFont0eeb1b9e7d24343",
                "text": "Supervisor",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSupervisor.add(imgSupervisor, lblSupervisor);
            var lblOr = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblOr",
                "isVisible": true,
                "skin": "sknLblFont000000S120Prc",
                "text": "or",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCrewOrSupervisorBody.add(flxCrew, flxSupervisor, lblOr);
            flxCrewOrSupervisor.add(CopyflxAddHeader0g242c555700b40, flxCrewOrSupervisorBody);
            var flxAddProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "120%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxAddProject",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "CopysknFlxFFFFFFOp0g7cb141a3ae04f",
                "width": "85%",
                "zIndex": 2
            }, {}, {});
            flxAddProject.setDefaultUnit(kony.flex.DP);
            var flxAddHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxAddHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bc5b5f8e23ff4d",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxAddHeader.setDefaultUnit(kony.flex.DP);
            var flxCloseAddProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxCloseAddProject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "CopyslFbox0j9f6b79e8c004c",
                "top": "5%",
                "width": "40dp",
                "zIndex": 1
            }, {}, {});
            flxCloseAddProject.setDefaultUnit(kony.flex.DP);
            var imgCloseAddProject = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70%",
                "id": "imgCloseAddProject",
                "isVisible": true,
                "skin": "slImage",
                "src": "close_icon.png",
                "width": "60%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCloseAddProject.add(imgCloseAddProject);
            var lblAddProject = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAddProject",
                "isVisible": true,
                "left": "6%",
                "skin": "sknLblFont000000Op100S125pBold",
                "text": "Add Project",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAddHeader.add(flxCloseAddProject, lblAddProject);
            var flxSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f98fc33a6b7045",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSeparator.setDefaultUnit(kony.flex.DP);
            flxSeparator.add();
            var FlexContainer0a60590e7cb6445 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "FlexContainer0a60590e7cb6445",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 25,
                "width": "100%"
            }, {}, {});
            FlexContainer0a60590e7cb6445.setDefaultUnit(kony.flex.DP);
            var Label0bcc33ed8927b4c = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0bcc33ed8927b4c",
                "isVisible": false,
                "left": "0dp",
                "skin": "CopydefLabel0acbe4ed5345445",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "20%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtAddProject = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50.00%",
                "focusSkin": "sknTbxBgFFFFFFOp0",
                "height": "45dp",
                "id": "txtAddProject",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0%",
                "secureTextEntry": false,
                "skin": "sknTbxBgFFFFFFOp0",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "85%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [1, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder0b1a16ded9cbe49",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            FlexContainer0a60590e7cb6445.add(Label0bcc33ed8927b4c, txtAddProject);
            var flxLineAddProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1%",
                "id": "flxLineAddProject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxNormal333333",
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxLineAddProject.setDefaultUnit(kony.flex.DP);
            flxLineAddProject.add();
            var FlexContainer0a0af661f8f4e41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "FlexContainer0a0af661f8f4e41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 15,
                "width": "100%"
            }, {}, {});
            FlexContainer0a0af661f8f4e41.setDefaultUnit(kony.flex.DP);
            var btnAddProject = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnAddProjectDisbaled",
                "height": "40dp",
                "id": "btnAddProject",
                "isVisible": true,
                "right": "5%",
                "skin": "sknBtnFocusAddProject",
                "text": "Sync / Add Project",
                "width": "47%",
                "zIndex": 10
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 1, 0, 1],
                "paddingInPixel": false
            }, {});
            var Label0iedea738c96c4d = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0iedea738c96c4d",
                "isVisible": true,
                "left": "25dp",
                "skin": "CopydefLabel0aa7464a5fccd41",
                "text": "Ex: 0000141391",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainer0a0af661f8f4e41.add(btnAddProject, Label0iedea738c96c4d);
            flxAddProject.add(flxAddHeader, flxSeparator, FlexContainer0a60590e7cb6445, flxLineAddProject, FlexContainer0a0af661f8f4e41);
            var flxCrossPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "3%",
                "clipBounds": true,
                "height": "70dp",
                "id": "flxCrossPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "slFbox",
                "width": "16.00%",
                "zIndex": 10
            }, {}, {});
            flxCrossPopUp.setDefaultUnit(kony.flex.DP);
            flxCrossPopUp.add();
            flxPopups.add(flxCrewOrSupervisor, flxAddProject, flxCrossPopUp);
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0a3b1a007ce0943 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "3%",
                "id": "CopyFlexContainer0a3b1a007ce0943",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0h5c143bd797c47",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0a3b1a007ce0943.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0a3b1a007ce0943.add();
            var FlexContainer0da70a2e9f47f45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "94%",
                "id": "FlexContainer0da70a2e9f47f45",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": 0,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0cf623648c10e43",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            FlexContainer0da70a2e9f47f45.setDefaultUnit(kony.flex.DP);
            var flxSyncAddProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSyncAddProject",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxSyncAddProject.setDefaultUnit(kony.flex.DP);
            var Image0c2d1315e3bbe4b = new kony.ui.Image2({
                "centerX": "27%",
                "centerY": "45%",
                "height": "25dp",
                "id": "Image0c2d1315e3bbe4b",
                "isVisible": true,
                "left": "10%",
                "skin": "slImage",
                "src": "projectdetailssel.png",
                "top": "18dp",
                "width": "22dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0f68ba8daa2ed48 = new kony.ui.Label({
                "centerY": "45%",
                "id": "Label0f68ba8daa2ed48",
                "isVisible": true,
                "left": "7dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Add Project",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSyncAddProject.add(Image0c2d1315e3bbe4b, Label0f68ba8daa2ed48);
            var CopyFlexContainer0ef5889ded48346 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "CopyFlexContainer0ef5889ded48346",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0h5c143bd797c47",
                "width": "2dp"
            }, {}, {});
            CopyFlexContainer0ef5889ded48346.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ef5889ded48346.add();
            var flxDprHistory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxDprHistory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxDprHistory.setDefaultUnit(kony.flex.DP);
            var CopyImage0c08aff0134424d = new kony.ui.Image2({
                "centerX": "30%",
                "centerY": "45%",
                "height": "25dp",
                "id": "CopyImage0c08aff0134424d",
                "isVisible": true,
                "left": "10.00%",
                "skin": "slImage",
                "src": "dprbottomsel.png",
                "top": "18dp",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0eb4a7c7a25ca43 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0eb4a7c7a25ca43",
                "isVisible": true,
                "left": 7,
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "My DPR's",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDprHistory.add(CopyImage0c08aff0134424d, CopyLabel0eb4a7c7a25ca43);
            FlexContainer0da70a2e9f47f45.add(flxSyncAddProject, CopyFlexContainer0ef5889ded48346, flxDprHistory);
            var CopyFlexContainer0g3f11ac387f441 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "3%",
                "id": "CopyFlexContainer0g3f11ac387f441",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0h5c143bd797c47",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0g3f11ac387f441.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g3f11ac387f441.add();
            flxBottom.add(CopyFlexContainer0a3b1a007ce0943, FlexContainer0da70a2e9f47f45, CopyFlexContainer0g3f11ac387f441);
            flxMain.add(flxHeader, flxDashBoardSwitch, flxBody, flxHeaderShadow, flxFAB, flxPopups, flxBottom);
            var flxHamburgerMenuInner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-1%",
                "clipBounds": true,
                "height": "101%",
                "id": "flxHamburgerMenuInner",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "-75%",
                "isModalContainer": false,
                "skin": "CopyslFbox0ie7bfbefd2c242",
                "top": "0dp",
                "width": "75%",
                "zIndex": 15
            }, {}, {});
            flxHamburgerMenuInner.setDefaultUnit(kony.flex.DP);
            var flxHamburgerMenuMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHamburgerMenuMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx6C8EA1Op100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxHamburgerMenuMain.setDefaultUnit(kony.flex.DP);
            var flxMenuHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "17%",
                "id": "flxMenuHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-1%",
                "isModalContainer": false,
                "skin": "sknFlx2F586EOp100",
                "top": "0dp",
                "width": "101%",
                "zIndex": 1
            }, {}, {});
            flxMenuHeader.setDefaultUnit(kony.flex.DP);
            var imgCompanyLogo = new kony.ui.Image2({
                "bottom": "5%",
                "height": "29.81%",
                "id": "imgCompanyLogo",
                "isVisible": true,
                "right": "5%",
                "skin": "slImage",
                "src": "oceaneering_logo_white.png",
                "width": "44.92%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxMenuHeader.add(imgCompanyLogo);
            var flxUserImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "flxUserImage",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "9%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "12%",
                "width": "80dp",
                "zIndex": 1
            }, {}, {});
            flxUserImage.setDefaultUnit(kony.flex.DP);
            var imgWhiteCircle = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgWhiteCircle",
                "isVisible": false,
                "skin": "slImage",
                "src": "circle_shadow.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxUserImageInner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "48%",
                "centerY": "47%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxUserImageInner",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxCircleOp0",
                "width": "90%",
                "zIndex": 1
            }, {}, {});
            flxUserImageInner.setDefaultUnit(kony.flex.DP);
            var imgUser = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgUser",
                "imageWhenFailed": "dummy.png",
                "imageWhileDownloading": "dummy.png",
                "isVisible": true,
                "skin": "slImage",
                "src": "dummy.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxUserImageInner.add(imgUser);
            flxUserImage.add(imgWhiteCircle, flxUserImageInner);
            var flxOptions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "79%",
                "id": "flxOptions",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "17%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOptions.setDefaultUnit(kony.flex.DP);
            var flxTopContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxTopContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxTopContainer.setDefaultUnit(kony.flex.DP);
            var lblUsername = new kony.ui.Label({
                "id": "lblUsername",
                "isVisible": true,
                "left": "11%",
                "skin": "CopysknLblFFFFFFOp0ad47812f0cbf45",
                "text": "Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "17%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyFlexContainer0haaf6d4ea4494e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0haaf6d4ea4494e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "5%",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0haaf6d4ea4494e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0haaf6d4ea4494e.add();
            var flxDashboard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "18%",
                "id": "flxDashboard",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlx000000Op15",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDashboard.setDefaultUnit(kony.flex.DP);
            var imgDashboard = new kony.ui.Image2({
                "centerY": "50%",
                "height": "45%",
                "id": "imgDashboard",
                "isVisible": true,
                "left": "10%",
                "right": "5%",
                "skin": "slImage",
                "src": "dashboard_active.png",
                "width": "10%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDashboard = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDashboard",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknLblE0j441508e5e5c42",
                "text": "Dashboard",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDashboard.add(imgDashboard, lblDashboard);
            var CopyFlexContainer0bff70bb1ea9d48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0bff70bb1ea9d48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0bff70bb1ea9d48.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0bff70bb1ea9d48.add();
            var flxHistory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "18%",
                "id": "flxHistory",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "sknFlx000000Op15",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHistory.setDefaultUnit(kony.flex.DP);
            var imgHistory = new kony.ui.Image2({
                "centerY": "50%",
                "height": "45%",
                "id": "imgHistory",
                "isVisible": true,
                "left": "10%",
                "right": "5%",
                "skin": "slImage",
                "src": "history_active.png",
                "width": "10%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHistory = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHistory",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknLblE0j441508e5e5c42",
                "text": "My DPR's",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHistory.add(imgHistory, lblHistory);
            var CopyFlexContainer0be2faca73da649 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0be2faca73da649",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0be2faca73da649.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0be2faca73da649.add();
            var flxAnalytics = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": false,
                "height": "18%",
                "id": "flxAnalytics",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlx000000Op15",
                "top": "-1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAnalytics.setDefaultUnit(kony.flex.DP);
            var imgAnalytics = new kony.ui.Image2({
                "centerY": "50%",
                "height": "45%",
                "id": "imgAnalytics",
                "isVisible": true,
                "left": "10%",
                "right": "5%",
                "skin": "slImage",
                "src": "history_active.png",
                "width": "10%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAnalytics = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAnalytics",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknLblE0j441508e5e5c42",
                "text": "Analytics",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAnalytics.add(imgAnalytics, lblAnalytics);
            var CopyFlexContainer0e0fc85460a9346 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0e0fc85460a9346",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e0fc85460a9346.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e0fc85460a9346.add();
            flxTopContainer.add(lblUsername, CopyFlexContainer0haaf6d4ea4494e, flxDashboard, CopyFlexContainer0bff70bb1ea9d48, flxHistory, CopyFlexContainer0be2faca73da649, flxAnalytics, CopyFlexContainer0e0fc85460a9346);
            var flxBottomContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxBottomContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "reverseLayoutDirection": true,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxBottomContainer.setDefaultUnit(kony.flex.DP);
            var flxLogout = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0.00%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxLogout",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op15",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLogout.setDefaultUnit(kony.flex.DP);
            var imgLogout = new kony.ui.Image2({
                "centerY": "50%",
                "height": "45%",
                "id": "imgLogout",
                "isVisible": true,
                "left": "11%",
                "right": "5%",
                "skin": "slImage",
                "src": "logout_icon.png",
                "width": "10%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLogout = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLogout",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknLblE0j441508e5e5c42",
                "text": "Logout",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLogout.add(imgLogout, lblLogout);
            var FlexContainer0a039921af2c943 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "FlexContainer0a039921af2c943",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "0",
                "width": "100%"
            }, {}, {});
            FlexContainer0a039921af2c943.setDefaultUnit(kony.flex.DP);
            FlexContainer0a039921af2c943.add();
            var flxTouchId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18%",
                "id": "flxTouchId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op15",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTouchId.setDefaultUnit(kony.flex.DP);
            var imgTouchFace = new kony.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "imgTouchFace",
                "isVisible": true,
                "left": "11%",
                "right": "5%",
                "skin": "slImage",
                "src": "touch.png",
                "width": "9%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTouchId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTouchId",
                "isVisible": true,
                "left": "28%",
                "skin": "CopysknLblE0j441508e5e5c42",
                "text": "Touch ID",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgTouchId = new kony.ui.Image2({
                "centerY": "50%",
                "height": "65%",
                "id": "imgTouchId",
                "isVisible": true,
                "right": "8%",
                "skin": "slImage",
                "src": "switch_off.png",
                "width": "14.50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTouchId.add(imgTouchFace, lblTouchId, imgTouchId);
            var CopyFlexContainer0fac81a12816e49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0fac81a12816e49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0fac81a12816e49.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0fac81a12816e49.add();
            var CopyflxTouchId0b61673addb5d46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "18%",
                "id": "CopyflxTouchId0b61673addb5d46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx000000Op15",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxTouchId0b61673addb5d46.setDefaultUnit(kony.flex.DP);
            var lblEdit = new kony.ui.Label({
                "centerY": "50%",
                "height": "80%",
                "id": "lblEdit",
                "isVisible": true,
                "left": "11%",
                "right": "5%",
                "skin": "CopysknBlueIconColor0cb29dd7c47024e",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "9%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyimgTouchFace0fc92b662c47d4b = new kony.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "CopyimgTouchFace0fc92b662c47d4b",
                "isVisible": false,
                "left": "11%",
                "right": "5%",
                "skin": "slImage",
                "src": "notificatio.png",
                "width": "9%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTouchId0d5477a85181e4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblTouchId0d5477a85181e4b",
                "isVisible": true,
                "left": "28%",
                "skin": "CopysknLblE0j441508e5e5c42",
                "text": "Push Notifications",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var imgNotification = new kony.ui.Image2({
                "centerY": "49.98%",
                "height": "65%",
                "id": "imgNotification",
                "isVisible": true,
                "right": "8.01%",
                "skin": "slImage",
                "src": "switch_off.png",
                "width": "14.50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxTouchId0b61673addb5d46.add(lblEdit, CopyimgTouchFace0fc92b662c47d4b, CopylblTouchId0d5477a85181e4b, imgNotification);
            var CopyFlexContainer0je3bbba0cc4741 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "CopyFlexContainer0je3bbba0cc4741",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0j9d3e25d4c0c43",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0je3bbba0cc4741.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0je3bbba0cc4741.add();
            flxBottomContainer.add(flxLogout, FlexContainer0a039921af2c943, flxTouchId, CopyFlexContainer0fac81a12816e49, CopyflxTouchId0b61673addb5d46, CopyFlexContainer0je3bbba0cc4741);
            flxOptions.add(flxTopContainer, flxBottomContainer);
            var flxMenuFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-5dp",
                "clipBounds": true,
                "height": "5%",
                "id": "flxMenuFooter",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx2F586EOp100",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMenuFooter.setDefaultUnit(kony.flex.DP);
            var lblVersion = new kony.ui.Label({
                "centerY": "40%",
                "id": "lblVersion",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLblE8E8E8Op100S80",
                "text": "v1.0.3",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMenuFooter.add(lblVersion);
            flxHamburgerMenuMain.add(flxMenuHeader, flxUserImage, flxOptions, flxMenuFooter);
            var imgMenuShadow = new kony.ui.Image2({
                "height": "101%",
                "id": "imgMenuShadow",
                "isVisible": true,
                "left": "-4dp",
                "skin": "slImage",
                "src": "vertical_shadow.png",
                "top": "-0.50%",
                "width": "3.50%",
                "zIndex": 5
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_FIT_TO_DIMENSIONS,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxHamburgerMenuInner.add(flxHamburgerMenuMain, imgMenuShadow);
            var flxLoading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoading",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx000000Op40",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgLoading = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10%",
                "id": "imgLoading",
                "isVisible": true,
                "skin": "slImage",
                "src": "loading.gif",
                "width": "30%",
                "zIndex": 15
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoading);
            var flxMenuBlankArea = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuBlankArea",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopysknFlxOp0a5b2afacfb6e4a",
                "top": "0dp",
                "width": "100%",
                "zIndex": 6
            }, {}, {});
            flxMenuBlankArea.setDefaultUnit(kony.flex.DP);
            flxMenuBlankArea.add();
            this.add(flxMain, flxHamburgerMenuInner, flxLoading, flxMenuBlankArea);
        };
        return [{
            "addWidgets": addWidgetsfrmDashboard,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmDashboard",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmFFD80FOp100",
            "info": {
                "kuid": "j32a45aa94d948f88cdb762a3a8d2207"
            }
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});