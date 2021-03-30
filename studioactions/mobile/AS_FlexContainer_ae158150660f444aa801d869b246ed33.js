function AS_FlexContainer_ae158150660f444aa801d869b246ed33(eventobject) {
    if (this.view.txtCrewSearch.text.length > 2) this.getSearchCrewResults(this.view.txtCrewSearch.text);
    else alert("Please enter 3 or more characters to search");
}