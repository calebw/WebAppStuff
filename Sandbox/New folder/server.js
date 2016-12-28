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
	console.log("In Get Data");
	ScoreData.getUniqueIDs(function(err, rows){
		console.log("After Get");
		res.send(rows);
	});
});

app.get('/getTagPoints', function(req, res){
	console.log("In Get Tag Points");
	var obj = ScoreData.getTagPoints();
	res.send(obj);
});

app.post('/getScoreFileData', function(req, res){
	console.log("In Score File Data: "+req.body.scoreFile);
	res.send({fake: "fakeData"});
	/*ScoreData.getScoreFileData(res.body.scoreFile, function(err, rows){
		res.send(rows);
	});*/
});

app.post('/getRangeData', function(req, res){
	var dFrom = req.body.dateFrom;
	var dTo = req.body.dateTo;
	console.log("In Range Data- From: "+dFrom+" To: "+dTo);
	/*ScoreData.getRangeData(dFrom, dTo, function(err, rows){
		res.send(rows);
	});*/
});

app.post('/saveScore', function(req, res){
	var score = req.body.score;
	console.log("Score "+score+" file "+req.body.fileName+" name "+req.body.scoreName+" at "+(new Date()).toLocaleDateString());
	res.end(score+"");
});

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});

function toProperDateFormat(date){
	var days = date.getDate();
	
	var dateStr = '';
	dateStr = dateStr.concat();
}