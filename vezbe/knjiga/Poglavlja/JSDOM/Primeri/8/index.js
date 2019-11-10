let velicina = 100;
const korak = 50;
const kvadrat = document.getElementById('kvadrat');

function uvecaj_click() {
    velicina += korak;
    kvadrat.style.width = velicina + 'px';
    kvadrat.style.height = velicina + 'px';
}

function smanji_click() {
    if (velicina - korak < 0) {
        return;
    }

    velicina -= korak;
    kvadrat.style.width = velicina + 'px';
    kvadrat.style.height = velicina + 'px';
}

if (kvadrat != null) {
    const uvecaj = document.getElementById('uvecaj');
    if (uvecaj != null) {
        uvecaj.addEventListener('click', uvecaj_click);
    }

    const smanji = document.getElementById('smanji');
    if (smanji != null) {
        smanji.addEventListener('click', smanji_click);
    }
} else {
    console.log('Ne postoji element sa identifikatorom "kvadrat"!');
}