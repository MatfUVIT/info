let http = require('http')
let url = require('url');

http.createServer(onRequest).listen(8888);
console.log('Server has started');

function onRequest(request, response) {
  let pathName = url.parse(request.url).pathname;
  console.log(pathName);
  prikazStrane(response, pathName);
}

let contentMap = {
  '/': '<h1> Dobrodosli na sajt </h1>',
  '/kontakt': '<h1> Kontaktne informacije </h1>',
  '/opis': '<h1> Opis sajta </h1>',
  '/korisnici': '<h1> Spisak korisnika veb sajta </h1>',
  '/privatno': '<h1> Privatni podaci </h1>'
}

function prikazStrane(response, pathName) {
  if (contentMap[pathName]) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(contentMap[pathName]);
    response.end();
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.write('404 Page not found');
    response.end();
  }
}

