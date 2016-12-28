"use strict";

require('angular');
require('toastr');

var MainCtrl = require('./MainCtrl');
var DataFact = require('./DataFact');
var FileScoreFact = require('./FileScoreFact');

var app = angular.module('app', []);

app.factory('DataFact', ['$http', DataFact]);
app.factory('FileScoreFact', ['$http', FileScoreFact]);
app.controller('MainCtrl', ['$scope', 'DataFact', 'FileScoreFact', MainCtrl]);

/*var $ = require('jquery');

$(document).ready(function(){
	$('#here').html("Here?");
});*/