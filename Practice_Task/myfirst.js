var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The date and time currently' + dt.myDateTime());
}).listen(5000);

console.log("Server is running on port 5000");
