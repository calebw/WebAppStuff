/**
 * Created by Caleb.Whitaker on 7/28/2015.
 */

function test(){console.log("Hello from test Module");}
function test2(){console.log("Hello from test Module2");}
module.exports.test = test;
module.exports.test2 = test2;

//Can also say module.exports = test; and then...
// if you say req = require(..) you can just say test() rather than req.test()/
// Can only export 1 function this way