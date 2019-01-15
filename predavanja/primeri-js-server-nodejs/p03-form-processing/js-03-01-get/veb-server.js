let http = require('http');
let url = require('url');
let querystring = require('querystring');

let prikaz = require('./prikaz-strane');

http.createServer(onRequest).listen(7000);
console.log('Server has started');

function onRequest(request, response) {
    if (request.method == 'GET') {
        let pathName = url.parse(request.url).pathname;
        let queryText = url.parse(request.url).query;
        let queryData = querystring.parse(queryText);
        prikaz.prikazStrane(response, pathName, queryData);
    }
}
