define("frmAnalytics", function() {
    return function(controller) {
        function addWidgetsfrmAnalytics() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "73dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "143dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknFlx",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var lblBack = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBack",
                "isVisible": true,
                "left": "0",
                "skin": "CopyCopydefLabel",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBack.add(lblBack);
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "CopysknLblFFFFFFOp",
                "text": "Analytics",
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
            flxHeader.add(flxBack, lblTitle);
            var flxSelect = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "6%",
                "id": "flxSelect",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "CopyCopysknFlxFFFFFFOp",
                "top": "7%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSelect.setDefaultUnit(kony.flex.DP);
            var btnLastWeek = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSelectF",
                "height": "50dp",
                "id": "btnLastWeek",
                "isVisible": false,
                "left": "0%",
                "skin": "sknBtnSelect",
                "text": "Last Week",
                "top": "88dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnLastMonth = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSelectF",
                "height": "50dp",
                "id": "btnLastMonth",
                "isVisible": false,
                "skin": "sknBtnSelect",
                "text": "Last Month",
                "top": "171dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCustom = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnSelectF",
                "height": "50dp",
                "id": "btnCustom",
                "isVisible": false,
                "left": "0%",
                "skin": "sknBtnSelect",
                "text": "Customize",
                "top": "7dp",
                "width": "33.33%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxLastWeek = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxLastWeek",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopysknFlxDashboard",
                "width": "33.33%",
                "zIndex": 3
            }, {}, {});
            flxLastWeek.setDefaultUnit(kony.flex.DP);
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
                "skin": "CopyCopyslFbox",
                "width": "98%",
                "zIndex": 2
            }, {}, {});
            flxSupervisorDashbOard.setDefaultUnit(kony.flex.DP);
            var lblLastWeek = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblLastWeek",
                "isVisible": true,
                "left": "5%",
                "skin": "CopysknLblDashboardSelected",
                "text": "Last Week",
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
            flxSupervisorDashbOard.add(lblLastWeek);
            var flxLineLastWeek = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7%",
                "id": "flxLineLastWeek",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "CopysknLblDashboardTopLineSelected",
                "width": "97%",
                "zIndex": 4
            }, {}, {});
            flxLineLastWeek.setDefaultUnit(kony.flex.DP);
            flxLineLastWeek.add();
            flxLastWeek.add(flxSupervisorDashbOard, flxLineLastWeek);
            var flxLastMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxLastMonth",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopysknFlxDashboard",
                "width": "33.33%",
                "zIndex": 3
            }, {}, {});
            flxLastMonth.setDefaultUnit(kony.flex.DP);
            var CopyflxSupervisorDashbOard0dbf2f6299b3746 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "90%",
                "id": "CopyflxSupervisorDashbOard0dbf2f6299b3746",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "1%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "width": "98%",
                "zIndex": 2
            }, {}, {});
            CopyflxSupervisorDashbOard0dbf2f6299b3746.setDefaultUnit(kony.flex.DP);
            var lblLastMonth = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblLastMonth",
                "isVisible": true,
                "left": "5%",
                "skin": "CopysknLblDashboardUnselected",
                "text": "Last Month",
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
            CopyflxSupervisorDashbOard0dbf2f6299b3746.add(lblLastMonth);
            var flxLineLastMonth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7%",
                "id": "flxLineLastMonth",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox1",
                "width": "97%",
                "zIndex": 4
            }, {}, {});
            flxLineLastMonth.setDefaultUnit(kony.flex.DP);
            flxLineLastMonth.add();
            flxLastMonth.add(CopyflxSupervisorDashbOard0dbf2f6299b3746, flxLineLastMonth);
            var flxCustom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCustom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "CopysknFlxDashboard",
                "width": "33.33%",
                "zIndex": 3
            }, {}, {});
            flxCustom.setDefaultUnit(kony.flex.DP);
            var CopyflxSupervisorDashbOard0aefc80628c9547 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "90%",
                "id": "CopyflxSupervisorDashbOard0aefc80628c9547",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "1%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox",
                "width": "98%",
                "zIndex": 2
            }, {}, {});
            CopyflxSupervisorDashbOard0aefc80628c9547.setDefaultUnit(kony.flex.DP);
            var lblCustom = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblCustom",
                "isVisible": true,
                "left": "5%",
                "skin": "CopysknLblDashboardUnselected",
                "text": "Custom",
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
            CopyflxSupervisorDashbOard0aefc80628c9547.add(lblCustom);
            var flxLineCustom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7%",
                "id": "flxLineCustom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "2%",
                "isModalContainer": false,
                "skin": "CopyCopyslFbox1",
                "width": "97%",
                "zIndex": 4
            }, {}, {});
            flxLineCustom.setDefaultUnit(kony.flex.DP);
            flxLineCustom.add();
            flxCustom.add(CopyflxSupervisorDashbOard0aefc80628c9547, flxLineCustom);
            flxSelect.add(btnLastWeek, btnLastMonth, btnCustom, flxLastWeek, flxLastMonth, flxCustom);
            var flxDonut = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "41%",
                "id": "flxDonut",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "23%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDonut.setDefaultUnit(kony.flex.DP);
            flxDonut.add();
            var lblNoRecords = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoRecords",
                "isVisible": false,
                "skin": "defLabel",
                "text": "No Records Found",
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
            flxMain.add(flxHeader, flxSelect, flxDonut, lblNoRecords);
            var flxFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxFilters",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFilterBlueBorder",
                "top": "14.50%",
                "width": "98%",
                "zIndex": 2
            }, {}, {});
            flxFilters.setDefaultUnit(kony.flex.DP);
            var lblFromDate = new kony.ui.Label({
                "id": "lblFromDate",
                "isVisible": true,
                "left": "4%",
                "skin": "sknFromTo",
                "text": "From:",
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
            var calStartDate = new kony.ui.Calendar({
                "calendarIcon": "calander_1.png",
                "dateComponents": ["11", "1", "2021"],
                "dateFormat": "dd/MM/yyyy",
                "day": 11,
                "formattedDate": "11/01/2021",
                "height": "30%",
                "hour": 0,
                "id": "calStartDate",
                "isVisible": true,
                "left": "13%",
                "minutes": 0,
                "month": 1,
                "seconds": 0,
                "skin": "sknCalendarnoBorder",
                "top": "6%",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "30%",
                "year": 2021,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var lblEndDate = new kony.ui.Label({
                "id": "lblEndDate",
                "isVisible": true,
                "left": "55%",
                "skin": "sknFromTo",
                "text": "To:",
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
            var calEndDate = new kony.ui.Calendar({
                "calendarIcon": "calander_1.png",
                "dateComponents": ["11", "8", "2020"],
                "dateFormat": "dd/MM/yyyy",
                "day": 11,
                "formattedDate": "11/08/2020",
                "height": "30%",
                "hour": 0,
                "id": "calEndDate",
                "isVisible": true,
                "left": "60%",
                "minutes": 0,
                "month": 8,
                "seconds": 0,
                "skin": "sknCalendarnoBorder",
                "top": "6%",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "30%",
                "year": 2020,
                "zIndex": 3
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var flxFilterActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "15%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "35%",
                "id": "flxFilterActions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "8.00%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "84%",
                "zIndex": 1
            }, {}, {});
            flxFilterActions.setDefaultUnit(kony.flex.DP);
            var btnClear = new kony.ui.Button({
                "focusSkin": "CopysknBtn1",
                "height": "100%",
                "id": "btnClear",
                "isVisible": true,
                "left": "0%",
                "skin": "CopysknBtn1",
                "text": "Clear",
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnApply = new kony.ui.Button({
                "focusSkin": "CopysknBtnAddProject",
                "height": "100%",
                "id": "btnApply",
                "isVisible": true,
                "right": "0%",
                "skin": "CopysknBtnAddProject",
                "text": "Apply",
                "top": "0dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFilterActions.add(btnClear, btnApply);
            var flxVerticalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "30%",
                "id": "flxVerticalLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknBFBFBFFlxOp",
                "top": "6%",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxVerticalLine.setDefaultUnit(kony.flex.DP);
            flxVerticalLine.add();
            flxFilters.add(lblFromDate, calStartDate, lblEndDate, calEndDate, flxFilterActions, flxVerticalLine);
            var flxInfoMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "32%",
                "id": "flxInfoMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInfoMain.setDefaultUnit(kony.flex.DP);
            var flxInfoHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "13%",
                "id": "flxInfoHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "6dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "4%",
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            flxInfoHeader.setDefaultUnit(kony.flex.DP);
            var lblHours = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblHours",
                "isVisible": true,
                "left": "50.50%",
                "skin": "CopydefLabel0j64bfe3a4b7a46",
                "text": "Number of Hours",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "14dp",
                "width": "49.50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectId = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblProjectId",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0j64bfe3a4b7a46",
                "text": "Project Code",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxInfoHeader.add(lblHours, lblProjectId);
            var flxInfo = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "66.80%",
                "horizontalScrollIndicator": true,
                "id": "flxInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "77dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "17%",
                "verticalScrollIndicator": true,
                "width": "76%",
                "zIndex": 1
            }, {}, {});
            flxInfo.setDefaultUnit(kony.flex.DP);
            var flxData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxData",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "5dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c8d4131793a640",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxData.setDefaultUnit(kony.flex.DP);
            var FlexContainer0e30938a8f0f24a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "FlexContainer0e30938a8f0f24a",
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
                "id": "lblColor",
                "isVisible": true,
                "left": "30%",
                "skin": "CopydefLabel0g8502d426b1c4b",
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
                "id": "lblHoursC",
                "isVisible": true,
                "left": "52%",
                "skin": "CopydefLabel0b892ff0a470b4f",
                "text": "18",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "31dp",
                "width": "40%",
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
                "id": "FlexContainer0c75b9056864047",
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
                "id": "lblProject",
                "isVisible": true,
                "left": "32%",
                "skin": "CopydefLabel0b892ff0a470b4f",
                "text": "0000141391",
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
            flxInfo.add(flxData);
            flxInfoMain.add(flxInfoHeader, flxInfo);
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
                "skin": "CopysknFlx1",
                "width": "100%",
                "zIndex": 25
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgLoading = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10%",
                "id": "imgLoading",
                "isVisible": true,
                "skin": "slImage",
                "src": "loading_2.gif",
                "width": "30%",
                "zIndex": 15
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoading);
            this.add(flxMain, flxFilters, flxInfoMain, flxLoading);
        };
        return [{
            "addWidgets": addWidgetsfrmAnalytics,
            "enabledForIdleTimeout": false,
            "id": "frmAnalytics",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "slForm"
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