let fs = require('fs');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');
let brojac = 0;
readStream.once('data', (prispeliPodaci) => {
    brojac++;
    if(brojac == 3)
        readStream.pause();
});
readStream.on('end', () => console.log(brojac));

let writeStream = fs.createWriteStream('copy2.txt');
readStream.pipe(writeStream);