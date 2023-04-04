
# УВИТ - ЈаваСкрипт програмирање на клијентској страни

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Увод

Овде се разматра коришћење језика ЈаваСкрипт за веб програмирање на клијентској страни. Наиме, приликом довлачења веб странице, довлачи се и смешта у прегледач ЈаваСкрипт код који се извршава. Приликом приказа веб странице се извршава у прегледачу претходно довучени ЈаваСкрипт код, који приликом извршавања интерагује са елементима на веб страни и динамички их мења.

## ЈаваСкрипт и веб стране

Из клијентског ЈаваСкрипт-а се може програмски приступити елементима на веб страни, читати их, мењати њихове атрибуте, додавати их или брисати, по потреби.

### Објекти ЈаваСкрипт окружења код веб прегледача

Свака веб страна омогућује да се из ЈаваСкрипт кода приступа следећим објектима:

- `window`: објекат највишег нивоа; садржи својства примењива на целокупан прозор

- `location`: садржи својства текуће URL локације

- `history`: садржи својства претходно посећених

- `document`: садржи својства садржаја текућег документа, као што су наслов (`title`), боја позадине (`bgcolor`), форме итд.

**Пример.** Илустрација постављања својстава за објекте веб стране:

```js
document.title = 'Probni dokument'; //naziv dokumenta (title)
document.bgColor = '#070707';
document.fgColor = '#00FFFF';

history.length = 7;

location.href = 'http://uvit.math.rs';
```

&#9608;

Дијаграм који следи описује хијеархијску структуру објеката ЈаваСкрипт окружења код веб прегледача:

![Хијерархија DOM објеката](assets/images/dom-object-hierarchy.gif "Хијерархија DOM објеката"){: width="500px" style="float:center; padding:16px"}

Допуштен је приступ елементима на веб страни из ЈаваСкрипт-а. Један начин за програмски приступ елементима на веб страни је реферисање преко вредности атрибута `name`.

**Пример.** У програмском коду који следи, елементима на веб страни се може приступити на основу имена, додeљеног као одговарајући атрибут веб стране:

```js
let forma = document.mojaForma;
let txt = forma.textIme;
console.log(txt.outerHTML);
let btn = forma.buttonOk;
console.log(btn.outerHTML);
```

&#9608;

ЈаваСкрипт објекти који су дотупни преко ваб прегледача могу имати своје атрибуте.

**Пример.** У програмском коду који следи, постављамо атрибуте ЈаваСкрипт објекте који се односе на елементе са веб стране, а чије су вредности одређене у претходном примеру.

```js
document.mojaforma.action = "http://uvit.matf.bg.ac.rs/primeri/obrada.php";
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

### Објектни модел документа (DOM)

Објектни модел документа (eng. Document Object Model - DOM) је програмски интерфејс (АПИ) којим се ЈаваСкрипт програмима омогућава да комуницирају са HTML документима и њиховим елементима.

Основни DOM објекат је HTML документ чијa je структурa верно пресликана у (објектно-оријентисан) АПИ.

DOM објекат за дати елемент на веб страни има структуру дрвета.

**Пример.** За следећи исечак HTML документа, који предстаља табелу:

```html
<table>
  <tbody>
    <tr>
      <td>Shady Grove</td>
      <td>Aeolian</td>
    </tr>
    <tr>
      <td>Over the River, Charlie</td>
      <td>Dorian</td>
    </tr>
  </tbody>
</table>
```

одговарајући DOM објекат има следећу структуру:

![DOM објекат за табелу](assets/images/dom-object-example.gif "DOM објекат за табелу"){: width="500px" style="float:center; padding:16px"}

&#9608;

DOM објекат за дату веб страну такоше има структуру дрвета, где се сарджавање једног елемента у другом представља односм родитељ-потомак.

**Пример.** За следећи HTML документ:

```html
<html>
  <head>
    <title>Moja stranica</title>
  </head>
  <body>
    <p id="p1">Prvi paragraf</p>
    <p class="c1">Drugi paragraf</p>
  </body>
