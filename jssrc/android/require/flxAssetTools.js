define("flxAssetTools", function() {
    return function(controller) {
        var flxAssetTools = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "74dp",
            "id": "flxAssetTools",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i26e222e437645",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAssetTools.setDefaultUnit(kony.flex.DP);
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
        var imgAssetTools = new kony.ui.Image2({
            "bottom": 10,
            "centerY": "50%",
            "height": "40dp",
            "id": "imgAssetTools",
            "isVisible": true,
            "left": "3%",
            "skin": "slImage",
            "src": "equipment.png",
            "top": "10dp",
            "width": "28dp",
            "zIndex": 1
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var flxDesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "74%"
        }, {}, {});
        flxDesc.setDefaultUnit(kony.flex.DP);
        var lblType = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblType",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0e2c72e4ad0434d",
            "text": "Type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "3dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblId = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblId",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0e9b39a9c205043",
            "text": "ID",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 5,
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblAssetType = new kony.ui.Label({
            "bottom": "7dp",
            "centerX": "50%",
            "id": "lblAssetType",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0e9b39a9c205043",
            "text": "Asset Type",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "3dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDesc.add(lblType, lblId, lblAssetType);
        var btnAssetDelete = new kony.ui.Button({
            "focusSkin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "height": "100%",
            "id": "btnAssetDelete",
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
        flxContainer.add(imgAssetTools, flxDesc, btnAssetDelete);
        flxAssetTools.add(flxContainer);
        return flxAssetTools;
    }
})