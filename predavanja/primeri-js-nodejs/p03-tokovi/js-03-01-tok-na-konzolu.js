let fs = require('fs');

console.log('\n');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');
tokZaCitanje.on('data',
    (prispeliPodaci) => console.log(prispeliPodaci));