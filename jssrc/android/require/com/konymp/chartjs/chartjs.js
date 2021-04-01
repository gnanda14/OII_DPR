define(function() {
    return function(controller) {
        var chartjs = new kony.ui.FlexContainer(extendConfig({
            "autogrowMode": kony.flex.AUTOGROW_NONE,
            "clipBounds": true,
            "isMaster": true,
            "height": "100%",
            "id": "chartjs",
            "isVisible": true,
            "layoutType": kony.flex.FREE_FORM,
            "left": "0dp",
            "isModalContainer": false,
            "skin": "slFbox",
            "top": "0dp",
            "width": "100%"
        }, controller.args[0], "chartjs"), extendConfig({}, controller.args[1], "chartjs"), extendConfig({}, controller.args[2], "chartjs"));
        chartjs.setDefaultUnit(kony.flex.DP);
        var brwsr = new kony.ui.Browser(extendConfig({
            "detectTelNumber": true,
            "enableNativeCommunication": true,
            "enableZoom": false,
            "height": "100%",
            "id": "brwsr",
            "isVisible": true,
            "left": "0dp",
            "requestURLConfig": {
                "URL": "charts/charts.html",
                "requestMethod": constants.BROWSER_REQUEST_METHOD_GET
            },
            "top": "0dp",
            "width": "100%",
            "zIndex": 1
        }, controller.args[0], "brwsr"), extendConfig({}, controller.args[1], "brwsr"), extendConfig({}, controller.args[2], "brwsr"));
        chartjs.add(brwsr);
        return chartjs;
    }
})