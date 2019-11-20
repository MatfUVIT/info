// ovo je privatan podatak
let podatakKojiSeCuva = '';

const _setPodatak = function (noviPodatak) {
    podatakKojiSeCuva = noviPodatak;
};
export { _setPodatak as setPodatak };

const _getPodatak = function() {
    return podatakKojiSeCuva;
};
export { _getPodatak as getPodatak };