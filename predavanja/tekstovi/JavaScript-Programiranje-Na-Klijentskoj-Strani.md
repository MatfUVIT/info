
# УВИТ - ЈаваСкрипт програмирање на клијентској страни

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Увод

Овде се разматра коришћење језика ЈаваСкрипт за веб програмирање на клијентској страни. Наиме, приликом довлачења веб странице, довлачи се и смешта у прегледач ЈаваСкрипт код који се извршава. Приликом приказа веб странице се извршава у прегледачу претходно довучени ЈаваСкрипт код, који приликом извршавања интерагује са елементима на веб страни и динамички их мења.

## ЈаваСкрипт функције и веб

Из клијентског ЈаваСкрипт-а се може програмски приступити елементима на веб страни, читати их, мењати њихове атрибуте, додавати их или брисати, по потреби.

### ЈаваСкрипт објекти на веб страни

Свака веб страна омогућује да се из ЈаваСкрипт кода приступа следећим објектима:

- `window`: објекат највишег нивоа; садржи својства примењива на целокупан прозор

- `location`: садржи својства текуће URL локације

- `history`: садржи својства претходно посећених

- `document`: садржи својства садржаја текућег документа, као што су наслов (`title`), боја позадине (`bgcolor`), форме итд.

**Пример.** Примери постављања својстава за објекте:

```js
location.href = "http://www.matf.bg.ac.rs/uwit/proba.html"; //lokacija dokumenta
document.title = "Probni dokument"; //naziv dokumenta (title)
document.fgColor = #000000;  //boja slova
document.bgColor = #FFFFFF;    //boja podloge
history.length = 7;   //koliko poslednjih dokumenta da "pamti" u history
```

&#9608;

Допуштен је приступ елементима на веб страни. Један начин за програмски приступ елементима је реферисање на вредност атрибута `id`.

**Пример.** У програмском коду који следи, елементима на веб страни се може приступити на основу додљеног имена:

```js
document.mojaforma;   //forma
document.mojaforma.check1;    //check polje na formi
document.mojaforma.button1;   //taster na formi
```
&#9608;

Наравно, ЈаваСкрипт објкети којима смо приступили на претходно описани начин могу имати своје атрибуте.

**Пример.** У програмском коду који следи, постављамо атрибуте за елементе на веб страни.

```js
document.mojaforma.action = "http://www.matf.bg.ac.rs/primeri/obrada.html";
document.mojaforma.method = get;
document.mojaforma.length = 5;
document.mojaforma.button1.value = "Klikni ovde";
document.mojaforma.button1.name = taster1;
document.mojaforma.text1.value = "sadržaj tekst polja";
document.mojaforma.text1.name = TekstPolje1;
document.mojaforma.check1.defaultChecked = true;
document.mojaforma.check1.value = on;
document.mojaforma.check1.name = CheckPolje1;
```

&#9608;

### Функције за приказ ниске као HTML

Следеће методе враћају ниску обавијену са HTML тагом (евентуално неким HTML атрибутом):

| Назив методе          | Опис                                                |
|-----------------------|-----------------------------------------------------|
| `anchor()`            | враће елеменат сидро |
| `big()`               | враће елеменат који садржи ниску са повећаним словима |
| `blink()`             | враће елеменат који садржи трепћућу ниску  |
| `bold()`              | враће елеменат који садржи ниску са подебљанимм словима |
| `fixed()`             | враће елеменат који садржи ниску са словима фикне величине |
| `fontcolor()`         | враће елеменат који садржи ниску са словима у датој боји |
| `fontsize()`          | враће елеменат који садржи ниску са словима дате величине |
| `italics()`           | враће елеменат који садржи ниску са искошеним словима |
| `link()`              | враће елеменат хипервезу који садржи дату ниску |
| `small()`             | враће елеменат који садржи ниску са умањеним словима  |
| `strike()`            | враће елеменат који садржи ниску са прекрижаним словима  |
| `sub()`               | враће елеменат који садржи ниску са словима у индексу |
| `sup()`               |враће елеменат који садржи ниску са словима у експоненту |

## Објектни модел документа

### Догађаји

### jQuery

## Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
