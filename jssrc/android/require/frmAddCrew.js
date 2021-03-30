define("frmAddCrew", function() {
    return function(controller) {
        function addWidgetsfrmAddCrew() {
            this.setDefaultUnit(kony.flex.DP);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "93%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxBgf0f0f0",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7.50%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
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
                "onClick": controller.AS_FlexContainer_c26f66396c174e1996027f6f7a3db69e,
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
                "width": kony.flex.USE_PREFFERED_SIZE
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
                "text": "Add Crew",
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
            var flxHeaderShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.50%",
                "id": "flxHeaderShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "0%",
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
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxOp0bf984b92ef9144",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxBody.setDefaultUnit(kony.flex.DP);
            var flxPersonnelDetailsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxPersonnelDetailsBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxPersonnelDetailsBody.setDefaultUnit(kony.flex.DP);
            var flxCrewSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "1%",
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxCrewSearch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBorderd0a100c3632dba4e",
                "top": "1%",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            flxCrewSearch.setDefaultUnit(kony.flex.DP);
            var txtCrewSearch = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtFont107Col333",
                "height": "100%",
                "id": "txtCrewSearch",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "onDone": controller.AS_TextField_i846a022893c4088a4b93a31e2e05637,
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
                "width": "0.30%"
            }, {}, {});
            CopyFlexContainer0ecb078ca7b5241.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ecb078ca7b5241.add();
            var flxImgSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopysknFlxFFFFFFOp0b7c214167c0549",
                "height": "100%",
                "id": "flxImgSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopysknFlxFFFFFFOp0h0f5885a2ca44b",
                "width": "11%",
                "zIndex": 2
            }, {}, {});
            flxImgSearch.setDefaultUnit(kony.flex.DP);
            var imgSearchIcon = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "45%",
                "height": "70%",
                "id": "imgSearchIcon",
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
            flxImgSearch.add(imgSearchIcon);
            flxCrewSearch.add(txtCrewSearch, CopyFlexContainer0ecb078ca7b5241, flxImgSearch);
            var flxHeaderPersonnel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderPersonnel",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxHeaderPersonnel.setDefaultUnit(kony.flex.DP);
            var lblProjectTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblProjectTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL00263e110",
                "text": "Required",
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
            var lblEmplName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmplName",
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
            flxHeaderPersonnel.add(lblProjectTitle, lblEmplName);
            var flxName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxName.setDefaultUnit(kony.flex.DP);
            var lblNameValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNameValue",
                "isVisible": true,
                "right": "5%",
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
            var CopyflxActivityBox0cadb57782de847 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0cadb57782de847",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0cadb57782de847.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblName",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
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
            var CopylbCountryAsterisk0g248c7e74e5a40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0g248c7e74e5a40",
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
            CopyflxActivityBox0cadb57782de847.add(lblName, CopylbCountryAsterisk0g248c7e74e5a40);
            flxName.add(lblNameValue, CopyflxActivityBox0cadb57782de847);
            var FlexContainer0cc930f2aae2d46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "FlexContainer0cc930f2aae2d46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            FlexContainer0cc930f2aae2d46.setDefaultUnit(kony.flex.DP);
            FlexContainer0cc930f2aae2d46.add();
            var CopyFlexContainer0jbac4fcf0e374f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0jbac4fcf0e374f",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0jbac4fcf0e374f.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0jbac4fcf0e374f.add();
            var flxEmployeeID = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEmployeeID",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEmployeeID.setDefaultUnit(kony.flex.DP);
            var lblEmpIDValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEmpIDValue",
                "isVisible": true,
                "right": "5%",
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
            var flxActivityBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxActivityBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            flxActivityBox.setDefaultUnit(kony.flex.DP);
            var lblEmpidHEader = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "lblEmpidHEader",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
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
            flxEmployeeID.add(lblEmpIDValue, flxActivityBox);
            var CopyFlexContainer0caed1f601f5d47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0caed1f601f5d47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0caed1f601f5d47.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0caed1f601f5d47.add();
            var flxJobPosition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxJobPosition",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxJobPosition.setDefaultUnit(kony.flex.DP);
            var flxJobPositionCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxJobPositionCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "60%",
                "zIndex": 1
            }, {}, {});
            flxJobPositionCon.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0g205c6ed2ab14c = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0g205c6ed2ab14c",
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
            var lblJobPositionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblJobPositionValue",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblJobPositionCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblJobPositionCode",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxJobPositionCon.add(CopyimgArrow0g205c6ed2ab14c, lblJobPositionValue, lblJobPositionCode);
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
            var CopylblNormalHours0a5b9e434567f49 = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "CopylblNormalHours0a5b9e434567f49",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
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
            CopyflxActivityBox0a3f74fe012d646.add(CopylblNormalHours0a5b9e434567f49, CopylbCountryAsterisk0h01b6ffc98ba4c);
            flxJobPosition.add(flxJobPositionCon, CopyflxActivityBox0a3f74fe012d646);
            var CopyFlexContainer0ff02b0b4ac4243 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ff02b0b4ac4243",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ff02b0b4ac4243.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ff02b0b4ac4243.add();
            var flxCrewPosition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCrewPosition",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCrewPosition.setDefaultUnit(kony.flex.DP);
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
            var CopylblNormalHours0ec2c483e848644 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0ec2c483e848644",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
                "text": "Crew Position",
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
            CopyflxActivityBox0f02b455453e74f.add(CopylblNormalHours0ec2c483e848644, CopylbCountryAsterisk0ac988b74963349);
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
                "width": "60%",
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
            var lblCrewPositionValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewPositionValue",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
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
            var lblCrewPositionId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewPositionId",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
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
            flxCrewPositionDown.add(CopyimgArrow0a2f62a73d1f143, lblCrewPositionValue, lblCrewPositionId);
            flxCrewPosition.add(CopyflxActivityBox0f02b455453e74f, flxCrewPositionDown);
            var CopyflxHeaderPersonnel0ifac55a504a044 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "CopyflxHeaderPersonnel0ifac55a504a044",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            CopyflxHeaderPersonnel0ifac55a504a044.setDefaultUnit(kony.flex.DP);
            var CopylblProjectTitle0ba0b40cc2ac340 = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "CopylblProjectTitle0ba0b40cc2ac340",
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
            var CopylblEmplName0c4055fac2a614e = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "CopylblEmplName0c4055fac2a614e",
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
            CopyflxHeaderPersonnel0ifac55a504a044.add(CopylblProjectTitle0ba0b40cc2ac340, CopylblEmplName0c4055fac2a614e);
            var CopyFlexContainer0gedbb79f76e246 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0gedbb79f76e246",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0gedbb79f76e246.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0gedbb79f76e246.add();
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
            var fllxDayHourRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "fllxDayHourRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            fllxDayHourRate.setDefaultUnit(kony.flex.DP);
            var lblDayHourRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDayHourRate",
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
            var txtDayHourRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtDayHourRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            fllxDayHourRate.add(lblDayHourRate, txtDayHourRate);
            var CopyFlexContainer0d06f83c0ce4646 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d06f83c0ce4646",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d06f83c0ce4646.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d06f83c0ce4646.add();
            var flxOTRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxOTRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxOTRate.setDefaultUnit(kony.flex.DP);
            var lblOTRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOTRate",
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
            var txtOTRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtOTRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxOTRate.add(lblOTRate, txtOTRate);
            var CopyFlexContainer0e713c60845bc44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e713c60845bc44",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e713c60845bc44.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e713c60845bc44.add();
            var flxStandByRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxStandByRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStandByRate.setDefaultUnit(kony.flex.DP);
            var lblStandByRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStandByRate",
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
            var txtStandByRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtStandByRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "5.00%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxStandByRate.add(lblStandByRate, txtStandByRate);
            var CopyFlexContainer0a1577bd342874e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0a1577bd342874e",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0a1577bd342874e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0a1577bd342874e.add();
            var flxNonDiveRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
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
            var lblNonDriveRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNonDriveRate",
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
            var txtNonDiveRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtNonDiveRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxNonDiveRate.add(lblNonDriveRate, txtNonDiveRate);
            var CopyFlexContainer0hdb68864a86b4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0hdb68864a86b4a",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0hdb68864a86b4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0hdb68864a86b4a.add();
            var CopyFlexContainer0bba32823f29b46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0bba32823f29b46",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0bba32823f29b46.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0bba32823f29b46.add();
            var flxArrivalDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
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
            var cldArrivalDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "75%",
                "hour": 0,
                "id": "cldArrivalDate",
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
                "height": "30dp",
                "id": "imgClearArrival",
                "isVisible": true,
                "right": "2%",
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
            flxArrivalDate.add(lblArrivalDate, cldArrivalDate, flxClearArrival);
            var CopyFlexContainer0g129242b5e5f47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0g129242b5e5f47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0g129242b5e5f47.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g129242b5e5f47.add();
            var flxDepartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
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
            var lblDepartDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDepartDate",
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
            var cldDepartDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "75%",
                "hour": 0,
                "id": "cldDepartDate",
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
            var imgClearDepart = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "30dp",
                "id": "imgClearDepart",
                "isVisible": true,
                "right": "2%",
                "skin": "slImage",
                "src": "close_icon.png",
                "top": "0",
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxClearDeparture.add(imgClearDepart);
            flxDepartDate.add(lblDepartDate, cldDepartDate, flxClearDeparture);
            var CopyFlexContainer0b760707dfaa94e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0b760707dfaa94e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0b760707dfaa94e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0b760707dfaa94e.add();
            flxPersonnelDetailsBody.add(flxCrewSearch, flxHeaderPersonnel, flxName, FlexContainer0cc930f2aae2d46, CopyFlexContainer0jbac4fcf0e374f, flxEmployeeID, CopyFlexContainer0caed1f601f5d47, flxJobPosition, CopyFlexContainer0ff02b0b4ac4243, flxCrewPosition, CopyflxHeaderPersonnel0ifac55a504a044, CopyFlexContainer0gedbb79f76e246, CopyFlexContainer0d82e532d185344, fllxDayHourRate, CopyFlexContainer0d06f83c0ce4646, flxOTRate, CopyFlexContainer0e713c60845bc44, flxStandByRate, CopyFlexContainer0a1577bd342874e, flxNonDiveRate, CopyFlexContainer0hdb68864a86b4a, CopyFlexContainer0bba32823f29b46, flxArrivalDate, CopyFlexContainer0g129242b5e5f47, flxDepartDate, CopyFlexContainer0b760707dfaa94e);
            flxBody.add(flxPersonnelDetailsBody);
            var flxFooter = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "clipBounds": true,
                "height": "9%",
                "id": "flxFooter",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0c4551dedb1af4b",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFooter.setDefaultUnit(kony.flex.DP);
            var btnSave = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtnAddProject",
                "height": "70%",
                "id": "btnSave",
                "isVisible": true,
                "left": "10%",
                "skin": "sknBtnAddProject",
                "text": "Save",
                "top": "1dp",
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknBtn949494FontFFFFFFRounded",
                "height": "70%",
                "id": "btnCancel",
                "isVisible": true,
                "right": "10%",
                "skin": "sknBtn949494FontFFFFFFRounded",
                "text": "Cancel",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFooter.add(btnSave, btnCancel);
            flxMain.add(flxHeader, flxHeaderShadow, flxBody, flxFooter);
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
                "zIndex": 2,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "60%"
                    },
                    "flxFilterCross": {
                        "right": "10dp",
                        "width": "50dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Crew Position"
                    },
                    "listboxData": {
                        "isVisible": false
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
                "zIndex": 15
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
                "onDone": controller.AS_TextField_b9f79743952548a383185fb311bdc574,
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
                "onRowClick": controller.AS_Segment_b2e5ab91b5f44aed8d7b44fe1b765ed0,
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
            flxContainer.add(flxJobPositionHeader, flxSearchContainer, segJobPosition, flxNoResult);
            flxJobSearchPopUp.add(flxContainer);
            var flxTRCCodes = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "5dp",
                "clipBounds": true,
                "id": "flxTRCCodes",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d3f84b5bfb7046",
                "top": 3,
                "width": "100%"
            }, {}, {});
            flxTRCCodes.setDefaultUnit(kony.flex.DP);
            var lblTRC1 = new kony.ui.Label({
                "id": "lblTRC1",
                "isVisible": true,
                "left": "8%",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0caa4f27fb2ec48",
                "text": "REG",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0dp",
                "width": "26%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [2, 1, 2, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTRc2 = new kony.ui.Label({
                "id": "lblTRc2",
                "isVisible": true,
                "left": "3%",
                "right": "3%",
                "skin": "CopydefLabel0caa4f27fb2ec48",
                "text": "REG",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": "26%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [2, 1, 2, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTRC3 = new kony.ui.Label({
                "id": "lblTRC3",
                "isVisible": true,
                "left": "0%",
                "skin": "CopydefLabel0caa4f27fb2ec48",
                "text": "REG",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "26%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [2, 1, 2, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTRCCodes.add(lblTRC1, lblTRc2, lblTRC3);
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
                "zIndex": 1
            }, {}, {});
            flxSave.setDefaultUnit(kony.flex.DP);
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
                "width": "50%"
            }, {}, {});
            flxReset.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ec04fcb5e26b4e = new kony.ui.Label({
                "centerX": "40%",
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
                "width": "50%"
            }, {}, {});
            flxSaveDPR.setDefaultUnit(kony.flex.DP);
            var CopyLabel0bb74b8c6ff9546 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
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
            flxSave.add(flxReset, flxSaveDPR);
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
            var flxCrewSearchResults = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "84.71%",
                "id": "flxCrewSearchResults",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx7099b1Op82BorderRd10",
                "top": "15%",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxCrewSearchResults.setDefaultUnit(kony.flex.DP);
            var CopyflxHeaderShadow0d25f81c297d64b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.70%",
                "id": "CopyflxHeaderShadow0d25f81c297d64b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "-0.20%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            CopyflxHeaderShadow0d25f81c297d64b.setDefaultUnit(kony.flex.DP);
            CopyflxHeaderShadow0d25f81c297d64b.add();
            var flxNoReults = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNoReults",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxNoReults.setDefaultUnit(kony.flex.DP);
            var lblNoResults = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblNoResults",
                "isVisible": true,
                "left": "87dp",
                "skin": "sknLblSize1007099b1",
                "text": "Sorry! No results found, please refine your search criteria. ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "60dp",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNoReults.add(lblNoResults);
            var flxSegContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "centerX": "50.00%",
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
                "height": "6%",
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
                "left": 0,
                "skin": "CopydefLabel0ff3313962e6147",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
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
                "skin": "CopydefLabel0ff3313962e6147",
                "text": "0 results found",
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
                "onRowClick": controller.AS_Segment_f75d3dff33764b7daf459fb19f3ad2ca,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "sknSegmentBgfafafa",
                "rowTemplate": "flxTempFilters",
                "scrollingEvents": {
                    "onReachingEnd": controller.AS_Segment_af5e01ab40d64d8ea6aa54b4f5ff3918
                },
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
            var flxCancelSearch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6%",
                "id": "flxCancelSearch",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0a60af1962ff241",
                "top": 0,
                "width": "60dp",
                "zIndex": 5
            }, {}, {});
            flxCancelSearch.setDefaultUnit(kony.flex.DP);
            var Image0a22a7d7da82e46 = new kony.ui.Image2({
                "height": "100%",
                "id": "Image0a22a7d7da82e46",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "cross_icon.png",
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
            flxCrewSearchResults.add(CopyflxHeaderShadow0d25f81c297d64b, flxNoReults, flxSegContainer, flxCancelSearch);
            this.add(flxMain, flxLoading, crewPosition, flxJobSearchPopUp, flxTRCCodes, flxSave, flxSuccessStatus, flxCrewSearchResults);
        };
        return [{
            "addWidgets": addWidgetsfrmAddCrew,
            "allowVerticalBounce": false,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmAddCrew",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_ge49cec6ee5b41578e19d9ada274821a,
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
            "onDeviceBack": controller.AS_Form_eb344c897c284aa7bfbfc6f65544ce07,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});