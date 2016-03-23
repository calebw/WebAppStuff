interface IEngine {
	start(callback: (startStatus: boolean, engineType: string) => void): void;
	stop(callback: (stopStatus: boolean, engineType: string) => void): void;
}
//^Interfacing not supported in JS but is still in TS for compilation sake
class Engine implements IEngine{
	constructor(public horsePower: number, public engineType: string) {}

	start(callback: (startStatus: boolean, engineType: string) => void) {
		window.setTimeout(() => {
			callback(true, this.engineType);
		}, 1000);
	}

	stop(callback: (stopStatus: boolean, engineType: string) => void){
		window.setTimeout(() => {
			callback(true, this.engineType);
		},1000);
	}
}

class Accessory {
	constructor(public accessoryNumber: number, public title: string){}
}

class Auto {
	private _basePrice: number;
	private _engine: IEngine;
	make: string;
	model: string;
	accessoryList: string;

	constructor(basePrice: number, engine: IEngine, make: string, model: string){
		this.engine = engine;
		this.basePrice = basePrice;
		this.make = make;
		this.model = model;
	}

	calculateTotal() : number {
		var taxRate = .08;
		return this.basePrice + (taxRate * this.basePrice);
	}

	addAccessories(...accessories: Accessory[]){
		this.accessoryList = '';
		for (var i = 0; i < accessories.length; i++){
			var ac = accessories[i];
			this.accessoryList += ac.accessoryNumber + ' ' + ac.title + '<br />';
		}
	}

	getAccessoryList(): string {
		return this.accessoryList;
	}

	get basePrice(): number {
		return this._basePrice;
	}

	set basePrice(value: number){
		if (value <= 0) throw 'Price must be >= 0';
		this._basePrice = value;
	}

	get engine(): IEngine {
		return this._engine;
	}
	set engine(value: IEngine) {
		if (value == undefined) throw 'Supply Engine!';
		this._engine = value;
	}

}

class Truck extends Auto {
	bedLength: string;
	fourByFour: boolean;

	constructor(basePrice: number, engine: Engine, make: string, model: string, 
						bedLength: string, fourByFour: boolean) { 
		super(basePrice, engine, make, model);
		this.bedLength = bedLength;
		this.fourByFour = fourByFour;
	}
}


window.onload = function(){
	var truck = new Truck(40000, new Engine(300,'V8'), 'Chevy', 'Silverado', 'Long', true);
	truck.addAccessories(new Accessory(12, 'Radio'), new Accessory(14, 'Woofer'));
	truck.engine.start((status: boolean, engineType: string) => {
		alert(engineType + ' was started');
	});
}