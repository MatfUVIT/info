const http = require('http');

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    odgovor.writeHead(200, { 'Content-type': 'text/plan' });
    odgovor.write(`Napravljeni veb servers koristi node.js \n`);
    odgovor.write(`i zahteve upisuje u konzolu servera.`);
    odgovor.end();

    let tekuceVreme = new Date();
    console.log("---" + tekuceVreme + "---");
    console.log(zahtev);
}).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
