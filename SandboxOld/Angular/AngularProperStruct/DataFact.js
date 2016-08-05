/**
 * Created by Caleb on 11/3/2015.
 */

angular.module('app')
    .factory('dataService',dataService);
                                    //Template for doing $http requests
dataService.$inject = ['$http'];
function dataService($http){
    return {
        getData : getData
    };

    function getData(){
        return $http.get('someData.txt') //Separate function calls
            .then(getDataSuccess)
            .catch(getDataFail);

        function getDataSuccess(res){
            return res.data;
        }
        function getDataFail(error){
            console.log("In fail: "+error);
        }
    }
}