/**
 * Funkcija koja određuje da li stavka liste treba biti obrisana. Funkcija proverava da li stavka liste sadrži klasu `obrisi_mene`. 
 * @param {Node} stavka Element koji predstavlja stavku liste koja se proverava.
 * @returns {boolean} Rezultat ispitivanja uslova za brisanje stavke.
 */
function stavka_treba_biti_obrisana(stavka) {
    if (stavka.className.indexOf('obrisi_mene') != -1) {
        return true;
    } else {
        return false;
    }

    // Moze i samo:
    // return stavka.className.indexOf('obrisi_mene') != -1;
}

const liste = document.getElementsByTagName('ul');
if (liste.length > 0) {
    const lista = liste[0];
    const stavke = lista.children;

    for (const stavka of stavke) {
        if (stavka_treba_biti_obrisana(stavka)) {
            lista.removeChild(stavka);
        }
    }
} else {
    console.log('Dokument nema liste!');
}