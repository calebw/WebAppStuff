/**
 * Created by Caleb on 11/2/2015.
 */
angular.module('app')
    //This is the most verbose way to create a service
    //Here and in most cases it is overkill
    //It can be accessed any the config block and all over the app
    .provider('provTest',function(){
        console.log("In Provider");
        var provVal = null;
        this.setPVal = function(val){
            this.provVal = val;
        };
        this.$get = function(){ //The funcs that can be called go here
            var self = this;
            return {
                getPVal: function(){
                    return self.provVal;
                }
            }
        };
    });