define("com/oceaneering/listboxSearch/userlistboxSearchController", function() {
    return {};
});
define("com/oceaneering/listboxSearch/listboxSearchControllerActions", {
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onDone defined for tbxSearch **/
    AS_TextField_g3d1fd7283f342aa9c0bdc6ceb62b269: function AS_TextField_g3d1fd7283f342aa9c0bdc6ceb62b269(eventobject, changedtext) {
        var self = this;
        this.onDoneInSearch();
    }
});
define("com/oceaneering/listboxSearch/listboxSearchController", ["com/oceaneering/listboxSearch/userlistboxSearchController", "com/oceaneering/listboxSearch/listboxSearchControllerActions"], function() {
    var controller = require("com/oceaneering/listboxSearch/userlistboxSearchController");
    var actions = require("com/oceaneering/listboxSearch/listboxSearchControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
