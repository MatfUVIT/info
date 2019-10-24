let http = require('http');
let url = require('url');
let fs = require('fs');

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    putanja = url.parse(zahtev.url).pathname;
    fs.readFile(__dirname + putanja, function (err, data) {
        if (err) {
            odgovor.writeHead(404, { 'Content-type': 'text/plan' });
            odgovor.write(`Page Was Not Found 
            ${JSON.stringify(err)}`);
            odgovor.end();
            let tekuceVreme = new Date();
            console.log("---" + tekuceVreme + "---");
            console.log("--- GRESKA ---")
            console.log('url:     ' + zahtev.url);
            console.log('putanja: ' + putanja);
        } else {
            odgovor.writeHead(200);
            odgovor.write(data);
            odgovor.end();
            let tekuceVreme = new Date();
            console.log("---" + tekuceVreme + "---");
            console.log("--- OK ---")
            console.log('url:     ' + zahtev.url);
            console.log('putanja: ' + putanja);
        }
    });
}).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
