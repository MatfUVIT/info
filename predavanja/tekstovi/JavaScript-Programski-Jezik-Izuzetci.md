
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

### Изузетци

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт догађаји](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
