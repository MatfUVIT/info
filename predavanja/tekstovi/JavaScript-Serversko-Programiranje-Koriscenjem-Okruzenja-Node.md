# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## ЈаваСкрипт серверско програмирање коришћењем окружења node

### Мрежне апликације

#### TCP апликације

**Пример.** Илустрије једноставно мрежно програмирање преко TCP протокола коришћењем модула `net`.

У овом примеру је направљен једноставан сервер који сваки пут када клијент са њим успостави везу шаље поздравну поруку.

Програмски код сервера са налази у датотеци `server.js`:

```js
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

```

Приликом покретања сервера, на конзоли се довија порука следећег облика:

```bash
Server slusa na adresi 127.0.0.1, port 1337
```

Са покренутим сервером се корисник може повезати на два начина:

- коришћењем Unix наредбе `netcat` из командне линије:

```bash
\$ netcat 127.0.0.1 1337
```

Тада би одговор би требао да буде:

```bash
> Pozdrav od servera
```

- покретањем клијента дефинисаног у датотеци `client.js`:

```js
let net = require('net');

let klijent = new net.Socket();

adresa = '127.0.0.1';
port = 1337;

klijent.connect(port, adresa,
    () => {
        console.log('Povezan sa serverom');
        klijent.write('Pozdrav za server! Pozdrav salje klijent.');
    });

klijent.on('data',
    (data) => {
        console.log('Primljeno: ' + data);
        klijent.destroy(); // posle odgovora servera, klijent se unistava
    });

klijent.on('close',
    () => console.log('Veza je zatvorena'));
```

Може се уочити да клијент по повезивању на конзоли прикаже статус и серверу пошаље поздравну поруку, а да сваки пут када прима податке од сервера, прикаже те податке на конзоли.

Покретањем клијента, током времена када сервер ради, добија се следећи излаз на конзоли:

```bash
Povezan sa serverom
Primljeno: Pozdrav od servera

Veza je zatvorena
```

 &#9608;

**Пример.** Илустрије мрежно програмирање преко TCP протокола коришћењем модула `net`.

Сервер направљен у овом примеру је фундаментално исти као сервер из претходног примера. Програмски код тог сервера са налази у датотеци `server.js`:

```js
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
```

Овде су направљена два клијента, који шаљу различите поруке серверу. Први клијент је дефинисан у датотеци `client.js`:

```js
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
```

 Други клијент је дефинисан у датотеци `client2.js`:

```js
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
```

Ако се покрене прво сервер, па потом (у периоду док сервер ради) један па други клијент, на конзоли сервера добиће се следеће поруке:

```bash
Server is listening
Server is listening!
Buffer size : 0
---------server details -----------------
Server is listening at port 55351
Server ip :::
Server is IP4/IP6 : IPv6
Server is listening at LOCAL port 55351
Server LOCAL ip :::ffff:127.0.0.1
------------remote client info --------------
REMOTE Socket is listening at port 55444
REMOTE Socket ip :::ffff:127.0.0.1
REMOTE Socket is IP4/IP6 : IPv6
--------------------------------------------
Number of concurrent connections to the server : 1
Bytes read : 20
Bytes written : 0
Data sent to server : hello
from client

Data was flushed successfully from kernel buffer i.e written successfully!
Bytes read : 34
Bytes written : 27
Data sent to server : Bye bye server
Data was flushed successfully from kernel buffer i.e written successfully!
Socket ended from other end!
End data : undefined
Bytes read : 34
Bytes written : 48
Socket closed!

Buffer size : 0
---------server details -----------------
Server is listening at port 55351
Server ip :::
Server is IP4/IP6 : IPv6
Server is listening at LOCAL port 55351
Server LOCAL ip :::ffff:127.0.0.1
------------remote client info --------------
REMOTE Socket is listening at port 55445
REMOTE Socket ip :::ffff:127.0.0.1
REMOTE Socket is IP4/IP6 : IPv6
--------------------------------------------
Number of concurrent connections to the server : 1
Bytes read : 22
Bytes written : 0
Data sent to server : world!
 from client

Data was flushed successfully from kernel buffer i.e written successfully!
Socket ended from other end!
End data : undefined
Bytes read : 22
Bytes written : 29
Socket closed!
```

Приликом извршења првог клијента на конзоли ће бити приказано:

```bash
Client: connection established with server
---------client details -----------------
Client is listening at port55444
Client ip :127.0.0.1
Client is IP4/IP6 : IPv4
Data from server:Data ::hello
from client

Data from server:Data ::Bye bye server
```

Приликом извршења другог клијента на конзоли ће бити приказано:

```bash
connected to server!
Data ::world!
 from client
```

 &#9608;

#### UDP апликације

**Пример.** Илустрије једноставно мрежно програмирање преко UDP протокола коришћењем модула `dgram`.

Програмски код сервера са налази у датотеци `server.js`:

