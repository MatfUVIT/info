
# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Oбјекти и низови

Објектно оријентисано програмирање је програмска парадигма која користи апстракцију за креирање модела заснованих на стварном свету. Данас многи програмски језици подржавају објектно оријентисано програмирање.

Код објектно оријентисаног програмирања програм се може посматрати као колекција кооперативних објеката, за разлику од традиционалног погледа у којем се програм може посматрати као колекција функција, или као секвенца инструкција за рачунар.

У објектно оријентисаном програмирању, сваки објекат је способан да прима поруке, обрађује податке и шаље поруке ка другим објектима. Сваки објекат се може посматрати као независна целина са јасним улогама и одговорностима.

Објектно оријентисано програмирање има за циљ да промовише већу флексибилност одржавања и проширивања постојећих програма. Захваљујући свом јаком нагласку на модуларности, објектно оријентисани код би требао да буде једноставнији за разовој и лакши за разумевање.

ЈаваСкрипт је језик базиран на објектима. Са изузетком конструкција као што су циклуси и оператори, скоро све ЈаваСкрипт могућности су, у већој или мањој мери, имплементиране коришћењем објеката.

Понекад се објекти експлицитно користе за обављање одређених задатака, као нпр. манипулација над (X)HTML елементима, док је у другим случајевима улога објеката мање очигледна, као нпр. улога Number објекта током рада са бројевима.

### Објекти

Објекти у ЈаваСцрипт-у се могу поделити у четири групе:

1. Објекти које дефинише сам програмер.

2. Објекти уграђени у ЈаваСкрипт. Ту спадају објекти који омотавају приемитвне типове података (`String`, `Number`, `Boolean`), објекти који омогућавају креирање кориснички дефинисаних објеката и сложених типова (`Object`, `Array`) и објекти који поједностављују уобичајене задатке, као што су `Date`, `Math`.

3. Објекти дефинисани у оквиру API прегледача веба. Ови објекти нису део ЈаваСкрипт језика, али их подржава огромна већина веб прегледача. Примери таквих објеката су објекти `Window`, `Navigator`, `Document`, о којима ће бити речи касније.

4. Објекти који су део DOM, дефинисани W3C стандардом. Ови објекти омогућавају ЈаваСkрипту манипулацију над CSS-ом, и лакшу реализацију Динамичког HTML-а (DHTML).

Објекти су композитни типови података, обједињују више вредности. Другим речима, објекат је неуређен скуп **својстава** (особина, атрибута) од којих свако има име и вредност. Именоване вредности могу бити примитивног типа (бројеви, ниске, логичке вредности) или и саме могу бити објекти.

Објекат се најлакше прави помоћу објектног литерала. Објектни литерал састоји се од списка својстава, где се двотачка (тј знак `:`) поставља између имена својства и његове вредности. Својства у списку се међусобно раздвајају зарезима (знаком `,`), а списак се наводи унутар витичастих заграда (пара знакова `{` и `}`).

Оператори поређења `==` и `===` се могу примењивати и на променљиве које реферишу на објекте. Оператори једнакости и идентичности, када се примене на објекте, враћу `true` само у случају када се ради о референцама које реферишу на исти простор у меморији.

**Пример.** Илустрација коришћења објектног литерала и поређења објеката.

```js
let  object1 = {
    value: 10
};

let object2 = object1;

let object3 = {
    value: 10
};

console.log(object1 == object2);
// Prikazuje true

console.log(object1 == object3);
// Prikazuje false

object1.value = 15;
console.log(object2.value);
// Prikazuje 15

object2.value = 17;
console.log(object1.value);
// Prikazuje 17

console.log(object3.value);
// Prikazuje 10
```

&#9608;

#### Особине објеката

Особине (својства) објекта су елементи који се налазе у оквиру објекта. Свака особина у оквиру објекта има своје име и вредност.

Својства објекта се понашају као променљиве, могуће је уписивати вредности у њих и читати вредсности из њих. Својства могу да садрже било који тип података, укључујући и низове, функције и друге објекте.

