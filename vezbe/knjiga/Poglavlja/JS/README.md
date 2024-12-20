[Vežbe](../../../README.md)

[Knjiga](../../README.md)

---

<style>
.domaci-zadatak {
    border: 5px solid gold;
    padding: 10px;
    margin-bottom: 20px;
}

.domaci-zadatak .naslov {
    font-weight: bold;
    text-align: center;
    display: block;
}

.domaci-zadatak .tekst {
    border-top: 2px dashed black;
    border-bottom: 2px dashed black;
    padding-top: 10px;
    padding-bottom: 10px;
}
</style>

<script>
    function pregazi_console(indeks) {
        console = {
            log: function(...args) {
                // Postavljamo novi element za konzolu
                const output = document.getElementById('output' + indeks);
                // Zamenjujemo nove redove <br> elementom
                args = args.map(val => val.toString().replace(new RegExp('\n', 'g'), '<br>'));
                // Zamenjujemo tabove sa 4 razmaka
                args = args.map(val => val.toString().replace(new RegExp('\t', 'g'), '&nbsp;&nbsp;&nbsp;&nbsp;'));
                // Spajamo sve argumente u jednu nisku sa razmakom kao delimiterom
                // i to dodajemo kao HTML sadrzaj elementu
                output.innerHTML += args.join(' ') + '<br>';
                // Postavljamo stil za konzolu
                output.style.fontFamily = 'Consolas, monospace';
                output.style.border = '5px solid lightgray';
                output.style.marginTop = '10px';
                output.style.padding = '10px';
                output.style.fontSize = '11pt';
                output.style.backgroundColor = 'ghostwhite';
            }
        };
    }
</script>

# 4. Programski jezik JavaScript

_JavaScript_ predstavlja trenutno najpopularniji jezik za programiranje klijentskih aplikacija na vebu, ali njegova upotreba postaje sve popularnija i u savremenim razvojnim okruženjima za kreiranje serverskih aplikacija na vebu. S obzirom da on predstavlja osnovni alat za izgradnju dinamičkih veb stranica i serverskih aplikacija u ovoj knjizi, u ovom poglavlju ćemo se upoznati sa osnovnim elementima ovog programskog jezika. Pretpostavka je da je čitalac upoznat sa programskim jezikom C ili nekim drugim višim programskim jezikom.

## 4.1 Izvršavanje JavaScript koda

Pre nego što započnemo diskusiju o sintaksi i semantici programskog jezika JavaScript, potrebno je da razumemo kako je moguće da izvršimo izvorni kod koji budemo napisali. Postoji mnogo načina, a jedan od njih je putem veb pregledača.

Kako je JavaScript prvenstveno namenjen za izrazu dinamičkih veb prezentacija, sasvim je prirodno da savremeni veb pregledači imaju alate za prevođenje izvornog koda napisanog u jeziku JavaScript i izvršavanje prevedenih naredbi. Deo veb pregledača koji se bavi ovim se naziva JavaScript _interpreter_ (engl. _interpreter_). JavaScript interpreter tumači naš napisan izvorni kod i izvršava prevedene instrukcije u okviru veb pregledača. Nećemo ulaziti u detalje kako se tačno JavaScript kod prevodi.

Da bismo izvršili neki JavaScript kod u veb pregledaču, potrebno je da, kao i do sada, otvorimo .html datoteku koja u svojoj strukturi sadrži JavaScript kod. Međutim, taj kod se ne može javiti bilo gde u HTML kodu, već se mora navesti kao sadržaj elementa `script`, kao u narednom kodu:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
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
    <meta charset="UTF-8" />
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

## 4.2 Osnovni elementi jezika

Ova sekcija je posvećena prikazivanju osnovnih elemenata jezika JavaScript, kao što su tipovi podataka, literali, definisanju promenljivih, ispisivanju vrednosti u konzoli i poređenju vrednosti po jednakosti.

_JavaScript okruženje za izvršavanje_ (engl. _engine_) nam omogućava bezbedno okruženje za izvršavanje koda. Sve definicije promenljivih, funkcija i dr. se izvršavaju u okviru ovog okruženja, odvojenog od operativnog sistema. Tako, na primer, naredni fragment koda kojim definišemo tri promenljive `x`, `y` i `z` čije su vrednosti literali odgovarajućih tipova, ove promenljive definiše u globalnom opsegu JavaScript okruženja za izvršavanje.

```js
var x = 1; // Broj            - tip podataka "number"
let y = 'Niska'; // Niska           - tip podataka "string"
const z = true; // Bulova vrednost - tip podataka "boolean"
```

Ključnim rečima `var` i `let` definišemo promenljive čije vrednosti kasnije možemo promeniti. Postoje suptilne razlike između opsega važenja promenljivih definisanih ovim ključnim rečima u koje nećemo ulaziti. Mi ćemo preferirati uvođenje promenljivih ključnom reči `let` u nastavku kursa, s obzirom da ona više oponaša pravila za opsege važenja promenljivih u programskom jeziku C.

Ključnom reči `const` definišemo konstante čija se vrednost dalje ne može menjati. Preciznije, konstantama nije moguće dodeliti druge vrednosti. Naredna linija proizvodi grešku koja je data pod komentarom, pod pretpostavkom da je `z` prethodno definisana kao konstanta (kao što je slučaj u kodu iznad).

```js
z = false; // Uncaught TypeError: Assignment to constant variable.
```

Kroz JavaScript okruženje za izvršavanje dostupan nam je specijalan objekat čiji je identifikator `console` i pomoću kojeg možemo pristupiti konzoli. Konzola predstavlja koncept sličan standardnom izlazu u programskom jeziku C. U veb pregledačima, konzola je dostupna kroz _alate za razvijače_ (engl. _developer tools_). Na primer, u veb pregledaču Firefox je konzolu moguće otvoriti praćenjem narednih koraka:

1.  Otvoriti "Menu" (hamburger ikonica u gornjem desnom uglu)
2.  Odabrati "Web Developer"
3.  Odabrati "Web Console"

Slično, u veb pregledaču Chrome je potrebno ispratiti naredne korake:

1.  Otvoriti "Menu" (tri tačkice u gornjem desnom uglu)
2.  Odabrati "More tools"
3.  Odabrati "Developer tools"
4.  Odabrati "Console" tab

Svi primeri u ovom poglavlju koriste konzolu za prikazivanje rezultata tako da ju je neophodno otvoriti prilikom otvaranja primera u veb pregledaču.

Ispisivanje na konzolu se radi pozivom _metoda_ (engl. _method_) `log` nad `console` objektom, kao u narednom kodu. Možemo ispisati koliko god želimo promenljivih, literala, i dr. razdvojenih karakterom zapete. Jedan poziv ovog metoda ispisuje vrednosti, prosleđene kao argumente metoda, u jednoj liniji.

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

Štaviše, jedna promenljiva može imati vrednost jednog tipa, a kasnije dobiti vrednosti drugog tipa. Ova osobina jezika JavaScript se naziva _dinamička tipiziranost_ (engl. _dynamically typed language_).

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

Poređenje vrednosti po različitim kriterijumima se postiže korišćenjem odgovarajućih operatora kao što su `>`, `>=`, `<` i `<=`. Međutim, poređenje vrednosti po jednakosti (i po nejednakosti) zahteva posebnu pažnju kada je programski jezik JavaScript u pitanju.

