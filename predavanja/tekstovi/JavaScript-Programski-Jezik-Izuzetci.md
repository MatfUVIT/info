
# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Руковање грешкама

### Хватање грешака у програмском коду

Препоручује се да се у скрипти укључи тзв. стрктни мод.

Када се укључи стриктни мод, окружење за извршавање контролише да ли су декларисане променљиве које се користе у коду.

**Пример.** Илуструје како у језику ЈаваСкрипт могу остати сакривене грешке које се односе на недекларисане променљиве.

```js
function gdeLiJeProblem() {
  for (brojac = 0; brojac < 5; brojac++)
    console.log("Срећа, срећа, радост!");
}

gdeLiJeProblem();
```

Када се заборави да се декларише променљива у ЈаваСкрипту (као што је овде случај са променљивом `brojac`) ЈаваСкрипт окружење за извршавање неће пријавити грешку, већ ће у тишини креирати глобалну променљиву и програмски код ће извршити приказ на конзолу.

Дакле, резултат рада горњегг скрипта је:

```bash
Срећа, срећа, радост!
Срећа, срећа, радост!
Срећа, срећа, радост!
Срећа, срећа, радост!
Срећа, срећа, радост!
```

Ако се укључи опција за стриктни мод, као у коду који следи:

```js
function gdeLiJeProblem() {
  "use strict";
  for (brojac = 0; brojac < 5; brojac++)
    console.log("Срећа, срећа, радост!");
}

gdeLiJeProblem();
```

Тада ће се пријавити грешка и реѕултат ће бити:

```bash
  for (brojac = 0; brojac < 5; brojac++)
              ^
ReferenceError: brojac is not defined
    at gdeLiJeProblem...
```

&#9608;

Приликом рада у стриктном моду, тада се везивања типа функције која се односе на вредност `undefined` неће позивати као методи објекта. Међутим, ако се позив те врсте извршава у не-стриктном моду, тада ће `this` представљати глобални објекат, креирањем и читањем глобалне променљиве.

**Пример.** Илуструје како у језику ЈаваСкрипт могу остати сакривене грешке које се односе на креирање објеката.

Овде је уместо да се направи објекат, приступљено глобалном објекту, што ће надаље представљати проблем.

```js
function Osoba(ime) {
  this.ime = ime;
}

// Greska, zaboravljen 'new' ?
let mikiMaus = Osoba("Мики Маус");
console.log(ime);
```

Дакле, резултат рада горњег скрипта је:

```bash
Мики Маус
```

Међутим, ако се у стриктном моду метод конструктор позове на некоректан начин (без оператора `new`), ЈаваСкрипт окружење ће зауставити извршавање и приказати поруку о грешци:

```js
"use strict";
function Osoba(ime) {
  this.ime = ime;
}

// Greska, zaboravljen 'new' ?
let mikiMaus = Osoba("Мики Маус");
```

Грешка ће бити пријављена код наредбе којом се покушава очитати вресност поља у оквиру `this`.

```bash
  this.ime = ime;
           ^

TypeError: Cannot set property 'ime' of undefined
    at Osoba
```

&#9608;

### Дебагирање

### Реаговање на грешке

И у језику ЈаваСкрипт се може сигнализирати да је приликом извршавања функције дошло до грешке тако што ће бити враћена "специјална" повратна вредност.  


**Пример.** Илуструје како се у језику ЈаваСкрипт може реаговати на грешку.

У овом случају имамо функцију на коју реферише променљива `slucajanBrojIliMiki` - та функција некада враћа позитиван цео број мањи или једнак од `9`, некада негативан цео број већи или једнак `-9`, а некада ниску `Miki Maus`. Нека друга функција рачуна квадратни корен резултат који произведе прва функција.

```js
"use strict";

let slucajanBrojIliMiki = function () {
  if (Math.random() < 0.4)
    return Math.floor(Math.random() * 10);
  if (Math.random() < 0.8)
    return Math.floor(-Math.random() * 10);
  return "Miki Maus";
}

function kvadratniKoren(izvorPodataka) {
  let broj = Number(izvorPodataka());
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
```

Функција за рачунање квадратног корена очекује да се вредност добије извршењем функције која јој се прослежује као аргумент. Сама функција враћа објекат, чија особина `broj` садржи број који се коренује, а особина `rezultat` садржи резултат кореновања.

 У овом примеру не предузимају се никакве специјалне мере за детекцију грешке, само се прикаже резултат рада функције. &#9608;

Када се у детектује грешка у телу позване функције, једна од опција је да се постојање грешке сигнализира тако што ће наредбом `return` бити враћена нека специјална вредност која сигнализира да је дошло од грешке. Та специјална вредност може садржати енкодирану информацију о томе шта је проузроковало грешку.

**Пример.** Илуструје како се у језику ЈаваСкрипт у оквиру функције може реаговати на грешку враћањем специјалне вредности.

```js
"use strict";

let slucajanBrojIliMiki = function () {
  if (Math.random() < 0.4)
    return Math.floor(Math.random() * 10);
  if (Math.random() < 0.8)
    return Math.floor(-Math.random() * 10);
  return "Miki Maus";
}

function kvadratniKoren(izvorPodataka) {
  let broj = Number(izvorPodataka());
  if (isNaN(broj)) {
    let rezultat = "nemoguce korenovati nesto sto nije broj";
    return { "broj": broj, "rezultat": rezultat };
  }
  if (broj < 0) {
    let rezultat = "nemoguce korenovati negativan broj";
    return { "broj": broj, "rezultat": rezultat };
  }
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
```

