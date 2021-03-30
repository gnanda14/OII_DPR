define("frmBrowser", function() {
    return function(controller) {
        function addWidgetsfrmBrowser() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeader.setDefaultUnit(kony.flex.DP);
            var flxBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_d0d00b2287db4058b535fae5ffad4ee7,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxBack.setDefaultUnit(kony.flex.DP);
            var lblBack = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblBack",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c533b06a2bdf4b",
                "text": "",
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
            flxBack.add(lblBack);
            var lblTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblTitle",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Personnel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "30%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxSubmitDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "focusSkin": "CopyslFbox0da400fdf9a154c",
                "height": "60%",
                "id": "flxSubmitDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "50dp",
                "skin": "CopyslFbox0c138b65e78b24e",
                "top": "8dp",
                "width": "19%",
                "zIndex": 5
            }, {}, {});
            flxSubmitDPR.setDefaultUnit(kony.flex.DP);
            var Image0be2c3c5546964a = new kony.ui.Image2({
                "centerY": "50%",
                "height": "70%",
                "id": "Image0be2c3c5546964a",
                "isVisible": false,
                "left": "7dp",
                "skin": "slImage",
                "src": "imgsubmit.png",
                "top": "0",
                "width": "15%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblTitle0g1dc2217dc4f46 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50.00%",
                "id": "CopylblTitle0g1dc2217dc4f46",
                "isVisible": true,
                "right": 5,
                "skin": "CopysknLblFFFFFFOp0gf5a2b56c88a49",
                "text": "Submit",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSubmitDPR.add(Image0be2c3c5546964a, CopylblTitle0g1dc2217dc4f46);
            var flxOption = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxOption",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopyslFbox0cc16b41980e34d",
                "width": "45dp",
                "zIndex": 5
            }, {}, {});
            flxOption.setDefaultUnit(kony.flex.DP);
            var CopylblSearchDpr0dce97f81c3db4e = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblSearchDpr0dce97f81c3db4e",
                "isVisible": true,
                "left": "0",
                "skin": "sknSearchUnSelected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 5
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxOption.add(CopylblSearchDpr0dce97f81c3db4e);
            flxHeader.add(flxBack, lblTitle, flxSubmitDPR, flxOption);
            var flxLoading = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxLoading",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx000000Op40",
                "width": "100%",
                "zIndex": 18
            }, {}, {});
            flxLoading.setDefaultUnit(kony.flex.DP);
            var imgLoading = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "10%",
                "id": "imgLoading",
                "isVisible": true,
                "skin": "slImage",
                "src": "loading.gif",
                "width": "30%",
                "zIndex": 15
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoading.add(imgLoading);
            var flxbrowser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxbrowser",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0g678afd2cb4549",
                "top": "0",
                "width": "100%",
                "zIndex": 30
            }, {}, {});
            flxbrowser.setDefaultUnit(kony.flex.DP);
            var CopyflxHeaderAssetTools0e047549c0f4641 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "CopyflxHeaderAssetTools0e047549c0f4641",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            CopyflxHeaderAssetTools0e047549c0f4641.setDefaultUnit(kony.flex.DP);
            var flxBrowserback = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBrowserback",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_cb8740b765fe45d08c549d96be247f2f,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxBrowserback.setDefaultUnit(kony.flex.DP);
            var CopylblBack0c2a0d1a8d07f48 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblBack0c2a0d1a8d07f48",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0c533b06a2bdf4b",
                "text": "",
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
            flxBrowserback.add(CopylblBack0c2a0d1a8d07f48);
            var CopylblHeaderTools0f73011f758ce42 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblHeaderTools0f73011f758ce42",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Browser",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxHeaderAssetTools0e047549c0f4641.add(flxBrowserback, CopylblHeaderTools0f73011f758ce42);
            var pdfBrowser = new kony.ui.Browser({
                "detectTelNumber": true,
                "enableZoom": true,
                "height": "93%",
                "id": "pdfBrowser",
                "isVisible": true,
                "left": "0",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxbrowser.add(CopyflxHeaderAssetTools0e047549c0f4641, pdfBrowser);
            this.add(flxHeader, flxLoading, flxbrowser);
        };
        return [{
            "addWidgets": addWidgetsfrmBrowser,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmBrowser",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "postShow": controller.AS_Form_c96496a76d364d24ba36e8eab99222d1,
            "skin": "sknFrmFFD80FOp100"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "retainScrollPosition": false,
            "titleBar": true,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});