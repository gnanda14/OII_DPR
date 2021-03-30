define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxSearchIcon **/
    AS_FlexContainer_c75c0375b8a74fb88ea29840ee6b19f5: function AS_FlexContainer_c75c0375b8a74fb88ea29840ee6b19f5(eventobject) {
        var self = this;
        this.onSearchProjects();
    },
    /** onPull defined for segDPRHistory **/
    AS_Segment_b5a2b6e3e9804fc699b56edc8ed7ba8a: function AS_Segment_b5a2b6e3e9804fc699b56edc8ed7ba8a(eventobject) {
        var self = this;
        return self.getDPRHistory.call(this);
    },
    /** onPush defined for segDPRHistory **/
    AS_Segment_jf9b1295227b47239be0574df693caa9: function AS_Segment_jf9b1295227b47239be0574df693caa9(eventobject) {
        var self = this;
        kony.print("");
    },
    /** onClick defined for flxFiltersInner **/
    AS_FlexContainer_a73937d1b23c462fb3b88362fd1e9b4d: function AS_FlexContainer_a73937d1b23c462fb3b88362fd1e9b4d(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    },
    /** onClick defined for flxFilterIcon **/
    AS_FlexContainer_a9b11a486543420dad7fd9e650348ad7: function AS_FlexContainer_a9b11a486543420dad7fd9e650348ad7(eventobject) {
        var self = this;
        this.toggleFilters(this.view.flxFiltersOuter.isVisible);
    }
});