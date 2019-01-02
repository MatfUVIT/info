
var net = require('net');

let listeningPort = 53680

// server creation using net.connect --->
const clients = net.connect({ port: listeningPort }, () => {
    // 'connect' listener
    console.log('connected to server!');
    clients.write('world!\r\n');
});
clients.on('data', (data) => {
    console.log(data.toString());
    clients.end();
});
clients.on('end', () => {
    console.log('disconnected from server');
});