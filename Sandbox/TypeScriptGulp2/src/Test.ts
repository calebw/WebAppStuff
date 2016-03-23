/// <reference path="../typings/main/ambient/jquery/index.d.ts" />
import $ = require('jquery');
import Other = require('./Other');

class Test {
	val: string;
	constructor(val: string){
		this.val = val;
	}
	logVal(){
		console.log('Val: '+this.val);
	}
	getVal(){
		return this.val;
	}
}
$(document).ready(function(){
	var test = new Test('Caleb');
	test.logVal();

	$('#here').html(test.getVal());
	Other.otherMethod();
});
