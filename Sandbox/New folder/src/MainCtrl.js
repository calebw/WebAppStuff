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