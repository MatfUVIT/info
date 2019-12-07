
# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Функције вишег реда

### Функције као аргументи функција

Повратни позив (енгл. callback) је механизам, познат и у другим језицима, који омогућава да се функција проследи као параметар, да би касније била позвана по потреби. Ова пракса има корене у функционалном програмирању где је прослеђивање функција као параметара сасвим уобичајена ствар.

**Пример.** Реализовати приказ свих елемената низа.

Први, директни путеви за решавање постављеног задатка:

```js
let niz = [1, 2, 3, "mika", "zika"];

// prvi način
for (let i = 0; i < niz.length; i++) {
    let tekuci = niz[i];
    console.log(tekuci);
}

console.log("---");

// drugi način, kolekcijski ciklus for-in
for (let i in niz) {
    let tekuci = niz[i];
    console.log(tekuci);
}
console.log("---");

// treci način, kolekcijski ciklus for-of
for (let tekuci of niz) {
    console.log(tekuci);
}
```

Уочава се да су у сва три начина за приказ из претходног примера, и пролазак кроз низ и приказ елемента (тј. функција коју треба применити над сваким елементом) директно инкорпорирани у саму скрипту - нема посебних функција за то.

Стога, било би добро да се, приликом приказа свих елемената низа у посебној функцији релизује пролазак кроз низ, као у коду који следи:

```js
let nizBrojeva = [1, 2, 3, "mika", "zika";

function prikaziSvaki(niz) {
    for (let i = 0; i < niz.length; i++)
        console.log(niz[i]);
}

prikaziSvaki(nizBrojeva);
```

Ту је пролазак кроз низ (у овом случају реализован колекијским `for-of` циклусом) издвојен у посебну функцију. Међутим, активност која се извршава над сваким чланом  низа (у овој ситуацији се ради о приказу на конзолу) је инкорпорирана у оквиру те новонаправљене функције.  

Пожељно је да се приказ свих елемената низа релизује тако да у посебној функцији буде реализован пролазак кроз низ и да аргумент те функције буде функција која описује шта тррба урадити са елементом низа, као у коду који следи:

```js
let nizBrojeva = [1, 2, 3, 4, "mika", "zika"];

function zaSvaki(niz, akcija) {
    for (let x of niz)
        akcija(x);
}

prikazNaKonzolu = function (x) {
    console.log(x);
};
zaSvaki(nizBrojeva, prikazNaKonzolu);
console.log("---");

prikazNaKonzolu2 = (x) => console.log(x)
zaSvaki(nizBrojeva, prikazNaKonzolu2);
console.log("---");

zaSvaki(nizBrojeva, function (x) {
    console.log(x)
});
console.log("---");

zaSvaki(nizBrojeva, (x) => console.log(x));
```

У овом случају  funkcija `zaSvaki` као други аргумент има функцију која ће се извршити над сваким од елеманта низа. Као што се види из претходног примера, та функција може бити задата функцијским изразом или ламбде изразом, при чему тај израз може бити претходно додељен променљивој, или се директно начи у позиву функције. &#9608;

Један од најчешћих примера коришћења функција повратних позива су методи који се налазе у оквиру низова. На тај начин се пружа могућност проласка кроз елементе низа, њиховог испитивања или сортирања, уз могућност да сам програмер одреди шта ће се дешавати са појединачним елементима.

ПОчећемо од једноставног сценарија: с обзиром да се често јавља потреба да се нака акција изврши над свим члановима низа, то низови већ садрже метод `forEach` чијим се позивом обезбеђује управо таква функионалност.

**Пример.** Приказ свих елемената низа коришћењем метода `forEach` код низова:

```js
let nizBrojeva = [1, 2, 3, 4, "mika", "zika"];
nizBrojeva.forEach( (x) => console.log(x) )
```

&#9608;

**Пример.** Одредити суму бројева од `1` до `100`.

```js
let nizBrojeva = [1, 2, 3, 4, "mika", "zika"];
nizBrojeva.forEach( (x) => console.log(x) )
```

&#9608;

### Функције као генератори функција

**Пример.** Функције помоћу које се, позивима, креирају функције нижег реда (за поређење):

```js
function veciOd(n) {
    return function(m) {
        return m > n; };
}
var veciOd10 = veciOd(10);

// Prikazuje true
console.log(veciOd10(11));

// Prikazuje false
console.log(veciOd10(9.5));
```

