let http = require('http');
let url = require('url');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-type': 'text/plan' });
    response.write('Napravljeni veb servers koristi node.js');
    response.end();
    let pathName = url.parse(request.url).pathname;
    let query = url.parse(request.url).query;
    
    console.log('---');
    console.log('url:      ' + request.url);
    console.log('pathName: ' + pathName);
    console.log('query:    ' + query);
}).listen(7000);