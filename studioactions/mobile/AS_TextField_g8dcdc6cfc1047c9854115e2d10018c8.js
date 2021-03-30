function AS_TextField_g8dcdc6cfc1047c9854115e2d10018c8(eventobject, changedtext) {
    if (this.view.txtCrewSearch.text.length > 2) this.getSearchCrewResults(this.view.txtCrewSearch.text);
    else alert("Please enter 3 or more characters to search");
}