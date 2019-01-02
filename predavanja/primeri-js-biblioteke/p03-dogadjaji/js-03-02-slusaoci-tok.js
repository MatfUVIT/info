let fs = require('fs');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');

let counter = 0;
readStream.addListener('data', (prispeliPodaci)=> counter = counter + 1);
readStream.addListener('data', (prispeliPodaci)=>console.log('data chunk length: ' + prispeliPodaci.length));
readStream.addListener('end', () => console.log(counter));

