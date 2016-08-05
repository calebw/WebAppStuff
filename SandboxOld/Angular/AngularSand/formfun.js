/**
 * Created by Caleb on 10/30/2015.
 */
angular.module('app')
    .directive('uservalid',function($q,$timeout){ //Custom validation. MUST be lowercase!
        return {
            require: 'ngModel',
            link: function(scope,elm,attrs,ctrl){
                var users = ['Caleb','Bob','Jill'];
                //Use $validators when no http request requried
                ctrl.$asyncValidators.uservalid = function(modelVal,viewVal){ //Has same name as directive!
                    if(ctrl.$isEmpty(modelVal)){ //empty is valid
                        return $q.when();
                    }
                    var def = $q.defer();
                    $timeout(function(){ //Mock some request/response delay
                        if(users.indexOf(modelVal)===-1){ //User available
                            def.resolve();
                        } else {
                            def.reject();
                        }
                    },1000);
                    return def.promise;
                };
            }
        };
        //Note it is also possible to modify built in validators if needed
    });