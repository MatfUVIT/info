[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

# 7. Node.js i Express.js

Cilj ovog poglavlja jeste upoznavanje studenta sa razvojem aplikacija koje se izvršavaju na serveru korišćenjem radnog okvira _Node.js_. Na početku ćemo govoriti o arhitekturi serverskih aplikacija kroz _pakete_ (engl. _package_) i _module_ (engl. _module_) kao i o upravljaču paketa. Zatim, kroz razvoj aplikacije za prikazivanje informacija o studentima i njihovim izmenama demonstriraćemo paket `express` koji nam služi za jednostavno upravljanje HTTP zahtevima koje klijentske aplikacije šalju našoj serverskoj aplikaciji i implementacijom funkcija koje obrađuju te zahteve. Kroz obradu zahteva ćemo se upoznati za različitim drugim paketima kao što su `ejs` za dinamičko generisanje HTML stranica i `body-parser` za automatsko prevođenje podataka koji su pridruženi HTTP zahtevima u JavaScript strukture (objekti, nizovi, niske, ...). Pored toga što će čitalac imati priliku da nauči da implementira serverske aplikacije, naučiće i da organizuje svoj izvorni kod u duhu arhitekturalnog stila koji se naziva model-pogled-kontroler (engl. _model-view-controller_, skr. _MVC_).

## 7.1 Moduli

_Modul_ (engl. _module_) predstavlja deo programa koji specifikuje na koje se druge delove programa on oslanja i koje mogućnosti on daje ostalim delovima programa. Te funkcionalnosti koje su izložene "svetu" zajedno se nazivaju _interfejs_ (engl. _interface_) modula. Sve ostalo se smatra privatnim za taj modul, i o tome "svet" ne mora da vodi računa. Korišćenjem modula se smanjuje celokupna povezanost delova programa, odnosno, tendencija da "sve zna za sve", što se smatra lošom praksom za programiranje.

Odnosi između modula se nazivaju _zavisnosti_ (engl. _dependency_). Kada modul zahteva deo iz nekog drugog modula, kažemo da taj modul _zavisi_ (engl. _depend_) od drugog modula. Da bismo razdvojili module, potrebno je da svaki modul ima svoj, privatan opseg.

### 7.1.1 Paketi

_Paketi_ (engl. _package_) predstavljaju delove koda koji se mogu distribuirati (kopirati i instalirati). Paket može da sadrži jedan ili više modula i ima informacije o tome od kojih drugih paketa zavisi. Paket obično sadrži i dokumentaciju. Kada se problem pronađe u paketu ili se doda nova mogućnost, paket se ažurira. Tada, programi koji zavise od paketa (koji takođe mogu biti drugi paketi) mogu da se jednostavno ažuriraju na novu verziju.

### 7.1.2 Node upravljač paketima

Rad na ovakav način zahteva infrastrukturu - mesto za skladištenje i pronalaženje paketa, kao i jednostavan način za njihovo instaliranje i ažuriranje. U svetu JavaScript  jezika, ovakva infrastruktura je obezbeđena od strane NPM (https://npmjs.org). NPM predstavlja dve stvari:

1. Veb servis odakle je moguće preuzeti postojeće pakete i postaviti nove.

2. Program komandne linije (koji se automatski instalira prilikom instaliranja _Node.js_ okruženja za JavaScript) koji pomaže instaliranje i upravljanje paketima. 

U tekstu ćemo videti kako možemo instalirati različite pakete za naše programe koje budemo pisali.

### 7.1.3 CommonJS

Ovaj način predstavlja verovatno najrasprostranjeniji način za kreiranje JavaScript modula. Sistem Node.js koristi upravo ovaj način, a takođe i većina paketa na NPM sistemu, te ćemo mu se zbog toga i posvetiti. 

Glavni koncept u CommonJS modulima jeste funkcija `require`. Kada pozovemo ovu funkciju sa imenom modula od kojeg zavisi naš modul, funkcija se postara da je modul učitan i vraća nam njegov interfejs. Pošto učitavanje postavlja omotač nad kodom modula u funkciji, moduli automatski dobijaju svoj lokalni opseg. Sve što oni treba da urade jeste da `require` pozivima dohvataju pakete od kojih zavise, a svoj interfejs stave kao deo objekta koji se zove `module.exports`. Zanimljiva stavka CommonJS modula je da, iako sistem modula kreira prazan objekat-interfejs za nas (koji je vezan za promenljivu `module.exports`), mi ga možemo zameniti bilo kojom vrednošću tako što pregazimo vrednost `module.exports` i time definišemo šta je to što naš modul isporučuje korisnicima. Tako možemo imati mnoge "skrivene" funkcije koje predstavljaju implementaciju, a koje korisnici neće videti (jer to za njih i nije značajno) tako što ih jednostavno ne izvezemo kroz promenljivu `module.exports`. Ovo je urađeno u velikom broju postojećih modula da bi se exportovala jedna vrednost umesto objekta-interfejsa.

Kada putanja za učitavanje paketa nije relativna, Node.js će pogledati instalirane pakete i potražiće u njima paket sa prosleđenim imenom. Instaliranje paketa u korenom direktorijumu projekta se može izvrsiti komandom

```shell
npm install imePaketa
```

Kroz primere koji slede videćemo razne upotrebe CommonJS načina za kreiranje i uvoženje modula.

Da bismo kreirali novi Node.js projekat, koji će u našem slučaju predstavljati novu serversku aplikaciju, potrebno je da pokrenemo komandu

```shell
npm init
```

Komanda je interaktivnog tipa i od nas će tražiti podatke tipa "Kako se zove datoteka od koje se pokreće aplikacija?", "Koji je naziv projekta?", "Koja je licenca projekta?" i mnoge druge. Mi ćemo sve naše serverske aplikacije kreirati od `server.js` datoteke. Ova komanda će kreirati `package.json` datoteku koja sadrži unete vrednosti. Naravno, moguće je jednostavno izmeniti ovu datoteku ukoliko odlučimo da ažuriramo neku vrednost. Ono što je glavna prednost inicijalizacije novog projekta jeste što sada možemo da instaliramo pakete od kojih naša aplikacija zavisi, i te zavisnosti će biti zapamćene u `package.json` datoteci. To znači da možemo proslediti naš izvorni kod projekta zajedno sa tom datotekom drugoj osobi, koja može podesiti projekat jednostavnom komandom

```shell
npm install
```

kojom će se pogledati od kojih sve paketa zavisi naš projekat i oni će se instalirati. Svi paketi koji se instaliraju se čuvaju pod korenim direktorijumom projekta u direktorijumu `node_modules`. Ovaj direktorijum nije potrebno niti poželjno proslediti uz izvorni kod (ili postaviti na sistem za kontrolu verzija, ukoliko se takav sistem
koristi).

## 7.2 Kreiranje HTTP serverskih aplikacija

Osnovni paket koji ćemo koristiti za kreiranje serverskih aplikacija je paket `http`. On nam nudi mnogobrojne metode za rad, a mi ćemo koristiti metod `createServer` kojim se kreira nova instanca veb servera. Dakle, da bismo učitali paket `http` i kreirali instancu veb servera, možemo uraditi:

```js
// For creating a server
const http = require("http");
const server = http.createServer();
```

Da bismo pokrenuli serversku aplikaciju, potrebno je da definišemo broj porta na kojem će biti pokrenuta. U našim aplikacijama, koristićemo broj porta 3000. Zatim je potrebno nad objektom servera pozvati metod `listen` kojem prosleđujemo broj porta:

```js
// Creating the server and running it on port 300
const port = 3000
server.listen(port);
```

Da bismo se uverili da je serverska aplikacija pokrenuta, možemo osluškivati događaj `'listening'` metodom `once`:

```js
// Prints a message in the terminal
// once the server is active
server.once('listening', function () {
    console.info(`Started the server on http://localhost:${port}`);
});
```

Sada možemo otvoriti terminal i pokrenuti narednu komandu:

```shell
node server.js
```

Očekujemo da u terminalu vidimo narednu poruku:

```
Started the server on http://localhost:3000
```

Međutim, iako je ovo prvi korak ka kreiranju serverske aplikacije, problem je u tome što još uvek nismo rekli serveru šta treba da radi u slučaju da klijentska aplikacija pošalje HTTP zahtev serveru. Ovde na scenu stupa radni okvir Express.js.

## 7.3 Obrađivanje HTTP zahteva radnim okvirom Express.js

Za početak, da bismo uopšte mogli da koristimo radni okvir Express.js, potrebno je da instaliramo paket `express` u istom direktorijumu gde smo kreirali Node.js projekat:

```shell
npm install express
```

Sada ćemo primetiti da se datoteka `package.json` ažurirala tako da sadrži informacije o novom paketu u svojstvu `'dependencies'` (verzija paketa se može razlikovati od prikaza ispod):

```
{
  "name": "serviranje-datoteka",
  "version": "1.0.0",
  "description": "",
  "main": "server.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "express": "^4.17.0"
  }
}
```

Sada prelazimo na implementiranje prve verzije naše aplikacije. U tu svrhu, prikažimo kako ona treba da izgleda narednom slikom.

![](./Slike/1.1.png)

Ovo je prikaz aplikacije u slučaju kada korisnik otvori adresu `http://localhost:3000` u veb pregledaču. Drugim rečima, ovo je prikaz aplikacije kada veb pregledač pošalje HTTP zahtev metodom `GET` ka adresi `http://localhost:3000`. Ovo je izuzetno važna informacija koju treba imati na umu i koja će nam kasnije značiti.

U slučaju da korisnik otvori bilo koju drugu adresu, na primer, `http://localhost:3000/bilo-sta-drugo`, potrebno je da mu se prikaže stranica kao na narednoj slici.

![](./Slike/1.2.png)

Pređimo sada na implementaciju.

Za početak, s obzirom da želimo da ostvarimo što je moguće bolju modularnost koda, za dalju implementaciju je potrebno da kreiramo datoteku `app.js` u direktorijumu projekta u kojoj ćemo definisati jednu Express.js aplikaciju na sledeći način:

```js
// For creating expressjs applications
const express = require('express');

const app = express();
```

-----

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->