Poređenje dve vrednosti po jednakosti se može vršiti na dva načina. Operator `==` ne uzima u obzir tip vrednosti koje se porede, već je njegova vrednost `true` ako se vrednosti koje se upoređuju mogu konvertovati jedna u drugu, a `false` inače. Sa druge strane, operator `===` zahteva da vrednosti imaju i isti tip i istu vrednost. Naredni primer ilustruje upoređivanje po jednakosti brojeva, niski i Bulovih vrednosti korišćenjem ovih operatora.

```js
console.log('Operator ==');

console.log('0 == false <=>', 0 == false);
console.log("42 == '42' <=>", 42 == '42');
console.log('1 == "jedan" <=>', 1 == 'jedan');

console.log('Operator ===');

console.log('0 === false <=>', 0 === false);
console.log("42 === '42' <=>", 42 === '42');
console.log("1 === 'jedan' <=>", 1 === 'jedan');
console.log('0 === 0 <=>', 0 === 0);
console.log('false === false <=>', false === false);
console.log('\'jedan\' === "jedan" <=>', 'jedan' === 'jedan');

// Ovaj kod takodje demonstrira kako mozemo ugnezdjavati niske jednu u drugu
// kao i kako mozemo oznaciti (engl. escape) navodnike unutar niski (koriscenjem \' i \").
```

Prikaz konzole za primer 3:

<div id="output3"></div>
<script>pregazi_console(3);</script>
<script src="./Primeri/3/index.js"></script>

## 4.3 Rad sa brojevima i niskama

U ovoj sekciji ćemo demonstrirati osnovni rad sa brojevima i niskama kroz nekoliko zadataka. Podsetimo se da svi brojevi imaju tip `'number'` dok niske imaju tip `'string'`.

> Zadatak 1: U konzoli ispisati obim i površinu pravougaonika čija je duža stranica `15cm`, a kraća stranica `2.5cm`.

```js
const duza_stranica = 15;
const kraca_stranica = 2.5;

const obim = 2 * duza_stranica + 2 * kraca_stranica;
console.log('Obim pravougaonika je:', obim);

const povrsina = duza_stranica * kraca_stranica;
console.log('Povrsina pravougaonika je:', povrsina);
```

<div id="output4"></div>
<script>pregazi_console(4);</script>
<script>
(function(){
    const duza_stranica = 15;
    const kraca_stranica = 2.5;

    const obim = 2 * duza_stranica + 2 * kraca_stranica;
    console.log('Obim pravougaonika je:', obim);

    const povrsina = duza_stranica * kraca_stranica;
    console.log('Povrsina pravougaonika je:', povrsina);

})();
</script>

> Zadatak 2: U konzoli ispisati jedan pseudo-slučajni broj iz intervala [0, 1) i jedan pseudo-slučajni broj iz intervala [50, 150).

```js
let generisani_broj = Math.random();
console.log('Generisani broj iz intervala [0, 1) je:', generisani_broj);
generisani_broj = Math.floor(Math.random() * 100 + 50);
console.log(
  'Generisani broj iz celobrojnog intervala [50, 150) je:',
  generisani_broj
);
```

<div id="output5"></div>
<script>pregazi_console(5);</script>
<script>
(function(){
    
})();
</script>

> Zadatak 3: Date su tri reči zapisane kao niske: `'Ovo'`, `'je'` i `'recenica'`.<br>
> &nbsp;&nbsp;&nbsp;a. Spojiti date reči u jednu rečenicu (nisku) sa razmacima između reči i ispisati je u konzoli.<br>
> &nbsp;&nbsp;&nbsp;b. Ispisati u konzoli broj karaktera u rečenici.<br>
> &nbsp;&nbsp;&nbsp;c. Pronaći poziciju podniske `'recenica'` u rečenici. Pronaći poziciju podniske `'nepostojeca niska'`. Ispisati ove pozicije u konzoli.<br>
> &nbsp;&nbsp;&nbsp;d. Ispisati podnisku rečenice koja se nalazi na poziciji `7` do kraja niske.<br>
> &nbsp;&nbsp;&nbsp;e. Ispisati u konzoli novu rečenicu koja se dobija tako što se podniska `'recenica'` zamenjuje podniskom `'nesto duza recenica'`.<br>
> &nbsp;&nbsp;&nbsp;f. Ispisati u konzoli niske koje se dobijaju kada se sva slova u rečenici pretvore u velika, odnosno, mala slova.<br>
> &nbsp;&nbsp;&nbsp;g. Ispisati u konzoli rečenicu koja se dobija tako što se početnoj rečenici dodaju karakteri belina na početak i kraj. Ispisati u konzoli rečenicu koja se dobija tako što se kreiranoj rečenici ukidaju beline sa početka i kraja.<br>
> &nbsp;&nbsp;&nbsp;h. Ispisati u konzoli prvi i poslednji karakter rečenice.

```js
const prva_rec = 'Ovo';
const druga_rec = 'je';
const treca_rec = 'recenica';

// a
const cela_recenica = prva_rec + ' ' + druga_rec + ' ' + treca_rec + '.';
console.log(cela_recenica);

// b
const broj_karaktera = cela_recenica.length;
console.log('Broj karaktera u recenici je', broj_karaktera);

// c
let pozicija = cela_recenica.indexOf('recenica');
console.log('Pozicija niske "recenica" u recenici je:', pozicija);
pozicija = cela_recenica.indexOf('nepostojeca niska');
console.log('Pozicija niske "nepostojeca niska" u recenici je:', pozicija);

// d
const podniska = cela_recenica.slice(7, cela_recenica.length);
console.log('Podniska recenice od indeksa 7 do kraja niske:', podniska);
// Pogledati razlike izmedju slice, substr i substring za domaci

// e
const izmenjena_recenica = cela_recenica.replace(
  'recenica',
  'nesto duza recenica'
);
console.log(izmenjena_recenica);

// f
const sva_velika_slova = cela_recenica.toUpperCase();
console.log(sva_velika_slova);
const sva_mala_slova = cela_recenica.toLowerCase();
console.log(sva_mala_slova);

// g
const recenica_sa_vodecim_belinama =
  '  \n  \t    \n  \t\t\t   ' + cela_recenica + '   \n\n';
console.log('Recenica sa vodecim belinama:', recenica_sa_vodecim_belinama);
const osisana_recenica = recenica_sa_vodecim_belinama.trim();
console.log('Osisana recenica:', osisana_recenica);

// h
const prvi_karakter = cela_recenica.charAt(0);
const poslednji_karakter = cela_recenica.charAt(cela_recenica.length - 1);
console.log(
  'Prvi karakter je "' +
    prvi_karakter +
    '", a poslednji karakter je "' +
    poslednji_karakter +
    '"'
);
```