```js
const PORT = 33333;
const HOST = '127.0.0.1';

const dgram = require('dgram');
let server = dgram.createSocket('udp4');

server.on('listening',
  function () {
    let address = server.address();
    console.log('UDP Server listening on ' + address.address + ':' + address.port);
  });

server.on('message',
  function (message, remote) {
    console.log(remote.address + ':' + remote.port + ' - ' + message);
  });

server.bind(PORT, HOST);
```

Важно је напоменути да:

- Код извршења функције  `bind` над сервером, параметар `HOST` је опционалан - његова подразумевана вредност је `0.0.0.0`.

- Догађај `message` се испаљује када UDP пакет стигне на одредиште за овај сервер.

- Догађај `listening` се испаљује када сервер буде иницијализован и потпуно спреман да прима UDP пакете. Метод `createSocket` модула `dgram` може да прихвати једну од две вредности: ниску 'udp4' или ниску 'udp6'. Прва означава да ће бити коришћен IPv4, а друга да ће бити коришћен IPv6.

Kлијент je дефинисан у датотеци `client.js`:

```js
const PORT = 33333;
const HOST = '127.0.0.1';

const dgram = require('dgram');
let message = new Buffer('My KungFu is Good!');

let client = dgram.createSocket('udp4');
client.send(message, 0, message.length, PORT, HOST,
  function (err, bytes) {
    if (err)
      throw err;
    console.log('UDP message sent to ' + HOST + ':' + PORT);
    client.close();
  });
```

Важно је напоменути да:

- Функција `send` захтева постојање правог node.js објекта типа`Buffer`, а не ниску или број. Другим речима, објекат типа`Buffer` је први параметар функције `send` за слање датаграма преко сокета.

- Други параметар функције `send` представља позицију у баферу од које почиње UDP пакет који се шаље. У горњем коду вредност одговарајућег аргумента је `0`, што значи да се порука из бафера преноси од почетка.

- Трећи параметар је број бајтова бафера, почев од дате позиције, који ће се садржати у UDP пакету за слање. у претходном случају, вредност тог аргумента је `message.length` (тј. 16) - с обзиром да је бафер мали, овде цео бафер може бити послат у оквиру једног UDP пакета. У неким другим случајевима, када је бафер велики, биће потребно да се итерира кроз бафер и да се садржај шаље у већем броју мањих UDP пакета.

- Протокол UDP је направљен тако да ако порука пређе допуштену величину пакета, тада се пакет неће пренети али неће бити пријављена никаква грешка.

- Објекат `err` у функцији повратног позива функције `send` ће се односити на упит над DNS сервером.

- Да би осигурали да ће пакети стићи на одредиште, неопходно је да хост и/или IP адреса буду у сагласностиса верзијом IP која се користи. Ако то није случај, комункација неће постојати. &#9608;

### Веб апликације

У овој секцији ће веб апликације бити развијене искључиво помоћу окружења node.js.

#### Процесирање захтева и генерисање одговора

**Пример.** Илустрије једноставни веб сервер коришћењем модула `http`.

Програмски код сервера са налази у датотеци `veb-server.js`:

```js
let http = require('http');

const port = 7000;
http.createServer(
    function (zahtev, odgovor) {
        odgovor.writeHead(200, { 'Content-type': 'text/plan' });
        odgovor.write('Napravljeni veb servers koristi node.js');
        odgovor.end();
    }).listen(port);
console.log(`Veb server osluskuje zahteve na portu ${port}...\n`);
```

Какав год захтев стигао овом серверу, он ће увек прослеђиати исти одговор. Сада нема потребе да се прави посебни клијент, већ као клијент може да послужи:

- веб прегледач, при чему у адресну линију треба унети адресу `http://localhost:7000/`. у том случају, приказује се следећа веб страна:

![Веб прегледач](assets/images/screen-shot-browser-1.png)

- алат `curl`, при чему у терминал треба унети наредбу `curl http://localhost:7000`. Као резултат се добија:

```bash
StatusCode        : 200
StatusDescription : OK
Content           : Napravljeni veb servers koristi node.js
RawContent        : HTTP/1.1 200 OK
                    Connection: keep-alive
                    Transfer-Encoding: chunked
                    Content-Type: text/plan
                    Date: Thu, 21 Nov 2019 21:55:33 GMT

                    Napravljeni veb servers koristi node.js
Forms             : {}
Headers           : {[Connection, keep-alive], [Transfer-Encoding, chunked], [Content-Type, text/plan], [Date, Thu, 21 Nov 2019 21:55:33 GMT]}
Images            : {}
InputFields       : {}
Links             : {}
ParsedHtml        : mshtml.HTMLDocumentClass
RawContentLength  : 39
```

- алат `Postman`, где треба оформити get захтев и послати тај захтев, као на слици:

![Алат Postman](assets/images/screen-shot-postman-1.png)

У свим овим случајевима је добијен исти одговор од сервера, само се начини прикаѕа тог добијеног одговора разликују зато што су коришћене различити типови клијената. &#9608;

#### Одређивање путање и ниска-упита

#### Слање датотека као одговора

#### Мапа садржаја

### Обрада веб форме

#### Метод GET

#### Метод POST

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
