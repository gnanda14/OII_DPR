define("com/oceaneering/listboxAssetType/userlistboxAssetTypeController", function() {
    return {};
});
define("com/oceaneering/listboxAssetType/listboxAssetTypeControllerActions", {
    /*
          This is an auto generated file and any modifications to it may result in corruption of the action sequence.
        */
});
define("com/oceaneering/listboxAssetType/listboxAssetTypeController", ["com/oceaneering/listboxAssetType/userlistboxAssetTypeController", "com/oceaneering/listboxAssetType/listboxAssetTypeControllerActions"], function() {
    var controller = require("com/oceaneering/listboxAssetType/userlistboxAssetTypeController");
    var actions = require("com/oceaneering/listboxAssetType/listboxAssetTypeControllerActions");
    for (var key in actions) {
        controller[key] = actions[key];
    }
    return controller;
});
