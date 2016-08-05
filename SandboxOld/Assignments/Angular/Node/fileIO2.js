/**
 * Created by Caleb.Whitaker on 7/28/2015.
 */

var fs = require("fs");
fs.readFile("text","utf8",function(error,data){
    console.log(data);
});