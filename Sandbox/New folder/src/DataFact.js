module.exports = function($http) {
	//Used for retrieving any data from the DB
	return {
		getFileNames: getFileNames,
		getScoreFileData: getScoreFileData,
		getRangeData: getRangeData,
		getTest: getTest
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
			toastr.error(error, "Error! Score File Data");
		}
	}

	function getRangeData(dateFrom, dateTo){
		return $http({
			url: '/getRangeData',
			method: "POST",
			data: {dateFrom: dateFrom.toLocaleDateString(), dateTo: dateTo.toLocaleDateString()}
		}).then(success).catch(error);

		function success(res){
			console.log("Success! Range Data");
			return res.data;
		}
		function error(error){
			toastr.error(error, "Error! Range Data");
		}
	}

	function getTest(){
		console.log("In getTest");
		return $http.get('/getData').then(success).catch(error);

		function success(res){
			console.log("Success!");
			return res;
		}
		function error(error){
			toastr.error(error, "Error! Test");
		}
	}

}