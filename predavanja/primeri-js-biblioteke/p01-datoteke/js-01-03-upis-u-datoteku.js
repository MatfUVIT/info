let fs = require('fs')

fs.writeFile('text2.txt', 'Ovo je proba', 'utf8',
    (err, data) => {
        if (err) {
            console.log(err)
        }
        console.log(data);

    })