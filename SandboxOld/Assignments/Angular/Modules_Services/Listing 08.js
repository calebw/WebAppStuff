/**
 * Created by Caleb.Whitaker on 7/27/2015.
 */
angular.module("customDirectives",["customServices"])
    .directive("triButton", function (logService) {
        return {
            scope: { counter: "=counter" },
            link: function (scope, element, attrs) {
                element.on("click", function (event) {
                    logService.log("Button click: " + event.target.innerText);
                    scope.$apply(function () {
                        scope.counter++;
                    });
                });
            }
        }
    });