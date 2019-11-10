function dodajNisku(prethodna, tekuca) {
    return new Promise((razresi, odbij) => {
        setTimeout(
            () => {
                razresi(prethodna + ' ' + tekuca);
            },
            Math.floor(Math.random() * 50) + 1
        );
    });
}

async function dodajSveRedom() {
    let ret = '';
    ret = await dodajNisku(ret, 'A');
    ret = await dodajNisku(ret, 'Б');
    ret = await dodajNisku(ret, 'В');
    console.log(ret);
}

dodajSveRedom();