
const net = require('net');

const listeningPort = 55351;

// creating a custom socket client and connecting it....
let client = new net.Socket();
client.connect(
    {
        port: listeningPort
    });

client.on('connect',
    function () {
        console.log('Client: connection established with server');

        console.log('---------client details -----------------');
        let address = client.address();
        let port = address.port;
        let family = address.family;
        let ipaddr = address.address;
        console.log('Client is listening at port' + port);
        console.log('Client ip :' + ipaddr);
        console.log('Client is IP4/IP6 : ' + family);
        // writing data to server
        client.write('hello\r\nfrom client\r\n');
    });

client.setEncoding('utf8');

client.on('data',
    function (data) {
        console.log('Data from server:' + data);
    });

setTimeout(
    function () {
        client.end('Bye bye server');
    }, 5000);

    //NOTE:--> all the events of the socket are applicable here..in client...


