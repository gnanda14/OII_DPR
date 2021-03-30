define(function() {
    return function(controller) {
        var timepicker = new kony.ui.FlexContainer(extendConfig({
            "centerY": "50%",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "timepicker",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "3dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_i0d0c4869ce247059c65467fafa1e378,
            "skin": "CopyslFbox0e05a7dd5431f41",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "timepicker"), extendConfig({}, controller.args[1], "timepicker"), extendConfig({}, controller.args[2], "timepicker"));
        timepicker.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer(extendConfig({
            "centerX": "50.00%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "60%",
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0b9162dd86ac643",
            "top": "10%",
            "width": "90%"
        }, controller.args[0], "flxContainer"), extendConfig({}, controller.args[1], "flxContainer"), extendConfig({}, controller.args[2], "flxContainer"));
        flxContainer.setDefaultUnit(kony.flex.DP);
        var navTimepicker = new kony.ui.NativeContainer(extendConfig({
            "centerX": "50.42%",
            "height": "87%",
            "id": "navTimepicker",
            "isVisible": true,
            "left": "0%",
            "top": "0%",
            "width": "101%",
            "zIndex": 1
        }, controller.args[0], "navTimepicker"), extendConfig({}, controller.args[1], "navTimepicker"), extendConfig({}, controller.args[2], "navTimepicker"));
        var CopyFlexContainer0i4586efb8ddb40 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "0.50%",
            "id": "CopyFlexContainer0i4586efb8ddb40",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0a058b3add78c4c",
            "top": "0.50%",
            "width": "100%"
        }, controller.args[0], "CopyFlexContainer0i4586efb8ddb40"), extendConfig({}, controller.args[1], "CopyFlexContainer0i4586efb8ddb40"), extendConfig({}, controller.args[2], "CopyFlexContainer0i4586efb8ddb40"));
        CopyFlexContainer0i4586efb8ddb40.setDefaultUnit(kony.flex.DP);
        CopyFlexContainer0i4586efb8ddb40.add();
        var flxEnableTouch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "12%",
            "id": "flxEnableTouch",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBg000000Op0",
            "width": "100%",
            "zIndex": 5
        }, controller.args[0], "flxEnableTouch"), extendConfig({}, controller.args[1], "flxEnableTouch"), extendConfig({}, controller.args[2], "flxEnableTouch"));
        flxEnableTouch.setDefaultUnit(kony.flex.DP);
        var btnCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "CopysknBtn0b3827f3b9a9f4b",
            "height": "100%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "0%",
            "onClick": controller.AS_onCancel_b11314e6464d48edacae90cd01e6e6a3,
            "skin": "CopysknBtn0b3827f3b9a9f4b",
            "text": "",
            "top": "0dp",
            "width": "50%",
            "zIndex": 2
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        var FlexContainer0f565ad12a6ae44 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "FlexContainer0f565ad12a6ae44",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0a058b3add78c4c",
            "top": "0",
            "width": "1%"
        }, controller.args[0], "FlexContainer0f565ad12a6ae44"), extendConfig({}, controller.args[1], "FlexContainer0f565ad12a6ae44"), extendConfig({}, controller.args[2], "FlexContainer0f565ad12a6ae44"));
        FlexContainer0f565ad12a6ae44.setDefaultUnit(kony.flex.DP);
        FlexContainer0f565ad12a6ae44.add();
        var btnApply = new kony.ui.Button(extendConfig({
            "focusSkin": "CopysknBtn0b3827f3b9a9f4b",
            "height": "100%",
            "id": "btnApply",
            "isVisible": true,
            "left": "0.00%",
            "onClick": controller.AS_onApply_fd13b8339e14436190ef03978a6d3789,
            "skin": "CopysknBtn0b3827f3b9a9f4b",
            "text": "",
            "top": "0dp",
            "width": "50%",
            "zIndex": 2
        }, controller.args[0], "btnApply"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnApply"), extendConfig({}, controller.args[2], "btnApply"));
        flxEnableTouch.add(btnCancel, FlexContainer0f565ad12a6ae44, btnApply);
        flxContainer.add(navTimepicker, CopyFlexContainer0i4586efb8ddb40, flxEnableTouch);
        timepicker.add(flxContainer);
        return timepicker;
    }
})