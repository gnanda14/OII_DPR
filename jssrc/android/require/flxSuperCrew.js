define("flxSuperCrew", function() {
    return function(controller) {
        var flxSuperCrew = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxSuperCrew",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBgEBEBEBOp100",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxSuperCrew.setDefaultUnit(kony.flex.DP);
        var flxCrewDetailsCard = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "2dp",
            "centerX": "50%",
            "clipBounds": true,
            "id": "flxCrewDetailsCard",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "sknFlxBgFFFFFF",
            "top": "2dp",
            "width": "96%",
            "zIndex": 1
        }, {}, {});
        flxCrewDetailsCard.setDefaultUnit(kony.flex.DP);
        var imgCrewOrSupervisor = new kony.ui.Image2({
            "height": "32dp",
            "id": "imgCrewOrSupervisor",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "crewimg.png",
            "top": "13dp",
            "width": "35dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxDetails = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 7,
            "clipBounds": true,
            "height": "50dp",
            "id": "flxDetails",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "15%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "71.36%"
        }, {}, {});
        flxDetails.setDefaultUnit(kony.flex.DP);
        var empName = new kony.ui.Label({
            "id": "empName",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl0fdadb59efe004d",
            "text": "Nakul Gupta",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "20dp",
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
        flxDetails.add(empName, empId);
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
        var flxDelete = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDelete",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "right": 5,
            "skin": "slFbox",
            "top": "0dp",
            "width": "40dp",
            "zIndex": 3
        }, {}, {});
        flxDelete.setDefaultUnit(kony.flex.DP);
        var lblDelete = new kony.ui.Label({
            "centerX": "50%",
            "centerY": "50%",
            "id": "lblDelete",
            "isVisible": true,
            "left": "0",
            "skin": "sknBlueIconColor",
            "text": "",
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
        flxEditDelContainer.add(flxDelete);
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
        flxCrewDetailsCard.add(imgCrewOrSupervisor, flxDetails, flxEditDelContainer, FlexContainer0d4f90ec95ce741);
        flxSuperCrew.add(flxCrewDetailsCard);
        return flxSuperCrew;
    }
})