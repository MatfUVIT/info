let fs = require('fs');

console.log('\n');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');
let brojac = 0;
tokZaCitanje.on('data',
    () => {
        brojac++;
        console.log(brojac);
    });
tokZaCitanje.on('end',
    () => console.log("---\n" + brojac));