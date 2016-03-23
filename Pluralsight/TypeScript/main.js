"use strict";

var System = require('systemjs');
//var global.ts = require('typescript');

System.transpiler = 'typescript';

System.import('HelloWorld/car.ts').then(function(m) {
  console.log(m);
});