// Require Node's http module
var http =  require('http');

// Define IP and Port
var ip = '127.0.0.1';
var port = 3000;

// createServer that accepts a requestHandler function
var server = http.createServer(handleRequest);
console.log("Server Started & Listening on http://"+ip+":"+port);
server.listen(port, ip);

// Storage within Server for messages data
var messages = [];
messages = [123,456,789]; // Dummy Data 4 Testing GET

var headers = {
  "access-control-allow-origin": '*',
  "access-control-allow-headers": "content-type",
  "access-control-allow-methods": 'GET, POST'
};

// Request Handler
function handleRequest (request, response) {
  response.writeHead(200, headers);
  if(request.method === 'GET'){
    if(request.url === '/'){
      console.log('request.method is: ', request.method);
      response.end(JSON.stringify(messages)); // Server NEEDs to stringify response
    }
  }
  if(request.method === 'POST'){
    var data = '';
    if(request.url === '/'){
      console.log('request.method is: ', request.method);
      request.on('data', function(chunk) {
        data += chunk;
      });
      request.on('end', function() {
        messages.push(data);
        console.log("Data Recieved: " + data);
      });
    }
  }
}