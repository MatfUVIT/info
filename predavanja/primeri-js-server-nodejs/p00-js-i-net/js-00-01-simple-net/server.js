/*

Jednostavni TCP server napravljen pomocu node

*/

let net = require('net');

let server = net.createServer( (soket) =>{
	soket.write(`Pozdrav od servera
	`);
	soket.pipe(soket);
});

server.listen(1337, '127.0.0.1');

/*

Sa sreverom se moze povezati na dva nacina:

1) koriscenjem *nix naredbe netcat iz komandne linije:
$ netcat 127.0.0.1 1337
Odgovor bi trebao da bude:
> Pozdrav od servera

2) pokretanjem klijenta definisanog u client.js

*/