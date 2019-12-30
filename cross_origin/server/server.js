var http = require('http');
var fs = require('fs');

const data = {
  name: "Crimson fire",
  culture: "Yaaxil"
}

http.createServer(function (req, res) {
  if (req.url === '/data') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/json');
    res.end(JSON.stringify(data));
  }
  if (req.url === '/jsonpData.js') {
    fs.readFile('./jsonpData.js', function (err, file) {
			res.setHeader('Content-Type', 'text/js');
			res.writeHead('200', "OK");
      res.end(file);
		});    
  }
  if (req.url === '/corsData') {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    res.setHeader('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.setHeader('Content-Type', 'text/json');
    res.writeHead('200', "OK");
    res.end(JSON.stringify(data)); 
  }
}).listen(8888);