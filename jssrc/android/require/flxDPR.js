define("flxDPR", function() {
    return function(controller) {
        var flxDPR = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDPR",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopysknFlxBgEBEBEBOp",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxDPR.setDefaultUnit(kony.flex.DP);
        var flxCrewDetailsCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "3dp",
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxCrewDetailsCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopysknFlxBgFFFFFF1",
            "top": "3dp",
            "width": "95%",
            "zIndex": 1
        }, {}, {});
        flxCrewDetailsCard.setDefaultUnit(kony.flex.DP);
        var imgCrewOrSupervisor = new kony.ui.Image2({
            "height": "35dp",
            "id": "imgCrewOrSupervisor",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "crewimg_1.png",
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
        var systemid = new kony.ui.Label({
            "id": "systemid",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl1",
            "text": "PROJ_0000141391-1614749173891",
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
        var reportDateTime = new kony.ui.Label({
            "id": "reportDateTime",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl",
            "text": "March 3, 2021 10:56",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "8dp",
            "width": "95.64%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDetails.add(systemid, reportDateTime);
        var flxHours = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxHours",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "20%",
            "zIndex": 1
        }, {}, {});
        flxHours.setDefaultUnit(kony.flex.DP);
        var lblHours = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblHours",
            "isVisible": true,
            "left": "0dp",
            "skin": "sknHours",
            "text": "18.00",
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
        flxHours.add(lblHours);
        flxCrewDetailsCard.add(imgCrewOrSupervisor, flxDetails, flxHours);
        flxDPR.add(flxCrewDetailsCard);
        return flxDPR;
    }
})