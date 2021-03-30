define("flxSegCrewDetails", function() {
    return function(controller) {
        var flxSegCrewDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSegCrewDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgEBEBEBOp100",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSegCrewDetails.setDefaultUnit(kony.flex.DP);
        var flxCrewDetailsCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "3dp",
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxCrewDetailsCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "3dp",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxCrewDetailsCard.setDefaultUnit(kony.flex.DP);
        var lblDprId = new kony.ui.Label({
            "height": "18dp",
            "id": "lblDprId",
            "isVisible": false,
            "maxNumberOfLines": 1,
            "maxWidth": "50%",
            "right": "4%",
            "skin": "sknLblffa200Op100S80",
            "text": "Prjct_0000123455_552533",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "32dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgCrewOrSupervisor = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgCrewOrSupervisor",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "crewimg.png",
            "top": "15dp",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "65%"
        }, {}, {});
        flxDetails.setDefaultUnit(kony.flex.DP);
        var empName = new kony.ui.Label({
            "id": "empName",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 1,
            "skin": "sknLbl25536EOp100S100Perc",
            "text": "Nakul Gupta",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var empId = new kony.ui.Label({
            "id": "empId",
            "isVisible": false,
            "left": "2%",
            "skin": "sknLbl333333S90",
            "text": "02033315",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "3dp",
            "width": "95%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var jobPosition = new kony.ui.Label({
            "id": "jobPosition",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 1,
            "skin": "sknLbl333333S90",
            "text": "Job Position",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "3dp",
            "width": "95.64%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDetails.add(empName, empId, jobPosition);
        var flxHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "46dp",
            "id": "flxHours",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "61dp",
            "width": "100%",
            "zIndex": 1
        }, {}, {});
        flxHours.setDefaultUnit(kony.flex.DP);
        var flxNormalHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxNormalHours",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlx7099b1Op100Rounded",
            "top": "0%",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxNormalHours.setDefaultUnit(kony.flex.DP);
        var normalRate = new kony.ui.Label({
            "centerX": "51%",
            "id": "normalRate",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS120Prc",
            "text": "15",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblNormalHours = new kony.ui.Label({
            "bottom": "5%",
            "centerX": "50%",
            "id": "lblNormalHours",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS80Prc",
            "text": "Hourly Rate",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxNormalHours.add(normalRate, lblNormalHours);
        var CopyFlexContainer0j14a9333e6d245 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "65dp",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "CopyFlexContainer0j14a9333e6d245",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0d0f6e227f84241",
            "width": "0.50%"
        }, {}, {});
        CopyFlexContainer0j14a9333e6d245.setDefaultUnit(kony.flex.DP);
        CopyFlexContainer0j14a9333e6d245.add();
        var flxStandbyHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxStandbyHours",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx7099b1Op100Rounded",
            "top": "0%",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxStandbyHours.setDefaultUnit(kony.flex.DP);
        var standbyRate = new kony.ui.Label({
            "centerX": "50.00%",
            "id": "standbyRate",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS120Prc",
            "text": "3",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblStandbyHours = new kony.ui.Label({
            "bottom": "5%",
            "centerX": "50%",
            "id": "lblStandbyHours",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS80Prc",
            "text": "Standby Rate",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxStandbyHours.add(standbyRate, lblStandbyHours);
        var CopyFlexContainer0f328884b722a41 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "65dp",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "CopyFlexContainer0f328884b722a41",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0d0f6e227f84241",
            "width": "0.50%"
        }, {}, {});
        CopyFlexContainer0f328884b722a41.setDefaultUnit(kony.flex.DP);
        CopyFlexContainer0f328884b722a41.add();
        var flxOIIOtHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxOIIOtHours",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx7099b1Op100Rounded",
            "top": "0%",
            "width": "25%",
            "zIndex": 1
        }, {}, {});
        flxOIIOtHours.setDefaultUnit(kony.flex.DP);
        var otRate = new kony.ui.Label({
            "centerX": "51%",
            "id": "otRate",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS120Prc",
            "text": "7",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblOIIOTHours = new kony.ui.Label({
            "bottom": "5%",
            "centerX": "50%",
            "id": "lblOIIOTHours",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS80Prc",
            "text": "OT Rate",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxOIIOtHours.add(otRate, lblOIIOTHours);
        var CopyFlexContainer0e4577f1867e942 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "65dp",
            "centerY": "50%",
            "clipBounds": true,
            "height": "100%",
            "id": "CopyFlexContainer0e4577f1867e942",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0d0f6e227f84241",
            "width": "0.50%"
        }, {}, {});
        CopyFlexContainer0e4577f1867e942.setDefaultUnit(kony.flex.DP);
        CopyFlexContainer0e4577f1867e942.add();
        var flxClientOTHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxClientOTHours",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlx7099b1Op100Rounded",
            "top": "0%",
            "width": "24%",
            "zIndex": 1
        }, {}, {});
        flxClientOTHours.setDefaultUnit(kony.flex.DP);
        var nonDiveRate = new kony.ui.Label({
            "centerX": "50%",
            "id": "nonDiveRate",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS120Prc",
            "text": "12",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "15%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblClientOTHours = new kony.ui.Label({
            "bottom": "5%",
            "centerX": "50%",
            "id": "lblClientOTHours",
            "isVisible": true,
            "skin": "sknLbl7099b1FontS80Prc",
            "text": "Non-Dive Rate",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "100%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxClientOTHours.add(nonDiveRate, lblClientOTHours);
        flxHours.add(flxNormalHours, CopyFlexContainer0j14a9333e6d245, flxStandbyHours, CopyFlexContainer0f328884b722a41, flxOIIOtHours, CopyFlexContainer0e4577f1867e942, flxClientOTHours);
        var flxEditDelContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "40dp",
            "id": "flxEditDelContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": 10,
            "width": "20%"
        }, {}, {});
        flxEditDelContainer.setDefaultUnit(kony.flex.DP);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "40dp",
            "zIndex": 4
        }, {}, {});
        flxEdit.setDefaultUnit(kony.flex.DP);
        var lblEdit = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblEdit",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxEdit.add(lblEdit);
        var flxAddDpr = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxAddDpr",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "40dp"
        }, {}, {});
        flxAddDpr.setDefaultUnit(kony.flex.DP);
        var imgAddDPR = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "50%",
            "id": "imgAddDPR",
            "isVisible": true,
            "skin": "slImage",
            "src": "addicon.png",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxAddDpr.add(imgAddDPR);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 3
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
        var imgDeleteCrew = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgDeleteCrew",
            "isVisible": false,
            "skin": "slImage",
            "src": "delete_redd.png",
            "top": "8dp",
            "width": "100%",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblDelete = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxDelete.add(imgDeleteCrew, lblDelete);
        flxEditDelContainer.add(flxEdit, flxAddDpr, flxDelete);
        var FlexContainer0d4f90ec95ce741 = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "FlexContainer0d4f90ec95ce741",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0i3512df7ce224c",
            "top": 61,
            "width": "100%"
        }, {}, {});
        FlexContainer0d4f90ec95ce741.setDefaultUnit(kony.flex.DP);
        FlexContainer0d4f90ec95ce741.add();
        flxCrewDetailsCard.add(lblDprId, imgCrewOrSupervisor, flxDetails, flxHours, flxEditDelContainer, FlexContainer0d4f90ec95ce741);
        flxSegCrewDetails.add(flxCrewDetailsCard);
        return flxSegCrewDetails;
    }
})