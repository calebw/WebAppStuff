module.exports = function($http) {
	return {
		getFileNames: getFileNames
	};

	function getFileNames(){
		return ["fileName1", "fileName2", "fileName3", "fileName4"];
	}

}