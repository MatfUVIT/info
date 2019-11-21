
const net = require('net');

let listeningPort = 55351;

// server creation using net.connect --->
let clients = net.connect({ port: listeningPort },
    () => {
        // 'connect' listener
        console.log('connected to server!');
        clients.write('world!\r\n from client\r\n');
    });
clients.on('data',
    (data) => {
        console.log(data.toString());
        clients.end();
    });
clients.on('end',
    () => {
        console.log('disconnected from server');
    });