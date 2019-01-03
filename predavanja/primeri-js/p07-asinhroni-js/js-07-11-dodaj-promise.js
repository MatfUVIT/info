function dodajNisku(prethodna, tekuca) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                razresi(prethodna + ' ' + tekuca)
            },
            Math.floor(Math.random() * 50) + 1
        )
    })
}

function dodajSveRedom() {
    dodajNisku('', 'A')
        .then(result => dodajNisku(result, 'B'))
        .then(result => dodajNisku(result, 'C'))
        .then(result => console.log(result) )
}
dodajSveRedom()