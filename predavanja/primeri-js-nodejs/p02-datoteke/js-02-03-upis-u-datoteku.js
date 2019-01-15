let fs = require('fs')

fs.writeFile('text3.txt', 'Ovo je neka mala proba', 'utf8',
    (err) => {
        if (err) {
            console.log(err)
        }
    })