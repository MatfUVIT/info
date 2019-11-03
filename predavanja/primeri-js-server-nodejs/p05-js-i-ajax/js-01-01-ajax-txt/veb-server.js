let http = require('http');
let url = require('url');
let querystring = require('querystring');
let fs = require('fs');

http.createServer(function (request, response) {
    pathName = url.parse(request.url).pathname;
    fs.readFile(__dirname + pathName, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-type': 'text/plan' });
            response.write(`Page Was Not Found 
            ${JSON.stringify(err)}`);
            response.end();
        } else {
            response.writeHead(200);
            response.write(data);
            response.end();
        }
    });
}).listen(7000);