// ovo je privatan podatak
let podatakKojiSeCuva = '';

// funkcija za postavljanje vrednosti
function setPodatak(noviPodatak) {
    podatakKojiSeCuva = noviPodatak;
}

// funkcija za ocitavanje vrednosti
function getPodatak() {
    return podatakKojiSeCuva;
}

// publikovanje "javnih "funkcija 
exports.setPodatak = setPodatak;
exports.getPodatak = getPodatak;