</html>
```

добијају се следећи DOM објекти:

- објекат `document` који садржи:
  - објекат `head` који садржи:
    - `title`
  - објекат `body` који садржи:
    - објекат `p` са атрибутом `id`
    - објекат `p` са атрибутом `class`

То се прегледно може илустровати следећом сликом:

![DOM објекат за веб страну](assets/images/dom-blok-html.png "DOM објекат за веб страну"){: width="300px" style="float:center; padding:16px"}

&#9608;

#### Операције са DOM објекатима

Са DOM-ом, ЈаваСкрипт има могућност да креира динамичке HTML стране:

- Да мења елементе на HTML страни.
- Да мења атрибуте на HTML страни.
- Да мења све CSS стилове на HTML страни.
- Да брише постојеће елементе и атрибуте на HTML страни.
- Да додаје нове HTML елементе и атрибуте на страни.
- Да реагује на све постојеће HTML догађаје на страни.
- Да креира нове HTML догађаје на страни.

Објектима који су део документа може се приступити на неколико начина, а најчешће коришћени су:

1. Преко идентификатора (`id` атрибута) - добија се један елемент.
   **Пример.** Приступ првом пасусу са претходне веб стране: `document.getElementById("p1")`  &#9608;
2. Преко назива елемента (назива етикете) - добија се коликција елемената.
   **Пример.** Приступ свим пасусима са претходне веб стране: `document.getElementsByTagName("p")`  &#9608;
3. Преко класе којој елементи припадају - добија се колекција елемената.
   **Пример.** Приступ другом пасусу са претходне веб стране: `document.getElementsByClassName("c1")`  &#9608;
4. Преко позиције у дрвету, коришћењем метода `parentNode`, `nextSibling`, `prevSibling`, `firstChild`, `lastChild`, као што је приказано на следећој слици:
![Приступ чворовима DOM-а](assets/images/dom-nodes-traversal.png "Приступ чворовима DOM-а"){: width="300px" style="float:center; padding:16px"}
&#9608;
5. Преко css селектора, коришћењем метода `querySelecor` i `querySelectorAll` - што подржавају сви модерни веб прегледачи:
**Пример.** Претходно описани приступи елементима са претходне веб стране могу да се реализују и на следeћи начин:

```js
document.querySelector("#p1");   // pristup prvom paragrafu iz gornjeg primera
document.querySelector(".c1");   // pristup prvom elementu klase c1
document.querySelectorAll("p");  // pristup svim paragrafima gornjeg primera
```

&#9608;

### Догађаји код DOM објеката

Догађаји код DOM објеката омогућавају ЈаваСкрипт-у да региструје појаву неке промене у документу. За сваку такву промену ЈаваСкрипт може да дефинише функцију која ће је опслужити. Функције које опслужују догађаје називају се руковаци (енг. handler).

DOM догађаји могу се сврстати у неколико категорија:

- Догађаји повезани са мишем: `onclick`, `ondblclick`, `onmouseover`, итд...
- Догађаји повезани са тастатуром: `onkeydown`, `onkeypress`, `onkeyup`
- Догађаји повезани са објектима: `onload`, `onunload`, `onresize`, итд...
- Догађаји повезани са формама: `onchange`, `onsubmit`, итд...
- Догађаји повезани са превлачењем (енг. drag) елемената: `ondrag`, `ondrop`, `ondragstart`, итд...
- Догађаји повезани са клипбордом; `oncut`, `onpaste`, `oncopy`
- Догађаји повезани са штампањем: `onafterprint`, `onbeforeprint`
- Догађаји повезани са медијима: `onplay`, `onpause`, `onended`, итд...
- Догађаји повезани са анимацијом: `animationstart`, `animationend`, `animationiteration`
- Догађаји повезани са транзицијом: `transitionend`
- Догађаје које шаље сервер: `onerror`, `onmessage`, `onopen`
- Догађаји повезани са додирима на екрану: `ontouchstart`, `ontouchmove`, `ontouchend`, `ontouchcancel`
- Остали догађаји: `ononline`, `onoffline`, `onwheel`, итд...

Стандардан начин за регистровање и опслуживање DOM догађаја је додавање ослушкивача догађаја (енг. event listener).

**Пример.** Веб страна са дугметом, где се приликом клика миша на дугме регистује којим је дугметом (лево средње десно) извршен клик, а потом се на конзоли приказује врста дугмета миша и координате показивача миша (на у контексту стране, а не дугмета) у тренутку клика:

```html
<!doctype html>
<html>

