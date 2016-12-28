var mysql = require("mysql");
var con = {};

function open(){
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
		  	callback(err, [{FileName: "Database"},{FileName: "Not"},{FileName: "Connected"}]);
		  	return;
		  }

		  console.log('Data received from Db:\n');
		  console.log(rows);
		  close();
		  callback(err, rows);
		});
	},

	getScoreFileData: function(scoreFile, callback){
		open();
		con.query('', function(err, rows){
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
		con.query('', function(err, rows){
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

	getTagPoints: function(){
		return tagPoints;
	}
};

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

/*var ScoreData = function(){
	this.getScoreTest = function(){
		console.log("In ScoreData");
		return {names: "In ScoreTest!"};
	};
}*/

module.exports = ScoreData;