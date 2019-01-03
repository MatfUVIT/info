function prikaziNisku(niska) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                console.log(niska)
                razresi()
            },
            Math.floor(Math.random() * 50) + 1
        )
    })
}

function prikaziSveRedom() {
    prikaziNisku("A")
        .then(() => {
            return prikaziNisku("B")
        })
        .then(() => prikaziNisku("C"))
        .then(() => prikaziNisku("D"))
        .then(() => prikaziNisku("E"))
}

prikaziSveRedom()