function dodajNisku(prethodna, tekuca, povratniPoziv) {
    setTimeout(
        () => {
            povratniPoziv((prethodna + ' ' + tekuca))
        },
        Math.floor(Math.random() * 50) + 1
    )
}

function dodajSveRedom() {
    dodajNisku('', 'A', result => {
        dodajNisku(result, 'B', result => {
            dodajNisku(result, 'C', result => {
                console.log(result)
            })
        })
    })
}
dodajSveRedom()