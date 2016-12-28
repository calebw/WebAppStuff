module.exports = function($scope, DataFact, FileScoreFact) {

	$scope.init = function(){
		toastr.options.positionClass = "toast-bottom-right";

		FileScoreFact.Initialize();
		$('#dateFrom').datepicker({autoclose: true});
		$('#dateTo').datepicker({autoclose: true});
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
		var file = $('#filePicker')[0].files[0];
		if(file) FileScoreFact.scoreFile(file)
	};
	$scope.retrieveClick = function(){
		console.log("In Retrieve Click");
		var scoreFile = $('#scoreSel').val();
		if(scoreFile) DataFact.getScoreFileData(scoreFile).then(function(rows){
			//ToDo
			console.log(rows.fake);
		});
	};
	$scope.retrieveRangeClick = function(){
		console.log("In Retrieve Range Click");
		//$('#dateFrom').datepicker('getDate').toLocaleDateString()
		var dFrom = $('#dateFrom').datepicker('getDate');
		var dTo = $('#dateTo').datepicker('getDate');
		if(dFrom && dTo) DataFact.getRangeData(dFrom, dTo).then(function(rows){
			//ToDo
		});
	};
	$scope.minMaxClick = function(){
		console.log("In Min Max Click");
	};
	$scope.averageClick = function(){
		console.log("In Average Click");
	};
}