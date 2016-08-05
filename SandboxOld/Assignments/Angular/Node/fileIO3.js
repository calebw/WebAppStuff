/**
 * Created by Caleb.Whitaker on 7/28/2015.
 */

var fs = require('fs');
fs.writeFile("./text","Hey There!",function(err){
    if(err){
        return console.log(err);
    }
    console.log("File Saved");
});