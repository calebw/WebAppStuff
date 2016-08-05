/**
 * Created by Caleb.Whitaker on 7/28/2015.
 */

MyClass = require("./inherit.js");
var myInstance = new MyClass();
myInstance.on("custom event",function(str1,str2){
    console.log("got custom event with %s and %s",str1,str2);
});
myInstance.someMethod("one","two");