&#9608;

**Пример.** Функција помоћу које се генеришу друге функције (за множење датим бројем):

```js
// primer zatvorenja
function umnozilac(faktor) {
    return function(broj) { return broj * faktor; };
}

var dupliraj = umnozilac(2);
console.log(dupliraj(4.5));
console.log(dupliraj(5.5));
var utrostruci = umnozilac(3);
console.log(utrostruci(4.5));
console.log(utrostruci(5.5));
var pomnoziSa2_25 = umnozilac(2.25);
console.log(pomnoziSa2_25(4.5));
console.log(pomnoziSa2_25(5.5));
```

&#9608;

**Пример.** Функција помоћу које се генеришу друге функције (за степеновање):

```js
function naStepen(izlozilac) {
    return function(osnova) {
        var ret = 1;
        for (var i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;
    };
}

var kvadriraj = naStepen(2);
console.log(kvadriraj(4.5));
var naKub = naStepen(3);
console.log(naKub(4));
var naDeseti = naStepen(10);
console.log(naDeseti(2));
```

&#9608;

### Повезивање функција при позиву

Као што је већ више пута истакнуто, у јазику ЈаваСКрипт, функције су грађани првог реда и оне се могу третирати као објекти. Над функцијама се могу примењивати следеће уграђене методе:

- `apply()` - Одређује у функцији на коју се примењује какво ће бити значење кључне речи `this` приликом њеног извршења и потом одах позива ту функцију  (енгл. invoke). Први аргумент дефинише на који објекат ће указивати кључна реч `this` приликом извршења, док су остали аргументи (који се прослеђују кроз низ) у ствари аргументи позива ове функције.

- `bind()` - Одређује у функцији на коју се примењује какво ће бити значење кључне речи `this` приликом њеног извршења. Први аргумент је објекат ће указивати кључна реч `this`, док су остали аргументи (који се прослеђују као списак) аргументи позива функције на коју се примењује `bind()`.

- `call()` -Ова метода одређује у изабраној функцији жељено значење кључне речи `this` и одмах позива функцију. Први аргумент дефинише на који објекат ће указивати кључна реч `this`, док су остали аргументи који се проследјују као листа аргумената, подаци потребни почетној функцији.

Као што је раније истакнуто, кључна реч `this` је код метода означавала објекат на д којим се метод примњује. Сада се може дати комплетан алгоритам којим се одређује шта значи ова кључна реч, тј. како је тумачи ЈаваСКрипт окружење за извршавање.

Цео поступак одређивања значења `this` се заснива на препознавању “ко” и на који начин позива функцију која садржи `this`. Редослед радњи је следећи:

1. Прво се проверава да ли је то конструкторска функција позвана са оператором `new()`. Уколико јесте, онда вредност `this` унутар конструкторске функције указује на приемрак (инстанцу) објекта који се креира.

2. Потом се проверава да ли је то функција позвана уз помоћ метода `call()`, `apply()` (или је пре позива функције извршено везивање са `bind()`). Ако јесте, онда вредност `this` реферише на одговарајући тј. први аргуменат који су приликом позива примиле функције `call()`, `apply()`, `bind()`.

3. Потом се проверава да ли се ради о методу објекта. АКо јесте, онда се `this` односи на објекат из ког је позвана та метода (другим речима на објекат који је "власник" методе).

4. Ако ниједна под преходних провера није дала позитиван резултат, тј. ако функција чије тело која седржи `this` није конструктор, није везивана помоћу  `call()`, `apply()`, `bind()` и није метод објекта, тада кључна реч `this` означава глобални објекат (он зависи од октужења за ињвршавање, кад се програмски код извршава у прегледачу тада је `Window` глобални објекат).

**Пример.** Илустрација функције која декорише позив неке друге функције:

```js
function bucna(f) {
    return function(arg) {
        console.log("poziv sa argumentom ", arg);
        var val = f(arg);
        console.log("pozvana sa argumentom ", arg, " - rezultat ", val);
        return val;
    };
}

bucna(Boolean)(0);
bucna(Boolean)(2);
bucna(Math.sin)(Math.PI/2);
bucna(Math.cos)(Math.PI/2);
```

&#9608;

**Пример.** Генерисање, декорисање и повезивање при позиву функција:

