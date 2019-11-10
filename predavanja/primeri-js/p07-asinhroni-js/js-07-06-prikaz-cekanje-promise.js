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

function prikaziTriRedom() {
    prikaziNisku("А")
        .then(() => {
            return prikaziNisku("Б")
        })
        .then(() => prikaziNisku("В"));
    prikaziNisku("Г");
    prikaziNisku("Д");
}

prikaziTriRedom();