<div id="output6"></div>
<script>pregazi_console(6);</script>
<script>
(function(){
    const prva_rec = 'Ovo';
    const druga_rec = 'je';
    const treca_rec = 'recenica';

    // a
    const cela_recenica = prva_rec + ' ' + druga_rec + ' ' + treca_rec + '.';
    console.log(cela_recenica);

    // b
    const broj_karaktera = cela_recenica.length;
    console.log('Broj karaktera u recenici je', broj_karaktera);

    // c
    let pozicija = cela_recenica.indexOf('recenica');
    console.log('Pozicija niske "recenica" u recenici je:', pozicija);
    pozicija = cela_recenica.indexOf('nepostojeca niska');
    console.log('Pozicija niske "nepostojeca niska" u recenici je:', pozicija);

    // d
    const podniska = cela_recenica.slice(7, cela_recenica.length);
    console.log('Podniska recenice od indeksa 7 do kraja niske:', podniska);
    // Pogledati razlike izmedju slice, substr i substring za domaci

    // e
    const izmenjena_recenica = cela_recenica.replace('recenica', 'nesto duza recenica');
    console.log(izmenjena_recenica);

    // f
    const sva_velika_slova = cela_recenica.toUpperCase();
    console.log(sva_velika_slova);
    const sva_mala_slova = cela_recenica.toLowerCase();
    console.log(sva_mala_slova);

    // g
    const recenica_sa_vodecim_belinama = '  \n  \t    \n  \t\t\t   ' + cela_recenica + '   \n\n';
    console.log('Recenica sa vodecim belinama:', recenica_sa_vodecim_belinama);
    const osisana_recenica = recenica_sa_vodecim_belinama.trim();
    console.log('Osisana recenica:', osisana_recenica);

    // h
    const prvi_karakter = cela_recenica.charAt(0);
    const poslednji_karakter = cela_recenica.charAt(cela_recenica.length - 1);
    console.log('Prvi karakter je "' + prvi_karakter + '", a poslednji karakter je "' + poslednji_karakter + '"');
    })();

</script>

> Zadatak 4: Neka je dat broj `42`. Konvertovati ovaj broj u nisku, a zatim u konzoli ispisati vrednosti datog broja i kreirane niske, kao i njihove tipove.

```js
let celi_broj = 42;
let celi_broj_kao_niska = celi_broj.toString();
console.log(
  'Vrednost ' +
    celi_broj +
    ' koja je tipa ' +
    typeof celi_broj +
    ' zapisana u tipu ' +
    typeof celi_broj_kao_niska +
    ' je ' +
    celi_broj_kao_niska
);
```

<div id="output7"></div>
<script>pregazi_console(7);</script>
<script>
(function(){
    let celi_broj = 42;
    let celi_broj_kao_niska = celi_broj.toString();
    console.log('Vrednost ' + celi_broj +
        ' koja je tipa ' + typeof celi_broj +
        ' zapisana u tipu ' + typeof celi_broj_kao_niska +
        ' je ' + celi_broj_kao_niska);
})();
</script>

> Zadatak 5: Neka su date niske `'7'` i `'3.14'`. Konvertovati ove niske u celi broj, odnosno, broj u pokretnom zarezu redom, a zatim u konzoli ispisati vrednosti datih niski i kreiranih brojeva, kao i njihove tipove.

```js
celi_broj_kao_niska = '7';
celi_broj = Number.parseInt(celi_broj_kao_niska);
console.log(
  'Vrednost ' +
    celi_broj_kao_niska +
    ' koja je tipa ' +
    typeof celi_broj_kao_niska +
    ' zapisana u tipu ' +
    typeof celi_broj +
    ' je ' +
    celi_broj
);

const broj_u_pokretnom_zarezu_kao_niska = '3.14';
const broj_u_pokretnom_zarezu = Number.parseFloat(
  broj_u_pokretnom_zarezu_kao_niska
);
console.log(
  'Vrednost ' +
    broj_u_pokretnom_zarezu_kao_niska +
    ' koja je tipa ' +
    typeof broj_u_pokretnom_zarezu_kao_niska +
    ' zapisana u tipu ' +
    typeof broj_u_pokretnom_zarezu +
    ' je ' +
    broj_u_pokretnom_zarezu
);
```

<div id="output8"></div>
<script>pregazi_console(8);</script>
<script>
(function(){
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

})();
</script>

> Zadatak 6: Neka su date niske `'jedan'` i `'dva'`. Konvertovati ove niske u cele brojeve i ispisati njihove vrednosti u konzoli. Da li su dobijene vrednosti jednake ako se koristi operator poređenja po jednakosti?

```js
const neuspesna_konverzija_1 = Number.parseInt('jedan');
const neuspesna_konverzija_2 = Number.parseInt('dva');
console.log('Vrednost neuspesne konverzije 1 je ' + neuspesna_konverzija_1);
console.log('Vrednost neuspesne konverzije 2 je ' + neuspesna_konverzija_2);
console.log(
  'Da li dve NaN vrednosti mogu biti jednake?',
  neuspesna_konverzija_1 == neuspesna_konverzija_2
);
console.log(
  'Provera da li je vrednost NaN:',
  Number.isNaN(neuspesna_konverzija_1)
);
```

<div id="output9"></div>
<script>pregazi_console(9);</script>
<script>
(function(){
    const neuspesna_konverzija_1 = Number.parseInt('jedan');
    const neuspesna_konverzija_2 = Number.parseInt('dva');
    console.log('Vrednost neuspesne konverzije 1 je ' + neuspesna_konverzija_1);
    console.log('Vrednost neuspesne konverzije 2 je ' + neuspesna_konverzija_2);
    console.log('Da li dve NaN vrednosti mogu biti jednake?', neuspesna_konverzija_1 == neuspesna_konverzija_2);
    console.log('Provera da li je vrednost NaN:', Number.isNaN(neuspesna_konverzija_1));
})();
</script>

