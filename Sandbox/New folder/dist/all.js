(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports = function($http) {
	//Used for retrieving any data from the DB
	return {
		getFileNames: getFileNames,
		getScoreFileData: getScoreFileData,
		getRangeData: getRangeData,
		getMinMaxData: getMinMaxData,
		getAverageData: getAverageData
	};

	//Returns score file names for dropdown
	function getFileNames(){
		return $http.get('/getFileNames').then(success).catch(error);

		function success(res){
			console.log("Success! FileNames");
			return res.data;
		}
		function error(error){
			toastr.error(error, "Error! FileNames");
		}
	}

	//Returns score records for a particular score file
	function getScoreFileData(scoreFile){
		return $http({
			url: '/getScoreFileData',
			method: "POST",
			data: {scoreFile: scoreFile}
		}).then(success).catch(error);

		function success(res){
			console.log("Success! Score File Data");
			return res.data;
		}
		function error(error){
			toastr.error(error.statusText, "Error! Score File Data");
			return error.data;
		}
	}

	//Returns scores for a specified date range
	function getRangeData(dateFrom, dateTo){
		return $http({
			url: '/getRangeData',
			method: "POST",
			data: {dateFrom: dateFrom, dateTo: dateTo}
		}).then(success).catch(error);

		function success(res){
			console.log("Success! Range Data");
			return res.data;
		}
		function error(error){
			toastr.error(error.statusText, "Error! Range Data");
			return error.data;
		}
	}

	//Returns the Min and Max scores
	function getMinMaxData(){
		return $http.get('/getMinMaxData').then(success).catch(error);

		function success(res){
			console.log("Success! MinMaxData");
			return res.data;
		}
		function error(error){
			toastr.error(error.statusText, "Error! MinMaxData");
			return error.data;
		}
	}

	//Returns Average of all score types
	function getAverageData(){
		return $http.get('/getAverageData').then(success).catch(error);

		function success(res){
			console.log("Success! AverageData");
			return res.data;
		}
		function error(error){
			toastr.error(error.statusText, "Error! AverageData");
			return error.data;
		}
	}

}
},{}],2:[function(require,module,exports){
module.exports = function($http, $q) {
	//Used for anything to do with scoring a file
	return {
		Initialize: Initialize,
		scoreFile: scoreFile
	};

	//Reference for points given a tag
	var tagPoints = {};
	//The regex used to match tags
	var tagPattern;

	function Initialize(){
		//Retrieve object holding tags and respective points
		return $http.get('/getTagPoints').then(success).catch(error);

		function success(res){
			console.log("Success! TagPoints");
			tagPoints = res.data;
			tagPattern = '';
			//Dynamically create regex pattern based on tags
			$.each(tagPoints, function(key, val){
				tagPattern = tagPattern.concat("<", key, "[>|\\s]|");
			});
			//Cut off trailing |
			tagPattern = tagPattern.slice(0,-1);
			//console.log(tagPattern);
		}
		function error(error){
			toastr.error(error, "Error! TagPoints");
		}
	}

	function scoreFile(file){
		//console.log(file);
		var def = $q.defer();
		var reader = new FileReader();
		reader.onload = function(){
			var lines = this.result.split('\r\n');
			var score = 0;
			var regEx = new RegExp(tagPattern, 'gi');
			//Calculate Score
			//For each line...
			$.each(lines, function(index, item){
				var matches = item.match(regEx);
				//get each match...
				$.each(matches, function(ndx, match){
					//and sum.
					score += getTagPoint(match);
				});
			});
			//Persist to DB
			saveScore(def, score, file.name.substring(0, file.name.lastIndexOf('.')));
		};
		reader.readAsText(file);
		return def.promise;
	}

	//Get points for a match
	function getTagPoint(match){
		var tag = match.substring(1, match.length-1);
		return tagPoints[tag.toLowerCase()];
	}

	function saveScore(def, score, fileName){
		var scoreName = fileName.substring(0, fileName.indexOf('_'));
		return $http({
			url: '/saveScore',
			method: "POST",
			data: {score: score, fileName: fileName, scoreName: scoreName}
		}).then(success).catch(error);

		function success(res){
			console.log("Success! SaveScore");
			toastr.success("Score: "+score,"Score Success: "+fileName);
			def.resolve();
		}
		function error(error){
			console.log(error);
			toastr.error(error.statusText, "Error! SaveScore: "+fileName);
			def.reject();
		}
	}

}
},{}],3:[function(require,module,exports){
module.exports = function($scope, DataFact, FileScoreFact) {

	$scope.gridOptions = {};

	$scope.init = function(){
		toastr.options.positionClass = "toast-bottom-right";
		FileScoreFact.Initialize();
		$('#dateFrom').datepicker({autoclose: true});
		$('#dateTo').datepicker({autoclose: true});
		refreshFileNameCombo();
	};

	//Populate drop down of file names
	function refreshFileNameCombo(){
		console.log("In Refresh FileNames");
		DataFact.getFileNames().then(function(data){
			var namesArr = [];
			$.each(data, function(index, item) {
			    namesArr.push(item.FileName);
			});
			$('#scoreSel').select2({data: namesArr});
		});
	};

	//Refresh the data grid with new data
	function refreshGridOpts(rows){
		var cols = [];
		//Must supply column names.
		$.each(rows[0], function(key, val){
			cols.push({field: key});
		});
		//console.log(cols);
		$scope.gridOptions = {
			enableSorting: true,
			columnDefs: cols,
			data: rows
		};
	};

	$scope.scoreFileClick = function(){
		console.log("In Score File Click");
		//Get score file
		$.each($('#filePicker')[0].files, function(ndx, file){
			//Check that it's html
			if(file.name.substring(file.name.lastIndexOf('.')+1) != 'html'){
				alert("This isn't an html file: "+file.name);
				return;
			//Check that it's name is properly formatted
			} else if(file.name.indexOf('_') == -1){
				alert("Invalid File Name: "+file.name);
				return;
			}
			if(file) FileScoreFact.scoreFile(file).then(function(){
				//Refresh drop down since new name may be added
				refreshFileNameCombo();
			});
		});
	};
	$scope.retrieveClick = function(){
		console.log("In Retrieve Click");
		var scoreFile = $('#scoreSel').val();
		if(scoreFile) DataFact.getScoreFileData(scoreFile).then(function(rows){
			refreshGridOpts(rows);
		});
	};
	$scope.retrieveRangeClick = function(){
		console.log("In Retrieve Range Click");
		var dFrom = $('#dateFrom').datepicker('getDate');
		var dTo = $('#dateTo').datepicker('getDate');
		if(dFrom && dTo) DataFact.getRangeData(dFrom, dTo).then(function(rows){
			refreshGridOpts(rows)
		});
	};
	$scope.minMaxClick = function(){
		console.log("In Min Max Click");
		DataFact.getMinMaxData().then(function(rows){
			//console.log(rows);
			refreshGridOpts(rows)
		});
	};
	$scope.averageClick = function(){
		console.log("In Average Click");
		DataFact.getAverageData().then(function(rows){
			//console.log(rows);
			refreshGridOpts(rows)
		});
	};
}
},{}],4:[function(require,module,exports){
"use strict";

var MainCtrl = require('./MainCtrl');
var DataFact = require('./DataFact');
var FileScoreFact = require('./FileScoreFact');

var app = angular.module('app', ['ui.grid']);

app.factory('DataFact', ['$http', DataFact]);
app.factory('FileScoreFact', ['$http', '$q', FileScoreFact]);
app.controller('MainCtrl', ['$scope', 'DataFact', 'FileScoreFact', MainCtrl]);
},{"./DataFact":1,"./FileScoreFact":2,"./MainCtrl":3}]},{},[4]);
