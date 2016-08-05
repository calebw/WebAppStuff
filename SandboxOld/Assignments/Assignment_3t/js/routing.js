/**
 * Created by Caleb.Whitaker on 8/5/2015.
 */
angular.module("routeApp",["ngRoute"])
    .config(function($routeProvider){
        console.log("In Route");
        $routeProvider
        .when("/search",{
            templateUrl: "search.html",
            controller: "listCtrl"
            })
        .when("/details/:index",{
            templateUrl: "details.html",
            controller: "detailCtrl"
        })
        .otherwise({redirectTo: "/search"});
    })
    .controller("listCtrl",function($scope,$http){
        console.log("In Controller");
        $scope.modeSort="asc";
        $scope.optSort="name";
        $scope.picClick = function(artistName){
            $http.post("/details",{aName:artistName});
        };
        $scope.loadData = function(){
            $http.get("js/data.json").success(function(data){
                $scope.artists = data;
            });
        }();
    })
    .controller("detailCtrl",function($scope,$routeParams,$http){
        console.log($routeParams.index);
        $scope.testT = function(){console.log("Ran");};
        $scope.currentArtist = {};
        $scope.loadData = function(){
            $http.get("js/data.json").success(function(data){
                $scope.artists = data;
                $scope.currentArtist = $scope.artists[$routeParams.index];
                console.log($scope.currentArtist.name);
            });
        }();
        $scope.switchArtist = function(right){ //right = false means go to the left
            var currentIndex = $scope.artists.indexOf($scope.currentArtist);
            if(right){
                if(currentIndex==($scope.artists.length-1)){
                    $scope.currentArtist = $scope.artists[0];
                } else{
                    $scope.currentArtist = $scope.artists[currentIndex+1];
                }
            } else{
                if(currentIndex==0){
                    $scope.currentArtist = $scope.artists[$scope.artists.length-1];
                } else{
                    $scope.currentArtist = $scope.artists[currentIndex-1];
                }
            }
        };
    });