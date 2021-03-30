define("flxTempSegHistory", function() {
    return function(controller) {
        var flxTempSegHistory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTempSegHistory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTempSegHistory.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "centerX": "50.00%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0b1712ccf59364f",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxStatus = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "35dp",
            "id": "flxStatus",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "3%",
            "isModalContainer": false,
            "skin": "sknFlxFF9900Op100BorderFF9900Op100S1Circle",
            "top": "10dp",
            "width": "35dp",
            "zIndex": 1
        }, {}, {});
        flxStatus.setDefaultUnit(kony.flex.DP);
        var lblStatus = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblStatus",
            "isVisible": true,
            "skin": "sknLblAccepted",
            "text": "",
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
        flxStatus.add(lblStatus);
        var flxSign = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "60dp",
            "id": "flxSign",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "1%",
            "skin": "slFbox",
            "top": "0dp",
            "width": "15%",
            "zIndex": 10
        }, {}, {});
        flxSign.setDefaultUnit(kony.flex.DP);
        var imgSign = new kony.ui.Image2({
            "centerX": "60%",
            "centerY": "50%",
            "height": "50%",
            "id": "imgSign",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imgsignpending.png",
            "top": "0",
            "width": "50%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var Label0f43b8b0d7d9441 = new kony.ui.Label({
            "id": "Label0f43b8b0d7d9441",
            "isVisible": false,
            "left": "0",
            "skin": "CopydefLabel0d10640dc8aa147",
            "text": "",
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
        flxSign.add(imgSign, Label0f43b8b0d7d9441);
        var flxDprHsitory = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDprHsitory",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxDprHsitory.setDefaultUnit(kony.flex.DP);
        var dprId = new kony.ui.Label({
            "id": "dprId",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl0e6ec122c667148",
            "text": "PROJ_0000147301_278783783724",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 8,
            "width": "70%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var projectId = new kony.ui.Label({
            "id": "projectId",
            "isVisible": false,
            "left": "15%",
            "maxNumberOfLines": 1,
            "skin": "sknLbl333333Op100S100Perc",
            "text": "0000144516",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 0,
            "width": "28%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblreportDate = new kony.ui.Label({
            "bottom": 0,
            "id": "lblreportDate",
            "isVisible": true,
            "left": "15%",
            "maxNumberOfLines": 1,
            "right": "0%",
            "skin": "sknLbl333333Op100S100Perc",
            "text": "Report Date : 2005-07-15",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "7dp",
            "width": "56.00%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var reportDate = new kony.ui.Label({
            "bottom": 0,
            "id": "reportDate",
            "isVisible": false,
            "left": "15%",
            "maxNumberOfLines": 1,
            "right": "0%",
            "skin": "sknLbl333333Op100S100Perc",
            "text": "Report Date : 2005-07-15",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "7dp",
            "width": "56.00%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSignedby = new kony.ui.Label({
            "bottom": 4,
            "id": "lblSignedby",
            "isVisible": false,
            "left": "15%",
            "maxNumberOfLines": 1,
            "right": "0%",
            "skin": "sknLbl333333Op100S100Perc",
            "text": "Signed By : ",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "7dp",
            "width": "72%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDprHsitory.add(dprId, projectId, lblreportDate, reportDate, lblSignedby);
        flxContainer.add(flxStatus, flxSign, flxDprHsitory);
        var FlexContainer0gbc19fc7830f4c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "2dp",
            "id": "FlexContainer0gbc19fc7830f4c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0gdd43c3e67d348",
            "top": 2,
            "width": "100%"
        }, {}, {});
        FlexContainer0gbc19fc7830f4c.setDefaultUnit(kony.flex.DP);
        FlexContainer0gbc19fc7830f4c.add();
        flxTempSegHistory.add(flxContainer, FlexContainer0gbc19fc7830f4c);
        return flxTempSegHistory;
    }
})