define("frmNewLogin", function() {
    return function(controller) {
        function addWidgetsfrmNewLogin() {
            this.setDefaultUnit(kony.flex.DP);
            var flxTopNavigation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "8%",
                "id": "flxTopNavigation",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxTopNavigation.setDefaultUnit(kony.flex.DP);
            var lblTopHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTopHeader",
                "isVisible": true,
                "left": 25,
                "skin": "sknLblHeader",
                "text": "OII-DPR",
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
            var imgLogo = new kony.ui.Image2({
                "centerY": "45%",
                "height": "60%",
                "id": "imgLogo",
                "isVisible": true,
                "right": 10,
                "skin": "slImage",
                "src": "oceaneering.png",
                "top": "2%",
                "width": "140dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTopNavigation.add(lblTopHeader, imgLogo);
            var flxLogin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "92%",
                "id": "flxLogin",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBgEBEEF5",
                "top": "8%",
                "width": "100%"
            }, {}, {});
            flxLogin.setDefaultUnit(kony.flex.DP);
            var flxLoginHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "17%",
                "id": "flxLoginHeader",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxBGF3F7FA",
                "top": "2%",
                "width": "95%"
            }, {}, {});
            flxLoginHeader.setDefaultUnit(kony.flex.DP);
            var flxBadges = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "70%",
                "id": "flxBadges",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5%",
                "width": "100%"
            }, {}, {});
            flxBadges.setDefaultUnit(kony.flex.DP);
            var flxBadge1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBadge1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "20%"
            }, {}, {});
            flxBadge1.setDefaultUnit(kony.flex.DP);
            var imgBadge1 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "92%",
                "id": "imgBadge1",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imgbadge1.png",
                "top": "0",
                "width": "96%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBadge1.add(imgBadge1);
            var flxBadge2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBadge2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%"
            }, {}, {});
            flxBadge2.setDefaultUnit(kony.flex.DP);
            var imgBadge2 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "92%",
                "id": "imgBadge2",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imgbadge2.png",
                "top": "0",
                "width": "96%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBadge2.add(imgBadge2);
            var flxBadge3 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBadge3",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%"
            }, {}, {});
            flxBadge3.setDefaultUnit(kony.flex.DP);
            var imgBadge3 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "92%",
                "id": "imgBadge3",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imgbadge3.png",
                "top": "0",
                "width": "96%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBadge3.add(imgBadge3);
            var flxBadge4 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBadge4",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%"
            }, {}, {});
            flxBadge4.setDefaultUnit(kony.flex.DP);
            var imgBadge4 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "92%",
                "id": "imgBadge4",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imgbadge4.png",
                "top": "0",
                "width": "96%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBadge4.add(imgBadge4);
            var flxBadge5 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxBadge5",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "20%"
            }, {}, {});
            flxBadge5.setDefaultUnit(kony.flex.DP);
            var imgBadge5 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "92%",
                "id": "imgBadge5",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "imgbadge5.png",
                "top": "0",
                "width": "96%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxBadge5.add(imgBadge5);
            flxBadges.add(flxBadge1, flxBadge2, flxBadge3, flxBadge4, flxBadge5);
            var imgHomeLogo = new kony.ui.Image2({
                "centerX": "50%",
                "height": "50%",
                "id": "imgHomeLogo",
                "isVisible": false,
                "left": 0,
                "skin": "slImage",
                "src": "homelogo.gif",
                "top": "5dp",
                "width": "110%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxLoginHeader.add(flxBadges, imgHomeLogo);
            var flxLoginMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "79%",
                "id": "flxLoginMain",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxWhiteBG",
                "top": "0",
                "width": "95%"
            }, {}, {});
            flxLoginMain.setDefaultUnit(kony.flex.DP);
            var flxSigninHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxSigninHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "100%"
            }, {}, {});
            flxSigninHeader.setDefaultUnit(kony.flex.DP);
            var lblSigninHeader = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblSigninHeader",
                "isVisible": true,
                "left": "0",
                "skin": "CopysknLblFont2",
                "text": "Sign in to your account",
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
            flxSigninHeader.add(lblSigninHeader);
            var flxUserNameContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "18%",
                "id": "flxUserNameContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "2%",
                "width": "88%"
            }, {}, {});
            flxUserNameContainer.setDefaultUnit(kony.flex.DP);
            var lblUserNameHeader = new kony.ui.Label({
                "height": "25%",
                "id": "lblUserNameHeader",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblBlack",
                "text": "User Name",
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
            var flxUserName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55%",
                "id": "flxUserName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxLoginTbxNormal",
                "top": "10%",
                "width": "100%"
            }, {}, {});
            flxUserName.setDefaultUnit(kony.flex.DP);
            var tbxUserName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "focusSkin": "sknTbxBorderShadow",
                "height": "53dp",
                "id": "tbxUserName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0",
                "maxTextLength": 60,
                "placeholder": "User Name",
                "secureTextEntry": false,
                "skin": "sknTbxBorderShadow",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": 0,
                "width": "99%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxPlaceHolder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxUserName.add(tbxUserName);
            flxUserNameContainer.add(lblUserNameHeader, flxUserName);
            var flxUserNameError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "20dp",
                "id": "flxUserNameError",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 2,
                "width": "88%"
            }, {}, {});
            flxUserNameError.setDefaultUnit(kony.flex.DP);
            var Label0e2a7a0028f9742 = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0e2a7a0028f9742",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblExclamation",
                "text": "",
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
            var Label0b0b90daa890749 = new kony.ui.Label({
                "centerY": "50%",
                "id": "Label0b0b90daa890749",
                "isVisible": true,
                "left": 5,
                "skin": "sknLblRedError",
                "text": "User Name incorrect",
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
            flxUserNameError.add(Label0e2a7a0028f9742, Label0b0b90daa890749);
            var flxPasswordContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": false,
                "height": "18%",
                "id": "flxPasswordContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0cb3ab794cdd14d",
                "top": "1%",
                "width": "88%"
            }, {}, {});
            flxPasswordContainer.setDefaultUnit(kony.flex.DP);
            var lblPasswordHeader = new kony.ui.Label({
                "height": "25%",
                "id": "lblPasswordHeader",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblBlack",
                "text": "Password",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55%",
                "id": "flxPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxLoginTbxNormal",
                "top": "10%",
                "width": "100%"
            }, {}, {});
            flxPassword.setDefaultUnit(kony.flex.DP);
            var tbxPassword = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxBorderShadow",
                "height": "98%",
                "id": "tbxPassword",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "left": "0dp",
                "maxTextLength": 30,
                "placeholder": "*******",
                "secureTextEntry": true,
                "skin": "sknTbxBorderShadow",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "100%"
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "sknTbxPlaceHolder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var lblPasswordMasked = new kony.ui.Label({
                "centerY": "45%",
                "height": "100%",
                "id": "lblPasswordMasked",
                "isVisible": true,
                "right": "0dp",
                "skin": "sknFontEyeMasked",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "15%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPassword.add(tbxPassword, lblPasswordMasked);
            flxPasswordContainer.add(lblPasswordHeader, flxPassword);
            var flxForgotPassword = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "28dp",
                "id": "flxForgotPassword",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "88%"
            }, {}, {});
            flxForgotPassword.setDefaultUnit(kony.flex.DP);
            var lblForgotPassword = new kony.ui.Label({
                "id": "lblForgotPassword",
                "isVisible": true,
                "right": "4dp",
                "skin": "sknLbl0396AA",
                "text": "Forgot Password ?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 5,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPasswordError = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "20dp",
                "id": "flxPasswordError",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 2,
                "width": "51.01%"
            }, {}, {});
            flxPasswordError.setDefaultUnit(kony.flex.DP);
            var lblPassErrorIcon = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPassErrorIcon",
                "isVisible": true,
                "left": "0",
                "skin": "sknlblExclamation",
                "text": "",
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
            var lblPassErrorTxt = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPassErrorTxt",
                "isVisible": true,
                "left": 5,
                "skin": "sknLblRedError",
                "text": "Password incorrect",
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
            flxPasswordError.add(lblPassErrorIcon, lblPassErrorTxt);
            flxForgotPassword.add(lblForgotPassword, flxPasswordError);
            var flxRememberMeContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "49.99%",
                "clipBounds": true,
                "height": "6%",
                "id": "flxRememberMeContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0%",
                "width": "88%"
            }, {}, {});
            flxRememberMeContainer.setDefaultUnit(kony.flex.DP);
            var flxRemember = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRemember",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "10dp",
                "width": "28dp"
            }, {}, {});
            flxRemember.setDefaultUnit(kony.flex.DP);
            var imgRememberMe = new kony.ui.Image2({
                "centerY": "50%",
                "height": "100%",
                "id": "imgRememberMe",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "remembermeoff.png",
                "top": "0",
                "width": "100%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRemember.add(imgRememberMe);
            var lblRemember = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRemember",
                "isVisible": true,
                "left": 8,
                "skin": "sknLblBlack",
                "text": "Remember me",
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
            flxRememberMeContainer.add(flxRemember, lblRemember);
            var btnLogin = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtn3cadbdLoginFocus",
                "height": "10%",
                "id": "btnLogin",
                "isVisible": true,
                "left": "0",
                "skin": "sknBtn454B51Login",
                "text": "Login",
                "top": "1%",
                "width": "88%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblOrBTWLogin = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblOrBTWLogin",
                "isVisible": false,
                "left": "0dp",
                "skin": "sknLblBlack",
                "text": "or",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "30dp"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxTouchIdLogin = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "40dp",
                "id": "flxTouchIdLogin",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "1%",
                "width": "183dp"
            }, {}, {});
            flxTouchIdLogin.setDefaultUnit(kony.flex.DP);
            var lblTouchImage = new kony.ui.Label({
                "id": "lblTouchImage",
                "isVisible": false,
                "left": "0",
                "skin": "CopydefLabel0a97e9380aeb841",
                "text": "",
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
            var lblTouchIdText = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTouchIdText",
                "isVisible": true,
                "left": 27,
                "skin": "sknLblFont0396AA",
                "text": "Login with Touch ID",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var touchIdImage = new kony.ui.Image2({
                "centerY": "50%",
                "height": "20dp",
                "id": "touchIdImage",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "touch_1.png",
                "top": "0",
                "width": "20dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxTouchIdLogin.add(lblTouchImage, lblTouchIdText, touchIdImage);
            flxLoginMain.add(flxSigninHeader, flxUserNameContainer, flxUserNameError, flxPasswordContainer, flxForgotPassword, flxRememberMeContainer, btnLogin, lblOrBTWLogin, flxTouchIdLogin);
            flxLogin.add(flxLoginHeader, flxLoginMain);
            var flxPopupMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopupMain",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg2",
                "top": "0dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxPopupMain.setDefaultUnit(kony.flex.DP);
            var flxGenericErrorPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "24%",
                "id": "flxGenericErrorPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknFlxBgE",
                "width": "92%",
                "zIndex": 5
            }, {}, {});
            flxGenericErrorPopup.setDefaultUnit(kony.flex.DP);
            var lblGenericErrorMessage = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "35%",
                "id": "lblGenericErrorMessage",
                "isVisible": true,
                "skin": "CopysknLblFontFFFFFFOp",
                "text": "Network is not available.Please try again when you are in network.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnErrorCancel = new kony.ui.Button({
                "bottom": "-2dp",
                "centerX": "50%",
                "focusSkin": "sknBtn3cadbdLoginFocus",
                "height": "55dp",
                "id": "btnErrorCancel",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknBtn454B51Login",
                "text": "OK",
                "width": "100%",
                "blur": {
                    "enabled": false,
                    "value": 0
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxGenericErrorPopup.add(lblGenericErrorMessage, btnErrorCancel);
            var flxEnableTouchIdPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 48
                },
                "centerX": "50%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "28%",
                "id": "flxEnableTouchIdPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknFlxBgE",
                "width": "94%",
                "zIndex": 3
            }, {}, {});
            flxEnableTouchIdPopup.setDefaultUnit(kony.flex.DP);
            var flxEnableTouchIdTitle = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "flxEnableTouchIdTitle",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnableTouchIdTitle.setDefaultUnit(kony.flex.DP);
            var imgEnableTouchIdPopup = new kony.ui.Image2({
                "centerX": "50%",
                "height": "28%",
                "id": "imgEnableTouchIdPopup",
                "isVisible": true,
                "skin": "slImage",
                "src": "touch_1.png",
                "top": "10%",
                "width": "28%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEnableTouchIdMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblEnableTouchIdMessage",
                "isVisible": true,
                "skin": "CopysknLblFont1",
                "text": "Would you like to enable Touch ID to login into the application?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEnableTouchIdTitle.add(imgEnableTouchIdPopup, lblEnableTouchIdMessage);
            var flxEnableTouchIdLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 55,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxEnableTouchIdLine",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEnableTouchIdLine.setDefaultUnit(kony.flex.DP);
            flxEnableTouchIdLine.add();
            var FlexContainer0a3a230ed5cad41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 5,
                "clipBounds": true,
                "height": "55dp",
                "id": "FlexContainer0a3a230ed5cad41",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            FlexContainer0a3a230ed5cad41.setDefaultUnit(kony.flex.DP);
            var btnNotNow = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "CopysknBtnSecondaryECF",
                "height": "55dp",
                "id": "btnNotNow",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknBtnSecondaryECF",
                "text": "Not Now",
                "width": "46%",
                "blur": {
                    "enabled": false,
                    "value": 37
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnEnable = new kony.ui.Button({
                "focusSkin": "CopysknBtn",
                "height": "55dp",
                "id": "btnEnable",
                "isVisible": true,
                "left": "2%",
                "skin": "sknBtn454B51Login",
                "text": "Enable",
                "top": "0",
                "width": "46%",
                "blur": {
                    "enabled": false,
                    "value": 71
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0a3a230ed5cad41.add(btnNotNow, btnEnable);
            flxEnableTouchIdPopup.add(flxEnableTouchIdTitle, flxEnableTouchIdLine, FlexContainer0a3a230ed5cad41);
            var flxEnablrePushPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "blur": {
                    "enabled": false,
                    "value": 48
                },
                "centerX": "50.00%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "28%",
                "id": "flxEnablrePushPopUp",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknFlxBgE",
                "width": "94%",
                "zIndex": 3
            }, {}, {});
            flxEnablrePushPopUp.setDefaultUnit(kony.flex.DP);
            var CopyflxEnableTouchIdTitle0ab54f5052f7446 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70%",
                "id": "CopyflxEnableTouchIdTitle0ab54f5052f7446",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg1",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxEnableTouchIdTitle0ab54f5052f7446.setDefaultUnit(kony.flex.DP);
            var lblEdit = new kony.ui.Label({
                "centerX": "50%",
                "height": "28%",
                "id": "lblEdit",
                "isVisible": true,
                "skin": "CopysknBlueIconColor0b5513cd4908249",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": "28%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblPushNotification = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblPushNotification",
                "isVisible": true,
                "skin": "CopysknLblFont1",
                "text": "Would you like to enable push Notifications for the application?",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxEnableTouchIdTitle0ab54f5052f7446.add(lblEdit, lblPushNotification);
            var CopyflxEnableTouchIdLine0b59a4fa2000e4e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 55,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxEnableTouchIdLine0b59a4fa2000e4e",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxEnableTouchIdLine0b59a4fa2000e4e.setDefaultUnit(kony.flex.DP);
            CopyflxEnableTouchIdLine0b59a4fa2000e4e.add();
            var CopyFlexContainer0ad09b39b7ffa42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 5,
                "clipBounds": true,
                "height": "55dp",
                "id": "CopyFlexContainer0ad09b39b7ffa42",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ad09b39b7ffa42.setDefaultUnit(kony.flex.DP);
            var btnNotNowPush = new kony.ui.Button({
                "bottom": "0dp",
                "focusSkin": "CopysknBtnSecondaryECF",
                "height": "55dp",
                "id": "btnNotNowPush",
                "isVisible": true,
                "left": "3%",
                "skin": "CopysknBtnSecondaryECF",
                "text": "Not Now",
                "width": "46%",
                "blur": {
                    "enabled": false,
                    "value": 37
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnNowPush = new kony.ui.Button({
                "focusSkin": "CopysknBtn",
                "height": "55dp",
                "id": "btnNowPush",
                "isVisible": true,
                "left": "2%",
                "skin": "sknBtn454B51Login",
                "text": "Enable",
                "top": "0",
                "width": "46%",
                "blur": {
                    "enabled": false,
                    "value": 71
                }
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyFlexContainer0ad09b39b7ffa42.add(btnNotNowPush, btnNowPush);
            flxEnablrePushPopUp.add(CopyflxEnableTouchIdTitle0ab54f5052f7446, CopyflxEnableTouchIdLine0b59a4fa2000e4e, CopyFlexContainer0ad09b39b7ffa42);
            var flxAuthentiacteUsingTouchIdPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50.00%",
                "clipBounds": true,
                "height": "28%",
                "id": "flxAuthentiacteUsingTouchIdPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopysknFlxBgE",
                "width": "94%",
                "zIndex": 6
            }, {}, {});
            flxAuthentiacteUsingTouchIdPopup.setDefaultUnit(kony.flex.DP);
            var imgAuthUsingTouchID = new kony.ui.Image2({
                "centerX": "50%",
                "height": "17%",
                "id": "imgAuthUsingTouchID",
                "isVisible": true,
                "skin": "slImage",
                "src": "touchid_1.png",
                "top": "15%",
                "width": "20%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAuthUsingTouchIDHeader = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAuthUsingTouchIDHeader",
                "isVisible": true,
                "skin": "CopysknLblFont",
                "text": "Touch ID for \"OII-People\"",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "40%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAuthUsingTouchIdMessage = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblAuthUsingTouchIdMessage",
                "isVisible": true,
                "skin": "CopysknLblFont1",
                "text": "Place your finger on the home button to Login.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "55%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAuthUsingTouchIdHorizontalLine = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "20%",
                "clipBounds": true,
                "height": "2dp",
                "id": "flxAuthUsingTouchIdHorizontalLine",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0c17a592efe824e",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAuthUsingTouchIdHorizontalLine.setDefaultUnit(kony.flex.DP);
            flxAuthUsingTouchIdHorizontalLine.add();
            var btnCancelAuthUsingTouchId = new kony.ui.Button({
                "bottom": -2,
                "centerX": "50%",
                "focusSkin": "sknBtn3cadbdclrBdr",
                "height": "55dp",
                "id": "btnCancelAuthUsingTouchId",
                "isVisible": true,
                "skin": "sknBtn0396aaClr125Bdr",
                "text": "Cancel",
                "width": "102%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAuthentiacteUsingTouchIdPopup.add(imgAuthUsingTouchID, lblAuthUsingTouchIDHeader, lblAuthUsingTouchIdMessage, flxAuthUsingTouchIdHorizontalLine, btnCancelAuthUsingTouchId);
            flxPopupMain.add(flxGenericErrorPopup, flxEnableTouchIdPopup, flxEnablrePushPopUp, flxAuthentiacteUsingTouchIdPopup);
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
                "zIndex": 15
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
            var flxVersionPopupContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxVersionPopupContainer",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknFlxbgBlackOp0a1712bf4a9e943",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxVersionPopupContainer.setDefaultUnit(kony.flex.DP);
            var flxVersionPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "flxVersionPopup",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "33dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "sknWhiteBgBorderVersion0febaf83d3a2346",
                "top": "196dp",
                "width": "85%",
                "zIndex": 1
            }, {}, {});
            flxVersionPopup.setDefaultUnit(kony.flex.DP);
            var flxVersionHeaderDesign = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "15%",
                "id": "flxVersionHeaderDesign",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxHeaderDesignVersion0f6e04b56c8804e",
                "top": "-10%",
                "width": "95%",
                "zIndex": 1
            }, {}, {});
            flxVersionHeaderDesign.setDefaultUnit(kony.flex.DP);
            flxVersionHeaderDesign.add();
            var flxContentContainerVersion = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "88%",
                "id": "flxContentContainerVersion",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "1dp",
                "isModalContainer": false,
                "skin": "slFbox0f15ea035b7464b",
                "top": "10%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContentContainerVersion.setDefaultUnit(kony.flex.DP);
            var lblVersionHeader = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblVersionHeader",
                "isVisible": true,
                "left": "99dp",
                "skin": "sknLblHeaderVersion0d92d9e324e0148",
                "text": "New update is available",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "1%",
                "width": "90%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblVersionContent = new kony.ui.Label({
                "centerX": "50%",
                "height": "35%",
                "id": "lblVersionContent",
                "isVisible": true,
                "left": "99dp",
                "skin": "sknLblContentVersion0a6abcce60fa248",
                "text": "The current version of the application is no longer supported. We appolozise for any inconvienence we may have caused you.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var btnUpdate = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnUpdateVersionFocus0ee5bd98a22d04e",
                "height": "45dp",
                "id": "btnUpdate",
                "isVisible": true,
                "skin": "sknBtnUpdateVersion0a947f4e882754a",
                "text": "Update now",
                "top": "6%",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnContinueExit = new kony.ui.Button({
                "centerX": "50%",
                "focusSkin": "sknBtnSecondaryActionVersion0f6a20892f28848",
                "height": "45dp",
                "id": "btnContinueExit",
                "isVisible": true,
                "skin": "sknBtnSecondaryActionVersion0f6a20892f28848",
                "text": "No, Thanks! Close the app",
                "top": "2%",
                "width": "85%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var imgOceanLogoBlueVersion = new kony.ui.Image2({
                "centerX": "51%",
                "height": "38dp",
                "id": "imgOceanLogoBlueVersion",
                "isVisible": true,
                "right": "0%",
                "skin": "slImage0ab4ddb9f6c2b44",
                "src": "company_logo_dark.png",
                "top": "2%",
                "width": "120dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxContentContainerVersion.add(lblVersionHeader, lblVersionContent, btnUpdate, btnContinueExit, imgOceanLogoBlueVersion);
            flxVersionPopup.add(flxVersionHeaderDesign, flxContentContainerVersion);
            flxVersionPopupContainer.add(flxVersionPopup);
            this.add(flxTopNavigation, flxLogin, flxPopupMain, flxLoading, flxVersionPopupContainer);
        };
        return [{
            "addWidgets": addWidgetsfrmNewLogin,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": true,
            "id": "frmNewLogin",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
            "skin": "frmSknBGWhite"
        }, {
            "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
            "layoutType": kony.flex.FREE_FORM,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "footerOverlap": false,
            "headerOverlap": false,
            "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
            "outTransitionConfig": {
                "formAnimation": 0
            },
            "retainScrollPosition": false,
            "titleBar": false,
            "titleBarSkin": "slTitleBar",
            "windowSoftInputMode": constants.FORM_ADJUST_PAN
        }]
    }
});