define(function() {
    return function(controller) {
        var listboxAssetType = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "listboxAssetType",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "sknFlxFilterHome",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "listboxAssetType"), extendConfig({}, controller.args[1], "listboxAssetType"), extendConfig({}, controller.args[2], "listboxAssetType"));
        listboxAssetType.setDefaultUnit(kony.flex.DP);
        var flxFilterContainer = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "0%",
            "clipBounds": true,
            "id": "flxFilterContainer",
            "isVisible": true,
            "layoutType": kony.flex.FLOW_VERTICAL,
            "reverseLayoutDirection": true,
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
            "autogrowMode": kony.flex.AUTOGROW_HEIGHT,
            "bottom": "25dp",
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "horizontalScrollIndicator": true,
            "id": "flxSegServiceLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "maxHeight": "300dp",
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
                "lblCheck": "",
                "lblValue": "Value",
                "toolsCharges": "deliverable.png"
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
            "rowTemplate": "flxTempFiltersType",
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
                "flxTempFiltersType": "flxTempFiltersType",
                "flxcheck": "flxcheck",
                "lblCheck": "lblCheck",
                "lblValue": "lblValue",
                "toolsCharges": "toolsCharges"
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
        var flxFilterCross = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "height": "100%",
            "id": "flxFilterCross",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "slFbox",
            "top": "0",
            "width": "40dp"
        }, controller.args[0], "flxFilterCross"), extendConfig({}, controller.args[1], "flxFilterCross"), extendConfig({}, controller.args[2], "flxFilterCross"));
        flxFilterCross.setDefaultUnit(kony.flex.DP);
        var imgCrossCountryAdd = new kony.ui.Image2(extendConfig({
            "centerX": "50.00%",
            "centerY": "50%",
            "height": "100%",
            "id": "imgCrossCountryAdd",
            "isVisible": true,
            "left": "0",
            "skin": "slImage",
            "src": "imgclose.png",
            "top": "0",
            "width": "100%"
        }, controller.args[0], "imgCrossCountryAdd"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgCrossCountryAdd"), extendConfig({}, controller.args[2], "imgCrossCountryAdd"));
        flxFilterCross.add(imgCrossCountryAdd);
        var lblFilters = new kony.ui.Label(extendConfig({
            "centerY": "50%",
            "id": "lblFilters",
            "isVisible": true,
            "left": "5%",
            "skin": "sknLblFont1C4365",
            "text": "Filters",
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
        flxTopHeader.add(flxFilterCross, lblFilters);
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
        listboxAssetType.add(flxFilterContainer, flxCoontainer);
        return listboxAssetType;
    }
})