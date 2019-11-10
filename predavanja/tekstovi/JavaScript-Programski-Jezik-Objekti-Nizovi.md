
# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Oбјекти и низови

### Објекти

**Пример.** Поређење објеката:

```js
var object1 = {
    value: 10
};

var object2 = object1;

var object3 = {
    value: 10
};

// Prikazuje true
console.log(object1 == object2);

// Prikazuje false
console.log(object1 == object3);

object1.value = 15;
// Prikazuje 15
console.log(object2.value);

object2.value = 17;
// Prikazuje 17
console.log(object1.value);

// Prikazuje 10
console.log(object3.value);
```

&#9608;

#### Особине објеката

**Пример.** Приступ особинама објекта:

```js
let obj = {
    ime: "Miki",
    length: 4
};

// pristup osobinama objekta pomocu operatora-tacke
console.log(obj.length);
console.log(obj.ime);

// pokusaj pristupa nepostojecoj osobini vrace undefined
console.log(obj.duzina);

console.log(obj["ime"]);
console.log(obj[ String.fromCharCode(105) + "me"]);

// vrednosti null i undefined ne poseduju osobine
// pokusaj pristupa ma kojoj njihovoj osobini dovodi do greske u izvrsavanju
console.log(null.length);
console.log(null.duzina);
console.log(undefined.length);
console.log(undefined.duzina);
```

&#9608;

**Пример.** Oсобинe објекaта имају динамичку природу:

```js
let objekat = {
    levo: 1,
    desno: 2
 }

// prikaz osobina objekta
console.log(objekat.levo);
console.log(objekat["levo"]);

// uklanjanje osobine objekta
delete objekat.levo;

// prikaz osobina objekta
console.log(objekat.levo);
console.log(objekat["levo"]);

// provera da li je osobina sadržana u objektu
console.log("levo" in objekat);
console.log("desno" in objekat);
```

&#9608;

**Пример.** Пролазак кроз особинe објекaта:

```js
let obj = {
   rad: "Odlazak na posao",
   drvo: "Grljenje drveća",
   pica: "Jedenje pice",
   trcanje: "Trčanje kroz park",
   televizija: "Gledanje televizije"
};

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`);

console.log("---");

obj = {
   ime: "Miki",
   length: 4
};

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`);
```

&#9608;

#### Методи код објеката

Методи се могу посматрати као особине који реферишу на вредности-функције.

Методи код објекaта имају динамичку природу.

**Пример.** Рад са особинама и методима објекта који представља зеца:

```js
let rabbit = {};
rabbit.name = "Душко Дугоушко";
rabbit.speak = function(tekst) {
    console.log("Зека каже: '" + tekst + "'");
};

console.log(rabbit.name);

rabbit.speak("Који ти је враг, шефе?");

let x = rabbit.name;
rabbit.name = rabbit.speak;
rabbit.speak = x;
rabbit.name("Проба! 1,2,3...");
```

&#9608;

**Пример.** Илуструје, на примеру зеца, како један метод може да се придружи већем броју обеката:

```js
let izgovara = function (tekst) {
    console.log(`${this.tip} зец каже '${tekst}'`);
}
let beliZec = { tip: "бели", govor: izgovara };
let debeliZec = { tip: "дебели", govor: izgovara };

beliZec.govor("Касним, касним, краљица ће бити љута!");
debeliZec.govor("Ал'сам гладан.");
```

у овом случају, једна функција `izgovara` је подешена да буде метод објекта на који реферише проеменљива `beliZec` и објекта на који реферише проеменљива `debeliZec`. &#9608;

**Пример.** Рад са особинама и методима објекта који представља тачку у дводименѕионалном простору:

```js
let tacka1 = {
    xKoordinata: 1.3,
    yKoordinata: 2.8,
    pojaviSe: ()=> console.log('ja sam tacka 1')
};

// prikaz osobina objekta
console.log(tacka1.xKoordinata);
console.log(tacka1["yKoordinata"]);

// poziva metod
tacka1.pojaviSe();

// provera da li je osobina sadržana u objektu
console.log("xKoordinata" in tacka1);
// provera da li je metod sadržan u objektu
console.log("pojaviSe" in tacka1);

// redefinisanje metoda
tacka1.pojaviSe = (x,y) => console.log(`ja sam tacka 1(${x}, ${y})`); 

// poziv redefinisanog metoda
tacka1.pojaviSe(tacka1.xKoordinata, tacka1.yKoordinata);
// poziv redefinisanog metoda
tacka1.pojaviSe();

// uklanjanje osobine objekta
delete tacka1.xKoordinata;
// pokusaj pristupanja uklonjenoj osobini
console.log(tacka1.xKoordinata);

// provera da li je osobina sadržana u objektu
console.log("xKoordinata" in tacka1);

// uklanjanje metode objekta
delete tacka1.pojaviSe;

// pokusaj poziva uklonjenog metoda dovodo do greske u izvrsavanju
tacka1.pojaviSe();
```

