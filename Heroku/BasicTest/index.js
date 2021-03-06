// Load the http module to create an http server.
var http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello World! Test\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
var port = process.env.PORT || 8000;
server.listen(port);
console.log("Listening on "+port+"...");