<head>
    <title>Osluskivac misa</title>
</head>

<body>
  <button>Pritisni me kako god mislis da je najpametnije</button>
<script>
  let button = document.querySelector("button");
  button.addEventListener("mousedown", function(event) {
    if (event.which == 1)
      console.log("Left button");
    else if (event.which == 2)
      console.log("Middle button");
    else if (event.which == 3)
      console.log("Right button");
    console.log(`(x,y):(${event.pageX},${event.pageY})`);
  });
</script>
</body>
</html>
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

## AJAX

AJAX (енг. Asynchronous Javascript And XML) представља скуп техника преко којих је могуће успоставити асинхрону комуникацију између клијента и сервера, или једноставније, у питању је механизам који омогућава аутоматско ажурирање садржаја делова странице без потребе за поновним учитавањем.

Другим речима, коришћењам AJAX-а, веб апликације могу да шаљу и примају податке са сервера асинхроно (у позадини) без мењања тренутног приказа и понашања странице. Подаци могу бити преузети помоћу објекта `XMLHttpRequest`. Без обзира на име, коришћење XМЛ-а није обавезно, већ се се често користи JSON уместо XML, а захтеви не морају бити асинхрони.

AJAX није једна, већ група технологија. HTML и CSS се могу користити за обележавање и стилизовање информација, ЈаваСкрипт приступ преко DOM-а обезбеђује динамички приказ и омогућује интеракције корисника са информацијом, а ЈаваСкрипт и објекат `XMLHttpRequest` омогућују метод за асинхрону размену података између веб прегледача и сервера да би се избегло поновно учитавање целе странице.

### Синхрони модел комуникације

Синхрони модел комуникације између клијента и сервера подразумева следеће кораке:

- клијент шаље захтев серверу
- сервер прима и обрађује захтев и потом шаље клијенту захтевани HTML садржај
- веб прегледач на страни клијента приказује примљени HTML садржај
- уколико је потребно освежити садржај странице, шаље се нови захтев

Горе описани сценарио функционише ако је захтев уредно послат, примљен и обрађен. У случају грешака у обради захтева сервер ће (уместо HTML-а и других тражених садржаја) послати клијенту одговарајући статусни код. Поред HTML-а, сервер ће (на захтев клијента) послати и сав припадајући садржај: CSS, ЈаваСкрипт, као и друге датотеке (најчешће слике).

Јасно је да у овом сценарију нема аутоматског учитавања, што доводи до следећих последица:

- за учитавање (нових) примљених података, биће потребно да се поново учитава (освежи) цела страница
- за слање порука, биће потребно да се користи HTML форма која (после клика на дугме за слање поруке) покреће скрипту за слање поруке, при чему веб прегледач пребацује корисника на другу страницу.

Другим речима, наступа "сецкање", ресетовање и потреба за ручним учитавањем порука - што никако није добро.

### АЈАX захтеви - слање и обрада

Специјализовани `XMLHttpRequest` објекти размењују податке са сервером на следећи начин:

- преко поља `onreadystatechange` дефинише се функција повратног позива која ће се извршавати када се стање захтева промени

- преко поља `responseText`, скрипта добија одговор од сервера (у облику обичног текста, као XML, или као JSON)

- поље `readyState` садржи информацију о акруелном стању захтева, која може бити:
  - 0 - захтев још увек није послат
  - 1 - захтев је послат, али није примљен
  - 2 - захтев је примељен, али није узет у обраду
  - 3 - захтев је узет у обраду, али обрада није завршена
  - 4 - обрада захтева је завршена

**Пример.** Целокупан пример (серверски и клијентски део) где клијент користи `XMLHttpRequest` објекат за слање АЈАX позива и обраду одговора сервера.

Серверски део је рализован у датотеци `veb-server.js` коришћењем `node.js`. Он за дати захтев као одговор враће текстулану датотеку која је специфицирана у оквиру упита.

