let fs = require('fs');

let writeStream = fs.createWriteStream('copyl.txt'); 
writeStream.write('Zdravo, slusaoci kursa UVIT');