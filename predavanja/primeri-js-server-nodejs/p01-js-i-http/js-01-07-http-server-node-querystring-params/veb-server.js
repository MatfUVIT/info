let http = require('http');
let url = require('url');
let fs = require('fs');

function obradiGetZahtev(zahtev, odgovor) {
    let upit = url.parse(zahtev.url).query;
    odgovor.write(`Upit: ${upit}\n`);
    if (upit != null) {
        let sekcije = upit.split('&')
        for (sekcija of sekcije) {
            let par = sekcija.split('=')
            if (par.length == 2) {
                let naziv = par[0];
                let vrednost = par[1];
                odgovor.write(`${naziv} = ${vrednost}\n`);
            }
        }
    }
}

const port = 7000;
http.createServer(function (zahtev, odgovor) {
    if (zahtev.method == 'GET') {
        odgovor.writeHead(200, { 'Content-type': 'text/plan' });
        odgovor.write('Napravljeni veb servers koristi node.js \n');
        obradiGetZahtev(zahtev, odgovor);
        odgovor.end();
    } else {
        odgovor.writeHead(200, "OK", { 'Content-Type': 'text/plain' });
        odgovor.write('Napravljeni veb servers koristi node.js \n');
        odgovor.write('i ocekuje samo zahteve sa GET metodom \n');
        odgovor.end();
    }
}).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
