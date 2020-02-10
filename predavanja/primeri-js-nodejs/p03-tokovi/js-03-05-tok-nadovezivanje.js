let fs = require('fs');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');
let brojac = 0;
tokZaCitanje.on('data',
    () => brojac++);
tokZaCitanje.on('end',
    () => console.log(brojac));

let tokZaUpis = fs.createWriteStream('copy2.txt');
tokZaCitanje.pipe(tokZaUpis);