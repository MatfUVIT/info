let fs = require('fs');

console.log('\n');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
readStream.on('data', (prispeliPodaci) => console.log(prispeliPodaci));