```js
let http = require('http');
let url = require('url');
let querystring = require('querystring');
let fs = require('fs');

http.createServer(function (request, response) {
    pathName = url.parse(request.url).pathname;
    fs.readFile(__dirname + pathName, function (err, data) {
        if (err) {
            response.writeHead(404, { 'Content-type': 'text/plan' });
            response.write(`Page Was Not Found 
            ${JSON.stringify(err)}`);
            response.end();
        } else {
            response.writeHead(200);
            response.write(data);
            response.end();
        }
    });
}).listen(7000);
```

Веб страна која користи AJAX има следећи облик:

```html
<!doctype html>
<html>

<head>
    <title>AJAX demo</title>
    <script type="text/javascript">
        function loadXMLDoc() {
            let fileName = document.getElementById("fileName").value;
            let xmlhttp = new XMLHttpRequest();
            xmlhttp.onreadystatechange = function() {
                if (xmlhttp.readyState == 4 &&
                    xmlhttp.status == 200) {
                    document.getElementById("myDiv").innerHTML = xmlhttp.responseText;
                    console.log("Spoljašnji sadržaj je uspešno učitan!");
                } else
                if (xmlhttp.status != 200 && xmlhttp.status != 0)
                    console.log("Greška: " + xmlhttp.status + ": " + xmlhttp.statusText);
            }
            xmlhttp.open("GET", fileName, true);
            xmlhttp.send();
        }
    </script>
</head>
<body>
    <h2>Odgovor dobijen putem AJAX-a</h2>
    <div id="myDiv"></div>
    <input id="fileName" type="text" value="ajax.txt">
    <button type="button" onclick="loadXMLDoc()"> Pošalji AJAX zahtev</button>
</body>
</html>
```

&#9608;

## HTML компоненте

HTML компоненте представљају скуп стандарда или технологија који омогућавају креирање HTML елемента и њихово коришћење у оквиру веб страница и апликација. HTML компоненте јесу део W3C спецификације што их чини стандардом за имплементацију нових елемената.

Када треба убацити нову функционалност у веб апликацију, при чему се та функционалност обухвата више типова ресурса и сваки од тих ресурса треба повезати са главним документом на коме се приказује нова функционалност, поступак је обично следећи:

- прво треба убацити стилове
- након тога треба убацити јаваскрипт датотеку/датотеке
- често функционалност садржи и одређене слике које треба да су доступне јаваскрипту и стиловима, па и њих треба убацити
- након свега тога, треба поставити HTML структуру додате функционалности
- на крају, треба иницијалозовати нову функционалност позивањем дефинисаних метода
  
Коришћењем HTML компоненти имплементација се значајно упрошћава и своди на само два корака:

- убацивање референце на датотеку са описом компоненте у главни документ
- постављање HTML структуре која представља компоненту

HTML компоненте се ослањају на следеће технологије:

- Прилагођени HTML елементи
- Shadow DOM
- Шаблони

### Прилагођени HTML елементи

Слично предефинисаним HTML елементима (као што су `<video>`, `<select>`, `<footer>` итд.) сада постоји могућност да се креирају сопствени нови елементи, тзв. прилагођени елементи (енг. custom elements) који касније могу бити коришћени и на другим пројектима.

Прилагођеним елементима може да се дефинише назив, атрибути и садржај, чиме се у ствари врши комуникација сакомуницирамо са АПИ-јем елемента.

Приликом дефинисања новог елемента пожељно је да се користи цртица тј. минус у називу, како би се смањила могућност преклапања имена са именима других елемената. Такође, пожељно је да назив прилагошеног елемента и његових атрибута одражава њихову намену и смисао.

**Пример.** Развити прилагођени елемент `<uvit-student>` и веб страну која ће садржавати овакве елементе.

У овом случају, донесена је одлука да прилагођени елеменат буде дефинисан у посебној датотеци `student-component.js`, одвојено од веб стране:

```js
class Student extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
    }

    connectedCallback() {
        this.innerHTML =
            `<h2>
                Ovo je student (connected Callback)!
            </h2>`;
    }

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}
// нови елеменат
let StudentComponent = customElements.define('uvit-student', Student);
```

Уочава се да прилагођени елементи наслеђују класу `HTMLElement`. У овом примеру, постављањем атрибута `innerHTML` одређује се садржина елемента, и то нје реализовано у контруктору, већ у телу функције `connectedCallback` која се извршава по успешном повезиванњу елемента у страни. Последњом наредбом доделе је реализовано повезивање класе прилагођеног елемента са етикетом  `<uvit-student>`.

