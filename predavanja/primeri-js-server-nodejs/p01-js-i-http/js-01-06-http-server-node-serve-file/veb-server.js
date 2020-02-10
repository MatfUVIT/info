let http = require('http');
let url = require('url');
let fs = require('fs');

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    pathName = url.parse(zahtev.url).pathname;
    console.log(pathName);
    fs.readFile(__dirname + pathName, function (err, data) {
        if (err) {
            odgovor.writeHead(404, { 'Content-type': 'text/plan' });
            odgovor.write(`Page Was Not Found 
            ${JSON.stringify(err)}`);
            odgovor.end();
        } else {
            odgovor.writeHead(200);
            odgovor.write(data);
            odgovor.end();
        }
    });
} ).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
