define("frmSignature", function() {
    return function(controller) {
        function addWidgetsfrmSignature() {
            this.setDefaultUnit(kony.flex.DP);
            var flxHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7.50%",
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
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_eb1d76a1ec654bc0afd1b208af3b5210,
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
                "text": "Add Signature",
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
            flxHeader.add(flxBack, lblTitle);
            var flxSign = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92.50%",
                "id": "flxSign",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0fc1b243323d744",
                "top": "0%",
                "width": "100%"
            }, {}, {});
            flxSign.setDefaultUnit(kony.flex.DP);
            var flxSignInfo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                "centerX": "50%",
                "clipBounds": true,
                "id": "flxSignInfo",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0a06e04dbb39e4b",
                "top": "2%",
                "width": "96%"
            }, {}, {});
            flxSignInfo.setDefaultUnit(kony.flex.DP);
            var flxProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxProject",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxProject.setDefaultUnit(kony.flex.DP);
            var lblproj = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblproj",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Project ID : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblProjectId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblProjectId",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProject.add(lblproj, lblProjectId);
            var flxClientName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxClientName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxClientName.setDefaultUnit(kony.flex.DP);
            var CopyLabel0fb21d74eefb04a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0fb21d74eefb04a",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Client : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblClientName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblClientName",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": "80%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxClientName.add(CopyLabel0fb21d74eefb04a, lblClientName);
            var flxRepName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxRepName",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRepName.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ce13b4d61cba41 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0ce13b4d61cba41",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Name : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblRepName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRepName",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRepName.add(CopyLabel0ce13b4d61cba41, lblRepName);
            var flxDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "35dp",
                "id": "flxDate",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDate.setDefaultUnit(kony.flex.DP);
            var CopyLabel0i4d5bfd2cbae4a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopyLabel0i4d5bfd2cbae4a",
                "isVisible": true,
                "left": "3%",
                "skin": "CopydefLabel0b76f4723b87248",
                "text": "Report Date : ",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSigndate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSigndate",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 1,
                "skin": "CopydefLabel0jadaed03870a46",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDate.add(CopyLabel0i4d5bfd2cbae4a, lblSigndate);
            flxSignInfo.add(flxProject, flxClientName, flxRepName, flxDate);
            var signaturecapture = new com.konymp.signaturecapture({
                "bottom": 2,
                "clipBounds": true,
                "height": "72%",
                "id": "signaturecapture",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "overrides": {
                    "signaturecapture": {
                        "right": "viz.val_cleared",
                        "top": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared",
                        "centerY": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            signaturecapture.penColor = "000000";
            signaturecapture.saveTo = "Device";
            signaturecapture.saveAs = "png";
            signaturecapture.canvasBackground = "FFFFFF";
            signaturecapture.saveSignature = true;
            flxSign.add(flxSignInfo, signaturecapture);
            this.add(flxHeader, flxSign);
        };
        return [{
            "addWidgets": addWidgetsfrmSignature,
            "enabledForIdleTimeout": false,
            "id": "frmSignature",
            "layoutType": kony.flex.FLOW_VERTICAL,
            "needAppMenu": false,
            "skin": "sknFrmFFD80FOp100"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FLOW_VERTICAL,
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