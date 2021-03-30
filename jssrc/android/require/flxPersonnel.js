define("flxPersonnel", function() {
    return function(controller) {
        var flxPersonnel = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "80dp",
            "id": "flxPersonnel",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0i26e222e437645",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxPersonnel.setDefaultUnit(kony.flex.DP);
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
        var flxImageContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxImageContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "15%"
        }, {}, {});
        flxImageContainer.setDefaultUnit(kony.flex.DP);
        var flxImage = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "40dp",
            "id": "flxImage",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopyslFbox0f299cd7c026a44",
            "top": "0",
            "width": "40dp"
        }, {}, {});
        flxImage.setDefaultUnit(kony.flex.DP);
        var imgPersonnel = new kony.ui.Image2({
            "centerX": "50%",
            "centerY": "50%",
            "height": "90%",
            "id": "imgPersonnel",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "crewimg.png",
            "top": "0",
            "width": "90%"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        flxImage.add(imgPersonnel);
        flxImageContainer.add(flxImage);
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
            "width": "72%"
        }, {}, {});
        flxDesc.setDefaultUnit(kony.flex.DP);
        var lblName = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblName",
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
            "top": 5,
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblTitle = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblTitle",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0d00d86d7f0fa40",
            "text": "(Rov technician)",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "5dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDesignation = new kony.ui.Label({
            "centerX": "50%",
            "id": "lblDesignation",
            "isVisible": true,
            "left": "0",
            "maxNumberOfLines": 1,
            "skin": "CopydefLabel0e9b39a9c205043",
            "text": "ROV Senior Tecnician - Norway - OOF67G",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "5dp",
            "width": "97%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxDesc.add(lblName, lblTitle, lblDesignation);
        var btnDelete = new kony.ui.Button({
            "focusSkin": "CopysknDummybtnAddCrew0b74c06e4e95947",
            "height": "100%",
            "id": "btnDelete",
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
        flxContainer.add(flxImageContainer, flxDesc, btnDelete);
        flxPersonnel.add(flxContainer);
        return flxPersonnel;
    }
})