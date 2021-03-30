define(function() {
    return function(controller) {
        var signaturecapture = new kony.ui.FlexContainer(extendConfig({
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "signaturecapture",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "postShow": controller.AS_FlexContainer_dbc6ea6146184b9480a2aca36911fe41,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "signaturecapture"), extendConfig({}, controller.args[1], "signaturecapture"), extendConfig({}, controller.args[2], "signaturecapture"));
        signaturecapture.setDefaultUnit(kony.flex.DP);
        var lblCancel = new kony.ui.Label(extendConfig({
            "id": "lblCancel",
            "isVisible": true,
            "onTouchStart": controller.AS_Label_ee3d0dc15813481b90244691381b13c6,
            "right": "5%",
            "skin": "CopykonympscSknLblCancel0c64ba31509d84b",
            "text": "Clear",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "1%",
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, controller.args[0], "lblCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [4, 1, 4, 1],
            "paddingInPixel": false
        }, controller.args[1], "lblCancel"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblCancel"));
        var flxCanvas = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "clipBounds": true,
            "height": "80%",
            "id": "flxCanvas",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "skin": "CopykonympscSknFlxCanvas0aae3253fec1a4c",
            "top": "7%",
            "width": "94%",
            "zIndex": 1
        }, controller.args[0], "flxCanvas"), extendConfig({}, controller.args[1], "flxCanvas"), extendConfig({}, controller.args[2], "flxCanvas"));
        flxCanvas.setDefaultUnit(kony.flex.DP);
        var natConSignaturePad = new kony.ui.NativeContainer(extendConfig({
            "centerX": "50%",
            "height": "100%",
            "id": "natConSignaturePad",
            "isVisible": true,
            "left": "0%",
            "onCreated": controller.AS_NativeContainer_d0a138986d7045328d87299e8b8ba8eb,
            "top": "0%",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "natConSignaturePad"), extendConfig({}, controller.args[1], "natConSignaturePad"), extendConfig({}, controller.args[2], "natConSignaturePad"));
        flxCanvas.add(natConSignaturePad);
        var flxSave = new kony.ui.FlexContainer(extendConfig({
            "bottom": "2%",
            "clipBounds": true,
            "height": "8%",
            "id": "flxSave",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "width": "100%"
        }, controller.args[0], "flxSave"), extendConfig({}, controller.args[1], "flxSave"), extendConfig({}, controller.args[2], "flxSave"));
        flxSave.setDefaultUnit(kony.flex.DP);
        var btnSave = new kony.ui.Button(extendConfig({
            "focusSkin": "CopykonympscSknBtnSave0h7cd756289e540",
            "height": "95%",
            "id": "btnSave",
            "isVisible": true,
            "left": "5%",
            "onClick": controller.AS_Button_g1e0000eb4ca482fa04057f8675a048b,
            "skin": "CopykonympscSknBtnSave0h7cd756289e540",
            "text": "Save",
            "top": "2%",
            "width": "42%",
            "zIndex": 1
        }, controller.args[0], "btnSave"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnSave"), extendConfig({}, controller.args[2], "btnSave"));
        var btnCancel = new kony.ui.Button(extendConfig({
            "focusSkin": "CopykonympscSknBtnSave0j000067a9a8a47",
            "height": "95%",
            "id": "btnCancel",
            "isVisible": true,
            "left": "5%",
            "onClick": controller.AS_onClick_bdb8dc16cfa445849375e37804e00e59,
            "right": "3%",
            "skin": "CopykonympscSknBtnSave0j000067a9a8a47",
            "text": "Cancel",
            "top": "2%",
            "width": "40%",
            "zIndex": 1
        }, controller.args[0], "btnCancel"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "displayText": true,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "btnCancel"), extendConfig({}, controller.args[2], "btnCancel"));
        flxSave.add(btnSave, btnCancel);
        signaturecapture.add(lblCancel, flxCanvas, flxSave);
        return signaturecapture;
    }
})