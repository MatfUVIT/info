const galerija = document.getElementById('galerija_slika');
const elementi_galerije = galerija.children;

for (const elem of elementi_galerije) {
    // Zamenjujemo sve `span` elemente `img` elementima
    if (elem.tagName.toLowerCase() === 'span') {
        const slika = document.createElement('img');
        slika.src = 'portret.jpg';
        slika.width = 100;

        galerija.replaceChild(/* šta ubacujemo */ slika, /* šta izbacujemo */ elem);
    }
}