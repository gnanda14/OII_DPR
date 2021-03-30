define("frmCrewProject", function() {
    return function(controller) {
        function addWidgetsfrmCrewProject() {
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
                "skin": "CopysknFlxBgf0ec4d244391d846",
                "top": "0%",
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
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "10dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_fe1a332ffd0644be8e4e9f8381b9f114,
                "skin": "slFbox",
                "width": "35dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var lblBack = new kony.ui.Label({
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
                "text": "Project Details",
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
                "top": "6.90%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeaderShadow.setDefaultUnit(kony.flex.DP);
            flxHeaderShadow.add();
            var flxNavMenu = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "7%",
                "id": "flxNavMenu",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxDPRSelected0i5fb110d055a4a",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxNavMenu.setDefaultUnit(kony.flex.DP);
            var flxDprSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2%",
                "id": "flxDprSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0i9372d81ac4546",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDprSeparator.setDefaultUnit(kony.flex.DP);
            flxDprSeparator.add();
            var flxDPRContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDPRContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxDPRContainer.setDefaultUnit(kony.flex.DP);
            var flxProjectDetailsTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxProjectDetailsTab",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxProjectDetailsTab.setDefaultUnit(kony.flex.DP);
            var imgproject = new kony.ui.Image2({
                "bottom": "5%",
                "centerX": "50%",
                "height": "45%",
                "id": "imgproject",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "projectdetailssel.png",
                "top": 5,
                "width": "30%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblproject = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblproject",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblSelectedBottom",
                "text": "Project Details",
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
            flxProjectDetailsTab.add(imgproject, lblproject);
            var flxFAB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxFAB",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "50%"
            }, {}, {});
            flxFAB.setDefaultUnit(kony.flex.DP);
            var imgadddprcrew = new kony.ui.Image2({
                "centerX": "49.94%",
                "height": "50%",
                "id": "imgadddprcrew",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "adddpr.png",
                "top": "5dp",
                "width": "50%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBottomNavAdd = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblBottomNavAdd",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblDashboardNormal",
                "text": "Add Timesheet",
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
            flxFAB.add(imgadddprcrew, lblBottomNavAdd);
            flxDPRContainer.add(flxProjectDetailsTab, flxFAB);
            flxNavMenu.add(flxDprSeparator, flxDPRContainer);
            var flxHeaderDownTop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "0.50%",
                "id": "flxHeaderDownTop",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxMultiGradientBlackShadow",
                "top": "7%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxHeaderDownTop.setDefaultUnit(kony.flex.DP);
            flxHeaderDownTop.add();
            var flxProjectDetailsBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "83%",
                "horizontalScrollIndicator": true,
                "id": "flxProjectDetailsBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknScrllFlxEBEBEBOp0a395bd5e854c4f",
                "top": "8%",
                "verticalScrollIndicator": false,
                "width": "96%",
                "zIndex": 2
            }, {}, {});
            flxProjectDetailsBody.setDefaultUnit(kony.flex.DP);
            var flxProjectId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxProjectId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProjectId.setDefaultUnit(kony.flex.DP);
            var lblProjectIdValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblProjectIdValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "maxWidth": "50%",
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxActivityBox0b87411307df848 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0b87411307df848",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0b87411307df848.setDefaultUnit(kony.flex.DP);
            var lblProjectId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProjectId",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Project ID",
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
            var CopylbCountryAsterisk0b43cf7e5a5ca4d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0b43cf7e5a5ca4d",
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
            CopyflxActivityBox0b87411307df848.add(lblProjectId, CopylbCountryAsterisk0b43cf7e5a5ca4d);
            flxProjectId.add(lblProjectIdValue, CopyflxActivityBox0b87411307df848);
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
            var flxCountry = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCountry",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCountry.setDefaultUnit(kony.flex.DP);
            var flxCountryBox = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCountryBox",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            flxCountryBox.setDefaultUnit(kony.flex.DP);
            var lblCountry = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCountry",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Country",
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
            var lbCountryAsterisk = new kony.ui.Label({
                "centerY": "50%",
                "id": "lbCountryAsterisk",
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
            flxCountryBox.add(lblCountry, lbCountryAsterisk);
            var flxCountryPop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxCountryPop",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxCountryPop.setDefaultUnit(kony.flex.DP);
            var imgArrowDown = new kony.ui.Image2({
                "height": "100%",
                "id": "imgArrowDown",
                "isVisible": false,
                "right": "0%",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "18dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCountryValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCountryValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5dp",
                "skin": "sknLblProjectDescValue",
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
            var lblCountryId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCountryId",
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
            var lblCountryCode = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCountryCode",
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
            flxCountryPop.add(imgArrowDown, lblCountryValue, lblCountryId, lblCountryCode);
            flxCountry.add(flxCountryBox, flxCountryPop);
            var CopyFlexContainer0j07eeae9562142 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0j07eeae9562142",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0j07eeae9562142.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0j07eeae9562142.add();
            var flxRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRate.setDefaultUnit(kony.flex.DP);
            var flxRateDropDown = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxRateDropDown",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "top": "0",
                "width": "70%"
            }, {}, {});
            flxRateDropDown.setDefaultUnit(kony.flex.DP);
            var CopyimgDropDown0g79cee36bfd349 = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "CopyimgDropDown0g79cee36bfd349",
                "isVisible": false,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "6dp",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRateSelected = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRateSelected",
                "isVisible": true,
                "left": "0",
                "right": "5dp",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRateDropDown.add(CopyimgDropDown0g79cee36bfd349, lblRateSelected);
            var CopyflxActivityBox0a2cb098d875442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0a2cb098d875442",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0a2cb098d875442.setDefaultUnit(kony.flex.DP);
            var lblRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRate",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Rate",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0a724c2bf6afc44 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0a724c2bf6afc44",
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
            CopyflxActivityBox0a2cb098d875442.add(lblRate, CopylbCountryAsterisk0a724c2bf6afc44);
            flxRate.add(flxRateDropDown, CopyflxActivityBox0a2cb098d875442);
            var CopyFlexContainer0aa00c5a2a37c4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0aa00c5a2a37c4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0aa00c5a2a37c4d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0aa00c5a2a37c4d.add();
            var flxServiceLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxServiceLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxServiceLine.setDefaultUnit(kony.flex.DP);
            var flxSeviceLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxSeviceLine",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "top": "0",
                "width": "70%"
            }, {}, {});
            flxSeviceLine.setDefaultUnit(kony.flex.DP);
            var imgDepartment = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgDepartment",
                "isVisible": false,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "6dp",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblServiceLine = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblServiceLine",
                "isVisible": true,
                "left": "0",
                "right": "5dp",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSeviceLine.add(imgDepartment, lblServiceLine);
            var CopyflxActivityBox0a11a6c104f3144 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0a11a6c104f3144",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0a11a6c104f3144.setDefaultUnit(kony.flex.DP);
            var CopylblRate0b47157902b464b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblRate0b47157902b464b",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Department",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0jc27cfd8769c49 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0jc27cfd8769c49",
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
            CopyflxActivityBox0a11a6c104f3144.add(CopylblRate0b47157902b464b, CopylbCountryAsterisk0jc27cfd8769c49);
            flxServiceLine.add(flxSeviceLine, CopyflxActivityBox0a11a6c104f3144);
            var CopyFlexContainer0d82e532d185344 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0d82e532d185344",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknLblSectionSeparator",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d82e532d185344.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d82e532d185344.add();
            var flxActivity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxActivity",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivity.setDefaultUnit(kony.flex.DP);
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
            var lblActivity = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActivity",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLbl333333100",
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
            flxActivityBox.add(lblActivity, CopylbCountryAsterisk0a2b203c5af4941);
            var flxActivityDropDown = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "90%",
                "id": "flxActivityDropDown",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "top": "0",
                "width": "70%"
            }, {}, {});
            flxActivityDropDown.setDefaultUnit(kony.flex.DP);
            var imgDropDown = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "imgDropDown",
                "isVisible": false,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "6dp",
                "width": "18dp",
                "zIndex": 3
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblActivitySelected = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblActivitySelected",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 2,
                "right": "5dp",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": "85%"
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
                "left": "0",
                "maxNumberOfLines": 2,
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": "85%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxActivityDropDown.add(imgDropDown, lblActivitySelected, lblActivityId);
            flxActivity.add(flxActivityBox, flxActivityDropDown);
            var CopyFlexContainer0d95bb2715eb64e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d95bb2715eb64e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d95bb2715eb64e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d95bb2715eb64e.add();
            var flxManager = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxManager",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxManager.setDefaultUnit(kony.flex.DP);
            var lblManager = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblManager",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
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
            var lblManagerValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblManagerValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
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
            flxManager.add(lblManager, lblManagerValue);
            var CopyFlexContainer0afc9547e650d44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0afc9547e650d44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0afc9547e650d44.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0afc9547e650d44.add();
            var flxClient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxClient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxClient.setDefaultUnit(kony.flex.DP);
            var lblClient = new kony.ui.Label({
                "id": "lblClient",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Client",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblClientValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblClientValue",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5.00%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "width": "70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxClient.add(lblClient, lblClientValue);
            var CopyFlexContainer0ed1097b60b374e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ed1097b60b374e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ed1097b60b374e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ed1097b60b374e.add();
            var flxRegion = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRegion",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRegion.setDefaultUnit(kony.flex.DP);
            var CopylblManager0ha73c469131242 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblManager0ha73c469131242",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Region",
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
            var lblRegion = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRegion",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
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
            flxRegion.add(CopylblManager0ha73c469131242, lblRegion);
            var CopyFlexContainer0d9ed3a80d9b54f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d9ed3a80d9b54f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d9ed3a80d9b54f.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d9ed3a80d9b54f.add();
            var flxStartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxStartDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStartDate.setDefaultUnit(kony.flex.DP);
            var CopylblClient0f87b287c03624c = new kony.ui.Label({
                "id": "CopylblClient0f87b287c03624c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Start Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectStart = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblProjectStart",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
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
            flxStartDate.add(CopylblClient0f87b287c03624c, lblProjectStart);
            var CopyFlexContainer0h7fcd90c1f6942 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0h7fcd90c1f6942",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0h7fcd90c1f6942.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0h7fcd90c1f6942.add();
            var flxEndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEndDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEndDate.setDefaultUnit(kony.flex.DP);
            var CopylblClient0ad3221ccb06c4b = new kony.ui.Label({
                "id": "CopylblClient0ad3221ccb06c4b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "End Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectEnd = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblProjectEnd",
                "isVisible": true,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
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
            flxEndDate.add(CopylblClient0ad3221ccb06c4b, lblProjectEnd);
            var CopyFlexContainer0eeb8cf5751894e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0eeb8cf5751894e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknLblSectionSeparator",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0eeb8cf5751894e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0eeb8cf5751894e.add();
            var CopyFlexContainer0ce0f62cf9c6f41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ce0f62cf9c6f41",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ce0f62cf9c6f41.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ce0f62cf9c6f41.add();
            var flxLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "110dp",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocation.setDefaultUnit(kony.flex.DP);
            var lblLocation = new kony.ui.Label({
                "id": "lblLocation",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Location",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "15dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblLocationValue = new kony.ui.Label({
                "centerY": "50%",
                "height": "70%",
                "id": "lblLocationValue",
                "isVisible": false,
                "maxNumberOfLines": 2,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "55%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var location = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtAreaActive",
                "height": "60dp",
                "id": "location",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 60,
                "numberOfVisibleLines": 3,
                "right": "4.00%",
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "40dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            flxLocation.add(lblLocation, lblLocationValue, location);
            var CopyFlexContainer0he5d5079249f4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0he5d5079249f4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0he5d5079249f4b.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0he5d5079249f4b.add();
            var flxProjectDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "160dp",
                "id": "flxProjectDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProjectDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "height": "12%",
                "id": "lblDescription",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Description",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "4%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtDescriptionValue = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "focusSkin": "sknTxtAreaActive",
                "height": "75%",
                "id": "txtDescriptionValue",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "4%",
                "numberOfVisibleLines": 3,
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "3.00%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            flxProjectDescription.add(lblDescription, txtDescriptionValue);
            flxProjectDetailsBody.add(flxProjectId, FlexContainer0cc930f2aae2d46, flxCountry, CopyFlexContainer0j07eeae9562142, flxRate, CopyFlexContainer0aa00c5a2a37c4d, flxServiceLine, CopyFlexContainer0d82e532d185344, flxActivity, CopyFlexContainer0d95bb2715eb64e, flxManager, CopyFlexContainer0afc9547e650d44, flxClient, CopyFlexContainer0ed1097b60b374e, flxRegion, CopyFlexContainer0d9ed3a80d9b54f, flxStartDate, CopyFlexContainer0h7fcd90c1f6942, flxEndDate, CopyFlexContainer0eeb8cf5751894e, CopyFlexContainer0ce0f62cf9c6f41, flxLocation, CopyFlexContainer0he5d5079249f4b, flxProjectDescription);
            flxMain.add(flxHeader, flxHeaderShadow, flxNavMenu, flxHeaderDownTop, flxProjectDetailsBody);
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
            this.add(flxMain, flxLoading);
        };
        return [{
            "addWidgets": addWidgetsfrmCrewProject,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmCrewProject",
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