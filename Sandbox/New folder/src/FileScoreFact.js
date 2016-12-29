module.exports = function($http, $q) {
	//Used for anything to do with scoring a file
	return {
		Initialize: Initialize,
		scoreFile: scoreFile
	};

	//Reference for points given a tag
	var tagPoints = {};
	//The regex used to match tags
	var tagPattern;

	function Initialize(){
		//Retrieve object holding tags and respective points
		return $http.get('/getTagPoints').then(success).catch(error);

		function success(res){
			console.log("Success! TagPoints");
			tagPoints = res.data;
			tagPattern = '';
			//Dynamically create regex pattern based on tags
			$.each(tagPoints, function(key, val){
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
		//console.log(file);
		var def = $q.defer();
		var reader = new FileReader();
		reader.onload = function(){
			var lines = this.result.split('\r\n');
			var score = 0;
			var regEx = new RegExp(tagPattern, 'gi');
			//Calculate Score
			//For each line...
			$.each(lines, function(index, item){
				var matches = item.match(regEx);
				//get each match...
				$.each(matches, function(ndx, match){
					//and sum.
					score += getTagPoint(match);
				});
			});
			//Persist to DB
			saveScore(def, score, file.name.substring(0, file.name.lastIndexOf('.')));
		};
		reader.readAsText(file);
		return def.promise;
	}

	//Get points for a match
	function getTagPoint(match){
		var tag = match.substring(1, match.length-1);
		return tagPoints[tag.toLowerCase()];
	}

	function saveScore(def, score, fileName){
		var scoreName = fileName.substring(0, fileName.indexOf('_'));
		return $http({
			url: '/saveScore',
			method: "POST",
			data: {score: score, fileName: fileName, scoreName: scoreName}
		}).then(success).catch(error);

		function success(res){
			console.log("Success! SaveScore");
			toastr.success("Score: "+res.data,"Score Success");
			def.resolve();
		}
		function error(error){
			console.log(error);
			toastr.error(error.statusText, "Error! SaveScore");
			def.reject();
		}
	}

}