/**
 * Created by Caleb on 11/9/2015.
 */
angular.module('App')
    .controller('MainCtrl',MainCtrl);

MainCtrl.$inject = ['RequestFact','$scope'];
function MainCtrl(requestFact,$scope){
    $scope.data = {};
    $scope.fileName = 'test.txt';
    $scope.load = load;

    function load(file){
        console.log('In load: '+file);
        return requestFact.getData(file)
            .then(function(data){
                $scope.data = data;
                return $scope.data;
            },function(err){         //Error function
                console.log("In Error: "+err);
            });
    }
}