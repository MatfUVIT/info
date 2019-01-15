let fs = require('fs');

let sadrzaj = require('./sadrzaj');

function prikazStrane(response, pathName, queryData) {
  if (sadrzaj.contentMap[pathName]) {
    let izbor = sadrzaj.contentMap[pathName];
    if (izbor == "pozdrav") {
      response.writeHead(200);
      response.write(
        `<html>
      <body>
      Dobro dosli, ${queryData.ime}<br>
      Vasa email adresa je: ${queryData.email} 
      </body>
      </html>`);
      response.end();
    }
    else {
      fs.readFile(__dirname + '/' + izbor, function (err, data) {
        if (err) {
          response.writeHead(500, { 'Content-type': 'text/plan' });
          response.write(
            `Error in processing page ${JSON.stringify(err)}`);
          response.end();
        } else {
          response.writeHead(200);
          response.write(data);
          response.end();
        }
      });

    }
  } else {
    response.writeHead(404, { 'Content-Type': 'text/html' })
    response.write('404 Page not found');
    response.end();
  }
}

exports.prikazStrane = prikazStrane;
