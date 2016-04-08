var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var exSchema = new Schema({
	name: String,
	binary: Buffer,
	updated: {type: Date, default: Date.now},
	age: {type: Number, min: 18, max: 30},
	mixed: Schema.Types.Mixed, //Same as passing {} or [] for array
	_someId: Schema.Types.ObjectId,
	array: [String],
	nested: {
		moreText: String
	}
});

var Thing = mongoose.model('Thing',exSchema);

var ex = new Thing;
ex.name = 'Caleb';
ex.binary = new Buffer(0); //Not sure of purpose
ex.updated = new Date;
ex.age = 32; //Will cause validation error
ex.mixed = {can: {be: 'any', thing: [2,3]}}; //An array can also be of Mixed type
ex.markModified('mixed'); //Must use on Mixed and Date(after using func e.g. setMonth) so that it will persist
ex._someId = new mongoose.Types.ObjectId;
ex.array.push['Stuff'];
ex.nested.moreText = 'nest text';


var TankSchema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank',TankSchema);
//Ways to create and save:
var t1 = new Tank({size:'small'});
t1.save(function(err){
	if(err) return console.err(err);
});
//or
Tank.create({size:'small'},function(err, small){
	if(err) return console.err(err);
});
//Ways to Update:
var id = '123';
Tank.findById(id,function(err,tank){
	if(err) return console.err(err);
	tank.size = 'large';
	tank.save(function(err){
		if(err) return console.err(err);
		res.send(tank);
	});
});
//or without doc return
Tank.update({_id: id}, {$set: {size: 'large'}}, callback);
//or (has no validation)
Tank.findByIdAndUpdate(id, {$set: {size:'large'}}, function(err, tank){
	if(err) return console.err(err);
	res.send(tank);
});


//Sub Docs aka Parent - Child
var ChildSchema = new Schema({name: String});
var ParentSchema = new Schema({
	children: [ChildSchema],
	child: ChildSchema
});