Веб страна која садржи овако направљене прилагођене елементе има следећи облик:

```html
<!DOCTYPE html>
<html lang="sr">

<head>
    <title>Nove HTML komponente</title>
    <meta charset="UTF-8" />
    <script src='student-component.js'></script>
    <style type="text/css">
        uvit-student {
            color:red;    
        }
    </style>
</head>

<body>
    <h1>Илустрација нових <code>HTML</code> компоненти</h1>
    <script>
        document.body.appendChild(new StudentComponent());
    </script>
    <p>
        Статичан садржај веб стране...
    </p>
    <uvit-student></uvit-student>
    <uvit-student style="color:violet"></uvit-student>

</body>

</html>
```

Уочавамо да се укључивање нове врсте елемента постиже помоћу `<script>` етикете. У овом случају, изглед прилагођеног елемнта тј. HTML компонетне је дат у оквиру саме веб стране, што није најелегантније решење.

Садржај који ће бити приказан приликом исцртавања ова два `<uvit-student>` елемента је дефинисан у ЈаваСкрипт датотеци.

Приликом приказа у прегледачу, горња веб страна ће имати следећи изглед:

![Прилагођени HTML елементи](assets/images/html-components-01.png "Прилагођени HTML елементи"){: width="500px" style="float:center; padding:16px"}

&#9608;

### HTML компоненте и Shadow DOM

Shadow DOM омогућава енкапсулацију ЈаваСкрипта, стилова и шаблона у HTML компоненти тако да они остају одвојени од главног ДОМ-а станице. На тај начин дизајнер HTML компоненте добија могућност да одлучи којим деловима компоненте ће крајњи корисник моћи да приступи.

Потребно је разликовати три главна термина:

- Light DOM. Представља почетну тачку, њега дефинише корисника који користи компоненту. То је дакле иницијална структура компоненте.

- Shadow DOM. Нова структура убачена након иницијализације а невидљива за крајњег корисника.

- Composed DOM. Финална структура, која као таква није видљива крајњем кориснику али представља резултат који се приказује у прегледачу.

**Пример.** Развити прилагођени елемент `<uvit-student>` који се ослања на Shadow DOM, као и веб страну која ће садржавати овакве елементе.

Прилагођени елеменат је дефинисан у посебној датотеци `student-component.js`, и садржај елемента се подешава у конструктору класе, тако што се искористи метод `attachShadow`, а потом по придруживању Shadow DOM-а постави својство `innerHTML` на жељену вредност:

```js
class Student extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
        // придруживање ДОМ сенке уз корен 
        const senkaKoren = this.attachShadow({ mode: 'open' });
        senkaKoren.innerHTML =
            `<h2>
                Ovo je student (ShadowDOM)!
            </h2>`;
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// new element
let StudentComponent = customElements.define('uvit-student', Student);
```

Као и у претходном примеру, последњом наредбом доделе је реализовано повезивање класе прилагођеног елемента са етикетом  `<uvit-student>`.

Веб страна која садржи овако направљене прилагођене елементе има следећи облик:

```html
<!DOCTYPE html>
<html lang="sr">

<head>
    <title>Nove HTML komponente</title>
    <meta charset="UTF-8" />
    <script src='student-component.js'></script>
    <style type="text/css">
        uvit-student {
            color:red;    
        }
    </style>
</head>

<body>
    <h1>Илустрација нових <code>HTML</code> компоненти</h1>
    <p>
        Статичан садржај веб стране...
    </p>
    <uvit-student></uvit-student>
    <uvit-student></uvit-student>

</body>

</html>
```

И код ове веб стране се укључивање елемента `<uvit-student>` постиже помоћу `<script>` етикете.

&#9608;

### Шаблони и HTML компоненте

Укључивање шаблона на клијентској страни дуго је било праћено одређеним недостатком стандарда, па су се у те сврхе користили семантички неисправне етикете као што су `<script>` или `<textarea>`, како би се спречило извршавање кода унутар тих тагова. Сада са новим `<template>` елементом може да се чува садржај који неће бити исртавана али ће бити доступан за коришћење.

Шаблони за компоненте се могу налазити у оквиру веб стране која садржи те компоненте.

