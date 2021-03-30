define(function() {
    return function(controller) {
        var listboxSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": "0%",
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "listboxSearch",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": 0,
            "skin": "sknFlxFilterHome",
            "width": "100%",
            "zIndex": 2
        }, controller.args[0], "listboxSearch"), extendConfig({}, controller.args[1], "listboxSearch"), extendConfig({}, controller.args[2], "listboxSearch"));
        listboxSearch.setDefaultUnit(kony.flex.DP);
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
            "bottom": 25,
            "bounces": true,
            "clipBounds": true,
            "enableScrolling": true,
            "height": "400dp",
            "horizontalScrollIndicator": true,
            "id": "flxSegServiceLine",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0",
            "maxHeight": "400dp",
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
                "lblCheck": "",
                "lblValue": "Prabhjot Singh "
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
        var flxCrewSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "bottom": 5,
            "centerX": "50%",
            "clipBounds": true,
            "height": "50dp",
            "id": "flxCrewSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "sknFlxBorderd1d1d110pxRd",
            "top": "5dp",
            "width": "94%",
            "zIndex": 1
        }, controller.args[0], "flxCrewSearch"), extendConfig({}, controller.args[1], "flxCrewSearch"), extendConfig({}, controller.args[2], "flxCrewSearch"));
        flxCrewSearch.setDefaultUnit(kony.flex.DP);
        var tbxSearch = new kony.ui.TextBox2(extendConfig({
            "autoCapitalize": constants.TEXTBOX_AUTO_CAPITALIZE_NONE,
            "focusSkin": "sknTxtFont107Col333",
            "height": "100%",
            "id": "tbxSearch",
            "isVisible": true,
            "keyBoardStyle": constants.TEXTBOX_KEY_BOARD_STYLE_DEFAULT,
            "left": "0dp",
            "onDone": controller.AS_TextField_g3d1fd7283f342aa9c0bdc6ceb62b269,
            "placeholder": "Search",
            "secureTextEntry": false,
            "skin": "sknTxtFont107Col333",
            "textInputMode": constants.TEXTBOX_INPUT_MODE_ANY,
            "top": "0dp",
            "width": "85%",
            "zIndex": 1
        }, controller.args[0], "tbxSearch"), extendConfig({
            "containerHeightMode": constants.TEXTBOX_FONT_METRICS_DRIVEN_HEIGHT,
            "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
            "padding": [3, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "tbxSearch"), extendConfig({
            "autoFilter": false,
            "keyboardActionLabel": constants.TEXTBOX_KEYBOARD_LABEL_DONE,
            "placeholderSkin": "sknSearchTxtBoxPlaceHolder",
            "viewType": constants.TEXTBOX_VIEW_TYPE_DEFAULT
        }, controller.args[2], "tbxSearch"));
        var flxImgSearch = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "focusSkin": "CopysknFlxFFFFFFOp0b7c214167c0549",
            "height": "100%",
            "id": "flxImgSearch",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "0%",
            "skin": "CopysknFlxFFFFFFOp0h0f5885a2ca44b",
            "width": "15%",
            "zIndex": 2
        }, controller.args[0], "flxImgSearch"), extendConfig({}, controller.args[1], "flxImgSearch"), extendConfig({}, controller.args[2], "flxImgSearch"));
        flxImgSearch.setDefaultUnit(kony.flex.DP);
        var imgSearchIcon = new kony.ui.Image2(extendConfig({
            "centerX": "50%",
            "centerY": "45%",
            "height": "70%",
            "id": "imgSearchIcon",
            "isVisible": true,
            "skin": "slImage",
            "src": "search_icon.png",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "imgSearchIcon"), extendConfig({
            "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
            "padding": [0, 0, 0, 0],
            "paddingInPixel": false
        }, controller.args[1], "imgSearchIcon"), extendConfig({}, controller.args[2], "imgSearchIcon"));
        flxImgSearch.add(imgSearchIcon);
        flxCrewSearch.add(tbxSearch, flxImgSearch);
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
            "text": "Country",
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
        var flxTRC = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxTRC",
            "isVisible": false,
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
        var flxCross = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "centerY": "50%",
            "clipBounds": true,
            "height": "60dp",
            "id": "flxCross",
            "isVisible": false,
            "layoutType": kony.flex.FREE_FORM,
            "isModalContainer": false,
            "right": "15dp",
            "skin": "CopyslFbox0c28eb3bf53c64e",
            "top": "0dp",
            "width": "60dp"
        }, controller.args[0], "flxCross"), extendConfig({}, controller.args[1], "flxCross"), extendConfig({}, controller.args[2], "flxCross"));
        flxCross.setDefaultUnit(kony.flex.DP);
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
        flxCross.add(CopylblFilters0c8e55521671045);
        flxTopHeader.add(flxFilterCross, lblFilters, flxTRC, flxCross);
        flxFilterContainer.add(flxSegServiceLine, flxCrewSearch, flxSeparator1, flxTopHeader);
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
        listboxSearch.add(flxFilterContainer, flxCoontainer);
        return listboxSearch;
    }
})