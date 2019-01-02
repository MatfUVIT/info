let net = require('net');

let klijent = new net.Socket();

klijent.connect(1337, '127.0.0.1', () => {
    console.log('Povezan sa serverom');
    klijent.write('Pozdrav za server! Poydrav salje klijent.');
});

klijent.on('data',  (data) => {
    console.log('Primljeno: ' + data);
    klijent.destroy(); // posle odgovora servera, klijent se unistava
});

klijent.on('close', () => console.log('Veza je zatvorena') );