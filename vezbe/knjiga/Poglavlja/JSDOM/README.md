[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

# 5. JavaScript i DOM

Sada kada smo savladali osnovne koncepte jezika JavaScript, u stanju smo da primenimo stečena znanja radi kreiranja klijentskih aplikacija. U ovom uvodnom poglavlju u delu 3 - "Programiranje klijentskih veb aplikacija", diskutovaćemo o tome šta klijentske aplikacije predstavljaju iz ugla programera, kako se one implementiraju i koji su to osnovni elementi *interfejsa programiranja aplikacija* (engl. *application programming interface*, skr. *API*) koji su nam dostupni na raspolaganju za kreiranje klijentskih aplikacija.

*Klijentska aplikacija* predstavlja veb aplikaciju koja se sastoji od skupa HTML datoteka i resursa koje te HTML datoteke koriste. Već smo videli veliki broj resursa koje jedna HTML datoteka može da koristi. Neki od primera su: CSS datoteke, slike, veb lokacije (u kontekstu veza) i JS datoteke. Zapravo, sve aplikacije koje smo do sada pravili predstavljaju klijentske aplikacije. Međutim, klijentske aplikacije se ugrubo mogu podeliti u dve vrste:

1. *Statičke* klijentske aplikacije su one koje ne zahtevaju izvršavanje JavaScript koda.

2. *Dinamičke* klijentske aplikacije su one koje zahtevaju izvršavanje JavaScript koda.

Mi smo do sada (sa izuzetkom poglavlja 4 - "Programski jezik JavaScript" gde smo demonstrirali elemente programskog jezika JavaScript) kreirali isključivo statičke klijentske aplikacije. Ove aplikacije su bile sačinjene od definicija strukture pomoću HTML datoteka i definicija stilova te strukture pomoću CSS datoteka, uz eventualno prikazivanje resursa poput slika ili veza. U ovom poglavlju ćemo se baviti dinamičkim klijentskim aplikacijama, odnosno, naučićemo kako da pišemo JavaScript kodove koje izvršavaju neke dinamičke aktivnosti na veb prezentaciji, na primer, menjanje stilova HTML elemenata, obrada podataka u formularu i dr.

## 5.1 Osnovni koncepti DOM stabla

O DOM stablu smo govorili još u poglavlju 1 - "Struktuiranje Veb dokumenata kroz HTML". U ovoj sekciji ćemo nešto detaljnije obratiti pažnju na ovu veoma važnu strukturu podataka.

Kada veb pregledač dohvati neki HTML dokument, on započinje proces parsiranja tog dokumenta i od njega pravi model tog dokumenta u okviru radne memorije koja mu je dodeljena od strane operativnog sistema. Nad tim modelom programeri mogu da izvršavaju razne operacije. Ukoliko su operacije takve da menjaju strukturu modela, veb pregledač će prepoznati da se takva akcija izvršila, te će osvežiti prikaz veb dokumenta u prozoru veb pregledača. Upravo pod ovim ponašanjem smatramo *dinamičko* menjanje prikaza veb dokumenta.

Neka nam je dat naredni HTML dokument.

```html
<!DOCTYPE html>

<html>

<head>
    <title>Moja pocetna stranica</title>
    <meta charset="UTF−8">
</head>

<body>
    <h1>Ime i prezime</h1>
    <div>
        <p>Moj CV mozete pronaci <a href="cv.pdf">ovde</a>.</p>
    </div>
</body>

</html>
```

Možemo da zamislimo strukturu HTML dokumenta kao ugnežđene kutije. Struktura HTML dokumenta iznad se vizualno može predstaviti kao na narednoj slici.

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/primer_stranice_za_dom.png" alt="">
</div>

Struktura kojom veb pregledač opisuje model HTML stranice prati ovaj grafički prikaz. Za svaku kutiju postoji objekat, sa kojim programeri mogu da interaguju da bi dohvatili njegova svojstva ili izvršavali neke metode. Ovakva reprezentacija se naziva *model objekata dokumenta* (engl. *document object model*, skr. *DOM*). Preciznije, struktura podataka kojom se opisuje DOM je *m*-narno *stablo* (engl. *tree*). Elementi su predstavljeni čvorima stabla i oni određuju njegovu strukturu. Ugnežđeni elementi predstavljaju *naslednike* (engl. *child*) čvora koji je njihov *roditelj* (engl. *parent*). Neki čvorovi imaju *listove* (engl. *leaf*) za naslednike, što mogu biti tekstualni elementi, komentari i dr. Na primer, drvolika struktura prethodnog HTML dokumenta se može prikazati kao na narednoj slici<sup>[^1]</sup>. Plavom bojom su označeni čvorovi koji predstavljaju HTML elemente; zelenom bojom su označeni čvorovi koji predstavljaju tekstualni sadržaj; žutom bojom su označeni čvorovi koji predstavljaju tekstualni sadržaj sačinjen samo od belina.

[^1]: Alat koji je korišćen za vizualizaciju ovog DOM stabla se može pronaći na adresi [http://bioub.github.io/dom-visualizer/](http://bioub.github.io/dom-visualizer/){:target="_blank"}

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/primer_stranice_za_dom.svg" alt="">
</div>

Dakle, da bismo mogli da dinamički upravljamo prikazom veb stranice, prvo što je potrebno uraditi jeste pronaći odgovarajuće elemente u DOM stablu, a zatim izvršiti odgovarajuće operacije nad njima. Upravo u ovom redosledu ćemo se upoznati sa radom nad DOM stablom.

## 5.2 Pretraga elemenata

U okviru JavaScript okruženja za izvršavanje u veb pregledačima postoji JavaScript objekat koji se naziva `document`, koji sadrži informacije o veb stranici i zapravo predstavlja korem DOM stabla. Ako želimo da pristupimo nekom elementu na veb stranici, odnosno, da pristupimo odgovarajućem čvoru DOM stabla koji predstavlja taj element u memoriji, najjednostavniji način jeste da započnemo pretragu od objekta `document`. Nad ovim objektom su definisani brojni metodi za pretragu elemenata koji su opisani u nastavku. Obratiti posebnu pažnju na povratnu vrednost ovih metoda - neki od metoda vraćaju jedan objekat, dok drugi vraćaju niz objekata.

- Metod `getElementById` omogućava dohvatanje jednog čvora na osnovu identifikatora koji je dodeljen tom elementu. Njegov argument je niska koja sadrži naziv identifikatora.

- Metod `getElementsByTagName` omogućava dohvatanje niza elemenata na osnovu  imena elementa. Njegov argument je niska koja sadrži naziv elementa.

- Metod `getElementsByClassName` omogućava dohvatanje niza elemenata na osnovu
imena klase. Njegov argument je niska koja sadrži naziv klase.

- Metod `querySelector` omogućava dohvatanje prvog elementa koji je obuhvaćen datim CSS selektorom. Njegov argument je niska koja sadrži CSS selektor.

- Metod `querySelectorAll` omogućava dohvatanje niza elemenata koji su obuhvaćen datim CSS selektorom. Njegov argument je niska koja sadrži CSS selektor.

Za sve metode koji vraćaju jedan objekat važi da, u slučaju da ne pronađu nijedan element koji odgovara datom argumentu, vraćaju `null`. Sa druge strane, za sve metode koji vraćaju niz objekata važi da, u slučaju da ne pronađu nijedan element koji odgovara datom argumentu, vraćaju prazan niz. Zbog toga je posebno potrebno voditi računa o obradi ovih slučajeva u kodu.

Naredni primer ilustruje korišćenje opisanih metoda.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 1</title>
</head>

<body>
    <p id="prvi_pasus">Ovo je primer</p>
    <p id="drugi_pasus" class="parni">rada sa DOM stablom</p>
    <p id="treci_pasus">u programskom jeziku JavaScript.</p>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
const prviPasus = document.getElementById('prvi_pasus');
if (prviPasus != null) {
    console.log('Uspešno smo pronašli element sa identifikatorom prvi_pasus');
}

const sviPasusi = document.getElementsByTagName('p');
const brojPasusa = sviPasusi.length;
if (brojPasusa > 0) {
    console.log(`Ova veb stranica sadrži ${brojPasusa} paragraf/a`);
}

const parniPasusi = document.getElementsByClassName('parni');
if (parniPasusi.length > 0) {
    console.log(`Ova veb stranica sadrži ${parniPasusi.length} element/elemenata sa klasom "parni"`);
}

const srednjiPasus = document.querySelector('.parni');
if (srednjiPasus != null) {
    console.log('Postoji makar jedan element sa klasom "parni"');
}

const sviPasusiPonovo = document.querySelectorAll('p');
if (sviPasusiPonovo.length > 0) {
    console.log(`Ponovo vidimo da ova veb stranica sadrži ${sviPasusiPonovo.length} paragraf/a`);
}
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/1/index.html"
   target="_blank">Pogledaj primer uživo (obavezno otvoriti konzolu)</a>

## 5.3 Upravljanje elementima

Nakon što smo uspešno dohvatiti jedan element ili više njih, postavlja se pitanje koje sve operacije možemo izvršiti nad njima, odnosno, koje njihove delove možemo menjati dinamički. Grubo rečeno, sve operacije nad elementom se mogu podeliti u tri vrste:

1. Izmena sadržaja

2. Izmena vrednosti atributa

3. Izmena stila

### 5.3.1 Izmena sadržaja

Izmena sadržaja elementa podrazumeva izmenu same strukture koja je inicijalno opisana HTML kodom. Nad objektima koji predstavljaju HTML elemente su definisana dva svojstva:

- Svojstvo `innerHTML` obuhvata onaj HTML deo koda koji se nalazi u sadržaju elementa.

- Svojstvo `outerHTML` obuhvata onaj HTML deo koda koji predstavlja sam element zajedno sa njegovim sadržajem.

Vrednost ovih svojstava je niska koja sadrži odgovarajući tekstualni sadržaj. Napomenimo da `innerHTML` i `outerHTML` nisu ništa drugo do svojstva odgovarajućih JavaScript objekata, te se ona mogu koristiti za čitanje vrednosti (ukoliko ih samo navedemo, na primer, `console.log(objekat.innerHTML);`) ili za pisanje vrednosti (ukoliko im dodelimo neku vrednost, na primer, `objekat.innerHTML = '<p>Tekst</p>';`), kao i kod bilo kojih drugih JavaScript objekata. U nastavku teksta nećemo više skrenuti pažnju čitaocu na ovu osobinu kod drugih svojstava.

Na primer, ako posmatramo naredni HTML kod

```html
<div class="omotac">
    <h1>Naslov</h1>
</div>
```

svojstvo `innerHTML` elementa `div` obuhvata sve što se nalazi između otvarajuće etikete `<div>` i zatvarajuće etikete `</div>`, odnosno:

```
<h1>Naslov</h1>
```

dok svojstvo `outerHTML` istog elementa obuhvata otvarajuću etiketu `<div>`, zatvarajuću etiketu `</div>` kao i sve što se nalazi između, odnosno:

```
<div class="omotac"><h1>Naslov</h1></div>
```

Posledica ovog opažanja jeste da menjanjem svojstva `innerHTML` možemo transformisati sadržaj elemenata, dok menjanjem svojstva `outerHTML` možemo transformisati sam element, što naredni primer ilustruje.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 2</title>

    <style>
        div {
            border: 5px solid black;
        }

        main {
            border: 5px solid red;
        }
    </style>
</head>

<body>
    <div id="prvi">
        <h1>Prvi naslov</h1>
    </div>

    <div id="drugi">
        <h1>Drugi naslov</h1>
    </div>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
const prviDiv = document.getElementById('prvi');
if (prviDiv != null) {
    prviDiv.innerHTML = '<h2>Prvi podnaslov</h2>';
} else {
    console.log('Ne mogu da pronadjem element sa identifikatorom "prvi".');
}

const drugiDiv = document.getElementById('drugi');
if (drugiDiv != null) {
    drugiDiv.outerHTML = 
        `<main id="drugi">
            <h2>Drugi podnaslov</h2>
        </main>`;
} else {
    console.log('Ne mogu da pronadjem element sa identifikatorom "drugi".');
}
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/2/index.html"
   target="_blank">Pogledaj primer uživo</a>

### 5.3.2 Izmena vrednosti atributa

Kao što znamo, veliki broj HTML elemenata ima različite atribute koji ih dodatno okarakterišu. Na primer, element `img` ima atribut `src` koji definiše lokaciju slike koja je potrebno da se prikaže, element `a` ima atribut `href` koji definiše lokaciju resursa ka kojem je potrebno kreirati vezu, itd. HTML elementima možemo dinamički menjati vrednosti atributa tako što promenimo vrednost odgovarajućeg svojstva objekta u DOM stablu koji odgovara tom elementu. Naredni primer ilustruje promenu resursa ka kojem vodi veza.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 3</title>
</head>

<body>
    <a href="">"Bezveze" link :)</a>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
const veze = document.getElementsByTagName('a');
if (veze.length > 0) {
    const prvaVeza = veze[0];

    // Postavljamo nove vrednosti za atribute href i target
    prvaVeza.href = 'https://matfuvit.github.io/UVIT/';
    prvaVeza.target = '_blank';

    // Ažuriramo tekst u vezi
    prvaVeza.innerHTML = 'Početna stranica kursa';
} else {
    console.log('Na ovoj stranici ne postoje veze.');
}
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/3/index.html"
   target="_blank">Pogledaj primer uživo</a>

Na adresi [https://www.w3schools.com/jsref/default.asp](https://www.w3schools.com/jsref/default.asp){:target="_blank"} u sekciji *HTML Element Objects Reference* moguće je pronaći za svaki HTML element spisak atributa čije se vrednosti mogu dinamički menjati, zajedno sa njihovim opisima.

### 5.3.3 Izmena stila

Pored menjanja sadržaja i karakteristika HTML elemenata, JavaScript jezikom je moguće menjati i sam stil prikaza elemenata. Stil elemenata se dinamički može promeniti izmenom vrednosti narednih dva svojstava:

- Svojstvo `style` predstavlja objekat koji sam sadrži veliki broj svojstava koji odgovaraju nama već poznatim CSS svojstvima. Promenom nekog od svojstava u svojstvu `style` direktno utičemo na promenu odgovarajućeg CSS svojstva. Na primer, ukoliko nad nekim elementom koji je predstavljen promenljivom `element` izvršimo naredbu `element.style.color = 'white';`, tada će se promeniti boja teksta odgovarajućeg HTML elementa na belu boju. Napomenimo da za CSS svojstva čiji nazivi predstavljaju validne JavaScript identifikatore, kao što su `color`, `border`, `padding`, itd. važi da postoje svojstva u JavaScript objektu koji predstavlja HTML element u DOM stablu sa *istim tim nazivom*. Međutim, CSS svojstva čiji nazivi sadrže crticu, kao što su `background-color`, `border-left-width`, `font-family` itd. ne predstavljaju validne JavaScript identifikatore. Zbog toga, u JavaScript objektu koji predstavlja HTML element u DOM stablu postoje svojstva čiji su nazivi dobijeni eliminisanjem crtice iz naziva CSS svojstava i kapitalizacijom prvog karaktera nakon crtice (u pitanju je takozvana *kamilja notacija*), na primer, `backgroundColor`, `borderLeftWidth`, `fontFamily`, itd.

- Svojstvo `className` predstavlja nisku koja sadrži vrednost HTML atributa `class`. Kao i sam atribut, vrednost ovog svojstva predstavlja jedna klasa ili više njih, pri čemu važi da, ukoliko želimo da elementu dodelimo više klasa, potrebno je da navedemo karakter razmaka između svakog naziva klase.

Naredni primer ilustruje promenu stila paragrafa u HTML dokumentu korišćenjem ova dva svojstva.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 4</title>

    <style>
        .paragraf {
            border: 5px salmon inset;
            padding: 10px;
        }

        .neparni {
            background-color: rgba(255, 105, 180, 0.6);
            text-transform: lowercase;
        }
    </style>
</head>

<body>
    <p>Paragraf sa indeksom 0</p>
    <p>Paragraf sa indeksom 1</p>
    <p>Paragraf sa indeksom 2</p>
    <p>Paragraf sa indeksom 3</p>
    <p>Paragraf sa indeksom 4</p>
    <p>Paragraf sa indeksom 5</p>
    <p>Paragraf sa indeksom 6</p>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
const paragrafi = document.getElementsByTagName('p');

for (const i in paragrafi) {
    const paragraf = paragrafi[i];
    
    if (i % 2 === 0) {
        // Nazivi CSS svojstava koja nemaju crticu 
        // odgovaraju nazivima JavaScript objekata DOM stabla.
        paragraf.style.padding = '10px';
        paragraf.style.color = 'BlueViolet';

        // Nazivi CSS svojstava koja imaju crticu 
        // transformisu se u JavaScript objektima DOM stabla
        // tako sto se crtice uklanjaju,
        // a naredno slovo nakon crtice postaje veliko (camelCase imenovanje).
        paragraf.style.backgroundColor = '#FFECA1';
        paragraf.style.textTransform = 'uppercase';
    } else {
        paragraf.className = 'neparni paragraf';
    }
}
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/4/index.html"
   target="_blank">Pogledaj primer uživo</a>

Na adresi [https://www.w3schools.com/jsref/dom_obj_style.asp](https://www.w3schools.com/jsref/dom_obj_style.asp){:target="_blank"} moguće je pronaći spisak svojstava svojstva `style` čije se vrednosti mogu dinamički menjati, zajedno sa njihovim opisima.

## 5.4 Dinamičko dodavanje i brisanje elemenata

U ovoj sekciji ćemo opisati i demonstrirati metode definisane nad čvorovima DOM stabla koji se koriste za dinamičko kreiranje, dodavanje i brisanje elemenata koji se nalaze (ili koji treba da se nalaze) u DOM stablu.

Već smo diskutovali o svojstvima `innerHTML` i `outerHTML` koji se mogu koristiti za dodavanje elemenata (tako što se postavi njihova vrednost na nisku koja sadrži HTML kod) ili brisanje elemenata (tako što se postavi njihova vrednost na, recimo, praznu nisku). Međutim, ovo može predstavljati bezbednosni rizik jer niska koja se postavlja može sadržati kod koji ne treba biti umetnut. Dodatno, ovaj proces može biti sporiji u odnosu na ostale metode, koje ćemo izložiti o ovoj sekciji<sup>[^2]</sup>.

[^2]: Videti [testove brzine](http://jsben.ch/6uEsf){:target="_blank"}

#### Kreiranje novih čvorova

Da bismo element dodali u DOM stablo, prvo je potrebno da ga kreiramo. U tu svrhu, na raspolaganju nam je metod `document.createElement` koja kreira jedan HTML element. Argument ovog metoda je niska koja sadrži naziv HTML elementa koji se kreira.

Međutim, kao što znamo, nisu svi čvorovi u DOM stablu HTML elementi. Metod `document.createTextNode` kreira jedan tekstualni čvor u stablu, odnosno, čvor koji sadrži tekstualni sadržaj. Argument ovog metoda je niska koja sadrži tekst koji će biti prikazan.

#### Dodavanje elemenata

Da bismo dodali novokreirani element u DOM stablo, prvo je potrebno da pronađemo roditeljski čvor u čiji sadržaj ćemo umetnuti taj element, a zatim da nad roditeljskim čvorom pozovemo metod `appendChild`. Argument ovog metoda je objekat koji predstavlja čvor koji se dodaje u DOM stablo. Napomenimo da se ovim metodom uvek dodaju čvorovi na kraj sadržaja roditeljskog elementa.

Naredni primer ilustruje dinamičko kreiranje HTML strukture koja stoji u komentaru u HTML kodu.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 5</title>
</head>

<body>
    <!-- <div>
        <h1>JavaScript</h1>
        <p>Super jezik, ali samo ako znamo kako se koristi :)</p>
        <ul>
            <li>Može da se koristi na klijentskoj strani</li>
            <li>Ali i na serverskoj</li>
        </ul>
    </div> -->

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
/** Funkcija kreira HTML strukturu zadatog elementa `body` korišćenjem svojstva `innerHTML`.
 * 
 * @param {Body} body Element čija će HTML struktura biti dinamički kreirana.
 */
function napravi_html_strukturu_1(body) {
    body.innerHTML = 
        `<div>
            <h1>JavaScript</h1>
            <p>Super jezik, ali samo ako znamo kako se koristi :)</p>
            <ul>
                <li>Može da se koristi na klijentskoj strani</li>
                <li>Ali i na serverskoj</li>
            </ul>
        </div>`;
}

/** Funkcija kreira HTML strukturu zadatog elementa `body` korišćenjem metoda `document.createElement` za kreiranje novih čvorova DOM stabla i metoda `appendChild` nad roditeljskim čvorom za povezivanje roditeljskog čvora i dete čvora.
 * 
 * @param {Body} body Element čija će HTML struktura biti dinamički kreirana.
 */
function napravi_html_strukturu_2(body) {
    // Prvo kreiramo promenljive koje predstavljaju HTML elemente
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    const h1_text = document.createTextNode('JavaScript');
    const p = document.createElement('p');
    const p_text = document.createTextNode('Super jezik, ali samo ako znamo kako se koristi :)');
    const ul = document.createElement('ul');
    const li1 = document.createElement('li');
    const li1_text = document.createTextNode('Može da se koristi na klijentskoj strani');
    const li2 = document.createElement('li');
    const li2_text = document.createTextNode('Ali i na serverskoj');

    // A zatim iz povezemo u drvoliku strukturu
    body.appendChild(div);
    div.appendChild(h1);
    div.appendChild(p);
    div.appendChild(ul);
    h1.appendChild(h1_text);
    p.appendChild(p_text);
    ul.appendChild(li1);
    ul.appendChild(li2);
    li1.appendChild(li1_text);
    li2.appendChild(li2_text);
}

const bodies = document.getElementsByTagName('body');
if (bodies.length > 0) {
    const body = bodies[0];
    // napravi_html_strukturu_1(body);
    napravi_html_strukturu_2(body);
}
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/5/index.html"
   target="_blank">Pogledaj primer uživo</a>

Napomenimo da u funkciji `napravi_html_strukturu_2` nismo morali sve elemente prvo da kreiramo. Na primer, mogli smo prvo da kreiramo objekat elementa `div`, pa da ga povežemo sa roditeljskim objektom `body`. Nakon toga smo mogli da kreiramo objekat elementa `h1`, pa da ga povežemo sa roditeljskim objektom `div`, itd.

#### Brisanje elemenata

Procedura brisanja elemenata iz DOM stabla liči na proceduru umetanja elemenata: prvo je potrebno pronaći roditeljski čvor iz kojeg se brišu elementi, a zatim je nad tim elementom potrebno pozvati metod `removeChild`. Argument ovog metoda je objekat koji predstavlja dete čvor roditeljskog čvora.

Čitalac se može zapitati na koji način se može dohvatiti dete koje je potrebno obrisati. Kao i svaka druga funkcija, i metod `removeChild` prihvata objekat koji briše po referenci. To znači da nije bitan način na koji je objekat koji se briše dohvaćen. Sledi nekoliko primera načina na koji je moguće dohvatiti objekat koji se briše, a koji bi trebalo da inspiriše čitaoca da razmisli o drugim načinima: 

- Jedan pristup bi mogao biti da se elementu koji se briše dodeli identifikator, pa da se iskoristi metod `document.getElementById` za dohvatanje tog objekta. Tako dohvaćeni objekat se dalje prosleđuje metodu `removeChild`. 

- Neki drugi pristup bi mogao biti iteriranjem kroz svojstvo `children` roditeljskog čvora koji predstavlja niz dece čvorova koji se nalaze u sadržaju. Napomenimo da ovaj niz sadrži samo čvorove koji predstavljaju HTML elemente. Nasuprot njega, svojstvo `childNodes` predstavlja niz dece čvorova koji obuhvataju i tekstualne čvorove.

Naredni primer ilustruje drugi pristup, pri čemu se za svako dete čvor ispituje da li sadrži klasu kojom se u HTML delu koda označava da je potrebno da bude obrisano[^3].

[^3]: Zašto u JavaScript kodu koristimo metod `indexOf` nad svojstvom `className` umesto da vršimo poređenje `className === 'obrisi_mene'`?

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 6</title>
</head>

<body>
    <ul>
        <li class="obrisi_mene">Stavka liste 0</li>
        <li class="obrisi_mene">Stavka liste 1</li>
        <li>Stavka liste 2</li>
        <li>Stavka liste 3</li>
        <li>Stavka liste 4</li>
        <li class="obrisi_mene">Stavka liste 5</li>
        <li class="obrisi_mene">Stavka liste 6</li>
    </ul>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
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
    const brojStavki = stavke.length;

    // Moramo da brišemo od kraja niza do početka,
    // zato što poziv removeChild menja sam niz lista.children,
    // tako da for-in i for-of petlje ne bi funkcionisale ispravno.
    for (let i = brojStavki - 1; i >= 0; --i) {
        if (stavka_treba_biti_obrisana(stavke[i])) {
            lista.removeChild(stavke[i]);
        }
    }
} else {
    console.log('Dokument nema liste!');
}
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/6/index.html"
   target="_blank">Pogledaj primer uživo</a>

#### Zamena postojećeg elementa drugim elementom

Nekada je potrebno da izvršimo zamenu elemenata. Na primer, ukoliko bi trebalo da sve naslove na stranici zamenimo podnaslovima, prvo bismo morali da postavimo novokreirane čvorove koji predstavljaju podnaslove na odgovarajuće pozicije (na primer, korišćenjem metoda `insertAdjacentElement` [(dokumentacija)](https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentElement) umesto metoda `appendChild`), a zatim da obrišemo sve čvorove koji predstavljaju naslove.

Međutim, time je potrebno da kodiramo dve operacije koje implementiraju delove iste logike. Ukoliko dođe do problema u bilo kojem delu, trebalo bi da efekat bude kao da nismo učinili nikakvu izmenu, što obradu grešaka čini znatno komplikovanijom.

Na sreću, dostupan je metod `replaceChild` koji radi upravo ono što je nama potrebno. Ovaj metod ima dva argumenta: prvi argument je objekat koji će se nalaziti u DOM stablu nakon zamene, a drugi argument je objekat koji će biti obrisan iz DOM stabla nakon zamene. Slično kao i `appendChild` i `removeChild`, i ovaj metod se poziva nad roditeljskim čvorom, što znači da drugi argument mora biti objekat koji predstavlja dete roditeljskog čvora. U slučaju da dođe do greške, metod će prijaviti da je došlo do greške i nikakva izmena neće biti izvršena.

Naredni primer ilustruje korišćenje ovog metoda zamenom svih `span` elemenata `img` elementima.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 7</title>
</head>

<body>
    <div id="galerija_slika">
        <span>Ovde treba da bude slika širine 100px.</span>
        <p>Ovo je opis slike.</p>

        <span>Ovde treba da bude slika širine 100px.</span>
        <p>Ovo je opis slike.</p>

        <span>Ovde treba da bude slika širine 100px.</span>
        <p>Ovo je opis slike.</p>

        <span>Ovde treba da bude slika širine 100px.</span>
        <p>Ovo je opis slike.</p>
    </div>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
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
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/7/index.html"
   target="_blank">Pogledaj primer uživo</a>

## 5.5 Pridruživanje osluškivača događaja elementima

Većina dinamičkih klijentskih veb aplikacija podrazumeva da postoji nekakva *akcija* koja se izvršava kada se *dogodi* nekakva aktivnost. Primeri aktivnosti koje bi mogle da se dogode na stranici su:

- Korisnik je kliknuo mišem na dugme
- Korisnik je uneo novi karakter u polje formulara
- Korisnik je kliknuo dugme za slanje podataka iz formulara
- Veb aplikacija je završila učitavanje
- Veb aplikacija je dobila rezultat komunikacije sa serverskom aplikacijom
- ...

Kada se neka od ovih (i njima sličnih) aktivnosti dogodi u toku rada veb aplikacije, kažemo da sistem *okida* (engl. *fire*) specijalnu vrstu signala koji se naziva *događaj* (engl. *event*). Ispostavlja se da u JavaScript okruženju postoji sistem zasnovan na *osluškivačima* (engl. *handler* ili *listener*) koji predstavljaju delove koda (najčešće su u pitanju funkcije) koji se izvršavaju kada se događaj, za koji je osluškivač postavljen, okine. Implementiranje ovih delova koda od strane programera nazivamo *pridruživanje osluškivača događajima* (engl. *registering an event handler*).

Da bismo mogli da pridružimo osluškivač događaju potrebne su nam informacije koje se dobijaju odgovaranjem na naredna tri pitanja:

1. Nad kojim HTML elementom se događaj okida?

2. Koji je naziv događaja koji se okida?

3. Koja je akcija koju je potrebno izvršiti okidanjem tog događaja nad tim elementom?

Na primer, neka je potrebno nad HTML elementom koji je predstavljen promenljivom `element`, pri okidanjem događaja `'event'` izvršiti funkciju `element_event`. Pridruživanje osluškivača događaja se u tom slučaju izvršava narednim pozivom metoda `addEventListener`:

```js
element.addEventListener('event', element_event);
```

Napomenimo da korišćenjem ovog pristupa možemo omogućiti da se za isti događaj više funkcija izvršava jedna za drugom jednostavno pozivanjem ovog metoda više puta:

```js
element.addEventListener('event', element_event_1);
element.addEventListener('event', element_event_2);
// itd.
```

Ukoliko od nekog trenutka više ne želimo da osluškivač bude pridružen događaju, onda možemo pozvati metod `removeEventListener` koji uklanja tačno jedan prethodno pridruženi osluškivač događaju:

```js
element.removeEventListener('event', element_event);
```

Naredni primer ilustruje pridruživanje osluškivača događaja klikom miša nad dugmićima. Funkcije koje implementiraju osluškivače će biti izvršene tek onda kada korisnik klikne na odgovarajuće dugmiće.

Datoteka `index.html`:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Primer 8</title>

    <style>
        #kvadrat {
            display: block;
            width: 100px;
            height: 100px;
            border: 5px solid hotpink;
            margin: 20px;
        }

        input[type="button"] {
            width: 200px;
            height: 50px;
            margin: 20px;
            font-size: 30px;
            background-color: lightblue;
            border: 1px solid gray;
        }

        input[type="button"]:active {
            background-color: rgb(137, 178, 192);
            border: 5px inset gray;
        }
    </style>
</head>

<body>
    <input type="button" id="uvecaj" value="+">
    <input type="button" id="smanji" value="-">

    <div id="kvadrat"></div>

    <script src="index.js"></script>
</body>

</html>
```

Datoteka `index.js`:

```js
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
```

<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/8/index.html"
   target="_blank">Pogledaj primer uživo</a>

Na adresi [https://developer.mozilla.org/en-US/docs/Web/Events](https://developer.mozilla.org/en-US/docs/Web/Events){:target="_blank"} moguće je pronaći spisak svih događaja, grupisanih po kategorijama koji predstavljaju izvore okidanja tih događaja, zajedno sa njihovim opisima.

Napomenimo još i da, prilikom definisanja osluškivača, ukoliko je potrebno da dohvatimo objekat nad kojim se postavlja osluškivač, moguće je koristiti ključnu reč `this`, sa istom semantikom kao kod definisanja metoda objekta.

#### Alternativni metodi pridruživanja osluškivača događajima

Pridruživanje osluškivača događajima je moguće izvršiti i na drugi način. U pitanju je korišćenje odgovarajućih svojstava čvorova DOM stabla koji odgovaraju HTML elementima. Na primer, čvor koji odgovara elementima `input` čiji je atribut `type="button"` (dakle, dugmići) sadrži atribut `onclick` čija je vrednost funkcija koja implementira osluškivač događaja naziva `'click'`, odnosno, kliktaj mišem na dugme. U prethodnom primeru, umesto linije:

```js
uvecaj.addEventListener('event', uvecaj_click);
```

mogli bismo kodirati liniju:

```js
uvecaj.onclick = uvecaj_click;
```

Prednost korišćenja ovog pristupa u odnosu na `addEventListener` je u tome što je on podržaniji u starijim verzijama veb pregledača. Međutim, nedostatak ovog pristupa u odnosu na `addEventListener` jeste u tome što možemo postaviti najviše jedan osluškivač. Na primer, nakon izvršavanja koda:

```js
element.onclick = handler_1;
element.onclick = handler_2;
```

Prilikom okidanja događaja `'click'`, biće pozvan (tj. izvršen) samo osluškivač koji implementira funkcija `handler_2`, dok je osluškivač koji implementira funkcija `handler_1` izgubljen. Postoje načini da se ovo prevaziđe, ali svaki od njih uvodi nove probleme, pri čemu nijedan od njih problema ne daje elegantno rešenje u odnosu na korišćenje pristupa zasnovan na metodima `addEventListener` i `removeEventListener`.

-----

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->

<!-- 
<a style="border: 2px solid gray; display: inline-block; padding: 15px; background-color: rgb(114, 211, 250); color: black;"
   href="./Primeri/X/index.html"
   target="_blank">Pogledaj primer uživo (obavezno otvoriti konzolu)</a>
-->