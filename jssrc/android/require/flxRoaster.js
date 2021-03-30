define("flxRoaster", function() {
    return function(controller) {
        var flxRoaster = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxRoaster",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i26e222e437645",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxRoaster.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "96%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0b41401701f204c",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxDesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "86%"
        }, {}, {});
        flxDesc.setDefaultUnit(kony.flex.DP);
        var reportId = new kony.ui.Label({
            "centerX": "50%",
            "id": "reportId",
            "isVisible": false,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0cbc8128b9fd143",
            "text": "Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 10,
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblName = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0f26aa80fa65248",
            "text": "Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 10,
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblClass = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblClass",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0i8e80cab792241",
            "text": "Class",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "10dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDivision = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblDivision",
            "isVisible": false,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0e9b39a9c205043",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "5dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDesc.add(reportId, lblName, lblClass, lblDivision);
        var btnRoasterDelete = new kony.ui.Button({
            "focusSkin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "height": "100%",
            "id": "btnRoasterDelete",
            "isVisible": true,
            "right": "0%",
            "skin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "text": "",
            "top": "0dp",
            "width": "12%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxContainer.add(flxDesc, btnRoasterDelete);
        flxRoaster.add(flxContainer);
        return flxRoaster;
    }
})