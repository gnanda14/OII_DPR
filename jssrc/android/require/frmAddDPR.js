define("frmAddDPR", function() {
    return function(controller) {
        function addWidgetsfrmAddDPR() {
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
                "onClick": controller.AS_FlexContainer_c5bd154ee0d6466ab13f1fc26fdd7e6a,
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
            var flxDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "93%",
                "id": "flxDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0h18dd9a3eabb4b",
                "top": "7%",
                "width": "100%"
            }, {}, {});
            flxDPR.setDefaultUnit(kony.flex.DP);
            var flxHamburger = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "100%",
                "horizontalScrollIndicator": true,
                "id": "flxHamburger",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopyslFSbox0c2dac9f7d3d145",
                "top": "0dp",
                "verticalScrollIndicator": false,
                "width": "18%"
            }, {}, {});
            flxHamburger.setDefaultUnit(kony.flex.DP);
            var flxPersonnel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxPersonnel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerSelected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxPersonnel.setDefaultUnit(kony.flex.DP);
            var lblHamPersonnel = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamPersonnel",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100HamburgerSelected",
                "text": "Personnel",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var personnel = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "personnel",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "personnelselected.png",
                "top": 8,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxPersonnel.add(lblHamPersonnel, personnel);
            var flxEvents = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxEvents",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxEvents.setDefaultUnit(kony.flex.DP);
            var lblHamEvents = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamEvents",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Events",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var events = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "events",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "events.png",
                "top": "3dp",
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxEvents.add(lblHamEvents, events);
            var flxRoaster = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxRoaster",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRoaster.setDefaultUnit(kony.flex.DP);
            var lblHamRoaster = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamRoaster",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Roster",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var roster = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "roster",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "roster.png",
                "top": 3,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxRoaster.add(lblHamRoaster, roster);
            var flxCharges = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "75dp",
                "id": "flxCharges",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "reverseLayoutDirection": false,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxCharges.setDefaultUnit(kony.flex.DP);
            var lblHamCharges = new kony.ui.Label({
                "centerX": "50%",
                "id": "lblHamCharges",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Tools/\nCharges",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "top": 44,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var assets = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "assets",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "assets.png",
                "top": "3dp",
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxCharges.add(lblHamCharges, assets);
            var flxAttachment = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxAttachment",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxAttachment.setDefaultUnit(kony.flex.DP);
            var lblHamAttachment = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamAttachment",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Attachments",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var attachment = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "attachment",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "attachment.png",
                "top": 3,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAttachment.add(lblHamAttachment, attachment);
            var flxComments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxComments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxComments.setDefaultUnit(kony.flex.DP);
            var lblHamComments = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamComments",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Comments",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var comments = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "comments",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "comments.png",
                "top": 3,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxComments.add(lblHamComments, comments);
            var flxProjectConditions = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85dp",
                "id": "flxProjectConditions",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxProjectConditions.setDefaultUnit(kony.flex.DP);
            var lblHamProjectConditions = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamProjectConditions",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Project Conditions",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var conditon = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "conditon",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "conditon.png",
                "top": 3,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProjectConditions.add(lblHamProjectConditions, conditon);
            var flxProjectStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85dp",
                "id": "flxProjectStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxProjectStatus.setDefaultUnit(kony.flex.DP);
            var lblHamprojectStatus = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblHamprojectStatus",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Project Status",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "80%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var status = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "status",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "status.png",
                "top": 3,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxProjectStatus.add(lblHamprojectStatus, status);
            var flxFuture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 20,
                "clipBounds": true,
                "height": "70dp",
                "id": "flxFuture",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "sknFlxHamburgerUnselected",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxFuture.setDefaultUnit(kony.flex.DP);
            var lblFuture = new kony.ui.Label({
                "bottom": "10dp",
                "centerX": "50%",
                "id": "lblFuture",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 2,
                "skin": "sknLBL100Hamburger",
                "text": "Future",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "97%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var future = new kony.ui.Image2({
                "centerX": "50%",
                "height": "40dp",
                "id": "future",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "future.png",
                "top": 3,
                "width": "40%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFuture.add(lblFuture, future);
            flxHamburger.add(flxPersonnel, flxEvents, flxRoaster, flxCharges, flxAttachment, flxComments, flxProjectConditions, flxProjectStatus, flxFuture);
            var flxMain = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMain",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "18%",
                "isModalContainer": false,
                "skin": "CopysknFlxBgf0h26c9e89533340",
                "width": "82%",
                "zIndex": 1
            }, {}, {});
            flxMain.setDefaultUnit(kony.flex.DP);
            var flxPersonnelBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": false,
                "bounces": false,
                "centerX": "49.97%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "99%",
                "horizontalScrollIndicator": true,
                "id": "flxPersonnelBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxOp0a5c020fdaa674b",
                "top": "0.00%",
                "verticalScrollIndicator": true,
                "width": "97%",
                "zIndex": 1
            }, {}, {});
            flxPersonnelBody.setDefaultUnit(kony.flex.DP);
            var segPersonnel = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnDelete": "",
                    "imgPersonnel": "",
                    "lblDesignation": "",
                    "lblName": "",
                    "lblTitle": "ROV Senior Tecnician - Norway - OOF67G"
                }],
                "groupCells": false,
                "height": "95%",
                "id": "segPersonnel",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g91ac90b247b4c",
                "rowTemplate": "flxPersonnel",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "1.00%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnDelete": "btnDelete",
                    "flxContainer": "flxContainer",
                    "flxDesc": "flxDesc",
                    "flxImage": "flxImage",
                    "flxImageContainer": "flxImageContainer",
                    "flxPersonnel": "flxPersonnel",
                    "imgPersonnel": "imgPersonnel",
                    "lblDesignation": "lblDesignation",
                    "lblName": "lblName",
                    "lblTitle": "lblTitle"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoDPR = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxNoDPR",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNoDPR.setDefaultUnit(kony.flex.DP);
            var Image0h126f526aa3a4f = new kony.ui.Image2({
                "centerX": "50%",
                "height": "77dp",
                "id": "Image0h126f526aa3a4f",
                "isVisible": true,
                "skin": "CopyslImage0de3df4dc020145",
                "src": "personnel.png",
                "top": 0,
                "width": "110dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblNoDPRS = new kony.ui.Label({
                "bottom": 5,
                "centerX": "50%",
                "id": "lblNoDPRS",
                "isVisible": true,
                "skin": "CopysknLbl0b8b7cf64895746",
                "text": "Personnel Data",
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
            flxNoDPR.add(Image0h126f526aa3a4f, lblNoDPRS);
            flxPersonnelBody.add(segPersonnel, flxNoDPR);
            var flxEventsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "99%",
                "id": "flxEventsBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "98%",
                "zIndex": 1
            }, {}, {});
            flxEventsBody.setDefaultUnit(kony.flex.DP);
            var flxHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "43dp",
                "id": "flxHours",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "reverseLayoutDirection": false,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": 0,
                "width": "100%"
            }, {}, {});
            flxHours.setDefaultUnit(kony.flex.DP);
            var flxHoursColor = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "35dp",
                "id": "flxHoursColor",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "5dp",
                "skin": "sknFlxUnder24Hours",
                "top": "1%",
                "width": "35dp",
                "zIndex": 10
            }, {}, {});
            flxHoursColor.setDefaultUnit(kony.flex.DP);
            var lblCountHours = new kony.ui.Label({
                "centerX": "47%",
                "centerY": "48%",
                "id": "lblCountHours",
                "isVisible": true,
                "left": "0",
                "maxNumberOfLines": 0,
                "skin": "CopydefLabel0e805055fac534a",
                "text": "-",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_NONE,
                "top": "0",
                "width": "100%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHoursColor.add(lblCountHours);
            var CopylblHamPersonnel0ead47532af674f = new kony.ui.Label({
                "bottom": "10dp",
                "centerY": "50%",
                "id": "CopylblHamPersonnel0ead47532af674f",
                "isVisible": true,
                "left": "5%",
                "maxNumberOfLines": 2,
                "skin": "CopydefLabel0haf7a3dbd71f48",
                "text": "Events Total Hours:",
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
            flxHours.add(flxHoursColor, CopylblHamPersonnel0ead47532af674f);
            var segEvent = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnEventDelete": "",
                    "lblEventType": "",
                    "lblMilesstone": "",
                    "lblSystemId": "",
                    "lblTime": ""
                }],
                "groupCells": false,
                "height": "93%",
                "id": "segEvent",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g91ac90b247b4c",
                "rowTemplate": "flxEvents",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "0%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnEventDelete": "btnEventDelete",
                    "flxContainer": "flxContainer",
                    "flxDesc": "flxDesc",
                    "flxEvents": "flxEvents",
                    "lblEventType": "lblEventType",
                    "lblMilesstone": "lblMilesstone",
                    "lblSystemId": "lblSystemId",
                    "lblTime": "lblTime"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoEvent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxNoEvent",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNoEvent.setDefaultUnit(kony.flex.DP);
            var CopyImage0j2651c699f2247 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "55dp",
                "id": "CopyImage0j2651c699f2247",
                "isVisible": true,
                "skin": "CopyslImage0de3df4dc020145",
                "src": "events.png",
                "top": 7,
                "width": "100dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNoDPRS0d2107f30f3644e = new kony.ui.Label({
                "bottom": 5,
                "centerX": "50%",
                "id": "CopylblNoDPRS0d2107f30f3644e",
                "isVisible": true,
                "skin": "CopysknLbl0hed541dc517e4d",
                "text": "Events",
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
            flxNoEvent.add(CopyImage0j2651c699f2247, CopylblNoDPRS0d2107f30f3644e);
            flxEventsBody.add(flxHours, segEvent, flxNoEvent);
            var flxRoasterBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "99%",
                "id": "flxRoasterBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "97%",
                "zIndex": 1
            }, {}, {});
            flxRoasterBody.setDefaultUnit(kony.flex.DP);
            var segRoaster = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnRoasterDelete": "",
                    "lblClass": "Class",
                    "lblDivision": "",
                    "lblName": "Name",
                    "reportId": "Name"
                }],
                "groupCells": false,
                "height": "95%",
                "id": "segRoaster",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g91ac90b247b4c",
                "rowTemplate": "flxRoaster",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnRoasterDelete": "btnRoasterDelete",
                    "flxContainer": "flxContainer",
                    "flxDesc": "flxDesc",
                    "flxRoaster": "flxRoaster",
                    "lblClass": "lblClass",
                    "lblDivision": "lblDivision",
                    "lblName": "lblName",
                    "reportId": "reportId"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoRoaster = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxNoRoaster",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNoRoaster.setDefaultUnit(kony.flex.DP);
            var CopyImage0a6309758acee46 = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "CopyImage0a6309758acee46",
                "isVisible": true,
                "skin": "CopyslImage0de3df4dc020145",
                "src": "roster.png",
                "top": 7,
                "width": "100dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNoDPRS0e07ce20dca5446 = new kony.ui.Label({
                "bottom": 5,
                "centerX": "50%",
                "id": "CopylblNoDPRS0e07ce20dca5446",
                "isVisible": true,
                "skin": "CopysknLbl0hed541dc517e4d",
                "text": "Roster",
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
            flxNoRoaster.add(CopyImage0a6309758acee46, CopylblNoDPRS0e07ce20dca5446);
            flxRoasterBody.add(segRoaster, flxNoRoaster);
            var flxAssetToolsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "99%",
                "id": "flxAssetToolsBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "97%",
                "zIndex": 1
            }, {}, {});
            flxAssetToolsBody.setDefaultUnit(kony.flex.DP);
            var segAssetTools = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "data": [{
                    "btnAssetDelete": "",
                    "imgAssetTools": "crewimg.png",
                    "lblAssetType": "Asset Type",
                    "lblId": "ID",
                    "lblType": "Type"
                }],
                "groupCells": false,
                "height": "95%",
                "id": "segAssetTools",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g91ac90b247b4c",
                "rowTemplate": "flxAssetTools",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "2%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnAssetDelete": "btnAssetDelete",
                    "flxAssetTools": "flxAssetTools",
                    "flxContainer": "flxContainer",
                    "flxDesc": "flxDesc",
                    "imgAssetTools": "imgAssetTools",
                    "lblAssetType": "lblAssetType",
                    "lblId": "lblId",
                    "lblType": "lblType"
                },
                "width": "100%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxNoCharges = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxNoCharges",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNoCharges.setDefaultUnit(kony.flex.DP);
            var CopyImage0f08ea3f90d424e = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "CopyImage0f08ea3f90d424e",
                "isVisible": true,
                "skin": "CopyslImage0de3df4dc020145",
                "src": "assets.png",
                "top": 7,
                "width": "100dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNoDPRS0d7c092fc25514f = new kony.ui.Label({
                "bottom": 5,
                "centerX": "50%",
                "id": "CopylblNoDPRS0d7c092fc25514f",
                "isVisible": true,
                "skin": "CopysknLbl0hed541dc517e4d",
                "text": "Tools/Charges",
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
            flxNoCharges.add(CopyImage0f08ea3f90d424e, CopylblNoDPRS0d7c092fc25514f);
            flxAssetToolsBody.add(segAssetTools, flxNoCharges);
            var flxAttachmentBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "96%",
                "horizontalScrollIndicator": true,
                "id": "flxAttachmentBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxOp0a14b4f091d9c48",
                "top": "0%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAttachmentBody.setDefaultUnit(kony.flex.DP);
            var flxContainerAnim = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6dp",
                "id": "flxContainerAnim",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxContainerAnim.setDefaultUnit(kony.flex.DP);
            var flxAnimSubCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "6dp",
                "id": "flxAnimSubCon",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0bfb689b20fa646",
                "top": "0",
                "width": "350dp"
            }, {}, {});
            flxAnimSubCon.setDefaultUnit(kony.flex.DP);
            flxAnimSubCon.add();
            flxContainerAnim.add(flxAnimSubCon);
            var flxNoAttchments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "100dp",
                "id": "flxNoAttchments",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            flxNoAttchments.setDefaultUnit(kony.flex.DP);
            var CopyImage0f24445c0af0c4d = new kony.ui.Image2({
                "centerX": "50%",
                "height": "60dp",
                "id": "CopyImage0f24445c0af0c4d",
                "isVisible": true,
                "skin": "CopyslImage0de3df4dc020145",
                "src": "attachment.png",
                "top": 7,
                "width": "100dp"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var CopylblNoDPRS0iaf14392c93748 = new kony.ui.Label({
                "bottom": 5,
                "centerX": "50%",
                "id": "CopylblNoDPRS0iaf14392c93748",
                "isVisible": true,
                "skin": "CopysknLbl0hed541dc517e4d",
                "text": "Attachments",
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
            flxNoAttchments.add(CopyImage0f24445c0af0c4d, CopylblNoDPRS0iaf14392c93748);
            var segAttchments = new kony.ui.SegmentedUI2({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "data": [{
                    "btnDelete": "",
                    "btnView": "",
                    "imgAttach": "",
                    "lblName": "",
                    "lblSize": "Date Uploaded",
                    "lblType": ""
                }],
                "groupCells": false,
                "height": "99%",
                "id": "segAttchments",
                "isVisible": false,
                "left": "0dp",
                "needPageIndicator": true,
                "pageOffDotImage": "pageoffdot.png",
                "pageOnDotImage": "pageondot.png",
                "retainSelection": false,
                "rowFocusSkin": "seg2Focus",
                "rowSkin": "Copyseg0g91ac90b247b4c",
                "rowTemplate": "flxAttachments",
                "scrollingEvents": {},
                "sectionHeaderSkin": "sliPhoneSegmentHeader",
                "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
                "separatorColor": "ffffff00",
                "separatorRequired": true,
                "separatorThickness": 0,
                "showScrollbars": false,
                "top": "1%",
                "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
                "widgetDataMap": {
                    "btnDelete": "btnDelete",
                    "btnView": "btnView",
                    "flxActions": "flxActions",
                    "flxAttachments": "flxAttachments",
                    "flxContainer": "flxContainer",
                    "flxDesc": "flxDesc",
                    "flxImage": "flxImage",
                    "imgAttach": "imgAttach",
                    "lblName": "lblName",
                    "lblSize": "lblSize",
                    "lblType": "lblType"
                },
                "width": "97%"
            }, {
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxAttachmentBody.add(flxContainerAnim, flxNoAttchments, segAttchments);
            var flxCommentsBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCommentsBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCommentsBody.setDefaultUnit(kony.flex.DP);
            var flxLocation = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "92%",
                "id": "flxLocation",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxLocation.setDefaultUnit(kony.flex.DP);
            var lblLocation = new kony.ui.Label({
                "id": "lblLocation",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Comments",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxComments = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
                "focusSkin": "sknTxtAreaActive",
                "height": "90%",
                "id": "tbxComments",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 2000,
                "numberOfVisibleLines": 3,
                "right": "4.00%",
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var lblRemaining = new kony.ui.Label({
                "id": "lblRemaining",
                "isVisible": true,
                "left": "4%",
                "right": "4%",
                "skin": "CopysknLbl0bc161b137dc14d",
                "text": "Remaining Characters: 2000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "5dp",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLocation.add(lblLocation, tbxComments, lblRemaining);
            var flxSaveComments = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxSaveComments",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSaveComments.setDefaultUnit(kony.flex.DP);
            var flxResetCommentsTbx = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxResetCommentsTbx",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxResetCommentsTbx.setDefaultUnit(kony.flex.DP);
            var CopyLabel0aab20f16215a42 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0aab20f16215a42",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0f5622ef88d5347 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0f5622ef88d5347",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResetCommentsTbx.add(CopyLabel0aab20f16215a42, CopyLabel0f5622ef88d5347);
            var flxSaveCommentsTbx = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSaveCommentsTbx",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxSaveCommentsTbx.setDefaultUnit(kony.flex.DP);
            var CopyLabel0gac4196de5ca46 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0gac4196de5ca46",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0e138b45337784c = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0e138b45337784c",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSaveCommentsTbx.add(CopyLabel0gac4196de5ca46, CopyLabel0e138b45337784c);
            flxSaveComments.add(flxResetCommentsTbx, flxSaveCommentsTbx);
            flxCommentsBody.add(flxLocation, flxSaveComments);
            var flxCondition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCondition",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCondition.setDefaultUnit(kony.flex.DP);
            var flxConditionBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "centerX": "50%",
                "clipBounds": true,
                "enableScrolling": true,
                "height": "92%",
                "horizontalScrollIndicator": true,
                "id": "flxConditionBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "CopysknFlxOp0a048f711fad743",
                "top": "0.00%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxConditionBody.setDefaultUnit(kony.flex.DP);
            var flxStandByHours = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxStandByHours",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "7dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStandByHours.setDefaultUnit(kony.flex.DP);
            var lblStandbyHeader = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStandbyHeader",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Latitude",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxLatitude = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxLatitude",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxStandByHours.add(lblStandbyHeader, tbxLatitude);
            var CopyFlexContainer0b0951627a0314c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0b0951627a0314c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0b0951627a0314c.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0b0951627a0314c.add();
            var CopyflxStandByHours0d9e69ce6df4747 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0d9e69ce6df4747",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0d9e69ce6df4747.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0f19f2bb5e53342 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0f19f2bb5e53342",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Longitude",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxLongitude = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxLongitude",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0d9e69ce6df4747.add(CopylblStandbyHeader0f19f2bb5e53342, tbxLongitude);
            var CopyFlexContainer0cb9183b7fa7442 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0cb9183b7fa7442",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cb9183b7fa7442.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0cb9183b7fa7442.add();
            var CopyflxStandByHours0fd39d82e22f541 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0fd39d82e22f541",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0fd39d82e22f541.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0fb7a4e654be74d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0fb7a4e654be74d",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Sea Currents",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxSeaCurrents = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxSeaCurrents",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0fd39d82e22f541.add(CopylblStandbyHeader0fb7a4e654be74d, tbxSeaCurrents);
            var CopyFlexContainer0i81b2d71463c48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0i81b2d71463c48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0i81b2d71463c48.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0i81b2d71463c48.add();
            var CopyflxStandByHours0e2e8fb1840cf44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0e2e8fb1840cf44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0e2e8fb1840cf44.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0d614f929093d40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0d614f929093d40",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Seas",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxSeas = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxSeas",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0e2e8fb1840cf44.add(CopylblStandbyHeader0d614f929093d40, tbxSeas);
            var CopyFlexContainer0j27335533f5145 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0j27335533f5145",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0j27335533f5145.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0j27335533f5145.add();
            var CopyflxStandByHours0g6b96a988c5d48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0g6b96a988c5d48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0g6b96a988c5d48.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0b3bf557c8ec840 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0b3bf557c8ec840",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Skies",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxSkies = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxSkies",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0g6b96a988c5d48.add(CopylblStandbyHeader0b3bf557c8ec840, tbxSkies);
            var CopyFlexContainer0adc842a52dc04c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0adc842a52dc04c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0adc842a52dc04c.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0adc842a52dc04c.add();
            var CopyflxStandByHours0e00d07cb1c6448 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0e00d07cb1c6448",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0e00d07cb1c6448.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0afc2f82d019640 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0afc2f82d019640",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Winds",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxWinds = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxWinds",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0e00d07cb1c6448.add(CopylblStandbyHeader0afc2f82d019640, tbxWinds);
            var CopyFlexContainer0e5d675dd917a45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e5d675dd917a45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e5d675dd917a45.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e5d675dd917a45.add();
            var CopyflxStandByHours0d5466f97da6f45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0d5466f97da6f45",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0d5466f97da6f45.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0i808ea335a594a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0i808ea335a594a",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Visibility",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxVisibility = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxVisibility",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0d5466f97da6f45.add(CopylblStandbyHeader0i808ea335a594a, tbxVisibility);
            var CopyFlexContainer0e1225488d4dc42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e1225488d4dc42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e1225488d4dc42.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e1225488d4dc42.add();
            var CopyflxStandByHours0efd1206bf47747 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0efd1206bf47747",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0efd1206bf47747.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0d83aeb5ab4ae42 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0d83aeb5ab4ae42",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Bunks",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxBunks = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxBunks",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0efd1206bf47747.add(CopylblStandbyHeader0d83aeb5ab4ae42, tbxBunks);
            var CopyFlexContainer0c159576f281141 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c159576f281141",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c159576f281141.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c159576f281141.add();
            var CopyflxStandByHours0fa1e549b7ebe43 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0fa1e549b7ebe43",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0fa1e549b7ebe43.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0ed99d2296a774c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0ed99d2296a774c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Meals",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxMeals = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxMeals",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0fa1e549b7ebe43.add(CopylblStandbyHeader0ed99d2296a774c, tbxMeals);
            var CopyFlexContainer0ae03993e60cb4f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ae03993e60cb4f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ae03993e60cb4f.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ae03993e60cb4f.add();
            var CopyFlexContainer0df4f97dd416a4c = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0df4f97dd416a4c",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0df4f97dd416a4c.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0df4f97dd416a4c.add();
            var CopyflxStandByHours0aea15abc81364b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0aea15abc81364b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0aea15abc81364b.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0f941e6707df24c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0f941e6707df24c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Fuel Used",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxFuelUsed = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxFuelUsed",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0aea15abc81364b.add(CopylblStandbyHeader0f941e6707df24c, tbxFuelUsed);
            var CopyFlexContainer0c5ac50f661a741 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c5ac50f661a741",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c5ac50f661a741.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c5ac50f661a741.add();
            var CopyflxStandByHours0e6ebc4180c184d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0e6ebc4180c184d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0e6ebc4180c184d.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0d7d1d5f1f6154d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0d7d1d5f1f6154d",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Fuel Received",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxFuelRecieved = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxFuelRecieved",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0e6ebc4180c184d.add(CopylblStandbyHeader0d7d1d5f1f6154d, tbxFuelRecieved);
            var CopyFlexContainer0aaf8d50569d745 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0aaf8d50569d745",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0aaf8d50569d745.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0aaf8d50569d745.add();
            var CopyflxShiftTypeContainer0g138fd243d4a4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxShiftTypeContainer0g138fd243d4a4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxShiftTypeContainer0g138fd243d4a4d.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0jd9df4c5a0a343 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0jd9df4c5a0a343",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxFuelUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxFuelUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxFuelUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0c70054b9abef43 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0c70054b9abef43",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblFuelUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblFuelUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "CU Meters",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFuelUOM.add(CopyimgArrow0c70054b9abef43, lblFuelUOM);
            CopyflxShiftTypeContainer0g138fd243d4a4d.add(CopylblNormalHours0jd9df4c5a0a343, flxFuelUOM);
            var CopyFlexContainer0c364469ac53e4d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0c364469ac53e4d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c364469ac53e4d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c364469ac53e4d.add();
            var CopyflxStandByHours0c352dd72ff8c40 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0c352dd72ff8c40",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0c352dd72ff8c40.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0bf96c97c989747 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0bf96c97c989747",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Lube Oil Used",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxLudeOilUsed = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxLudeOilUsed",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0c352dd72ff8c40.add(CopylblStandbyHeader0bf96c97c989747, tbxLudeOilUsed);
            var CopyFlexContainer0d52ea504347042 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d52ea504347042",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d52ea504347042.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d52ea504347042.add();
            var CopyflxStandByHours0j784d44727ea4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0j784d44727ea4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0j784d44727ea4b.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0fe6fe6e101004c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0fe6fe6e101004c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Lube Oil Received",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxLubeOilReceived = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxLubeOilReceived",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0j784d44727ea4b.add(CopylblStandbyHeader0fe6fe6e101004c, tbxLubeOilReceived);
            var CopyFlexContainer0h4bcb8d4824941 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0h4bcb8d4824941",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0h4bcb8d4824941.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0h4bcb8d4824941.add();
            var flxShiftTypeContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxShiftTypeContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxShiftTypeContainer.setDefaultUnit(kony.flex.DP);
            var lblNormalHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblNormalHours",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtNormalHoursValue = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "txtNormalHoursValue",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxLubeUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxLubeUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxLubeUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0d031422dcfdc47 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0d031422dcfdc47",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblLubeUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblLubeUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "CU Meters",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLubeUOM.add(CopyimgArrow0d031422dcfdc47, lblLubeUOM);
            flxShiftTypeContainer.add(lblNormalHours, txtNormalHoursValue, flxLubeUOM);
            var CopyFlexContainer0f6a19c9b7b0547 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0f6a19c9b7b0547",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0f6a19c9b7b0547.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0f6a19c9b7b0547.add();
            var CopyflxStandByHours0i57fd98afcca4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0i57fd98afcca4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0i57fd98afcca4b.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0j95ec2b3279742 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0j95ec2b3279742",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Water Used",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxWaterUsed = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxWaterUsed",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0i57fd98afcca4b.add(CopylblStandbyHeader0j95ec2b3279742, tbxWaterUsed);
            var CopyFlexContainer0d3160ebb062147 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d3160ebb062147",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d3160ebb062147.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d3160ebb062147.add();
            var CopyflxStandByHours0fabf8d30701e48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0fabf8d30701e48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0fabf8d30701e48.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0b73ea0f7a64949 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0b73ea0f7a64949",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Water Received",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxWaterReceived = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxWaterReceived",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0fabf8d30701e48.add(CopylblStandbyHeader0b73ea0f7a64949, tbxWaterReceived);
            var CopyFlexContainer0e4a90fe3744340 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e4a90fe3744340",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e4a90fe3744340.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e4a90fe3744340.add();
            var CopyflxShiftTypeContainer0b44a08b53a2842 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxShiftTypeContainer0b44a08b53a2842",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxShiftTypeContainer0b44a08b53a2842.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0ca954649155a45 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0ca954649155a45",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopytxtNormalHoursValue0bb9be029d9694d = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "CopytxtNormalHoursValue0bb9be029d9694d",
                "isVisible": false,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": null,
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "30%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            var flxWaterUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxWaterUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxWaterUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0e049c0b373c741 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0e049c0b373c741",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblWaterUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblWaterUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "CU Meters",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxWaterUOM.add(CopyimgArrow0e049c0b373c741, lblWaterUOM);
            CopyflxShiftTypeContainer0b44a08b53a2842.add(CopylblNormalHours0ca954649155a45, CopytxtNormalHoursValue0bb9be029d9694d, flxWaterUOM);
            var CopyFlexContainer0a528cfb0e83e42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0a528cfb0e83e42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0a528cfb0e83e42.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0a528cfb0e83e42.add();
            var CopyflxStandByHours0ac73ab5fa26843 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0ac73ab5fa26843",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0ac73ab5fa26843.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0d1b312ea422743 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0d1b312ea422743",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Hydraulic Used",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxHydraulicUsed = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxHydraulicUsed",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0ac73ab5fa26843.add(CopylblStandbyHeader0d1b312ea422743, tbxHydraulicUsed);
            var CopyFlexContainer0e98b211cad4644 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e98b211cad4644",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e98b211cad4644.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e98b211cad4644.add();
            var CopyflxStandByHours0g009245ada124b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0g009245ada124b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0g009245ada124b.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0jd121af8217642 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0jd121af8217642",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Hydraulic Received",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxHydraulicReceived = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxHydraulicReceived",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0g009245ada124b.add(CopylblStandbyHeader0jd121af8217642, tbxHydraulicReceived);
            var CopyFlexContainer0ee504e31596444 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ee504e31596444",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ee504e31596444.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ee504e31596444.add();
            var CopyflxShiftTypeContainer0a1964ea535e04f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxShiftTypeContainer0a1964ea535e04f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxShiftTypeContainer0a1964ea535e04f.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0e83eb962c8c049 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0e83eb962c8c049",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxHyraulicUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxHyraulicUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxHyraulicUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0c0da8555ec0249 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0c0da8555ec0249",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblHydraulicUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblHydraulicUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "CU Meters",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHyraulicUOM.add(CopyimgArrow0c0da8555ec0249, lblHydraulicUOM);
            CopyflxShiftTypeContainer0a1964ea535e04f.add(CopylblNormalHours0e83eb962c8c049, flxHyraulicUOM);
            var CopyFlexContainer0dcc292c3a34b41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0dcc292c3a34b41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0dcc292c3a34b41.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0dcc292c3a34b41.add();
            var CopyflxStandByHours0da16bca9f9634f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0da16bca9f9634f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0da16bca9f9634f.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0d17b21c7f9cc40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0d17b21c7f9cc40",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Grit Consumed Today",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxGritConsumed = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxGritConsumed",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0da16bca9f9634f.add(CopylblStandbyHeader0d17b21c7f9cc40, tbxGritConsumed);
            var CopyFlexContainer0e317ff10c4d946 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e317ff10c4d946",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e317ff10c4d946.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e317ff10c4d946.add();
            var CopyflxStandByHours0j25aa0df348045 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0j25aa0df348045",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0j25aa0df348045.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0h085c38c8dbb43 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0h085c38c8dbb43",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Grit Remaining",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxGritRemaining = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxGritRemaining",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0j25aa0df348045.add(CopylblStandbyHeader0h085c38c8dbb43, tbxGritRemaining);
            var CopyFlexContainer0c47c3a6dad6748 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c47c3a6dad6748",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c47c3a6dad6748.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c47c3a6dad6748.add();
            var CopyflxShiftTypeContainer0c0939170e5d046 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 20,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxShiftTypeContainer0c0939170e5d046",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxShiftTypeContainer0c0939170e5d046.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0fb5b6e16c0c34f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0fb5b6e16c0c34f",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxGritUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxGritUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxGritUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0cf8e04ea81cd49 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0cf8e04ea81cd49",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblGritUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblGritUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "CU Meters",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxGritUOM.add(CopyimgArrow0cf8e04ea81cd49, lblGritUOM);
            CopyflxShiftTypeContainer0c0939170e5d046.add(CopylblNormalHours0fb5b6e16c0c34f, flxGritUOM);
            var CopyFlexContainer0a79f5ce35a3944 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 10,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0a79f5ce35a3944",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0a79f5ce35a3944.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0a79f5ce35a3944.add();
            var CopyflxStandByHours0df8cf9d8a0bd49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxStandByHours0df8cf9d8a0bd49",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxStandByHours0df8cf9d8a0bd49.setDefaultUnit(kony.flex.DP);
            var CopylblStandbyHeader0b99227811ce144 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblStandbyHeader0b99227811ce144",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Potable Water on Board",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxPotableWaterBoard = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxPotableWaterBoard",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            CopyflxStandByHours0df8cf9d8a0bd49.add(CopylblStandbyHeader0b99227811ce144, tbxPotableWaterBoard);
            var CopyFlexContainer0c97abb88323a43 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c97abb88323a43",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c97abb88323a43.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c97abb88323a43.add();
            var CopyflxShiftTypeContainer0d55cc76af3984d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "CopyflxShiftTypeContainer0d55cc76af3984d",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxShiftTypeContainer0d55cc76af3984d.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0b02980b40d8146 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0b02980b40d8146",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxPotableWaterUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxPotableWaterUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxPotableWaterUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0b3071af21e4d40 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0b3071af21e4d40",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "8%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblPotableWaterUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblPotableWaterUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "CU Meters",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxPotableWaterUOM.add(CopyimgArrow0b3071af21e4d40, lblPotableWaterUOM);
            CopyflxShiftTypeContainer0d55cc76af3984d.add(CopylblNormalHours0b02980b40d8146, flxPotableWaterUOM);
            flxConditionBody.add(flxStandByHours, CopyFlexContainer0b0951627a0314c, CopyflxStandByHours0d9e69ce6df4747, CopyFlexContainer0cb9183b7fa7442, CopyflxStandByHours0fd39d82e22f541, CopyFlexContainer0i81b2d71463c48, CopyflxStandByHours0e2e8fb1840cf44, CopyFlexContainer0j27335533f5145, CopyflxStandByHours0g6b96a988c5d48, CopyFlexContainer0adc842a52dc04c, CopyflxStandByHours0e00d07cb1c6448, CopyFlexContainer0e5d675dd917a45, CopyflxStandByHours0d5466f97da6f45, CopyFlexContainer0e1225488d4dc42, CopyflxStandByHours0efd1206bf47747, CopyFlexContainer0c159576f281141, CopyflxStandByHours0fa1e549b7ebe43, CopyFlexContainer0ae03993e60cb4f, CopyFlexContainer0df4f97dd416a4c, CopyflxStandByHours0aea15abc81364b, CopyFlexContainer0c5ac50f661a741, CopyflxStandByHours0e6ebc4180c184d, CopyFlexContainer0aaf8d50569d745, CopyflxShiftTypeContainer0g138fd243d4a4d, CopyFlexContainer0c364469ac53e4d, CopyflxStandByHours0c352dd72ff8c40, CopyFlexContainer0d52ea504347042, CopyflxStandByHours0j784d44727ea4b, CopyFlexContainer0h4bcb8d4824941, flxShiftTypeContainer, CopyFlexContainer0f6a19c9b7b0547, CopyflxStandByHours0i57fd98afcca4b, CopyFlexContainer0d3160ebb062147, CopyflxStandByHours0fabf8d30701e48, CopyFlexContainer0e4a90fe3744340, CopyflxShiftTypeContainer0b44a08b53a2842, CopyFlexContainer0a528cfb0e83e42, CopyflxStandByHours0ac73ab5fa26843, CopyFlexContainer0e98b211cad4644, CopyflxStandByHours0g009245ada124b, CopyFlexContainer0ee504e31596444, CopyflxShiftTypeContainer0a1964ea535e04f, CopyFlexContainer0dcc292c3a34b41, CopyflxStandByHours0da16bca9f9634f, CopyFlexContainer0e317ff10c4d946, CopyflxStandByHours0j25aa0df348045, CopyFlexContainer0c47c3a6dad6748, CopyflxShiftTypeContainer0c0939170e5d046, CopyFlexContainer0a79f5ce35a3944, CopyflxStandByHours0df8cf9d8a0bd49, CopyFlexContainer0c97abb88323a43, CopyflxShiftTypeContainer0d55cc76af3984d);
            var flxSaveConditionContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxSaveConditionContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSaveConditionContainer.setDefaultUnit(kony.flex.DP);
            var flxResetProjectCondition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxResetProjectCondition",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxResetProjectCondition.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ja831a2016494e = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0ja831a2016494e",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ee5a3bfb72fc4c = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0ee5a3bfb72fc4c",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResetProjectCondition.add(CopyLabel0ja831a2016494e, CopyLabel0ee5a3bfb72fc4c);
            var flxSavetProjectCondition = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSavetProjectCondition",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxSavetProjectCondition.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b3abaaa9bd9544 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0b3abaaa9bd9544",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0j950815a2b4d48 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0j950815a2b4d48",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSavetProjectCondition.add(CopyLabel0b3abaaa9bd9544, CopyLabel0j950815a2b4d48);
            flxSaveConditionContainer.add(flxResetProjectCondition, flxSavetProjectCondition);
            flxCondition.add(flxConditionBody, flxSaveConditionContainer);
            var flxStatusBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxStatusBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatusBody.setDefaultUnit(kony.flex.DP);
            var flxProgressBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "flxProgressBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProgressBody.setDefaultUnit(kony.flex.DP);
            var CopylblLocation0adff59ac1a9949 = new kony.ui.Label({
                "id": "CopylblLocation0adff59ac1a9949",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Progress/Activities",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxProgess = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
                "focusSkin": "sknTxtAreaActive",
                "height": "80%",
                "id": "tbxProgess",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 2000,
                "numberOfVisibleLines": 3,
                "right": "4.00%",
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "3%",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var lblRemainingProgress = new kony.ui.Label({
                "id": "lblRemainingProgress",
                "isVisible": true,
                "left": "4%",
                "right": "4%",
                "skin": "CopysknLbl0bc161b137dc14d",
                "text": "Remaining Characters: 2000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProgressBody.add(CopylblLocation0adff59ac1a9949, tbxProgess, lblRemainingProgress);
            var flxProblemBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "flxProblemBody",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProblemBody.setDefaultUnit(kony.flex.DP);
            var CopylblLocation0e5981b40077f4e = new kony.ui.Label({
                "id": "CopylblLocation0e5981b40077f4e",
                "isVisible": true,
                "left": "5.00%",
                "skin": "sknLbl333333100",
                "text": "Problem/Deficiency",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxProblem = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
                "focusSkin": "sknTxtAreaActive",
                "height": "80%",
                "id": "tbxProblem",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 2000,
                "numberOfVisibleLines": 3,
                "right": "4.00%",
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "10dp",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var lblRemainingProblem = new kony.ui.Label({
                "id": "lblRemainingProblem",
                "isVisible": true,
                "left": "4.00%",
                "right": "4%",
                "skin": "CopysknLbl0bc161b137dc14d",
                "text": "Remaining Characters : 2000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProblemBody.add(CopylblLocation0e5981b40077f4e, tbxProblem, lblRemainingProblem);
            var flxStatusSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxStatusSave",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStatusSave.setDefaultUnit(kony.flex.DP);
            var flxResetStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxResetStatus",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxResetStatus.setDefaultUnit(kony.flex.DP);
            var CopyLabel0j66ccf1f5c7a4e = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0j66ccf1f5c7a4e",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ga7339a6c13e4f = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0ga7339a6c13e4f",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResetStatus.add(CopyLabel0j66ccf1f5c7a4e, CopyLabel0ga7339a6c13e4f);
            var flxSaveStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSaveStatus",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxSaveStatus.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b9085409aee64a = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0b9085409aee64a",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0c9c1a6d8ed0447 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0c9c1a6d8ed0447",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSaveStatus.add(CopyLabel0b9085409aee64a, CopyLabel0c9c1a6d8ed0447);
            flxStatusSave.add(flxResetStatus, flxSaveStatus);
            flxStatusBody.add(flxProgressBody, flxProblemBody, flxStatusSave);
            var flxFutureBody = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxFutureBody",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": 0,
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFutureBody.setDefaultUnit(kony.flex.DP);
            var flxFuturePlan = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50.00%",
                "clipBounds": true,
                "height": "46%",
                "id": "flxFuturePlan",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFuturePlan.setDefaultUnit(kony.flex.DP);
            var CopylblLocation0j91ea0dcffba4c = new kony.ui.Label({
                "id": "CopylblLocation0j91ea0dcffba4c",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Plans Tomorrow",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxPlansTom = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
                "focusSkin": "sknTxtAreaActive",
                "height": "80%",
                "id": "tbxPlansTom",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 2000,
                "numberOfVisibleLines": 3,
                "right": "4.00%",
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "3%",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var lblRemainingPlans = new kony.ui.Label({
                "id": "lblRemainingPlans",
                "isVisible": true,
                "left": "4%",
                "right": "4%",
                "skin": "CopysknLbl0bc161b137dc14d",
                "text": "Remaining Characters : 2000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxFuturePlan.add(CopylblLocation0j91ea0dcffba4c, tbxPlansTom, lblRemainingPlans);
            var flxProjectNeeds = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "46%",
                "id": "flxProjectNeeds",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxProjectNeeds.setDefaultUnit(kony.flex.DP);
            var CopylblLocation0a562b3490a8b43 = new kony.ui.Label({
                "id": "CopylblLocation0a562b3490a8b43",
                "isVisible": true,
                "left": "5.00%",
                "skin": "sknLbl333333100",
                "text": "Project Needs",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxProjectNeeds = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_SENTENCES,
                "focusSkin": "sknTxtAreaActive",
                "height": "80%",
                "id": "tbxProjectNeeds",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 2000,
                "numberOfVisibleLines": 3,
                "right": "4.00%",
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "top": "3%",
                "width": "92%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            var lblRemainingNeeds = new kony.ui.Label({
                "id": "lblRemainingNeeds",
                "isVisible": true,
                "left": "4%",
                "right": "4%",
                "skin": "CopysknLbl0bc161b137dc14d",
                "text": "Remaining Characters : 2000",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "2%",
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProjectNeeds.add(CopylblLocation0a562b3490a8b43, tbxProjectNeeds, lblRemainingNeeds);
            var flxFutureContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxFutureContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxFutureContainer.setDefaultUnit(kony.flex.DP);
            var flxResetFuture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxResetFuture",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxResetFuture.setDefaultUnit(kony.flex.DP);
            var CopyLabel0a074e3252f8249 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0a074e3252f8249",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0bbe41a25d8c64d = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0bbe41a25d8c64d",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResetFuture.add(CopyLabel0a074e3252f8249, CopyLabel0bbe41a25d8c64d);
            var flxSaveFuture = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSaveFuture",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxSaveFuture.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b24dd659b27349 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0b24dd659b27349",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0ace1c7db90cf48 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0ace1c7db90cf48",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSaveFuture.add(CopyLabel0b24dd659b27349, CopyLabel0ace1c7db90cf48);
            flxFutureContainer.add(flxResetFuture, flxSaveFuture);
            flxFutureBody.add(flxFuturePlan, flxProjectNeeds, flxFutureContainer);
            var flxPopups = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxPopups",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a2b3b676de2843cfafe67fb4e7f3cfbf,
                "skin": "sknFlx000000Op60",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxPopups.setDefaultUnit(kony.flex.DP);
            var flxTRCPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "flxTRCPopup",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_e47e159a0a1041808c5e09b8e33ec9c1,
                "skin": "sknFlxBgOp0BorderOp0S1pRounded",
                "width": "65%",
                "zIndex": 1
            }, {}, {});
            flxTRCPopup.setDefaultUnit(kony.flex.DP);
            var flxTRCPopupHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "11%",
                "id": "flxTRCPopupHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTRCPopupHeader.setDefaultUnit(kony.flex.DP);
            var lblTRCPopupTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblTRCPopupTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "CopysknLblFontFFFFFFOp0jac49e7ef87d42",
                "text": "Select TRC",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDoneTRCPopup = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxDoneTRCPopup",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_bb862ad904804d62bc85e5c20d82db24,
                "right": "5%",
                "skin": "slFbox",
                "width": "20%",
                "zIndex": 1
            }, {}, {});
            flxDoneTRCPopup.setDefaultUnit(kony.flex.DP);
            var lblDoneTRCPopup = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDoneTRCPopup",
                "isVisible": true,
                "right": "0%",
                "skin": "sknLblDBD9DBOp00S90",
                "text": "Done",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_BOTTOM_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDoneTRCPopup.add(lblDoneTRCPopup);
            flxTRCPopupHeader.add(lblTRCPopupTitle, flxDoneTRCPopup);
            var flxTRCPopupBody = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": false,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "89%",
                "horizontalScrollIndicator": true,
                "id": "flxTRCPopupBody",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "sknFlxScrllBgFFFFFFOp100",
                "top": "11%",
                "verticalScrollIndicator": true,
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTRCPopupBody.setDefaultUnit(kony.flex.DP);
            var chxkbxTRCList = new kony.ui.CheckBoxGroup({
                "centerX": "50%",
                "id": "chxkbxTRCList",
                "isVisible": true,
                "skin": "sknCheckBoxFont333333Op100S90Perc",
                "top": "0%",
                "width": "88%",
                "zIndex": 1
            }, {
                "itemOrientation": constants.CHECKBOX_ITEM_ORIENTATION_VERTICAL,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "tickedImage": "checkbox_active.png",
                "untickedImage": "checkbox_inactive.png"
            });
            flxTRCPopupBody.add(chxkbxTRCList);
            flxTRCPopup.add(flxTRCPopupHeader, flxTRCPopupBody);
            flxPopups.add(flxTRCPopup);
            flxMain.add(flxPersonnelBody, flxEventsBody, flxRoasterBody, flxAssetToolsBody, flxAttachmentBody, flxCommentsBody, flxCondition, flxStatusBody, flxFutureBody, flxPopups);
            flxDPR.add(flxHamburger, flxMain);
            var flxSuccessStatus = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxSuccessStatus",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "100%",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 16
            }, {}, {});
            flxSuccessStatus.setDefaultUnit(kony.flex.DP);
            var flxLabel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxLabel",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "8%",
                "width": "100.00%"
            }, {}, {});
            flxLabel.setDefaultUnit(kony.flex.DP);
            var lblSaved = new kony.ui.Label({
                "id": "lblSaved",
                "isVisible": true,
                "right": 0,
                "skin": "CopydefLabel0a64fd884b1db41",
                "text": " Saved Successfully",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [3, 3, 3, 3],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxLabel.add(lblSaved);
            flxSuccessStatus.add(flxLabel);
            var flxOptionCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "110dp",
                "id": "flxOptionCon",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "right": 0,
                "skin": "CopyslFbox0h4b64f1a55d049",
                "top": "7%",
                "width": "14.22%",
                "zIndex": 10
            }, {}, {});
            flxOptionCon.setDefaultUnit(kony.flex.DP);
            var flxRefresh = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxRefresh",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "slFbox",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxRefresh.setDefaultUnit(kony.flex.DP);
            var lblRefresh = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblRefresh",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a28a8bbafeb14a",
                "text": "",
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
            flxRefresh.add(lblRefresh);
            var flxDateChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "55dp",
                "id": "flxDateChange",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxDateChange.setDefaultUnit(kony.flex.DP);
            var lblDateChange = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblDateChange",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0a28a8bbafeb14a",
                "text": "",
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
            flxDateChange.add(lblDateChange);
            flxOptionCon.add(flxRefresh, flxDateChange);
            var flxEventsContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventsContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxEventsContainer.setDefaultUnit(kony.flex.DP);
            var CopyflxHeader0dc0019132ec243 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "CopyflxHeader0dc0019132ec243",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            CopyflxHeader0dc0019132ec243.setDefaultUnit(kony.flex.DP);
            var flxEventBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxEventBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_bd12c64518d74ac3b3a8a6a11694746d,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxEventBack.setDefaultUnit(kony.flex.DP);
            var CopylblBack0bb48039b21d546 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblBack0bb48039b21d546",
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
            flxEventBack.add(CopylblBack0bb48039b21d546);
            var lblEventTitle = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblEventTitle",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Create Event",
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
            var CopyflxOption0jca8732226ad41 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxOption0jca8732226ad41",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopyslFbox0cc16b41980e34d",
                "width": "35dp",
                "zIndex": 5
            }, {}, {});
            CopyflxOption0jca8732226ad41.setDefaultUnit(kony.flex.DP);
            CopyflxOption0jca8732226ad41.add();
            CopyflxHeader0dc0019132ec243.add(flxEventBack, lblEventTitle, CopyflxOption0jca8732226ad41);
            var flxEventCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "flxEventCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxEventCon.setDefaultUnit(kony.flex.DP);
            var flxHeaderPersonnel = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "40dp",
                "id": "flxHeaderPersonnel",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "5dp",
                "width": "100%"
            }, {}, {});
            flxHeaderPersonnel.setDefaultUnit(kony.flex.DP);
            var lblProjectTitle = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblProjectTitle",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL00263e110",
                "text": "Required",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEmplName = new kony.ui.Label({
                "centerY": "50%",
                "height": "100%",
                "id": "lblEmplName",
                "isVisible": true,
                "left": "0%",
                "maxNumberOfLines": 1,
                "skin": "sknLBL00263e110",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "67.56%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxHeaderPersonnel.add(lblProjectTitle, lblEmplName);
            var flxInTransit = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxInTransit",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxInTransit.setDefaultUnit(kony.flex.DP);
            var lblInTransit = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblInTransit",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Milestone",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxInTransitValue = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "25dp",
                "id": "flxInTransitValue",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_f1467bea424243d98b11a80d61cdccfe,
                "right": "2%",
                "skin": "slFbox",
                "width": "25dp",
                "zIndex": 1
            }, {}, {});
            flxInTransitValue.setDefaultUnit(kony.flex.DP);
            var imgInTransitValue = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgInTransitValue",
                "isVisible": true,
                "skin": "slImage",
                "src": "checkbox_inactive.png",
                "width": "100%",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxInTransitValue.add(imgInTransitValue);
            var flxCheckContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCheckContainer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "0",
                "width": "60dp"
            }, {}, {});
            flxCheckContainer.setDefaultUnit(kony.flex.DP);
            var lblCheck = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblCheck",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterUnselected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCheckContainer.add(lblCheck);
            flxInTransit.add(lblInTransit, flxInTransitValue, flxCheckContainer);
            var CopyFlexContainer0c911f369025746 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0c911f369025746",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c911f369025746.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c911f369025746.add();
            var flxName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxName.setDefaultUnit(kony.flex.DP);
            var lblSystemValue = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSystemValue",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEventid = new kony.ui.Label({
                "centerY": "60%",
                "id": "lblEventid",
                "isVisible": false,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxActivityBox0cadb57782de847 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0cadb57782de847",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0cadb57782de847.setDefaultUnit(kony.flex.DP);
            var lblName = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblName",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
                "text": "System",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0g248c7e74e5a40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0g248c7e74e5a40",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0cadb57782de847.add(lblName, CopylbCountryAsterisk0g248c7e74e5a40);
            flxName.add(lblSystemValue, lblEventid, CopyflxActivityBox0cadb57782de847);
            var FlexContainer0cc930f2aae2d46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "FlexContainer0cc930f2aae2d46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            FlexContainer0cc930f2aae2d46.setDefaultUnit(kony.flex.DP);
            FlexContainer0cc930f2aae2d46.add();
            var flxEventStart = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventStart",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventStart.setDefaultUnit(kony.flex.DP);
            var flxEventStartTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxEventStartTime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxEventStartTime.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0g205c6ed2ab14c = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0g205c6ed2ab14c",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventStart = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEventStart",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEventStartTime.add(CopyimgArrow0g205c6ed2ab14c, lblEventStart);
            var CopyflxActivityBox0a3f74fe012d646 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0a3f74fe012d646",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0a3f74fe012d646.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0a5b9e434567f49 = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "CopylblNormalHours0a5b9e434567f49",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
                "text": "Start Time",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0h01b6ffc98ba4c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0h01b6ffc98ba4c",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0a3f74fe012d646.add(CopylblNormalHours0a5b9e434567f49, CopylbCountryAsterisk0h01b6ffc98ba4c);
            flxEventStart.add(flxEventStartTime, CopyflxActivityBox0a3f74fe012d646);
            var flxSeparatorEnd = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxSeparatorEnd",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxSeparatorEnd.setDefaultUnit(kony.flex.DP);
            flxSeparatorEnd.add();
            var flxEventENd = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventENd",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventENd.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0f02b455453e74f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0f02b455453e74f",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0f02b455453e74f.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0ec2c483e848644 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0ec2c483e848644",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
                "text": "End Time",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0ac988b74963349 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0ac988b74963349",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0f02b455453e74f.add(CopylblNormalHours0ec2c483e848644, CopylbCountryAsterisk0ac988b74963349);
            var flxEventEndTime = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxEventEndTime",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxEventEndTime.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0a2f62a73d1f143 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0a2f62a73d1f143",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventEnd = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEventEnd",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCrewPositionId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCrewPositionId",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEventEndTime.add(CopyimgArrow0a2f62a73d1f143, lblEventEnd, lblCrewPositionId);
            flxEventENd.add(CopyflxActivityBox0f02b455453e74f, flxEventEndTime);
            var CopyFlexContainer0d516268ebdd64b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d516268ebdd64b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d516268ebdd64b.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d516268ebdd64b.add();
            var flxEventTypeList = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventTypeList",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventTypeList.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0f602abf61ce542 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0f602abf61ce542",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0f602abf61ce542.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0e3386193950643 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0e3386193950643",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1cRed",
                "text": "Event Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0cc5255a6103045 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0cc5255a6103045",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0f602abf61ce542.add(CopylblNormalHours0e3386193950643, CopylbCountryAsterisk0cc5255a6103045);
            var flxEventType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxEventType",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxEventType.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0e52db8d8344b48 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0e52db8d8344b48",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEventType",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEventTypeNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEventTypeNo",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEventType.add(CopyimgArrow0e52db8d8344b48, lblEventType, lblEventTypeNo);
            flxEventTypeList.add(CopyflxActivityBox0f602abf61ce542, flxEventType);
            var CopyFlexContainer0cc269a660e4942 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0cc269a660e4942",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cc269a660e4942.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0cc269a660e4942.add();
            var flxDescriptionSep0 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxDescriptionSep0",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDescriptionSep0.setDefaultUnit(kony.flex.DP);
            flxDescriptionSep0.add();
            var CopyFlexContainer0cb56a0961d6140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0cb56a0961d6140",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cb56a0961d6140.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0cb56a0961d6140.add();
            var flxEventActivity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventActivity",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventActivity.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0d7a1eb7a557c48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0d7a1eb7a557c48",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0d7a1eb7a557c48.setDefaultUnit(kony.flex.DP);
            var lblactivity = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblactivity",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Activity",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0ceeabaa29cb642 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0ceeabaa29cb642",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0d7a1eb7a557c48.add(lblactivity, CopylbCountryAsterisk0ceeabaa29cb642);
            var flxActivity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxActivity",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxActivity.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0a706a3c7f9d546 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0a706a3c7f9d546",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblEventActivity = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEventActivity",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblEventActivityNo = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblEventActivityNo",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxActivity.add(CopyimgArrow0a706a3c7f9d546, lblEventActivity, lblEventActivityNo);
            flxEventActivity.add(CopyflxActivityBox0d7a1eb7a557c48, flxActivity);
            var flxDescriptionSep1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxDescriptionSep1",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "-3dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxDescriptionSep1.setDefaultUnit(kony.flex.DP);
            flxDescriptionSep1.add();
            var CopyFlexContainer0a1577bd342874e = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0a1577bd342874e",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0a1577bd342874e.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0a1577bd342874e.add();
            var flxEventDive = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventDive",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventDive.setDefaultUnit(kony.flex.DP);
            var lblDayHourRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblDayHourRate",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Dive #",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtDive = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtDive",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxEventDive.add(lblDayHourRate, txtDive);
            var CopyFlexContainer0d06f83c0ce4646 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d06f83c0ce4646",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d06f83c0ce4646.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d06f83c0ce4646.add();
            var flxEventDiveDepth = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventDiveDepth",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventDiveDepth.setDefaultUnit(kony.flex.DP);
            var lblOTRate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOTRate",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Dive Depth",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtDiveDepth = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtDiveDepth",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 10,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "top": "0dp",
                "width": "50%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxEventDiveDepth.add(lblOTRate, txtDiveDepth);
            var CopyFlexContainer0bc22e80414f349 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0bc22e80414f349",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0bc22e80414f349.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0bc22e80414f349.add();
            var flxEventUO = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEventUO",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEventUO.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0edcd42ad836049 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0edcd42ad836049",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0edcd42ad836049.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0be3ca8d9371946 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0be3ca8d9371946",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "UOM",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0ifd07c08909244 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0ifd07c08909244",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0edcd42ad836049.add(CopylblNormalHours0be3ca8d9371946, CopylbCountryAsterisk0ifd07c08909244);
            var flxEventUOM = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxEventUOM",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxEventUOM.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0c347d70a9f7e45 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0c347d70a9f7e45",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblUOM = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblUOM",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblCrewPositionId0b2a7a567f3ca45 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblCrewPositionId0b2a7a567f3ca45",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxEventUOM.add(CopyimgArrow0c347d70a9f7e45, lblUOM, CopylblCrewPositionId0b2a7a567f3ca45);
            flxEventUO.add(CopyflxActivityBox0edcd42ad836049, flxEventUOM);
            var CopyFlexContainer0e713c60845bc44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e713c60845bc44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e713c60845bc44.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e713c60845bc44.add();
            flxEventCon.add(flxHeaderPersonnel, flxInTransit, CopyFlexContainer0c911f369025746, flxName, FlexContainer0cc930f2aae2d46, flxEventStart, flxSeparatorEnd, flxEventENd, CopyFlexContainer0d516268ebdd64b, flxEventTypeList, CopyFlexContainer0cc269a660e4942, flxDescriptionSep0, CopyFlexContainer0cb56a0961d6140, flxEventActivity, flxDescriptionSep1, CopyFlexContainer0a1577bd342874e, flxEventDive, CopyFlexContainer0d06f83c0ce4646, flxEventDiveDepth, CopyFlexContainer0bc22e80414f349, flxEventUO, CopyFlexContainer0e713c60845bc44);
            var flxSaveEventCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxSaveEventCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSaveEventCon.setDefaultUnit(kony.flex.DP);
            var flxResetEvent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxResetEvent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxResetEvent.setDefaultUnit(kony.flex.DP);
            var CopyLabel0ec04fcb5e26b4e = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0ec04fcb5e26b4e",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0cbbc96ed45bf42 = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0cbbc96ed45bf42",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResetEvent.add(CopyLabel0ec04fcb5e26b4e, CopyLabel0cbbc96ed45bf42);
            var flxSaveEvent = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxSaveEvent",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxSaveEvent.setDefaultUnit(kony.flex.DP);
            var CopyLabel0bb74b8c6ff9546 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0bb74b8c6ff9546",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0bd6a7ee701634f = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0bd6a7ee701634f",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSaveEvent.add(CopyLabel0bb74b8c6ff9546, CopyLabel0bd6a7ee701634f);
            flxSaveEventCon.add(flxResetEvent, flxSaveEvent);
            flxEventsContainer.add(CopyflxHeader0dc0019132ec243, flxEventCon, flxSaveEventCon);
            var flxAssetsTools = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxAssetsTools",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxAssetsTools.setDefaultUnit(kony.flex.DP);
            var flxHeaderAssetTools = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxHeaderAssetTools",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxHeaderAssetTools.setDefaultUnit(kony.flex.DP);
            var flxAssetToolsback = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxAssetToolsback",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_a05c3be2928f447a8a92e01b90cafb63,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxAssetToolsback.setDefaultUnit(kony.flex.DP);
            var CopylblBack0d2ff2c8b081446 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblBack0d2ff2c8b081446",
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
            flxAssetToolsback.add(CopylblBack0d2ff2c8b081446);
            var lblHeaderTools = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeaderTools",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Create Tools/Charges",
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
            flxHeaderAssetTools.add(flxAssetToolsback, lblHeaderTools);
            var flxAssetToolsContainer = new kony.ui.FlexScrollContainer({
                "allowHorizontalBounce": false,
                "allowVerticalBounce": true,
                "bounces": true,
                "clipBounds": true,
                "enableScrolling": true,
                "height": "85%",
                "horizontalScrollIndicator": true,
                "id": "flxAssetToolsContainer",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "pagingEnabled": false,
                "scrollDirection": kony.flex.SCROLL_VERTICAL,
                "skin": "slFSbox",
                "top": "0",
                "verticalScrollIndicator": true,
                "width": "100%"
            }, {}, {});
            flxAssetToolsContainer.setDefaultUnit(kony.flex.DP);
            var flxAssetType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAssetType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAssetType.setDefaultUnit(kony.flex.DP);
            var flxTypeAsset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxTypeAsset",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "76.44%",
                "zIndex": 1
            }, {}, {});
            flxTypeAsset.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0c61a98675e624f = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0c61a98675e624f",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var toolsCharges = new kony.ui.Image2({
                "height": "100%",
                "id": "toolsCharges",
                "isVisible": false,
                "right": 5,
                "skin": "slImage",
                "src": "consumable.png",
                "top": "0dp",
                "width": "22dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblType",
                "isVisible": true,
                "left": 7,
                "maxNumberOfLines": 1,
                "right": "3%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "200dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTypeId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblTypeId",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblReportAssetTools = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblReportAssetTools",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxTypeAsset.add(CopyimgArrow0c61a98675e624f, toolsCharges, lblType, lblTypeId, lblReportAssetTools);
            var CopylblNormalHours0c55b37eab6c545 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0c55b37eab6c545",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1cRed",
                "text": "Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAssetType.add(flxTypeAsset, CopylblNormalHours0c55b37eab6c545);
            var CopyFlexContainer0ee53998a990c45 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ee53998a990c45",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ee53998a990c45.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ee53998a990c45.add();
            var CopyflxIntrsitSeparator0fed6eb0936ff46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxIntrsitSeparator0fed6eb0936ff46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxIntrsitSeparator0fed6eb0936ff46.setDefaultUnit(kony.flex.DP);
            CopyflxIntrsitSeparator0fed6eb0936ff46.add();
            var flxAssetId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAssetId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAssetId.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0hadfd869d2c848 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0hadfd869d2c848",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0hadfd869d2c848.setDefaultUnit(kony.flex.DP);
            var CopylblName0decd7c69430140 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblName0decd7c69430140",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "ID #",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0a4249f7467b949 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0a4249f7467b949",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0hadfd869d2c848.add(CopylblName0decd7c69430140, CopylbCountryAsterisk0a4249f7467b949);
            var tbxAssetId = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxAssetId",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxAssetId.add(CopyflxActivityBox0hadfd869d2c848, tbxAssetId);
            var CopyflxSeparatorEnd0f6b077a3641746 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparatorEnd0f6b077a3641746",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxSeparatorEnd0f6b077a3641746.setDefaultUnit(kony.flex.DP);
            CopyflxSeparatorEnd0f6b077a3641746.add();
            var flxProjectDescription = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "centerX": "50%",
                "clipBounds": true,
                "height": "120dp",
                "id": "flxProjectDescription",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "1dp",
                "width": "100%",
                "zIndex": 2
            }, {}, {});
            flxProjectDescription.setDefaultUnit(kony.flex.DP);
            var lblDescription = new kony.ui.Label({
                "bottom": 7,
                "id": "lblDescription",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLbl333333100",
                "text": "Description",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "7dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtDescriptionValue = new kony.ui.TextArea2({
                "autoCapitalize": constants.TEXTAREA_AUTO_CAPITALIZE_NONE,
                "bottom": "5dp",
                "focusSkin": "sknTxtAreaActive",
                "height": "75dp",
                "id": "txtDescriptionValue",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTAREA_KEY_BOARD_STYLE_DEFAULT,
                "left": "4%",
                "maxTextLength": 1000,
                "numberOfVisibleLines": 3,
                "skin": "sknTxtAreaActive",
                "textInputMode": constants.TEXTAREA_INPUT_MODE_ANY,
                "width": "92%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_TOP_LEFT,
                "padding": [2, 2, 2, 2],
                "paddingInPixel": false
            }, {
                "placeholderSkin": "defTextAreaPlaceholder"
            });
            flxProjectDescription.add(lblDescription, txtDescriptionValue);
            var CopyFlexContainer0a13101caa20d43 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0a13101caa20d43",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0a13101caa20d43.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0a13101caa20d43.add();
            var CopyFlexContainer0e51ccde0da9741 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e51ccde0da9741",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e51ccde0da9741.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e51ccde0da9741.add();
            var flxTbxAsseType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxTbxAsseType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxTbxAsseType.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0f8c5086808c34a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0f8c5086808c34a",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0f8c5086808c34a.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0c5833f834c024a = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "CopylblNormalHours0c5833f834c024a",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Asset Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0b5e6f4e77e0646 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0b5e6f4e77e0646",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0f8c5086808c34a.add(CopylblNormalHours0c5833f834c024a, CopylbCountryAsterisk0b5e6f4e77e0646);
            var tbxAssetType = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxAssetType",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxTbxAsseType.add(CopyflxActivityBox0f8c5086808c34a, tbxAssetType);
            var CopyFlexContainer0gb5aa6359a3541 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0gb5aa6359a3541",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0gb5aa6359a3541.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0gb5aa6359a3541.add();
            var CopyflxIntrsitSeparator0g183f653e4e04f = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxIntrsitSeparator0g183f653e4e04f",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxIntrsitSeparator0g183f653e4e04f.setDefaultUnit(kony.flex.DP);
            CopyflxIntrsitSeparator0g183f653e4e04f.add();
            var flxChildProject = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxChildProject",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxChildProject.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0e91bbad4c6b54b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0e91bbad4c6b54b",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0e91bbad4c6b54b.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0d7822e5cd2e843 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0d7822e5cd2e843",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Project",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0feb30ff388f342 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0feb30ff388f342",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0e91bbad4c6b54b.add(CopylblNormalHours0d7822e5cd2e843, CopylbCountryAsterisk0feb30ff388f342);
            var flxProjectPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxProjectPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxProjectPopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0j03bcbe1c1fc49 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0j03bcbe1c1fc49",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblChildProject = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblChildProject",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxProjectPopUp.add(CopyimgArrow0j03bcbe1c1fc49, lblChildProject);
            flxChildProject.add(CopyflxActivityBox0e91bbad4c6b54b, flxProjectPopUp);
            var CopyFlexContainer0f1fa5031547040 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0f1fa5031547040",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0f1fa5031547040.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0f1fa5031547040.add();
            var flxActivityAsset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxActivityAsset",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxActivityAsset.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0ec0b96e9065646 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0ec0b96e9065646",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0ec0b96e9065646.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0c76090e60b1646 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0c76090e60b1646",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Activity",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0jdc075f9797f46 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0jdc075f9797f46",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0ec0b96e9065646.add(CopylblNormalHours0c76090e60b1646, CopylbCountryAsterisk0jdc075f9797f46);
            var flxActivityPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxActivityPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxActivityPopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0eeedd42f8e5b4d = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0eeedd42f8e5b4d",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAssetActivity = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAssetActivity",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblAssetActivityId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAssetActivityId",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxActivityPopUp.add(CopyimgArrow0eeedd42f8e5b4d, lblAssetActivity, lblAssetActivityId);
            flxActivityAsset.add(CopyflxActivityBox0ec0b96e9065646, flxActivityPopUp);
            var CopyFlexContainer0d03e3feccab247 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d03e3feccab247",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d03e3feccab247.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d03e3feccab247.add();
            var flxSourceType = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxSourceType",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSourceType.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0ea77cac07f3042 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0ea77cac07f3042",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0ea77cac07f3042.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0j262701a718e46 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0j262701a718e46",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Source Type",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0e86cef9063a84e = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0e86cef9063a84e",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0ea77cac07f3042.add(CopylblNormalHours0j262701a718e46, CopylbCountryAsterisk0e86cef9063a84e);
            var flxSourePopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxSourePopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxSourePopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0ib06887a208b4a = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0ib06887a208b4a",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSourceType = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSourceType",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSourePopUp.add(CopyimgArrow0ib06887a208b4a, lblSourceType);
            flxSourceType.add(CopyflxActivityBox0ea77cac07f3042, flxSourePopUp);
            var CopyFlexContainer0b322242ab74e49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0b322242ab74e49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0b322242ab74e49.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0b322242ab74e49.add();
            var flxCategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxCategory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCategory.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0ie852af725cb46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0ie852af725cb46",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0ie852af725cb46.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0bc86567a95b448 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0bc86567a95b448",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Category",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0a5a1a411cfd74c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0a5a1a411cfd74c",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0ie852af725cb46.add(CopylblNormalHours0bc86567a95b448, CopylbCountryAsterisk0a5a1a411cfd74c);
            var flxCategoryPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxCategoryPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxCategoryPopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0c742e1b5910140 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0c742e1b5910140",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblCategory = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCategory",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCategoryId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblCategoryId",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCategoryPopUp.add(CopyimgArrow0c742e1b5910140, lblCategory, lblCategoryId);
            flxCategory.add(CopyflxActivityBox0ie852af725cb46, flxCategoryPopUp);
            var CopyFlexContainer0ff4309d9071348 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ff4309d9071348",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ff4309d9071348.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ff4309d9071348.add();
            var flxSubcategory = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxSubcategory",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSubcategory.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0j30a5e77b77340 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0j30a5e77b77340",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0j30a5e77b77340.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0a08eee01c72f4c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0a08eee01c72f4c",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Sub Category",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0gc1e9daa7b7548 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0gc1e9daa7b7548",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0j30a5e77b77340.add(CopylblNormalHours0a08eee01c72f4c, CopylbCountryAsterisk0gc1e9daa7b7548);
            var flxSubCategoryPopUp = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxSubCategoryPopUp",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxSubCategoryPopUp.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0a5a1d35b749246 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0a5a1d35b749246",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblSubCategory = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSubCategory",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "82.47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblSubCategoryId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblSubCategoryId",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "82.47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxSubCategoryPopUp.add(CopyimgArrow0a5a1d35b749246, lblSubCategory, lblSubCategoryId);
            flxSubcategory.add(CopyflxActivityBox0j30a5e77b77340, flxSubCategoryPopUp);
            var CopyFlexContainer0c010f574d4814b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c010f574d4814b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c010f574d4814b.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c010f574d4814b.add();
            var flxContractSerial = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxContractSerial",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxContractSerial.setDefaultUnit(kony.flex.DP);
            var CopylblOIIOTHours0b292f168f65842 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblOIIOTHours0b292f168f65842",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Contract Serial #",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxContractSerialCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxContractSerialCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxContractSerialCon.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0ic3c4fd1fb1241 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0ic3c4fd1fb1241",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblContractSerial = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblContractSerial",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "69.70%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblContractSerialId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblContractSerialId",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "82.47%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxContractSerialCon.add(CopyimgArrow0ic3c4fd1fb1241, lblContractSerial, lblContractSerialId);
            flxContractSerial.add(CopylblOIIOTHours0b292f168f65842, flxContractSerialCon);
            var flxIntrsitSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxIntrsitSeparator",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxIntrsitSeparator.setDefaultUnit(kony.flex.DP);
            flxIntrsitSeparator.add();
            var CopyFlexContainer0ec4607ba32e940 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ec4607ba32e940",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ec4607ba32e940.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ec4607ba32e940.add();
            var flxSerialId = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxSerialId",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSerialId.setDefaultUnit(kony.flex.DP);
            var CopylblOIIOTHours0d2e5acd2a53f46 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblOIIOTHours0d2e5acd2a53f46",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Serial ID",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxSerialId = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxSerialId",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxSerialId.add(CopylblOIIOTHours0d2e5acd2a53f46, tbxSerialId);
            var CopyFlexContainer0cdb72b8c103046 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0cdb72b8c103046",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0cdb72b8c103046.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0cdb72b8c103046.add();
            var flxAssetSubType1 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAssetSubType1",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAssetSubType1.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0g846109d133844 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0g846109d133844",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0g846109d133844.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0baf68aa4af9342 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0baf68aa4af9342",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Asset Subtype",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0df2fc0e17af64d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0df2fc0e17af64d",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0g846109d133844.add(CopylblNormalHours0baf68aa4af9342, CopylbCountryAsterisk0df2fc0e17af64d);
            var CopyflxEventType0hd764c9b85914b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxEventType0hd764c9b85914b",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            CopyflxEventType0hd764c9b85914b.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0if1950cad94942 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0if1950cad94942",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAssetSubType1 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAssetSubType1",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblEventTypeNo0c8e96c6edf054f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblEventTypeNo0c8e96c6edf054f",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxEventType0hd764c9b85914b.add(CopyimgArrow0if1950cad94942, lblAssetSubType1, CopylblEventTypeNo0c8e96c6edf054f);
            var tbxAssetSubtype1 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxAssetSubtype1",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxAssetSubType1.add(CopyflxActivityBox0g846109d133844, CopyflxEventType0hd764c9b85914b, tbxAssetSubtype1);
            var CopyFlexContainer0ffdc3e0de2fd46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ffdc3e0de2fd46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ffdc3e0de2fd46.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ffdc3e0de2fd46.add();
            var flxAssetSubType2 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxAssetSubType2",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAssetSubType2.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0b7a6deb6aefd44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0b7a6deb6aefd44",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0b7a6deb6aefd44.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0e8fe001eaad549 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0e8fe001eaad549",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Asset Subtype2",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0i15a08aaac1a49 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0i15a08aaac1a49",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0b7a6deb6aefd44.add(CopylblNormalHours0e8fe001eaad549, CopylbCountryAsterisk0i15a08aaac1a49);
            var CopyflxEventType0a349d667587541 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "CopyflxEventType0a349d667587541",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            CopyflxEventType0a349d667587541.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0fadd43e373fa49 = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0fadd43e373fa49",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblAssetSubType2 = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblAssetSubType2",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblEventTypeNo0bc89e83c29b64c = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblEventTypeNo0bc89e83c29b64c",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxEventType0a349d667587541.add(CopyimgArrow0fadd43e373fa49, lblAssetSubType2, CopylblEventTypeNo0bc89e83c29b64c);
            var tbxAssetSubType2 = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxAssetSubType2",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxAssetSubType2.add(CopyflxActivityBox0b7a6deb6aefd44, CopyflxEventType0a349d667587541, tbxAssetSubType2);
            var CopyflxIntrsitSeparator0hc039f5d292d47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyflxIntrsitSeparator0hc039f5d292d47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxIntrsitSeparator0hc039f5d292d47.setDefaultUnit(kony.flex.DP);
            CopyflxIntrsitSeparator0hc039f5d292d47.add();
            var CopyFlexContainer0c5208bce868a4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c5208bce868a4a",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c5208bce868a4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c5208bce868a4a.add();
            var flxRate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRate",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRate.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0icbc9bc218e140 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0icbc9bc218e140",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0icbc9bc218e140.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0d8b909e8d9ca40 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblNormalHours0d8b909e8d9ca40",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Rate",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0cfe1ddba31b248 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0cfe1ddba31b248",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0icbc9bc218e140.add(CopylblNormalHours0d8b909e8d9ca40, CopylbCountryAsterisk0cfe1ddba31b248);
            var tbxRate = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxRate",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": ".!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRate.add(CopyflxActivityBox0icbc9bc218e140, tbxRate);
            var flxRateSeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "flxRateSeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRateSeparator.setDefaultUnit(kony.flex.DP);
            flxRateSeparator.add();
            var flxQuantity = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxQuantity",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxQuantity.setDefaultUnit(kony.flex.DP);
            var lblOIIOTHours = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblOIIOTHours",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Quantity",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxQuantity = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxQuantity",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": ".!₹\"#$%&'()*+,-/:;<=>?@abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_NUMERIC,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxQuantity.add(lblOIIOTHours, tbxQuantity);
            var flxQualitySeparator = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "flxQualitySeparator",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxQualitySeparator.setDefaultUnit(kony.flex.DP);
            flxQualitySeparator.add();
            var flxStartDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxStartDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxStartDate.setDefaultUnit(kony.flex.DP);
            var lblArrivalDate = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblArrivalDate",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Start Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var cldStartDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "75%",
                "hour": 0,
                "id": "cldStartDate",
                "isVisible": true,
                "minutes": 0,
                "placeholder": "----/--/--",
                "right": "15dp",
                "seconds": 0,
                "skin": "sknCalProjectDetails",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            flxStartDate.add(lblArrivalDate, cldStartDate);
            var CopyFlexContainer0ce6f4605cb7946 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ce6f4605cb7946",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ce6f4605cb7946.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ce6f4605cb7946.add();
            var flxEndDate = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxEndDate",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxEndDate.setDefaultUnit(kony.flex.DP);
            var CopylblArrivalDate0e3ae68a65cdb46 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblArrivalDate0e3ae68a65cdb46",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "End Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var cldEndDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "75%",
                "hour": 0,
                "id": "cldEndDate",
                "isVisible": true,
                "minutes": 0,
                "placeholder": "----/--/--",
                "right": "15dp",
                "seconds": 0,
                "skin": "sknCalProjectDetails",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "110dp",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 1, 0],
                "paddingInPixel": false
            }, {});
            flxEndDate.add(CopylblArrivalDate0e3ae68a65cdb46, cldEndDate);
            var CopyFlexContainer0de538c44507840 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0de538c44507840",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0de538c44507840.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0de538c44507840.add();
            var flxAEFNumber = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "42dp",
                "id": "flxAEFNumber",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxAEFNumber.setDefaultUnit(kony.flex.DP);
            var CopylblOIIOTHours0i3df3c404e5c41 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblOIIOTHours0i3df3c404e5c41",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "AFE #",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var tbxAefNumber = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "70%",
                "id": "tbxAefNumber",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 50,
                "restrictCharactersSet": "!₹\"#$%&'()*+,-/:;<=>?@",
                "right": "4%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "width": "40%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 3, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_NEXT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxAEFNumber.add(CopylblOIIOTHours0i3df3c404e5c41, tbxAefNumber);
            var CopyFlexContainer0f41243ebbc5146 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0f41243ebbc5146",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0f41243ebbc5146.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0f41243ebbc5146.add();
            var flxCustomer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxCustomer",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxCustomer.setDefaultUnit(kony.flex.DP);
            var CopylblInTransit0fd165283eb0c4f = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblInTransit0fd165283eb0c4f",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Customer Equipment",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxCustomerCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxCustomerCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "0",
                "width": "60dp"
            }, {}, {});
            flxCustomerCheck.setDefaultUnit(kony.flex.DP);
            var lblCustomerCheck = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblCustomerCheck",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterUnselected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxCustomerCheck.add(lblCustomerCheck);
            flxCustomer.add(CopylblInTransit0fd165283eb0c4f, flxCustomerCheck);
            flxAssetToolsContainer.add(flxAssetType, CopyFlexContainer0ee53998a990c45, CopyflxIntrsitSeparator0fed6eb0936ff46, flxAssetId, CopyflxSeparatorEnd0f6b077a3641746, flxProjectDescription, CopyFlexContainer0a13101caa20d43, CopyFlexContainer0e51ccde0da9741, flxTbxAsseType, CopyFlexContainer0gb5aa6359a3541, CopyflxIntrsitSeparator0g183f653e4e04f, flxChildProject, CopyFlexContainer0f1fa5031547040, flxActivityAsset, CopyFlexContainer0d03e3feccab247, flxSourceType, CopyFlexContainer0b322242ab74e49, flxCategory, CopyFlexContainer0ff4309d9071348, flxSubcategory, CopyFlexContainer0c010f574d4814b, flxContractSerial, flxIntrsitSeparator, CopyFlexContainer0ec4607ba32e940, flxSerialId, CopyFlexContainer0cdb72b8c103046, flxAssetSubType1, CopyFlexContainer0ffdc3e0de2fd46, flxAssetSubType2, CopyflxIntrsitSeparator0hc039f5d292d47, CopyFlexContainer0c5208bce868a4a, flxRate, flxRateSeparator, flxQuantity, flxQualitySeparator, flxStartDate, CopyFlexContainer0ce6f4605cb7946, flxEndDate, CopyFlexContainer0de538c44507840, flxAEFNumber, CopyFlexContainer0f41243ebbc5146, flxCustomer);
            var flxSaveAssets = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxSaveAssets",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSaveAssets.setDefaultUnit(kony.flex.DP);
            var flxAssetToolsReset = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxAssetToolsReset",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxAssetToolsReset.setDefaultUnit(kony.flex.DP);
            var CopyLabel0gf5eb8773aa04d = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0gf5eb8773aa04d",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0c310be2074754b = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0c310be2074754b",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAssetToolsReset.add(CopyLabel0gf5eb8773aa04d, CopyLabel0c310be2074754b);
            var flxAssetToolsSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxAssetToolsSave",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxAssetToolsSave.setDefaultUnit(kony.flex.DP);
            var CopyLabel0b4a101109b2346 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0b4a101109b2346",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0f28d11e302914e = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0f28d11e302914e",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAssetToolsSave.add(CopyLabel0b4a101109b2346, CopyLabel0f28d11e302914e);
            flxSaveAssets.add(flxAssetToolsReset, flxAssetToolsSave);
            flxAssetsTools.add(flxHeaderAssetTools, flxAssetToolsContainer, flxSaveAssets);
            var flxRoasterContainer = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoasterContainer",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxOp0",
                "top": "0%",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxRoasterContainer.setDefaultUnit(kony.flex.DP);
            var flxRoasterHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "clipBounds": true,
                "height": "7%",
                "id": "flxRoasterHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "sknFlx003C5COp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 3
            }, {}, {});
            flxRoasterHeader.setDefaultUnit(kony.flex.DP);
            var flxRoasterBack = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "52%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoasterBack",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0%",
                "isModalContainer": false,
                "onClick": controller.AS_FlexContainer_ic77e711205341ab91c770db68b0b4b8,
                "skin": "slFbox",
                "width": "50dp",
                "zIndex": 1
            }, {}, {});
            flxRoasterBack.setDefaultUnit(kony.flex.DP);
            var CopylblBack0d409113898494d = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "CopylblBack0d409113898494d",
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
            flxRoasterBack.add(CopylblBack0d409113898494d);
            var lblHeaderRoaster = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblHeaderRoaster",
                "isVisible": true,
                "skin": "sknLblFFFFFFOp100S130",
                "text": "Create Roster",
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
            var CopyflxOption0ic45dc60544e46 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxOption0ic45dc60544e46",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopyslFbox0cc16b41980e34d",
                "width": "35dp",
                "zIndex": 5
            }, {}, {});
            CopyflxOption0ic45dc60544e46.setDefaultUnit(kony.flex.DP);
            CopyflxOption0ic45dc60544e46.add();
            flxRoasterHeader.add(flxRoasterBack, lblHeaderRoaster, CopyflxOption0ic45dc60544e46);
            var flxRoasterCon = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "85%",
                "id": "flxRoasterCon",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "100%"
            }, {}, {});
            flxRoasterCon.setDefaultUnit(kony.flex.DP);
            var flxRoasterName = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 3,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterName",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "7dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterName.setDefaultUnit(kony.flex.DP);
            var lblRoasterId = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRoasterId",
                "isVisible": false,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblEventid0c149ae34f8f04b = new kony.ui.Label({
                "centerY": "60%",
                "id": "CopylblEventid0c149ae34f8f04b",
                "isVisible": false,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyflxActivityBox0i4062f962e2540 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0i4062f962e2540",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0i4062f962e2540.setDefaultUnit(kony.flex.DP);
            var CopylblName0hbcdb61ff7f74a = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblName0hbcdb61ff7f74a",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLblErrorAlert",
                "text": "Name",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0aa6d217d184944 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0aa6d217d184944",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0i4062f962e2540.add(CopylblName0hbcdb61ff7f74a, CopylbCountryAsterisk0aa6d217d184944);
            var txtRoasterName = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtRoasterName",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 60,
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRoasterName.add(lblRoasterId, CopylblEventid0c149ae34f8f04b, CopyflxActivityBox0i4062f962e2540, txtRoasterName);
            var CopyFlexContainer0eb49c8aa076648 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0eb49c8aa076648",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0eb49c8aa076648.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0eb49c8aa076648.add();
            var CopyFlexContainer0d824cb72d19c44 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "10dp",
                "id": "CopyFlexContainer0d824cb72d19c44",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d824cb72d19c44.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d824cb72d19c44.add();
            var flxRoasterClass = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterClass",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "3dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterClass.setDefaultUnit(kony.flex.DP);
            var CopyflxActivityBox0aed15cf7822841 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "CopyflxActivityBox0aed15cf7822841",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "35%"
            }, {}, {});
            CopyflxActivityBox0aed15cf7822841.setDefaultUnit(kony.flex.DP);
            var CopylblNormalHours0h143a4b5b1b546 = new kony.ui.Label({
                "centerY": "49.99%",
                "id": "CopylblNormalHours0h143a4b5b1b546",
                "isVisible": true,
                "left": "15%",
                "skin": "sknLBL1201c1c1c",
                "text": "Class",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylbCountryAsterisk0c7362d1061f946 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylbCountryAsterisk0c7362d1061f946",
                "isVisible": false,
                "left": "1%",
                "skin": "sknLblAsterisk",
                "text": "*",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxActivityBox0aed15cf7822841.add(CopylblNormalHours0h143a4b5b1b546, CopylbCountryAsterisk0c7362d1061f946);
            var lblRoasterClass = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRoasterClass",
                "isVisible": true,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": "50%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtRoasterClass = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtRoasterClass",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 60,
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRoasterClass.add(CopyflxActivityBox0aed15cf7822841, lblRoasterClass, txtRoasterClass);
            var CopyflxSeparatorEnd0fd555cf9c13045 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparatorEnd0fd555cf9c13045",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxSeparatorEnd0fd555cf9c13045.setDefaultUnit(kony.flex.DP);
            CopyflxSeparatorEnd0fd555cf9c13045.add();
            var flxRoasterDivision = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterDivision",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterDivision.setDefaultUnit(kony.flex.DP);
            var CopylblDayHourRate0aa696e9b82d14b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblDayHourRate0aa696e9b82d14b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Division",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtRoasterDivision = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtRoasterDivision",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 60,
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRoasterDivision.add(CopylblDayHourRate0aa696e9b82d14b, txtRoasterDivision);
            var CopyflxSeparatorEnd0bb78df71586745 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyflxSeparatorEnd0bb78df71586745",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyflxSeparatorEnd0bb78df71586745.setDefaultUnit(kony.flex.DP);
            CopyflxSeparatorEnd0bb78df71586745.add();
            var flxRoasterRoom = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterRoom",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterRoom.setDefaultUnit(kony.flex.DP);
            var CopylblDayHourRate0j77e411c22ed4e = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblDayHourRate0j77e411c22ed4e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Room",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtRoasterRoom = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtRoasterRoom",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRoasterRoom.add(CopylblDayHourRate0j77e411c22ed4e, txtRoasterRoom);
            var CopyFlexContainer0d9aa0a66555241 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0d9aa0a66555241",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0d9aa0a66555241.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0d9aa0a66555241.add();
            var flxRoasterPhone = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterPhone",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterPhone.setDefaultUnit(kony.flex.DP);
            var CopylblDayHourRate0c9660b2f88e245 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblDayHourRate0c9660b2f88e245",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Phone",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtRoasterPhone = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtRoasterPhone",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRoasterPhone.add(CopylblDayHourRate0c9660b2f88e245, txtRoasterPhone);
            var CopyFlexContainer0f0153f41384b42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0f0153f41384b42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0f0153f41384b42.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0f0153f41384b42.add();
            var flxRoasterRaft = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterRaft",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterRaft.setDefaultUnit(kony.flex.DP);
            var CopylblDayHourRate0f37608c477274e = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblDayHourRate0f37608c477274e",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Raft",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRaftPop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxRaftPop",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxRaftPop.setDefaultUnit(kony.flex.DP);
            var CopyimgArrow0d589214f4c964f = new kony.ui.Image2({
                "height": "100%",
                "id": "CopyimgArrow0d589214f4c964f",
                "isVisible": true,
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblRaft = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblRaft",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblEventActivityNo0ad7a098b6b5f4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblEventActivityNo0ad7a098b6b5f4b",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRaftPop.add(CopyimgArrow0d589214f4c964f, lblRaft, CopylblEventActivityNo0ad7a098b6b5f4b);
            flxRoasterRaft.add(CopylblDayHourRate0f37608c477274e, flxRaftPop);
            var CopyFlexContainer0g67fbc23f3d64d = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0g67fbc23f3d64d",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0g67fbc23f3d64d.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0g67fbc23f3d64d.add();
            var flxRoasterVOC = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "45dp",
                "id": "flxRoasterVOC",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterVOC.setDefaultUnit(kony.flex.DP);
            var CopylblOTRate0a6118ebfc25b4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblOTRate0a6118ebfc25b4b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "VOR/CTR",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var txtRoasterVOC = new kony.ui.TextBox2({
                "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
                "centerY": "50%",
                "focusSkin": "sknTbxCreateActive",
                "height": "75%",
                "id": "txtRoasterVOC",
                "isVisible": true,
                "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
                "maxTextLength": 30,
                "right": "5%",
                "secureTextEntry": false,
                "skin": "sknTbxCreateActive",
                "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
                "top": "0dp",
                "width": "60%",
                "zIndex": 1
            }, {
                "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {
                "autoFilter": false,
                "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DEFAULT,
                "placeholderSkin": "defTextBoxPlaceholder",
                "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
            });
            flxRoasterVOC.add(CopylblOTRate0a6118ebfc25b4b, txtRoasterVOC);
            var CopyFlexContainer0e6fc4a56c9eb4a = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0e6fc4a56c9eb4a",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0e6fc4a56c9eb4a.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0e6fc4a56c9eb4a.add();
            var flxRoasterClientCo = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRoasterClientCo",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterClientCo.setDefaultUnit(kony.flex.DP);
            var CopylblInTransit0ee77102c4aa348 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblInTransit0ee77102c4aa348",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Client",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxRoasterClient = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxRoasterClient",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "0",
                "width": "60dp"
            }, {}, {});
            flxRoasterClient.setDefaultUnit(kony.flex.DP);
            var lblRoasterClient = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblRoasterClient",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterUnselected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRoasterClient.add(lblRoasterClient);
            flxRoasterClientCo.add(CopylblInTransit0ee77102c4aa348, flxRoasterClient);
            var CopyFlexContainer0if244237ae5c42 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0if244237ae5c42",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0if244237ae5c42.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0if244237ae5c42.add();
            var flxRoasterMobe = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRoasterMobe",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterMobe.setDefaultUnit(kony.flex.DP);
            var CopylblInTransit0ia5f2adbe5034d = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblInTransit0ia5f2adbe5034d",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Mobe",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxMobeCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxMobeCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "0",
                "width": "60dp"
            }, {}, {});
            flxMobeCheck.setDefaultUnit(kony.flex.DP);
            var lblMobeCheck = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblMobeCheck",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterUnselected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxMobeCheck.add(lblMobeCheck);
            flxRoasterMobe.add(CopylblInTransit0ia5f2adbe5034d, flxMobeCheck);
            var CopyFlexContainer0jddac4f7c0ca49 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0jddac4f7c0ca49",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0jddac4f7c0ca49.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0jddac4f7c0ca49.add();
            var flxRoasterDemobe = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRoasterDemobe",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterDemobe.setDefaultUnit(kony.flex.DP);
            var CopylblInTransit0b93c8105ddba45 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblInTransit0b93c8105ddba45",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Demobe",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxDemobeCheck = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "flxDemobeCheck",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "0%",
                "skin": "slFbox",
                "top": "0",
                "width": "60dp"
            }, {}, {});
            flxDemobeCheck.setDefaultUnit(kony.flex.DP);
            var lblDemobeCheck = new kony.ui.Label({
                "centerX": "50.00%",
                "centerY": "50.00%",
                "id": "lblDemobeCheck",
                "isVisible": true,
                "left": "0dp",
                "skin": "sknLblFilterUnselected",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0dp",
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxDemobeCheck.add(lblDemobeCheck);
            flxRoasterDemobe.add(CopylblInTransit0b93c8105ddba45, flxDemobeCheck);
            var CopyFlexContainer0c41a019e3aea47 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0c41a019e3aea47",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0c41a019e3aea47.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0c41a019e3aea47.add();
            var flxRoasterAdhoc = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "50dp",
                "id": "flxRoasterAdhoc",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxFFFFFFOp100",
                "top": "0dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxRoasterAdhoc.setDefaultUnit(kony.flex.DP);
            var CopylblInTransit0bf52b9e5401a4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblInTransit0bf52b9e5401a4b",
                "isVisible": true,
                "left": "5%",
                "skin": "sknLBL1201c1c1c",
                "text": "Adhoc",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var flxAdhocPop = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80%",
                "id": "flxAdhocPop",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "reverseLayoutDirection": true,
                "isModalContainer": false,
                "right": "4%",
                "skin": "slFbox",
                "width": "69%",
                "zIndex": 1
            }, {}, {});
            flxAdhocPop.setDefaultUnit(kony.flex.DP);
            var imgAdhoc = new kony.ui.Image2({
                "height": "100%",
                "id": "imgAdhoc",
                "isVisible": true,
                "left": "0",
                "skin": "slImage",
                "src": "down_arrow.png",
                "top": "0dp",
                "width": "20dp",
                "zIndex": 1
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var lblStatus = new kony.ui.Label({
                "centerY": "50%",
                "id": "lblStatus",
                "isVisible": true,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopylblEventActivityNo0dd29c92e1ace4b = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblEventActivityNo0dd29c92e1ace4b",
                "isVisible": false,
                "maxNumberOfLines": 1,
                "right": "5%",
                "skin": "sknLblProjectDescValue",
                "text": "None",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "textTruncatePosition": constants.TEXT_TRUNCATE_END,
                "width": "86%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxAdhocPop.add(imgAdhoc, lblStatus, CopylblEventActivityNo0dd29c92e1ace4b);
            flxRoasterAdhoc.add(CopylblInTransit0bf52b9e5401a4b, flxAdhocPop);
            var CopyFlexContainer0ic7a586643b548 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "1dp",
                "id": "CopyFlexContainer0ic7a586643b548",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0ifda185ae3074c",
                "top": "0",
                "width": "100%"
            }, {}, {});
            CopyFlexContainer0ic7a586643b548.setDefaultUnit(kony.flex.DP);
            CopyFlexContainer0ic7a586643b548.add();
            flxRoasterCon.add(flxRoasterName, CopyFlexContainer0eb49c8aa076648, CopyFlexContainer0d824cb72d19c44, flxRoasterClass, CopyflxSeparatorEnd0fd555cf9c13045, flxRoasterDivision, CopyflxSeparatorEnd0bb78df71586745, flxRoasterRoom, CopyFlexContainer0d9aa0a66555241, flxRoasterPhone, CopyFlexContainer0f0153f41384b42, flxRoasterRaft, CopyFlexContainer0g67fbc23f3d64d, flxRoasterVOC, CopyFlexContainer0e6fc4a56c9eb4a, flxRoasterClientCo, CopyFlexContainer0if244237ae5c42, flxRoasterMobe, CopyFlexContainer0jddac4f7c0ca49, flxRoasterDemobe, CopyFlexContainer0c41a019e3aea47, flxRoasterAdhoc, CopyFlexContainer0ic7a586643b548);
            var flxSaveRoaster = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "8%",
                "id": "flxSaveRoaster",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopysknFlxBg0c10c9229676f46",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            flxSaveRoaster.setDefaultUnit(kony.flex.DP);
            var flxResetRoaster = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxResetRoaster",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxResetRoaster.setDefaultUnit(kony.flex.DP);
            var CopyLabel0cd55e74e8ca349 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0cd55e74e8ca349",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0jd93194fd6e64b = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0jd93194fd6e64b",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Reset",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxResetRoaster.add(CopyLabel0cd55e74e8ca349, CopyLabel0jd93194fd6e64b);
            var flxRoasterSave = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "focusSkin": "CopyslFbox0bccc0791e15c44",
                "height": "100%",
                "id": "flxRoasterSave",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0",
                "width": "50%"
            }, {}, {});
            flxRoasterSave.setDefaultUnit(kony.flex.DP);
            var CopyLabel0e349dc061d8d46 = new kony.ui.Label({
                "centerX": "40%",
                "centerY": "45%",
                "id": "CopyLabel0e349dc061d8d46",
                "isVisible": true,
                "left": "5dp",
                "skin": "CopydefLabel0a62dc76606864c",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CopyLabel0h3a6dd7834124b = new kony.ui.Label({
                "centerY": "45%",
                "id": "CopyLabel0h3a6dd7834124b",
                "isVisible": true,
                "left": "10dp",
                "skin": "CopysknLbl0caab5ae3ee8947",
                "text": "Save",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "width": kony.flex.USE_PREFFERED_SIZE
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxRoasterSave.add(CopyLabel0e349dc061d8d46, CopyLabel0h3a6dd7834124b);
            flxSaveRoaster.add(flxResetRoaster, flxRoasterSave);
            flxRoasterContainer.add(flxRoasterHeader, flxRoasterCon, flxSaveRoaster);
            var eventUOM = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "eventUOM",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "UOM"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 16
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "Value"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var eventStartTime = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "eventStartTime",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "3dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            eventStartTime.bgColor = "";
            eventStartTime.hoursView = false;
            eventStartTime.time = "";
            eventStartTime.invokeByDefault = true;
            var eventEndTime = new com.konymp.timepicker({
                "centerY": "50%",
                "clipBounds": true,
                "height": "100%",
                "id": "eventEndTime",
                "isVisible": false,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0dp",
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "skin": "CopyslFbox0e05a7dd5431f41",
                "top": "0dp",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "timepicker": {
                        "right": "viz.val_cleared",
                        "bottom": "viz.val_cleared",
                        "minWidth": "viz.val_cleared",
                        "minHeight": "viz.val_cleared",
                        "maxWidth": "viz.val_cleared",
                        "maxHeight": "viz.val_cleared",
                        "centerX": "viz.val_cleared"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            eventEndTime.bgColor = "";
            eventEndTime.hoursView = false;
            eventEndTime.time = "";
            eventEndTime.invokeByDefault = true;
            var eventType = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "eventType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "flxFilterContainer": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "bottom": 25,
                        "height": "275dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxTopHeader": {
                        "height": "70dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Events"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 16
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "Value"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var roasterRaft = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "roasterRaft",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "flxFilterContainer": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "bottom": 25,
                        "height": "275dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxTopHeader": {
                        "height": "70dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Raft"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 16
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "None"
                        }, {
                            "lblCheck": "",
                            "lblValue": "Port"
                        }, {
                            "lblCheck": "",
                            "lblValue": "StarBoard"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var roasterStatus = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "roasterStatus",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "flxFilterContainer": {
                        "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "bottom": 25,
                        "height": "275dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxTopHeader": {
                        "height": "70dp"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Status"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 16
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": "Call-Off"
                        }, {
                            "lblCheck": "",
                            "lblValue": "ADHOC"
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var eventActivity = new com.oceaneering.listboxSearch({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "eventActivity",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 16,
                "overrides": {
                    "flxCross": {
                        "isVisible": true
                    },
                    "flxFilterCross": {
                        "isVisible": false
                    },
                    "flxTRC": {
                        "isVisible": true
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "imgSearchIcon": {
                        "isVisible": false,
                        "src": "search_icon.png"
                    },
                    "lblFilters": {
                        "text": "Activity"
                    },
                    "listboxSearch": {
                        "isVisible": false,
                        "zIndex": 16
                    },
                    "segServiceLine": {
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxFAB = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "2%",
                "clipBounds": true,
                "height": "55dp",
                "id": "flxFAB",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": "18dp",
                "skin": "CopysknFlxOp0g76bb52f61c741",
                "width": "55dp",
                "zIndex": 10
            }, {}, {});
            flxFAB.setDefaultUnit(kony.flex.DP);
            var imgAdd = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "100%",
                "id": "imgAdd",
                "isVisible": true,
                "skin": "slImage",
                "src": "addbutton.png",
                "width": "100%",
                "zIndex": 2
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            flxFAB.add(imgAdd);
            var flxReportDateChange = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxReportDateChange",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ea7eeb12b43348",
                "top": "3dp",
                "width": "100%",
                "zIndex": 5
            }, {}, {});
            flxReportDateChange.setDefaultUnit(kony.flex.DP);
            var CopyflxBottomPopUp0g4a48ad1e35443 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "280dp",
                "id": "CopyflxBottomPopUp0g4a48ad1e35443",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0he840d6610a741",
                "width": "94%",
                "zIndex": 50
            }, {}, {});
            CopyflxBottomPopUp0g4a48ad1e35443.setDefaultUnit(kony.flex.DP);
            var CopyflxAddHeader0ec80c11e8bb349 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "65dp",
                "id": "CopyflxAddHeader0ec80c11e8bb349",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0",
                "isModalContainer": false,
                "skin": "CopyslFbox0e48a5b5d86434b",
                "top": -3,
                "width": "100%"
            }, {}, {});
            CopyflxAddHeader0ec80c11e8bb349.setDefaultUnit(kony.flex.DP);
            var CopylblAddProject0g4fb6abff0a546 = new kony.ui.Label({
                "centerY": "50%",
                "id": "CopylblAddProject0g4fb6abff0a546",
                "isVisible": true,
                "left": "6%",
                "skin": "CopysknLblFont0fb789f9e45354c",
                "text": "Report Date",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            CopyflxAddHeader0ec80c11e8bb349.add(CopylblAddProject0g4fb6abff0a546);
            var Label0e7dae52c55064d = new kony.ui.Label({
                "bottom": "5dp",
                "centerX": "50%",
                "id": "Label0e7dae52c55064d",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0f6bac07d4fae48",
                "text": "Note: Changing DPR Report Date will also update all Timesheets on this DPR.",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "10dp",
                "width": "94%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var FlexContainer0e32931b4c34d4b = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "80dp",
                "id": "FlexContainer0e32931b4c34d4b",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            FlexContainer0e32931b4c34d4b.setDefaultUnit(kony.flex.DP);
            var FlexContainer0f83b48ae809b48 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerX": "50%",
                "centerY": "50%",
                "clipBounds": true,
                "height": "55%",
                "id": "FlexContainer0f83b48ae809b48",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "skin": "CopyslFbox0d9ace4a854ac42",
                "top": "0",
                "width": "150dp"
            }, {}, {});
            FlexContainer0f83b48ae809b48.setDefaultUnit(kony.flex.DP);
            var calReportDate = new kony.ui.Calendar({
                "calendarIcon": "calander.png",
                "centerX": "50%",
                "centerY": "50%",
                "dateComponents": [null, null, null],
                "dateFormat": "yyyy/MM/dd",
                "height": "100%",
                "hour": 0,
                "id": "calReportDate",
                "isVisible": true,
                "minutes": 0,
                "placeholder": "----/--/--",
                "seconds": 0,
                "skin": "CopysknCalProjectDetails0ga8a522b971343",
                "viewType": constants.CALENDAR_VIEW_TYPE_DEFAULT,
                "width": "95%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 2, 0],
                "paddingInPixel": false
            }, {});
            FlexContainer0f83b48ae809b48.add(calReportDate);
            FlexContainer0e32931b4c34d4b.add(FlexContainer0f83b48ae809b48);
            var CopyflxEnableTouch0ccfa09980e8249 = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": "0dp",
                "clipBounds": true,
                "height": "55dp",
                "id": "CopyflxEnableTouch0ccfa09980e8249",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "sknFlxBg000000Op0",
                "top": "5dp",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            CopyflxEnableTouch0ccfa09980e8249.setDefaultUnit(kony.flex.DP);
            var btnBottomNot = new kony.ui.Button({
                "focusSkin": "CopysknBtnDB0j8f42dbf94e944",
                "height": "100%",
                "id": "btnBottomNot",
                "isVisible": true,
                "left": "7%",
                "onClick": controller.AS_Button_f41c2c48e2ef468aa94591f12f43f2dc,
                "skin": "CopysknBtnDB0g9e4fa50889643",
                "text": "Cancel",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var btnBottomOK = new kony.ui.Button({
                "focusSkin": "CopysknBtn0h7fb26db69f841",
                "height": "100%",
                "id": "btnBottomOK",
                "isVisible": true,
                "left": "5%",
                "skin": "CopysknBtn0h7fb26db69f841",
                "text": "Yes",
                "top": "0dp",
                "width": "40%",
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "displayText": true,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            CopyflxEnableTouch0ccfa09980e8249.add(btnBottomNot, btnBottomOK);
            CopyflxBottomPopUp0g4a48ad1e35443.add(CopyflxAddHeader0ec80c11e8bb349, Label0e7dae52c55064d, FlexContainer0e32931b4c34d4b, CopyflxEnableTouch0ccfa09980e8249);
            flxReportDateChange.add(CopyflxBottomPopUp0g4a48ad1e35443);
            var category = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "category",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Category"
                    },
                    "listboxData": {
                        "isVisible": false,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 0,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var project = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "project",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Project"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 0,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var activity = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "activity",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Activity"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 10,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var toolsType = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "toolsType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Category"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 10,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var sourceType = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "sourceType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Source Type"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 10,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var subCategory = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "subCategory",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Sub Category"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 10,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var UOMProject = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "UOMProject",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Sub Category"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 10,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var contractSerial = new com.oceaneering.listboxData({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "contractSerial",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Contract Serial"
                    },
                    "listboxData": {
                        "bottom": "0%",
                        "isVisible": false,
                        "right": 0,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": 0,
                        "data": [{
                            "lblCheck": "",
                            "lblValue": ""
                        }]
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var assetType = new com.oceaneering.listboxAssetType({
                "bottom": "0%",
                "clipBounds": true,
                "height": "100%",
                "id": "assetType",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_DEFAULT,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome",
                "width": "100%",
                "zIndex": 15,
                "overrides": {
                    "flxFilterContainer": {
                        "maxHeight": "viz.val_cleared"
                    },
                    "flxSegServiceLine": {
                        "height": "300dp",
                        "maxHeight": "viz.val_cleared"
                    },
                    "imgCrossCountryAdd": {
                        "src": "imgclose.png"
                    },
                    "lblFilters": {
                        "text": "Tools/Charges Type"
                    },
                    "listboxAssetType": {
                        "isVisible": false,
                        "zIndex": 15
                    },
                    "segServiceLine": {
                        "bottom": "0dp"
                    }
                }
            }, {
                "overrides": {}
            }, {
                "overrides": {}
            });
            var flxEditImage = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": 0,
                "clipBounds": true,
                "height": "100%",
                "id": "flxEditImage",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": 0,
                "skin": "sknFlxFilterHome0h0602833944948",
                "width": "100%",
                "zIndex": 15
            }, {}, {});
            flxEditImage.setDefaultUnit(kony.flex.DP);
            var FlexContainerData = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "bottom": -30,
                "clipBounds": true,
                "height": "250dp",
                "id": "FlexContainerData",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_VERTICAL,
                "masterType": constants.MASTER_TYPE_USERWIDGET,
                "isModalContainer": false,
                "right": "0%",
                "skin": "CopyslFbox0be86e92be63e43",
                "width": "100%",
                "zIndex": 20
            }, {}, {});
            FlexContainerData.setDefaultUnit(kony.flex.DP);
            var FlexContainerProfileHeader = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "FlexContainerProfileHeader",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0f8c910a3c02041",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainerProfileHeader.setDefaultUnit(kony.flex.DP);
            var lblProfile = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "lblProfile",
                "isVisible": true,
                "left": "65dp",
                "skin": "sknLblHeaderEditImage0de94f316059748",
                "text": "Upload",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "3dp",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            FlexContainerProfileHeader.add(lblProfile);
            var FlexContainerPhotoDetails = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100dp",
                "id": "FlexContainerPhotoDetails",
                "isVisible": true,
                "layoutType": kony.flex.FLOW_HORIZONTAL,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "slFbox0f8c910a3c02041",
                "top": "0%",
                "width": "100%",
                "zIndex": 1
            }, {}, {});
            FlexContainerPhotoDetails.setDefaultUnit(kony.flex.DP);
            var flxGallary = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxGallary",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox0f8c910a3c02041",
                "width": "28%",
                "zIndex": 1
            }, {}, {});
            flxGallary.setDefaultUnit(kony.flex.DP);
            var lblGallryIcon = new kony.ui.Label({
                "centerX": "50%",
                "height": "40%",
                "id": "lblGallryIcon",
                "isVisible": true,
                "skin": "sknLblImageEdit0e11cd9c85d3841",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": 0,
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblGallary = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "80%",
                "id": "lblGallary",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblCameraImage0cb69c2b232e84b",
                "text": "Gallery",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "62%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            flxGallary.add(lblGallryIcon, lblGallary);
            var flxCamera = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxCamera",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox0f8c910a3c02041",
                "width": "28%",
                "zIndex": 1
            }, {}, {});
            flxCamera.setDefaultUnit(kony.flex.DP);
            var lblCameraIcon = new kony.ui.Label({
                "centerX": "50%",
                "height": "40%",
                "id": "lblCameraIcon",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblImageEdit0e11cd9c85d3841",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblCamera = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "80%",
                "id": "lblCamera",
                "isVisible": true,
                "left": "10dp",
                "skin": "sknLblCameraImage0cb69c2b232e84b",
                "text": "Camera",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "62.98%",
                "width": kony.flex.USE_PREFFERED_SIZE,
                "zIndex": 1
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var CameraImage = new kony.ui.Camera({
                "focusSkin": "slCamera0ac1afee1a43943",
                "height": "100%",
                "id": "CameraImage",
                "isVisible": true,
                "left": "0",
                "skin": "slCamera0ac1afee1a43943",
                "top": "0",
                "width": "100%",
                "zIndex": 2
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
                "enableOverlay": false,
                "enablePhotoCropFeature": false
            });
            flxCamera.add(lblCameraIcon, lblCamera, CameraImage);
            var flxFile = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "centerY": "50%",
                "clipBounds": true,
                "height": "80dp",
                "id": "flxFile",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "left": "4%",
                "isModalContainer": false,
                "skin": "slFbox0f8c910a3c02041",
                "width": "28%",
                "zIndex": 1
            }, {}, {});
            flxFile.setDefaultUnit(kony.flex.DP);
            var lblDelete = new kony.ui.Label({
                "centerX": "50%",
                "height": "40%",
                "id": "lblDelete",
                "isVisible": true,
                "left": "0",
                "skin": "sknLblImageEdit0e11cd9c85d3841",
                "text": "",
                "textStyle": {
                    "letterSpacing": 0,
                    "strikeThrough": false
                },
                "top": "0",
                "width": "40%"
            }, {
                "contentAlignment": constants.CONTENT_ALIGN_CENTER,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {
                "textCopyable": false
            });
            var lblTrash = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "80%",
                "id": "lblTrash",
                "isVisible": true,
                "skin": "sknLblCameraImage0cb69c2b232e84b",
                "text": "Files",
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
            flxFile.add(lblDelete, lblTrash);
            FlexContainerPhotoDetails.add(flxGallary, flxCamera, flxFile);
            var btnCancel = new kony.ui.Button({
                "bottom": "0dp",
                "centerX": "50%",
                "focusSkin": "sknBtnSecondaryECF0f069dc3534344d",
                "height": "60dp",
                "id": "btnCancel",
                "isVisible": true,
                "left": "6%",
                "skin": "sknBtnSecondaryECF0f069dc3534344d",
                "text": "Cancel",
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
            FlexContainerData.add(FlexContainerProfileHeader, FlexContainerPhotoDetails, btnCancel);
            flxEditImage.add(FlexContainerData);
            var flxbrowser = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxbrowser",
                "isVisible": false,
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
                "onClick": controller.AS_FlexContainer_c5aacdc7b0bf444ea9f2e681b4d6dc49,
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
                "detectTelNumber": false,
                "enableZoom": true,
                "height": "93%",
                "id": "pdfBrowser",
                "isVisible": true,
                "left": "0",
                "top": "0dp",
                "width": "100%"
            }, {}, {});
            flxbrowser.add(CopyflxHeaderAssetTools0e047549c0f4641, pdfBrowser);
            var flxGalleryLargerView = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "100%",
                "id": "flxGalleryLargerView",
                "isVisible": false,
                "layoutType": kony.flex.FREE_FORM,
                "left": "0dp",
                "isModalContainer": false,
                "skin": "CopyslFbox0ff985c15095b45",
                "top": "0dp",
                "width": "100%",
                "zIndex": 16
            }, {}, {});
            flxGalleryLargerView.setDefaultUnit(kony.flex.DP);
            var imgShow = new kony.ui.Image2({
                "centerX": "50%",
                "centerY": "50%",
                "height": "330dp",
                "id": "imgShow",
                "imageWhenFailed": "imagedrag.png",
                "imageWhileDownloading": "imagedrag.png",
                "isVisible": true,
                "left": "0",
                "skin": "CopyslImage0f062d19e39b448",
                "src": "imagedrag.png",
                "top": "0",
                "width": "90%"
            }, {
                "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
                "padding": [0, 0, 0, 0],
                "paddingInPixel": false
            }, {});
            var flxCross = new kony.ui.FlexContainer({
                "autogrowMode": kony.flex.AUTOGROW_NONE,
                "clipBounds": true,
                "height": "60dp",
                "id": "flxCross",
                "isVisible": true,
                "layoutType": kony.flex.FREE_FORM,
                "isModalContainer": false,
                "right": 0,
                "skin": "slFbox",
                "top": 0,
                "width": "15%"
            }, {}, {});
            flxCross.setDefaultUnit(kony.flex.DP);
            var Label0f98e82f5dfb341 = new kony.ui.Label({
                "centerX": "50%",
                "centerY": "50%",
                "id": "Label0f98e82f5dfb341",
                "isVisible": true,
                "left": "0",
                "skin": "CopydefLabel0i36f572400df42",
                "text": "",
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
            flxCross.add(Label0f98e82f5dfb341);
            flxGalleryLargerView.add(imgShow, flxCross);
            this.add(flxHeader, flxLoading, flxDPR, flxSuccessStatus, flxOptionCon, flxEventsContainer, flxAssetsTools, flxRoasterContainer, eventUOM, eventStartTime, eventEndTime, eventType, roasterRaft, roasterStatus, eventActivity, flxFAB, flxReportDateChange, category, project, activity, toolsType, sourceType, subCategory, UOMProject, contractSerial, assetType, flxEditImage, flxbrowser, flxGalleryLargerView);
        };
        return [{
            "addWidgets": addWidgetsfrmAddDPR,
            "bounces": false,
            "enableScrolling": false,
            "enabledForIdleTimeout": false,
            "id": "frmAddDPR",
            "layoutType": kony.flex.FREE_FORM,
            "needAppMenu": false,
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