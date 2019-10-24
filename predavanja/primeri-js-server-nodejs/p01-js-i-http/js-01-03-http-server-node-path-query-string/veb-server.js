let http = require('http');
let url = require('url');

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    odgovor.writeHead(200, { 'Content-type': 'text/plan' });
    odgovor.write('Napravljeni veb servers koristi node.js \n');
    odgovor.write(`i upisuje URL, putanju i upit  u konzolu.`);
    odgovor.end();

    let tekuceVreme = new Date();
    console.log("---" + tekuceVreme + "---");
    console.log('url:     ' + zahtev.url);
    let putanja = url.parse(zahtev.url).pathname;
    console.log('putanja: ' + putanja);
    let upit = url.parse(zahtev.url).query;    
    console.log('upit:    ' + upit);
} ).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
