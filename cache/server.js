var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
	if (req.url === '/' || req.url === '' || req.url === '/index.html') {
		fs.readFile('./index.html', function (err, file) {
			console.log(req.url)
			// no-cache
			res.setHeader('Cache-Control', "no-cache, max-age=" + 5);
			res.setHeader('Content-Type', 'text/html');
			res.writeHead('200', "OK");
			res.end(file);
		});
	}
	if (req.url === '/sword.png') {
		fs.readFile('./sword.png', function (err, file) {
      if (!req.headers['if-none-match']) {
        res.setHeader('Cache-Control', "max-age=" + 30); // cache for 30s
        res.setHeader('Content-Type', 'images/png');
        res.setHeader('Etag', 'ffff');
        res.writeHead('200', "Not Modified");
        res.end(file);
      } else {
        if (req.headers['if-none-match'] === 'ffff') {
          res.writeHead('304', "Not Modified");
          res.end();
        } else {
          res.setHeader('Cache-Control', "max-age=" + 30); // cache for 30s
          res.setHeader('Content-Type', 'images/png');
          res.setHeader('Etag', 'ffff');
          res.writeHead('200', "Not Modified");
          res.end(file);
        }
      }
			
		});
	}

}).listen(8888);