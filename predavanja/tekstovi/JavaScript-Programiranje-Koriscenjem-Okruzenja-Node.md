# УВИТ - Програмски језик ЈаваСкрипт

[Владимир Филиповић](https://vladofilipovic.github.io/index-cy.html){:target="_blank"}

## ЈаваСкрипт програмирање коришћењем окружења node

Овде ће бити размотрено како се програмира у ЈаваСкрипту коришћењем окружења за извршавање **node.js** (понегде се, краће, на ово окружење реферише само са **node**).

### Окружењe node

node.js је вишеплатформско радно окружење (енгл. runtime) које се базира на Google Chrome V8 машини - ЈаваСкрипт извршном окружењу високих перформанси, написаном у C++ (првобитно за потребе веб прегледача Google Chrome).

Програмер Рајан Дал је развио node.js развио је 2009. године, на машини В8 као серверско радно окружење.

Велика предност node.js је то што је он у **потпуности ЈаваСкрипт**. Раније је ЈаваСкрипт био коришћен искључиво за развој на клијентској страни или тзв. предњем крају (енгл. frontend) - било као "чисти" ЈаваСкрипт (енгл. Vanila JS) било као JQuery, или нека друга ЈаваСкрипт библиотека. Од појаве окружења node.js, ЈаваСкрипт језик се широко користи и за програмирање на серверској страни, односно на задњем крају (енгл. backend). Пошто се ради о истом језику, ако се изабере овај приступ, разлика у самој синтакси између клијентских и серверских програма је врло мала или чак не постоји.

Друга велика предност node.js је **модуларност** - концепт проширења функционалности самог node.js и поједностављивање задатака инсталирањем одређених пакета, који представљају модуле.

Инсталација модула врши се помоћу алата који се зове **npm** – управљач пакетима окружења node (енгл. node package manager).

Основу node.js чини парадигма асинхроног програмирања, односно програмирање управљано **догађајима**. Догађаји у ЈаваСкрипту могу бити клик мишем, притисак на тастер, захтев за неким ресурсом на мрежи, итд. Окружење node.js чини моћним управо употреба програмског модела базираног на догађајима, такозвани неблокирајући модел, чији је принцип рада описан на дијаграму који следи.

Принцип рада неблокирајућег модела одвија се помоћу једне нити у node.js:

1. Када node.js прими захтев од стране клијента, тај захтев се смешта у ред догађаја, као што је приказано на слици испод.

![Неблокирајући модел код node.js - фаза 1](assets/images/node-event-queue-1.png)

1. Уколико захтев не садржи неку блокирајућу операцију (нпр. операција са датотеком, операција са ресурсом са мреже, рад са базом података и сл.), окружење node.js ће једноставно обрадити захтев и резултат вратити клијенту.

1. Уколико захтев садржи блокирајућу операцију, окружење node.js ће тај захтев додати скупу нити (енгл. threading pool), како би била реализована блокирајућа операција, као што је приказано на слици која следи. Често је блокирајућа операција повезана са функцијом повратног позива, којом се специфицира шта треба урадити по завршетку блокирајуће операције.

![Неблокирајући модел код node.js - фаза 2](assets/images/node-event-queue-2.png)

1. Када је блокирајућа операција завршена, радна нит (енгл. worker thread) припрема одговор и шаље га петљи за догађаје, која тај одговор шаље клијенту,што је приказано на дољњој слици. Ако је постојао повратни позив придружен блокирајућој операцији, сада насутпа време када је омогућно његово извршење.

![Неблокирајући модел код node.js - фаза 3](assets/images/node-event-queue-3.png)

На овај начин извршавање главног програма није блокирано од стране блокирајућих операција. као што је малопре описано, окружење node.js користи петљу за догађаје у једној нити (енгл. Single Thread Event Loop) за наш програмски код, док се све остало извршава паралелно. Зато ово окружење одликују високе перформансе, нарочито код модерних веб апликација где се захтева велика брзинуаи приликом постојања великог броја симултаних захтева од стране корисника.

#### Менаџер пакета npm

Као што је већ истакнуто модуларност је велика окружења node.js. Модуларност подразумева надоградњу  node.js, инкорпорацију одређених функционалности у виду програмског кода који проширују могућности node.js.

Као што је описано у делу који се односио на модуле, они се могу посматрати као неку врсту ЈаваСкрипт библиотека, а заправо представљају скуп развијенох функција које програмер жели укључити у апликацју.

Постоје уграђени модули, а такође постоје и модули - пакети, које програмер инсталира по потреби.

Модули се инсталирају помоћу алата управљач пакетима окружења node тј. npm. Aлат, тј. апликација npm је написана у ЈаваСкрипту и она на основу задатих параметара претражује базу модула, тј. регистар модула. АКо модула нема у локалном регуистру, алат ће довући модул са регистра на Интернету и инсталирати га у node.js окружење. Почев од верзије 5+, алат npm аутоматски додаје модуле у листу зависности која се налази у датотеци package.json.

Окружење node.js у овом тренутку подраѕуменвано користи CommonJS синтаксу за увоз и извоз модула, па се унутар програмског кода модули увозе помоћу функције `require`.

Овде су укратко побројани неки од најважних node.js модула:

- assert - обезбеђује скуп тестова.

- buffer - врши операције над бинарним подацима. Омогућава интеракцију са TCP током података.

- child_process - омогућава рад са процесом-дететом.

- cluster – омогућава дељење једног node.js процеса у више мањих процеса, чиме се омогућава употреба система са више језгара.

- command line – наредбе node.js се могу користити из терминала.

- C/C++ module – омогућава да се  C/C++ користи као и сваки други модул.

- crypto – управља OpenSSL  криптографским функцијама.

- **dgram** – омогућава имплементацију UDP датаграм сокета.

- debugger – омогућава дебагирање у node.js датотеци.

- dns – омогућава везе са DNS серверима.

- errors - модул омогућава обраду грешака.

- **events** - модул омогућава обраду догађаја.

- **fs** – управља фајл системом.

- **http** – функционалности http сервера.

- https - омогућава http помоћу TLS/SSL протокола.

- modules - омогућава систем за учитавање модула за node.js.

- **net** – омогућава креирање сервера и клијента.

- os – омогућава информације и приступ оперативном систему.

- path – врши операције над путањама датотека.

- **querystring** – омогућава форматирање URL адресе.

- readline - омогућава интерфејс за читање информација из тока података.

- repl – омогућава креирање командне линије.

- stream – омогућава управљање подацима тока.

- string_decoder – декодира бафер објекте у ниску.

- **timers** – омогућује извршавање функције после задате вредности у милисекундама.

- tls – имплементира TLS и SSL протоколе.

- tty – омогућава класе коришћене од стране терминала текста.

- **url** – рашчлањује URL ниске.

- util - приступ корисним функцијама, омогућава подршку за различите апликације и модуле.

- V8 – Приступ информацијама о V8 машини за извршавање ЈаваСкрипта.

- vm – омогућава компајлирање ЈаваСкрипт кода на виртуалној машини V8.

zlib компресија и декомпресија фајлова, помоћу модула Gzip.

У овој листи су истакнути они модули са којима ћемо додатно радити у наставку курса.

### Догађаји код окружења node

Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern. Node thread keeps an event loop and whenever a task gets completed, it fires the corresponding event which signals the event-listener function to execute.

#### Програмирање управљано догађајима

Node.js uses events heavily and it is also one of the reasons why Node.js is pretty fast compared to other similar technologies. As soon as Node starts its server, it simply initiates its variables, declares functions and then simply waits for the event to occur.

In an event-driven application, there is generally a main loop that listens for events, and then triggers a callback function when one of those events is detected.

![Схематски приказ петље за догађаје](assets/images/event-loop.jpg)

Although events look quite similar to callbacks, the difference lies in the fact that callback functions are called when an asynchronous function returns its result, whereas event handling works on the observer pattern. The functions that listen to events act as Observers. Whenever an event gets fired, its listener function starts executing. Node.js has multiple in-built events available through events module and EventEmitter class which are used to bind events and event-listeners as follows −

In Node Application, any async function accepts a callback as the last parameter and a callback function accepts an error as the first parameter. Let's revisit the previous example again. Create a text file named input.txt with the following content.

f events.EventEmitter.

## Класа EventEmitter

As we have seen in the previous section, EventEmitter class lies in the events module. It is accessible via the following code −

// Import events module
var events = require('events');

// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();
When an EventEmitter instance faces any error, it emits an 'error' event. When a new listener is added, 'newListener' event is fired and when a listener is removed, 'removeListener' event is fired.

EventEmitter provides multiple properties like on and emit. on property is used to bind a function with the event and emit is used to fire an event.

Methods
Sr.No.	Method & Description
1	
addListener(event, listener)

Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.

2	
on(event, listener)

Adds a listener at the end of the listeners array for the specified event. No checks are made to see if the listener has already been added. Multiple calls passing the same combination of event and listener will result in the listener being added multiple times. Returns emitter, so calls can be chained.

3	
once(event, listener)

Adds a one time listener to the event. This listener is invoked only the next time the event is fired, after which it is removed. Returns emitter, so calls can be chained.

4	
removeListener(event, listener)

Removes a listener from the listener array for the specified event. Caution − It changes the array indices in the listener array behind the listener. removeListener will remove, at most, one instance of a listener from the listener array. If any single listener has been added multiple times to the listener array for the specified event, then removeListener must be called multiple times to remove each instance. Returns emitter, so calls can be chained.

5	
removeAllListeners([event])

Removes all listeners, or those of the specified event. It's not a good idea to remove listeners that were added elsewhere in the code, especially when it's on an emitter that you didn't create (e.g. sockets or file streams). Returns emitter, so calls can be chained.

6	
setMaxListeners(n)

By default, EventEmitters will print a warning if more than 10 listeners are added for a particular event. This is a useful default which helps finding memory leaks. Obviously not all Emitters should be limited to 10. This function allows that to be increased. Set to zero for unlimited.

7	
listeners(event)

Returns an array of listeners for the specified event.

8	
emit(event, [arg1], [arg2], [...])

Execute each of the listeners in order with the supplied arguments. Returns true if the event had listeners, false otherwise.

Class Methods
Sr.No.	Method & Description
1	
listenerCount(emitter, event)

Returns the number of listeners for a given event.

Events
Sr.No.	Events & Description
1	
newListener

event − String: the event name

listener − Function: the event handler function

This event is emitted any time a listener is added. When this event is triggered, the listener may not yet have been added to the array of listeners for the event.

2	
removeListener

event − String The event name

listener − Function The event handler function

This event is emitted any time someone removes a listener. When this event is triggered, the listener may not yet have been removed from the array of listeners for the event.

## Рад са датотекама

## Рад са токовима

## Догађаји и токови података

## Литература

1. Haverbeke M.: [Eloquent JavaScript](https://eloquentjavascript.net/){:target="_blank"}

1. [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript){:target="_blank"} - Mozzila Developer Network (MDN)

1. Живановић, Д.: [Веб програмирање - ЈаваСкрипт](https://www.webprogramiranje.org/dogadjaji-u-javascript-u/){:target="_blank"}

1. Copes F.: [Complete JavaScript Handbook](https://medium.freecodecamp.org/the-complete-javascript-handbook-f26b2c71719c){:target="_blank"}
