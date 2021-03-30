define("frmHistory", function() {
    return function(controller) {
        function addWidgetsfrmHistory() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFOp100",
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
                "zIndex": 2
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxMenuIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMenuIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxMenuIcon.setDefaultUnit(kony.flex.DP);
            var lblBack = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBack",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c533b06a2bdf4b",
                "text": "",
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
            flxMenuIcon.add(lblBack);
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "My DPR's",
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
            var flxOptionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxOptionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxOptionContainer.setDefaultUnit(kony.flex.DP);
            var CopylblRefresh0ad79d15ec0ed43 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblRefresh0ad79d15ec0ed43",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a28a8bbafeb14a",
                "text": "",
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
            flxOptionContainer.add(CopylblRefresh0ad79d15ec0ed43);
            flxHeader.add(flxMenuIcon, lblTitle, flxOptionContainer);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "6.80%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "93%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "7%",
                "verticalScrollIndicator": false,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxSearch",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlx0f89c6acf900b48",
                "top": "0dp",
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
                "width": "90%",
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
                "onClick": controller.AS_FlexContainer_c75c0375b8a74fb88ea29840ee6b19f5,
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
                "width": "86%",
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
                "isVisible": false,
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
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSegHeader.setDefaultUnit(kony.flex.DP);
            var lblDPRIdTitle = new kony.ui.Label({
                "centerY": "50.21%",
                "height": "75%",
                "id": "lblDPRIdTitle",
                "isVisible": true,
                "left": "10%",
                "skin": "sknLbl25536EOp100S110Perc",
                "text": "DPR ID",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "25%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectIdTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "75%",
                "id": "lblProjectIdTitle",
                "isVisible": true,
                "left": "7%",
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
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblReportDateTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "75%",
                "id": "lblReportDateTitle",
                "isVisible": true,
                "left": "7%",
                "skin": "sknLbl25536EOp100S110Perc",
                "text": "Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "23%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSegHeader.add(lblDPRIdTitle, lblProjectIdTitle, lblReportDateTitle);
            var CopyflxHeaderShadow0hdf0a92181c447 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "3dp",
                "id": "CopyflxHeaderShadow0hdf0a92181c447",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "0%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxHeaderShadow0hdf0a92181c447.setDefaultUnit(kony.flex.DP);
            CopyflxHeaderShadow0hdf0a92181c447.add();
            var flxHeaderLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxHeaderLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxAAAAAAOp100",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxHeaderLine.setDefaultUnit(kony.flex.DP);
            flxHeaderLine.add();
            var segDPRHistory = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "Label0f43b8b0d7d9441": "",
                    "dprId": "",
                    "imgSign": "",
                    "lblSignedby": "",
                    "lblStatus": "",
                    "lblreportDate": "Report Date : 2005-07-15",
                    "projectId": "",
                    "reportDate": ""
                }],
                "groupCells": false,
                "height": "99.50%",
                "id": "segDPRHistory",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTempSegHistory",
                "scrollingEvents": {
                    "onPull": controller.AS_Segment_b5a2b6e3e9804fc699b56edc8ed7ba8a,
                    "onPush": controller.AS_Segment_jf9b1295227b47239be0574df693caa9
                },
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 1,
                "showScrollbars": true,
                "top": "0.50%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0gbc19fc7830f4c": "FlexContainer0gbc19fc7830f4c",
                    "Label0f43b8b0d7d9441": "Label0f43b8b0d7d9441",
                    "dprId": "dprId",
                    "flxContainer": "flxContainer",
                    "flxDprHsitory": "flxDprHsitory",
                    "flxSign": "flxSign",
                    "flxStatus": "flxStatus",
                    "flxTempSegHistory": "flxTempSegHistory",
                    "imgSign": "imgSign",
                    "lblSignedby": "lblSignedby",
                    "lblStatus": "lblStatus",
                    "lblreportDate": "lblreportDate",
                    "projectId": "projectId",
                    "reportDate": "reportDate"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgdpr = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "70dp",
                "id": "imgdpr",
                "isVisible": true,
                "left": "110dp",
                "skin": "slImage",
                "src": "dprbottom.png",
                "top": "0dp",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoHistory = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "2%",
                "id": "lblNoHistory",
                "isVisible": true,
                "skin": "sknLbl22253BOp100S130",
                "text": "No DPR's Found.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 10,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBody.add(flxSearch, flxSegHeader, CopyflxHeaderShadow0hdf0a92181c447, flxHeaderLine, segDPRHistory, imgdpr, lblNoHistory);
            flxMain.add(flxHeader, flxHeaderShadow, flxBody);
            var flxFiltersOuter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFiltersOuter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxOp0f84fe37b688b4c",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxFiltersOuter.setDefaultUnit(kony.flex.DP);
            var flxFiltersInner = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxFiltersInner",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a73937d1b23c462fb3b88362fd1e9b4d,
                "skin": "sknFlx000000Op40",
                "top": "5%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFiltersInner.setDefaultUnit(kony.flex.DP);
            var flxFilterMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "28.22%",
                "id": "flxFilterMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "1%",
                "skin": "slFbox",
                "top": "1%",
                "width": "84.44%",
                "zIndex": 1
            }, {}, {});
            flxFilterMain.setDefaultUnit(kony.flex.DP);
            var imgWhiteTriangle = new kony.ui.Image2({
                "height": "16%",
                "id": "imgWhiteTriangle",
                "isVisible": true,
                "right": "3%",
                "skin": "slImage",
                "src": "white_triangle.png",
                "top": "0dp",
                "width": "12.50%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxFilters = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "84%",
                "id": "flxFilters",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2%",
                "skin": "sknFlxBgFFFFFFOp100BorderFFFFFFS1pRounded",
                "top": "11%",
                "width": "98%",
                "zIndex": 2
            }, {}, {});
            flxFilters.setDefaultUnit(kony.flex.DP);
            var lblFromDate = new kony.ui.Label({
                "id": "lblFromDate",
                "isVisible": true,
                "left": "8%",
                "skin": "sknLbl22253BOp100S110",
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
                "calendarIcon": "calander.png",
                "centerY": "45%",
                "dateComponents": [29, 7, 2019, 0, 0, 0],
                "dateFormat": "yyyy/MM/dd",
                "day": 29,
                "focusSkin": "sknCalendarFont000000Op100S90",
                "formattedDate": "2019/07/29",
                "height": "20%",
                "hour": 0,
                "id": "calStartDate",
                "isVisible": true,
                "left": "5%",
                "minutes": 0,
                "month": 7,
                "seconds": 0,
                "skin": "sknCalendarFont000000Op100S90",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "38%",
                "year": 2019,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var lblEndDate = new kony.ui.Label({
                "id": "lblEndDate",
                "isVisible": true,
                "left": "55%",
                "skin": "sknLbl22253BOp100S110",
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
                "calendarIcon": "calander.png",
                "centerY": "44.98%",
                "dateComponents": [29, 7, 2019],
                "dateFormat": "yyyy/MM/dd",
                "day": 29,
                "focusSkin": "sknCalendarFont000000Op100S90",
                "formattedDate": "2019/07/29",
                "height": "20%",
                "hour": 0,
                "id": "calEndDate",
                "isVisible": true,
                "left": "54%",
                "minutes": 0,
                "month": 7,
                "seconds": 0,
                "skin": "sknCalendarFont000000Op100S90",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "38%",
                "year": 2019,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var flxFilterActions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "5%",
                "clipBounds": true,
                "height": "25%",
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
            var btnApply = new kony.ui.Button({
                "focusSkin": "sknBtnAddProject",
                "height": "100%",
                "id": "btnApply",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtnAddProject",
                "text": "Apply",
                "top": "1dp",
                "width": "45%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnClear = new kony.ui.Button({
                "focusSkin": "sknBtn949494FontFFFFFFRounded",
                "height": "100%",
                "id": "btnClear",
                "isVisible": true,
                "right": "0%",
                "skin": "sknBtn949494FontFFFFFFRounded",
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
            flxFilterActions.add(btnApply, btnClear);
            var flxVerticalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "40%",
                "id": "flxVerticalLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknBFBFBFFlxOp100",
                "top": "11%",
                "width": "1dp",
                "zIndex": 1
            }, {}, {});
            flxVerticalLine.setDefaultUnit(kony.flex.DP);
            flxVerticalLine.add();
            flxFilters.add(lblFromDate, calStartDate, lblEndDate, calEndDate, flxFilterActions, flxVerticalLine);
            flxFilterMain.add(imgWhiteTriangle, flxFilters);
            flxFiltersInner.add(flxFilterMain);
            flxFiltersOuter.add(flxFiltersInner);
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
            var flxSignatureShow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "100%",
                "id": "flxSignatureShow",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlx7099b1Op82BorderRd10",
                "top": "0%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxSignatureShow.setDefaultUnit(kony.flex.DP);
            var CopyflxHeader0d5dc35fdb2fa41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "CopyflxHeader0d5dc35fdb2fa41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 4
            }, {}, {});
            CopyflxHeader0d5dc35fdb2fa41.setDefaultUnit(kony.flex.DP);
            var flxSignatureback = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "55%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxSignatureback",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-0.04%",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "12.04%",
                "zIndex": 1
            }, {}, {});
            flxSignatureback.setDefaultUnit(kony.flex.DP);
            var CopylblBack0g1dfccd562454d = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblBack0g1dfccd562454d",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c533b06a2bdf4b",
                "text": "",
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
            flxSignatureback.add(CopylblBack0g1dfccd562454d);
            var lblSignTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSignTitle",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Signature",
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
            CopyflxHeader0d5dc35fdb2fa41.add(flxSignatureback, lblSignTitle);
            var flxSignInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxSignInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0afcbd5d021b341",
                "top": 5,
                "width": "96%"
            }, {}, {});
            flxSignInfo.setDefaultUnit(kony.flex.DP);
            var flxClientName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxClientName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxClientName.setDefaultUnit(kony.flex.DP);
            var CopyLabel0fb21d74eefb04a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0fb21d74eefb04a",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Client : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblClientName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblClientName",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxClientName.add(CopyLabel0fb21d74eefb04a, lblClientName);
            var flxRepName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxRepName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRepName.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ce13b4d61cba41 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0ce13b4d61cba41",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Name : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRepName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRepName",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRepName.add(CopyLabel0ce13b4d61cba41, lblRepName);
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var CopyLabel0i4d5bfd2cbae4a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0i4d5bfd2cbae4a",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Date : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSigndate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSigndate",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDate.add(CopyLabel0i4d5bfd2cbae4a, lblSigndate);
            flxSignInfo.add(flxClientName, flxRepName, flxDate);
            var CopyflxBodySign0i63fc6169aab48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxBodySign0i63fc6169aab48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0i370e4f2b66448",
                "top": "1%",
                "width": "100%"
            }, {}, {});
            CopyflxBodySign0i63fc6169aab48.setDefaultUnit(kony.flex.DP);
            var imgSignature = new kony.ui.Image2({
                "height": "89.23%",
                "id": "imgSignature",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imagedrag.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxBodySign0i63fc6169aab48.add(imgSignature);
            flxSignatureShow.add(CopyflxHeader0d5dc35fdb2fa41, flxSignInfo, CopyflxBodySign0i63fc6169aab48);
            var flxOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "143dp",
                "id": "flxOption",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0h4b64f1a55d049",
                "top": "7%",
                "width": "14.22%",
                "zIndex": 3
            }, {}, {});
            flxOption.setDefaultUnit(kony.flex.DP);
            var flxFilterIcon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxFilterIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a9b11a486543420dad7fd9e650348ad7,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFilterIcon.setDefaultUnit(kony.flex.DP);
            var CopylblRefresh0idbbc2af6f3f41 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblRefresh0idbbc2af6f3f41",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a28a8bbafeb14a",
                "text": "",
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
            flxFilterIcon.add(CopylblRefresh0idbbc2af6f3f41);
            var flxSearchDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "33%",
                "id": "flxSearchDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSearchDPR.setDefaultUnit(kony.flex.DP);
            var lblSearchDpr = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "45%",
                "id": "lblSearchDpr",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a28a8bbafeb14a",
                "text": "",
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
            flxSearchDPR.add(lblSearchDpr);
            var flxRefresh = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "34%",
                "id": "flxRefresh",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRefresh.setDefaultUnit(kony.flex.DP);
            var lblRefresh = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRefresh",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a28a8bbafeb14a",
                "text": "",
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
            flxRefresh.add(lblRefresh);
            flxOption.add(flxFilterIcon, flxSearchDPR, flxRefresh);
            var flxSuccessStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSuccessStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSuccessStatus.setDefaultUnit(kony.flex.DP);
            var flxLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxLabel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "100.00%"
            }, {}, {});
            flxLabel.setDefaultUnit(kony.flex.DP);
            var lblSaved = new kony.ui.Label({
                "id": "lblSaved",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefLabel0a64fd884b1db41",
                "text": " Filter Applied",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 3, 3, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLabel.add(lblSaved);
            flxSuccessStatus.add(flxLabel);
            this.add(flxMain, flxFiltersOuter, flxLoading, flxSignatureShow, flxOption, flxSuccessStatus);
        };
        return [{
            "addWidgets": addWidgetsfrmHistory,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmHistory",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "sknFrmFFD80FOp100"
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