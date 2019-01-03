let fs = require('fs');

console.log('\n');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
readStream.on('data', (datacoming) => console.log(datacoming));