Вредности својства објекта се може приступити тако што се наведе објекат, потом тачка и назив својства. Алтернативно, вредности својства датог објекта може да се приступи и коришћењем угластих заграда (знакова `[` и  `]`).

Елементи `null` и `undefined` не садрже својства и покушај приступа њиховим својствима доводи до грешке која (ако не буде ухваћене) условљава завршетак извршавања.

**Пример.** Илустује приступ својствима (особинама) објекта.

```js
let obj = {
    ime: "Miki",
    length: 4
};

console.log(obj.length);
console.log(obj.ime);

console.log(obj.duzina);

console.log(obj["ime"]);
console.log(obj[ String.fromCharCode(105) + "me"]);

console.log(null.length);
console.log(null.duzina);
console.log(undefined.length);
console.log(undefined.duzina);
```

Као што се може уочити приликом извршавања да покушај читања вредности непостојећег својства датог објекта не прекида извршавање скрипте, већ даје вредност `undefined`. Покушај читања вредности својства за `null` или `undefined` доводи до избацивања грешке. &#9608;

Својство објекта може се обрисати помоћу оператора `delete`. Провера да ли дати објекат поседује неко својство или не може да се испита помоћу оператора `in`.

**Пример.** Илуструје динамичност особина објекaта.

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

Оператор `in` је јавља и у `for-in` циклусу, који омогућава да се итеративно приступа својствима објекта, тј. да се својства набрајају.

**Пример.** Илуструје пролазак кроз особинe објекaта.

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

**Пример.** Илуструје, на примеру зеца, како један метод може да се придружи већем броју обеката.

```js
let izgovara = function (tekst) {
    console.log(`${this.tip} зец каже '${tekst}'`);
}
let beliZec = { tip: "бели", govor: izgovara };
let debeliZec = { tip: "дебели", govor: izgovara };

beliZec.govor("Касним, касним, краљица ће бити љута!");
debeliZec.govor("Ал'сам гладан.");
```

у овом случају, једна функција `izgovara()` је подешена да буде метод објекта на који реферише проеменљива `beliZec` и објекта на који реферише проеменљива `debeliZec`. У телу функције `izgovara()` се помоћу кључне речи `this` реферише на објекат из ког се позива функција. &#9608;

**Пример.** Рад са особинама и методима објекта који представља тачку у дводимензионалном простору:

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

Низ је уређен скуп вредности. Те вредности се називају елементи низа. Сваки елемент низа има своју нумерички описану позицију - индекс. Низ у ЈаваСкрипту може да се посматра као објекат чија су својства позиције у низу тј. индекси, а вредност која одговара том својству је елеменат низа на датој позицији.

С обзиром да је JаваСкрипт слабо типизирани језик то (за разлику од језика Јава и C), ни низови нису јако типизирани па се у низ могу смештати вредности различитих типова. Из истог разлога, не морају сви елементи једног низа бити истог типа.

Најједноставније, низ се може декларисати тако што се експлицитно наброје елементи низа раздвојени зарезима, унутар угластих заграда.

**Пример.** Дефиниција низа и приступ појединачним елементима низа:

```js
let nizBrojeva = [2, 3, 5, 7, 11];

console.log(nizBrojeva[1]);
console.log(nizBrojeva[1 - 1]);

console.log(nizBrojeva[17 - 1]);
console.log(nizBrojeva[- 1]);
```

&#9608;

За рад са елементима низа се (слично као у рограмском језику C), поред раније описаних наредби циклуса `while` и `do-while`, најчешће користи наредба циклуса `for` где се у иницијализационој секцији циклуса дефинише променљива чија ће се вредснот користити као индекс за приступ појединим члановима низа.

Поред овог, тзв. бројачког `for` циклуса, језик ЈаваСкрипт подржава и још два циклуса: `for-in` и `for-of`.

Код циклуса `for-in` ће променљива дефинисана у оквиру наредбе редом узимати вредности **индекса** сукцесивних чланова низа - од почетка до краја, док ће код циклуса `for-of` променљива дефинисана у оквиру наредбе редом узимати вредности **елемената** сукцесивних чланова низа - од почетка до краја.

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

