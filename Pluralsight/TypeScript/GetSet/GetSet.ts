'use strict';
class Car {
	private _engine: string;

	constructor(engine: string){
		//Call on setter
		this.engine = engine;
	}

	//Getter/Setters for Private var.
	//Note the special syntax for Get/Set
	get engine(): string {
		return this._engine;
	}

	set engine(value: string){
		if (value == undefined) throw 'Supply and engine!';
		this._engine = value;
	}
}
window.onload = function() { 
	var c = new Car('V8');
	//Get/Set in action
	console.log(c.engine);
	c.engine = undefined;
	console.log(c.engine);
};
