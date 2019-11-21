let net = require('net');

let server = net.createServer(
	(soket) => {
		soket.write(`Pozdrav od servera\n`);
		soket.pipe(soket);
	});

adresa = '127.0.0.1';
port = 1337;
server.listen(port, adresa);
console.log(`Server slusa na adresi ${adresa}, port ${port} `);
