var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({name: String});
schema.pre('save', function(next) { //Runs before every save on schema
  // do stuff
  next(); //Next middleware or done will be called if none
});


//Parallel
//MUST specify true for Parallel
schema.pre('save', true, function(next, done) {
  next(); //Goes to Next while continuing on in this middleware in Parallel
  setTimeout(done, 100);
});


//Query Middleware
schema.pre('find', function() { //Before every find call
  console.log(this instanceof mongoose.Query); // true
  this.start = Date.now();
});

//Use on Functions:
//// init validate save remove
//Queries:
//// count find findOne findOneAndRemove findOneAndUpdate update