**Пример.** Веб страну са прилагођеним елементом `<uvit-student>`, тако да се прилагођени елеменат ослања на Shadow DOM и користи шаблон дефинисан у оквиру веб стране.

Прилагођени елеменат, дефинисан у датотеци `student-component.js`, има следећу структуру:

```js
class Student extends HTMLElement {
    constructor() {
        // увек у конструктору на почетку позвати super()
        super();
        // постављање шаблона
        const sablon = document
            .getElementById('uvit-student-template')
            .content;
        // придруживање ДОМ сенке уз корен 
        const senkaKoren = this.attachShadow({ mode: 'open' })
            .appendChild(sablon.cloneNode(true));
    }

    connectedCallback() {}

    disconnectedCallback() {}

    attributeChangedCallback(attrName, oldVal, newVal) {}
}

// нови елеменат
let StudentComponent = customElements.define('uvit-student', Student);
```

Уочава се да је пре подешавања Shadow DOM добијен шаблон тако што је у оквиру веб стране потражен елеменат са идентификатором `uvit-student-template`. Последњом наредбом доделе је реализовано повезивање класе прилагођеног елемента са етикетом  `<uvit-student>`.

Веб страна која садржи шаблон за приказ прилагођених елемената, као и два прилагођена елемента има следећи облик:

```html
<!DOCTYPE html>
<html lang="sr">
<head>
    <title>Nove HTML komponente</title>
    <meta charset="UTF-8" />
    <script src='student-component.js'></script>
</head>
<body>
    <h1>Илустрација нових <code>HTML</code> компоненти</h1>
    <p>
        Статичан садржај веб стране...
    </p>
    <template id="uvit-student-template">
        <style>
            h2 {
                color: white;
                background-color: #999;
                padding: 5px;
            }
        </style>
        <h2>
            Ovo je student (template)!
        </h2>
    </template>

    <uvit-student></uvit-student>
    <uvit-student></uvit-student>

</body>
</html>
```

&#9608;

Друго, елегантније и чешће решење је да се шаблон за компоненте налази у самосталној датотеци. Тада се обично и стил којим ће бити приказана дата компонента такође налази у самосталној датотеци.

**Пример.** Креирати веб страну са прилагођеним елементом `<uvit-student>`, тако да дефиниција прилагођеног елемента састоји од три самосталне датотеке: једне која описује садржај тог елемента (шаблон), друге која дефинише начин приказа (стил) и треће која описује понашање.

Начин приказа прилагођеног елемента (тј. стил) дефинисан у датотеци `uvit-student-component.css`:

```css
h2 {
    color: white;
    background-color: #999;
    padding: 5px;
}
```

Структура прилагођеног елемента (тј. шаблон) дефинисанa je у датотеци `uvit-student-component.html`:

```html
<!DOCTYPE html>
<link rel="stylesheet" href="uvit-student-component.css">
<h2>
    Ovo je student (separated template)!
</h2>
```

Уочава се да шаблон, коришћењем елемента `<link rel="stylesheet" ...>`, садржи референцу на стил.

Понашање прилагођене компоненте `<uvit-student>` је описано датотеком `uvit-student-component.js`:

```js
fetch("uvit-student-component.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
    class Student extends HTMLElement {
        constructor() {
            // увек у конструктору на почетку позвати super()
            super();
            // придруживање ДОМ сенке уз корен 
            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;
        }

        connectedCallback() { }

        disconnectedCallback() { }

        attributeChangedCallback(attrName, oldVal, newVal) { }
    }

    customElements.define('uvit-student', Student);
}
```

Овде је прво дохваћен садржај шаблона (самим тим и стила), а потом је дохваћени шаблон искоришћен (позивом функције `define`) за дефинисање стуктуре прилагођене компоненте и регистрацију одговарајуће етикете.  

Веб страна сада не садржи шаблон за приказ прилагођених елемената, и она има следећи облик:

```html
<!DOCTYPE html>
<html lang="sr">
<head>
    <title>Nove HTML komponente</title>
    <meta charset="UTF-8" />
    <script src="uvit-student-component.js"></script>
</head>
<body>
    <h1>Илустрација нових <code>HTML</code> компоненти</h1>
    <p>
        Статичан садржај веб стране...
    </p>

    <uvit-student></uvit-student>
    <uvit-student></uvit-student>
</body>
</html>
```

