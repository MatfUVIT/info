let http = require('http');
let url = require('url');
let querystring = require('querystring');

let prikaz = require('./prikaz-strane');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response) {
    let pathName = url.parse(request.url).pathname;
    if (request.method == 'GET') {
        let postData = null;
        prikaz.prikazStrane(response, pathName, postData);
    }
    else if (request.method == 'POST') {
        let body = '';
        request.on('data', function (data) {
            body += data;
        });
        request.on('end', function () {
            let postData = querystring.parse(body);
            console.log(postData);
            prikaz.prikazStrane(response, pathName, postData);
        });
    }
}

