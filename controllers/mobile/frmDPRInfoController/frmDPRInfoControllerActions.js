define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_je3c1da4463d40d6809d536620973afb: function AS_FlexContainer_je3c1da4463d40d6809d536620973afb(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onPull defined for segDPRsHeader **/
    AS_Segment_b4e68a17b74e4616847f69f18fc6d110: function AS_Segment_b4e68a17b74e4616847f69f18fc6d110(eventobject) {
        var self = this;
        this.getDPRs(this.view.lblProjectIdValue.text);
    },
    /** onPush defined for segDPRsHeader **/
    AS_Segment_a297e8fa51854b049464ab3d5d41973d: function AS_Segment_a297e8fa51854b049464ab3d5d41973d(eventobject) {
        var self = this;
        kony.print("");
    },
    /** onClick defined for flxDPRHeaderBack **/
    AS_FlexContainer_ea3b405b3ebe4355a3d8490483ff1a5b: function AS_FlexContainer_ea3b405b3ebe4355a3d8490483ff1a5b(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onClick defined for btnReportCancel **/
    AS_Button_ha0fd4e4cbc04a67981b150e487550c4: function AS_Button_ha0fd4e4cbc04a67981b150e487550c4(eventobject) {
        var self = this;
    },
    /** onClick defined for flxFiltersInner **/
    AS_FlexContainer_c59c1c8686db45ac87ae8d21c5eeebfc: function AS_FlexContainer_c59c1c8686db45ac87ae8d21c5eeebfc(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    },
    /** onClick defined for flxFilterIcon **/
    AS_FlexContainer_d32c484a77e045d681d4c6ec09047e9e: function AS_FlexContainer_d32c484a77e045d681d4c6ec09047e9e(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    },
});