function dodajNisku(prethodna, tekuca) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                razresi(prethodna + ' ' + tekuca);
            },
            Math.floor(Math.random() * 50) + 1
        )
    })
}

function dodajSveRedom() {
    dodajNisku('', 'A')
        .then(result => {
            return dodajNisku(result, 'Б')
        })
        .then(result => {
            return dodajNisku(result, 'В')
        })
        .then(result => {
            console.log(result)
        });
}

dodajSveRedom();