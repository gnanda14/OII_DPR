/* jshint esnext: true */
/**
 * @Description - Contains the functionality of the Create DPR Form
 * @author - Amritpal Singh
 */
define("userfrmBrowserController", {
    /**
     * @desc MVC navigation function
     * @param JSON data - contains the data received from other forms while navigating
     * @retun void
     */
    onNavigate: function(data) {
        try {
            var self = this;
            this.view.flxLoading.setVisibility(true);
            this.view.preShow = this.preShow.bind(this, data);
            this.view.postShow = this.postShow.bind(this, data);
            this.view.flxBrowserback.onClick = this.onClickBackBrowser.bind(this);
        } catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    preShow: function(inp) {
        try {} catch (ex) {
            commonUtils.exception(this, ex);
        }
    },
    postShow: function(data) {
        this.openPDF(data.base64, data.mime);
    },
    openPDF: function(base64String, mime) {
        try {
            let config = {
                "mimeType": "application/pdf"
            };
            if (mime == "pdf") {
                let config = {
                    "mimeType": "application/pdf"
                };
            } else {
                let config = {
                    "mimeType": "application/vnd.ms-word"
                };
            }
            this.view.pdfBrowser.loadData(base64String, config);
            this.view.pdfBrowser.setVisibility(true);
            this.view.flxbrowser.setVisibility(true);
            this.view.flxLoading.setVisibility(false);
        } catch (error) {
            commonUtils.exception(this, error);
        }
    },
    onClickBackBrowser: function() {
        this.view.flxLoading.setVisibility(true);
        commonUtils.navigateTo("frmAddDPR", {
            "comingFromBrowser": true
        });
    }
});
define("frmBrowserControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_d0d00b2287db4058b535fae5ffad4ee7: function AS_FlexContainer_d0d00b2287db4058b535fae5ffad4ee7(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for flxBrowserback **/
    AS_FlexContainer_cb8740b765fe45d08c549d96be247f2f: function AS_FlexContainer_cb8740b765fe45d08c549d96be247f2f(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** postShow defined for frmBrowser **/
    AS_Form_c96496a76d364d24ba36e8eab99222d1: function AS_Form_c96496a76d364d24ba36e8eab99222d1(eventobject) {
        var self = this;
        this.decimalTextBox();
    }
});
define("frmBrowserController", ["userfrmBrowserController", "frmBrowserControllerActions"], function() {
    var controller = require("userfrmBrowserController");
    var controllerActions = ["frmBrowserControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
