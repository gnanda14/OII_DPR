define("userflxTempSegDPRHeaderController", {
    firstTouch: true,
    onViewCreated: function() {
        this.applyGestureAndSwipeAnimation();
    },
    getRowIndexValueForDelete: function(obj, context) {
        try {
            var getSelectedRowindex = context.rowIndex;
            this.executeOnParent("onClickOfDeleteCrew", getSelectedRowindex);
        } catch (err) {
            kony.print("Error in getRowIndexValue function - " + JSON.stringify(err));
        }
    },
    getRowIndexValueForEdit: function(obj, context) {
        try {
            var getSelectedRowindex = context.rowIndex;
            this.executeOnParent("onClickOfEditCrew", getSelectedRowindex);
        } catch (err) {
            kony.print("Error in getRowIndexValue function - " + JSON.stringify(err));
        }
    },
    getRowIndexValueForCreateDPR: function(obj, context) {
        try {
            var getSelectedRowindex = context.rowIndex;
            this.executeOnParent("onClickOfCreateDPRFromCrewDetails", getSelectedRowindex);
        } catch (err) {
            kony.print("Error in getRowIndexValue function - " + JSON.stringify(err));
        }
    },
    //-----------------------Swipe Animation-------------------------------
    /**
 * @class       Crew Swipe
 * @type        function
 * @param       None.
 * return       None.
 * desc         register swipe gesture on segCrewDetails in Crew Details section under DPR info 
 				(called in preshow of frmDprInfo)
 */
    applyGestureAndSwipeAnimation: function() {
        try {
            kony.print("--------------------start applyGestureAndSwipeAnimation--------------------");
            if (this.firstTouch) {
                var swipeOnRow = {
                    fingers: 1,
                    swipeDistance: 50,
                    swipeVelocity: 100
                };
                var swipeGesture = this.view.flxDPRCard.setGestureRecognizer(constants.GESTURE_TYPE_SWIPE, swipeOnRow, this.swipeCallback);
                kony.print("--------------------end applyGestureAndSwipeAnimation--------------------");
                this.firstTouch = false;
            }
        } catch (e) {
            kony.print(e);
        }
    },
    /**
 * @class       Crew Swipe
 * @type        function
 * @param       commonWidget,gestureInfo
 * return       None.
 * desc         this function is the success call back for applyGestureAndSwipeAnimation function
 				it calls the swipeanimation function according to the conditions
 */
    swipeCallback: function(commonWidget, gestureInfo) {
        kony.print("--------------------start swipeCallback--------------------");
        var swipedDirection = gestureInfo.swipeDirection;
        if (swipedDirection === 1) {
            this.swipeanimation(commonWidget, "-24");
        } else if (swipedDirection === 2) {
            this.swipeanimation(commonWidget, 0);
        }
        kony.print("--------------------end swipeCallback--------------------");
    },
    /**
     * @class       Crew Swipe
     * @type        function
     * @param       widget on which animation is to be registered, left value to be changed by for the animation
     * return       None.
     * desc         this function is the success call back for applyGestureAndSwipeAnimation function
     */
    swipeanimation: function(widget, leftValue) {
        kony.print("--------------------start swipeanimation--------------------");
        widget.animate(kony.ui.createAnimation({
            "100": {
                "left": leftValue + "%",
                "stepConfig": {
                    "timingFunction": kony.anim.EASE
                }
            }
        }), {
            "delay": 0,
            "iterationCount": 1,
            "fillMode": kony.anim.FILL_MODE_FORWARDS,
            "duration": 0.1
        }, {
            "animationEnd": function() {}
        });
        kony.print("--------------------end swipeanimation--------------------");
    }
});
define("flxTempSegDPRHeaderControllerActions", {
    /* 
    This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
});
define("flxTempSegDPRHeaderController", ["userflxTempSegDPRHeaderController", "flxTempSegDPRHeaderControllerActions"], function() {
    var controller = require("userflxTempSegDPRHeaderController");
    var controllerActions = ["flxTempSegDPRHeaderControllerActions"];
    return kony.visualizer.mixinControllerActions(controller, controllerActions);
});