Део метода (оне једноставније) које се могу применити на низ су дате следећеом табелом:

| Метода         | Опис                                                                                      |
|----------------|-------------------------------------------------------------------------------------------|
| `concat()`     | Враће спој два или више низова  |
| `copyWithin()` | Враће низ са копијама елемената из низа између задатих позиција - аргументи `to` и `from` |
| `fill()`       | Попуњава све елементе низа датом вредношћу |
| `indexOf()`    | Тражи елемента у низу и враће његову позицију |
| `isArray()`    | Проверава да ли аргумент заиста јесте низ |
| `join()`       | Враће стринг настао спајањем свих елемената низа |
| `lastIndexOf()`| Тражи елемента у низу од краја према почетку и враће његову позицију |
| `pop()`        | Уклања последњи елеменат низа, враће управо уклоњени елеменат |
| `push()`       | Додаје нови елеменат на крај низа, враће нову дужину низа |
| `reverse()`    | Премeшта (у месту) елементе датог низа да би се постигао обрнути редослед  |
| `shift()`      | Уклања први елеменат низа, враће управо уклоњени елеменат |
| `slice()`      | Бира део, тј. "исечак" низа, враће изабрано као нови низ |
| `sort()`       | Сортира (у месту) елементе датог низа |
| `splice()`     | Додаје/уклања елементе из низа |
| `toString()`   | Враће ниску која представња елементе низа |
| `unshift()`    | Додаје нови елеменат на почетак низа, враће нову дужину низа |
| `valueOf()`    | Враће примитивну вредност низа |

**Пример.** Примена метода `push()`, `pop()`, `join()` који се односе на низове:

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

**Пример.** Примена метода  `push()`, `shift()`, `unshift()` који се односе на низове:

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

**Пример.** Примена метода  `indexOf()`, `lastIndexOf()`, `slice()`, `concat()` који се односе на низове:

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

**Пример.** Илуструје како низови, који су такође објекти, имају своје особинe.

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

Уочава се да функција `typeof()` када се примени на низ даје резултат `Object`. АКо је потребно проверити да ли дати објекат ѕаиста представља низ, треба користити функцију `isArray()`.  &#9608;

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

Коришћењем методе `from()` из `Array` може се од објекта кроји има структуру која подсећа на низ, тј. од објекта кроз који се може итерирати, направити низ.

**Пример** Илуструје коришћење методе `Array.from`.

```js
let objekat = 'Miki Maus';
console.log(objekat);

let rezultat = Array.from(objekat);
console.log(rezultat);

console.log('---')
let niz = [1, 2, 3];
rezultat = Array.from(Array.from(niz, x => x + x));
console.log(rezultat);
```

Уочава се у другом приказу како и функције, као грађани првог реда, могу да буду аргументи метода. &#9608;

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

**Пример.** Примена метода `slice()`, `indexOf()`, `trim()`, `charAt()` који се односе на ниске:

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

**Пример.** Опис и примена метода `toUpperCase()` који се односи на ниске:

```js
console.log("Marković".toUpperCase);
console.log("Marković".toUpperCase());
```

&#9608;

### JSON

JSON, односно ЈаваСкрипт Објектна Нотавија, је отворени стандард дизајниран за престављање и размену података, тако да је резумљив људима. ЈСОН користи текстуално (а не бинарно) представљање података.

Као што само имае каже, JSON је изведен из ЈаваСкрипта и користи његове контрукцоје за представљање једноставних структура података (објеката) и низова. Упркос вези са ЈаваСкриптом, то је језички независтан сатанард, подржан од стране многих програмских језика.

JSON формат је првобитно направио Даглас Крокфорд, а описан је у [RFC 4627](https://tools.ietf.org/html/rfc4627){:target="_blank"}. Званична врста интернет медија (енгл. MIME type) за JSON је `application/json`. Датотеке које садрже JSON имају екстензију `.json`.

JSON формат се често користи за серијализацију и пренос структурираних података преко мреже, као и за размену података између сервера и веб апликације, уместо XML-a.

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

Код који следи показује како се добија ниска на основу низа објеката:

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
