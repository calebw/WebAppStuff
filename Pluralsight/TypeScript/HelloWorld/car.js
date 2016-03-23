class Car {
    constructor(engine) {
        this.engine = engine;
    }
    start() {
        alert('Engine Started: ' + this.engine);
    }
    stop() {
        alert('Engine Stopped: ' + this.engine);
    }
}
window.onload = function () {
    var car = new Car('V8');
    car.start();
    car.stop();
};
