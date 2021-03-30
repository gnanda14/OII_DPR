define("flxCrewSearchResults", function() {
    return function(controller) {
        var flxCrewSearchResults = new kony.ui.FlexContainer({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "24%",
            "id": "flxCrewSearchResults",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, {}, {});
        flxCrewSearchResults.setDefaultUnit(kony.flex.DP);
        var lblCrewName = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCrewName",
            "isVisible": true,
            "left": "3%",
            "skin": "sknLblSize1007099b1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "50%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [1, 0, 0, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        var lblCrewEmployeeId = new kony.ui.Label({
            "centerY": "50%",
            "height": "100%",
            "id": "lblCrewEmployeeId",
            "isVisible": true,
            "right": "3%",
            "skin": "sknLblSize1007099b1",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "width": "30%",
            "zIndex": 1
        }, {
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_RIGHT,
            "padding": [0, 0, 1, 0],
            "paddingInPixel": false
        }, {
            "textCopyable": false
        });
        flxCrewSearchResults.add(lblCrewName, lblCrewEmployeeId);
        return flxCrewSearchResults;
    }
})