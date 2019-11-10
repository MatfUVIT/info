function prikaziNisku(niska) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                console.log(niska);
                razresi();
            },
            Math.floor(Math.random() * 50) + 1
        );
    });
}

function prikaziSveRedom() {
    prikaziNisku("А")
        .then(() => prikaziNisku("Б"))
        .then(() => prikaziNisku("В"))
        .then(() => prikaziNisku("Г"))
        .then(() => prikaziNisku("Д"));
}

prikaziSveRedom();