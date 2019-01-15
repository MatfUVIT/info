let fs = require('fs');

console.log('\n');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
let brojac = 0;
readStream.on('data', () => {
    brojac++;
    console.log(brojac);
});
readStream.on('end', () => console.log(brojac));