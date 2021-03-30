define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for flxBack **/
    AS_FlexContainer_c26f66396c174e1996027f6f7a3db69e: function AS_FlexContainer_c26f66396c174e1996027f6f7a3db69e(eventobject) {
        var self = this;
        this.onClickOfBack();
    },
    /** onDone defined for txtCrewSearch **/
    AS_TextField_i846a022893c4088a4b93a31e2e05637: function AS_TextField_i846a022893c4088a4b93a31e2e05637(eventobject, changedtext) {
        var self = this;
        this.onDoneInSearch();
    },
    /** onDone defined for txtSearchjob **/
    AS_TextField_b9f79743952548a383185fb311bdc574: function AS_TextField_b9f79743952548a383185fb311bdc574(eventobject, changedtext) {
        var self = this;
        this.onDoneInSearch();
    },
    /** onRowClick defined for segJobPosition **/
    AS_Segment_b2e5ab91b5f44aed8d7b44fe1b765ed0: function AS_Segment_b2e5ab91b5f44aed8d7b44fe1b765ed0(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSelectionOfCrew();
    },
    /** onRowClick defined for segCrewSearchResults **/
    AS_Segment_f75d3dff33764b7daf459fb19f3ad2ca: function AS_Segment_f75d3dff33764b7daf459fb19f3ad2ca(eventobject, sectionNumber, rowNumber) {
        var self = this;
        this.onSelectionOfCrew();
    },
    /** onReachingEnd defined for segCrewSearchResults **/
    AS_Segment_af5e01ab40d64d8ea6aa54b4f5ff3918: function AS_Segment_af5e01ab40d64d8ea6aa54b4f5ff3918(eventobject) {
        var self = this;
        return self.getEmployeeSearchEnd.call(this);
    },
    /** postShow defined for frmAddCrew **/
    AS_Form_ge49cec6ee5b41578e19d9ada274821a: function AS_Form_ge49cec6ee5b41578e19d9ada274821a(eventobject) {
        var self = this;
        this.decimalTextBox();
    },
    /** onDeviceBack defined for frmAddCrew **/
    AS_Form_eb344c897c284aa7bfbfc6f65544ce07: function AS_Form_eb344c897c284aa7bfbfc6f65544ce07(eventobject) {
        var self = this;
        this.onClickOfBack();
    }
});