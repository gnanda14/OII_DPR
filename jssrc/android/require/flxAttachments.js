define("flxAttachments", function() {
    return function(controller) {
        var flxAttachments = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "85dp",
            "id": "flxAttachments",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i26e222e437645",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxAttachments.setDefaultUnit(kony.flex.DP);
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
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "1%",
            "isModalContainer": false,
            "skin": "CopyslFbox0c92510993aa649",
            "top": "0",
            "width": "14%"
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgAttach = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "95%",
            "id": "imgAttach",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "gallery.png",
            "top": "0",
            "width": "95%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgAttach);
        var flxDesc = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxDesc",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "59%"
        }, {}, {});
        flxDesc.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblName",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0h13456eff0aa4a",
            "text": "Name",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "8dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblType = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblType",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0eac5c57e841042",
            "text": "Date Uploaded",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 4,
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblSize = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblSize",
            "isVisible": true,
            "left": "0dp",
            "maxNumberOfLines": 1,
            "maxWidth": "90%",
            "skin": "CopydefLabel0eac5c57e841042",
            "text": "Size",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": 4,
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [4, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDesc.add(lblName, lblType, lblSize);
        var flxActions = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxActions",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": true,
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "25%"
        }, {}, {});
        flxActions.setDefaultUnit(kony.flex.DP);
        var btnView = new kony.ui.Button({
            "focusSkin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "height": "100%",
            "id": "btnView",
            "isVisible": true,
            "right": "0%",
            "skin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "text": "",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var btnDelete = new kony.ui.Button({
            "focusSkin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "height": "100%",
            "id": "btnDelete",
            "isVisible": true,
            "right": "0%",
            "skin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "text": "",
            "top": "0dp",
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxActions.add(btnView, btnDelete);
        flxContainer.add(flxImage, flxDesc, flxActions);
        flxAttachments.add(flxContainer);
        return flxAttachments;
    }
})