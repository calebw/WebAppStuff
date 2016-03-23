'use strict';
var Car = (function () {
    function Car(engine) {
        //Call on setter
        this.engine = engine;
    }
    Object.defineProperty(Car.prototype, "engine", {
        //Getter/Setters for Private var.
        //Note the special syntax for Get/Set
        get: function () {
            return this._engine;
        },
        set: function (value) {
            if (value == undefined)
                throw 'Supply and engine!';
            this._engine = value;
        },
        enumerable: true,
        configurable: true
    });
    return Car;
}());
window.onload = function () {
    var c = new Car('V8');
    //Get/Set in action
    console.log(c.engine);
    c.engine = undefined;
    console.log(c.engine);
};
