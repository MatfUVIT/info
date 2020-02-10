const net = require('net');

const server = net.createServer(
	(soket) => {
		soket.write(`Pozdrav od servera\n Veliki pozdrav!`);
		soket.pipe(soket);
	});

const adresa = '127.0.0.1';
const port = 1337;
server.listen(port, adresa);
console.log(`Server slusa na adresi ${adresa}, port ${port} `);