&#9608;

**Пример.** Пролазак кроз особинe и методе објекaта:

```js
let tacka1 = {
    xKoordinata: 1.3,
    yKoordinata: 2.8,
    pojaviSe: ()=> console.log('ja sam tacka 1')
};

for (let deo in tacka1)
   console.log(`${deo} - ${tacka1[deo]}`);
```

&#9608;

### Низови

С обзиром да је јаваСкрипт слабо типизирани језик то (за раѕлику од језика Јава и Це), ни низови нису+ису јако типизирани па се у низ могу смештати вредности различитих типова.

**Пример.** Дефиниција низа и приступ појединачним елементима низа:

```js
let nizBrojeva = [2, 3, 5, 7, 11];

console.log(nizBrojeva[1]);
console.log(nizBrojeva[1 - 1]);

console.log(nizBrojeva[17 - 1]);
console.log(nizBrojeva[- 1]);
```

&#9608;

**Пример.** Илуструје различите начине проласка кроз елементе низа:

```js
let niz = [1, 3, "Mika", "pera", false];

console.log("---");
for (let i = 0; i < niz.length; i++)
   console.log(niz[i]);

console.log("---");
for (let i in niz)
   console.log(niz[i]);

console.log("---");
for (let x of niz)
   console.log(x);
```

&#9608;

#### Методи над низовима

Слично као код објеката, методи се код низова могу посматрати као особине који реферишу на вредности-функције.

**Пример.** Примена метода `push`, `pop`, `join` који се односе на низове:

```js
let poruka = [];

poruka.push("nema");
poruka.push("povlačenja","nema");
poruka.push("predaje", 2 );

console.log(poruka);

console.log(poruka.join(" "));

console.log(poruka.join("+"));

console.log(poruka.pop());

poruka.pop()

console.log(poruka);
```

&#9608;

**Пример.** Примена метода  `push`, `shift`, `unshift` који се односе на низове:

```js
var podsetnik = [];

function podsetiMe(zadatak) {
    podsetnik.push(zadatak);
}

function staJeSledece() {
    return podsetnik.shift();
}

function hitnoMePodseti(zadatak) {
    podsetnik.unshift(zadatak);
}


podsetiMe("priprema slajdova za predavanja");
podsetiMe("priprema zadataka");
hitnoMePodseti("odgovoriti na pisma");
podsetiMe("kupovina knjige");

while (podsetnik.length != 0) {
    console.log(staJeSledece());
}
```

&#9608;

**Пример.** Примена метода  `indexOf`, `lastIndexOf`, `slice`, `concat` који се односе на низове:

```js
// prikazuje 1
console.log([1, 2, 3, 2, 1].indexOf(2));

// prikazuje 3
console.log([1, 2, 3, 2, 1].lastIndexOf(2));

// prikazuje [2 , 3]
console.log([0, 1, 2, 3, 4].slice(2, 4));
// prikazuje [2 , 3 , 4]
console.log([0, 1, 2, 3, 4].slice(2));

function ukloni(niz, indeks) {
    return niz.slice(0, indeks)
        .concat(niz.slice(indeks + 1));
}

// prikazuje [" a " , " b " , " d " , " e "]
console.log(ukloni([" a ", " b ", " c ", " d ", " e "], 2));
```

&#9608;

#### Низови и објекти

**Пример.** Илуструје како низови, који су такође објекти, имају своје особинe:

```js
let nizBrojeva = [2, 3, 5, 7, 11];

// osobini se moze pristupiti pomoću 
// operatora-tačke
console.log(nizBrojeva.length);

// osobini se moze pristupiti pomoću 
// uglastih zagrada i niske koja predstavlja 
// naziv osobine 
console.log(nizBrojeva["length"]);

console.log(nizBrojeva["le" + 'ng' + "th"]);

// pokusaj pristupa osobini koja ne postoji
console.log(nizBrojeva.lenght);

// pokusaj pristupa osobini koja ne postoji
console.log(nizBrojeva.duzina);
```

&#9608;

**Пример.** Одређивање типа током извршавања (обухвата функције, низове и објекте):

