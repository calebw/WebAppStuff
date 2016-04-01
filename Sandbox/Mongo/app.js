var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){
	var BudgetEntrySchema = new Schema({
		name: String,
		type: String,
		cost: Number,
		mixed: Schema.Types.Mixed
	});

	BudgetEntrySchema.methods.getCost = function(cb){
		console.log("In logCost. name: "+this.name);
		return this.model('BudgetEntry').findOne({name: this.name},{cost: 1},cb);
	};

	//NOTES: You can apply 'indexing' to Schema records that are frequently used.
	////Also turn off autoIndex in Prod
	////Use virtual methods ona Schema if you don't want them persisted to the DB.
	////Pass "collection: String" option if you want to set the name, without pluralization. 
	////Get created/updatedAt fields using timestamp option
	////Must use markModified for Dates and Mixed types

	var BudgetEntry = mongoose.model('BudgetEntry',BudgetEntrySchema);

	var rent = new BudgetEntry({
		name: 'Rent',
		type: 'Rent',
		cost: 600,
		mixed: {what: {ever: 'mix', other: [1,2]}}
	});
	/*rent.getCost(function(err,data){
		console.log('In CB');
		if(err) return console.error(err);
		console.log(data.cost);
	});*/
	
	rent.save(function(err,rent){
		if(err) return console.error(err);
		console.log('Save Success: '+rent.name);
	});
});