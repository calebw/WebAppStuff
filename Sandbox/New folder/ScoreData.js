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
		  if(err) console.log(err);

		  console.log('Data received from Db:\n');
		  console.log(rows);
		  close();
		  callback(err, rows);
		});
	}
};



/*var ScoreData = function(){
	this.getScoreTest = function(){
		console.log("In ScoreData");
		return {names: "In ScoreTest!"};
	};
}*/

module.exports = ScoreData;