var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var ScoreData = require('./ScoreData');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(req,res){
	res.sendFile(__dirname+"/index.html");
});

app.get('/getFileNames', function(req,res){
	//console.log("In Get Data");
	ScoreData.getUniqueIDs(function(err, rows){
		//console.log("After Get");
		res.send(rows);
	});
});

app.get('/getTagPoints', function(req, res){
	//console.log("In Get Tag Points");
	var obj = ScoreData.getTagPoints();
	res.send(obj);
});

app.get('/getMinMaxData', function(req,res){
	//console.log("In Get MinMax Data");
	ScoreData.getMinMaxData(function(err, rows){
		if(err){
			res.status(500).send(rows);
		}
		else{
			res.send(rows);
		}
	});
});

app.get('/getAverageData', function(req,res){
	//console.log("In Get Average Data");
	ScoreData.getAverageData(function(err, rows){
		if(err){
			res.status(500).send(rows);
		}
		else{
			res.send(rows);
		}
	});
});

app.post('/getScoreFileData', function(req, res){
	//console.log("In Score File Data: "+req.body.scoreFile);
	//res.send({fake: "fakeData"});
	ScoreData.getScoreFileData(req.body.scoreFile, function(err, rows){
		if(err){
			res.status(500).send(rows);
		}
		else{
			res.send(rows);
		}
	});
});

app.post('/getRangeData', function(req, res){
	var dFrom = toProperDateFormat(new Date(req.body.dateFrom));
	var dTo = new Date(req.body.dateTo);
	dTo.setDate(dTo.getDate()+1);
	dTo = toProperDateFormat(dTo);
	//console.log("In Range Data- From: "+dFrom+" To: "+dTo);
	ScoreData.getRangeData(dFrom, dTo, function(err, rows){
		//console.log(rows);
		if(err){
			res.status(500).send(rows);
		}
		else{
			res.send(rows);
		}
	});
});

app.post('/saveScore', function(req, res){
	var score = req.body.score;
	//console.log("Score "+score+" file "+req.body.fileName+" name "+req.body.scoreName+" at "+toProperDateFormat(new Date(), true));
	ScoreData.saveScore(score, req.body.fileName, req.body.scoreName, toProperDateFormat(new Date(), true), function(err){
		if(err){
			res.status(500).send();
		}
		else{
			res.end();
		}
	});
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});


//Returns string in correct date format for MySQL usage
function toProperDateFormat(date, includeTime){
	var day = date.getDate() > 10 ? date.getDate() : '0'+date.getDate(); 
	var month = date.getMonth()+1;
	var year = date.getFullYear();
	var dateStr = '';
	dateStr = dateStr.concat(year,"-",month,"-",day);
	if(includeTime){
		var hour = date.getHours() > 10 ? date.getHours() : '0'+date.getHours(); 
		var minute = date.getMinutes() > 10 ? date.getMinutes() : '0'+date.getMinutes(); 
		var second = date.getSeconds() > 10 ? date.getSeconds() : '0'+date.getSeconds(); 
		dateStr = dateStr.concat(" ",hour,":",minute,":",second);
	}
	return dateStr;
}