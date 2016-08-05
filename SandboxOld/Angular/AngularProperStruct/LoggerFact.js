/**
 * Created by Caleb on 11/3/2015.
 */

angular.module('app')
    .factory('logger',logger);

logger.$inject = ['$log'];
function logger($log){
    var pubVal = "pubVal"; //Define public vars at top
    return {               //Then return declarations. Implementation below.
        pubVal : pubVal,
        error : error,
        info : info,
        log : $log.log
    };

    function error(msg){
        $log.error("Error: "+msg);
    }
    function info(msg){
        $log.info("Info: "+msg);
    }
}