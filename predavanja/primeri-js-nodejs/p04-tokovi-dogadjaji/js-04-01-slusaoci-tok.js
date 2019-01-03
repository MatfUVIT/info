let fs = require('fs');

let readStream = fs.createReadStream('lorem.txt');
readStream.setEncoding('utf8');

let counter = 0;
readStream.addListener('data', dataCounter);
readStream.addListener('data', dataPrinter);

readStream.addListener('end', function () {
    console.log(counter);
});

function dataCounter(datacoming) {
    counter = counter + 1;
}

function dataPrinter(data) {
    console.log('data chunk length: ' + data.length);
}