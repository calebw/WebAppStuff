"use strict";

require('angular');
require('jquery');

var MainCtrl = require('./MainCtrl');
var DataFact = require('./DataFact');

var app = angular.module('app', []);

app.factory('DataFact', ['$http', DataFact]);
app.controller('MainCtrl', ['$scope', 'DataFact', MainCtrl]);

/*var $ = require('jquery');

$(document).ready(function(){
	$('#here').html("Here?");
});*/