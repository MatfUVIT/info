function dodajNisku(prethodna, tekuca, povratniPoziv) {
    setTimeout(
        () => {
            povratniPoziv((prethodna + ' ' + tekuca));
        },
        Math.floor(Math.random() * 50) + 1
    );
}

function dodajSveRedom() {
    dodajNisku('', 'A', result => {
        dodajNisku(result, 'Б', result => {
            dodajNisku(result, 'В', result => {
                console.log(result);
            });
        });
    });
}

dodajSveRedom();