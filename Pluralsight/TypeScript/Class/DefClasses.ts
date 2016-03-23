'use strict';
class Engine {
	constructor(public horsePower: number, public engineType: string){}
}

class Car {
	private _engine: Engine;

	constructor(engine: Engine){
		this.engine = engine;
	}

	get engine(): Engine {
		return this._engine;
	}
	set engine(value: Engine){
		if (value == undefined) throw 'Supply Engine!';
		this._engine = value; 
	}

	start() : void{
		alert('Engine started '+this._engine.engineType);
	}
}

window.onload = function() { 
	var en = new Engine(300,'V8');
	var car = new Car(en);
	alert(car.engine.engineType);
	car.start();
};