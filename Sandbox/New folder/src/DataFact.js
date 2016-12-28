module.exports = function($http) {
	return {
		getFileNames: getFileNames,
		getTest: getTest
	};

	function getFileNames(){
		return $http.get('/getFileNames').then(success).catch(error);

		function success(res){
			console.log("Success! FileNames");
			return res.data;
		}
		function error(error){
			console.log("Error!");
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
			console.log("Error!");
		}
	}

}