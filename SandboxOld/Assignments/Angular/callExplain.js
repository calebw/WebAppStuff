/**
 * Created by Caleb.Whitaker on 7/28/2015.
 */

function first(a,b){   //works without a,b
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments);    //The arguments object, still accessed like array.
    console.log(Array.isArray(arguments));  //false
    var args = Array.prototype.slice.call(arguments,0); //Call in context of arguments and slice starting at 1st arg to create array
    console.log(Array.isArray(args)); //true
    console.log(args);  //The array holding arguments values
}

first(10,20);