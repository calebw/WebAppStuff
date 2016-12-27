module.exports = function($http) {
	return {
		getFileNames: getFileNames,
		getTest: getTest
	};

	function getFileNames(){
		return ["fileName1", "fileName2", "fileName3", "fileName4"];
	}

	function getTest(){
		console.log("In getTest");
		return $http.get('/getData').then(success).catch(error);

		function success(res){
			console.log("Success!");
			console.log(res.data);
			return res.data;
		}
		function error(error){
			console.log("Error!");
		}
	}

}