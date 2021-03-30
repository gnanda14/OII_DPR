define("flxTempFilters", function() {
    return function(controller) {
        var flxTempFilters = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "45dp",
            "id": "flxTempFilters",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxTempFilters.setDefaultUnit(kony.flex.DP);
        var flxOrgSearchBox = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "2dp",
            "clipBounds": true,
            "height": "97%",
            "id": "flxOrgSearchBox",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": 2,
            "width": "100%"
        }, {}, {});
        flxOrgSearchBox.setDefaultUnit(kony.flex.DP);
        var lblValue = new kony.ui.Label({
            "centerY": "50.00%",
            "id": "lblValue",
            "isVisible": true,
            "left": "10dp",
            "maxNumberOfLines": 2,
            "maxWidth": "80%",
            "skin": "sknlblSmallless100",
            "text": "Value",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "textTruncatePosition": constants.TEXT_TRUNCATE_END,
            "top": "0",
            "width": "80%"
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var flxcheck = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxcheck",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 10,
            "skin": "slFbox",
            "top": "0",
            "width": "40dp"
        }, {}, {});
        flxcheck.setDefaultUnit(kony.flex.DP);
        var flxCheckContainer = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerX": "50%",
            "centerY": "50%",
            "clipBounds": true,
            "height": "23dp",
            "id": "flxCheckContainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0",
            "width": "23dp"
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
        flxcheck.add(flxCheckContainer);
        flxOrgSearchBox.add(lblValue, flxcheck);
        var flxLine = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "1dp",
            "id": "flxLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0aada5cf5e4d441",
            "top": "0",
            "width": "100%"
        }, {}, {});
        flxLine.setDefaultUnit(kony.flex.DP);
        flxLine.add();
        flxTempFilters.add(flxOrgSearchBox, flxLine);
        return flxTempFilters;
    }
})