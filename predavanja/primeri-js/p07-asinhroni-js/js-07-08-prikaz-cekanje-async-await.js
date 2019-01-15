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

async function prikaziDvaRedom() {
    await prikaziNisku("A")
    await prikaziNisku("B")
    prikaziNisku("C")
    prikaziNisku("D")
    prikaziNisku("E")
}


prikaziDvaRedom()