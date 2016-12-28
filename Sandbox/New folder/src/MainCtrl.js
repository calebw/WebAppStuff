module.exports = function($scope, DataFact) {

	$scope.init = function(){
		$('#dateFrom').datepicker();
		$('#dateTo').datepicker();
		refreshFileNameCombo();
	};

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

	$scope.scoreFileClick = function(){
		console.log("In Score File Click");
		document.getElementById("filePicker").click();
	};
	$scope.retrieveClick = function(){
		console.log($scope.fileNames);
		console.log("In Retrieve Click");
	};
	$scope.retrieveRangeClick = function(){
		console.log("In Retrieve Range Click");
	};
	$scope.minMaxClick = function(){
		console.log("In Min Max Click");
	};
	$scope.averageClick = function(){
		console.log("In Average Click");
	};
}