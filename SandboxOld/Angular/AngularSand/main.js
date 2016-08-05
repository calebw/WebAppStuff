/**
 * Created by Caleb on 10/29/2015.
 */
angular.module('app',['ngAnimate','changer'])
    .config(function(provTestProvider){
        //Runs first but after any other config blocks in dependencies
        //Have many as you want
        //Use $provide and $...Provider here
        console.log("In config");
        provTestProvider.setPVal('Provide Test'); //Can be accessed anywhere by provTest
    })
    .run(function(provTest){
        //Initial code, like main block
        //Can have as many as you want
        console.log("In run");
        console.log(provTest.getPVal());
    })
    //Both of the following must be injected to be used. They're like globals
    .constant('primInt',5)//For primitives. Is also available in config
    .value('name','canBeService')//Can be a service. But NO dependencies like factories
    .directive('injHere',function(){ //Create <inj-here> tag
        return {
            templateUrl: 'direct.html'
        }
    })
    .directive('injFilterfun',function(){
        return {
            templateUrl: 'filterfun.html'
        }
    })
    .directive('injFormfun',function(){
        return {
            templateUrl: 'formfun.html'
        }
    })
    .directive('injAnimfun',function(){
        return {
            templateUrl: 'animfun.html'
        }
    })
    //Can also do:
    //('mainCtrl',['$scope','changeService',function($scope,changeService){...]
    //Best way^^
    //Why NOT use implicit dependency injection like below?
    //IF you minify the code it WILL BREAK!!
    .controller('mainCtrl',function($scope,changeService){ //changeService is in factory
        $scope.randTextOrig = 'rand';
        $scope.randText = 'randme';
        $scope.change = function(){
            $scope.randText = changeService.randMe($scope.randTextOrig); //Uses service
        };
    })
    .controller('formCtrl',function($scope){
        $scope.data = {};
    });