Postoji još jedan tip zapisivanja niski u jeziku JavaScript; u pitanju su _šablon-literali_ (engl. _template literal_). Šablon-literali se navode između "iskošenih navodnika" (karakter \`). Šablon-literali imaju neka zanimljiva svojstva. Na primer, u njima se mogu zapisati višelinijski tekstovi, ali i ugnežđavati izrazi, te mogu biti veoma korisni. Naredni primer ilustruje ove opisane osobine:

```js
// Naredne 3 linije koda se efektivno mogu posmatrati kao jedna linija koda,
// pri čemu će dati tekst u konzoli biti zaista ispisan u više linija.
console.log(`Korišćenjem šablon-literala
                tekst se može prelamati u više linija
što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika`);

console.log(`Vrednost izraza 2 + 2 je ${2 + 2}`); // 'Vrednost izraza 2 + 2 je 4'
```

<div id="output9b"></div>
<script>pregazi_console('9b');</script>
<script>
(function(){
    // Naredne 3 linije koda se efektivno mogu posmatrati kao jedna linija koda,
    // pri čemu će dati tekst u konzoli biti zaista ispisan u više linija.
    console.log(`Korišćenjem šablon-literala
                    tekst se može prelamati u više linija
    što nije moguće uraditi korišćenjem jednostrukih ili dvostrukih navodnika`);

    console.log(`Vrednost izraza 2 + 2 je ${2 + 2}`); // 'Vrednost izraza 2 + 2 je 4'
    })();

</script>

## 4.4 Rad sa funkcijama, nedostajućim vrednostima i kontrolama toka izbora

U ovoj sekciji ćemo demonstrirati osnovni rad sa funkcijama, nedostajućim vrednostima i kontrolama toka izbora kroz nekoliko zadataka.

> Zadatak 7: Definisati funkciju `najveca_vrednost` koja prihvata dva argumenta i vraća veću od dve vrednosti. Iskoristiti definisanu funkciju za određivanje tipa svih funkcija. Ispisati u konzoli veću od vrednosti `-1` i `1`.

```js
function najveca_vrednost(x, y) {
  return x > y ? x : y;
}

console.log('Tip funkcija je ' + typeof najveca_vrednost);

const maksimum = najveca_vrednost(-1, 1);
console.log('Veca vrednost je ' + maksimum);
```

<div id="output10"></div>
<script>pregazi_console(10);</script>
<script>
(function(){
    function najveca_vrednost(x, y) {
        return x > y ? x : y;
    }

    console.log('Tip funkcija je ' + typeof najveca_vrednost);

    const maksimum = najveca_vrednost(-1, 1);
    console.log('Veca vrednost je ' + maksimum);

})();
</script>

> Zadatak 8: Definisati funkciju bez imena (tzv. _anonimnu funkciju_) i dodeliti je promenljivoj `ispisi_argument`. Funkcija prihvata jedan argument koji ispisuje u konzoli. Pozvati promenljivu `ispisi_argument` kao funkciju i proslediti joj vrednost `7`. Sačuvati povratnu vrednost funkcije u promenljivu. Da li je poziv funkcije uspeo? Ispisati u konzoli povratnu vrednost funkcije kao i njen tip.

```js
const ispisi_argument = function (arg) {
  console.log(arg);
}; // Primetimo tacku-zapetu ovde! Ona je obavezna jer je ovo naredba dodeljivanja

const rezultat = ispisi_argument(7);
console.log(
  'Povratna vrednost funkcije koja nema return naredbu je ' + rezultat
);
console.log(
  'Tip povratne vrednosti funkcije koja nema return naredbu je ' +
    typeof rezultat
);
```

<div id="output11"></div>
<script>pregazi_console(11);</script>
<script>
(function(){
    const ispisi_argument = function (arg) {
        console.log(arg);
    }; // Primetimo tacku-zapetu ovde! Ona je obavezna jer je ovo naredba dodeljivanja

    const rezultat = ispisi_argument(7);
    console.log('Povratna vrednost funkcije koja nema return naredbu je ' + rezultat);
    console.log('Tip povratne vrednosti funkcije koja nema return naredbu je ' + typeof rezultat);

})();
</script>

> Zadatak 9: Kreirati dve promenljive i dodeliti im vrednosti `undefined` i `null`, redom. Ispitati jednakost između ovih vrednosti korišćenjem operatora `==` i `===`.

```js
const prazna_promenljiva = undefined;
const nistavna_promenljiva = null;

if (prazna_promenljiva == nistavna_promenljiva) {
  console.log(
    'Vrednosti undefined i null SE MOGU implicitno konvertovati jedna u drugu'
  );
} else {
  console.log(
    'Vrednosti undefined i null SE NE MOGU implicitno konvertovati jedna u drugu'
  );
}

if (prazna_promenljiva === nistavna_promenljiva) {
  console.log(
    'Vrednosti undefined i null JESU jednake i po vrednosti i po tipu'
  );
} else {
  console.log(
    'Vrednosti undefined i null NISU jednake i po vrednosti i po tipu'
  );
}
```

<div id="output12"></div>
<script>pregazi_console(12);</script>
<script>
(function(){
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

})();
</script>

> Zadatak 10: Definisati funkciju `pozovi_funkciju_sa_argumentom` koja prihvata dva parametra. Prvi parametar treba da predstavlja funkciju, a drugi treba da predstavlja argument te funkcije. U slučaju da je prvi parametar funkcija, ispisati u konzoli njeno ime, a zatim je pozvati i proslediti joj drugi parametar funkcije. U suprotnom, ispisati u konzoli poruku o grešci koja sadrži tip prvog parametra. Testirati napisanu funkciju tako što joj se prosleđuje neka funkcija i proizvoljni argument, a zatim neka vrednost koja nije funkcija i proizvoljni argument.

```js
function pozovi_funkciju_sa_argumentom(funkcija, argument) {
  if (typeof funkcija === 'function') {
    const ime_funkcije = funkcija.name;
    console.log('Pozivam funkciju ' + ime_funkcije + '...');
    funkcija(argument);
    console.log('Zavrsio sam poziv funkcije ' + ime_funkcije + '...');
  } else {
    console.log(
      'Prvi argument bi trebalo da bude funkcija, a Vi ste prosledili ' +
        typeof funkcija
    );
  }
}

// Pretpostavka je da je dostupna gore implementirana funkcija ispisi_argument
pozovi_funkciju_sa_argumentom(ispisi_argument, 'arg');

const nesto_sto_nije_funkcija = 0;
pozovi_funkciju_sa_argumentom(nesto_sto_nije_funkcija, 'arg');
```

<div id="output13"></div>
<script>pregazi_console(13);</script>
<script>
(function(){
    const ispisi_argument = function (arg) {
        console.log(arg);
    };

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

</script>

## 4.5 Rad sa nizovima i ponavljajućim kontrolama toka

U ovoj sekciji ćemo demonstrirati osnovni rad sa nizovima kao sekvencijalnom strukturom podataka i ponavljajućim kontrolama toka kroz nekoliko zadataka.

> Zadatak 11: Kreirati niz koji se sastoji od brojeva `0`, `1`, `2` i `3`. Iskoristiti dati niz za određivanje tipa svih nizova. Ispisati broj elemenata datog niza.

```js
const niz_brojeva = [0, 1, 2, 3];
console.log('Nizovi imaju tip ' + typeof niz_brojeva);
console.log('Broj elemenata niza niz_brojeva je ' + niz_brojeva.length);
```

<div id="output14"></div>
<script>pregazi_console(14);</script>
<script>
(function(){
    const niz_brojeva = [0, 1, 2, 3];
    console.log('Nizovi imaju tip ' + typeof niz_brojeva);
    console.log('Broj elemenata niza niz_brojeva je ' + niz_brojeva.length);
})();
</script>

> Zadatak 12: Neka je dat niz brojeva kao u zadatku 11. Izračunati sumu elemenata datog niza brojeva.

```js
const niz_brojeva = [0, 1, 2, 3];
let suma = 0;
for (let i = 0; i < niz_brojeva.length; ++i) {
  suma += niz_brojeva[i];
}
console.log('Suma elemenata niza niz_brojeva je ' + suma);
```

<div id="output15"></div>
<script>pregazi_console(15);</script>
<script>
(function(){
    const niz_brojeva = [0, 1, 2, 3];
    let suma = 0;
    for (let i = 0; i < niz_brojeva.length; ++i) {
        suma += niz_brojeva[i];
    }
    console.log('Suma elemenata niza niz_brojeva je ' + suma);
})();
</script>

> Zadatak 13: Neka je dat niz brojeva kao u zadatku 11. Izračunati proizvod elemenata datog niza brojeva. Ne koristiti klasičnu `for` petlju.

```js
// Prolazak kroz elemente niza for-of petljom
const niz_brojeva = [0, 1, 2, 3];
let proizvod = 1;
for (const element of niz_brojeva) {
  proizvod *= element;
}
console.log('Proizvod elemenata niza niz_brojeva je ' + proizvod);
```

<div id="output16"></div>
<script>pregazi_console(16);</script>
<script>
(function(){
    const niz_brojeva = [0, 1, 2, 3];
    let proizvod = 1;
    for (const element of niz_brojeva) {
        proizvod *= element;
    }
    console.log('Proizvod elemenata niza niz_brojeva je ' + proizvod);
})();
</script>

> Zadatak 14: Kreirati niz koji se sastoji od niski `'uvit'`, `'os'` i `'aisp'`. Napisati funkciju `ispisi_uvecane_niske` koja prihvata niz niski kao parametar i ispisuje u konzoli svaku nisku iz datog niza pri čemu su sva slova velika.

```js
const niz_niski = ['uvit', 'os', 'aisp'];

function ispisi_uvecane_niske(niz) {
  for (let i = 0; i < niz.length; ++i) {
    console.log(niz[i].toUpperCase());
  }
}

// Napomena: Nizovi se prosledjuju "po referenci"
// (tj. njihova referenca se kopira po vrednosti).
// Dakle, u funkciji ispod se pristupa originalnom nizu,
// a ne njegovoj kopiji.
ispisi_uvecane_niske(niz_niski);
```

<div id="output17"></div>
<script>pregazi_console(17);</script>
<script>
(function(){
    const niz_niski = ['uvit', 'os', 'aisp'];

    function ispisi_uvecane_niske(niz) {
        for (let i = 0; i < niz.length; ++i) {
            console.log(niz[i].toUpperCase());
        }
    }

    ispisi_uvecane_niske(niz_niski);

})();
</script>

> Zadatak 15: Kreirati mešani niz koji se sastoji od narednih elemenata različitih tipova: `17.5`, `'oop'`, `false`, `1000`, `-12.457`, `'kiaa'`, `true`, `true`. Napisati funkciju `negiraj_bulove_vrednosti` koja prihvata mešani niz kao parametar i menja dati niz tako što negira sve Bulove vrednosti u tom nizu, dok ostali elementi ostaju nepromenjeni.

```js
const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

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
```

<div id="output18"></div>
<script>pregazi_console(18);</script>
<script>
(function(){
    const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

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

})();
</script>

> Zadatak 16: Neka je dat mešani niz kao u zadatku 15. Napisati funkciju `izdvoji_samo_brojeve` koja prihvata mešani niz kao parametar i na osnovu njega kreira novi niz koji se sastoji samo od brojeva iz datog niza.

```js
const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

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
```

<div id="output19"></div>
<script>pregazi_console(19);</script>
<script>
(function(){
    const mesani_niz = [17.5, 'oop', false, 1000, -12.457, 'kiaa', true, true];

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

})();
</script>

> Zadatak 17: Neka je dat niz brojeva kao u zadatku 11. Napisati funkciju `ukloni_poslednjih_n_elemenata` koja prihvata proizvoljan niz i pozitivan broj `n` i menja dati niz tako što uklanja `n` poslednjih elemenata iz niza.

```js
const niz_brojeva = [0, 1, 2, 3];

function ukloni_poslednjih_n_elemenata(niz, n) {
  for (let i = 0; i < n; ++i) {
    // Uklanjanje jednog elementa sa kraja niza (tj. poslednjeg elementa)
    niz.pop();
  }
}
console.log('Niz brojeva pre uklanjanja 2 elementa:   ' + niz_brojeva);
ukloni_poslednjih_n_elemenata(niz_brojeva, 2);
console.log('Niz brojeva nakon uklanjanja 2 elementa: ' + niz_brojeva);
```

<div id="output20"></div>
<script>pregazi_console(20);</script>
<script>
(function(){
    const niz_brojeva = [0, 1, 2, 3];

    function ukloni_poslednjih_n_elemenata(niz, n) {
        for (let i = 0; i < n; ++i) {
            // Uklanjanje jednog elementa sa kraja niza (tj. poslednjeg elementa)
            niz.pop();
        }
    }
    console.log('Niz brojeva pre uklanjanja 2 elementa:   ' + niz_brojeva);
    ukloni_poslednjih_n_elemenata(niz_brojeva, 2);
    console.log('Niz brojeva nakon uklanjanja 2 elementa: ' + niz_brojeva);

})();
</script>

> Zadatak 18: Neka je data sekvenca DNK lanca kao niska `'a-t-a-g-c-a-g-t-c-c-a'`. Kreirati niz nukleotida od date sekvence DNK.

```js
// Razbijanje niske po separatoru u elemente niza
let sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
let nukleotide = sekvenca.split('-');
console.log('Kreirali smo niz nukleotida: ' + nukleotide);
```

<div id="output21"></div>
<script>pregazi_console(21);</script>
<script>
(function(){
    // Razbijanje niske po separatoru u elemente niza
    let sekvenca = 'a-t-a-g-c-a-g-t-c-c-a';
    let nukleotide = sekvenca.split('-');
    console.log('Kreirali smo niz nukleotida: ' + nukleotide);
})();
</script>

> Zadatak 19: Neka je dat niz nukleotida `'a'`, `'t'`, `'a'`, `'g'`, `'c'`, `'a'`, `'g'`, `'t'`, `'c'`, `'c'` i `'a'`. Kreirati DNK sekvencu kao nisku od datog niza.

```js
// Nadovezivanje elemenata niza u nisku po separatoru
nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
sekvenca = nukleotide.join('');
console.log('Kreirali smo DNK sekvencu: ' + sekvenca);
```

<div id="output22"></div>
<script>pregazi_console(22);</script>
<script>
(function(){
    nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
    sekvenca = nukleotide.join('');
    console.log('Kreirali smo DNK sekvencu: ' + sekvenca);
})();
</script>

> Zadatak 20: Neka je dat niz nukleotida iz zadatka 19. Napisati funkciju `napravi_2grame` koja prihvata kao argument niz nukleotida i na osnovu njega kreira niz dvagrama. Jedan dvagram predstavlja dvočlani podniz datog niz nukleotida. Ispisati u konzoli broj kreiranih dvagrama, a zatim proći kroz sve dvagrame i ispisati ih u konzoli.

```js
nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
let sekvenca = 'atagcagtcca';

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
const dvagrami = napravi_2grame(nukleotide);
console.log(
  'DNK sekvenca ' +
    sekvenca +
    ' ima ukupno ' +
    dvagrami.length +
    ' 2-grama i oni su:'
);
for (let i = 0; i < dvagrami.length; ++i) {
  console.log(i + 1 + '. 2-gram: ' + dvagrami[i]);
}
```

<div id="output23"></div>
<script>pregazi_console(23);</script>
<script>
(function(){
    nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];
    let sekvenca = 'atagcagtcca';

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
    const dvagrami = napravi_2grame(nukleotide);
    console.log('DNK sekvenca ' + sekvenca + ' ima ukupno ' + dvagrami.length + ' 2-grama i oni su:');
    for (let i = 0; i < dvagrami.length; ++i) {
        console.log((i + 1) + '. 2-gram: ' + dvagrami[i]);
    }

})();
</script>

> Zadatak 21: Neka je dat niz nukleotida iz zadatka 19. Pronaći pozicije prvog, drugog i trećeg nukleotida `'g'` u datom nizu.

```js
nukleotide = ['a', 't', 'a', 'g', 'c', 'a', 'g', 't', 'c', 'c', 'a'];

// Pronalazak elementa u nizu se vrsi metodom indexOf.
// Ako navedemo drugi argument metoda indexOf,
// onda pretraga pocinje od tog indeksa umesto od pocetka niza.
let pozicija = nukleotide.indexOf('g');
console.log('1. nukleotid g se nalazi na poziciji ' + pozicija);
pozicija = nukleotide.indexOf('g', pozicija + 1);
console.log('2. nukleotid g se nalazi na poziciji ' + pozicija);
pozicija = nukleotide.indexOf('g', pozicija + 1);
console.log('3. nukleotid g se nalazi na poziciji ' + pozicija);
```

<div id="output24"></div>
<script>pregazi_console(24);</script>
<script>
(function(){
    let pozicija = nukleotide.indexOf('g');
    console.log('1. nukleotid g se nalazi na poziciji ' + pozicija);
    pozicija = nukleotide.indexOf('g', pozicija + 1);
    console.log('2. nukleotid g se nalazi na poziciji ' + pozicija);
    pozicija = nukleotide.indexOf('g', pozicija + 1);
    console.log('3. nukleotid g se nalazi na poziciji ' + pozicija);
})();
</script>

> Zadatak 22: Kreirati dva niza koja se sastoje od dva elementa `'a'` i `'b'`. Ispitati da li su nizovi jednaki pomoću operatora poređenja po jednakosti.

```js
// Uporedjivanje nizova po jednakosti
const niz1 = ['a', 'b']; // Kreiramo novi niz od dva elementa i cuvamo njegovu referencu u niz1
const niz2 = ['a', 'b']; // Kreiramo novi niz od dva elementa i cuvamo njegovu referencu u niz2

console.log('Da li su nizovi jednaki?', niz1 == niz2);
// Izraz niz1 == niz2 ima vrednost false zato sto su niz1 i niz2 dve reference na razlicite nizove u memoriji.
// Ovu osobinu operatora == zovemo "plitka jednakost" (engl. shallow equality).
// Drugim recima, operator == ne gleda unutrasnjost nizova da bi odredio da li su jednaki.
```

<div id="output25"></div>
<script>pregazi_console(25);</script>
<script>
(function(){
    const niz1 = ['a', 'b'];
    const niz2 = ['a', 'b'];
    console.log('Da li su nizovi jednaki?', niz1 == niz2);
})();
</script>

> Zadatak 23: Neka su data dva niza iz zadatka 22. Napisati funkciju `da_li_su_jednaki` koja prihvata dva niza i proverava da li su jednaki po strukturi. Pretpostaviti da elementi datih nizova nisu neki drugi nizovi, odnosno, da nizovi nisu višedimenzionalni. Ispitati da li su nizovi jednaki pomoću napisane funkcije.

```js
const niz1 = ['a', 'b'];
const niz2 = ['a', 'b'];

function da_li_su_jednaki(niz1, niz2) {
  const n = niz1.length;
  const m = niz2.length;

  if (n !== m) {
    return false;
  }

  for (let i = 0; i < n; ++i) {
    if (niz1[i] !== niz2[i]) {
      return false;
    }
  }

  return true;
}

console.log('Da li su nizovi jednaki?', da_li_su_jednaki(niz1, niz2));
```

<div id="output26"></div>
<script>pregazi_console(26);</script>
<script>
(function(){
    const niz1 = ['a', 'b'];
    const niz2 = ['a', 'b'];

    function da_li_su_jednaki(niz1, niz2) {
        const n = niz1.length;
        const m = niz2.length;

        if (n !== m) {
            return false;
        }

        for (let i = 0; i < n; ++i) {
            if (niz1[i] !== niz2[i]) {
                return false;
            }
        }

        return true;
    }

    console.log('Da li su nizovi jednaki?', da_li_su_jednaki(niz1, niz2));

})();
</script>

## 4.6 Rad sa objektima

U ovoj sekciji ćemo demonstrirati osnovni rad sa objektima kroz nekoliko zadataka. Pre toga, uvedimo formalno koncept objekata u programskom jeziku JavaScript.

_Objekat_ (engl. _object_) predstavlja strukturu podataka u kojoj su podaci predstavljeni uređenim parom (ključ, vrednost). Podaci od kojih se objekat sastoji se u terminologiji jezika JavaScript nazivaju _svojstvima_ (engl. _property_). Ključ svojstva predstavlja njegovo ime, dok vrednost svojstva predstavlja sam podatak koji objekat sadrži. Vrednost svojstva može biti bilo koja vrednost jezika JavaScript. Specijalno, ukoliko je vrednost svojstva tipa `'function'`, onda se to svojstvo naziva i _metod_ (engl. _method_).

Već smo videli i intenzivno koristili jedan primer objekta, a to je globalni objekat `console` i njegov metod `log`. Većina svojstava ovog objekta su metodi, ali to ne mora biti slučaj sa drugim objektima. Literali objekata se u programskom jeziku JavaScript zapisuju između vitičastih zagrada `{` i `}`, pri čemu se svako svojstvo zapisuje u formatu `ključ: vrednost` i odvojeno je karakterom zapete od ostalih svojstava. U nastavku teksta, kada govorimo o svojstvima, onda mislimo na vrednosti koje nisu funkcije, osim ukoliko ne naznačimo drugačije.

> Zadatak 24: Kreirati objekat `automobil` koji ima svojstva i metode iz naredne tabele. Iskoristiti dati objekat za određivanje tipa svih objekata. Ispisati u konzoli dati objekat.<br>

| svojstva       | metodi    |
| -------------- | --------- |
| ime = Fiat     | pokreni() |
| model = 500    | vozi()    |
| težina = 850.0 | zakoči()  |
| boja = bela    | ugasi()   |

```js
const automobil = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
};
console.log(typeof automobil);
console.log(automobil);
```

<div id="output27"></div>
<script>pregazi_console(27);</script>
<script>
(function(){
    const automobil = {
        ime: 'Fiat',
        model: 500,
        težina: 850.0,
        boja: 'bela',
        pokreni: function() {
            console.log('Automobil je uključen');
        },
        vozi: function() {
            console.log('Automobil je u pokretu');
        },
        zakoči: function() {
            console.log('Automobil je stao');
        },
        ugasi: function() {
            console.log('Automobil je ugašen');
        }
    };
    console.log(typeof automobil);
    console.log(automobil);
})();
</script>

> Zadatak 25: Neka je dat objekat automobila iz zadatka 24. Simulirati vožnju automobila kroz ulicu u kojoj ima dva semafora pri čemu je svaki put automobil morao da stane na crveno svetlo.

```js
const automobil = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
};
console.log('Početak ulice');
automobil.pokreni();
automobil.vozi();
console.log('Prvi semafor');
automobil.zakoči();
automobil.vozi();
console.log('Drugi semafor');
automobil.zakoči();
automobil.vozi();
console.log('Kraj ulice');
automobil.zakoči();
automobil.ugasi();
```

<div id="output28"></div>
<script>pregazi_console(28);</script>
<script>
(function(){
    const automobil = {
        ime: 'Fiat',
        model: 500,
        težina: 850.0,
        boja: 'bela',
        pokreni: function() {
            console.log('Automobil je uključen');
        },
        vozi: function() {
            console.log('Automobil je u pokretu');
        },
        zakoči: function() {
            console.log('Automobil je stao');
        },
        ugasi: function() {
            console.log('Automobil je ugašen');
        }
    };
    console.log('Početak ulice');
    automobil.pokreni();
    automobil.vozi();
    console.log('Prvi semafor');
    automobil.zakoči();
    automobil.vozi();
    console.log('Drugi semafor');
    automobil.zakoči();
    automobil.vozi();
    console.log('Kraj ulice');
    automobil.zakoči();
    automobil.ugasi();
})();
</script>

Nekada nam je potrebno da u telu metoda referišemo na objekat koji je "vlasnik" tog metoda. U tu svrhu, u jeziku JavaScript nam je dostupna ključna reč `this` u okviru tela metoda koja predstavlja upravo referencu na objekat koji je vlasnik tog metoda. Kroz ovu ključnu reč možemo dohvatiti ostala svojstva i metode koji su definisani nad tim objektom. Voditi računa da se ova ključna reč koristi isključivo u telu metoda objekta!

> Zadatak 26: Neka je dat objekat automobila iz zadatka 24. Dopuniti implementaciju objekta tako da uključuje i metod `ispisi_informacije` koji u konzoli ispisuje informacije o imenu, modelu, težini (u kilogramima) i boji automobila.

```js
const automobil = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
  ispisi_informacije: function () {
    console.log(
      'Ime: ' +
        this.ime +
        ', model: ' +
        this.model +
        ', težina: ' +
        this.težina +
        'kg' +
        ', boja: ' +
        this.boja
    );
  },
};

