
let s = require('./sadrzaj');

function prikazStrane(response, pathName) {
    if (s.sadrzaj[pathName]) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(s.sadrzaj[pathName]);
      response.end();
    } else {
      response.writeHead(404, { 'Content-Type': 'text/html' })
      response.write('404 Page not found');
      response.end();
    }
  }
  
  exports.prikazStrane = prikazStrane;
  