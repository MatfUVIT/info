const http = require('http');
const url = require('url');

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    odgovor.writeHead(200, { 'Content-type': 'text/plan' });
    odgovor.write('Napravljeni veb servers koristi node.js \n');
    let tekuceVreme = new Date();
    odgovor.write('vreme (sa servera): ' + tekuceVreme + "\n");
    console.log("---" + tekuceVreme + "---");
    odgovor.write('url:     ' + zahtev.url + "\n");
    console.log('url:     ' + zahtev.url);
    let putanja = url.parse(zahtev.url).pathname;
    odgovor.write('putanja: ' + putanja + "\n");
    console.log('putanja: ' + putanja);
    let upit = url.parse(zahtev.url).query;
    odgovor.write('upit:    ' + upit + "\n");
    console.log('upit:    ' + upit);
    odgovor.end();
}).listen(port);

console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
