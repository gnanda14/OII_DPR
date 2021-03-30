define("flxTempSegProjects", function() {
    return function(controller) {
        var flxTempSegProjects = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTempSegProjects",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0gbb7056a8dcd46",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTempSegProjects.setDefaultUnit(kony.flex.DP);
        var flxContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": 2,
            "centerX": "50.00%",
            "clipBounds": true,
            "id": "flxContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0b564606804a644",
            "top": 2,
            "width": "98%"
        }, {}, {});
        flxContainer.setDefaultUnit(kony.flex.DP);
        var flxProject = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
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
        var imgProject = new kony.ui.Image2({
            "height": "20dp",
            "id": "imgProject",
            "isVisible": true,
            "left": "10dp",
            "skin": "slImage",
            "src": "projectdetailssel.png",
            "top": 5,
            "width": "20dp"
        }, {
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {});
        var lblProjectId = new kony.ui.Label({
            "bottom": 5,
            "id": "lblProjectId",
            "isVisible": true,
            "left": "7dp",
            "maxNumberOfLines": 2,
            "skin": "CopysknLbl0d689a915bfe545",
            "text": "00087878787",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
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
        var projectManager = new kony.ui.Label({
            "bottom": 5,
            "id": "projectManager",
            "isVisible": true,
            "left": "2%",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl0d689a915bfe545",
            "text": "Project Description",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "7dp",
            "width": "64.21%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxProject.add(imgProject, lblProjectId, projectManager);
        var flxProjectClient = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxProjectClient",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "98%"
        }, {}, {});
        flxProjectClient.setDefaultUnit(kony.flex.DP);
        var clientName = new kony.ui.Label({
            "bottom": 5,
            "id": "clientName",
            "isVisible": true,
            "left": "37dp",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl0g06385bfefb54d",
            "text": "Rooster Petroleum",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "7dp",
            "width": "88%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxProjectClient.add(clientName);
        var flxStartEnd = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxStartEnd",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxStartEnd.setDefaultUnit(kony.flex.DP);
        var flxDates = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 1,
            "clipBounds": true,
            "height": "27dp",
            "id": "flxDates",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_HORIZONTAL,
            "reverseLayoutDirection": false,
            "left": "0%",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 2,
            "width": "67%"
        }, {}, {});
        flxDates.setDefaultUnit(kony.flex.DP);
        var lblStartDate = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblStartDate",
            "isVisible": true,
            "left": "37dp",
            "skin": "CopysknLbl0g06385bfefb54d",
            "text": "2005-06-28",
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
        var lblto = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblto",
            "isVisible": true,
            "left": "2%",
            "skin": "CopysknLbl0eea2bd10db4141",
            "text": "-",
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
        var lblEndDate = new kony.ui.Label({
            "centerY": "50%",
            "id": "lblEndDate",
            "isVisible": true,
            "left": "2%",
            "right": "15dp",
            "skin": "CopysknLbl0g06385bfefb54d",
            "text": "2005-06-28",
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
        flxDates.add(lblStartDate, lblto, lblEndDate);
        var flxTimeSheet = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxTimeSheet",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "slFbox",
            "top": "0",
            "width": "30%",
            "zIndex": 5
        }, {}, {});
        flxTimeSheet.setDefaultUnit(kony.flex.DP);
        var lblAdd = new kony.ui.Label({
            "bottom": "5dp",
            "id": "lblAdd",
            "isVisible": true,
            "left": "0",
            "skin": "CopydefLabel0f7dd8ddc776d4d",
            "text": "Add Timesheet",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [8, 5, 8, 5],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxTimeSheet.add(lblAdd);
        flxStartEnd.add(flxDates, flxTimeSheet);
        flxContainer.add(flxProject, flxProjectClient, flxStartEnd);
        flxTempSegProjects.add(flxContainer);
        return flxTempSegProjects;
    }
})