define("flxEvents", function() {
    return function(controller) {
        var flxEvents = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxEvents",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i26e222e437645",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxEvents.setDefaultUnit(kony.flex.DP);
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
        var lblSystemId = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblSystemId",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0e2c72e4ad0434d",
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
        var lblMilesstone = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblMilesstone",
            "isVisible": false,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0e2c72e4ad0434d",
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
        var lblEventType = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblEventType",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0e9b39a9c205043",
            "text": "Event Type",
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
        var lblTime = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblTime",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0e9b39a9c205043",
            "text": "11: 30 - 12:45",
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
        flxDesc.add(lblSystemId, lblMilesstone, lblEventType, lblTime);
        var btnEventDelete = new kony.ui.Button({
            "focusSkin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "height": "100%",
            "id": "btnEventDelete",
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
        flxContainer.add(flxDesc, btnEventDelete);
        flxEvents.add(flxContainer);
        return flxEvents;
    }
})