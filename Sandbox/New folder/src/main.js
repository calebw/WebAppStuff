"use strict";

var MainCtrl = require('./MainCtrl');
var DataFact = require('./DataFact');
var FileScoreFact = require('./FileScoreFact');

var app = angular.module('app', ['ui.grid']);

app.factory('DataFact', ['$http', DataFact]);
app.factory('FileScoreFact', ['$http', '$q', FileScoreFact]);
app.controller('MainCtrl', ['$scope', 'DataFact', 'FileScoreFact', MainCtrl]);