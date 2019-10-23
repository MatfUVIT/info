let http = require('http');
let url = require('url');
let fs = require('fs');

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    putanja = url.parse(zahtev.url).pathname;
    fs.readFile(__dirname + putanja, function (err, data) {
        if (err) {
            odgovor.writeHead(404, { 'Content-type': 'text/plan' });
            odgovor.write('Page Was Not Found');
            odgovor.end();
        } else {
            odgovor.writeHead(200, { 'Content-type': 'text/plan' });
            odgovor.write(data);
            odgovor.end();
        }
    });
} ).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
