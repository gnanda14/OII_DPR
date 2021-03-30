define(function() {
    return function(controller) {
        var listboxTRC = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "listboxTRC",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "sknFlxFilterHome",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "listboxTRC"), extendConfig({}, controller.args[1], "listboxTRC"), extendConfig({}, controller.args[2], "listboxTRC"));
        listboxTRC.setDefaultUnit(kony.flex.DP);
        var flxFilterContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0dp",
            "clipBounds": true,
            "id": "flxFilterContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": true,
            "maxWidth": "70%",
            "isModalContainer": false,
            "right": "0.00%",
            "skin": "sknFilterContainer",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "flxFilterContainer"), extendConfig({}, controller.args[1], "flxFilterContainer"), extendConfig({}, controller.args[2], "flxFilterContainer"));
        flxFilterContainer.setDefaultUnit(kony.flex.DP);
        var flxSegServiceLine = new kony.ui.FlexScrollContainer(extendConfig({
            "allowHorizontalBounce": false,
            "allowVerticalBounce": true,
            "bottom": "25dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "300dp",
            "horizontalScrollIndicator": true,
            "id": "flxSegServiceLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "pagingEnabled": false,
            "scrollDirection": kony.flex.SCROLL_VERTICAL,
            "skin": "slFSbox",
            "top": "0",
            "verticalScrollIndicator": true,
            "width": "100%"
        }, controller.args[0], "flxSegServiceLine"), extendConfig({}, controller.args[1], "flxSegServiceLine"), extendConfig({}, controller.args[2], "flxSegServiceLine"));
        flxSegServiceLine.setDefaultUnit(kony.flex.DP);
        var segServiceLine = new kony.ui.SegmentedUI2(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "data": [{
                "lblCheck": "",
                "lblValue": ""
            }],
            "groupCells": false,
            "id": "segServiceLine",
            "isVisible": true,
            "left": "0",
            "needPageIndicator": true,
            "pageOffDotImage": "pageoffdot.png",
            "pageOnDotImage": "pageondot.png",
            "retainSelection": false,
            "rowFocusSkin": "seg2Focus",
            "rowSkin": "seg2Normal",
            "rowTemplate": "flxTempFilters",
            "scrollingEvents": {},
            "sectionHeaderSkin": "sliPhoneSegmentHeader",
            "selectionBehavior": constants.SEGUI_DEFAULT_BEHAVIOR,
            "separatorColor": "ffffff00",
            "separatorRequired": true,
            "separatorThickness": 0,
            "showScrollbars": false,
            "top": "0",
            "viewType": constants.SEGUI_VIEW_TYPE_TABLEVIEW,
            "widgetDataMap": {
                "flxCheckContainer": "flxCheckContainer",
                "flxLine": "flxLine",
                "flxOrgSearchBox": "flxOrgSearchBox",
                "flxTempFilters": "flxTempFilters",
                "flxcheck": "flxcheck",
                "lblCheck": "lblCheck",
                "lblValue": "lblValue"
            },
            "width": "100%"
        }, controller.args[0], "segServiceLine"), extendConfig({
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "segServiceLine"), extendConfig({}, controller.args[2], "segServiceLine"));
        flxSegServiceLine.add(segServiceLine);
        var flxSeparator1 = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "blur": {
                "enabled": false,
                "value": 100
            },
            "bottom": 0,
            "centerX": "50%",
            "clipBounds": false,
            "height": "1dp",
            "id": "flxSeparator1",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "sknFlXfilterSeparator",
            "top": 0,
            "width": "100%"
        }, controller.args[0], "flxSeparator1"), extendConfig({}, controller.args[1], "flxSeparator1"), extendConfig({}, controller.args[2], "flxSeparator1"));
        flxSeparator1.setDefaultUnit(kony.flex.DP);
        flxSeparator1.add();
        var flxTopHeader = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "70dp",
            "id": "flxTopHeader",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "CopyslFbox0d8fe2f13e5b44c",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "flxTopHeader"), extendConfig({}, controller.args[1], "flxTopHeader"), extendConfig({}, controller.args[2], "flxTopHeader"));
        flxTopHeader.setDefaultUnit(kony.flex.DP);
        var lblFilters = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFilters",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblFont1C4365",
            "text": "TRC",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "lblFilters"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "lblFilters"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "lblFilters"));
        var flxFilterCross = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxFilterCross",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "CopyslFbox0c28eb3bf53c64e",
            "top": "0dp",
            "width": "60dp"
        }, controller.args[0], "flxFilterCross"), extendConfig({}, controller.args[1], "flxFilterCross"), extendConfig({}, controller.args[2], "flxFilterCross"));
        flxFilterCross.setDefaultUnit(kony.flex.DP);
        var CopylblFilters0c8e55521671045 = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "CopylblFilters0c8e55521671045",
            "isVisible": true,
            "left": "5%",
            "skin": "CopysknLblFont0ia432d03738248",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "CopylblFilters0c8e55521671045"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopylblFilters0c8e55521671045"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopylblFilters0c8e55521671045"));
        flxFilterCross.add(CopylblFilters0c8e55521671045);
        var flxTRC = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxTRC",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "90dp",
            "skin": "CopyslFbox0c28eb3bf53c64e",
            "top": "0dp",
            "width": "60dp"
        }, controller.args[0], "flxTRC"), extendConfig({}, controller.args[1], "flxTRC"), extendConfig({}, controller.args[2], "flxTRC"));
        flxTRC.setDefaultUnit(kony.flex.DP);
        var CopylblFilters0j2bebd7054644f = new kony.ui.Label(extendConfig({
            "centerX": "50%",
            "centerY": "50%",
            "id": "CopylblFilters0j2bebd7054644f",
            "isVisible": true,
            "left": "5%",
            "skin": "CopysknLblFont0ia432d03738248",
            "text": "",
            "textStyle": {
                "letterSpacing": 0,
                "strikeThrough": false
            },
            "top": "0",
            "width": kony.flex.USE_PREFFERED_SIZE
        }, controller.args[0], "CopylblFilters0j2bebd7054644f"), extendConfig({
            "contentAlignment": constants.CONTENT_ALIGN_CENTER,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "CopylblFilters0j2bebd7054644f"), extendConfig({
            "textCopyable": false
        }, controller.args[2], "CopylblFilters0j2bebd7054644f"));
        flxTRC.add(CopylblFilters0j2bebd7054644f);
        flxTopHeader.add(lblFilters, flxFilterCross, flxTRC);
        flxFilterContainer.add(flxSegServiceLine, flxSeparator1, flxTopHeader);
        var flxCoontainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 0,
            "clipBounds": true,
            "height": "25dp",
            "id": "flxCoontainer",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "isModalContainer": false,
            "skin": "CopyslFbox0a3f01af86d2e4f",
            "width": "100%"
        }, controller.args[0], "flxCoontainer"), extendConfig({}, controller.args[1], "flxCoontainer"), extendConfig({}, controller.args[2], "flxCoontainer"));
        flxCoontainer.setDefaultUnit(kony.flex.DP);
        flxCoontainer.add();
        listboxTRC.add(flxFilterContainer, flxCoontainer);
        return listboxTRC;
    }
})