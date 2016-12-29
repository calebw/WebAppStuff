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