```js
function bucna2(f) {
    return function() {
        console.log("poziv sa argumentima ", arguments);
        return f.apply(null, arguments);
    };
}

console.log(bucna2(Boolean)(0));
console.log(bucna2(Math.max)(Math.PI / 2, 2, 3));
```

&#9608;


### Mапирање и редукција помоћу функција вишег реда

Постоје уграђени методи у објекту `Array` који подржавају овакав рад:

| Метода         | Опис                                                                                                  |
|----------------|-------------------------------------------------------------------------------------------------------|
| `filter()`     | Креира нови низ са елементима који су успешно проли тест дефинисан повратним позивом |
| `every()`      | Проверава да ли је сваки елеменат низа успешно прошао тест дефинисан повратним позивом |
| `find()`       | Враће вредност првог елемента низа који је успешно прошао тест дат повратним позивом |
| `findIndex()`  | Враће индекс првог елемента низа који је успешно прошао тест дат повратним позивом |
| `forEach()`    | Позива функцију повратног позива за сваки елемент низа |
| `map()`        | Креира нови низ који садржи резултате извршења повратног позива над сваким елементом оригиналног низа |
| `reduce()`     | Врши редукцију вредности елемената низа на једну вредност (редукција се извршава с лева удесно) |
| `reduceRight()`| Врши редукцију вредности елемената низа на једну вредност (редукција се извршава с десна улево)  |
| `some()`       | Проверава да ли постоји бар неки елемент низа који је успешно прошао тест дат повратним позивом |

**Пример.** Филтрирање података у колекцији:

