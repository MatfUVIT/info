let net = require('net');

let klijent = new net.Socket();

adresa = '127.0.0.1';
port = 1337;
klijent.connect(port, adresa, () => {
    console.log('Povezan sa serverom');
    klijent.write('Pozdrav za server! Pozdrav salje klijent.');
});

klijent.on('data',  (data) => {
    console.log('Primljeno: ' + data);
    klijent.destroy(); // posle odgovora servera, klijent se unistava
});

klijent.on('close', () => console.log('Veza je zatvorena') );