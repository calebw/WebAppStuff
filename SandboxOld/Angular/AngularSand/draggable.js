/**
 * Created by Caleb on 11/2/2015.
 */
angular.module('app')
    .directive('draggable',function($document){ //Makes element draggable
        //Directives are literally functions that run on elements
        return function(scope,element,attr){
            var startX = 0, x=0;
            element.css({
                position: 'relative',
                border: '1px solid red',
                backgroundColor: 'lightgrey',
                cursor: 'pointer',
                display: 'block',
                width: '65px'
            });
            element.on('mousedown',function(event){
                event.preventDefault();
                startX = event.screenX - x;
                $document.on('mousemove',mousemove);
                $document.on('mouseup',mouseup);
            });
            function mousemove(event){
                x = event.screenX - startX;
                element.css({
                    left: x + 'px'
                });
            }
            function mouseup(){
                $document.off('mousemove',mousemove);
                $document.off('mouseup',mouseup);
            }
        };
    });