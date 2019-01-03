let fs = require('fs');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
let brojac = 0;
readStream.on('data', () => brojac++);
readStream.on('end', () => console.log(brojac));

let writeStream = fs.createWriteStream('copy1.txt');
readStream.pipe(writeStream);