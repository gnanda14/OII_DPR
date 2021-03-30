define("frmCreateDPR", function() {
    return function(controller) {
        function addWidgetsfrmCreateDPR() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "93%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxBgf0f0f0",
                "top": 0,
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
                "skin": "sknFlx003C5COp100",
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
                "skin": "CopydefLabel0c533b06a2bdf4b",
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
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Create Timesheet",
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
            var flxHoursCount = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxHoursCount",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopysknFlxBorderd0ib2e99c9ee5548",
                "top": "2%",
                "width": "12%",
                "zIndex": 1
            }, {}, {});
            flxHoursCount.setDefaultUnit(kony.flex.DP);
            var flxHoursColor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "38%",
                "clipBounds": true,
                "focusSkin": "CopysknFlxFFFFFFOp0c2b90adfd21e41",
                "height": "30dp",
                "id": "flxHoursColor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "sknFlxunder15",
                "width": "30dp",
                "zIndex": 2
            }, {}, {});
            flxHoursColor.setDefaultUnit(kony.flex.DP);
            var lblCountHours = new kony.ui.Label({
                "centerX": "46%",
                "centerY": "47%",
                "id": "lblCountHours",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0g1561b7e00eb45",
                "text": "12",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHoursColor.add(lblCountHours);
            var CopylblCountHours0cffd4eb64e8440 = new kony.ui.Label({
                "centerX": "50%",
                "id": "CopylblCountHours0cffd4eb64e8440",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0f96ca759c6e84b",
                "text": "Hours",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHoursCount.add(flxHoursColor, CopylblCountHours0cffd4eb64e8440);
            flxHeader.add(flxBack, lblTitle, flxHoursCount);
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1%",
                "id": "flxHeaderShadow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "-0.20%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxTopSearchHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxTopSearchHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0e378d2beaa3440",
                "top": "0%",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxTopSearchHeader.setDefaultUnit(kony.flex.DP);
            var flxCrewSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "82%",
                "id": "flxCrewSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "skin": "CopysknFlxBorderd0a100c3632dba4e",
                "width": "96%",
                "zIndex": 1
            }, {}, {});
            flxCrewSearch.setDefaultUnit(kony.flex.DP);
            var FlexContainer0ebf83620f38d41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer0ebf83620f38d41",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0b7d0a80cbcc144",
                "top": "0dp",
                "width": "0.50%"
            }, {}, {});
            FlexContainer0ebf83620f38d41.setDefaultUnit(kony.flex.DP);
            FlexContainer0ebf83620f38d41.add();
            var txtCrewSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtFont107Col333",
                "height": "100%",
                "id": "txtCrewSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": " Crew's Name/Employee ID",
                "secureTextEntry": false,
                "skin": "sknTxtFont107Col333",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "86%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknSearchTxtBoxPlaceHolder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var CopyFlexContainer0ecb078ca7b5241 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyFlexContainer0ecb078ca7b5241",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ef439d2355804e",
                "top": "0dp",
                "width": "0.40%"
            }, {}, {});
            CopyFlexContainer0ecb078ca7b5241.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ecb078ca7b5241.add();
            var flxImgSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopysknFlxFFFFFFOp0c2b90adfd21e41",
                "height": "100%",
                "id": "flxImgSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopysknFlxFFFFFFOp0c2b90adfd21e41",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxImgSearch.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "47%",
                "height": "70%",
                "id": "imgSearchIcon",
                "isVisible": true,
                "skin": "slImage",
                "src": "search_icon.png",
                "width": "100%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxImgSearch.add(imgSearchIcon);
            flxCrewSearch.add(FlexContainer0ebf83620f38d41, txtCrewSearch, CopyFlexContainer0ecb078ca7b5241, flxImgSearch);
            flxTopSearchHeader.add(flxCrewSearch);
            var CopyflxHeaderShadow0a67c2ecaf4e64b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1%",
                "id": "CopyflxHeaderShadow0a67c2ecaf4e64b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "-0.50%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxHeaderShadow0a67c2ecaf4e64b.setDefaultUnit(kony.flex.DP);
            CopyflxHeaderShadow0a67c2ecaf4e64b.add();
            var flxBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxOp0hc323093b9294d",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxPersonnelDetailsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxPersonnelDetailsBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPersonnelDetailsBody.setDefaultUnit(kony.flex.DP);
            var flxReportDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxReportDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxReportDate.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0f44670a765ba4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0f44670a765ba4c",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0f44670a765ba4c.setDefaultUnit(kony.flex.DP);
            var lblReportdateHeader = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "lblReportdateHeader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Report Date",
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
            var CopylbCountryAsterisk0j4e2b64883e14b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0j4e2b64883e14b",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0f44670a765ba4c.add(lblReportdateHeader, CopylbCountryAsterisk0j4e2b64883e14b);
            var lblShowReportdate = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblShowReportdate",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "4%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "44%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var calReportDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "60%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "65%",
                "hour": 0,
                "id": "calReportDate",
                "isVisible": false,
                "minutes": 0,
                "placeholder": "----/--/--",
                "right": "15dp",
                "seconds": 0,
                "skin": "sknCalProjectDetails",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            flxReportDate.add(CopyflxActivityBox0f44670a765ba4c, lblShowReportdate, calReportDate);
            var CopyFlexContainer0ffa55e61907b48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ffa55e61907b48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ffa55e61907b48.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ffa55e61907b48.add();
            var flxEmpName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxEmpName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmpName.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0fc828610c5ad46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0fc828610c5ad46",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0fc828610c5ad46.setDefaultUnit(kony.flex.DP);
            var lblEmpName = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "lblEmpName",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Employee Name",
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
            var CopylbCountryAsterisk0d195d0da247d40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0d195d0da247d40",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0fc828610c5ad46.add(lblEmpName, CopylbCountryAsterisk0d195d0da247d40);
            var lblEmplName = new kony.ui.Label({
                "centerY": "50.09%",
                "height": "100%",
                "id": "lblEmplName",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3.99%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "44%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEmpName.add(CopyflxActivityBox0fc828610c5ad46, lblEmplName);
            var CopyFlexContainer0jcf82fa28c6a42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0jcf82fa28c6a42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0jcf82fa28c6a42.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0jcf82fa28c6a42.add();
            var flxEmpId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxEmpId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmpId.setDefaultUnit(kony.flex.DP);
            var flxActivityBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxActivityBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "35%"
            }, {}, {});
            flxActivityBox.setDefaultUnit(kony.flex.DP);
            var lblEmpidHEader = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "lblEmpidHEader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Employee ID",
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
            var CopylbCountryAsterisk0a2b203c5af4941 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0a2b203c5af4941",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            flxActivityBox.add(lblEmpidHEader, CopylbCountryAsterisk0a2b203c5af4941);
            var tbxEmpID = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxEmpID",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblEmpID = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEmpID",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "4%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "44.44%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblReportId = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblReportId",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "-6%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "44.44%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var reportDate = new kony.ui.Label({
                "centerY": "70%",
                "id": "reportDate",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "-16%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "44.44%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEmpId.add(flxActivityBox, tbxEmpID, lblEmpID, lblReportId, reportDate);
            var CopyFlexContainer0da13723e43a541 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0da13723e43a541",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0da13723e43a541.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0da13723e43a541.add();
            var flxJobPosition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxJobPosition",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJobPosition.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0a3f74fe012d646 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0a3f74fe012d646",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0a3f74fe012d646.setDefaultUnit(kony.flex.DP);
            var lblJobPositionHeader = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "lblJobPositionHeader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Job Position",
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
            var CopylbCountryAsterisk0h01b6ffc98ba4c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0h01b6ffc98ba4c",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0a3f74fe012d646.add(lblJobPositionHeader, CopylbCountryAsterisk0h01b6ffc98ba4c);
            var tbxJobPostion = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxJobPostion",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxJobPositionPop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxJobPositionPop",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxJobPositionPop.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0d7936f218eab4e = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0d7936f218eab4e",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblJobPosition = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblJobPosition",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblJobCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblJobCode",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLbl120333333",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxJobPositionPop.add(CopyimgArrow0d7936f218eab4e, lblJobPosition, lblJobCode);
            flxJobPosition.add(CopyflxActivityBox0a3f74fe012d646, tbxJobPostion, flxJobPositionPop);
            var CopyFlexContainer0afecd59c988f4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0afecd59c988f4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0afecd59c988f4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0afecd59c988f4a.add();
            var flxCrewPosition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxCrewPosition",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCrewPosition.setDefaultUnit(kony.flex.DP);
            var tbxCrewPosition = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.00%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxCrewPosition",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4.03%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "60.00%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxCrewPositionDown = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxCrewPositionDown",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxCrewPositionDown.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0a2f62a73d1f143 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0a2f62a73d1f143",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCrewPosition = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewPosition",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCrewPositionCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewPositionCode",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCrewPositionDown.add(CopyimgArrow0a2f62a73d1f143, lblCrewPosition, lblCrewPositionCode);
            var CopyflxActivityBox0f02b455453e74f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0f02b455453e74f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0f02b455453e74f.setDefaultUnit(kony.flex.DP);
            var lblCrewHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewHeader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Crew Postion",
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
            var CopylbCountryAsterisk0ac988b74963349 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0ac988b74963349",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0f02b455453e74f.add(lblCrewHeader, CopylbCountryAsterisk0ac988b74963349);
            flxCrewPosition.add(tbxCrewPosition, flxCrewPositionDown, CopyflxActivityBox0f02b455453e74f);
            var flxDPRId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxDPRId",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDPRId.setDefaultUnit(kony.flex.DP);
            var lblDPRId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDPRId",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "DPR Id",
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
            var lblDPRIdValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblDPRIdValue",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLbl120333333",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "65%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDPRId.add(lblDPRId, lblDPRIdValue);
            var CopyFlexContainer0d2abc8918c504e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d2abc8918c504e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d2abc8918c504e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d2abc8918c504e.add();
            var flxShiftFrom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxShiftFrom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShiftFrom.setDefaultUnit(kony.flex.DP);
            var tbxShiftFrom = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxShiftFrom",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShiftFromValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxShiftFromValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "top": "0",
                "width": "30%",
                "zIndex": 2
            }, {}, {});
            flxShiftFromValue.setDefaultUnit(kony.flex.DP);
            flxShiftFromValue.add();
            var CopyflxActivityBox0e1cc9c0b29c545 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0e1cc9c0b29c545",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0e1cc9c0b29c545.setDefaultUnit(kony.flex.DP);
            var lblShiftFromHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftFromHeader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Shift From",
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
            var CopylbCountryAsterisk0h7ebcf7abfcb44 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0h7ebcf7abfcb44",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0e1cc9c0b29c545.add(lblShiftFromHeader, CopylbCountryAsterisk0h7ebcf7abfcb44);
            var flxShiftFromPop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxShiftFromPop",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxShiftFromPop.setDefaultUnit(kony.flex.DP);
            var imgShiftFrom = new kony.ui.Image2({
                "height": "100%",
                "id": "imgShiftFrom",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShiftFromTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftFromTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "00:00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDateShiftFrom = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDateShiftFrom",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShiftFromPop.add(imgShiftFrom, lblShiftFromTime, lblDateShiftFrom);
            flxShiftFrom.add(tbxShiftFrom, flxShiftFromValue, CopyflxActivityBox0e1cc9c0b29c545, flxShiftFromPop);
            var CopyFlexContainer0bb2579255eb04b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0bb2579255eb04b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0bb2579255eb04b.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0bb2579255eb04b.add();
            var flxShiftTo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxShiftTo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShiftTo.setDefaultUnit(kony.flex.DP);
            var tbxShiftTo = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxShiftTo",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShiftToValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxShiftToValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "top": "0",
                "width": "30%",
                "zIndex": 2
            }, {}, {});
            flxShiftToValue.setDefaultUnit(kony.flex.DP);
            flxShiftToValue.add();
            var CopyflxActivityBox0f837e761ff2841 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0f837e761ff2841",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0f837e761ff2841.setDefaultUnit(kony.flex.DP);
            var lblShiftToHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftToHeader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Shift To",
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
            var lblShiftToAsterisk = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftToAsterisk",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0f837e761ff2841.add(lblShiftToHeader, lblShiftToAsterisk);
            var flxShift = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxShift",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxShift.setDefaultUnit(kony.flex.DP);
            var imgShiftTo = new kony.ui.Image2({
                "height": "100%",
                "id": "imgShiftTo",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShiftToTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftToTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "00:00",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblShiftToDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftToDate",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShift.add(imgShiftTo, lblShiftToTime, lblShiftToDate);
            flxShiftTo.add(tbxShiftTo, flxShiftToValue, CopyflxActivityBox0f837e761ff2841, flxShift);
            var CopyFlexContainer0be08aba67e7c4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0be08aba67e7c4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0be08aba67e7c4d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0be08aba67e7c4d.add();
            var flxNormalHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxNormalHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNormalHours.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0e511194e67c147 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0e511194e67c147",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0e511194e67c147.setDefaultUnit(kony.flex.DP);
            var lblNormalHoursHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNormalHoursHeader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Normal Hours",
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
            var CopylbCountryAsterisk0ae65bf8fb95a40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0ae65bf8fb95a40",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
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
            CopyflxActivityBox0e511194e67c147.add(lblNormalHoursHeader, CopylbCountryAsterisk0ae65bf8fb95a40);
            var lblNrmlHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNrmlHours",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "12",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "22.22%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNormalHours.add(CopyflxActivityBox0e511194e67c147, lblNrmlHours);
            var flxOptionalHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxOptionalHeader",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgf0f0f0",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOptionalHeader.setDefaultUnit(kony.flex.DP);
            var CopyflxHeaderPersonnel0cd5336d2b08748 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxHeaderPersonnel0cd5336d2b08748",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxHeaderPersonnel0cd5336d2b08748.setDefaultUnit(kony.flex.DP);
            var CopylblProjectTitle0j3ef99866d5546 = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "CopylblProjectTitle0j3ef99866d5546",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL00263e110",
                "text": "Optional",
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
            var CopylblEmplName0h8f3ba0e117540 = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "CopylblEmplName0h8f3ba0e117540",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 1,
                "skin": "sknLBL00263e110",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "67.56%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxHeaderPersonnel0cd5336d2b08748.add(CopylblProjectTitle0j3ef99866d5546, CopylblEmplName0h8f3ba0e117540);
            var CopyflxProgress0cc668f25ba8f45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "30dp",
                "id": "CopyflxProgress0cc668f25ba8f45",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "CopyslFbox0bb7ab4aaf1ea4e",
                "width": "30dp",
                "zIndex": 1
            }, {}, {});
            CopyflxProgress0cc668f25ba8f45.setDefaultUnit(kony.flex.DP);
            var CopyLabel0f4926020975f49 = new kony.ui.Label({
                "centerX": "45%",
                "centerY": "48%",
                "height": "100%",
                "id": "CopyLabel0f4926020975f49",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a62f04305b194a",
                "text": "18",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxProgress0cc668f25ba8f45.add(CopyLabel0f4926020975f49);
            flxOptionalHeader.add(CopyflxHeaderPersonnel0cd5336d2b08748, CopyflxProgress0cc668f25ba8f45);
            var CopyFlexContainer0d82e532d185344 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0d82e532d185344",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d82e532d185344.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d82e532d185344.add();
            var flxTRC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxTRC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTRC.setDefaultUnit(kony.flex.DP);
            var lblTRC = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTRC",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "TRC",
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
            var flxTRCValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxTRCValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxTRCValue.setDefaultUnit(kony.flex.DP);
            var imgArrow = new kony.ui.Image2({
                "height": "100%",
                "id": "imgArrow",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblTRCValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTRCValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTRCValue.add(imgArrow, lblTRCValue);
            flxTRC.add(lblTRC, flxTRCValue);
            var flxTRCContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxTRCContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTRCContainer.setDefaultUnit(kony.flex.DP);
            flxTRCContainer.add();
            var CopyFlexContainer0h523a5d4096f43 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0h523a5d4096f43",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0h523a5d4096f43.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0h523a5d4096f43.add();
            var flxTrcSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxTrcSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxTrcSeparator.setDefaultUnit(kony.flex.DP);
            flxTrcSeparator.add();
            var flxShiftTypeContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxShiftTypeContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShiftTypeContainer.setDefaultUnit(kony.flex.DP);
            var lblNormalHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNormalHours",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Shift Type",
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
            var txtNormalHoursValue = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "txtNormalHoursValue",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShiftType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxShiftType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxShiftType.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0d031422dcfdc47 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0d031422dcfdc47",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShiftType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftType",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "Normal",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShiftType.add(CopyimgArrow0d031422dcfdc47, lblShiftType);
            flxShiftTypeContainer.add(lblNormalHours, txtNormalHoursValue, flxShiftType);
            var CopyFlexContainer0d0c2573ede984d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d0c2573ede984d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d0c2573ede984d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d0c2573ede984d.add();
            var flxShiftFromOT = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxShiftFromOT",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShiftFromOT.setDefaultUnit(kony.flex.DP);
            var lblStandbyHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStandbyHours",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Shift From (OT)",
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
            var tbxShiftFromOt = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxShiftFromOt",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 12,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShiftFromOTValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "39.68%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxShiftFromOTValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4.00%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxShiftFromOTValue.setDefaultUnit(kony.flex.DP);
            var CopyimgShiftTo0c66b913e32d840 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgShiftTo0c66b913e32d840",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShiftFromOTTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftFromOTTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblShiftFromOTDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftFromOTDate",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShiftFromOTValue.add(CopyimgShiftTo0c66b913e32d840, lblShiftFromOTTime, lblShiftFromOTDate);
            flxShiftFromOT.add(lblStandbyHours, tbxShiftFromOt, flxShiftFromOTValue);
            var CopyFlexContainer0dbe01561a1f34b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0dbe01561a1f34b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0dbe01561a1f34b.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0dbe01561a1f34b.add();
            var flxShiftToOT = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxShiftToOT",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShiftToOT.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHours0df941343bcb54e = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHours0df941343bcb54e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Shift To (OT)",
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
            var tbxShiftToOt = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxShiftToOt",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 12,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxShiftToOTValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "39.68%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxShiftToOTValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4.00%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxShiftToOTValue.setDefaultUnit(kony.flex.DP);
            var CopyimgShiftTo0g78a2cc6d9c143 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgShiftTo0g78a2cc6d9c143",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblShiftTOToTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftTOToTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblShiftToOTDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftToOTDate",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxShiftToOTValue.add(CopyimgShiftTo0g78a2cc6d9c143, lblShiftTOToTime, lblShiftToOTDate);
            flxShiftToOT.add(CopylblStandbyHours0df941343bcb54e, tbxShiftToOt, flxShiftToOTValue);
            var CopyFlexContainer0hb756682aba745 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0hb756682aba745",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0hb756682aba745.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0hb756682aba745.add();
            var CopyFlexContainer0gd57ab7df5dc4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0gd57ab7df5dc4d",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0gd57ab7df5dc4d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0gd57ab7df5dc4d.add();
            var flxUOMContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxUOMContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxUOMContainer.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0baf4db5289ee4a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0baf4db5289ee4a",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
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
            var tbxUOM = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxUOM",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 12,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxUOMPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxUOMPopup",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxUOMPopup.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0j7691dcac7d649 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0j7691dcac7d649",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblUOM",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxUOMPopup.add(CopyimgArrow0j7691dcac7d649, lblUOM);
            flxUOMContainer.add(CopylblNormalHours0baf4db5289ee4a, tbxUOM, flxUOMPopup);
            var CopyFlexContainer0i1d62ab2f2e44f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0i1d62ab2f2e44f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0i1d62ab2f2e44f.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0i1d62ab2f2e44f.add();
            var flxDepthContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxDepthContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDepthContainer.setDefaultUnit(kony.flex.DP);
            var lblDepth = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDepth",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Depth",
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
            var tbxDepth = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxDepth",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxDepthContainer.add(lblDepth, tbxDepth);
            var CopyFlexContainer0df4f97dd416a4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0df4f97dd416a4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0df4f97dd416a4c.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0df4f97dd416a4c.add();
            var CopyFlexContainer0b0951627a0314c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0b0951627a0314c",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0b0951627a0314c.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0b0951627a0314c.add();
            var flxStandByHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxStandByHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStandByHours.setDefaultUnit(kony.flex.DP);
            var lblStandbyHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStandbyHeader",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Standby Hours",
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
            var tbxStandByHours = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxStandByHours",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxStandByHours.add(lblStandbyHeader, tbxStandByHours);
            var CopyFlexContainer0de805c965aa748 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0de805c965aa748",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0de805c965aa748.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0de805c965aa748.add();
            var flxOTHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxOTHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOTHours.setDefaultUnit(kony.flex.DP);
            var lblOIIOTHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOIIOTHours",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "OII OT Hours",
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
            var txtOIIOTHoursValue = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "txtOIIOTHoursValue",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxOTHours.add(lblOIIOTHours, txtOIIOTHoursValue);
            var CopyFlexContainer0jfd66ec007f44e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0jfd66ec007f44e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0jfd66ec007f44e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0jfd66ec007f44e.add();
            var flxClientOTHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxClientOTHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxClientOTHours.setDefaultUnit(kony.flex.DP);
            var lblClientOTHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblClientOTHours",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Client OT Hours",
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
            var txtClientOTHoursValue = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "txtClientOTHoursValue",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxClientOTHours.add(lblClientOTHours, txtClientOTHoursValue);
            var CopyFlexContainer0eda45d601dae4e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0eda45d601dae4e",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0eda45d601dae4e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0eda45d601dae4e.add();
            var CopyFlexContainer0jbdaff3c11a54a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0jbdaff3c11a54a",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0jbdaff3c11a54a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0jbdaff3c11a54a.add();
            var flxCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCategory",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategory.setDefaultUnit(kony.flex.DP);
            var CopylblClientOTHours0e43f91a925dc4c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblClientOTHours0e43f91a925dc4c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Category",
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
            var tbxCategory = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxCategory",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 12,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxCategory.add(CopylblClientOTHours0e43f91a925dc4c, tbxCategory);
            var flxRateSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxRateSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRateSeparator.setDefaultUnit(kony.flex.DP);
            flxRateSeparator.add();
            var flxDayrate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxDayrate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDayrate.setDefaultUnit(kony.flex.DP);
            var lblDayRateheader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDayRateheader",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Day Rate",
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
            var tbxDayRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxDayRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxDayrate.add(lblDayRateheader, tbxDayRate);
            var CopyFlexContainer0i0c6e88bf09a47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0i0c6e88bf09a47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0i0c6e88bf09a47.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0i0c6e88bf09a47.add();
            var flxDatRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxDatRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDatRate.setDefaultUnit(kony.flex.DP);
            var lblOtRateheader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOtRateheader",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "OT Rate",
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
            var tbxOTRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxOTRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxDatRate.add(lblOtRateheader, tbxOTRate);
            var CopyFlexContainer0g042ca25315343 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0g042ca25315343",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0g042ca25315343.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g042ca25315343.add();
            var flxStandbyRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxStandbyRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStandbyRate.setDefaultUnit(kony.flex.DP);
            var lblStandByrateHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStandByrateHeader",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Standby Rate",
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
            var tbxStandbyRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.00%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxStandbyRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxStandbyRate.add(lblStandByrateHeader, tbxStandbyRate);
            var CopyFlexContainer0c6259dbdb4fe4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c6259dbdb4fe4a",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c6259dbdb4fe4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c6259dbdb4fe4a.add();
            var flxNonDiveRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxNonDiveRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxNonDiveRate.setDefaultUnit(kony.flex.DP);
            var lblnondiveHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblnondiveHeader",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Non-Dive Rate",
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
            var tbxNonDiveRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50.09%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxNonDiveRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4.01%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxNonDiveRate.add(lblnondiveHeader, tbxNonDiveRate);
            var CopyFlexContainer0f3f4aeaffd4e45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0f3f4aeaffd4e45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0f3f4aeaffd4e45.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0f3f4aeaffd4e45.add();
            var flxProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxProject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProject.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0cc8eeb9c86ef42 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0cc8eeb9c86ef42",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Project",
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
            var flxProjectPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxProjectPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxProjectPopUp.setDefaultUnit(kony.flex.DP);
            var lblProjectArrow = new kony.ui.Image2({
                "height": "100%",
                "id": "lblProjectArrow",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblProject = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProject",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProjectPopUp.add(lblProjectArrow, lblProject);
            flxProject.add(CopylblNormalHours0cc8eeb9c86ef42, flxProjectPopUp);
            var flxsep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxsep1.setDefaultUnit(kony.flex.DP);
            flxsep1.add();
            var flxActitivity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxActitivity",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActitivity.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0f87698de7fee4e = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0f87698de7fee4e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Activity",
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
            var flxActivityPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxActivityPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxActivityPopUp.setDefaultUnit(kony.flex.DP);
            var lblActivityArrow = new kony.ui.Image2({
                "height": "100%",
                "id": "lblActivityArrow",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblActivity = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActivity",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblActivityId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActivityId",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxActivityPopUp.add(lblActivityArrow, lblActivity, lblActivityId);
            flxActitivity.add(CopylblNormalHours0f87698de7fee4e, flxActivityPopUp);
            var flxsep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxsep2.setDefaultUnit(kony.flex.DP);
            flxsep2.add();
            var flxSource = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxSource",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSource.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0cdffdfa4906f49 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0cdffdfa4906f49",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Source Type",
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
            var flxSourePopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxSourePopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxSourePopUp.setDefaultUnit(kony.flex.DP);
            var lblSourceArrow = new kony.ui.Image2({
                "height": "100%",
                "id": "lblSourceArrow",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSourceType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSourceType",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSourePopUp.add(lblSourceArrow, lblSourceType);
            flxSource.add(CopylblNormalHours0cdffdfa4906f49, flxSourePopUp);
            var flxsep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxsep3.setDefaultUnit(kony.flex.DP);
            flxsep3.add();
            var flxCategry = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxCategry",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategry.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0c37965d92b2142 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0c37965d92b2142",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Category",
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
            var flxCategoryPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxCategoryPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "63.11%",
                "zIndex": 1
            }, {}, {});
            flxCategoryPopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0hee48133424d41 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0hee48133424d41",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCategory = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCategory",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCategoryId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCategoryId",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "2%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCategoryPopUp.add(CopyimgArrow0hee48133424d41, lblCategory, lblCategoryId);
            flxCategry.add(CopylblNormalHours0c37965d92b2142, flxCategoryPopUp);
            var flxsep4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxsep4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxsep4.setDefaultUnit(kony.flex.DP);
            flxsep4.add();
            var flxSubCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxSubCategory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubCategory.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0f542c96ca50241 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0f542c96ca50241",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Sub Category",
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
            var flxSubCategoryPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxSubCategoryPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxSubCategoryPopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0i4d237c57de049 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0i4d237c57de049",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSubCategory = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSubCategory",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSubCategoryId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSubCategoryId",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSubCategoryPopUp.add(CopyimgArrow0i4d237c57de049, lblSubCategory, lblSubCategoryId);
            flxSubCategory.add(CopylblNormalHours0f542c96ca50241, flxSubCategoryPopUp);
            var flxSubCategoryContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxSubCategoryContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubCategoryContainer.setDefaultUnit(kony.flex.DP);
            flxSubCategoryContainer.add();
            var flxIntrsitSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxIntrsitSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxIntrsitSeparator.setDefaultUnit(kony.flex.DP);
            flxIntrsitSeparator.add();
            var CopyFlexContainer0h88cf711e64e4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0h88cf711e64e4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0h88cf711e64e4b.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0h88cf711e64e4b.add();
            var flxInTransit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxInTransit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInTransit.setDefaultUnit(kony.flex.DP);
            var lblInTransit = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblInTransit",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "In-Transit",
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
            var flxInTransitValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxInTransitValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a4361c17c35d48d0b0e19b3da6984ffc,
                "right": "2%",
                "skin": "slFbox",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxInTransitValue.setDefaultUnit(kony.flex.DP);
            var imgInTransitValue = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgInTransitValue",
                "isVisible": true,
                "skin": "slImage",
                "src": "checkbox_inactive.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInTransitValue.add(imgInTransitValue);
            var flxCheckContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCheckContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "2%",
                "skin": "slFbox",
                "top": "0",
                "width": "45dp"
            }, {}, {});
            flxCheckContainer.setDefaultUnit(kony.flex.DP);
            var lblCheck = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblCheck",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterUnselected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCheckContainer.add(lblCheck);
            flxInTransit.add(lblInTransit, flxInTransitValue, flxCheckContainer);
            var CopyFlexContainer0aa40f9b59dbf4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0aa40f9b59dbf4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0aa40f9b59dbf4d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0aa40f9b59dbf4d.add();
            var flxArrivalDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxArrivalDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxArrivalDate.setDefaultUnit(kony.flex.DP);
            var calArrivalDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "65%",
                "hour": 0,
                "id": "calArrivalDate",
                "isVisible": true,
                "minutes": 0,
                "placeholder": "----/--/--",
                "right": "15dp",
                "seconds": 0,
                "skin": "sknCalProjectDetails",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var lblArrivalDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblArrivalDate",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Arrival Date",
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
            var flxClearArrival = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClearArrival",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flxClearArrival.setDefaultUnit(kony.flex.DP);
            var imgClearArrival = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "imgClearArrival",
                "isVisible": true,
                "right": "10dp",
                "skin": "slImage",
                "src": "close_icon.png",
                "top": "0",
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearArrival.add(imgClearArrival);
            flxArrivalDate.add(calArrivalDate, lblArrivalDate, flxClearArrival);
            var CopyFlexContainer0cfead114fd8647 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0cfead114fd8647",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cfead114fd8647.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0cfead114fd8647.add();
            var flxDepartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxDepartDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDepartDate.setDefaultUnit(kony.flex.DP);
            var CopylblReportDate0c79a8927344a40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblReportDate0c79a8927344a40",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Depart Date",
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
            var calDepartDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "65%",
                "hour": 0,
                "id": "calDepartDate",
                "isVisible": true,
                "minutes": 0,
                "placeholder": "----/--/--",
                "right": "15dp",
                "seconds": 0,
                "skin": "sknCalProjectDetails",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            var flxClearDeparture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClearDeparture",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0",
                "width": "30dp",
                "zIndex": 10
            }, {}, {});
            flxClearDeparture.setDefaultUnit(kony.flex.DP);
            var imgClearDeparture = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgClearDeparture",
                "isVisible": true,
                "right": "10dp",
                "skin": "slImage",
                "src": "close_icon.png",
                "top": "0",
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearDeparture.add(imgClearDeparture);
            flxDepartDate.add(CopylblReportDate0c79a8927344a40, calDepartDate, flxClearDeparture);
            var CopyFlexContainer0c830fb6760e54d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c830fb6760e54d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c830fb6760e54d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c830fb6760e54d.add();
            var flxArrivalTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxArrivalTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxArrivalTime.setDefaultUnit(kony.flex.DP);
            var CopylblClientOTHours0hc8f4854fe1845 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblClientOTHours0hc8f4854fe1845",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Arrival Time",
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
            var tbxArrivalTime = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxArrivalTime",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 12,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxArrivalTimeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "39.68%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxArrivalTimeValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4.00%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxArrivalTimeValue.setDefaultUnit(kony.flex.DP);
            var CopyimgShiftTo0c1931890aa9040 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgShiftTo0c1931890aa9040",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblArrivalTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblArrivalTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblArrivalDateTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblArrivalDateTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxArrivalTimeValue.add(CopyimgShiftTo0c1931890aa9040, lblArrivalTime, lblArrivalDateTime);
            flxArrivalTime.add(CopylblClientOTHours0hc8f4854fe1845, tbxArrivalTime, flxArrivalTimeValue);
            var CopyFlexContainer0g4656d1033e644 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0g4656d1033e644",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0g4656d1033e644.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g4656d1033e644.add();
            var flxDepartTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxDepartTime",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDepartTime.setDefaultUnit(kony.flex.DP);
            var CopylblClientOTHours0bf65bbab1e9f42 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblClientOTHours0bf65bbab1e9f42",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Depart Time",
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
            var tbxDepartTime = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxDepartTime",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 12,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxDepartTimeValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxDepartTimeValue",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxDepartTimeValue.setDefaultUnit(kony.flex.DP);
            var CopyimgShiftTo0i3a47fc149a54b = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgShiftTo0i3a47fc149a54b",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDepartTime = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDepartTime",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblDepartDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDepartDate",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDepartTimeValue.add(CopyimgShiftTo0i3a47fc149a54b, lblDepartTime, lblDepartDate);
            flxDepartTime.add(CopylblClientOTHours0bf65bbab1e9f42, tbxDepartTime, flxDepartTimeValue);
            var CopyFlexContainer0cc43a8f1c2bb4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0cc43a8f1c2bb4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cc43a8f1c2bb4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0cc43a8f1c2bb4a.add();
            var CopyFlexContainer0fa5f6fc2238748 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0fa5f6fc2238748",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0fa5f6fc2238748.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0fa5f6fc2238748.add();
            var flxComments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxComments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxComments.setDefaultUnit(kony.flex.DP);
            var CopylblClientOTHours0c269f402c51344 = new kony.ui.Label({
                "id": "CopylblClientOTHours0c269f402c51344",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Comments",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "12dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtAreaComments = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "bottom": "10dp",
                "centerX": "50%",
                "focusSkin": "sknTxtAreaActive",
                "height": "110dp",
                "id": "txtAreaComments",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "maxTextLength": 2000,
                "numberOfVisibleLines": 3,
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "sknTxtAreaActive"
            });
            flxComments.add(CopylblClientOTHours0c269f402c51344, txtAreaComments);
            var CopyFlexContainer0c5f3973bab2648 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0c5f3973bab2648",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c5f3973bab2648.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c5f3973bab2648.add();
            flxPersonnelDetailsBody.add(flxReportDate, CopyFlexContainer0ffa55e61907b48, flxEmpName, CopyFlexContainer0jcf82fa28c6a42, flxEmpId, CopyFlexContainer0da13723e43a541, flxJobPosition, CopyFlexContainer0afecd59c988f4a, flxCrewPosition, flxDPRId, CopyFlexContainer0d2abc8918c504e, flxShiftFrom, CopyFlexContainer0bb2579255eb04b, flxShiftTo, CopyFlexContainer0be08aba67e7c4d, flxNormalHours, flxOptionalHeader, CopyFlexContainer0d82e532d185344, flxTRC, flxTRCContainer, CopyFlexContainer0h523a5d4096f43, flxTrcSeparator, flxShiftTypeContainer, CopyFlexContainer0d0c2573ede984d, flxShiftFromOT, CopyFlexContainer0dbe01561a1f34b, flxShiftToOT, CopyFlexContainer0hb756682aba745, CopyFlexContainer0gd57ab7df5dc4d, flxUOMContainer, CopyFlexContainer0i1d62ab2f2e44f, flxDepthContainer, CopyFlexContainer0df4f97dd416a4c, CopyFlexContainer0b0951627a0314c, flxStandByHours, CopyFlexContainer0de805c965aa748, flxOTHours, CopyFlexContainer0jfd66ec007f44e, flxClientOTHours, CopyFlexContainer0eda45d601dae4e, CopyFlexContainer0jbdaff3c11a54a, flxCategory, flxRateSeparator, flxDayrate, CopyFlexContainer0i0c6e88bf09a47, flxDatRate, CopyFlexContainer0g042ca25315343, flxStandbyRate, CopyFlexContainer0c6259dbdb4fe4a, flxNonDiveRate, CopyFlexContainer0f3f4aeaffd4e45, flxProject, flxsep1, flxActitivity, flxsep2, flxSource, flxsep3, flxCategry, flxsep4, flxSubCategory, flxSubCategoryContainer, flxIntrsitSeparator, CopyFlexContainer0h88cf711e64e4b, flxInTransit, CopyFlexContainer0aa40f9b59dbf4d, flxArrivalDate, CopyFlexContainer0cfead114fd8647, flxDepartDate, CopyFlexContainer0c830fb6760e54d, flxArrivalTime, CopyFlexContainer0g4656d1033e644, flxDepartTime, CopyFlexContainer0cc43a8f1c2bb4a, CopyFlexContainer0fa5f6fc2238748, flxComments, CopyFlexContainer0c5f3973bab2648);
            var CopyFlexContainer0g721280c2b3a4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0g721280c2b3a4c",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0g721280c2b3a4c.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g721280c2b3a4c.add();
            var flxProjectDetailsHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxProjectDetailsHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgf0f0f0",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProjectDetailsHeader.setDefaultUnit(kony.flex.DP);
            var lblProjectDetails = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblProjectDetails",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL00263e110",
                "text": "Project Details -",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxProjectDetailsArrow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxProjectDetailsArrow",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5%",
                "skin": "slFbox",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxProjectDetailsArrow.setDefaultUnit(kony.flex.DP);
            var imgProjectDetailsArrow = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgProjectDetailsArrow",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProjectDetailsArrow.add(imgProjectDetailsArrow);
            flxProjectDetailsHeader.add(lblProjectDetails, flxProjectDetailsArrow);
            var CopyFlexContainer0jcf40bcb888c49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0jcf40bcb888c49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0jcf40bcb888c49.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0jcf40bcb888c49.add();
            var flxPersonnelDetailsHorizontalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxPersonnelDetailsHorizontalLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxDBDBDBOp100",
                "top": "2%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPersonnelDetailsHorizontalLine.setDefaultUnit(kony.flex.DP);
            flxPersonnelDetailsHorizontalLine.add();
            var flxProjectDetailsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxProjectDetailsBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProjectDetailsBody.setDefaultUnit(kony.flex.DP);
            var flxSuperVisor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxSuperVisor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSuperVisor.setDefaultUnit(kony.flex.DP);
            var lblSupervisor = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSupervisor",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Supervisor",
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
            var lblSupervisorValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSupervisorValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSupervisorId = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblSupervisorId",
                "isVisible": false,
                "right": "-5%",
                "skin": "sknLbl120333333",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSuperVisor.add(lblSupervisor, lblSupervisorValue, lblSupervisorId);
            var CopyFlexContainer0h00d2bb03cea45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0h00d2bb03cea45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0h00d2bb03cea45.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0h00d2bb03cea45.add();
            var flxProjectManager = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxProjectManager",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProjectManager.setDefaultUnit(kony.flex.DP);
            var lblProjectManager = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProjectManager",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Project Manager",
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
            var lblProjectManagerValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProjectManagerValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblManagerId = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblManagerId",
                "isVisible": false,
                "right": "0%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProjectManager.add(lblProjectManager, lblProjectManagerValue, lblManagerId);
            flxProjectDetailsBody.add(flxSuperVisor, CopyFlexContainer0h00d2bb03cea45, flxProjectManager);
            var flxProjectDetailsHorizontalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2dp",
                "clipBounds": true,
                "height": "1dp",
                "id": "flxProjectDetailsHorizontalLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxDBDBDBOp100",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProjectDetailsHorizontalLine.setDefaultUnit(kony.flex.DP);
            flxProjectDetailsHorizontalLine.add();
            flxBody.add(flxPersonnelDetailsBody, CopyFlexContainer0g721280c2b3a4c, flxProjectDetailsHeader, CopyFlexContainer0jcf40bcb888c49, flxPersonnelDetailsHorizontalLine, flxProjectDetailsBody, flxProjectDetailsHorizontalLine);
            flxMain.add(flxHeader, flxHeaderShadow, flxTopSearchHeader, CopyflxHeaderShadow0a67c2ecaf4e64b, flxBody);
            var flxSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "7%",
                "id": "flxSave",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxSave.setDefaultUnit(kony.flex.DP);
            var flxAddCrew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxAddCrew",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%",
                "zIndex": 2
            }, {}, {});
            flxAddCrew.setDefaultUnit(kony.flex.DP);
            var CopyLabel0bea2cd875bee49 = new kony.ui.Label({
                "centerX": "27%",
                "centerY": "45%",
                "id": "CopyLabel0bea2cd875bee49",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
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
            var Image0c2d1315e3bbe4b = new kony.ui.Image2({
                "centerX": "23%",
                "centerY": "45.00%",
                "height": "25dp",
                "id": "Image0c2d1315e3bbe4b",
                "isVisible": false,
                "left": "10%",
                "skin": "slImage",
                "src": "addbutton.png",
                "top": "18dp",
                "width": "28dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0f68ba8daa2ed48 = new kony.ui.Label({
                "centerY": "45%",
                "id": "Label0f68ba8daa2ed48",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Select Crew",
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
            flxAddCrew.add(CopyLabel0bea2cd875bee49, Image0c2d1315e3bbe4b, Label0f68ba8daa2ed48);
            var flxReset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxReset",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%",
                "zIndex": 2
            }, {}, {});
            flxReset.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ec04fcb5e26b4e = new kony.ui.Label({
                "centerX": "37%",
                "centerY": "45%",
                "id": "CopyLabel0ec04fcb5e26b4e",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
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
            var CopyLabel0cbbc96ed45bf42 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0cbbc96ed45bf42",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
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
            flxReset.add(CopyLabel0ec04fcb5e26b4e, CopyLabel0cbbc96ed45bf42);
            var flxSaveDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSaveDPR",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "30%",
                "zIndex": 2
            }, {}, {});
            flxSaveDPR.setDefaultUnit(kony.flex.DP);
            var CopyLabel0bb74b8c6ff9546 = new kony.ui.Label({
                "centerX": "37%",
                "centerY": "44.96%",
                "id": "CopyLabel0bb74b8c6ff9546",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
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
            var CopyLabel0bd6a7ee701634f = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0bd6a7ee701634f",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
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
            flxSaveDPR.add(CopyLabel0bb74b8c6ff9546, CopyLabel0bd6a7ee701634f);
            flxSave.add(flxAddCrew, flxReset, flxSaveDPR);
            var flxCrewSearchResults = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "86%",
                "id": "flxCrewSearchResults",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx7099b1Op82BorderRd10",
                "top": "13.50%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxCrewSearchResults.setDefaultUnit(kony.flex.DP);
            var flxSegContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSegContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0c38a30884b3944",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSegContainer.setDefaultUnit(kony.flex.DP);
            var FlexContainer0b558c498168349 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "FlexContainer0b558c498168349",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            FlexContainer0b558c498168349.setDefaultUnit(kony.flex.DP);
            var lblResultcount = new kony.ui.Label({
                "centerX": "33%",
                "centerY": "50%",
                "id": "lblResultcount",
                "isVisible": false,
                "skin": "CopydefLabel0ff3313962e6147",
                "text": "0 of ",
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
            var lblTotalCount = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTotalCount",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0ff3313962e6147",
                "text": "0 results found",
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
            FlexContainer0b558c498168349.add(lblResultcount, lblTotalCount);
            var segCrewSearchResults = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "lblCheck": "",
                    "lblValue": ""
                }],
                "groupCells": false,
                "height": "94%",
                "id": "segCrewSearchResults",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegmentBgfafafa",
                "rowTemplate": "flxTempFilters",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "6%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckContainer": "flxCheckContainer",
                    "flxLine": "flxLine",
                    "flxOrgSearchBox": "flxOrgSearchBox",
                    "flxTempFilters": "flxTempFilters",
                    "flxcheck": "flxcheck",
                    "lblCheck": "lblCheck",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegContainer.add(FlexContainer0b558c498168349, segCrewSearchResults);
            var flxNoResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxNoResult",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNoResult.setDefaultUnit(kony.flex.DP);
            var Label0j38509d11ae543 = new kony.ui.Label({
                "bottom": 0,
                "centerX": "50%",
                "id": "Label0j38509d11ae543",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0f11fb0cd98ac42",
                "text": "No results found",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var Image0b3b6772d6ebd45 = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "100dp",
                "id": "Image0b3b6772d6ebd45",
                "isVisible": true,
                "left": "94dp",
                "skin": "slImage",
                "src": "norresult.png",
                "top": "0dp",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNoResult.add(Label0j38509d11ae543, Image0b3b6772d6ebd45);
            var flxCancelSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6%",
                "id": "flxCancelSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": 0,
                "width": "70dp",
                "zIndex": 5
            }, {}, {});
            flxCancelSearch.setDefaultUnit(kony.flex.DP);
            var Image0a22a7d7da82e46 = new kony.ui.Image2({
                "height": "100%",
                "id": "Image0a22a7d7da82e46",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "cancel.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Label0c503af4265ca45 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0c503af4265ca45",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0eeba330faa5948",
                "text": "",
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
            flxCancelSearch.add(Image0a22a7d7da82e46, Label0c503af4265ca45);
            flxCrewSearchResults.add(flxSegContainer, flxNoResult, flxCancelSearch);
            var flxExistingCrew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "85%",
                "id": "flxExistingCrew",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx7099b1Op82BorderRd10",
                "top": "14%",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxExistingCrew.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0daf744665c6d45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "CopyFlexContainer0daf744665c6d45",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0daf744665c6d45.setDefaultUnit(kony.flex.DP);
            var CopylblResultcount0j7a87d6c0b5c4b = new kony.ui.Label({
                "centerX": "33%",
                "centerY": "50%",
                "id": "CopylblResultcount0j7a87d6c0b5c4b",
                "isVisible": false,
                "skin": "CopydefLabel0ff3313962e6147",
                "text": "0 of ",
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
            var lblTotalCrews = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTotalCrews",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0ff3313962e6147",
                "text": "0 results found",
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
            CopyFlexContainer0daf744665c6d45.add(CopylblResultcount0j7a87d6c0b5c4b, lblTotalCrews);
            var flxSegExisting = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "93%",
                "horizontalScrollIndicator": true,
                "id": "flxSegExisting",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0c38a30884b3944",
                "top": "6%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxSegExisting.setDefaultUnit(kony.flex.DP);
            var existingCrew = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "lblCheck": "",
                    "lblValue": "Value"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "existingCrew",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegmentBgfafafa",
                "rowTemplate": "flxTempFilters",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0dp",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckContainer": "flxCheckContainer",
                    "flxLine": "flxLine",
                    "flxOrgSearchBox": "flxOrgSearchBox",
                    "flxTempFilters": "flxTempFilters",
                    "flxcheck": "flxcheck",
                    "lblCheck": "lblCheck",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSegExisting.add(existingCrew);
            var flxNoResultExisting = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "45%",
                "clipBounds": true,
                "height": "149dp",
                "id": "flxNoResultExisting",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNoResultExisting.setDefaultUnit(kony.flex.DP);
            var CopyLabel0j844b8c7462748 = new kony.ui.Label({
                "bottom": 0,
                "centerX": "50%",
                "id": "CopyLabel0j844b8c7462748",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0f11fb0cd98ac42",
                "text": "No results found",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyImage0b5928d4ff2bb4c = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "100dp",
                "id": "CopyImage0b5928d4ff2bb4c",
                "isVisible": true,
                "left": "94dp",
                "skin": "slImage",
                "src": "norresult.png",
                "top": "0dp",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNoResultExisting.add(CopyLabel0j844b8c7462748, CopyImage0b5928d4ff2bb4c);
            var flxCancelExisting = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6%",
                "id": "flxCancelExisting",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": 0,
                "width": "70dp",
                "zIndex": 5
            }, {}, {});
            flxCancelExisting.setDefaultUnit(kony.flex.DP);
            var CopyImage0b7db1dd6484648 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyImage0b7db1dd6484648",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "cancel.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopyLabel0adf540cfd3954c = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopyLabel0adf540cfd3954c",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0eeba330faa5948",
                "text": "",
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
            flxCancelExisting.add(CopyImage0b7db1dd6484648, CopyLabel0adf540cfd3954c);
            flxExistingCrew.add(CopyFlexContainer0daf744665c6d45, flxSegExisting, flxNoResultExisting, flxCancelExisting);
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
                "src": "loading.gif",
                "width": "30%",
                "zIndex": 15
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoading);
            var category = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "category",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Category"
                    },
                    "listboxData": {
                        "isVisible": false,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 10,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var project = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "project",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Project"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var activity = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "activity",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Activity"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var sourceType = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "sourceType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Source Type"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var shiftType = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "shiftType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Shift Type"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "Value"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var UOM = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "UOM",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "UOM"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "Value"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var crewPosition = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "crewPosition",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "bottom": 25,
                        "height": "275dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxTopHeader": {
                        "height": "70dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Crew Positions"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "Value"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxJobSearchPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxJobSearchPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f4fc07f7ea0e43",
                "top": "0",
                "width": "100%",
                "zIndex": 16
            }, {}, {});
            flxJobSearchPopUp.setDefaultUnit(kony.flex.DP);
            var flxContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0f8b65daaa14246",
                "top": "0",
                "width": "96%"
            }, {}, {});
            flxContainer.setDefaultUnit(kony.flex.DP);
            var flxJobPositionHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "9%",
                "id": "flxJobPositionHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ae3fde28301c4d",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxJobPositionHeader.setDefaultUnit(kony.flex.DP);
            var Label0a84e714b1be242 = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0a84e714b1be242",
                "isVisible": true,
                "left": 10,
                "skin": "CopydefLabel0d7b3541d124b49",
                "text": "Job Postion",
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
            var imgCross = new kony.ui.Image2({
                "height": "100%",
                "id": "imgCross",
                "isVisible": true,
                "right": 0,
                "skin": "slImage",
                "src": "imgclose.png",
                "top": "0",
                "width": "17%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxJobPositionHeader.add(Label0a84e714b1be242, imgCross);
            var flxSearchContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxSearchContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBorderd1d1d110pxRd",
                "top": "1%",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            flxSearchContainer.setDefaultUnit(kony.flex.DP);
            var txtSearchjob = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtFont107Col333",
                "height": "100%",
                "id": "txtSearchjob",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "placeholder": "Ex: manager",
                "secureTextEntry": false,
                "skin": "sknTxtFont107Col333",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "85%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
                "placeholderSkin": "sknSearchTxtBoxPlaceHolder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxSearchjob = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopysknFlxFFFFFFOp0ga346eef15a440",
                "height": "100%",
                "id": "flxSearchjob",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopysknFlxFFFFFFOp0eebd82e9e18747",
                "width": "15%",
                "zIndex": 2
            }, {}, {});
            flxSearchjob.setDefaultUnit(kony.flex.DP);
            var imgSearch = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "70%",
                "id": "imgSearch",
                "isVisible": true,
                "skin": "slImage",
                "src": "search_icon.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSearchjob.add(imgSearch);
            flxSearchContainer.add(txtSearchjob, flxSearchjob);
            var segJobPosition = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "lblCheck": "",
                    "lblValue": "Value"
                }],
                "groupCells": false,
                "height": "82%",
                "id": "segJobPosition",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegmentBgfafafa",
                "rowTemplate": "flxTempFilters",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "1%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxCheckContainer": "flxCheckContainer",
                    "flxLine": "flxLine",
                    "flxOrgSearchBox": "flxOrgSearchBox",
                    "flxTempFilters": "flxTempFilters",
                    "flxcheck": "flxcheck",
                    "lblCheck": "lblCheck",
                    "lblValue": "lblValue"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoJobResult = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "150dp",
                "id": "flxNoJobResult",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNoJobResult.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c5192827fb5d47 = new kony.ui.Label({
                "bottom": 0,
                "centerX": "50%",
                "id": "CopyLabel0c5192827fb5d47",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0f11fb0cd98ac42",
                "text": "No results found",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "80dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyImage0e7e9eac464924c = new kony.ui.Image2({
                "centerX": "50.00%",
                "height": "100dp",
                "id": "CopyImage0e7e9eac464924c",
                "isVisible": true,
                "left": "94dp",
                "skin": "slImage",
                "src": "norresult.png",
                "top": "0dp",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxNoJobResult.add(CopyLabel0c5192827fb5d47, CopyImage0e7e9eac464924c);
            flxContainer.add(flxJobPositionHeader, flxSearchContainer, segJobPosition, flxNoJobResult);
            flxJobSearchPopUp.add(flxContainer);
            var flxTimeContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxTimeContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d50982a72c584c",
                "top": "0",
                "width": "100%",
                "zIndex": 10
            }, {}, {});
            flxTimeContainer.setDefaultUnit(kony.flex.DP);
            flxTimeContainer.add();
            var SegTRC = new com.oceaneering.listboxTRC({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "SegTRC",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "listboxTRC": {
                        "isVisible": false,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var subCategory = new com.oceaneering.listboxTRC({
                "bottom": 0,
                "clipBounds": true,
                "height": "100%",
                "id": "subCategory",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "lblFilters": {
                        "text": "Sub Category"
                    },
                    "listboxTRC": {
                        "bottom": 0,
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": "viz.val_cleared",
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var shiftTo = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "shiftTo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            shiftTo.bgColor = "";
            shiftTo.hoursView = false;
            shiftTo.time = "";
            shiftTo.invokeByDefault = true;
            var shiftFromOT = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "shiftFromOT",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            shiftFromOT.bgColor = "";
            shiftFromOT.hoursView = false;
            shiftFromOT.time = "";
            shiftFromOT.invokeByDefault = true;
            var shiftToOT = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "shiftToOT",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            shiftToOT.bgColor = "";
            shiftToOT.hoursView = false;
            shiftToOT.time = "";
            shiftToOT.invokeByDefault = true;
            var arrivalTime = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "arrivalTime",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            arrivalTime.bgColor = "";
            arrivalTime.hoursView = false;
            arrivalTime.time = "";
            arrivalTime.invokeByDefault = true;
            var departTime = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "departTime",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            departTime.bgColor = "";
            departTime.hoursView = false;
            departTime.time = "";
            departTime.invokeByDefault = true;
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
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "7%",
                "width": "100.00%"
            }, {}, {});
            flxLabel.setDefaultUnit(kony.flex.DP);
            var lblSaved = new kony.ui.Label({
                "id": "lblSaved",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefLabel0a64fd884b1db41",
                "text": " Saved Successfully",
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
            var shiftFrom = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "shiftFrom",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            shiftFrom.bgColor = "";
            shiftFrom.hoursView = false;
            shiftFrom.time = "";
            shiftFrom.invokeByDefault = true;
            var dprlist = new com.oceaneering.listboxDPR({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "dprlist",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "DPR's"
                    },
                    "listboxDPR": {
                        "isVisible": false,
                        "zIndex": 15
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            this.add(flxMain, flxSave, flxCrewSearchResults, flxExistingCrew, flxLoading, category, project, activity, sourceType, shiftType, UOM, crewPosition, flxJobSearchPopUp, flxTimeContainer, SegTRC, subCategory, shiftTo, shiftFromOT, shiftToOT, arrivalTime, departTime, flxSuccessStatus, shiftFrom, dprlist);
        };
        return [{
            "addWidgets": addWidgetsfrmCreateDPR,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmCreateDPR",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_df53f923e9ad44b2ba7c52915ca78c17,
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