automobil.ispisi_informacije();
```

<div id="output29"></div>
<script>pregazi_console(29);</script>
<script>
(function(){
    const automobil = {
        ime: 'Fiat',
        model: 500,
        težina: 850.0,
        boja: 'bela',
        pokreni: function() {
            console.log('Automobil je uključen');
        },
        vozi: function() {
            console.log('Automobil je u pokretu');
        },
        zakoči: function() {
            console.log('Automobil je stao');
        },
        ugasi: function() {
            console.log('Automobil je ugašen');
        },
        ispisi_informacije: function() {
            console.log('Ime: ' + this.ime + 
                        ', model: ' + this.model + 
                        ', težina: ' + this.težina + 'kg' + 
                        ', boja: ' + this.boja);
        }
    };

    automobil.ispisi_informacije();

})();
</script>

Do sada smo videli da se svojstvima objekta (ovde govorimo o svojstvima u širem smislu) pristupa korišćenjem tzv. _tačka-notacije_ (engl. _dot notation_). Ona podrazumeva da navedemo objekat, iza kojeg sledi karakter tačke `.`, a zatim da navedemo ime svojstva. Postoji još jedan način za dohvatanje svojstava, a to je pomoću uglastih zagrada. Tako, na primer, korišćenjem `objekat.naziv_svojstva` i `objekat['naziv_svojstva']` možemo dohvatiti svojstvo objekta koje se naziva `naziv_svojstva`. Ovde je neophodno primetiti da se između uglastih zagrada navodi naziv svojstva kao niska. Zasto?

Razlika je u tome što JavaScript jezik izraz između zagrada smatra kao vrednost koja se izračunava da bi se dobilo ime svojstva. Tako na primer, ako iskoristimo izraz `objekat.naziv_svojstva`, time kažemo JavaScript okruženju da potraži svojstvo u objektu koje se naziva "naziv_svojstva". Sa druge strane, ako iskoristimo izraz `objekat[naziv_svojstva]` (primetiti da nema navodnika!), JavaScript okruženje će `naziv_svojstva` smatrati kao izraz čija će vrednost biti izračunata i koja će potom biti implicitno konvertovana u nisku, da bi se potražilo svojstvo sa tim imenom.

Semantika pretrage svojstava korišćenjem uglastih zagrada nam može poslužiti u nekim situacijama u kojima tačka-notaciju ne možemo koristiti. Na primer, JavaScript dopušta da nazivi svojstava objekata budu kompleksnije prirode, na primer:

```js
const osoba = { 'ime i prezime': 'Pera Perić' };
```

Očigledno, tekst pod niskom `'ime i prezime'` ne predstavlja validan JavaScript identifikator, ali cela niska se može koristiti kao ključ ovog svojstva. U ovakvim slučajevima, pristupanje svojstvima pomoću tačka-notacije proizvodi sintaksnu grešku:

```js
// Naredna linija proizvodi grešku: Uncaught SyntaxError: Unexpected string
console.log(osoba.'ime i prezime');
```

Umesto toga, možemo koristiti notaciju uglastih zagrada:

```js
console.log(osoba['ime i prezime']); // Pera Perić
```

Druga situacija u kojoj moramo upotrebiti uglaste zagrade jeste ako naziv svojstva dobijamo kao vrednost promenljive, poziva funkcije ili bilo kog drugog izraza. Na primer:

```js
const x = 'ime i prezime';
console.log(osoba[x]); // Pera Perić
```

> Zadatak 27: Neka je dat objekat automobila iz zadatka 24. Proveriti da li objekat sadrži svojstva ili metode naziva '`ime'`, `'prezime'` i `'pokreni'`. Zatim ispisati vrednosti i tipove svih svojstava objekta u konzoli.

