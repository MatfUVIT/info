let http = require('http');
let url = require('url');

let prikaz = require('./prikaz-strane');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response) {
  let pathName = url.parse(request.url).pathname;
  console.log(pathName);
  prikaz.prikazStrane(response, pathName);
}
