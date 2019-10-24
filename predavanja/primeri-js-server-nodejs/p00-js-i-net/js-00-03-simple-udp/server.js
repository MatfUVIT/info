var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');
var server = dgram.createSocket('udp4');

server.on('listening', function() {
  var address = server.address();
 console.log('UDP Server listening on ' + address.address + ':' + address.port);
});

server.on('message', function(message, remote) {
 console.log(remote.address + ':' + remote.port +' - ' + message);
});

server.bind(PORT, HOST);

/*

Things to note

1. HOST is optional in server.bind(). If omitted, it will be listening on 0.0.0.0, which might be what you want in some cases.

2. The message event is fired, when a UDP packet arrives destined for this server.

3. The listening event is fired, when the server has initialized and all ready to receive UDP packets. dgram.createSocket() can either accept 'udp4' or 'udp6'. The former uses IPv4, the later uses IPv6.

*/