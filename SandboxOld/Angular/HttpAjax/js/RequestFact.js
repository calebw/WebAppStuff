/**
 * Created by Caleb on 11/9/2015.
 */
angular.module('App')
    .factory('RequestFact',RequestFact);

RequestFact.$inject = ['$http','$q'];
function RequestFact($http,$q){
    return {
        getData: getData
    };

    function getData(file){
        return $q(function(res,rej) { //Return a promise
            if (file == '') {
                rej('Null');    //Throw error 'Null' for empty
            } else {
                $http.get(file)
                    .then(getDataSuccess, getDataFail);

                function getDataSuccess(data) {
                    console.log('In Data Success: ' + data);
                    res(data);
                }

                function getDataFail(error) {    //Would happen on undefined or no file found
                    console.log("In fail: " + error);
                    rej('Invalid');
                }
            }
        });
    }
}