
# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Руковање грешкама

овде ће бити описани механизми откривања грешака и руковања грешкама, ослањајући се на концепт изузетака.

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

Изузетци су механизам који омогућује да програмски код који се извршава избаци изузетак - вредност која указује да је дошло до проблема.

Избацивање изузетка донекле подсећа на "појачани" повратак из функције. Ниме, на тај начин не само што текућа функција завршава рад, већ се искаче из ланца њених позиваоца, тј. иде се наниже кроз стек позива све до оног позива који је иницирао то извршавање и који "зна" како да обради изузетак. Претходно описани процес се незива одмотавање стека позива

Дакле, изузетак се спушта наниже и бива избачен кроз све контексте позива на стеку.

Ако би се избачени изузетак спустио до полазног позива, извршавање би се прекинуло, што програмеру није од велике помоћи. Моћ изузетака лежи у чињеници да се изузетку приликом спуштања кроз стек позива могу поставти елементи који га хватају (обично и обрађују) и на тај начин прекидају његово спуштање наниже. После хватања и обраде изузетка програм ће наставити рад од наредбе иза места где је дати изузетак ухваћен.

#### Избацивање изузетка

**Пример.** Илуструје како се у језику ЈаваСкрипт избацују изузетци, на примеру кореновања.

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
  console.log(kvadratniKoren(slucajanBrojIliMiki));
```

&#9608;

**Пример.** Илуструје како се у језику ЈаваСкрипт избацују изузетци и како се врши одмотавање стека.

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
  throw new Error("Nekorektno usmerenje za auto");
}

function pogled() {
  if (voziAuto(pravac) == "L")
    return "Sa ove strane se nalazi livada";
  else
    return "Sa ove strane su planine";
}

for (let i = 0; i < 10; i++)
  console.log(` ${i} Gledas iz auta. ${pogled()}`);
```

&#9608;

#### Хватање изузетака

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
```

&#9608;

**Пример.** Илуструје како се у језику ЈаваСкрипт избацују и хватају изузетци и како се врши одмотавање стека.

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
  throw new Error("Nekorektno usmerenje za auto");
}

function pogled() {
  if (voziAuto(pravac) == "L")
    return "Sa ove strane se nalazi livada";
  else
    return "Sa ove strane su planine";
}

for (let i = 0; i <10; i++)
  try {
    console.log(` ${i} Gledas iz auta. ${pogled()}`);
  } catch (error) {
    console.log("Nesto je jako pogresno: *** " + error + " ***");
  }
```

&#9608;

#### Финално поспремање код изузетака

Као што је већ истакнуто, приликом избацивања изузетака врши се "одмотавање" стека. Поставља се питање: да ли се приликом одмотавања може доћи у ситуацију да контекти функција који се извршавају (који се такође чувају на стеку) буду "изгубљени"?

**Пример.** Илуструје како се у језику ЈаваСкрипт избацивања изузетка унутар тела функције може довести до тога да подаци који је та функција поставила не буду адекватно поспремљени.

Овде функцја `izvrsiSaKontekstom` треба да обезбеди да током свог извршавања променљива `kontekst` (која је за њу глобална) садржи дату вредност. Наравно, на завршетку свог рада, вредност те глобалне промељиве треба рестаурисати на ону вредност коју је она имала на почетку рада те функције.

```js
"use strict";

let kontekst = null;
console.log(kontekst);

function izvrsiSaKontekstom(noviKontekst, teloFunkcije) {
  let stariKontekst = kontekst;
  kontekst = noviKontekst;
  let rezultat = teloFunkcije();
  kontekst = stariKontekst;
  return rezultat;
}

console.log("---")
izvrsiSaKontekstom(25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);
izvrsiSaKontekstom(-25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);


console.log("---")
try {
  izvrsiSaKontekstom(16, function (x) {
    if (kontekst < 0)
      throw new Error("Nemoguce izracunati koren negativnog broja!");
    console.log(Math.sqrt(kontekst));
  });
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);

console.log("---")
try {
  izvrsiSaKontekstom(-16, function () {
    if (kontekst < 0)
      throw new Error("Nemoguce izracunati koren negativnog broja!");
    console.log(Math.sqrt(kontekst));
  });
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);
```