У овом случају функција враће објекат, чија особина `broj` садржи број који се коренује, а особина `rezultat` ће бити број уколико је операција извршена без проблема или ће бити ниска са описом узрока, у случају да се појавила грешка. &#9608;

У сценарију када се грешка сигналзира преко повратне вредности, уобичајено је да, у случају да је детектована грешка, функција врати вредност `null` или `undefined`.

Међутим, структуирање кода на овакав начин има и одређене негативне ефекте, односно може довести до потенцијалних проблема:

1. Шта ће се догодити ако функција већ враћа све могуће вредности из домена? За такву функцију би било тешко наћи "специјалну" вредност, различиту од "регуларних", која ће служити за сигнализацију да је дошло до грешке.

2. Коришћење специјалних "повратних" вредности за сигнализацију грешке може довести до тога да структура програмског кода буде загађена, тешка за читање, разумевање, надоградњу и одржавање.

**Пример.** Ако се у претходном примеру функција `kvadratniKoren` позива `10` пута, онда се мора `10` пута проверавати ког је типа особина `rezultat` и коју вредност она садржи, па би после сваког позива функције морала да постоји наредба гранања у којој би се проверавало да ли је приликом извршења наступила грешка. Даље, уколико јесте наступила грешка, онда треба прекинути извршавање у датој функцији и одмах вратити "специјалну вредност", итд. навише кроз ланац (стек) позива, све до самог почетка... &#9608;

### Изузетци

Изуззетци су механизам који омогућује да програмски код који се извршава избаци изузетак - вредност која указује да је дошло до проблема.

Избацивање изузетка донекле подсећа на "појачани" повратак из функције. Ниме, на тај начин не само што текућа функција завршава рад, већ се искаче из ланца њених позиваоца, тј. иде се наниже кроз стек позива све до оног позива који је иницирао то извршавање и који "зна" како да обради изузетак. Претходно описани процес се незива одмотавање стека позива

Дакле, изузетак се спушта наниже и бива избачен кроз све контексте позива на стеку.

Ако би се избачени изузетак спустио до полазног позива, извршавање би се прекинуло, што програмеру није од велике помоћи. Моћ изузетака лежи у чињеници да се изузетку приликом спуштања кроз стек позива могу поставти елементи који га хватају (обично и обрађују) и на тај начин прекидају његово спуштање наниже. После хватања и обраде изузетка програм ће наставити рад од наредбе иза места где је дати изузетак ухваћен.

**Пример.** Илуструје како се у језику ЈаваСкрипт избацују и хватају изузетци, на примеру кореновања.

```js
"use strict";

let slucajanBrojIliMiki = function () {
  if (Math.random() < 0.4)
    return Math.floor(Math.random() * 10);
  if (Math.random() < 0.8)
    return Math.floor(-Math.random() * 10);
  return "Miki Maus";
}

function kvadratniKoren(izvorPodataka) {
  let broj = Number(izvorPodataka());
  if (isNaN(broj))
    throw new Error("nemoguce korenovati nesto sto nije broj");
  if (broj < 0)
    throw new Error("nemoguce korenovati negativan broj");
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

for (let i = 0; i < 10; i++)
  try {
    console.log(kvadratniKoren(slucajanBrojIliMiki));
  } catch (error) {
    console.log("Nesto je jako pogresno: *** " + error + " ***");
  }
console.log("---");
for (let i = 0; i < 10; i++)
  console.log(kvadratniKoren(slucajanBrojIliMiki));
```

&#9608;

**Пример.** Илуструје како се у језику ЈаваСкрипт избацују изузетци, и како се приликом хватања изузетака врши одмотавање стека.

```js
"use strict";

let pravac = function () {
  if (Math.random() < 0.3)
    return "levo";
  if (Math.random() < 0.6)
    return "desno";
  if (Math.random() < 0.8)
    return "gore";
  return "dole";
}

function voziAuto(usmerenje) {
  let rezultat = usmerenje();
  if (rezultat.toLowerCase() == "levo")
    return "L";
  if (rezultat.toLowerCase() == "desno")
    return "R";
  if (rezultat.toLowerCase() == "gore")
    throw new Error("Auto ne leti: " + rezultat);
  if (rezultat.toLowerCase() == "dole")
    throw new Error("Auto nije krtica: " + rezultat);
  throw new Error("Nekorektno smerenje za auto");
}

function pogled() {
  if (voziAuto(pravac) == "L")
    return "Sa ove strane se nalazi livada";
  else
    return "Sa ove strane su planine";
}

let brojPonavljanja = 10;

for (let i = 0; i < brojPonavljanja; i++)
  try {
    console.log(` ${i} Gledas iz auta. ${pogled()}`);
  } catch (error) {
    console.log("Nesto je jako pogresno: *** " + error + " ***");
  }
console.log("---");
for (let i = 0; i < brojPonavljanja; i++)
  console.log(` ${i} Gledas iz auta. ${pogled()}`);
```

&#9608;

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт догађаји](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
