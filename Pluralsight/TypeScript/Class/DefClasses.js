'use strict';
var Engine = (function () {
    function Engine(horsePower, engineType) {
        this.horsePower = horsePower;
        this.engineType = engineType;
    }
    return Engine;
}());
var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply Engine!';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    Car.prototype.start = function () {
        alert('Engine started ' + this._engine.engineType);
    };
    return Car;
}());
window.onload = function () {
    var en = new Engine(300, 'V8');
    var car = new Car(en);
    alert(car.engine.engineType);
    car.start();
};