```js
// objekat
let x = { x: 1.7, y: 5.6 }
console.log(`${x} - ${typeof (x)}`)

// "prazan" objekat
delete x.x
delete x.y
console.log(`${x} - ${typeof (x)}`)

// "prazan" objekat
x = {}
console.log(`${x} - ${typeof (x)}`)

// funkcija 
x = function () {
    console.log("Sreca, sreca, radost")
}
console.log(`${x} - ${typeof (x)}`)

// lambda izraz 
x = () => console.log("Sreca, sreca, radost")
console.log(`${x} - ${typeof (x)}`)

// niz
x = [1, 2, 3]
console.log(`${x} - ${typeof (x)}`)

x = 1
console.log(`${x} - ${typeof (x)}`)

x = -1.7
console.log(`${x} - ${typeof (x)}`)

x = -Infinity
console.log(`${x} - ${typeof (x)}`)

x = NaN
console.log(`${x} - ${typeof (x)}`)

x = '1'
console.log(`${x} - ${typeof (x)}`)

x = "1"
console.log(`${x} - ${typeof (x)}`)

x = true
console.log(`${x} - ${typeof (x)}`)

x = undefined
console.log(`${x} - ${typeof (x)}`)

x = null
console.log(`${x} - ${typeof (x)}`)
```

&#9608;

**Пример.** Објекти који садрже низове и приступ појединим елементима у оквиру њих:

```js
// objekat koji predstavlja dnevnik
let dnevnik = [
  {
    preobrazajVeverica: true,
    aktivnosti: ["rad", "drvo", "pica", "trčanje", "televizija"]
  },
  {
    preobrazajVeverica: false,
    aktivnosti: ["hleb", "puding", "pranje zuba", "vikend", "drvo"]
  },
  {
    "preobrazajVeverica": false,
    "aktivnosti": ["lazanja", "naćosi", "pranje zuba", "rad"]
  }];

console.log("=== Prvi dan ===")
let prvi = dnevnik[0];
console.log(prvi.preobrazajVeverica);
console.log(prvi.aktivnosti);

console.log("=== Poslednji dan ===")
poslednji = dnevnik[dnevnik.length-1];
console.log(poslednji.preobrazajVeverica);
console.log(poslednji.aktivnosti);

console.log("=== Ceo dnevnik ===")
for (let i =0; i<dnevnik.length; i++) {
  console.log(dnevnik[i].preobrazajVeverica);
  console.log(dnevnik[i].aktivnosti);
}

console.log("=== Ceo dnevnik ===")
for (let i in dnevnik) {
  console.log(dnevnik[i].preobrazajVeverica);
  console.log(dnevnik[i].aktivnosti);
}
```

&#9608;

**Пример.** Низ који садржи објекте (који у себи садржи низове), кроз који се пролази коришћењем бројачког `for` циклуса и колекцијских циклуса `for-in` и `for-of`:

```js
// objekat koji predstavlja dnevnik
let dnevnik = [
    {
      preobrazajVeverica: true,
      aktivnosti: ["rad", "drvo", "pica", "trčanje", "televizija"]
    },
    {
      preobrazajVeverica: false,
      aktivnosti: ["hleb", "puding", "pranje zuba", "vikend", "drvo"]
    },
    {
      "preobrazajVeverica": false,
      "aktivnosti": ["lazanja", "naćosi", "pranje zuba", "rad"]
    }];
  
  console.log("=== Prvi dan ===")
  let prvi = dnevnik[0];
  console.log(prvi.preobrazajVeverica);
  console.log(prvi.aktivnosti);
  
  console.log("=== Poslednji dan ===")
  poslednji = dnevnik[dnevnik.length-1];
  console.log(poslednji.preobrazajVeverica);
  console.log(poslednji.aktivnosti);
  
  console.log("=== Ceo dnevnik ===")
  for (let i =0; i<dnevnik.length; i++) {
    console.log(dnevnik[i].preobrazajVeverica);
    console.log(dnevnik[i].aktivnosti);
  }
  
  console.log("=== Ceo dnevnik ===")
  for (let i in dnevnik) {
    console.log(dnevnik[i].preobrazajVeverica);
    console.log(dnevnik[i].aktivnosti);
  }

  console.log("=== Ceo dnevnik ===")
  for (let dan of dnevnik) {
    console.log(dan.preobrazajVeverica);
    console.log(dan.aktivnosti);
  }
```

&#9608;

Коришћењем методе `Array.from` може се од објекта кроји пима структуру која подсећа на низ, тј. од објекта кроз који се може итерирати, направити низ.

**Пример** Илуструје коришћење методе `Array.from`:

```js

```

&#9608;

