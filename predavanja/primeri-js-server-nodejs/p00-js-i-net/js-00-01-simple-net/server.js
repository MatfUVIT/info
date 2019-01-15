/*
Jednostavni TCP server napravljen pomocu node
*/

let net = require('net');

let server = net.createServer( (soket) =>{
	soket.write(`Pozdrav od servera
	`);
	soket.pipe(soket);
});

adresa = '127.0.0.1';
port = 1337;
server.listen(port, adresa);
console.log( `Server slusa na adresi ${adresa}, port ${port} `);

/*

Sa serverom se moze povezati na dva nacina:

1) koriscenjem *nix naredbe netcat iz komandne linije:
$ netcat 127.0.0.1 1337
Odgovor bi trebao da bude:
> Pozdrav od servera

2) pokretanjem klijenta definisanog u client.js

*/