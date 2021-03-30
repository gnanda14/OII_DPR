function AS_Image_f907626f1834430d800029f10542038e(eventobject, x, y) {
    if (this.view.txtCrewSearch.text.length > 2) this.getSearchCrewResults(this.view.txtCrewSearch.text);
    else alert("Please enter 3 or more characters to search");
}