function AS_TextField_b5934e09e8c2495982214c32d66236ed(eventobject, changedtext) {
    if (this.view.txtCrewSearch.text.length == 0) {
        if (this.view.flxCrewResultShadow.isVisible == true) {
            this.view.flxCrewResultShadow.isVisible = false;
            this.view.flxSearchCrewResults.isVisible = false;
        }
    }
}