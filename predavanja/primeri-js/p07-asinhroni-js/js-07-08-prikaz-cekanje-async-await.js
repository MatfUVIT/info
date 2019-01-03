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

async function prikaziSveRedom() {
    await prikaziNisku("A")
    await prikaziNisku("B")
    await prikaziNisku("C")
    await prikaziNisku("D")
    await prikaziNisku("E")
}


prikaziSveRedom()