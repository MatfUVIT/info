const http = require('http');
const querystring = require('querystring');

function obradiPostZahtev(zahtev, odgovor) {
    let podaci = "";
    if (zahtev.method == 'POST') {

        zahtev.on('data', function (data) {
            podaci += data;
            if (podaci.length > 1e6) {
                podaci = "";
                odgovor.writeHead(413, { 'Content-Type': 'text/plain' }).end();
                zahtev.connection.destroy();
            }
        });

        zahtev.on('end', function () {
            zahtev.post = querystring.parse(podaci);
            odgovor.write(`Post parametri:\n`)
            odgovor.write(`${zahtev.post}\n`)
            odgovor.end();
        });

    } else {
        odgovor.writeHead(405, { 'Content-Type': 'text/plain' });
        odgovor.end();
    }
}

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    if (zahtev.method == 'POST') {
        odgovor.writeHead(200, "OK", { 'Content-Type': 'text/plain' });
        odgovor.write(`Napravljeni veb server koristi node.js \n\n`);
        obradiPostZahtev(zahtev, odgovor);
    } else {
        odgovor.writeHead(200, "OK", { 'Content-Type': 'text/plain' });
        odgovor.write('Napravljeni veb server koristi node.js \n');
        odgovor.write('i ocekuje samo zahteve sa POST metodom \n');
        odgovor.end();
    }
}).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);

