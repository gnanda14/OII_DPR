define("com/oceaneering/listboxData/userlistboxDataController", function() {
    return {};
});
define("com/oceaneering/listboxData/listboxDataControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/oceaneering/listboxData/listboxDataController", ["com/oceaneering/listboxData/userlistboxDataController", "com/oceaneering/listboxData/listboxDataControllerActions"], function() {
    var controller = require("com/oceaneering/listboxData/userlistboxDataController");
    var actions = require("com/oceaneering/listboxData/listboxDataControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
