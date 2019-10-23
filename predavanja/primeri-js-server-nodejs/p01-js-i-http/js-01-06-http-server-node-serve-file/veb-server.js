let http = require('http');
let url = require('url');
let fs = require('fs');

const port = 7000;
http.createServer(function (zahtev, odgovro) {
    pathName = url.parse(zahtev.url).pathname;
    fs.readFile(__dirname + pathName, function (err, data) {
        if (err) {
            odgovro.writeHead(404, { 'Content-type': 'text/plan' });
            odgovro.write(`Page Was Not Found 
            ${JSON.stringify(err)}`);
            odgovro.end();
        } else {
            odgovro.writeHead(200);
            odgovro.write(data);
            odgovro.end();
        }
    });
} ).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
