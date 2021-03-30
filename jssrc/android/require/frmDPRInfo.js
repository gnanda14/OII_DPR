define("frmDPRInfo", function() {
    return function(controller) {
        function addWidgetsfrmDPRInfo() {
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
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_je3c1da4463d40d6809d536620973afb,
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
            var flxSubmitDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "60%",
                "id": "flxSubmitDPR",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 10,
                "skin": "CopyslFbox0c138b65e78b24e",
                "top": "8dp",
                "width": "20%",
                "zIndex": 3
            }, {}, {});
            flxSubmitDPR.setDefaultUnit(kony.flex.DP);
            var btnSubmitDPR = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknDummybtnAddCrew",
                "height": "60%",
                "id": "btnSubmitDPR",
                "isVisible": true,
                "right": "10%",
                "skin": "sknDummybtnAddCrew",
                "text": "Submit ",
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var Image0be2c3c5546964a = new kony.ui.Image2({
                "centerY": "50%",
                "height": "80%",
                "id": "Image0be2c3c5546964a",
                "isVisible": true,
                "left": "5%",
                "skin": "slImage",
                "src": "imgsubmit.png",
                "top": "0",
                "width": "20%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSubmitDPR.add(btnSubmitDPR, Image0be2c3c5546964a);
            var flxSaveDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSaveDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0",
                "width": "15%"
            }, {}, {});
            flxSaveDPR.setDefaultUnit(kony.flex.DP);
            var lblSave = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSave",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a5f0b56ebce242",
                "text": "",
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
            flxSaveDPR.add(lblSave);
            var flxSettings = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSettings",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "15%",
                "skin": "slFbox",
                "top": "0dp",
                "width": "13%"
            }, {}, {});
            flxSettings.setDefaultUnit(kony.flex.DP);
            var CopylblSave0j49987697ab34a = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblSave0j49987697ab34a",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c71341727b4245",
                "text": "",
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
            flxSettings.add(CopylblSave0j49987697ab34a);
            var flxRefreshCrew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxRefreshCrew",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0dp",
                "width": "15%"
            }, {}, {});
            flxRefreshCrew.setDefaultUnit(kony.flex.DP);
            var CopylblSave0i168e7c1e7fd44 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblSave0i168e7c1e7fd44",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c71341727b4245",
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
            flxRefreshCrew.add(CopylblSave0i168e7c1e7fd44);
            var flxOptionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxOptionContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0",
                "width": "13%",
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
            flxHeader.add(flxBack, lblTitle, flxSubmitDPR, flxSaveDPR, flxSettings, flxRefreshCrew, flxOptionContainer);
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
                "width": "25%"
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
            var flxDPRsTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxDPRsTab",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0.00%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "25%"
            }, {}, {});
            flxDPRsTab.setDefaultUnit(kony.flex.DP);
            var imgDpr = new kony.ui.Image2({
                "bottom": "5%",
                "centerX": "50%",
                "height": "45%",
                "id": "imgDpr",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "dprbottom.png",
                "top": "5dp",
                "width": "34%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblDpr = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblDpr",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblDashboardNormal",
                "text": "DPR's",
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
            flxDPRsTab.add(imgDpr, lblDpr);
            var flxCrewDetailsTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxCrewDetailsTab",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "25%"
            }, {}, {});
            flxCrewDetailsTab.setDefaultUnit(kony.flex.DP);
            var imgCrew = new kony.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgCrew",
                "isVisible": true,
                "left": "0dp",
                "skin": "slImage",
                "src": "crewdetails.png",
                "top": "5dp",
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblcrew = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblcrew",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblDashboardNormal",
                "text": "Crew Details",
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
            flxCrewDetailsTab.add(imgCrew, lblcrew);
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
                "width": "25%"
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
                "text": "Add DPR",
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
            flxDPRContainer.add(flxProjectDetailsTab, flxDPRsTab, flxCrewDetailsTab, flxFAB);
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
                "verticalScrollIndicator": true,
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
                "isVisible": true,
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
                "isVisible": true,
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
                "text": "Hourly",
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
                "skin": "sknLblErrorAlert",
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
                "isVisible": true,
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
            flxProjectDetailsBody.add(flxProjectId, FlexContainer0cc930f2aae2d46, flxCountry, CopyFlexContainer0j07eeae9562142, flxRate, CopyFlexContainer0aa00c5a2a37c4d, flxServiceLine, CopyFlexContainer0d95bb2715eb64e, flxActivity, CopyFlexContainer0d82e532d185344, flxManager, CopyFlexContainer0afc9547e650d44, flxClient, CopyFlexContainer0ed1097b60b374e, flxRegion, CopyFlexContainer0d9ed3a80d9b54f, flxStartDate, CopyFlexContainer0h7fcd90c1f6942, flxEndDate, CopyFlexContainer0eeb8cf5751894e, CopyFlexContainer0ce0f62cf9c6f41, flxLocation, CopyFlexContainer0he5d5079249f4b, flxProjectDescription);
            var flxDPRsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "86%",
                "id": "flxDPRsBody",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBgEBEBEBOp0e90c5bb125034f",
                "top": "8%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDPRsBody.setDefaultUnit(kony.flex.DP);
            var flxContainerDPR = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxContainerDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFbox0a1bba8e495f648",
                "top": "0",
                "verticalScrollIndicator": false,
                "width": "100%"
            }, {}, {});
            flxContainerDPR.setDefaultUnit(kony.flex.DP);
            var flxSigns = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "5%",
                "id": "flxSigns",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSigns.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c1050cdd30c242 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0c1050cdd30c242",
                "isVisible": true,
                "skin": "CopydefLabel0ff62ddde23414e",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "7%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0e41a418e5f4a4d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0e41a418e5f4a4d",
                "isVisible": true,
                "right": "5%",
                "skin": "CopydefLabel0e70aa99d4e2f48",
                "text": "Pending",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "23%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0feae0f436b544f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0feae0f436b544f",
                "isVisible": true,
                "skin": "CopydefLabel0de05c4e176b14d",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "7%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0id871e5990d243 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0id871e5990d243",
                "isVisible": true,
                "right": "5%",
                "skin": "CopydefLabel0e70aa99d4e2f48",
                "text": "Submitted",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "23%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0fff2567c55fc48 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0fff2567c55fc48",
                "isVisible": true,
                "skin": "CopydefLabel0bb627aaea6be41",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "7%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ee6180adc0fe45 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0ee6180adc0fe45",
                "isVisible": true,
                "right": "-5%",
                "skin": "CopydefLabel0e70aa99d4e2f48",
                "text": "Rejected",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "23%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSigns.add(CopyLabel0c1050cdd30c242, CopyLabel0e41a418e5f4a4d, CopyLabel0feae0f436b544f, CopyLabel0id871e5990d243, CopyLabel0fff2567c55fc48, CopyLabel0ee6180adc0fe45);
            var segDPRsHeader = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgCalendar": "",
                    "imgDpr": "",
                    "imgRecover": "",
                    "imgSign": "",
                    "imgtime": "",
                    "lblAccept": "",
                    "lblClone": "",
                    "lblCloneDpr": "",
                    "lblDRPLabel": "",
                    "lblDelete": "",
                    "lblDpr": "",
                    "lblEdit": "",
                    "lblSubmit": "",
                    "lblTime": "",
                    "lblView": "",
                    "lblreportDate": "",
                    "reportDate": "",
                    "reportId": "",
                    "timeEntries": ""
                }],
                "groupCells": false,
                "height": "94%",
                "id": "segDPRsHeader",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTempSegDPRHeader",
                "scrollingEvents": {
                    "onPull": controller.AS_Segment_b4e68a17b74e4616847f69f18fc6d110,
                    "onPush": controller.AS_Segment_a297e8fa51854b049464ab3d5d41973d
                },
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "5%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxClone": "flxClone",
                    "flxCloneDpr": "flxCloneDpr",
                    "flxContainer": "flxContainer",
                    "flxDPRCard": "flxDPRCard",
                    "flxDPRContainer": "flxDPRContainer",
                    "flxDPRID": "flxDPRID",
                    "flxDPRIcon": "flxDPRIcon",
                    "flxDateTime": "flxDateTime",
                    "flxDelete": "flxDelete",
                    "flxDeleteClone": "flxDeleteClone",
                    "flxDeleteContainer": "flxDeleteContainer",
                    "flxEdit": "flxEdit",
                    "flxEmptySpace": "flxEmptySpace",
                    "flxInfo": "flxInfo",
                    "flxOption": "flxOption",
                    "flxOptionColor": "flxOptionColor",
                    "flxRecoverclone": "flxRecoverclone",
                    "flxSignAccept": "flxSignAccept",
                    "flxSubmit": "flxSubmit",
                    "flxTempSegDPRHeader": "flxTempSegDPRHeader",
                    "flxView": "flxView",
                    "flxoptiondpr": "flxoptiondpr",
                    "imgCalendar": "imgCalendar",
                    "imgDpr": "imgDpr",
                    "imgRecover": "imgRecover",
                    "imgSign": "imgSign",
                    "imgtime": "imgtime",
                    "lblAccept": "lblAccept",
                    "lblClone": "lblClone",
                    "lblCloneDpr": "lblCloneDpr",
                    "lblDRPLabel": "lblDRPLabel",
                    "lblDelete": "lblDelete",
                    "lblDpr": "lblDpr",
                    "lblEdit": "lblEdit",
                    "lblSubmit": "lblSubmit",
                    "lblTime": "lblTime",
                    "lblView": "lblView",
                    "lblreportDate": "lblreportDate",
                    "reportDate": "reportDate",
                    "reportId": "reportId",
                    "timeEntries": "timeEntries"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var segDPRData = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "imgCalendar": "calend.png",
                    "imgDpr": "dprbottom.png",
                    "imgRecover": "recover.png",
                    "imgSign": "sgn.png",
                    "imgtime": "option2.png",
                    "lblAccept": "",
                    "lblClone": "",
                    "lblCloneDpr": "",
                    "lblDRPLabel": "PROJ_909099_89898787",
                    "lblDelete": "",
                    "lblDpr": "",
                    "lblEdit": "",
                    "lblSubmit": "",
                    "lblTime": "September 12, 2020",
                    "lblView": "",
                    "lblreportDate": "Report Date",
                    "reportDate": "1990/09/12",
                    "reportId": "PROJ_90909090909_89898988787",
                    "timeEntries": "23/32/32"
                }],
                "groupCells": false,
                "height": "100%",
                "id": "segDPRData",
                "isVisible": false,
                "left": "10dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxTempSegDPRHeader",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "10%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "flxClone": "flxClone",
                    "flxCloneDpr": "flxCloneDpr",
                    "flxContainer": "flxContainer",
                    "flxDPRCard": "flxDPRCard",
                    "flxDPRContainer": "flxDPRContainer",
                    "flxDPRID": "flxDPRID",
                    "flxDPRIcon": "flxDPRIcon",
                    "flxDateTime": "flxDateTime",
                    "flxDelete": "flxDelete",
                    "flxDeleteClone": "flxDeleteClone",
                    "flxDeleteContainer": "flxDeleteContainer",
                    "flxEdit": "flxEdit",
                    "flxEmptySpace": "flxEmptySpace",
                    "flxInfo": "flxInfo",
                    "flxOption": "flxOption",
                    "flxOptionColor": "flxOptionColor",
                    "flxRecoverclone": "flxRecoverclone",
                    "flxSignAccept": "flxSignAccept",
                    "flxSubmit": "flxSubmit",
                    "flxTempSegDPRHeader": "flxTempSegDPRHeader",
                    "flxView": "flxView",
                    "flxoptiondpr": "flxoptiondpr",
                    "imgCalendar": "imgCalendar",
                    "imgDpr": "imgDpr",
                    "imgRecover": "imgRecover",
                    "imgSign": "imgSign",
                    "imgtime": "imgtime",
                    "lblAccept": "lblAccept",
                    "lblClone": "lblClone",
                    "lblCloneDpr": "lblCloneDpr",
                    "lblDRPLabel": "lblDRPLabel",
                    "lblDelete": "lblDelete",
                    "lblDpr": "lblDpr",
                    "lblEdit": "lblEdit",
                    "lblSubmit": "lblSubmit",
                    "lblTime": "lblTime",
                    "lblView": "lblView",
                    "lblreportDate": "lblreportDate",
                    "reportDate": "reportDate",
                    "reportId": "reportId",
                    "timeEntries": "timeEntries"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxDPRsInfo = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxDPRsInfo",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxOp0g4d16027f54549",
                "top": "0dp",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDPRsInfo.setDefaultUnit(kony.flex.DP);
            var flxEmptySpace = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "-3dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxEmptySpace",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxShadowLight",
                "top": "5dp",
                "width": "93%",
                "zIndex": 1
            }, {}, {});
            flxEmptySpace.setDefaultUnit(kony.flex.DP);
            flxEmptySpace.add();
            var flxDPRCard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "clipBounds": true,
                "height": "65dp",
                "id": "flxDPRCard",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlxBgFFFFFF",
                "top": "-1dp",
                "width": "94%",
                "zIndex": 1
            }, {}, {});
            flxDPRCard.setDefaultUnit(kony.flex.DP);
            var imgCalendar = new kony.ui.Image2({
                "height": "60dp",
                "id": "imgCalendar",
                "isVisible": true,
                "left": "5dp",
                "skin": "slImage",
                "src": "calend.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblReportDate = new kony.ui.Label({
                "height": "18dp",
                "id": "lblReportDate",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLbl25536EOp100S100Perc",
                "text": "Report Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "8dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblReportDateValue = new kony.ui.Label({
                "height": "16dp",
                "id": "lblReportDateValue",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLbl333333S90",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "30dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTotalDPRs = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxTotalDPRs",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "width": "16dp",
                "zIndex": 1
            }, {}, {});
            flxTotalDPRs.setDefaultUnit(kony.flex.DP);
            var imgDownArrow = new kony.ui.Image2({
                "height": "100%",
                "id": "imgDownArrow",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow_rounded.png",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTotalDPRs.add(imgDownArrow);
            var lblTotalTimeEntries = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTotalTimeEntries",
                "isVisible": true,
                "right": "30dp",
                "skin": "CopysknLbl0i3cb3876b1204f",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "23dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDPRCard.add(imgCalendar, lblReportDate, lblReportDateValue, flxTotalDPRs, lblTotalTimeEntries);
            var segDPRInfo = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "groupCells": false,
                "height": "87%",
                "id": "segDPRInfo",
                "isVisible": true,
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": true,
                "top": "0.50%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {},
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDPRsInfo.add(flxEmptySpace, flxDPRCard, segDPRInfo);
            var flxNoDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "123dp",
                "id": "flxNoDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNoDPR.setDefaultUnit(kony.flex.DP);
            var Image0h126f526aa3a4f = new kony.ui.Image2({
                "centerX": "50%",
                "height": "90dp",
                "id": "Image0h126f526aa3a4f",
                "isVisible": true,
                "skin": "CopyslImage0de3df4dc020145",
                "src": "dprbottom.png",
                "top": 0,
                "width": "67dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoDPRS = new kony.ui.Label({
                "bottom": 10,
                "centerX": "50%",
                "id": "lblNoDPRS",
                "isVisible": true,
                "skin": "CopysknLblDashboardNormal0ba38d36636de42",
                "text": "No DPR's Found.",
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
            flxNoDPR.add(Image0h126f526aa3a4f, lblNoDPRS);
            flxContainerDPR.add(flxSigns, segDPRsHeader, segDPRData, flxDPRsInfo, flxNoDPR);
            flxDPRsBody.add(flxContainerDPR);
            var flxCrewDetailsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "86%",
                "id": "flxCrewDetailsBody",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBgEBEBEBOp0a57a3d2ffc1a4b",
                "top": "8%",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxCrewDetailsBody.setDefaultUnit(kony.flex.DP);
            var flxContainerCrew = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxContainerCrew",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFbox0e3e9ca53f8ff4b",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxContainerCrew.setDefaultUnit(kony.flex.DP);
            var segCrewDetail = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "empId": "",
                    "empName": "",
                    "imgAddDPR": "delete_redd.png",
                    "imgCrewOrSupervisor": "",
                    "imgDeleteCrew": "",
                    "jobPosition": "",
                    "lblClientOTHours": "",
                    "lblDelete": "Label",
                    "lblDprId": "",
                    "lblEdit": "",
                    "lblNormalHours": "",
                    "lblOIIOTHours": "",
                    "lblStandbyHours": "",
                    "nonDiveRate": "",
                    "normalRate": "",
                    "otRate": "",
                    "standbyRate": ""
                }],
                "groupCells": false,
                "height": "98%",
                "id": "segCrewDetail",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSegCrewDetails",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "1%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "CopyFlexContainer0e4577f1867e942": "CopyFlexContainer0e4577f1867e942",
                    "CopyFlexContainer0f328884b722a41": "CopyFlexContainer0f328884b722a41",
                    "CopyFlexContainer0j14a9333e6d245": "CopyFlexContainer0j14a9333e6d245",
                    "FlexContainer0d4f90ec95ce741": "FlexContainer0d4f90ec95ce741",
                    "empId": "empId",
                    "empName": "empName",
                    "flxAddDpr": "flxAddDpr",
                    "flxClientOTHours": "flxClientOTHours",
                    "flxCrewDetailsCard": "flxCrewDetailsCard",
                    "flxDelete": "flxDelete",
                    "flxDetails": "flxDetails",
                    "flxEdit": "flxEdit",
                    "flxEditDelContainer": "flxEditDelContainer",
                    "flxHours": "flxHours",
                    "flxNormalHours": "flxNormalHours",
                    "flxOIIOtHours": "flxOIIOtHours",
                    "flxSegCrewDetails": "flxSegCrewDetails",
                    "flxStandbyHours": "flxStandbyHours",
                    "imgAddDPR": "imgAddDPR",
                    "imgCrewOrSupervisor": "imgCrewOrSupervisor",
                    "imgDeleteCrew": "imgDeleteCrew",
                    "jobPosition": "jobPosition",
                    "lblClientOTHours": "lblClientOTHours",
                    "lblDelete": "lblDelete",
                    "lblDprId": "lblDprId",
                    "lblEdit": "lblEdit",
                    "lblNormalHours": "lblNormalHours",
                    "lblOIIOTHours": "lblOIIOTHours",
                    "lblStandbyHours": "lblStandbyHours",
                    "nonDiveRate": "nonDiveRate",
                    "normalRate": "normalRate",
                    "otRate": "otRate",
                    "standbyRate": "standbyRate"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoCrew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxNoCrew",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNoCrew.setDefaultUnit(kony.flex.DP);
            var lblNoCrew = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "49%",
                "id": "lblNoCrew",
                "isVisible": true,
                "skin": "CopysknLblDashboardNormal0ba38d36636de42",
                "text": "No Crew Found.",
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
            var imgnoCrew = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "40%",
                "height": "100dp",
                "id": "imgnoCrew",
                "isVisible": true,
                "skin": "slImage",
                "src": "crewdetails.png",
                "width": "100dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxShadow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "40%",
                "clipBounds": true,
                "height": "110dp",
                "id": "flxShadow",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0gbf9265dbf964c",
                "top": "0",
                "width": "100dp"
            }, {}, {});
            flxShadow.setDefaultUnit(kony.flex.DP);
            flxShadow.add();
            flxNoCrew.add(lblNoCrew, imgnoCrew, flxShadow);
            flxContainerCrew.add(segCrewDetail, flxNoCrew);
            var flxSupervisorCrew = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxSupervisorCrew",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFbox0e3e9ca53f8ff4b",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxSupervisorCrew.setDefaultUnit(kony.flex.DP);
            var flxHeaderCrew = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxHeaderCrew",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxHeaderCrew.setDefaultUnit(kony.flex.DP);
            var lblHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHeader",
                "isVisible": true,
                "left": "13dp",
                "skin": "CopydefLabel0c1a0858a5cc341",
                "text": "Select role:",
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
            var FlexContainer0fdf6620e148d4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "FlexContainer0fdf6620e148d4f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": "0",
                "width": "65.78%"
            }, {}, {});
            FlexContainer0fdf6620e148d4f.setDefaultUnit(kony.flex.DP);
            var CopylblHeader0h3f9b0e283a948 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblHeader0h3f9b0e283a948",
                "isVisible": true,
                "left": 10,
                "right": 10,
                "skin": "CopydefLabel0g54a73483d8748",
                "text": "Supervisor",
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
            var CopylblHeader0j65714b2dff34f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblHeader0j65714b2dff34f",
                "isVisible": true,
                "left": "23dp",
                "skin": "CopydefLabel0d348020cdf3a41",
                "text": "",
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
            var CopylblHeader0ab484c639cf44e = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblHeader0ab484c639cf44e",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0g54a73483d8748",
                "text": "Crew",
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
            var CopylblHeader0ab822bf27a054f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblHeader0ab822bf27a054f",
                "isVisible": true,
                "left": "35dp",
                "skin": "CopydefLabel0d348020cdf3a41",
                "text": "",
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
            FlexContainer0fdf6620e148d4f.add(CopylblHeader0h3f9b0e283a948, CopylblHeader0j65714b2dff34f, CopylblHeader0ab484c639cf44e, CopylblHeader0ab822bf27a054f);
            flxHeaderCrew.add(lblHeader, FlexContainer0fdf6620e148d4f);
            var segSupervisorCrew = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "empId": "",
                    "empName": "",
                    "imgCrewOrSupervisor": "",
                    "lblDelete": ""
                }],
                "groupCells": false,
                "height": "83%",
                "id": "segSupervisorCrew",
                "isVisible": true,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "seg2Normal",
                "rowTemplate": "flxSuperCrew",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorRequired": false,
                "showScrollbars": false,
                "top": "0.00%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "FlexContainer0d4f90ec95ce741": "FlexContainer0d4f90ec95ce741",
                    "empId": "empId",
                    "empName": "empName",
                    "flxCrewDetailsCard": "flxCrewDetailsCard",
                    "flxDelete": "flxDelete",
                    "flxDetails": "flxDetails",
                    "flxEditDelContainer": "flxEditDelContainer",
                    "flxSuperCrew": "flxSuperCrew",
                    "imgCrewOrSupervisor": "imgCrewOrSupervisor",
                    "lblDelete": "lblDelete"
                },
                "width": "100%",
                "zIndex": 1
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxBottom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxBottom",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            flxBottom.setDefaultUnit(kony.flex.DP);
            var btnApply = new kony.ui.Button({
                "centerX": "30%",
                "centerY": "50%",
                "focusSkin": "CopysknBtn0c7fa8a095b914b",
                "height": "38dp",
                "id": "btnApply",
                "isVisible": true,
                "right": "50dp",
                "skin": "CopysknBtn0c7fa8a095b914b",
                "text": "Apply",
                "top": "0",
                "width": "130dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnCancel = new kony.ui.Button({
                "centerX": "10%",
                "centerY": "50%",
                "focusSkin": "CopysknBtn0c0afcaf94cd648",
                "height": "38dp",
                "id": "btnCancel",
                "isVisible": true,
                "skin": "CopysknBtn0c0afcaf94cd648",
                "text": "Cancel",
                "top": "0",
                "width": "130dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBottom.add(btnApply, btnCancel);
            flxSupervisorCrew.add(flxHeaderCrew, segSupervisorCrew, flxBottom);
            flxCrewDetailsBody.add(flxContainerCrew, flxSupervisorCrew);
            var flxDPROverview = new kony.ui.FlexContainer({
                "clipBounds": true,
                "height": "100%",
                "id": "flxDPROverview",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxOp0c1f5560280e344",
                "top": "0%",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxDPROverview.setDefaultUnit(kony.flex.DP);
            var flxDPRHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "7%",
                "id": "flxDPRHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxDPRHeader.setDefaultUnit(kony.flex.DP);
            var flxDPRHeaderBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxDPRHeaderBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_ea3b405b3ebe4355a3d8490483ff1a5b,
                "skin": "slFbox",
                "width": "35dp",
                "zIndex": 1
            }, {}, {});
            flxDPRHeaderBack.setDefaultUnit(kony.flex.DP);
            var CopylblBack0c07f6a8ba7cd47 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblBack0c07f6a8ba7cd47",
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
            flxDPRHeaderBack.add(CopylblBack0c07f6a8ba7cd47);
            var CopylblTitle0b5a0616a803c40 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblTitle0b5a0616a803c40",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Project Info",
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
            var btnSubmitSign = new kony.ui.Button({
                "centerY": "50%",
                "focusSkin": "sknDummybtnAddCrew",
                "height": "60%",
                "id": "btnSubmitSign",
                "isVisible": false,
                "right": "2%",
                "skin": "sknDummybtnAddCrew",
                "text": "Submit ",
                "top": "0dp",
                "width": "20%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxDPRHeader.add(flxDPRHeaderBack, CopylblTitle0b5a0616a803c40, btnSubmitSign);
            var flxDPRInfoBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxDPRInfoBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxDPRInfoBody.setDefaultUnit(kony.flex.DP);
            var flxProjectInfoTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxProjectInfoTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fee6859f586c4d",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxProjectInfoTab.setDefaultUnit(kony.flex.DP);
            var Label0a75cab1ca7254c = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0a75cab1ca7254c",
                "isVisible": true,
                "left": "15dp",
                "skin": "CopydefLabel0f464064e805246",
                "text": "Project Info",
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
            var lblProjectInfoArrow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProjectInfoArrow",
                "isVisible": true,
                "right": 15,
                "skin": "sknDownArrow",
                "text": "",
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
            flxProjectInfoTab.add(Label0a75cab1ca7254c, lblProjectInfoArrow);
            var flxSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d2aa4c38946c4b",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSep1.setDefaultUnit(kony.flex.DP);
            flxSep1.add();
            var flxProjectDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxProjectDetails",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ge2ad1eb353942",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxProjectDetails.setDefaultUnit(kony.flex.DP);
            var FlexContainer0d11c3182d77644 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 0,
                "clipBounds": true,
                "id": "FlexContainer0d11c3182d77644",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "50%"
            }, {}, {});
            FlexContainer0d11c3182d77644.setDefaultUnit(kony.flex.DP);
            var flxClientNameShow = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxClientNameShow",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxClientNameShow.setDefaultUnit(kony.flex.DP);
            var Label0g95f27b153ab4e = new kony.ui.Label({
                "id": "Label0g95f27b153ab4e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSignTitle",
                "text": "Client",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblClientName = new kony.ui.Label({
                "id": "lblClientName",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 2,
                "skin": "sknLblSignDesc",
                "text": "Client Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "2dp",
                "width": "93%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxClientNameShow.add(Label0g95f27b153ab4e, lblClientName);
            var CopyFlexContainer0j164ae324ae846 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "CopyFlexContainer0j164ae324ae846",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0j164ae324ae846.setDefaultUnit(kony.flex.DP);
            var CopyLabel0c5673e34753649 = new kony.ui.Label({
                "id": "CopyLabel0c5673e34753649",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSignTitle",
                "text": "Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectDetailDate = new kony.ui.Label({
                "id": "lblProjectDetailDate",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSignDesc",
                "text": "yyyy-mm-dd",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyFlexContainer0j164ae324ae846.add(CopyLabel0c5673e34753649, lblProjectDetailDate);
            FlexContainer0d11c3182d77644.add(flxClientNameShow, CopyFlexContainer0j164ae324ae846);
            var CopyFlexContainer0ae65bcc3c45d4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 10,
                "clipBounds": true,
                "id": "CopyFlexContainer0ae65bcc3c45d4f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "50%"
            }, {}, {});
            CopyFlexContainer0ae65bcc3c45d4f.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0de8ba0472b6c47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "CopyFlexContainer0de8ba0472b6c47",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0de8ba0472b6c47.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b7e9d7d963dc40 = new kony.ui.Label({
                "id": "CopyLabel0b7e9d7d963dc40",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSignTitle",
                "text": "Oceaneering Project #",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectDetailsId = new kony.ui.Label({
                "id": "lblProjectDetailsId",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSignDesc",
                "text": "000000000005756",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyFlexContainer0de8ba0472b6c47.add(CopyLabel0b7e9d7d963dc40, lblProjectDetailsId);
            var CopyFlexContainer0e21d96af19e54d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "CopyFlexContainer0e21d96af19e54d",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e21d96af19e54d.setDefaultUnit(kony.flex.DP);
            var CopyLabel0fa6584e4f0554e = new kony.ui.Label({
                "id": "CopyLabel0fa6584e4f0554e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLblSignTitle",
                "text": "Service Ticket #",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblServiceTicket = new kony.ui.Label({
                "id": "lblServiceTicket",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 2,
                "skin": "sknLblSignDesc",
                "text": "PROJ_232323_324",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "2dp",
                "width": "93%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyFlexContainer0e21d96af19e54d.add(CopyLabel0fa6584e4f0554e, lblServiceTicket);
            CopyFlexContainer0ae65bcc3c45d4f.add(CopyFlexContainer0de8ba0472b6c47, CopyFlexContainer0e21d96af19e54d);
            flxProjectDetails.add(FlexContainer0d11c3182d77644, CopyFlexContainer0ae65bcc3c45d4f);
            var flxPersonnelTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxPersonnelTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fee6859f586c4d",
                "top": 0,
                "width": "100%"
            }, {}, {});
            flxPersonnelTab.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b5309d3ad7824c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0b5309d3ad7824c",
                "isVisible": true,
                "left": "15dp",
                "skin": "CopydefLabel0f464064e805246",
                "text": "Personnel on Board",
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
            var lblPersonnelArrow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPersonnelArrow",
                "isVisible": true,
                "right": 15,
                "skin": "sknDownArrow",
                "text": "",
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
            flxPersonnelTab.add(CopyLabel0b5309d3ad7824c, lblPersonnelArrow);
            var flxSep2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d2aa4c38946c4b",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSep2.setDefaultUnit(kony.flex.DP);
            flxSep2.add();
            var flxPersonnelDay = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxPersonnelDay",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ge2ad1eb353942",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxPersonnelDay.setDefaultUnit(kony.flex.DP);
            var flxDayShiftHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxDayShiftHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDayShiftHeader.setDefaultUnit(kony.flex.DP);
            var Label0c1ceef03c05347 = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0c1ceef03c05347",
                "isVisible": true,
                "left": "5%",
                "skin": "CopydefLabel0a0797f5f2f4246",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0jec321b42ebd47 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0jec321b42ebd47",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0da882b25841846",
                "text": "Day Shift",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDayShiftHeader.add(Label0c1ceef03c05347, CopyLabel0jec321b42ebd47);
            var flxDayPersonnel = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": true,
                "bottom": 0,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "200dp",
                "horizontalScrollIndicator": true,
                "id": "flxDayPersonnel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "pagingEnabled": false,
                "right": "10dp",
                "scrollDirection": kony.flex.SCROLL_BOTH,
                "skin": "CopyslFSbox0a2737cb1b59749",
                "top": 0,
                "verticalScrollIndicator": true,
                "width": "96%"
            }, {}, {});
            flxDayPersonnel.setDefaultUnit(kony.flex.DP);
            var flxName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxName.setDefaultUnit(kony.flex.DP);
            var lblDayName = new kony.ui.Label({
                "id": "lblDayName",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxNameValueCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNameValueCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "98%"
            }, {}, {});
            flxNameValueCon.setDefaultUnit(kony.flex.DP);
            flxNameValueCon.add();
            flxName.add(lblDayName, flxNameValueCon);
            var flxPosition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxPosition",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "160dp"
            }, {}, {});
            flxPosition.setDefaultUnit(kony.flex.DP);
            var lblDayPosition = new kony.ui.Label({
                "id": "lblDayPosition",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Position",
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
            var flxPositionValueCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxPositionValueCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "98%"
            }, {}, {});
            flxPositionValueCon.setDefaultUnit(kony.flex.DP);
            flxPositionValueCon.add();
            flxPosition.add(lblDayPosition, flxPositionValueCon);
            var flxRegHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxRegHours",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "100dp"
            }, {}, {});
            flxRegHours.setDefaultUnit(kony.flex.DP);
            var lblDayRegHours = new kony.ui.Label({
                "id": "lblDayRegHours",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Reg.Hours",
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
            var flxRegHoursCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxRegHoursCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "98%"
            }, {}, {});
            flxRegHoursCon.setDefaultUnit(kony.flex.DP);
            flxRegHoursCon.add();
            flxRegHours.add(lblDayRegHours, flxRegHoursCon);
            var flxOvertime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxOvertime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": 5,
                "width": "100dp"
            }, {}, {});
            flxOvertime.setDefaultUnit(kony.flex.DP);
            var lblDayOvertime = new kony.ui.Label({
                "id": "lblDayOvertime",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Overtime",
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
            var flxOvertimeCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxOvertimeCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "98%"
            }, {}, {});
            flxOvertimeCon.setDefaultUnit(kony.flex.DP);
            flxOvertimeCon.add();
            flxOvertime.add(lblDayOvertime, flxOvertimeCon);
            var flxDaysOnboard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxDaysOnboard",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "100dp"
            }, {}, {});
            flxDaysOnboard.setDefaultUnit(kony.flex.DP);
            var lblDaysOvertime = new kony.ui.Label({
                "id": "lblDaysOvertime",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 1,
                "skin": "lblDaynightHeader",
                "text": "Days OnBoard",
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
            var flxDaysOnboardCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxDaysOnboardCon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDaysOnboardCon.setDefaultUnit(kony.flex.DP);
            flxDaysOnboardCon.add();
            flxDaysOnboard.add(lblDaysOvertime, flxDaysOnboardCon);
            flxDayPersonnel.add(flxName, flxPosition, flxRegHours, flxOvertime, flxDaysOnboard);
            var flxNightShiftHEader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxNightShiftHEader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNightShiftHEader.setDefaultUnit(kony.flex.DP);
            var CopyLabel0g707e65ef46a4f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0g707e65ef46a4f",
                "isVisible": true,
                "left": "5%",
                "skin": "CopydefLabel0a0797f5f2f4246",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0%",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0c20162005e9341 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0c20162005e9341",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopydefLabel0da882b25841846",
                "text": "Night Shift",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxNightShiftHEader.add(CopyLabel0g707e65ef46a4f, CopyLabel0c20162005e9341);
            var flxNightPersonnel = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": true,
                "allowVerticalBounce": true,
                "bottom": 5,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "200dp",
                "horizontalScrollIndicator": true,
                "id": "flxNightPersonnel",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "10dp",
                "pagingEnabled": false,
                "right": "10dp",
                "scrollDirection": kony.flex.SCROLL_BOTH,
                "skin": "CopyslFSbox0a2737cb1b59749",
                "top": 0,
                "verticalScrollIndicator": true,
                "width": "96.17%"
            }, {}, {});
            flxNightPersonnel.setDefaultUnit(kony.flex.DP);
            var flxNightName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNightName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNightName.setDefaultUnit(kony.flex.DP);
            var lblNightName = new kony.ui.Label({
                "id": "lblNightName",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxNightNameCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNightNameCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNightNameCon.setDefaultUnit(kony.flex.DP);
            flxNightNameCon.add();
            flxNightName.add(lblNightName, flxNightNameCon);
            var flxNightPosition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNightPosition",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "160dp"
            }, {}, {});
            flxNightPosition.setDefaultUnit(kony.flex.DP);
            var lblNightPosition = new kony.ui.Label({
                "id": "lblNightPosition",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Position",
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
            var flxNightPositionCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNightPositionCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "97%"
            }, {}, {});
            flxNightPositionCon.setDefaultUnit(kony.flex.DP);
            flxNightPositionCon.add();
            flxNightPosition.add(lblNightPosition, flxNightPositionCon);
            var flxNightRegHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxNightRegHours",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "100dp"
            }, {}, {});
            flxNightRegHours.setDefaultUnit(kony.flex.DP);
            var lblNightRegHours = new kony.ui.Label({
                "id": "lblNightRegHours",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Reg.Hours",
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
            var flxNightRegHoursCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNightRegHoursCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "98%"
            }, {}, {});
            flxNightRegHoursCon.setDefaultUnit(kony.flex.DP);
            flxNightRegHoursCon.add();
            flxNightRegHours.add(lblNightRegHours, flxNightRegHoursCon);
            var flxNIghtOvertime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxNIghtOvertime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "right": "10dp",
                "skin": "slFbox",
                "top": 5,
                "width": "100dp"
            }, {}, {});
            flxNIghtOvertime.setDefaultUnit(kony.flex.DP);
            var lblNightOvertime = new kony.ui.Label({
                "id": "lblNightOvertime",
                "isVisible": true,
                "left": "5%",
                "skin": "lblDaynightHeader",
                "text": "Overtime",
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
            var flxNIghtOvertimeCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxNIghtOvertimeCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "98%"
            }, {}, {});
            flxNIghtOvertimeCon.setDefaultUnit(kony.flex.DP);
            flxNIghtOvertimeCon.add();
            flxNIghtOvertime.add(lblNightOvertime, flxNIghtOvertimeCon);
            var flxNightOnboard = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": "10dp",
                "clipBounds": true,
                "id": "flxNightOnboard",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "100dp"
            }, {}, {});
            flxNightOnboard.setDefaultUnit(kony.flex.DP);
            var lblNightOnboard = new kony.ui.Label({
                "id": "lblNightOnboard",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 1,
                "skin": "lblDaynightHeader",
                "text": "Days OnBoard",
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
            var flxNightOnboardCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxNightOnboardCon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxNightOnboardCon.setDefaultUnit(kony.flex.DP);
            flxNightOnboardCon.add();
            flxNightOnboard.add(lblNightOnboard, flxNightOnboardCon);
            flxNightPersonnel.add(flxNightName, flxNightPosition, flxNightRegHours, flxNIghtOvertime, flxNightOnboard);
            flxPersonnelDay.add(flxDayShiftHeader, flxDayPersonnel, flxNightShiftHEader, flxNightPersonnel);
            var flxShiftTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxShiftTab",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fee6859f586c4d",
                "top": 0,
                "width": "100%"
            }, {}, {});
            flxShiftTab.setDefaultUnit(kony.flex.DP);
            var CopyLabel0a9965190e2e443 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0a9965190e2e443",
                "isVisible": true,
                "left": "15dp",
                "skin": "CopydefLabel0f464064e805246",
                "text": "Shifts Info",
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
            var lblShiftsArrow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblShiftsArrow",
                "isVisible": true,
                "right": 15,
                "skin": "sknDownArrow",
                "text": "",
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
            flxShiftTab.add(CopyLabel0a9965190e2e443, lblShiftsArrow);
            var flxSep3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep3",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d2aa4c38946c4b",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSep3.setDefaultUnit(kony.flex.DP);
            flxSep3.add();
            var flxShiftDesc = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxShiftDesc",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ge2ad1eb353942",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxShiftDesc.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0de071cb3a9404b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 5,
                "clipBounds": true,
                "id": "CopyFlexContainer0de071cb3a9404b",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 5,
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0de071cb3a9404b.setDefaultUnit(kony.flex.DP);
            var flxDaySupervisor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 10,
                "clipBounds": true,
                "id": "flxDaySupervisor",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "100%"
            }, {}, {});
            flxDaySupervisor.setDefaultUnit(kony.flex.DP);
            var CopyLabel0a6142ab0eaf046 = new kony.ui.Label({
                "id": "CopyLabel0a6142ab0eaf046",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblSignTitle",
                "text": "Day Shift - Completed By :",
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
            var lblDaySupervisor = new kony.ui.Label({
                "id": "lblDaySupervisor",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblSignDesc",
                "text": "Supervisor Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDaySupervisor.add(CopyLabel0a6142ab0eaf046, lblDaySupervisor);
            var CopyFlexContainer0cdb647bfe41f4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "bottom": 10,
                "clipBounds": true,
                "id": "CopyFlexContainer0cdb647bfe41f4f",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cdb647bfe41f4f.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b04b490e824c40 = new kony.ui.Label({
                "id": "CopyLabel0b04b490e824c40",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblSignTitle",
                "text": "Night Shift - Completed By :",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblNightSupervisor = new kony.ui.Label({
                "id": "lblNightSupervisor",
                "isVisible": true,
                "left": "3%",
                "skin": "sknLblSignDesc",
                "text": "Supervisor Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyFlexContainer0cdb647bfe41f4f.add(CopyLabel0b04b490e824c40, lblNightSupervisor);
            CopyFlexContainer0de071cb3a9404b.add(flxDaySupervisor, CopyFlexContainer0cdb647bfe41f4f);
            flxShiftDesc.add(CopyFlexContainer0de071cb3a9404b);
            var flxClientTab = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxClientTab",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fee6859f586c4d",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxClientTab.setDefaultUnit(kony.flex.DP);
            var CopyLabel0h964325a18cc40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0h964325a18cc40",
                "isVisible": true,
                "left": "15dp",
                "skin": "CopydefLabel0f464064e805246",
                "text": "Client Info",
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
            flxClientTab.add(CopyLabel0h964325a18cc40);
            var flxSep4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "2dp",
                "id": "flxSep4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0d2aa4c38946c4b",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSep4.setDefaultUnit(kony.flex.DP);
            flxSep4.add();
            var flxClientDesc = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxClientDesc",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ge2ad1eb353942",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxClientDesc.setDefaultUnit(kony.flex.DP);
            var flxClientBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "clipBounds": true,
                "id": "flxClientBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxClientBody.setDefaultUnit(kony.flex.DP);
            var CopyFlexContainer0id61b01172d44e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "CopyFlexContainer0id61b01172d44e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 10,
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0id61b01172d44e.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b3e91324488e42 = new kony.ui.Label({
                "id": "CopyLabel0b3e91324488e42",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknLblSignTitle0h4c94c73c5d247",
                "text": "Representative :",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxClient = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "bottom": 1,
                "focusSkin": "CopydefTextBoxFocus0dfbbe58177de47",
                "height": "40dp",
                "id": "tbxClient",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "3%",
                "placeholder": "Name",
                "secureTextEntry": false,
                "skin": "CopydefTextBoxNormal0d5f85545a3dd41",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "75%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [2, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "CopydefTextBoxPlaceholder0h7251dbeb6574b",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var FlexContainer0a6a46ec52d524a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "1dp",
                "id": "FlexContainer0a6a46ec52d524a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "3%",
                "isModalContainer": false,
                "skin": "CopyslFbox0dafaadc42d7f42",
                "width": "75%"
            }, {}, {});
            FlexContainer0a6a46ec52d524a.setDefaultUnit(kony.flex.DP);
            FlexContainer0a6a46ec52d524a.add();
            var flxSignClick = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 1,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxSignClick",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "3%",
                "skin": "CopyslFbox0ef36ad97436344",
                "width": "60dp",
                "zIndex": 2
            }, {}, {});
            flxSignClick.setDefaultUnit(kony.flex.DP);
            var flxSignatureContainer = new kony.ui.Image2({
                "bottom": 0,
                "centerX": "50%",
                "centerY": "50%",
                "height": "60%",
                "id": "flxSignatureContainer",
                "isVisible": true,
                "right": "0%",
                "skin": "slImage",
                "src": "imgsignpending.png",
                "width": "60%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxSignClick.add(flxSignatureContainer);
            CopyFlexContainer0id61b01172d44e.add(CopyLabel0b3e91324488e42, tbxClient, FlexContainer0a6a46ec52d524a, flxSignClick);
            flxClientBody.add(CopyFlexContainer0id61b01172d44e);
            flxClientDesc.add(flxClientBody);
            flxDPRInfoBody.add(flxProjectInfoTab, flxSep1, flxProjectDetails, flxPersonnelTab, flxSep2, flxPersonnelDay, flxShiftTab, flxSep3, flxShiftDesc, flxClientTab, flxSep4, flxClientDesc);
            flxDPROverview.add(flxDPRHeader, flxDPRInfoBody);
            flxMain.add(flxHeader, flxHeaderShadow, flxNavMenu, flxHeaderDownTop, flxProjectDetailsBody, flxDPRsBody, flxCrewDetailsBody, flxDPROverview);
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
            var serviceLine = new com.oceaneering.listboxData({
                "bottom": "0.00%",
                "clipBounds": true,
                "height": "100%",
                "id": "serviceLine",
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
                        "height": "320dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "bottom": "25dp",
                        "height": "230dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Service Line"
                    },
                    "listboxData": {
                        "bottom": "0.00%",
                        "isVisible": false,
                        "right": 0
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
            var rates = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "rates",
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
                        "bottom": 0,
                        "height": "320dp",
                        "isVisible": true
                    },
                    "flxSegServiceLine": {
                        "bottom": "20dp",
                        "height": "230dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Rate"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0
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
            var flxSignature = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": false,
                "height": "92.50%",
                "id": "flxSignature",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlx7099b1Op82BorderRd10",
                "top": "7.50%",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxSignature.setDefaultUnit(kony.flex.DP);
            var flxSignContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6%",
                "id": "flxSignContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxSignContainer.setDefaultUnit(kony.flex.DP);
            var lblSignature = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSignature",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0i9c484cfde8b49",
                "text": "Signature",
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
            var flxreset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxreset",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "isModalContainer": false,
                "right": 27,
                "skin": "slFbox",
                "top": "0",
                "width": "19.32%"
            }, {}, {});
            flxreset.setDefaultUnit(kony.flex.DP);
            var lblLogo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLogo",
                "isVisible": true,
                "left": 4,
                "skin": "CopydefLabel0ab2e07932db248",
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
            var lblClear = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblClear",
                "isVisible": true,
                "left": 5,
                "right": 3,
                "skin": "CopydefLabel0g81a8d2c8e7d40",
                "text": "Clear",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxreset.add(lblLogo, lblClear);
            flxSignContainer.add(lblSignature, flxreset);
            var flxSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxSave",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "top": "1%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSave.setDefaultUnit(kony.flex.DP);
            var btnBottomSave = new kony.ui.Button({
                "focusSkin": "CopysknBtn0a71e605ea3b64a",
                "height": "90%",
                "id": "btnBottomSave",
                "isVisible": true,
                "left": "12%",
                "skin": "CopysknBtn0bcc9a698484e47",
                "text": "Save",
                "top": "0dp",
                "width": "35%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnBottomCancel = new kony.ui.Button({
                "focusSkin": "CopysknBtnDB0f7bd0d91b1794b",
                "height": "90%",
                "id": "btnBottomCancel",
                "isVisible": true,
                "left": "7%",
                "skin": "CopysknBtnDB0ga6de6b3167f43",
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
            flxSave.add(btnBottomSave, btnBottomCancel);
            flxSignature.add(flxSignContainer, flxSave);
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
            var lblClientShow = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblClientShow",
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
            flxClientName.add(CopyLabel0fb21d74eefb04a, lblClientShow);
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
                "width": "94%"
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
            var flxClonePopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxClonePopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0c4de0fb4b0164d",
                "top": "0",
                "width": "100%",
                "zIndex": 50
            }, {}, {});
            flxClonePopup.setDefaultUnit(kony.flex.DP);
            var flxBottomPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "200dp",
                "id": "flxBottomPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0decdf750c0c14a",
                "width": "90%",
                "zIndex": 50
            }, {}, {});
            flxBottomPopUp.setDefaultUnit(kony.flex.DP);
            var flxTopFlex = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "5dp",
                "id": "flxTopFlex",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a7e1574d797c4a",
                "top": 10,
                "width": "20%"
            }, {}, {});
            flxTopFlex.setDefaultUnit(kony.flex.DP);
            flxTopFlex.add();
            var imgToShow = new kony.ui.Image2({
                "centerX": "50.00%",
                "centerY": "30%",
                "height": "45dp",
                "id": "imgToShow",
                "isVisible": true,
                "left": "110dp",
                "skin": "slImage",
                "src": "greentick.png",
                "top": "33dp",
                "width": "150dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblBottomMessage = new kony.ui.Label({
                "bottom": "100dp",
                "centerX": "50%",
                "id": "lblBottomMessage",
                "isVisible": true,
                "maxNumberOfLines": 3,
                "skin": "CopydefLabel0ib3bfd86f22141",
                "text": "DPR Cloned Successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5%",
                "width": "90%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 1, 0, 1],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxBottomPopUp.add(flxTopFlex, imgToShow, lblBottomMessage);
            flxClonePopup.add(flxBottomPopUp);
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
                "top": "8%",
                "width": "100.00%"
            }, {}, {});
            flxLabel.setDefaultUnit(kony.flex.DP);
            var lblSaved = new kony.ui.Label({
                "id": "lblSaved",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefLabel0a64fd884b1db41",
                "text": "Saved Successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [5, 3, 5, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLabel.add(lblSaved);
            flxSuccessStatus.add(flxLabel);
            var flxReportDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxReportDate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ea7eeb12b43348",
                "top": "3dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxReportDate.setDefaultUnit(kony.flex.DP);
            var CopyflxBottomPopUp0g4a48ad1e35443 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "210dp",
                "id": "CopyflxBottomPopUp0g4a48ad1e35443",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0he840d6610a741",
                "width": "90%",
                "zIndex": 50
            }, {}, {});
            CopyflxBottomPopUp0g4a48ad1e35443.setDefaultUnit(kony.flex.DP);
            var CopyflxAddHeader0g242c555700b40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "28%",
                "id": "CopyflxAddHeader0g242c555700b40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0e48a5b5d86434b",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxAddHeader0g242c555700b40.setDefaultUnit(kony.flex.DP);
            var CopylblAddProject0d27eb57378c741 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblAddProject0d27eb57378c741",
                "isVisible": true,
                "left": "6%",
                "skin": "CopysknLblFont0fb789f9e45354c",
                "text": "Report Date",
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
            CopyflxAddHeader0g242c555700b40.add(CopylblAddProject0d27eb57378c741);
            var FlexContainer0e32931b4c34d4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40%",
                "id": "FlexContainer0e32931b4c34d4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            FlexContainer0e32931b4c34d4b.setDefaultUnit(kony.flex.DP);
            var FlexContainer0f83b48ae809b48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "FlexContainer0f83b48ae809b48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0d9ace4a854ac42",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            FlexContainer0f83b48ae809b48.setDefaultUnit(kony.flex.DP);
            var calReportDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerX": "50%",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "100%",
                "hour": 0,
                "id": "calReportDate",
                "isVisible": true,
                "minutes": 0,
                "placeholder": "----/--/--",
                "seconds": 0,
                "skin": "CopysknCalProjectDetails0ga8a522b971343",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0f83b48ae809b48.add(calReportDate);
            FlexContainer0e32931b4c34d4b.add(FlexContainer0f83b48ae809b48);
            var flxEnableTouch = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "25%",
                "id": "flxEnableTouch",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBg000000Op0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnableTouch.setDefaultUnit(kony.flex.DP);
            var btnReportCancel = new kony.ui.Button({
                "focusSkin": "CopysknBtnDB0j8f42dbf94e944",
                "height": "100%",
                "id": "btnReportCancel",
                "isVisible": true,
                "left": "7%",
                "onClick": controller.AS_Button_ha0fd4e4cbc04a67981b150e487550c4,
                "skin": "CopysknBtnDB0g9e4fa50889643",
                "text": "Cancel",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnReportOkay = new kony.ui.Button({
                "focusSkin": "CopysknBtn0h7fb26db69f841",
                "height": "100%",
                "id": "btnReportOkay",
                "isVisible": true,
                "left": "5%",
                "skin": "CopysknBtn0h7fb26db69f841",
                "text": "OK",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEnableTouch.add(btnReportCancel, btnReportOkay);
            CopyflxBottomPopUp0g4a48ad1e35443.add(CopyflxAddHeader0g242c555700b40, FlexContainer0e32931b4c34d4b, flxEnableTouch);
            flxReportDate.add(CopyflxBottomPopUp0g4a48ad1e35443);
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
                "onClick": controller.AS_FlexContainer_c59c1c8686db45ac87ae8d21c5eeebfc,
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
                "width": "130dp",
                "year": 2019,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 2, 0],
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
                "width": "130dp",
                "year": 2019,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 2, 0],
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
            var btnApplyFilter = new kony.ui.Button({
                "focusSkin": "sknBtnAddProject",
                "height": "100%",
                "id": "btnApplyFilter",
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
            var btnClearFilter = new kony.ui.Button({
                "focusSkin": "sknBtn949494FontFFFFFFRounded",
                "height": "100%",
                "id": "btnClearFilter",
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
            flxFilterActions.add(btnApplyFilter, btnClearFilter);
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
            var flxOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
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
                "height": "50%",
                "id": "flxFilterIcon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d32c484a77e045d681d4c6ec09047e9e,
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
                "isVisible": false,
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
            var flxRefreshDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50%",
                "id": "flxRefreshDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRefreshDPR.setDefaultUnit(kony.flex.DP);
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
            flxRefreshDPR.add(lblRefresh);
            flxOption.add(flxFilterIcon, flxSearchDPR, flxRefreshDPR);
            var country = new com.oceaneering.listboxSearch({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "country",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 2,
                "overrides": {
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "imgSearchIcon": {
                        "src": "search_icon.png"
                    },
                    "listboxSearch": {
                        "isVisible": false
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
                "autogrowMode": kony.flex.AUTOGROW_NONE,
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
                "zIndex": 2,
                "overrides": {
                    "flxSegServiceLine": {
                        "height": "300dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Activity"
                    },
                    "listboxData": {
                        "isVisible": false
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
            this.add(flxMain, flxLoading, serviceLine, rates, flxSignature, flxSignatureShow, flxClonePopup, flxSuccessStatus, flxReportDate, flxFiltersOuter, flxOption, country, activity);
        };
        return [{
            "addWidgets": addWidgetsfrmDPRInfo,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmDPRInfo",
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