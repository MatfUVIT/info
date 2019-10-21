
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

#### Методи код објеката

Методи се могу посматрати као особине који реферишу на вредности-функције.

**Пример.** Методи код објекaта имају динамичку природу:

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

### Низови

**Пример.** Дефиниција низа и приступ појединачним елементима низа:

```js
let nizBrojeva = [2, 3, 5, 7, 11];

console.log(nizBrojeva[1]);
console.log(nizBrojeva[1 - 1]);

console.log(nizBrojeva[17 - 1]);
console.log(nizBrojeva[- 1]);
```

**Пример.** Приступ особинама низа:

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

#### Низови и објекти

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

Коришћењем методе `Array.from` може се од објекта кроји пима структуру која подсећа на низ, тј. од објекта кроз који се може итерирати, направити низ.

**Пример** Илуструје коришћење методе `Array.from`:

```js

```


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

#### Методе над нискама

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

**Пример.** Опис и примена метода `toUpperCase` који се односи на ниске:

```js

console.log("Marković".toUpperCase);
console.log("Marković".toUpperCase());
```

### JSON

**Пример.** Конверзија објекта у JSON ниску :

```js
let person = {
    name: "Miki Maus",
    born: 1980, 
    father:"Volt Dizni"
};

let niska = JSON.stringify(person);

console.log(niska);
```

**Пример.** Конверзија JSON ниске у објекат:

```js
let opis = '{"name":"Miki Maus","born":1980, "father":"Volt Dizni"}';

let person = JSON.parse(opis);

console.log(person);
```

**Пример.** Конверзија низа објеката у JSON ниску:

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

**Пример.** Конверзија JSON ниске у низ објеката:

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

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт догађаји](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
