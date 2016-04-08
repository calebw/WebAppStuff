var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Populate is the replacement for Joins in Mongo.
//They do so by referencing other Schemas

var personSchema = Schema({
  _id     : Number,
  name    : String,
  age     : Number,
  stories : [{ type: Schema.Types.ObjectId, ref: 'Story' }] //Array of IDs of Stories
});
var storySchema = Schema({
  _creator : { type: Number, ref: 'Person' }, //ID of a Person
  title    : String,
  fans     : [{ type: Number, ref: 'Person' }] //Array of ID's of People
});
var Story  = mongoose.model('Story', storySchema);
var Person = mongoose.model('Person', personSchema);


//Using Refs
var aaron = new Person({ _id: 0, name: 'Aaron', age: 100 });
aaron.save(function (err) {
  if (err) return handleError(err);
  var story1 = new Story({
    title: "Once upon a timex.",
    _creator: aaron._id    // assign the _id from the person
  });
  story1.save(function (err) { //NOTE We never pushed story1 to Arrons stories array! And it isn't there.
    if (err) return handleError(err);
    // thats it!
  });
});

Story
.findOne({ title: 'Once upon a timex.' })
.populate('_creator') //Populate the Person Object(s) based on the _id given
.exec(function (err, story) {
  if (err) return handleError(err);
  console.log('The creator is %s', story._creator.name);
  // prints "The creator is Aaron"
});


//Queries and Options
Story
.find(...)
.populate({
  path: 'fans', //Get array of People
  match: { age: { $gte: 21 }}, //Over 21
  select: 'name -_id', //Only need to retrieve name and _id
  options: { limit: 5 }
})
.exec()

//See API for more info