module.exports = function($scope, DataFact) {
	//$scope.message = "Ok...";
	$('#scoreSel').select2({data: DataFact.getFileNames()});
}