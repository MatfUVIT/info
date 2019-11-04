const http = require('http');
const url = require('url');

module.exports = http.createServer((req, res) => {

    var service = require('./service.js');
    const reqUrl = url.parse(req.url, true);

    if (reqUrl.pathname == '/sample' && req.method === 'GET') {
        // GET Endpoint
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.sampleRequest(req, res);

    } else if (reqUrl.pathname == '/test' && req.method === 'POST') {
        // POST Endpoint
        console.log('Request Type:' +
            req.method + ' Endpoint: ' +
            reqUrl.pathname);

        service.testRequest(req, res);

    } else {
        console.log('Request Type:' +
            req.method + ' Invalid Endpoint: ' +
            reqUrl.pathname);

        service.invalidRequest(req, res);

    }
});