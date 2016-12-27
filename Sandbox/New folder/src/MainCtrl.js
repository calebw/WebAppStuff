module.exports = function($scope, DataFact) {
	//$scope.message = "Ok...";
	$('#scoreSel').select2({data: DataFact.getFileNames()});

	$scope.scoreFileClick = function(){
		console.log("In Score File Click");
	};
	$scope.retrieveClick = function(){
		console.log("In Retrieve Click");
		DataFact.getTest().then(function(data){
			console.log(data.names);
			//$scope.test = data;
		});
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