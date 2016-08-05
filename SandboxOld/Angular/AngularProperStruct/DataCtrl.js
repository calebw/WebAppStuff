/**
 * Created by Caleb on 11/3/2015.
 */

angular.module('app')
    .controller('DataCtrl',DataCtrl);

DataCtrl.$inject = ['dataService'];
function DataCtrl(dataService){
    var self = this;
    self.data = {};

    activate(); //Startup logic here

    function activate(){
        return dataService.getData()
            .then(function(data){
                self.data = data;
                return self.data;
            });
    }
}