```js
const automobil = {
  ime: 'Fiat',
  model: 500,
  težina: 850.0,
  boja: 'bela',
  pokreni: function () {
    console.log('Automobil je uključen');
  },
  vozi: function () {
    console.log('Automobil je u pokretu');
  },
  zakoči: function () {
    console.log('Automobil je stao');
  },
  ugasi: function () {
    console.log('Automobil je ugašen');
  },
};

console.log('Provera postojanja svojstava i metoda');

console.log('ime' in automobil);
console.log('prezime' in automobil);
console.log('pokreni' in automobil);

console.log('\nIspisivanje svih svojstava');

// Ne mešati for-in petlju za rad sa objektima
// i for-of petlju za rad sa nizovima !!!!!
for (const ključ in automobil) {
  if (typeof automobil[ključ] !== 'function') {
    console.log(automobil[ključ]);
  }
}
```

<div id="output30"></div>
<script>pregazi_console(30);</script>
<script>
(function(){
    const automobil = {
        ime: 'Fiat',
        model: 500,
        težina: 850.0,
        boja: 'bela',
        pokreni: function() {
            console.log('Automobil je uključen');
        },
        vozi: function() {
            console.log('Automobil je u pokretu');
        },
        zakoči: function() {
            console.log('Automobil je stao');
        },
        ugasi: function() {
            console.log('Automobil je ugašen');
        }
    };

    console.log('Provera postojanja svojstava i metoda');

    console.log('ime' in automobil);
    console.log('prezime' in automobil);
    console.log('pokreni' in automobil);

    console.log('\nIspisivanje svih svojstava');

    // Ne mešati for-in petlju za rad sa objektima
    // i for-of petlju za rad sa nizovima !!!!!
    for (const ključ in automobil) {
        if (typeof automobil[ključ] !== 'function') {
            console.log(automobil[ključ]);
        }
    }

})();
</script>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 1</span> 
    <div class="tekst">
        Kreirati promenljivu `studenti` koja treba da sadrži podatke o studentima iz naredne tabele. Koristiti odgovarajuće tipove podataka za predstavljanje datih vrednosti. Ova promenljiva se koristi u narednim zadacima.
    </div>
    <table style="max-width: 100%;">
    <thead>
        <tr>
        <th>indeks</th>
        <th>ime</th>
        <th>prezime</th>
        <th>datum_rodjenja</th>
        <th>mesto_rodjenja</th>
        <th>datum_upisa</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        <td>20140021</td>
        <td>Milos</td>
        <td>Peric</td>
        <td>20.01.1995.</td>
        <td>Beograd</td>
        <td>06.07.2014.</td>
        </tr>
        <tr>
        <td>20140022</td>
        <td>Marijana</td>
        <td>Savkovic</td>
        <td>11.03.1995.</td>
        <td>Kraljevo</td>
        <td>05.07.2014.</td>
        </tr>
        <tr>
        <td>20130023</td>
        <td>Sanja</td>
        <td>Terzic</td>
        <td>09.11.1994.</td>
        <td>Beograd</td>
        <td>04.07.2013.</td>
        </tr>
        <tr>
        <td>20130024</td>
        <td>Nikola</td>
        <td>Vukovic</td>
        <td>17.09.1994.</td>
        <td> </td>
        <td>04.07.2013.</td>
        </tr>
        <tr>
        <td>20140025</td>
        <td>Marijana</td>
        <td>Savkovic</td>
        <td>04.02.1995.</td>
        <td>Kraljevo</td>
        <td>06.07.2014.</td>
        </tr>
        <tr>
        <td>20140026</td>
        <td>Zorica</td>
        <td>Miladinovic</td>
        <td>08.10.1995.</td>
        <td>Vranje</td>
        <td>06.07.2014.</td>
        </tr>
        <tr>
        <td>20130027</td>
        <td>Milena</td>
        <td>Stankovic</td>
        <td> </td>
        <td> </td>
        <td> </td>
        </tr>
    </tbody>
    </table>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 2</span> 
    <div class="tekst">
        Napisati funkciju <code class="language-plaintext highlighter-rouge">spoji_ime_i_prezime(studenti)</code> koja menja podatke iz promenljive <code class="language-plaintext highlighter-rouge">studenti</code> tako što kolone <code class="language-plaintext highlighter-rouge">ime</code> i <code class="language-plaintext highlighter-rouge">prezime</code> spaja u novu kolonu <code class="language-plaintext highlighter-rouge">ime_prezime</code>, a ujedno i eliminiše kolone <code class="language-plaintext highlighter-rouge">ime</code> i <code class="language-plaintext highlighter-rouge">prezime</code>. <br /> 
        <br>
        Napomena: Imati u vidu da funkcija treba da radi korektno, čak i ako se izmene podaci. Na primer, ako podacima u promenljivoj <code class="language-plaintext highlighter-rouge">student</code> “dodamo” kolonu <code class="language-plaintext highlighter-rouge">prosek</code> koja predstavlja prosečnu ocenu tih studenata tokom studija, onda nakon ponovnog poziva funkcije <code class="language-plaintext highlighter-rouge">spoji_ime_i_prezime</code> rezultat mora da sadrži i tu kolonu. Drugim rečima, jedino što treba pretpostaviti je da će podaci u promenljivoj <code class="language-plaintext highlighter-rouge">studenti</code> sigurno imati kolone <code class="language-plaintext highlighter-rouge">ime</code> i <code class="language-plaintext highlighter-rouge">prezime</code>, a za ostale kolone ne praviti nikakve pretpostavke.
    </div>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 3</span> 
    <div class="tekst">
        Napisati funkciju <code class="language-plaintext highlighter-rouge">filter_indeks(studenti, godina)</code> koja za dati parametar <code class="language-plaintext highlighter-rouge">godina</code> vraća samo one studente koji su upisali fakultet u datoj godini. Funkcija ne sme da menja promenljivu <code class="language-plaintext highlighter-rouge">studenti</code>.
    </div>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 4</span> 
    <div class="tekst">
        Napisati funkciju <code class="language-plaintext highlighter-rouge">filter_f(studenti, f)</code> koja za datu funkciju <code class="language-plaintext highlighter-rouge">f</code> koja predstavlja predikat vraća samo one studente koji zadovoljavaju taj predikat. Predikat je funkcija koja prihvata jednu vrednost i vraća Bulovu vrednost, tj. <code class="language-plaintext highlighter-rouge">f: tip_vrednosti -&gt; boolean</code>. Funkcija ne sme da menja promenljivu <code class="language-plaintext highlighter-rouge">studenti</code>.
    </div>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 5</span> 
    <div class="tekst">
        Napisati funkciju <code class="language-plaintext highlighter-rouge">nema_nepoznate_vrednosti(student)</code> koja prihvata jednog studenta i ispituje da li taj student ima sve podatke poznate. Ukoliko student ima neki podatak koji je nedostajuća vrednost (prazno polje u tabeli iznad), funkcija vraća <code class="language-plaintext highlighter-rouge">false</code>, a inače <code class="language-plaintext highlighter-rouge">true</code>. Funkcija ne sme da menja parametar <code class="language-plaintext highlighter-rouge">student</code>.
    </div>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 6</span> 
    <div class="tekst">
        Napisati funkciju <code class="language-plaintext highlighter-rouge">pročisti_podatke(studenti)</code> koja vraća samo one studente koji imaju sve podatke poznate. Nije dozvoljeno koristiti ponavljajuće kontrole toka (<code class="language-plaintext highlighter-rouge">for</code>, <code class="language-plaintext highlighter-rouge">while-do</code>, …), kontrole toka izbora (<code class="language-plaintext highlighter-rouge">for</code>, <code class="language-plaintext highlighter-rouge">switch</code>, …) niti rekurziju. Funkcija ne sme da menja promenljivu <code class="language-plaintext highlighter-rouge">studenti</code>. (Pomoć: iskoristiti funkcije iz zahteva 4 i 5).
    </div>
</div>

<div class="domaci-zadatak">
    <span class="naslov">Domaći zadatak 7</span> 
    <div class="tekst">
        Napisati funkciju <code class="language-plaintext highlighter-rouge">generiši_html(studenti)</code> koja generiše nisku koja sadrži HTML kod kojim se podaci iz promenljive <code class="language-plaintext highlighter-rouge">studenti</code> prikazuju u vidu HTML tabele (na primer, kao u tabeli iz 1. zahteva, s tim da nije potrebno stilizovati tabelu CSS-om, ali može se i to uraditi za vežbu). Funkcija ne sme da menja promenljivu <code class="language-plaintext highlighter-rouge">studenti</code>.
    </div>
</div>

---

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->

<!--
<div id="output"></div>
<script>pregazi_console();</script>
<script>
(function(){

})();
</script>
-->

<!--
<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/X/index.html"
   target="_blank">Pogledaj primer uživo</a>
-->
