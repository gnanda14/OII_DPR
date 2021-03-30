define("com/oceaneering/listboxDPR/userlistboxDPRController", function() {
    return {};
});
define("com/oceaneering/listboxDPR/listboxDPRControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/oceaneering/listboxDPR/listboxDPRController", ["com/oceaneering/listboxDPR/userlistboxDPRController", "com/oceaneering/listboxDPR/listboxDPRControllerActions"], function() {
    var controller = require("com/oceaneering/listboxDPR/userlistboxDPRController");
    var actions = require("com/oceaneering/listboxDPR/listboxDPRControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
