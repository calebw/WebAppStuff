var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var someSchema = new Schema({
	name: {first: String, last: String},
	occupation: String,
	age: Number,
	likes: [String]
});

var Person = mongoose.model('Person', someSchema);

// find each person with a last name matching 'Ghost', selecting the `name` and `occupation` fields
Person.findOne({ 'name.last': 'Ghost' }, 'name occupation', function (err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
})
//Different Format:
// find each person with a last name matching 'Ghost'
var query = Person.findOne({ 'name.last': 'Ghost' });
// selecting the `name` and `occupation` fields
query.select('name occupation');
// execute the query at a later time
query.exec(function (err, person) {
  if (err) return handleError(err);
  console.log('%s %s is a %s.', person.name.first, person.name.last, person.occupation);
})


//Chaining:

//With JSON:
Person.
  find({
    occupation: /host/, //includes 'host'
    'name.last': 'Ghost',
    age: { $gt: 17, $lt: 66 }, //greater/less than
    likes: { $in: ['vaporizing', 'talking'] } //contained by likes array
  }).
  limit(10).
  sort({ occupation: -1 }).
  select({ name: 1, occupation: 1 }). //0 would mean exclude
  exec(callback); //Can use stream here as well
  
// With Query Builder
Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation').
  exec(callback);