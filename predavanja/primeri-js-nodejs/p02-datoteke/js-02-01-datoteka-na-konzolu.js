let datoteka = require('fs')

datoteka.readFile('test.txt',
    (err, data) => {
        if (err) {
            console.log("Greska:" + err);
        }
        console.log(data);
    });