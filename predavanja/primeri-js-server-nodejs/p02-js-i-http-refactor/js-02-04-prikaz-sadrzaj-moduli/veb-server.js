let http = require('http');
let url = require('url');

let prikaz = require('./prikaz-strane');

const port = 7000;
http.createServer(onRequest).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);

function onRequest(request, response) {
  let pathName = url.parse(request.url).pathname;
  console.log(pathName);
  prikaz.prikazStrane(response, pathName);
}
