let fs = require('fs');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');

let counter = 0;
let dataCounter =  (prispeliPodaci)=> {
    counter = counter + 1;
    if(counter == 3)
        readStream.removeListener('data', dataCounter);
};
readStream.addListener('data', dataCounter);
readStream.addListener('data', (prispeliPodaci)=>console.log('data chunk length: ' + prispeliPodaci.length));
readStream.addListener('end', () => console.log(counter));
