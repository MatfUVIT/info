
const net = require('net');

let server = net.createServer();

server.on('close',
    function () {
        console.log('Server closed !');
    });

server.on('connection',
    function (socket) {
        console.log('Buffer size : ' + socket.bufferSize);

        console.log('---------server details -----------------');

        let address = server.address();
        let port = address.port;
        let family = address.family;
        let ipaddr = address.address;
        console.log('Server is listening at port ' + port);
        console.log('Server ip :' + ipaddr);
        console.log('Server is IP4/IP6 : ' + family);

        let lport = socket.localPort;
        let laddr = socket.localAddress;
        console.log('Server is listening at LOCAL port ' + lport);
        console.log('Server LOCAL ip :' + laddr);

        console.log('------------remote client info --------------');

        let rport = socket.remotePort;
        let raddr = socket.remoteAddress;
        let rfamily = socket.remoteFamily;

        console.log('REMOTE Socket is listening at port ' + rport);
        console.log('REMOTE Socket ip :' + raddr);
        console.log('REMOTE Socket is IP4/IP6 : ' + rfamily);

        console.log('--------------------------------------------')
        server.getConnections(
            function (error, count) {
                console.log('Number of concurrent connections to the server : ' + count);
            });

        socket.setEncoding('utf8');

        socket.setTimeout(800000,
            function () {
                console.log('Socket timed out');
            });

        socket.on('data',
            function (data) {
                let bread = socket.bytesRead;
                let bwrite = socket.bytesWritten;
                console.log('Bytes read : ' + bread);
                console.log('Bytes written : ' + bwrite);
                console.log('Data sent to server : ' + data);

                //echo data
                let is_kernel_buffer_full = socket.write('Data ::' + data);
                if (is_kernel_buffer_full) {
                    console.log('Data was flushed successfully from kernel buffer i.e written successfully!');
                } else {
                    socket.pause();
                }
            });

        socket.on('drain',
            function () {
                console.log('write buffer is empty now .. u can resume the writable stream');
                socket.resume();
            });

        socket.on('error',
            function (error) {
                console.log('Error : ' + error);
            });

        socket.on('timeout',
            function () {
                console.log('Socket timed out !');
                socket.end('Timed out!');
                socket.destroy();
            });

        socket.on('end',
            function (data) {
                console.log('Socket ended from other end!');
                console.log('End data : ' + data);
            });

        socket.on('close',
            function (error) {
                let bread = socket.bytesRead;
                let bwrite = socket.bytesWritten;
                console.log('Bytes read : ' + bread);
                console.log('Bytes written : ' + bwrite);
                console.log('Socket closed!');
                if (error) {
                    console.log('Socket was closed coz of transmission error');
                }
            });

        setTimeout(
            function () {
                let isdestroyed = socket.destroyed;
                console.log('Socket destroyed:' + isdestroyed);
                socket.destroy();
            }, 1200000);

    });

server.on('error',
    function (error) {
        console.log('Error: ' + error);
    });

server.on('listening', function () {
    console.log('Server is listening!');
});

server.maxConnections = 10;

//static port allocation
server.listen(55351);


// for dyanmic port allocation
// server.listen(
//     function () {
//         let address = server.address();
//         let port = address.port;
//         let family = address.family;
//         let ipaddr = address.address;
//         console.log('Server is listening at port' + port);
//         console.log('Server ip :' + ipaddr);
//         console.log('Server is IP4/IP6 : ' + family);
//     });

let islistening = server.listening;
if (islistening) {
    console.log('Server is listening');
} else {
    console.log('Server is not listening');
}

setTimeout(
    function () {
        server.close();
    }, 5000000);
