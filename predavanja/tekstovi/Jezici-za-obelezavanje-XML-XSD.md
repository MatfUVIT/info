# УВИТ - XML и XML схеме

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## Када треба да се користи елемент,а када атрибут?

Често треба одлучити да ли користити елемент или атрибут у датој XML схеми. Одговор на то питање није једноставан. Неки аутори сматрају да елементи треба да описују податке, док атрибути треба да описују мета податке. Други предлажу да се атрибути користе за мале делове података, као што је `ID` налога, и сл. Међутим, нема универзално прихваћеног правила које би одређиало када треба користити атрибут а када елеменат.

Једна добра сугестија би могла бити да се атрибут користи само ако оно што се описује није самодовољно. Другим речима, ако се оно што се описује може сматрати скупом родитељског елемента који има смисла да постоји само док се налази у оквиру родитеља, онда би требало користити атрибуте. Међутим, ако предмет описивања може без проблема самостално постојати постоји изван родитељског елемента и ако се ради о сложеном објекту која има однос са родитељским елементом, онда треба користити елементе.

**Пример.** Елемент назван `oblik` може имати атрибут под називом `boja`, тј. мета-податке о елемнету `oblik`, као и секвенцу елемената-потомака названих `tacka`, као независну структуру података.

Пример XML шеме (XSD):

```xml
<xs:element name="oblik">
    <xs:complexType>
        <xs:sequence>
            <xs:element name="tacka" minOccurs="1" maxOccurs="unbounded">
                <xs:complexType>
                    <xs:attribute name="x" type="xs:int" />
                    <xs:attribute name="y" type="xs:int" />
                </xs:complexType>
            </xs:element>
        </xs:sequence>
        <xs:attribute name="boja" type="xs:string" />
    </xs:complexType>
</xs:element>
```

Пример XML -а:

```xml
<oblik boja="crna">
    <tacka x="0" y="0" />
    <tacka x="100" y="0" />
    <tacka x="50" y="50" />
</oblik>
```

&#9608;

Употреба атрибута у сврху смештаја структурисних података на крају доводи до докумената који су тешки за читање и одржавање, па треба избегавати такву прксу и користити елементе ради описивања података.

Нека ограничења и могући проблеми са коришћењем атрибута диретно произилазе из следећих карактеристика атрибута:

- За разлику од елемената, атрибути не могу садржати више вредности.

- Атрибуте није једноставно проширити, што отежава да будуће промене буду буду уграђене у схему.

- Атрибути не могу описати структуру, док елементи-помомци могу у себи садржати читав низ потомака.

## Најбоље праксе приликом писања XML схеме

- Сви елементи и атрибути треба да користе камилљу нотацију велико слово за писање сложеница, на пример `аdresaPosta`, и треба да избегавају цртице, размаке или другу синтаксу.

- Читљивост је важнија од дужине ознаке, бар до одређене тачке. Увек треба обезбедити баланс између величине документа и читљивости, при чему треба фаворизирати читљивост где год је то могуће.

- Избегавати скраћенице код назива елемената, атрибута и типова. Изузеци би требали да буду само оне скраћенице које су добро познате у датом пословном домену, на пример ID (означава идентификатор) и сл.

- Назив сваког типа треба да се ѕавршава са `Тype`, на пример `AdresaPostaТype`.

- Енумерације би требало да користе имена, а не бројеве, и енумерисане вредности би такође требале да буду писане у складу са камиљом нотацијом.

- Имена не би требало да укључују име структуре у којој се садрже, на пример елеменат који преставља име унурар надређеног елемента `customer` треба да буде назван једноставно `name`, а не `customerName`.

- Именовати једноставне и комплексне типове само за оне типове код којих је вероватно да ће се поново користити. Ако структура постоји само на једном месту, њу треба дефинисати ма чицу места коришћенјем анонимног типа.

- Избегавати употребу мешовитог садржаја.

- Елеменат дефинисати на глобалном нивоу само уклоико тај елеменат може да буде корени елеменат у XML документу.

- Користити конзистентнa имена за просторе имена и избегавати употребу стандардно дефинисаног префикса :

  - `xml` (дефинисано у XML стандарду)

  - `xmlns` (дефинисано у XML стандарду, у делу који се односи на просторие имена )

  - `xs` или `xsd` (дефинисано у `http://www.w3.org/2001/XMLSchema`)

  - `xsi` (дефинисано у `http://www.w3.org/2001/XMLSchema-instance`)

- Покушајте да размотрите питње верзионисања већ на почетку дизајнирања схема. Неке препоруке којесе односе на то:

  - Ако је важно да нове верзије схеме буду компатибилне уназад, тада сви додаци шеми требају бити опционални.
  
  - Ако је важно да постојеће апликације буду у стању да читају новије верзије датог документа, размотрити додавање елемената `any` и `anyAttribute` на крају свих дефиниција.

- Препоручује се дефинисање `targetNamespace` у оквиру своје схеме, чиме се боље идентификује дата схема и олакшава се њена модуларизација и поновна употреба.

- Препоручује се да се оквиру елеманта `schema` постави `elementFormDefault="qualified"`. На тај начин ће бити олакшано читање квалификованих простора имена у резултујућем XML-у.
