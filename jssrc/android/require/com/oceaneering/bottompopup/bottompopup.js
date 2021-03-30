define(function() {
    return function(controller) {
        var bottompopup = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "bottompopup",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0de7efbd008044a",
            "top": "0",
            "width": "100%",
            "zIndex": 100
        }, controller.args[0], "bottompopup"), extendConfig({}, controller.args[1], "bottompopup"), extendConfig({}, controller.args[2], "bottompopup"));
        bottompopup.setDefaultUnit(kony.flex.DP);
        var flxBottomContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxBottomContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%",
            "zIndex": 50
        }, controller.args[0], "flxBottomContainer"), extendConfig({}, controller.args[1], "flxBottomContainer"), extendConfig({}, controller.args[2], "flxBottomContainer"));
        flxBottomContainer.setDefaultUnit(kony.flex.DP);
        var flxBottomPopUp = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0dp",
            "clipBounds": true,
            "height": "210dp",
            "id": "flxBottomPopUp",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0dedbb1043dab4a",
            "width": "100%",
            "zIndex": 50
        }, controller.args[0], "flxBottomPopUp"), extendConfig({}, controller.args[1], "flxBottomPopUp"), extendConfig({}, controller.args[2], "flxBottomPopUp"));
        flxBottomPopUp.setDefaultUnit(kony.flex.DP);
        var flxTopFlex = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "5dp",
            "id": "flxTopFlex",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0a7e1574d797c4a",
            "top": 10,
            "width": "20%"
        }, controller.args[0], "flxTopFlex"), extendConfig({}, controller.args[1], "flxTopFlex"), extendConfig({}, controller.args[2], "flxTopFlex"));
        flxTopFlex.setDefaultUnit(kony.flex.DP);
        flxTopFlex.add();
        var lblBottomMessage = new kony.ui.Label(extendConfig({
            "bottom": "100dp",
            "centerX": "50%",
            "id": "lblBottomMessage",
            "isVisible": true,
            "maxNumberOfLines": 3,
            "skin": "CopydefLabel0ib3bfd86f22141",
            "text": "Entered Username and password is incorrect",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "90%"
        }, controller.args[0], "lblBottomMessage"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 1, 0, 1],
            "paddingInPixel": false
        }, controller.args[1], "lblBottomMessage"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblBottomMessage"));
        var btnDismissBottomPopUp = new kony.ui.Button(extendConfig({
            "bottom": "20dp",
            "centerX": "50.00%",
            "focusSkin": "CopydefBtnNormal0fed26ae8048c49",
            "height": "50dp",
            "id": "btnDismissBottomPopUp",
            "isVisible": true,
            "left": "0",
            "skin": "CopydefBtnNormal0a0c60a3f427a41",
            "text": "OK",
            "width": "80%",
            "zIndex": 3
        }, controller.args[0], "btnDismissBottomPopUp"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnDismissBottomPopUp"), extendConfig({}, controller.args[2], "btnDismissBottomPopUp"));
        var imgToShow = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "height": "45dp",
            "id": "imgToShow",
            "isVisible": false,
            "left": "110dp",
            "skin": "slImage",
            "src": "face.png",
            "top": "30dp",
            "width": "150dp"
        }, controller.args[0], "imgToShow"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgToShow"), extendConfig({}, controller.args[2], "imgToShow"));
        var flxEnableTouch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "20dp",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxEnableTouch",
            "isVisible": false,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg000000Op0",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxEnableTouch"), extendConfig({}, controller.args[1], "flxEnableTouch"), extendConfig({}, controller.args[2], "flxEnableTouch"));
        flxEnableTouch.setDefaultUnit(kony.flex.DP);
        var btnBottomNotNow = new kony.ui.Button(extendConfig({
            "focusSkin": "sknBtnDB304DOp100FontFFFFFFOp100S100",
            "height": "100%",
            "id": "btnBottomNotNow",
            "isVisible": true,
            "left": "7%",
            "onClick": controller.AS_Button_e62486b6afc941ffbe282aa6e03121ff,
            "skin": "sknBtnDB304DOp100FontFFFFFFOp100S100",
            "text": "Not Now",
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "btnBottomNotNow"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBottomNotNow"), extendConfig({}, controller.args[2], "btnBottomNotNow"));
        var btnBottomEnable = new kony.ui.Button(extendConfig({
            "focusSkin": "CopysknBtn0a17e2b5e44dd4a",
            "height": "100%",
            "id": "btnBottomEnable",
            "isVisible": true,
            "left": "5%",
            "skin": "sknBtn2EA332Op100FontFFFFFFOp100S100",
            "text": "Enable",
            "top": "0dp",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "btnBottomEnable"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnBottomEnable"), extendConfig({}, controller.args[2], "btnBottomEnable"));
        flxEnableTouch.add(btnBottomNotNow, btnBottomEnable);
        flxBottomPopUp.add(flxTopFlex, lblBottomMessage, btnDismissBottomPopUp, imgToShow, flxEnableTouch);
        var flxBottomCover = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "height": "15dp",
            "id": "flxBottomCover",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0b66cbdbcef0743",
            "width": "100%",
            "zIndex": 15
        }, controller.args[0], "flxBottomCover"), extendConfig({}, controller.args[1], "flxBottomCover"), extendConfig({}, controller.args[2], "flxBottomCover"));
        flxBottomCover.setDefaultUnit(kony.flex.DP);
        flxBottomCover.add();
        flxBottomContainer.add(flxBottomPopUp, flxBottomCover);
        bottompopup.add(flxBottomContainer);
        return bottompopup;
    }
})