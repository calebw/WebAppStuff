/**
 * Created by Caleb on 10/29/2015.
 */
angular.module('changer',[])
    .factory('changeService',['subChangeService',function(subChangeService){
        var internalVal = function(){ //I can only be seen here.
            return subChangeService.intV();
        };
        var randMe = function(txt){ //I will be returned to use by a controller
            return internalVal()+txt+Math.floor(Math.random()*100);
        };
        return { //Returns anything to be used elsewhere
          randMe: randMe
        }
    }])
    .factory('subChangeService',function(){ //To show that factories can take in more services
        var calcIntV = function(){
            return "priv"+Math.floor(Math.random()*10);
        };
        return {
            intV: calcIntV
        }
    });