Међутим, шта се дешава уколико дође до избацивања изузетка у телу функције коју извршава функција `izvrsiSaKontekstom`, a на коју реферише параметар `teloFunkcije`?

У том случају позив наредбе којом се рестаурише вредност промељиве контекст ће нестати са стека услед његовог одмотавања, па неће бити  могућа рестаурација вредности променљиве `kontekst` на њену оригиналну вредност. &#9608;

Иза наредбе `try` може следити `finally` блок, који се може наћи уместо `catch` блока, или евентуално може следити иза  `catch` блока. 

Овај `finally` блок означава да ће се код у њему извршити иза покушаја извршења `try` блока у сваком случају - и ако се код у `try` блоку нормално извршио и ако је био избачен изузетак током извршавања наредби `try` блока.

Дакле, ако има нешто шта треба "поспремити", онда се код за поспремањеобично смешта у `finally` блок.

**Пример.** Илуструје како се у језику ЈаваСкрипт помоћу кључне речи `finally` може реализовати "поспремање".

У овом примеру, за разлику од претходног, нема више потреба да се вредност резултата добијеног извршавањем функције на коју реферише параметар `teloFunkcije` смешта у посебну промељиву.

```js
"use strict";

let kontekst = null;
console.log(kontekst);

function izvrsiSaKontekstom(noviKontekst, teloFunkcije) {
  let stariKontekst = kontekst;
  kontekst = noviKontekst;
  try {
    return teloFunkcije();
  } finally {
    kontekst = stariKontekst;
  }
}

console.log("---")
izvrsiSaKontekstom(25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);
izvrsiSaKontekstom(-25, () => console.log(Math.sqrt(kontekst)));
console.log(kontekst);


console.log("---")
try {
  izvrsiSaKontekstom(16, function (x) {
    if (kontekst < 0)
      throw new Error("Nemoguce izracunati koren negativnog broja!");
    console.log(Math.sqrt(kontekst));
  });
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);

console.log("---")
try {
  izvrsiSaKontekstom(-16, function () {
    if (kontekst < 0)
      throw new Error("Nemoguce izracunati koren negativnog broja!");
    console.log(Math.sqrt(kontekst));
  });
} catch (e) {
  console.log("Ignorise se izuzetak: " + e);
}
console.log(kontekst);
```

Уочава се да ће, чак и када се наредба `return` изврши директно у `try` блоку, наредбе унутар `finally` блока бити извршене. &#9608;

#### Селективно хватање изузетака

Програмски језик ЈаваСКрипт не садржи директну подршку за селективно хватање изузетака. Другим речима, или ће се хватати сви изузетци, или се неће хватати ниједан.

Стога би, на први поглед, програмер могао подразумевати да је изузетак који је избачен баш онај изузетак на који се мислило када је писан `catch` блок.

Међутим, то често не бива случај - бивају прекршене неке друге претпоставке, или се негде друго појавио баг због ког је избачен изузетак различит од оног ког је програмер очекивао.

Стога се сугерише и у ЈаваСкрипту да се не прави руковала за обраду свих могућих изузетака, осим у сврху усмеравања тих изузетака њиховом правом руковаоцу (а и у том случају пажљиво треба размотрити како реализовати концепт сактивања информација).

**Пример.** Илуструје како се у језику ЈаваСкрипт реализује селективно хватање изузетака.

У једном од претходних примера који се бавио усмеравањем аутмобила, у случају свих нерегуларних ситуација је, без обзира на узрок који је довео до такве ситуације, избациван објекат типа `Error`. То је могло довести до компликације приликом хватања изузетка и његове даље обраде.

Наравно, постоји могућност да се при руковању анализира порука придружена изузетк током његовог креирања и на основу тога закључи шта је узрок изузетка, али такав приступ није добар:

- поруке су предвиђене да их чита крајњи корисник, а не да се на основу њих доносе одлуке о току извршења програма

- приступ није робустан због скривених зависности - чим би неко променио (нпр.превео) поруку, програм више не би радио оно за шата је предвиђен.

Стога, пожељно је да се у таквим случајевима дефинишу нови типови изузетака и да се приликом хватања и обраде они идентификују коришљењем `instanceof`.

