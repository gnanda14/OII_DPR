define({
    AS_AppEvents_f8936f7d80214af69e74bc5e204b8557: function AS_AppEvents_f8936f7d80214af69e74bc5e204b8557(eventobject) {
        var self = this;
        var videoDuration = 7;
        var baseTimeInSeconds = new Date().getTime() / 1000;
        var currentTimeInSeconds = baseTimeInSeconds;
        while (currentTimeInSeconds - baseTimeInSeconds < videoDuration) {
            currentTimeInSeconds = new Date().getTime() / 1000;
        }
    }
});