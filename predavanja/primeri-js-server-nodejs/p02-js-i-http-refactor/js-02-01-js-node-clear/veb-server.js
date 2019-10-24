let http = require('http')

const port = 7000;
http.createServer(osluskivacZahteva).listen(port);
console.log(`Pokrenuti veb server osluskuje na portu ${port}...`);

function osluskivacZahteva(zahtev, odgovro){
  odgovro.writeHead(200);
  odgovro.write('Veb server koristi node.js i dogadjaje');
  odgovro.end();
}