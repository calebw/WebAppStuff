/**
 * Created by Caleb on 11/6/2015.
 */
angular.module('app',[])
    .directive('svgTabs',function(){
        return {
            templateUrl: 'svgTabs.html',
            controller: 'svgTabCtrl'
        };
    })
    .directive('basicTabs',function(){
        return {
            templateUrl: 'basicTabs.html',
            controller: 'basicTabCtrl'
        };
    })
    .controller('svgTabCtrl',function(){
        $('#tabs li').on("click",function(){
            var tab_id = $(this).attr('data-tab');

            $('#tabs li').removeClass('active');
            $('#tabContent>div').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
    })
    .controller('basicTabCtrl',function(){
        $('#tabs li').on("click",function(){
            var tab_id = $(this).attr('data-tab');

            $('#tabs li').removeClass('active');
            $('#tabContent>div').removeClass('active');

            $(this).addClass('active');
            $("#"+tab_id).addClass('active');
        });
    });