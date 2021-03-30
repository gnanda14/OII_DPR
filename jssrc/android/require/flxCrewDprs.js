define("flxCrewDprs", function() {
    return function(controller) {
        var flxCrewDprs = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "flxCrewDprs",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCrewDprs.setDefaultUnit(kony.flex.DP);
        var flxOrgSearchBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "2dp",
            "clipBounds": true,
            "id": "flxOrgSearchBox",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 2,
            "width": "100%"
        }, {}, {});
        flxOrgSearchBox.setDefaultUnit(kony.flex.DP);
        var FlexContainer0b32ec8a096394c = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "clipBounds": true,
            "id": "FlexContainer0b32ec8a096394c",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "100%"
        }, {}, {});
        FlexContainer0b32ec8a096394c.setDefaultUnit(kony.flex.DP);
        var lblProject = new kony.ui.Label({
            "bottom": 2,
            "id": "lblProject",
            "isVisible": true,
            "left": "15dp",
            "maxNumberOfLines": 2,
            "skin": "CopydefLabel0i4c87c92c21049",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "2dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblDate = new kony.ui.Label({
            "id": "lblDate",
            "isVisible": true,
            "maxNumberOfLines": 2,
            "right": 15,
            "skin": "CopydefLabel0f26aa80fa65248",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0dp",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        FlexContainer0b32ec8a096394c.add(lblProject, lblDate);
        var lblReportId = new kony.ui.Label({
            "bottom": 5,
            "id": "lblReportId",
            "isVisible": true,
            "left": "15dp",
            "maxNumberOfLines": 1,
            "skin": "CopysknLbl0a5643c0995784b",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": 5,
            "width": kony.flex.USE_PREFFERED_SIZE,
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxOrgSearchBox.add(FlexContainer0b32ec8a096394c, lblReportId);
        var flxLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 2,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0aada5cf5e4d441",
            "width": "100%"
        }, {}, {});
        flxLine.setDefaultUnit(kony.flex.DP);
        flxLine.add();
        flxCrewDprs.add(flxOrgSearchBox, flxLine);
        return flxCrewDprs;
    }
})