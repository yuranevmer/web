console.log('Hello World');
var http = require('http');
var fs = require('fs');
var index = fs.readFileSync('index.html');

var server = http.createServer(function(req, res) {
  res.writeHead(200);

    res.writeHead(200, {"Content-Type": "text/html"});
    res.write(index);
    res.end();
});

server.listen(8060);