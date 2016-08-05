/**
 * Created by Caleb on 10/21/2015.
 */

var App = angular.module("App",[]);
App.controller("populateCtrl",function($scope){
    $scope.cubeMap = {};
    $scope.popMap = function(){
        var ids = ['top','bottom','left','back','right','front'];
        var colors = ['red','yellow','blue','green','orange','white'];
        var rows = ["A","B","C"];
        for(id in ids){
            $scope.cubeMap[ids[id]] = {};
            for(row in rows){
                $scope.cubeMap[ids[id]][rows[row]] = {};
                for(i=1;i<4;i++){
                    $scope.cubeMap[ids[id]][rows[row]][i] = colors[id];
                }
            }
        }
    }();
    console.log($scope.cubeMap);
});