#### Низ аргумената при позиву функције

**Пример.** Илуструје како се из тела функције може приступити аргументима позива, без обзира да ли тих аргумената има више или мање од параметара:

```js
function brojacArgumenata () {
    console.log("---");
    let s = "";
    for(let i in arguments)
        s += arguments[i];
    console.log(s);
    console.log ("Prilikom poziva su prosleđena " , arguments.length , " argumenta."); 
}

brojacArgumenata ("Ako kaniš " , "pobijediti" , " ne smiješ ", "izgubiti");

brojacArgumenata ("Ako kaniš pobijediti" , " ne smiješ izgubiti");

brojacArgumenata ("Ako kaniš pobijediti ne smiješ izgubiti");
```

```bash
Prilikom poziva su prosleđena 4 argumenta.
Prilikom poziva su prosleđena 2 argumenta.
Prilikom poziva su prosleđena 1 argumenta.
```

&#9608;

**Пример.**  Функција за рачунање суме бројева.

У програмском коду који следи, бројеви чија се сума рачуна се прослеђују приликом позива:

```js
let sumaBrojeva = function () {
    let ret = 0.0;
    for (let i in arguments) {
        let elem = Number(arguments[i]);
        if (!isNaN(elem))
            ret += elem;
    }
    return ret;
}

console.log(sumaBrojeva(1, 2, 3));
console.log(sumaBrojeva(1, 2, 3, [1,2]));
console.log(sumaBrojeva(1, 2, 3, [1]));
console.log(sumaBrojeva("Miki", "1", 2, "100.5", 3));
```

&#9608;

### Ниске

**Пример.** Ниска поседује тачно одређен скуп особина, које се не може проширивати:

```js
let niska1 = "Fido";

// prikazuje 4
console.log(niska1.length);

niska1.novaOsobina = "vrednost";

// prikazuje undefined
console.log ( niska1.novaOsobina ) ;
```

&#9608;

#### Методи над нискама

Слично као код објеката, методи се код ниски могу посматрати као особине који реферишу на вредности-функције.

**Пример.** Примена метода `slice`, `indexOf`, `trim`, `charAt` који се односе на ниске:

```js
// prikazuje nut
console.log("coconuts".slice(4, 7));

// prikazuje 5
console.log("coconuts".indexOf("u"));

// prikazuje 11
console.log("one two three".indexOf("ee"));

// prikazuje okay
console.log(" okay \n ".trim());

let niska = "+abc ";

// prikazuje +
console.log(niska.charAt(0));

// prikazuje a
console.log(niska[1]);
```

&#9608;

**Пример.** Опис и примена метода `toUpperCase` који се односи на ниске:

```js
console.log("Marković".toUpperCase);
console.log("Marković".toUpperCase());
```

&#9608;

### JSON

**Пример.** Конверзија објекта у JSON ниску и конверзија JSON ниске у објекат.

Прво ћемо на основу објекта направити ниску:

```js
let person = {
    name: "Miki Maus",
    born: 1980, 
    father:"Volt Dizni"
};

let niska = JSON.stringify(person);

console.log(niska);
```

Потом следи лонверзија JSON ниске у објекат:

```js
let opis = '{"name":"Miki Maus","born":1980, "father":"Volt Dizni"}';

let person = JSON.parse(opis);

console.log(person);
```

&#9608;

**Пример.** Конверзија низа објеката у JSON ниску и обратно.

Код који следи покаѕује како се добија ниска на основу ниѕа објеката:

```js
let family = [
  {"name": "Emma de Milliano", "sex": "f",
   "born": 1876, "died": 1956,
   "father": "Petrus de Milliano",
   "mother": "Sophia van Damme"},
  {"name": "Carolus Haverbeke", "sex": "m",
   "born": 1832, "died": 1905,
   "father": "Carel Haverbeke",
   "mother": "Maria van Brussel"}
];

let niska = JSON.stringify(family);
console.log(niska);
```

Скипт за конверзију JSON ниске у низ објеката:

```js
let opis = '[{"name":"Emma de Milliano","sex":"f","born":1876,"died":1956,'+
    '"father":"Petrus de Milliano","mother":"Sophia van Damme"},' +
    '{"name":"Carolus Haverbeke","sex":"m","born":1832,"died":1905,'+
    '"father":"Carel Haverbeke","mother":"Maria van Brussel"}]';

let family = JSON.parse(opis);
console.log(family.length);
for (var i = 0; i < family.length; i++)
    console.log(family[i].name + " " + family[i].sex +
         " " + family[i].born + " " + family[i].died);
```

&#9608;

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
