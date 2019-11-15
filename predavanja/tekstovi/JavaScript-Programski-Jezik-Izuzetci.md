
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
  return {broj, rezultat};
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
```

У овом примеру не предузимају се никакве специјалне мере за детекцију грешке. &#9608;


One option is to make it return a special value. 

**Пример.** Илуструје како се у језику ЈаваСкрипт може реаговати на грешку.

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
  if( isNaN(broj) ){
    let rezultat = "nemoguce korenovati nesto sto nije broj";
    return {broj, rezultat};
  }
  if( broj < 0){
    let rezultat = "nemoguce korenovati negativan broj";
    return {broj, rezultat};
  }
  let rezultat = Math.sqrt(broj);
  return {broj, rezultat};
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
```

&#9608;

Common choices for such values are null and undefined.

This policy, however, have its downsides. 

First, what if the function can already return every possible kind of value? 

For such a function, it is hard to find a special value that can be distinguished 
from a valid result.

The second issue with returning special values is that it can lead to some very 
cluttered code.
 
If a piece of code calls promptNumber 10 times, it has to check 10 times whether 
null was returned. 



And if its response to finding null is to simply return null itself, 
the caller will in turn have to check for it, and so on.


### Изузетци

Изуззетци су механизам који омогућује да програмски код који се извршава избаци изузетак - вредност која указује да је дошло до проблема.

Избацивање изузетка донекле подсећа на "појачани" повратак из функције. Ниме, на тај начин не само што текућа функција завршава рад, већ се искаче из ланца њених позиваоца, тј. иде се наниже кроз стек позива све до оног позива који је иницирао то извршавање и који "зна" како да обради изузетак. Претходно описани процес се незива одмотавање стека позива

Дакле, изузетак се спушта наниже и бива избачен кроз сев контексте позива на стеку.

Ако би се избачени изузетак спустио до полазног позива, извршавање би се прекинуло, што програмеру није од велике помоћи. Моћ изузетака лежи у чињеници да се изузетку приликом спуштања кроз стек позива могу поставти елементи који га хватају (обично и обрађују) и на тај начин прекидају његово спуштање наниже. После хватања и обраде изузетка програм ће наставити рад од наредбе иза места где је дати изузетак ухваћен.

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт догађаји](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
