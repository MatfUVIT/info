let http = require('http')
let url = require('url');

const port = 7000;
http.createServer(osluskivacZahteva).listen(port);
console.log(`Pokrenuti veb server osluskuje na portu ${port}...`);

function osluskivacZahteva(zahtev, odgovor){
  let putanja = url.parse(zahtev.url).pathname;
  console.log(putanja);
  prikazStrane(odgovor);
}

function prikazStrane(odgovor){
  odgovor.writeHead(200);
  odgovor.write('Veb server koristi node.js i dogadjaje');
  odgovor.end();
}
