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

app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function(){
	console.log('Server started: http://localhost:' + app.get('port') + '/');
});