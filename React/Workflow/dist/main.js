(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"C:\\Users\\U460624\\WebAppStuff\\React\\Workflow\\app\\hello.js":[function(require,module,exports){
var HelloWorld = React.createClass({displayName: "HelloWorld",
  render: function() {
    return (
      React.createElement("p", null, 
        "Hello, ", React.createElement("input", {type: "text", placeholder: "Your name here"}), "!" + ' ' +
        "It is ", this.props.date.toTimeString()
      )
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    React.createElement(HelloWorld, {date: new Date()}),
    document.getElementById('example')
  );
}, 500);

},{}]},{},["C:\\Users\\U460624\\WebAppStuff\\React\\Workflow\\app\\hello.js"])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJDOlxcVXNlcnNcXFU0NjA2MjRcXFdlYkFwcFN0dWZmXFxSZWFjdFxcV29ya2Zsb3dcXGFwcFxcaGVsbG8uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQSxJQUFJLGdDQUFnQywwQkFBQTtFQUNsQyxNQUFNLEVBQUUsV0FBVztJQUNqQjtNQUNFLG9CQUFBLEdBQUUsRUFBQSxJQUFDLEVBQUE7QUFBQSxRQUFBLFNBQUEsRUFDTSxvQkFBQSxPQUFNLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFDLE1BQUEsRUFBTSxDQUFDLFdBQUEsRUFBVyxDQUFDLGdCQUFnQixDQUFBLENBQUcsQ0FBQSxFQUFBLFdBQUE7QUFBQSxRQUFBLFFBQUEsRUFDbEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFHO01BQ3BDLENBQUE7TUFDSjtHQUNIO0FBQ0gsQ0FBQyxDQUFDLENBQUM7O0FBRUgsV0FBVyxDQUFDLFdBQVc7RUFDckIsUUFBUSxDQUFDLE1BQU07SUFDYixvQkFBQyxVQUFVLEVBQUEsQ0FBQSxDQUFDLElBQUEsRUFBSSxDQUFFLElBQUksSUFBSSxFQUFHLENBQUEsQ0FBRyxDQUFBO0lBQ2hDLFFBQVEsQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDO0dBQ25DLENBQUM7Q0FDSCxFQUFFLEdBQUcsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgSGVsbG9Xb3JsZCA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPHA+XHJcbiAgICAgICAgSGVsbG8sIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lIGhlcmVcIiAvPiFcclxuICAgICAgICBJdCBpcyB7dGhpcy5wcm9wcy5kYXRlLnRvVGltZVN0cmluZygpfVxyXG4gICAgICA8L3A+XHJcbiAgICApO1xyXG4gIH1cclxufSk7XHJcblxyXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuICBSZWFjdERPTS5yZW5kZXIoXHJcbiAgICA8SGVsbG9Xb3JsZCBkYXRlPXtuZXcgRGF0ZSgpfSAvPixcclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdleGFtcGxlJylcclxuICApO1xyXG59LCA1MDApOyJdfQ==
