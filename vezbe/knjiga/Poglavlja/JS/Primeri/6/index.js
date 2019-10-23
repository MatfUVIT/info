(function(){

// Rad sa nizovima i ponavljajucim kontrolama toka
const niz_brojeva = [0, 1, 2, 3];
const niz_niski = ['uvit', 'os', 'aisp'];
const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

console.log('Nizovi imaju tip ' + typeof niz_brojeva);

console.log('Broj elemenata niza niz_brojeva je ' + niz_brojeva.length);

// Prolazak kroz elemente niza klasicnom for-petljom
let suma = 0;
for (let i = 0; i < niz_brojeva.length; ++i) {
    suma += niz_brojeva[i];
}
console.log('Suma elemenata niza niz_brojeva je ' + suma);

// Prolazak kroz elemente niza klasicnom for-of petljom
let proizvod = 1;
for (const element of niz_brojeva) {
    proizvod *= element;
}
console.log('Proizvod elemenata niza niz_brojeva je ' + proizvod);

// Napomena: Nizovi se prosledjuju "po referenci" 
// (tj. njihova referenca se kopira po vrednosti).
// Dakle, u funkciji ispod se pristupa originalnom nizu,
// a ne njegovoj kopiji.
function ispisi_uvecane_niske(niz) {
    for (let i = 0; i < niz.length; ++i) {
        console.log(niz[i].toUpperCase());
    }
}

ispisi_uvecane_niske(niz_niski);

function negiraj_bulove_vrednosti(niz) {
    for (let i = 0; i < niz.length; ++i) {
        if (typeof niz[i] === 'boolean') {
            // Menjamo element prosledjenog niza
            niz[i] = !niz[i];
        }
    }
}
// Demonstracija da je originalni niz zaista promenjen
console.log('Mesani niz pre poziva funkcije:   ' + mesani_niz);
negiraj_bulove_vrednosti(mesani_niz);
console.log('Mesani niz nakon poziva funkcije: ' + mesani_niz);

function izdvoji_samo_brojeve(niz) {
    const novi_niz = [];
    for (let i = 0; i < niz.length; ++i) {
        if (typeof niz[i] === 'number') {
            // Dodavanje jednog elementa na kraj niza
            novi_niz.push(niz[i]);
        }
    }
    return novi_niz;
}
const samo_brojevi = izdvoji_samo_brojeve(mesani_niz);
console.log('Niz sa brojevima od mesanog niza: ' + samo_brojevi);

function ukloni_poslednjih_n_elemenata(niz, n) {
    for (let i = 0; i < n; ++i) {
        // Uklanjanje jednog elementa sa kraja niza (tj. poslednjeg elementa)
        niz.pop();
    }
}
console.log('Niz brojeva pre uklanjanja 2 elementa:   ' + niz_brojeva);
ukloni_poslednjih_n_elemenata(niz_brojeva, 2);
console.log('Niz brojeva nakon uklanjanja 2 elementa: ' + niz_brojeva);

// Razbijanje niske po separatoru u elemente niza
let sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
let protein = sekvenca.split('-');
console.log('Kreirali smo niz aminokiselina: ' + protein);

// Nadovezivanje elemenata niza u nisku po separatoru
protein = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
sekvenca = protein.join('');
console.log('Kreirali smo proteinsku sekvencu: ' + sekvenca);

function napravi_2grame(niz) {
    const dvagrami = [];
    for (let i = 0; i < niz.length - 1; ++i) {
        // Izdvajanje podniza na osnovu datih indeksa a i b.
        // Podniz koji se dobija je iz intervala indeksa [a, b).
        const naredni_dvagram = niz.slice(i, i + 2);

        // Promenljiva naredni_dvagram je niz
        // Promenljiva dvagrami je niz
        // => Ubacujemo niz u niz
        // => Promenljiva dvagrami je visedimenzionalni niz
        dvagrami.push(naredni_dvagram);
    }
    return dvagrami;
}
const dvagrami = napravi_2grame(protein);
console.log('Proteinska sekvenca ' + sekvenca + ' ima ukupno ' + dvagrami.length + ' 2-grama i oni su:');
for (let i = 0; i < dvagrami.length; ++i) {
    console.log((i + 1) + '. 2-gram: ' + dvagrami[i]);
}

// Pronalazak elementa u nizu se vrsi metodom indexOf.
// Ako navedemo drugi argument metoda indexOf, 
// onda pretraga pocinje od tog indeksa umesto od pocetka niza.
let pozicija = protein.indexOf('g');
console.log('1. aminokiselina g se nalazi na poziciji ' + pozicija);
pozicija = protein.indexOf('g', pozicija + 1);
console.log('2. aminokiselina g se nalazi na poziciji ' + pozicija);
pozicija = protein.indexOf('g', pozicija + 1);
console.log('3. aminokiselina g se nalazi na poziciji ' + pozicija);

// Uporedjivanje nizova po jednakosti
const niz1 = ['a', 'b']; // Kreiramo novi niz od dva elementa i cuvamo njegovu referencu u niz1
const niz2 = ['a', 'b']; // Kreiramo novi niz od dva elementa i cuvamo njegovu referencu u niz2

console.log('Da li su nizovi jednaki?', niz1 == niz2);
// Izraz niz1 == niz2 ima vrednost false zato sto su niz1 i niz2 dve reference na razlicite nizove u memoriji.
// Ovu osobinu operatora == zovemo "plitka jednakost" (engl. shallow equality).
// Drugim recima, operator == ne gleda unutrasnjost nizova da bi odredio da li su jednaki,
// vec to moramo mi da implementiramo:
function da_li_su_jednaki(niz1, niz2) {
    const n = niz1.length;
    const m = niz2.length;

    if (n !== m) {
        return false;
    }

    for (let i = 0; i < n; ++i) {
        // Pretpostavka je da element nizova niz1 i niz2 nije neki drugi niz,
        // tj. da ti nizovi nisu visedimenzionalni
        if (niz1[i] !== niz2[i]) {
            return false;
        }
    }

    return true;
}
console.log('Da li su nizovi jednaki?', da_li_su_jednaki(niz1, niz2));

})();