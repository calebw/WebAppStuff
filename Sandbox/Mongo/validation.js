var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  name: {
    type: String,
    required: true
  }
});
var Cat = db.model('Cat', schema);
var cat = new Cat();
cat.save(function(error) {
	//Fails: Path 'name' is required
});


//Built in validation
var breakfastSchema = new Schema({
  eggs: {
    type: Number,
    min: [6, 'Too few eggs'],
    max: 12
  },
  bacon: {
    type: Number,
    required: [true, 'Why no bacon?']
  },
  drink: {
    type: String,
    enum: ['Coffee', 'Tea']
  }
});
var Breakfast = db.model('Breakfast', breakfastSchema);
var badBreakfast = new Breakfast({
  eggs: 2,
  bacon: null,
  drink: 'Milk'
});
var error = badBreakfast.validateSync();
//Error contains: 'Too Few Eggs'  'Why no bacon?'  '`Milk` no valid enum'


//Custom Validation
var userSchema = new Schema({
  phone: {
    type: String,
    validate: {
      validator: function(v) {
        return /\d{3}-\d{3}-\d{4}/.test(v);//Return true for valid phone number
      },
      message: '{VALUE} is not a valid phone number!'
    },
    required: [true, 'User phone number required'] //Also cannot be null
  }
});