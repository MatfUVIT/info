let fs = require('fs');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');

let brojac = 0;
tokZaCitanje.addListener('data',
    (prispeliPodaci) => brojac++);
tokZaCitanje.addListener('data',
    (prispeliPodaci) => console.log('duzina prispelih podataka: ' + prispeliPodaci.length));
tokZaCitanje.addListener('end',
    () => console.log(brojac));

