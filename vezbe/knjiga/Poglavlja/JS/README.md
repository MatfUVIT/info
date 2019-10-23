[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

<script>
    function pregazi_console(indeks) {
        console = {
            log: function(...args) {
                const output = document.getElementById('output' + indeks);
                output.innerHTML += args.join(' ') + '<br>';
                output.style.fontFamily = 'Consolas, monospace';
            }
        };
    }
</script>

# 3. Programski jezik JavaScript

*JavaScript* predstavlja trenutno najpopularniji jezik za programiranje klijentskih aplikacija na vebu, ali njegova upotreba postaje sve popularnija i u savremenim razvojnim okruženjima za kreiranje serverskih aplikacija na vebu. S obzirom da on predstavlja osnovni alat za izgradnju dinamičkih veb stranica i serverskih aplikacija u ovoj knjizi, u ovom poglavlju ćemo se upoznati sa osnovnim elementima ovog programskog jezika. Pretpostavka je da je čitalac upoznat sa programskim jezikom C ili nekim drugim višim programskim jezikom.

## 3.1 Izvršavanje JavaScript koda

Pre nego što započnemo diskusiju o sintaksi i semantici programskog jezika JavaScript, potrebno je da razumemo kako je moguće da izvršimo izvorni kod koji budemo napisali. Postoji mnogo načina, a jedan od njih je putem veb pregledača. 

Kako je JavaScript prvenstveno namenjen za izrazu dinamičkih veb prezentacija, sasvim je prirodno da savremeni veb pregledači imaju alate za prevođenje izvornog koda napisanog u jeziku JavaScript i izvršavanje prevedenih naredbi. Deo veb pregledača koji se bavi ovim se naziva JavaScript *interpreter* (engl. *interpreter*). JavaScript interpreter tumači naš napisan izvorni kod i izvršava prevedene instrukcije u okviru veb pregledača. Nećemo ulaziti u detalje kako se tačno JavaScript kod prevodi.

Da bismo izvršili neki JavaScript kod u veb pregledaču, potrebno je da, kao i do sada, otvorimo .html datoteku koja u svojoj strukturi sadrži JavaScript kod. Međutim, taj kod se ne može javiti bilo gde u HTML kodu, već se mora navesti kao sadržaj elementa `script`, kao u narednom kodu:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>

<body>
    <script>
        // JavaScript kod ide ovde
        var x = 1;
    </script>
</body>

</html>
```

Element `script` se ipak može naći bilo gde u sadržaju elemenata `head` ili `body`. Štaviše, možemo imati više `script` elemenata, čiji se kodovi jednostavno nadovezuju jedni na druge. 

Alternativno, možemo JavaScript kod pisati u eksternoj datoteci sa ekstenzijom `js`. Ovakva datoteka se zatim uključuje u HTML kod ponovo pomoću elementa `script`, navođenjem putanje do te datoteke kao vrednost atributa `src`, kao u narednom kodu:

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>JavaScript</title>
</head>

<body>
    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
// JavaScript kod ide ovde
var x = 1;
```

Svi primeri u ovom poglavlju su organizovani tako da sadrže datoteku `index.html` koja učitava JavaScript kod iz datoteke `index.js`, kao u kodu iznad. Zbog toga, u narednim primerima navodimo isključivo sadržaj datoteke `index.js`.

U oba slučaja će veb pregledač, čim naiđe na element `script`, proslediti JavaScript kod JavaScript interpreteru koji taj kod odmah izvršava. Ovo je važna napomena koju uvek treba imati na umu. Ako postoji JavaScript kod koji menja neki deo veb stranice, onda je potrebno da je taj deo stranice definisan u HTML kodu pre tog JavaScript koda. U suprotnom, može doći do pojave grešaka.

## 3.2 Osnovni elementi jezika

Ova sekcija je posvećena prikazivanju osnovnih elemenata jezika JavaScript, kao što su tipovi podataka, literali, definisanju promenljivih, ispisivanju vrednosti u konzoli i poređenju vrednosti po jednakosti.

*JavaScript okruženje za izvršavanje* (engl. *engine*) nam omogućava bezbedno okruženje za izvršavanje koda. Sve definicije promenljivih, funkcija i dr. se izvršavaju u okviru ovog okruženja, odvojenog od operativnog sistema. Tako, na primer, naredni fragment koda kojim definišemo tri promenljive `x`, `y` i `z` čije su vrednosti literali odgovarajućih tipova, ove promenljive definiše u globalnom opsegu JavaScript okruženja za izvršavanje.

```js
var x = 1;       // Broj            - tip podataka "number"
let y = 'Niska'; // Niska           - tip podataka "string"
const z = true;  // Bulova vrednost - tip podataka "boolean"
```

Ključnim rečima `var` i `let` definišemo promenljive čije vrednosti kasnije možemo promeniti. Postoje suptilne razlike između opsega važenja promenljivih definisanih ovim ključnim rečima u koje nećemo ulaziti. Mi ćemo preferirati uvođenje promenljivih ključnom reči `let` u nastavku kursa, s obzirom da ona više oponaša pravila za opsege važenja promenljivih u programskom jeziku C.

Ključnom reči `const` definišemo konstante čija se vrednost dalje ne može menjati. Preciznije, konstantama nije moguće dodeliti druge vrednosti. Naredna linija proizvodi grešku koja je data pod komentarom, pod pretpostavkom da je `z` prethodno definisana kao konstanta (kao što je slučaj u kodu iznad).

```js
z = false; // Uncaught TypeError: Assignment to constant variable.
```

Kroz JavaScript okruženje za izvršavanje dostupan nam je specijalan objekat čiji je identifikator `console` i pomoću kojeg možemo pristupiti konzoli. Konzola predstavlja koncept sličan standardnom izlazu u programskom jeziku C. U veb pregledačima, konzola je dostupna kroz *alate za razvijače* (engl. *developer tools*). Na primer, u veb pregledaču Firefox je konzolu moguće otvoriti praćenjem narednih koraka:

   1. Otvoriti "Menu" (hamburger ikonica u gornjem desnom uglu)
   2. Odabrati "Web Developer"
   3. Odabrati "Web Console"

Slično, u veb pregledaču Chrome je potrebno ispratiti naredne korake:

   1. Otvoriti "Menu" (tri tačkice u gornjem desnom uglu)
   2. Odabrati "More tools"
   3. Odabrati "Developer tools"
   4. Odabrati "Console" tab

Svi primeri u ovom poglavlju koriste konzolu za prikazivanje rezultata tako da ju je neophodno otvoriti prilikom otvaranja primera u veb pregledaču.

Ispisivanje na konzolu se radi pozivom *metoda* (engl. *method*) `log` nad `console` objektom, kao u narednom kodu. Možemo ispisati koliko god želimo promenljivih, literala, i dr. razdvojenih karakterom zapete. Jedan poziv ovog metoda ispisuje vrednosti, prosleđene kao argumente metoda, u jednoj liniji.

```js
console.log(x, y, z, 2, 'Druga niska', false);
```

Metodi su specijalne funkcije koje su definisane u okviru objekata umesto u globalnom opsegu. Prethodno opisani metod `log` ne postoji sam za sebe, već je dostupan isključivo kroz objekat `console`, upravo zato sto je definisan u okviru tog objekta. Naredna linija proizvodi grešku koja je data pod komentarom.

```js
// Uncaught ReferenceError: log is not defined
log('Pokusavam da ispisem tekst u konzolu "funkcijom" log');
```

Prikaz konzole za primer 1:
<div id="output1"></div>
<script>pregazi_console(1);</script>
<script src="./Primeri/1/index.js"></script>

Kao što smo videli, promenljive definišemo ključnom reči `let` dok konstante definišemo ključnom reči `const`. Međutim, nigde nismo naveli koji je tip promenljive koji se koristi. Zapravo, za ovim nema ni potrebe zato što JavaScript okruženje za izvršavanje automatski prepoznati koji je tip vrednosti koja se dodeljuje promenljivoj ili konstanti. Tip promenljive se moze odrediti unarnim operatorom `typeof`. Njegova vrednost je niska sa nazivom tipa.

```js
var x = 1;
let y = 'Niska';
console.log('x =', x, 'y =', y);

console.log('Tip od x:', typeof x);
console.log('Tip od y:', typeof y);
```

Štaviše, jedna promenljiva može imati vrednost jednog tipa, a kasnije dobiti vrednosti drugog tipa. Ova osobina jezika JavaScript se naziva *dinamička tipiziranost* (engl. *dynamically typed language*). 

```js
y = 2;
console.log('y =', y, '\nTip od y:', typeof y);
y = false;
console.log('y =', y, '\nTip od y:', typeof y);
```

Prikaz konzole za primer 2:
<div id="output2"></div>
<script>pregazi_console(2);</script>
<script src="./Primeri/2/index.js"></script>

```js
// Poredjenje dve vrednosti po jednakosti se moze vrsiti na dva nacina.

// Operator == ne uzima u obzir tip vrednosti koje se porede,
// vec je njegova vrednost true ako se vrednosti mogu konvertovati jedna u drugu.
console.log('Operator ==');
console.log('0 == false <=>', 0 == false);
console.log('42 == \'42\' <=>', 42 == '42');
console.log('1 == "jedan" <=>', 1 == 'jedan');
// Operator === zahteva da vrednosti imaju i isti tip i istu vrednost.
console.log("Operator ===");
console.log("0 === false <=>", 0 === false);
console.log("42 === '42' <=>", 42 === '42');
console.log("1 === 'jedan' <=>", 1 === 'jedan');
console.log("0 === 0 <=>", 0 === 0);
console.log("false === false <=>", false === false);
console.log("'jedan' === \"jedan\" <=>", 'jedan' === "jedan");

// Ovaj kod takodje demonstrira kako mozemo ugnezdjavati niske jednu u drugu
// kao i kako mozemo oznaciti (engl. escape) navodnike unutar niski (koriscenjem \' i \").
```

Prikaz konzole za primer 3:
<div id="output3"></div>
<script>pregazi_console(3);</script>
<script src="./Primeri/3/index.js"></script>

## 3.3 Rad sa brojevima i niskama

```js
// Osnovne operacije nad osnovnim tipovima podataka number i string
// Tip number
console.log('\nRadimo sa tipom number...\n\n');

const duza_stranica = 15;
const kraca_stranica = 2.5;

const obim = 2 * duza_stranica + 2 * kraca_stranica;
console.log('Obim pravougaonika je:', obim);

const povrsina = duza_stranica * kraca_stranica;
console.log('Povrsina pravougaonika je:', povrsina);

let generisani_broj = Math.random();
console.log('Generisani broj iz intervala [0, 1) je:', generisani_broj);
generisani_broj = Math.floor(Math.random() * 100 + 50);
console.log('Generisani broj iz celobrojnog intervala [50, 150) je:', generisani_broj);

// Tip string
console.log('\nRadimo sa tipom string...\n\n');

const prva_rec = 'Ovo';
const druga_rec = 'je';
const treca_rec = 'recenica';

const cela_recenica = prva_rec + ' ' + druga_rec + ' ' + treca_rec + '.';
console.log(cela_recenica);

const broj_karaktera = cela_recenica.length;
console.log('Broj karaktera u recenici je', broj_karaktera);

let pozicija = cela_recenica.indexOf('recenica');
console.log('Pozicija niske "recenica" u recenici je:', pozicija);
pozicija = cela_recenica.indexOf('nepostojeca niska');
console.log('Pozicija niske "nepostojeca niska" u recenici je:', pozicija);

const podniska = cela_recenica.slice(7, cela_recenica.length);
console.log('Podniska recenice od indeksa 7 do kraja niske:', podniska);
// Pogledati razlike izmedju slice, substr i substring za domaci

const izmenjena_recenica = cela_recenica.replace('recenica', 'nesto duza recenica');
console.log(izmenjena_recenica);

const sva_velika_slova = cela_recenica.toUpperCase();
console.log(sva_velika_slova);
const sva_mala_slova = cela_recenica.toLowerCase();
console.log(sva_mala_slova);

const recenica_sa_vodecim_belinama = '  \n  \t    \n  \t\t\t   ' + cela_recenica + '   \n\n';
console.log('Recenica sa vodecim belinama:', recenica_sa_vodecim_belinama);
const osisana_recenica = recenica_sa_vodecim_belinama.trim();
console.log('Osisana recenica:', osisana_recenica);

const prvi_karakter = cela_recenica.charAt(0);
const poslednji_karakter = cela_recenica.charAt(cela_recenica.length - 1);
console.log('Prvi karakter je "' + prvi_karakter + '", a poslednji karakter je "' + poslednji_karakter + '"');

// Konverzija izmedju number i string
console.log('\nRadimo sa eksplicitnim konverzijama izmedju number i string...\n\n');

let celi_broj = 42;
let celi_broj_kao_niska = celi_broj.toString();
console.log('Vrednost ' + celi_broj +
    ' koja je tipa ' + typeof celi_broj +
    ' zapisana u tipu ' + typeof celi_broj_kao_niska +
    ' je ' + celi_broj_kao_niska);

celi_broj_kao_niska = '7';
celi_broj = Number.parseInt(celi_broj_kao_niska);
console.log('Vrednost ' + celi_broj_kao_niska +
    ' koja je tipa ' + typeof celi_broj_kao_niska +
    ' zapisana u tipu ' + typeof celi_broj +
    ' je ' + celi_broj);

const broj_u_pokretnom_zarezu_kao_niska = '3.14';
const broj_u_pokretnom_zarezu = Number.parseFloat(broj_u_pokretnom_zarezu_kao_niska);
console.log('Vrednost ' + broj_u_pokretnom_zarezu_kao_niska +
    ' koja je tipa ' + typeof broj_u_pokretnom_zarezu_kao_niska +
    ' zapisana u tipu ' + typeof broj_u_pokretnom_zarezu +
    ' je ' + broj_u_pokretnom_zarezu);

const neuspesna_konverzija_1 = Number.parseInt('jedan');
const neuspesna_konverzija_2 = Number.parseInt('dva');
console.log('Vrednost neuspesne konverzije 1 je ' + neuspesna_konverzija_1);
console.log('Vrednost neuspesne konverzije 2 je ' + neuspesna_konverzija_2);
console.log('Da li dve NaN vrednosti mogu biti jednake?', neuspesna_konverzija_1 == neuspesna_konverzija_2);
console.log('Provera da li je vrednost NaN:', Number.isNaN(neuspesna_konverzija_1));
```

Prikaz konzole za primer 4:
<div id="output4"></div>
<script>pregazi_console(4);</script>
<script src="./Primeri/4/index.js"></script>

## 3.4 Rad sa funkcijama i kontrolama toka izbora

```js
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
```

Prikaz konzole za primer 5:
<div id="output5"></div>
<script>pregazi_console(5);</script>
<script src="./Primeri/5/index.js"></script>

## 3.5 Rad sa nizovima i ponavljajucim kontrolama toka

```js
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
```

Prikaz konzole za primer 6:
<div id="output6"></div>
<script>pregazi_console(6);</script>
<script src="./Primeri/6/index.js"></script>

-----

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->

<!--
Prikaz konzole za primer X:
<div id="outputX"></div>
<script>pregazi_console(X);</script>
<script src="./Primeri/X/index.js"></script>
-->

<!-- 
<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/X/index.html"
   target="_blank">Pogledaj primer uživo</a>
-->