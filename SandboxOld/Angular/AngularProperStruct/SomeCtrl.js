/**
 * Created by Caleb on 11/3/2015.
 */

(function() {
    'use strict';
    //Note naming convention (this is my preference not from guide)
    angular.module('app')
        .controller('SomeCtrl', SomeCtrl); //Get function don't define

    SomeCtrl.$inject = ['logger'];  //Always $inject for minification safety
    function SomeCtrl(logger) { //Define here rather than anonymously
        //Use this rather than $scope unless needed
        var self = this; //this could change while executing
        self.data = "Data Here";
        self.moreData = 5;
        self.aFunc = aFunc;
        self.log = log;
        // ^^ Define all bindable vars at top for readability

        function aFunc(){}
        function log(msg){ //Uses LoggerFact
            logger.error(msg);
            logger.info(msg);
            logger.log(msg);
        }
    }
})(); //IIFE Closure. Protects Global Scope and avoids Variable Collision
     //Is also important for minification

//If Ctrl becomes complex, move logic to Service.
//Avoid using Ctrl multiple times for different views.
////If the logic is reusable move it to a Factory.