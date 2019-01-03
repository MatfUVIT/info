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

function prikaziSve() {
    prikaziNisku("A")
    prikaziNisku("B")
    prikaziNisku("C")
    prikaziNisku("D")
    prikaziNisku("E")
}

prikaziSve()