Приликом приказа у прегледачу, ова веб страна ће имати следећи изглед:

![Прилагођени HTML елементи - одвојен шаблон](assets/images/html-components-04.png "Прилагођени HTML елементи - одвојен шаблон"){: width="500px" style="float:center; padding:16px"}

&#9608;

### HTML компоненте, догађаји и атрибути

Често је јавља потреба да се хватају DOM догађаји над поједим деловима HTML компоненте која се развија и да се адекватно реагује на њих.

**Пример.** Креирати прилагођени елеменат који представља бројач, са могућношћу инкрементирања и декремнтирања, као и веб страну која садржи два таква бројача.

Начин приказа прилагођеног елемента (тј. стил) дефинисан у датотеци `uvit-brojac-component.css`:

```css
button, p {
    display: inline-block;
    color: darkcyan;
}
```

Структура прилагођеног елемента (тј. шаблон) дефинисанa je у датотеци `uvit-brojac-component.html`:

```html
<link rel="stylesheet" href="uvit-brojac-component.css">
<button aria-label="decrement">-</button>
    <p>0</p>
<button aria-label="increment">+</button>
```

Динамички аспекти прилагођене компоненте `<uvit-brojac>` дефинисани су у датотеци `uvit-brojac-component.js`:

```js
fetch("uvit-brojac-component.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {
    class Brojac extends HTMLElement {
        set value(value) {
            this._value = value;
            this.valueElement.innerText = this._value;
        }

        get value() {
            return this._value;
        }

        constructor() {
            super();
            this._value = 0;

            var shadow = this.attachShadow({mode: 'open'});
            shadow.innerHTML = html;

            this.valueElement = shadow.querySelector('p');
            var incrementButton = shadow.querySelectorAll('button')[1];
            var decrementButton = shadow.querySelectorAll('button')[0];

            incrementButton.onclick = () => this.value++;
            decrementButton.onclick = () => this.value--;
        }
    }

    customElements.define('uvit-brojac', Brojac);
}
```

Као и у претходном примеру, прво је дохваћен садржај шаблона (самим тим и стила), а потом је дохваћени шаблон искоришћен (у функцији `define`) за дефинисање стуктуре прилагођене компоненте и регистрацију одговарајуће етикете.

Овде вредност за `_value` садржи вредност бројача, и та вредност се исцртава приликом постављања бројача. У оквиру ове компоненте су хватани DOM догађаји `onclick` над дугмадима за инкрементацију и декрементацију која се налазе у оквиру ове компоненте.

Веб страна садржи два независна бројача, реализована као HTML компоненте:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Brojac</title>
    <script src="uvit-brojac-component.js"></script>
</head>
<body>
    Prvi brojac:
    <uvit-brojac></uvit-brojac>
    <br/>
    <br/>
    <br/>
    <br/>
    Drugi brojac:
    <uvit-brojac></uvit-brojac>
</body>
</html>
```

Приликом приказа у прегледачу, ова веб страна ће имати следећи изглед:

![Прилагођени HTML елементи - бројачи](assets/images/html-components-05.png "Прилагођени HTML елементи - бројачи"){: width="500px" style="float:center; padding:16px"}

&#9608;

Међутим, нису ретке ситуације када се при раду са HTML компонентама креирају и процесирају нови догађаји. При раду са таквим догађајима, обично се консултују атрибути HTML компоненте.

**Пример.** Креирати прилагођени елеменат који представља фиоку, са могућношћу отврања и затварања и могућношћу да фиока буде онемогућена. Као одговор на догађај, фиока мења текст и боју. Креирати веб страну која садржи три такве фиоке, од којих је једна онемогућена.

Стил прилагођеног елемента је дефинисан у датотеци `uvit-fioka-component.css`:

```css
h2 {
    color: white;
    background-color: #999;
    padding: 5px;
}
```

Шаблон за прилагођени елеменат је дефинисан у датотеци `uvit-fioka-component.html`:

```html
<!DOCTYPE html>
<link rel="stylesheet" href="uvit-fioka-component.css">
<h2>
    Fioka (separated template)!
