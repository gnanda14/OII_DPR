define("flxTempSegDPRHeader", function() {
    return function(controller) {
        var flxTempSegDPRHeader = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTempSegDPRHeader",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgEBEBEBOp100",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTempSegDPRHeader.setDefaultUnit(kony.flex.DP);
        var flxDPRContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "90dp",
            "id": "flxDPRContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "96%"
        }, {}, {});
        flxDPRContainer.setDefaultUnit(kony.flex.DP);
        var flxEmptySpace = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": true,
            "height": "2dp",
            "id": "flxEmptySpace",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxDPRTopLineGreen",
            "top": "5dp",
            "width": "96%",
            "zIndex": 1
        }, {}, {});
        flxEmptySpace.setDefaultUnit(kony.flex.DP);
        flxEmptySpace.add();
        var flxDPRCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2dp",
            "centerY": "50%",
            "clipBounds": true,
            "height": "85dp",
            "id": "flxDPRCard",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "width": "132%",
            "zIndex": 1
        }, {}, {});
        flxDPRCard.setDefaultUnit(kony.flex.DP);
        var flxOptionColor = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxOptionColor",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "-1%",
            "isModalContainer": false,
            "skin": "sknFlxDPRTopLineGreen",
            "top": "0dp",
            "width": "2.50%"
        }, {}, {});
        flxOptionColor.setDefaultUnit(kony.flex.DP);
        flxOptionColor.add();
        var flxOption = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxOption",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0h9abe020a4e047",
            "top": "0",
            "width": "7.99%"
        }, {}, {});
        flxOption.setDefaultUnit(kony.flex.DP);
        var flxoptiondpr = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "40%",
            "id": "flxoptiondpr",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "left": "10%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "90%",
            "zIndex": 10
        }, {}, {});
        flxoptiondpr.setDefaultUnit(kony.flex.DP);
        var lblDpr = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "height": "100%",
            "id": "lblDpr",
            "isVisible": true,
            "left": "0",
            "skin": "sknLblFilterUnselected",
            "text": "",
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
        flxoptiondpr.add(lblDpr);
        var lblAccept = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblAccept",
            "isVisible": false,
            "left": "0",
            "skin": "CopysknLblAccepted0d140b995e20342",
            "text": "",
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
        flxOption.add(flxoptiondpr, lblAccept);
        var flxInfo = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxInfo",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "2%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "63%",
            "zIndex": 3
        }, {}, {});
        flxInfo.setDefaultUnit(kony.flex.DP);
        var flxDateTime = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDateTime",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "14%",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {}, {});
        flxDateTime.setDefaultUnit(kony.flex.DP);
        var imgCalendar = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgCalendar",
            "isVisible": true,
            "left": "5dp",
            "skin": "CopyslImage0c6b08536544246",
            "src": "calgrey.png",
            "top": "0",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblreportDate = new kony.ui.Label({
            "id": "lblreportDate",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLbl333333S90",
            "text": "Sept 12, 2020",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 4,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var reportDate = new kony.ui.Label({
            "id": "reportDate",
            "isVisible": false,
            "left": "2%",
            "skin": "sknLbl333333S90",
            "text": "Sept 12, 2020",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 2,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var imgtime = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgtime",
            "isVisible": true,
            "left": 20,
            "skin": "CopyslImage0c6b08536544246",
            "src": "clockimg.png",
            "top": "0",
            "width": "18dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblTime = new kony.ui.Label({
            "id": "lblTime",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLbl333333S90",
            "text": "01:25",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "4dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDateTime.add(imgCalendar, lblreportDate, reportDate, imgtime, lblTime);
        var flxDPRID = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDPRID",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "12%",
            "width": "100%"
        }, {}, {});
        flxDPRID.setDefaultUnit(kony.flex.DP);
        var imgDpr = new kony.ui.Image2({
            "height": "25dp",
            "id": "imgDpr",
            "isVisible": true,
            "left": 5,
            "skin": "CopyslImage0c6b08536544246",
            "src": "dprbottomsel.png",
            "top": "0",
            "width": "20dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var reportId = new kony.ui.Label({
            "id": "reportId",
            "isVisible": true,
            "left": "3%",
            "maxNumberOfLines": 1,
            "skin": "sknLbl33333380",
            "text": "PROJ_9090099_89898787",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 4,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDRPLabel = new kony.ui.Label({
            "id": "lblDRPLabel",
            "isVisible": true,
            "left": "3.00%",
            "maxNumberOfLines": 1,
            "skin": "sknLbl25536EOp100S100Perc",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDPRID.add(imgDpr, reportId, lblDRPLabel);
        var timeEntries = new kony.ui.Label({
            "id": "timeEntries",
            "isVisible": false,
            "left": "3%",
            "skin": "sknLbl33333380",
            "text": "23/32/32",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "5dp",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxInfo.add(flxDateTime, flxDPRID, timeEntries);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxContainer",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": false,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "27%",
            "zIndex": 2
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxView = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxView",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "34%",
            "zIndex": 10
        }, {}, {});
        flxView.setDefaultUnit(kony.flex.DP);
        var lblView = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblView",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxView.add(lblView);
        var flxSignAccept = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSignAccept",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "33%",
            "zIndex": 10
        }, {}, {});
        flxSignAccept.setDefaultUnit(kony.flex.DP);
        var imgSign = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "65%",
            "id": "imgSign",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imgsignpending.png",
            "top": "0",
            "width": "60%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxSignAccept.add(imgSign);
        var flxRecoverclone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxRecoverclone",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "33%"
        }, {}, {});
        flxRecoverclone.setDefaultUnit(kony.flex.DP);
        var flxDPRIcon = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxDPRIcon",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4669fef159b46",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxDPRIcon.setDefaultUnit(kony.flex.DP);
        var imgRecover = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "70%",
            "id": "imgRecover",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "icn_recover__1_.png",
            "top": "0",
            "width": "60%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxDPRIcon.add(imgRecover);
        var flxClone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxClone",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4669fef159b46",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxClone.setDefaultUnit(kony.flex.DP);
        var lblClone = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblClone",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxClone.add(lblClone);
        flxRecoverclone.add(flxDPRIcon, flxClone);
        flxContainer.add(flxView, flxSignAccept, flxRecoverclone);
        var flxDeleteContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeleteContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": false,
            "left": "0%",
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0dp",
            "width": "27%",
            "zIndex": 2
        }, {}, {});
        flxDeleteContainer.setDefaultUnit(kony.flex.DP);
        var flxEdit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxEdit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4669fef159b46",
            "top": "0dp",
            "width": "34%",
            "zIndex": 20
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
        var flxSubmit = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxSubmit",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4669fef159b46",
            "top": "0dp",
            "width": "33%",
            "zIndex": 10
        }, {}, {});
        flxSubmit.setDefaultUnit(kony.flex.DP);
        var lblSubmit = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblSubmit",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxSubmit.add(lblSubmit);
        var flxDeleteClone = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDeleteClone",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "33%"
        }, {}, {});
        flxDeleteClone.setDefaultUnit(kony.flex.DP);
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4669fef159b46",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
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
        flxDelete.add(lblDelete);
        var flxCloneDpr = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "50%",
            "id": "flxCloneDpr",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d4669fef159b46",
            "top": "0dp",
            "width": "100%",
            "zIndex": 10
        }, {}, {});
        flxCloneDpr.setDefaultUnit(kony.flex.DP);
        var lblCloneDpr = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblCloneDpr",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxCloneDpr.add(lblCloneDpr);
        flxDeleteClone.add(flxDelete, flxCloneDpr);
        flxDeleteContainer.add(flxEdit, flxSubmit, flxDeleteClone);
        flxDPRCard.add(flxOptionColor, flxOption, flxInfo, flxContainer, flxDeleteContainer);
        flxDPRContainer.add(flxEmptySpace, flxDPRCard);
        flxTempSegDPRHeader.add(flxDPRContainer);
        return flxTempSegDPRHeader;
    }
})