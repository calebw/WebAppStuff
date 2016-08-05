angular.module("exampleApp", ["ngResource", "ngRoute"])
.constant("baseUrl", "http://localhost:8080/Ajax/rest/products")
.config(function ($routeProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider.when("/Angular/list", {
        templateUrl: "/Angular/Listing 09.html"
    });

    $routeProvider.when("/Angular/edit/:id", {
        templateUrl: "/Angular/editorView.html"
    });

    $routeProvider.when("/Angular/edit/:id/:data*", {
        templateUrl: "/Angular/editorView.html"
    });


    $routeProvider.when("/Angular/create", {
        templateUrl: "/Angular/editorView.html"
    });

    $routeProvider.otherwise({
        templateUrl: "/Angular/Listing 09.html"
    });

})
.controller("defaultCtrl", function ($scope, $http, $resource, $location, 
    $route, $routeParams, baseUrl) {

    $scope.currentProduct = null;

    $scope.$on("$routeChangeSuccess", function () {

        console.log("Current Location Url is: "+ $location.path() );
        console.log("Matched Template Url is: "+ $route.current.templateUrl );

        if ($location.path().indexOf("/edit/") > 0) {
            console.log("inside handler");
            var id = $routeParams["id"];
            console.log("id is "+ id);
            for (var i = 0; i < $scope.products.length; i++) {
                if ($scope.products[i].id == id) {
                    $scope.currentProduct = $scope.products[i];
                    break;
                }
            }
           // if($scope.currentProduct)
           // console.log($scope.currentProduct.id);
        }



    });

    $scope.productsResource = $resource(baseUrl + "/:id", { id: "@id" },
            { create: { method: "POST" }, save: { method: "PUT" } });

    $scope.listProducts = function () {
        $scope.products = $scope.productsResource.query();
    }

    $scope.deleteProduct = function (product) {
        product.$delete().then(function () {
            $scope.products.splice($scope.products.indexOf(product), 1);
        });

        $location.path("/Angular/list");
    }

    $scope.createProduct = function (product) {
        new $scope.productsResource(product).$create().then(function (newProduct) {
            $scope.products.push(newProduct);
            $location.path("/Angular/list");
        });
    }

    $scope.updateProduct = function (product) {
        product.$save();
        $location.path("/Angular/list");
    }

    $scope.saveEdit = function (product) {
        if (angular.isDefined(product.id)) {
            $scope.updateProduct(product);
        } else {
            $scope.createProduct(product);
        }
        $scope.currentProduct = {};
    }

    $scope.cancelEdit = function () {
        if ($scope.currentProduct && $scope.currentProduct.$get) {
            $scope.currentProduct.$get();
        }
        $scope.currentProduct = {};
        $location.path("/Angular/list");
    }

    $scope.listProducts();
});
