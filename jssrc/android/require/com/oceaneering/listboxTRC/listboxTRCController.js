define("com/oceaneering/listboxTRC/userlistboxTRCController", function() {
    return {};
});
define("com/oceaneering/listboxTRC/listboxTRCControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/oceaneering/listboxTRC/listboxTRCController", ["com/oceaneering/listboxTRC/userlistboxTRCController", "com/oceaneering/listboxTRC/listboxTRCControllerActions"], function() {
    var controller = require("com/oceaneering/listboxTRC/userlistboxTRCController");
    var actions = require("com/oceaneering/listboxTRC/listboxTRCControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