```js
function filter(array, test) {
    let rez = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]))
            rez.push(array[i]);
    }
    return rez;
}

var opis = `[{"name":"Emma de Milliano","sex":"f",
"born":1876,"died":1956,
"father":"Petrus de Milliano","
mother":"Sophia van Damme"},
{"name": "Maria de Rycke", "sex": "f", 
"born": 1683, "died": 1724, 
"father": "Frederik de Rycke", "
mother": "Laurentia van Vlaenderen"},
{"name": "Jan van Brussel", "sex": "m", 
"born": 1714, "died": 1748, 
"father": "Jacobus van Brussel", 
"mother": "Joanna van Rooten"},
{"name": "Philibert Haverbeke", "sex": "m", 
"born": 1907, "died": 1997, 
"father": "Emile Haverbeke", 
"mother": "Emma de Milliano"}, 
{"name": "Jan Frans van Brussel", "sex": "m", 
"born": 1761, "died": 1833, 
"father": "Jacobus Bernardus van Brussel", 
"mother":null}, 
{"name": "Pauwels van Haverbeke", "sex": "m", 
"born": 1535, "died": 1582, 
"father": "N. van Haverbeke", 
"mother":null}, 
{"name": "Clara Aernoudts", "sex": "f", 
"born": 1918, "died": 2012, 
"father": "Henry Aernoudts", 
"mother": "Sidonie Coene"}, 
{"name": "Emile Haverbeke", "sex": "m", 
"born": 1877, "died": 1968, 
"father": "Carolus Haverbeke", 
"mother": "Maria Sturm"}, 
{"name": "Lieven de Causmaecker", "sex": "m", 
"born": 1696, "died": 1724, 
"father": "Carel de Causmaecker", 
"mother": "Joanna Claes"}, 
{"name": "Pieter Haverbeke", "sex": "m", 
"born": 1602, "died": 1642, 
"father": "Lieven van Haverbeke", 
"mother":null}, 
{"name": "Livina Haverbeke", "sex": "f", 
"born": 1692, "died": 1743, 
"father": "Daniel Haverbeke", 
"mother": "Joanna de Pape"}, 
{"name": "Pieter Bernard Haverbeke", "sex": "m",
 "born": 1695, "died": 1762, 
 "father": "Willem Haverbeke", 
 "mother": "Petronella Wauters"}, 
{"name": "Lieven van Haverbeke", "sex": "m", 
"born": 1570, "died": 1636, 
"father": "Pauwels van Haverbeke", 
"mother": "Lievijne Jans"}, 
{"name": "Joanna de Causmaecker", "sex": "f", 
"born": 1762, "died": 1807, 
"father": "Bernardus de Causmaecker", 
"mother":null}, 
{"name": "Willem Haverbeke", "sex": "m", 
"born": 1668, "died": 1731, 
"father": "Lieven Haverbeke", "mother": "Elisabeth Hercke"}, 
{"name": "Pieter Antone Haverbeke", "sex": "m", 
"born": 1753, "died": 1798, 
"father": "Jan Francies Haverbeke", 
"mother": "Petronella de Decker"}, 
{"name": "Maria van Brussel", "sex": "f", 
"born": 1801, "died": 1834, 
"father": "Jan Frans van Brussel", 
"mother": "Joanna de Causmaecker"}, 
{"name": "Angela Haverbeke", "sex": "f", 
"born": 1728, "died": 1734, 
"father": "Pieter Bernard Haverbeke", 
"mother": "Livina de Vrieze"}, 
{"name": "Elisabeth Haverbeke", "sex": "f", 
"born": 1711, "died": 1754, 
"father": "Jan Haverbeke", 
"mother": "Maria de Rycke"}, 
{"name": "Lievijne Jans", "sex": "f", 
"born": 1542, "died": 1582, 
"father":null, "mother":null}, 
{"name": "Bernardus de Causmaecker", "sex": "m", 
"born": 1721, "died": 1789, 
"father": "Lieven de Causmaecker", 
"mother": "Livina Haverbeke"}, 
{"name": "Jacoba Lammens", "sex": "f", 
"born": 1699, "died": 1740, 
"father": "Lieven Lammens", 
"mother": "Livina de Vrieze"}, 
{"name": "Pieter de Decker", "sex": "m", 
"born": 1705, "died": 1780, 
"father": "Joos de Decker", 
"mother": "Petronella van de Steene"}, 
{"name": "Joanna de Pape", "sex": "f", 
"born": 1654, "died": 1723, 
"father": "Vincent de Pape", 
"mother": "Petronella Wauters"}, 
{"name": "Daniel Haverbeke", "sex": "m", 
"born": 1652, "died": 1723, 
"father": "Lieven Haverbeke", 
"mother": "Elisabeth Hercke"}, 
{\"name\": \"Lieven Haverbeke\", \"sex\": \"m\", 
\"born\": 1631, \"died\": 1676, 
\"father\": \"Pieter Haverbeke\", 
\"mother\": \"Anna van Hecke\"},
{"name":"Carolus Haverbeke","sex":"m",
"born":1832,"died":1905,
"father":"Carel Haverbeke",
"mother":"Maria van Brussel"}]`;

let family = JSON.parse(opis);

// prikaz ljudi rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(filter(family, function (person) {
    return person.born > 1900 && person.born < 1925;
}));

// prikaz ljudi rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(filter(family, 
    (person) => person.born > 1900 && person.born < 1925));

// prikaz rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(family.filter(
    (x) => x.born > 1900 && x.born < 1925));

// prikaz muskaraca rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(filter(family, function (person) {
    return person.sex == 'm' 
            && (person.born > 1900 && person.born < 1925);
}));

// prikaz muskaraca rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(family.filter(
    person => person.sex == 'm' 
            && person.born > 1900 && person.born < 1925));

// prikaz muskaraca rodjenih izmedju 1900 i 1925
console.log(`---`);
console.log(family
    .filter(person => person.sex == 'm')
    .filter(person.born > 1900 && person.born < 1925));
```

Уочава се да је филтер у свим приказима, осим последња два, реализован коришћењем функције `filter()` коју је развио програмер. Само у последња два случаја је коришћена уграђена функција, тј. метод `filter()` објекта `Array`. Као што се види из последњег примера, коришћење уграђеног метода оомогућује приодно и лако уланчавање позива, што доводи до бољег крајњег резултата. &#9608;

**Пример.** Филтрирање и трансформација података у колекцији:

```js
function filter(array, test) {
    let passed = [];
    for (let i = 0; i < array.length; i++) {
        if (test(array[i]))
            passed.push(array[i]);
    }
    return passed;
}

function map(array, transform) {
    let mapped = [];
    for (var i = 0; i < array.length; i++)
        mapped.push(transform(array[i]));
    return mapped;
}

var opis = `[{"name":"Emma de Milliano","sex":"f",
"born":1876,"died":1956,
"father":"Petrus de Milliano","
mother":"Sophia van Damme"},`
/* *** */
+ `{"name":"Carolus Haverbeke","sex":"m",
"born":1832,"died":1905,
"father":"Carel Haverbeke",
"mother":"Maria van Brussel"}]`;

let family = JSON.parse(opis);

// filtriranje tako da se zadrže samo stariji od 90
console.log('---');
let starijiOd90 = filter(family, function (person) {
    return person.died - person.born > 90;
});
console.log(starijiOd90);

// transformisanje starijih od 90 pomoću map
console.log('---');
console.log(map(starijiOd90, function (person) {
    return person.name + " " + (person.died - person.born);
}));

// filtriranje tako da se zadrže samo stariji od 70
console.log('---');
let starijiOd70 = filter(family, 
         (person) => (person.died - person.born > 70));
console.log(starijiOd70);

// transformisanje starijih od 60 pomoću map
console.log('---');
console.log(map(starijiOd70, 
    (person) => ( person.name + " " + 
                 (person.died - person.born))));

// filtriranje i transformisanje pomoću metoda niza
console.log('---');
console.log(family.filter(x => x.died - x.born > 70)
                  .map(x=>x.name + " " + (x.died-x.born)));
```

Уочава се да су филтрирање и трансформација филтер (осим у последњем случају), реализовани коришћењем функција `filter()` и `map()` коју је развио програмер. Само у последњем случају су коришћене уграђене функције, тј. методИ `filter()` и `map()` објекта `Array`. Као што се види из последњег примера, коришћење уграђеног метода оомогућује приодно и лако уланчавање позива, што доводи до прегледнијег програмског кода, лакшег за одржавање. &#9608;

**Пример.** Филтрирање и сумирање података:

```js
function reduce(array, combine, start) {
    let current = start;
    for (let i = 0; i < array.length; i++)
        current = combine(current, array[i]);
    return current;
}

let niz = [2, 4, 3, 1, -5, 12, 7];

// prikaz svih clanova niza
console.log('--- Clanovi niza ---');
console.log(niz);

// odredjivanje sume svih clanova niza
console.log('--- Suma ---');
console.log(reduce(niz, function (a, b) {
    return a + b;
}, 0));


// odredjivanje sume svih clanova niza
console.log('--- Suma ---');
console.log(reduce(niz, (a, b) => a + b, 0));

// odredjivanje sume svih clanova niza pomocu metoda niza
console.log('--- Suma ---');
console.log(niz.reduce((a, b) => a + b, 0));

// odredjivanje sume svih pozitivnih clanova niza
console.log('--- Suma pozitivnih ---');
console.log(niz.filter((a) => a >= 0).reduce((a, b) => a + b, 0));

// odredjivanje sume svih clanova niza
console.log('--- Proizvod ---');
console.log(reduce(niz, (a, b) => a * b, 1));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(reduce(niz, function (a, b) {
    if (a < b)
        return a;
    return b;
}, Infinity));

// odredjivanje minimuma svih clanova niza
console.log('--- Minimum ---');
console.log(reduce(niz, (a, b) => (a < b) ? a : b, Infinity));

// odredjivanje maksimuma svih clanova niza
console.log('--- Maksimum ---');
console.log(reduce(niz, function (a, b) {
    if (a > b)
        return a;
    return b;
}, -Infinity));

// odredjivanje maksimuma svih clanova niza
console.log('--- Maksimum ---');
console.log(reduce(niz, (a, b) => (a > b) ? a : b, -Infinity));
```

&#9608;

**Пример.** Филтрирање, трансформација и сумирање података:

```js

let opis = 
`[{"name":"Emma de Milliano","sex":"f",
"born":1876,"died":1956,
"father":"Petrus de Milliano","
mother":"Sophia van Damme"},`
/* *** */
+ `{"name":"Carolus Haverbeke","sex":"m",
"born":1832,"died":1905,
"father":"Carel Haverbeke",
"mother":"Maria van Brussel"}]`;

let pretci = JSON.parse(opis);

function prosek(niz) {
    function plus(a, b) { return a + b; }
    return niz.reduce(plus) / niz.length;
}

function uzrast(p) { return p.died - p.born; }

function jeMusko(p) { return p.sex == "m"; }

function jeZensko(p) { return p.sex == "f"; }

console.log(prosek(pretci.filter(jeMusko).map(uzrast)));
console.log(prosek(pretci.filter(jeZensko).map(uzrast)));
```

&#9608;

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт](https://www.webprogramiranje.org){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
