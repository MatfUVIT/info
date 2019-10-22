(function(){

// Rad sa funkcijama i kontrolama toka izbora

// Definicija funkcije
function najveca_vrednost(x, y) {
    return x > y ? x : y;
}

console.log('Tip funkcija je ' + typeof najveca_vrednost);

const maksimum = najveca_vrednost(-1, 1);
console.log('Veca vrednost je ' + maksimum);

// Dodeljivanje anonimne funkcije (funkcije bez imena) promenljivoj
const ispisi_argument = function (arg) {
    console.log(arg);
}; // Primetimo tacku-zapetu ovde! Ona je obavezna jer je ovo naredba dodeljivanja

const rezultat = ispisi_argument(7);
console.log('Povratna vrednost funkcije koja nema return naredbu je ' + rezultat);
console.log('Tip povratne vrednosti funkcije koja nema return naredbu je ' + typeof rezultat);

const prazna_promenljiva = undefined;
const nistavna_promenljiva = null;

if (prazna_promenljiva == nistavna_promenljiva) {
    console.log('Vrednosti undefined i null SE MOGU implicitno konvertovati jedna u drugu');
}
else {
    console.log('Vrednosti undefined i null SE NE MOGU implicitno konvertovati jedna u drugu');
}

if (prazna_promenljiva === nistavna_promenljiva) {
    console.log('Vrednosti undefined i null JESU jednake i po vrednosti i po tipu');
}
else {
    console.log('Vrednosti undefined i null NISU jednake i po vrednosti i po tipu');
}

// Funkcije su takodje podaci, kao i brojevi, niske, itd.
// Tako da ih mozemo prosledjivati kao argumente funkcija, na primer:
function pozovi_funkciju_sa_argumentom(funkcija, argument) {
    if (typeof funkcija === 'function') {
        const ime_funkcije = funkcija.name;
        console.log('Pozivam funkciju ' + ime_funkcije + '...');
        funkcija(argument);
        console.log('Zavrsio sam poziv funkcije ' + ime_funkcije + '...');
    }
    else {
        console.log('Prvi argument bi trebalo da bude funkcija, a Vi ste prosledili ' + typeof funkcija);
    }
}

pozovi_funkciju_sa_argumentom(ispisi_argument, 'arg');

const nesto_sto_nije_funkcija = 0;
pozovi_funkciju_sa_argumentom(nesto_sto_nije_funkcija, 'arg');

})();