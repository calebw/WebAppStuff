/**
 * Created by Caleb.Whitaker on 7/28/2015.
 */

var util = require('util');
var EventEmitter = require('events').EventEmitter;

var MyClass = function(){
};
util.inherits(MyClass,EventEmitter);

MyClass.prototype.someMethod = function(){
    this.emit("custom event","arg1","arg2");
};
module.exports = MyClass;