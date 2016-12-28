module.exports = function($http) {
	//Used for anything to do with scoring a file
	return {
		Initialize: Initialize,
		scoreFile: scoreFile
	};

	var tagPoints = {};
	var tagPattern;

	function Initialize(){
		return $http.get('/getTagPoints').then(success).catch(error);

		function success(res){
			console.log("Success! TagPoints");
			tagPoints = res.data;
			tagPattern = '';
			$.each(tagPoints, function(key, val){
				//console.log("<"+ key+ "[>|\s]|");
				tagPattern = tagPattern.concat("<", key, "[>|\\s]|");
			});
			//Cut off trailing |
			tagPattern = tagPattern.slice(0,-1);
			//console.log(tagPattern);
		}
		function error(error){
			toastr.error(error, "Error! TagPoints");
		}
	}

	function scoreFile(file){
		console.log(file);
		var reader = new FileReader();
		reader.onload = function(){
			var lines = this.result.split('\r\n');
			var score = 0;
			var regEx = new RegExp(tagPattern, 'gi');
			console.log(lines);
			$.each(lines, function(index, item){
				var matches = item.match(regEx);
				$.each(matches, function(ndx, match){
					score += getTagPoint(match);
				});
			});
			saveScore(score, file.name.substring(0, file.name.lastIndexOf('.')));
		};
		if(file.name.substring(file.name.lastIndexOf('.')+1) != 'html'){
			alert("This isn't an html file");
		} else if(file.name.indexOf('_') == -1){
			alert("Invalid File Name");
		} else{
			reader.readAsText(file);
		}
	}

	//Get points for a match
	function getTagPoint(match){
		var tag = match.substring(1, match.length-1);
		return tagPoints[tag];
	}

	function saveScore(score, fileName){
		var scoreName = fileName.substring(0, fileName.indexOf('_'));
		return $http({
			url: '/saveScore',
			method: "POST",
			data: {score: score, fileName: fileName, scoreName: scoreName}
		}).then(success).catch(error);

		function success(res){
			console.log("Success! SaveScore");
			toastr.success("Score: "+res.data,"Score Success");
			//alert("Score Saved: "+res.data);
		}
		function error(error){
			toastr.error(error, "Error! SaveScore");
		}
	}

}