</h2>
```

Динамички аспекти прилагођене компоненте `<uvit-fioka>` дефинисани су у датотеци `uvit-fioka-component.js`:

```js
fetch("uvit-fioka-component.html")
    .then(stream => stream.text())
    .then(text => define(text));

function define(html) {

    class Fioka extends HTMLElement {
        constructor() {
            // увек у конструктору на почетку позвати super()
            super();
            // придруживање ДОМ сенке уз корен 
            let senkaKoren = this.attachShadow({ mode: 'open' });
            senkaKoren.innerHTML = html;
            // реферисње на визуелни елеменат
            this.statusElement = senkaKoren.querySelector('h2');
            // постављање ослушкивача догађаја за click
            this.addEventListener('click', e => {
                // ако је ослушкивач онемогућен, клик се игнорише
                if (this.disabled)
                    return;
                this.pomeriFioku();
            });

        }

        connectedCallback() { }

        disconnectedCallback() { }

        // особина отворено
        get otvoreno() {
            return this.hasAttribute('otvoreno');
        }

        set otvoreno(val) {
            // Reflect the value of the open property as an HTML attribute.
            if (val) {
                this.setAttribute('otvoreno', 'XXX');
            } else {
                this.removeAttribute('otvoreno');
            }
        }

        // особина disabled
        get disabled() {
            return this.hasAttribute('disabled');
        }

        set disabled(val) {
            // Reflect the value of the disabled property as an HTML attribute.
            if (val) {
                this.setAttribute('disabled', '');
            } else {
                this.removeAttribute('disabled');
            }
        }

        static get observedAttributes() {
            return ['disabled', 'otvoreno'];
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (this.disabled) {
                this.setAttribute('tabindex', '-1');
                this.setAttribute('aria-disabled', 'true');
            } else {
                this.setAttribute('tabindex', '0');
                this.setAttribute('aria-disabled', 'false');
                if (this.otvoreno) {
                    this.statusElement.innerHTML = "otvoreno";
                    this.statusElement.setAttribute('style', 'background-color:green');
                } else {
                    this.statusElement.innerHTML = "zatvoreno";
                    this.statusElement.setAttribute('style', 'background-color:red');
                }
            }
        }

        pomeriFioku() {
            this.otvoreno = !this.otvoreno;
            console.log(`Fioka je pomerena. Status fioke: ${this.hasAttribute('otvoreno') ? 'otvoreno' : 'zatvoreno'}`);
        }

    }

    // нови елеменат
    customElements.define('uvit-fioka', Fioka);
}
```

Као и у претходном примеру, прво је дохваћен садржај шаблона (самим тим и стила), а потом је дохваћени шаблон искоришћен (у функцији `define`) за дефинисање стуктуре прилагођене компоненте и регистрацију одговарајуће етикете.

Овде су од интереса атрибути `otvoreno` и `disabled` које описују статус фиоке. У оквиру ове компоненте је направљен ослушкивач за догађај `click` за целу компоненту, где руковалац догађаја само промени атрибуте компоненте, а потом се хвата промена посматраних вредности атрибута и као реакција не ту промену се мења изглед елемената у оквиру прилагођене компоненте.

Веб страна садржи три фиоке, реализоване као HTML компоненте:

```html
<!DOCTYPE html>
<html lang="sr">
<head>
    <title>Nove HTML komponente</title>
    <meta charset="UTF-8" />
    <script src="uvit-fioka-component.js"></script>
</head>
<body>
    <h1>Илустрација нових <code>HTML</code> компоненти</h1>
    <p>
        Статичан садржај веб стране...
    </p>

    <uvit-fioka otvoreno></uvit-fioka>
    <uvit-fioka></uvit-fioka>
    <uvit-fioka otvoreno disabled></uvit-fioka>
</body>
</html>
```

За прву фиоку је постављен атрибут `otvoreno`, за другу није, а за трећу је постављен и атрибут `otvoreno` и атрибут `disabled`.

Приликом приказа у прегледачу, претходна веб страна ће имати следећи изглед:

![Прилагођени HTML елементи - фиоке](assets/images/html-components-06.png "Прилагођени HTML елементи - фиоке"){: width="500px" style="float:center; padding:16px"}

&#9608;


## Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
