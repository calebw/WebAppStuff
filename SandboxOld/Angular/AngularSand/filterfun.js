/**
 * Created by Caleb on 10/30/2015.
 */
angular.module('app')
    .filter('upperfy',function(){  //Custom filter example
        return function(input,bool){
            if(bool){
                input = input.toUpperCase();
            } else{
                input = input.toLowerCase();
            }
            return input;
        };
    })
    .controller('filterCtrl',function($scope,$filter){
        $scope.sortRev = false;
        $scope.wordList = ['App','Bot','Cat','Dog'];
        $scope.someArr = ['car','varry','shall','bill','apple'];
        //Filtered here rather than in html so it's not constantly reevaluated.
        $scope.someArrFilt = $filter('filter')($scope.someArr,'a');
        $scope.textToUpper = 'texty text text';
        $scope.upperBool = false;
    });