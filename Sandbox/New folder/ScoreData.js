var mysql = require("mysql");
var con = {};

//Open DB
function open(){
	//THIS IS WHERE YOU PUT YOUR MYSQL CREDENTIALS
	con = mysql.createConnection({
	  host: "localhost",
	  user: "root",
	  password: "admin",
	  database: "markupproject"
	});
	con.connect(function(err){
	  if(err){
	    console.log('Error connecting to Db');
	    return;
	  }
	  console.log('Connection established');
	});
}

//Close DB
function close(){
	con.end(function(err){
	  if(err){
	    console.log('Error closing Db');
	    return;
	  }
	  console.log('Connection closed');
	});
}

var ScoreData={
	getScoreTest: function(){
		console.log("In ScoreData");
		return {names: "In ScoreTest!"}},

	getUniqueIDs: function(callback){
		open();
		con.query('SELECT DISTINCT FileName FROM scores',function(err,rows){
		  if(err) {
		  	console.log(err);
		  	//Ha.
		  	callback(err, [{FileName: "Database"},{FileName: "Not"},{FileName: "Connected"}]);
		  	return;
		  }

		  console.log('Data received from Db:\n');
		  //console.log(rows);
		  close();
		  callback(err, rows);
		});
	},

	getScoreFileData: function(scoreFile, callback){
		open();
		con.query("SELECT KeyName, FileName, Score, RunDate FROM scores WHERE FileName='"+scoreFile+"'", function(err, rows){
			if(err) {
			  	console.log(err);
			  	callback(err, []);
			  	return;
			  }

		  console.log('Score Data received from Db:\n');
		  close();
		  callback(err, rows);
		});
	},

	getRangeData: function(dateFrom, dateTo, callback){
		open();
		con.query("SELECT KeyName, FileName, Score, RunDate FROM scores where RunDate > '"+dateFrom+"' AND RunDate <= '"+dateTo+"'", function(err, rows){
			if(err) {
			  	console.log(err);
			  	callback(err, []);
			  	return;
			  }

		  console.log('Range Data received from Db:\n');
		  close();
		  callback(err, rows);
		});
	},

	getMinMaxData: function(callback){
		open();
		con.query('CALL spMinMax()',function(err,rows){
		  if(err) {
		  	console.log(err);
		  	callback(err, []);
		  	return;
		  }

		  console.log('MinMax Data received from Db:\n');
		  close();
		  callback(err, rows[0]);
		});
	},

	getAverageData: function(callback){
		open();
		con.query('CALL spAverage()',function(err,rows){
		  if(err) {
		  	console.log(err);
		  	callback(err, []);
		  	return;
		  }

		  console.log('Average Data received from Db:\n');
		  close();
		  callback(err, rows[0]);
		});
	},

	saveScore: function(score, fileName, scoreName, runDate, callback){
		open();
		con.query("INSERT INTO scores (FileName, KeyName, Score, RunDate) VALUES('"+fileName+"','"+scoreName+"',"+score+",'"+ runDate + "')", function(err){
			if(err) {
			  	console.log(err);
			  	callback(err);
			  	return;
			  }

		  console.log('Score Inserted into Db:\n');
		  close();
		  callback();
		});
	},

	getTagPoints: function(){
		return tagPoints;
	}
};

//CHANGE THIS TO ALTER TAG POINTS
var tagPoints = {
	div: 3,
	p: 1,
	h1: 3,
    h2: 2,
    html: 5,
    body: 5,
    header: 10,
    footer: 10,
    font: -1,
    center: -2,
    big: -2,
    strike: -1,
    tt: -2,
    frameset: -5,
    frame: -5
};

module.exports = ScoreData;