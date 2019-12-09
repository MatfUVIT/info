const http = require('http');
const url = require('url');
const querystring = require('querystring');

const prikaz = require('./prikaz-strane');

const PORT = 7000;

http.createServer(onRequest).listen(PORT);
console.log('Server je pokrenut');

function onRequest(request, response) {
    let pathName = url.parse(request.url).pathname;
    if (request.method == 'GET') {
        let queryText = url.parse(request.url).query;
        let queryData = querystring.parse(queryText);
        console.log("GET:" );
        console.log(queryData );
        prikaz.prikazStrane(response, pathName, queryData);
    }
    else if (request.method == 'POST') {
        let body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            let postData = querystring.parse(body);
            console.log("POST:");
            console.log(postData);
            prikaz.prikazStrane(response, pathName, postData);
        });
    }
}

