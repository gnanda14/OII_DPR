function AS_Image_g3a5354ea48c4e81b87650767b907cac(eventobject, x, y) {
    if (this.view.txtCrewSearch.text.length > 2) this.getSearchCrewResults(this.view.txtCrewSearch.text);
    else alert("Please enter 3 or more characters to search");
}