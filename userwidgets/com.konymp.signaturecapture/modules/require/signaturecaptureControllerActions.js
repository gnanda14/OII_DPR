define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onTouchStart defined for lblCancel **/
    AS_Label_ee3d0dc15813481b90244691381b13c6: function AS_Label_ee3d0dc15813481b90244691381b13c6(eventobject, x, y) {
        var self = this;
        this.onClickClear();
    },
    /** onCreated defined for natConSignaturePad **/
    AS_NativeContainer_d0a138986d7045328d87299e8b8ba8eb: function AS_NativeContainer_d0a138986d7045328d87299e8b8ba8eb(eventobject) {
        var self = this;
        if (kony.os.deviceInfo().name.toLocaleLowerCase() === "android") {
            this.addSignatureCanvas(eventobject);
        }
    },
    /** onClick defined for btnSave **/
    AS_Button_g1e0000eb4ca482fa04057f8675a048b: function AS_Button_g1e0000eb4ca482fa04057f8675a048b(eventobject) {
        var self = this;
        this.onClickSave();
    },
    /** postShow defined for signaturecapture **/
    AS_FlexContainer_dbc6ea6146184b9480a2aca36911fe41: function AS_FlexContainer_dbc6ea6146184b9480a2aca36911fe41(eventobject) {
        var self = this;
        if (kony.os.deviceInfo().name.toLocaleLowerCase() === "iphone") {
            this.addSignatureCanvas(eventobject);
        }
    }
});