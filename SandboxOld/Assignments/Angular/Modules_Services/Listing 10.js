/**
 * Created by Caleb.Whitaker on 7/27/2015.
 */

angular.module("customServices",[])
.provider("logService", function () {
        return {
            $get: function () {
                return {
                    messageCount: 0,
                    log: function (msg) {
                        console.log("(LOG1 + " + this.messageCount++ + ") " + msg);
                    }
                };
            }
        }
});