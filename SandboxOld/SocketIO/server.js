/**
 * Created by Caleb on 10/26/2015.
 */
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.use('/vendor',express.static(__dirname + '/vendor'));

app.get('/', function(req, res){
    //send the index.html file for all requests
    res.sendFile(__dirname + '/index.html');
});
app.get('/cast',function(req,res){
    res.sendFile(__dirname + '/sind.html');
});

http.listen(3001, function(){
    console.log('listening on *:3001');

});

io.on('connection',function(socket){
    socket.on('cast',function(msg){
        console.log(msg);
        io.emit('cast',msg);
    });
});

//for testing, we're just going to send data to the client every second
setInterval( function() {

    /*
     our message we want to send to the client: in this case it's just a random
     number that we generate on the server
     */
    var num = Math.random();
    var msg = {data:"Hello"+num};
    io.emit('message', msg);
    console.log (msg);

}, 1000);