У програмском коду који следи, ти нови типови `NeMozeIspodZemljeError` и `NeMozePrekoNebaError` су креирани помоћу прототипова.

```js
"use strict";

function NeMozeIspodZemljeError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
NeMozeIspodZemljeError.prototype = Object.create(Error.prototype);
NeMozeIspodZemljeError.prototype.name = "NeMozeIspodZemljeError";

function NeMozePrekoNebaError(message) {
  this.message = message;
  this.stack = (new Error()).stack;
}
NeMozePrekoNebaError.prototype = Object.create(Error.prototype);
NeMozePrekoNebaError.prototype.name = "NeMozePrekoNebaError";

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
    throw new NeMozePrekoNebaError("Auto ne leti: " + rezultat);
  if (rezultat.toLowerCase() == "dole")
    throw new NeMozeIspodZemljeError("Auto nije krtica: " + rezultat);
  throw new Error("Nekorektno usmerenje za auto");
}

function pogled() {
  if (voziAuto(pravac) == "L")
    return "Sa ove strane se nalazi livada";
  else
    return "Sa ove strane su planine";
}

for (let i = 0; i < 50; i++)
  try {
    console.log(` ${i} Gledas iz auta. ${pogled()}`);
  } catch (error) {
    if (error instanceof NeMozeIspodZemljeError)
      console.log("Podzemlje: " + error + " ***");
    else if (error instanceof NeMozePrekoNebaError)
      console.log("Nembeski svod: " + error + " ***");
    else {
      console.log("Nesto je jako pogresno: *** " + error + " ***");
      throw error;
    }
  }
```

&#9608;

### Тврдње

Тврдње (енгл. аssertions) су алат за основну контролу "здравља" програма, који олакшавају проналазак багова. Тврдње дају компактан начин да се експлицитно искажу очекивања (предуслови) за успешан рад делова система и истовременоо обезбеђују да се програм заустави одмах чим се утврди да експлицитно исказана очекивања нису испуњена.

Другим речима, тврдње представљају начин да се обезбеди да грешке доводе до прекида извршавања тамо где је настала грешка, како би се спречило да та грешка у тишини произведе бесмислену вредност, која би могла да изазове проблем у неком другом делу система.

За разлику од неких других програмских језика, ЈаваСкрипт директно не подржава тврдње, али се одговарајући механизам може имплеметирати ослањајући се на изузетке.

**Пример.** Илуструје како се у језику ЈаваСкрипт могу реализовати тврдње.

Функицје `lastElement`, која враће последњи елемент низа, би (кад не би била постављена тврдња) вратила `undefined` ако би се као аргумент проследио празан низ. С обзиром да нема много смисла тражити последњи елеменат празног низа, сигурно се ради о некој врсти грешке и ту се може поставити тврдња.

Аналогна ситуација је и код функције `еlement` која враће елемент низа на датој позицији. Овде су постављене тврдње да "низ не сме бити празан", да "индекс низа мора бити број", да "индекс низа не сме бити негативан" и да "индекс низа мора бити мањи од броја чланова".

```js
"use strict";

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "niz ne sme biti prazan");
  return array[array.length - 1];
}

function element(array, index) {
  assert(array.length > 0, "niz ne sme biti prazan");
  assert( typeof(index) == Number, "indeks niza mora biti broj" )
  assert(index >= 0, "indeks niza ne sme biti negativan");
  assert(index < array.length, "indeks niza mora biti manji od broja clanova");
  return array[index];
}

let niz1 = [];
let niz2 = ["Paja", "Miki", "Mini", "Silja"];

console.log(lastElement(niz2));
//console.log(lastElement(niz1));

//console.log(element(niz1, 1));
//console.log(element(niz1, 0));
console.log(element(niz2, 2));
//console.log(element(niz2, "Miki"));
//console.log(element(niz2, "2"));
//console.log(element(niz2, -2));
//console.log(element(niz2, 4));
```

Потребан услов за успешан рад са тврдњанма које су реализоване на овај начин је да се нигде где се рукује са изузетцима не врши хватање изузетка типа `AssertionFailed`, нити његова обрада. &#9608;

### Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
