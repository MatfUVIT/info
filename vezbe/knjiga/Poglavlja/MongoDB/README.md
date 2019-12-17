[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

# 8. MongoDB baza podataka i Mongoose.js ORM

Cilj ovog poglavlja je upoznavanje studenata sa kreiranjem serverskih aplikacija koji komuniciraju sa *MongoDB* bazom podataka. Nakon ovog poglavlja, student bi trebalo da razume način funkcionisanja MongoDB baze podataka, kao i da samostalno kreira modele podataka, i da upravlja njima kroz četiri osnovne operacije: pravljenje novih podataka, kao i čitanje, menjanje i brisanje postojećih podataka (engl. Create, Read, Update, Delete, skr. *CRUD*).

## 8.1 MongoDB

_Baza podataka_ (engl. _database_) predstavlja sistem koji se sastoji od struktura podataka i algoritama čija je uloga trajno skladištenje podataka. Pod _trajnim skladištenjem_ smatramo činjenicu da, jednom kada se podaci sačuvaju u bazu podataka, oni ostaju zapamćeni u njoj, čak i kada se aplikacija koja je te podatke upisala u bazu podataka završi. To znači da uvek kada želimo da naše podatke imamo zabeležene nezavisno od životnog veka aplikacije, neophodno nam je da te podatke čuvamo u bazama podataka. Takođe ćemo koristiti i termin _sistem za upravljanje bazom podataka_, skr. _SUBP_ (engl. _database management system_, skr. _DBMS_) koji predstavlja softver koji se koristi za upravljanje bazama podataka. Ti softveri se koriste za kreiranje novih i izmenu postojećih baza podataka, čuvanje podataka i dr.

MongoDB pripada grupi tzv. _nerelacionih_ (engl. _NoSQL_) SUBP, odnosno, same baze podataka koje se kreiraju su _nerelacione_. Postoji više vrsta nerelacionih baza podataka, a baze podataka u MongoDB SUBP pripadaju vrsti koja se naziva _baza dokumenata_ (engl. _document database_). To znači da se svi podaci čuvaju u obliku dokumenata. Format u kojem su zapisani ovi dokumenti je sličan formatu JSON objekata. Vrednosti svojstava (nekada kažemo i _polja_ (engl. _field_)) dokumenta mogu biti: niske, brojevi, drugi dokumenti, nizovi, nizovi drugih dokumenata, itd. Naredna slika ilustruje primer dokumenta koje je sačuvan u nekoj bazi podataka u MongoDB SUBP.

![](./Slike/document.svg)

Bazu podataka u MongoDB SUBP čine _kolekcije_ (engl. _collection_) dokumenata. Svaki dokument može biti različit, sa proizvoljenim brojem polja, veličine i sadržaja. 

Sledeći pojmovi su bitni za razumevanje MongoDB SUBP:

-  `_id` - Ovo je polje obavezno za svaki dokument u MongoDB bazi. Predstavlja jedinstvenu vrednost po kojoj razlikujemo dokumente u bazi. Pošto je polje obavezno, ukoliko pokušamo da napravimo novi dokument bez njega, biće automatski dodato.
    
-  `Kolekcija` - Predstavlja grupisane dokumente. Kolekcija postoji unutar jedne baze. Kao što smo već napomenuli, kolekcije nemaju definisanu strukturu, svaki dokument može biti različit.
    
-  `Kursor` - Pokazivač na rezultujući skup našeg upita. Klijenti mogu iterirati kroz ovaj skup kako bi dobili rezultate.
    
-  `Baza podataka` - Skladište za kolekcije. Svaka baza ima svoj skup datoteka.
    
-  `Dokument` - Jedan zapis u kolekciji. Sastoji se od naziva polja i vrednosti.
    
-  `Polje` - Par *(ime, vrednost)* jednog dokumenta. Dokument može imati 0 ili više polja. 
    
-  `JSON` - Notacija za predstavljanje strukturiranih podataka u čitljivom formatu.

## 8.2 Instalacija

Kako bi rad sa MongoDB SUBP bio moguć potrebno je preuzeti [instalaciju](https://www.mongodb.com/download-center/community?jmp=docs). Odabrati verziju 4.2.2, odgovarajući operativni sistem i paket. Detaljna uputstva za instalaciju možete pogledati [ovde](https://docs.mongodb.com/manual/administration/install-community/).

## 8.3 MongoDB shell

Korišćenjem MongoDB shell programa možemo se povezati sa bazom i izvršavati različite upite nad kolekcijama koje sadrži. Potrebno je pokrenuti shell skript koji dolazi uz `mongo` server (`<instalacioni_direktorijum>/Server/4.2/bin/mongo`).

U nastavku dajemo odabrane naredbe koje je moguće izvršiti u MongoDB shell programu za upravljanje bazama podataka:

- `show dbs` - Izlistava nazive svih baza na serveru.

- `use <db>` - Pristupa bazi sa nazivom koji se zadaje. Svi upiti se vrše nad odabranom bazom sve dok se ova naredba ne ponovi sa nazivom druge baze.

- `show tables` - Izlistava sve kolekcije iz odabrane baze.

- `db.<collection>.find()` - Izlistava sve dokumente iz zadate kolekcije.

- `db.<collection>.find(<upit>)` - Izlistava sve dokumente iz zadate kolekcije koji ispunjavaju uslove zadate upitom.

- `db.<collection>.find(<upit>, <projekcija>)` - Izlistava sve dokumente iz zadate kolekcije koji ispunjavaju uslove zadate upitom, pri čemu se vrši i projekcija rezultata.

- `db.<collection>.insert(<dokument>)` - Dodaje jedan nov dokument u zadatu kolekciju. 

- `db.<collection>.insert([<dokument1>, <dokument2>, ...])` - Dodaje više novih dokumenata u zadatu kolekciju.

- `db.<collection>.insertOne(<dokument>)` - Dodaje jedan nov dokument u zadatu kolekciju. 

- `db.<collection>.insertMany([<dokument1>, <dokument2>, ...])` - Dodaje više novih dokumenata u zadatu kolekciju.

- `db.<collection>.update(<upit>, <objekat sa izmenama>)` - Menja polja jednog dokumenta koji ispunjava uslove zadatog upita.

- `db.<collection>.updateMany(<upit>, <objekat sa izmenama>)` - Menja polja svih dokumenata koji ispunjavu uslove zadatog upita.

- `db.<collection>.deleteOne(<upit>)` - Briše jedan dokument koji ispunjava uslove zadatog upita.

- `db.<collection>.deleteMany(<upit>)` - Briše sve dokumente koji ispunjavu uslove zadatog upita.

- `db.<collection>.drop()` - Uništava kolekciju i sve dokumente koji se nalaze u njoj.

- `db.dropDatabase()` - Uništava trenutno aktivnu bazu podataka i sve kolekcije, odnosno, dokumenta koji se nalaze u njoj.

MongoDB shell program ne sadrži operaciju za kreiranje nove baze podataka. Umesto toga, baza se automatski kreira kada se u nju trajno zapiše prvi dokument. Tako, na primer, ukoliko MongoDB SUBP nije imao bazu podataka `myNewDB`, nakon izvršavanja naredne dve naredbe, biće kreirana nova baza podataka `myNewDB` koja će sadržati jednu kolekciju `myNewCollection1` koja će sadržati jedan dokument:

```js
> use myNewDB

> db.myNewCollection1.insertOne( { x: 1 } )
```

Takođe, vredno je napomenuti da su opisane naredbe primenljive **samo u MongoDB shell programu**, a ne u drugim radnim okvirima, drajverima i sl. U sekciji u kojoj budemo govorili o Mongoose.js radnom okviru, primetićemo da postoji veliki broj metoda čiji nazivi odgovaraju prethodno opisanim naredbama. Međutim, ne treba ih mešati sa naredbama iznad, već one imaju drugačiju semantiku!

## 8.4 Upiti

Pre nego što se upustimo u ovu oblast potrebno je da pripremimo podatke za obradu. U datoteci [koju možete preuzeti sa ove veze](./Resursi/studenti.json) nalaze se podaci o pojedinačnim studentima. Podaci su zadati u `JSON` formatu i kao takvi se lako mogu uvesti u `MongoDB` bazu programom `mongoimport`[^1]:

[^1]: Program `mongoimport` nalazi se u istom direktorijumu gde i `mongo`.

```shell
mongoimport --db <db_name> --collection <collection_name> --file <path>
```

gde se umesto `<db_name>` navodi ime baze u koju se uvoze podaci, zatim naziv kolekcije u koju se podaci uvoze umesto `<collection_name>` i  putanju do datoteke koja sadrži podatke umesto `<path>`.


> Zadatak 0. U kolekciju `Student` iz baze `Fakultet` uvesti podatke o studentima iz datoteke [studenti.json](./Resursi/studenti.json).

```shell
mongoimport --db Fakultet --collection Student --file studenti.json
```

U nastavku podrazumevamo da smo otvorili MongoDB shell program (`mongo`) i da smo postavili da radimo sa prethodno uvezenom bazom podataka `Fakultet` na sledeći način:

```js
> use Fakultet
```

### 8.4.1 Upiti čitanja

Da bismo dohvatili podatke iz baze moramo napisati _upit_ (engl. _query_) koji specifikuje ograničenja koja dokumenti moraju da ispunjavaju da bi bili dohvaćeni. Upiti u MongoDB SUBP predstavljaju objekte čija su svojstva tipovi ograničenja, a vrednosti tih svojstava su vrednosti odgovarajućih ograničenja:

```js
{ 
    <ogranicenje1>: <vrednost1>, 
    <ogranicenje2>: <vrednost2>, 
    ...
}
```

Specijalno, ako bismo želeli da dohvatimo podatke o svim studentima u kolekciji, koristili bismo prazan upit, odnosno

```js
{}
```

> Zadatak 1. Iz kolekcije `Student` izdvojiti sve studente koji se zovu `Jovana`.

```js
> db.Student.find({name: "Jovana"})
```

Ukoliko je navedeno više od jednog svojstva, traže se svi dokumenti koji za svako od navedenih naziva polja imaju navedenu vrednost. Ako se bar jedno polje ne poklapa po vrednosti sa zadatom, on neće biti prikazan kao rezultat.

> Zadatak 2. Iz kolekcije `Student` izdvojiti sve studente koji se zovu `Jovana` i čiji je prosek jednak `8.5`.


```js
> db.Student.find({
    name: "Jovana", 
    avg_grade: "8.5"
})
```

Na ovaj način dobijamo poređenje vrednosti po jednakosti. Nekada će nam biti potrebno da pronađemo dokumente sa vrednostima koje su manje ili veće od zadate, koje su u nekom intervalu, itd. Definisana su posebna svojstva koja možemo pisati u upitu koja predstavljaju ova ograničenja:

-  `$gt` - pronalazi vrednosti veće od zadate
-  `$gte` - pronalazi vrednosti veće ili jednake zadatoj
-  `$lt` - pronalazi vrednosti majne od zadate
-  `$lte` - pronalazi vrednosti manje ili jednake zadatoj
-  `$ne` - pronalazi vrednosti koje nisu jednake zadatoj
-  `$eq` - pronalazi vrednosti jednake zadatoj
-  `$in` - pronalazi vrednosti jednake nekoj iz zadatog niza vrednosti
-  `$nin` - pronalazi vrednosti nisu jednake nijednoj iz zadatog niza vrednosti.

Sintaksa za ove operatore je sledeća:
```js
{ 
    <polje>: {
        $<operator>: <vrednost>
    } 
}
```

Dakle, za polje čije je ime zadato umesto vrednosti navodimo objekat koji sadrži operator kao svojstvo, a vrednost koja se zadaje predstavlja broj ili niz brojeva sa kojima se poredi vrednost zadatog polja.


> Zadatak 3. Iz kolekcije `Student` izdvojiti sve studente sa prosekom većim od `8.5`.

```js
> db.Student.find({
    avg_grade: {
        $gt : "8.5"
    }
})
```

> Zadatak 4. Iz kolekcije `Student` izdvojiti studente sa prosekom između 8.0 i 9.0.

```js
> db.Student.find({
    avg_grade: {
        $gte : "8.0",
        $lte : "9.0"
    }
})
```

> Zadatak 5. Iz kolekcije `Student` izdvojiti studente smerova `Informatika` i `Racunarstvo i informatika`.

```js
> db.Student.find({
    major: {
        $in : ['Informatika', 'Racunarstvo i informatika']
    }
})
```

Pored toga, možemo koristiti i svojstva koja imaju ulogu logičkih operatora:

-  `$and` - pronalazi sve dokumente koji su ispunili uslove oba upita
-  `$or` - pronalazi sve dokumente koji su ispunili uslove bar jedan od upita
-  `$not` - pronalazi sve dokumente koji nisu ispunili uslove upita
-  `$nor` - pronalazi sve dokumente koji nisu ispunili uslove nijednog upita

Vrednosti ovih svojstava su nizovi objekata koji predstavljaju logičke jedinice i povezuju se odgovarajućim logičkim operatorom. U slučaju operatora konjunkcije, ukoliko se u nizu nalaze jednostavni objekti, koji su ranije opisani, možemo izostaviti operator i samo razdvajati zarezom sve objekte. Međutim, ukoliko imamo uslove koji su nešto kompleksniji, npr. uslovi koji sadrži i neke druge logičke operatore, onda moramo koristiti `$and` eksplicitno. 

Korišćenje logičkih operatora može se predstaviti sledećim objektom:

```js
{
    $<operator>: [ 
        { <polje1>: <vrednost1> }, 
        { <polje2>: <vrednost2> },
        ... 
    ]
}
```

> Zadatak 6. Iz kolekcije `Student` izdvojiti sve studente čiji je prosek veći od `8.0` sa smera `Informatika`.

```js
> db.Student.find({
    $and: [ 
        { avg_grade: { $gt: 8.0 } }, 
        { major: `Informatika` } 
    ]
})
```

Prethodni upit predstavlja konjunkciju, i on se može jednostavnije zapisati navođenjem zapete između uslova poređenja, tj.:

```js
> db.Student.find({
    avg_grade: { $gt: 8.0 },
    major: `Informatika`
})
```

> Zadatak 7. Iz kolekcije `Student` izdvojiti informacije o studentima čiji je prosek jednak `9.0` ili `10.0` i koji su upisali smer `Informatika` ili `Statistika`.

```js
> db.Student.find({
    $and: [
        { 
            $or: [ { avg_grade: 9.0 }, { avg_grade: 10.0 } ] 
        },
        {
            $or: [ { major: 'Informatika' }, { major: 'Statistika' } ]
        }
    ]
})
```

U prethodnim upitima vrednosti polja su poređenje niskama onakve kakve su zadate. Nekada je potrebno proveriti da li vrednost polja počinje ili završava nekom niskom, ili da li sadrži neku nisku. 

- Ukoliko želimo da vrednost nekog polja počinje nekom niskom, onda tu nisku navodimo između `/^` i `/`.

- Ukoliko želimo da vrednost nekog polja završava nekom niskom, onda tu nisku navodimo između `/` i `$/`.

- Ukoliko želimo da vrednost nekog polja sadrži neku nisku, onda tu nisku navodimo između `/` i `/`.

> Zadatak 8. Iz kolekcije `Student` izdvojiti informacije o studentima čije prezime počinje karakterom `P`.

```js
> db.Student.find({ 
    surname: /^P/ 
})
```

### 8.4.2 Projekcija u upitima za čitanje vrednosti

Ukoliko ne želimo da u rezultatu dobijemo sva polja za dokumente, možemo iskoristiti _projekciju_ (engl. _projection_) rezultata. Projekcija predstavlja objekat čija je sintaksa oblika:

```js
{
    <polje1>: <vrednost1>,
    <polje2>: <vrednost2>,
    ...
}
```

Polja u projekciji predstavljaju polja koja se nalaze u dokumentu, a vrednosti u projekciji mogu biti:

- `0` ili `false`: polje neće biti obuhvaćeno u rezultatu
- `1` ili `true`: polje će biti obuhvaćeno u rezultatu

Podrazumevano, ukoliko ne navedemo projekciju, sva polja iz dokumenta će biti dohvaćena. Ukoliko ipak navedemo projekciju, tada će biti dohvaćena samo ona polja koja su eksplicitno navedena da budu uključena (vrednost `1` ili `true` u projekciji), dok će ostala polja biti isključena iz rezultata. Specijalno, polje `_id` će se uvek naći u rezultatu, osim ako eksplicitno ne navedemo `_id: 0` (ili `id_: false`) u objektu projekcije.

> Zadatak 9: Iz kolekcije `Student` izdvojiti informacije o imenu, prezimenu i prosečnoj oceni onih studenata čije prezime počinje karakterom `P`.

```js
> db.Student.find(
    // Upit
    { 
        surname: /^P/ 
    }
    // Projekcija
    {
        _id: 0,
        name: 1,
        surname: true,
        avg_ocena: 1
    }
)
```

### 8.4.3 Upiti za ažuriranje vrednosti polja

Ukoliko bismo želeli da izmenimo neku vrednost upisanu u bazu možemo koristiti neki od sledećih operatora:

- `$currentDate` - Postavlja vrednost polja na trenutni datum. Vrednost ovog svojstva je objekat koji sadrži jedno ili više polja čije se vrednosti menjaju. Za svako polje se kao vrednost može navesti:
    - bulova vrednost `true` čime se naznačava da se vrednost zadaje u `Date` formatu,

    - objekat, koji određuje tip (svojstvo `$type`) polja i može biti `timestamp` ili `date`, u notaciji

        ```js
        { $type : 'timestamp' }
        ```

        ili 

        ```js
        { $type : 'date' }
        ```

- `$inc` - Uvećava trenutnu vrednost jednog ili više polja za zadate vrednosti.

- `$mul` - Množi trenutnu vrednost jednog ili više polja za zadate vrednosti.

- `$set` - Postavlja vrednost jednog ili više polja na zadate vrednosti.

Sintaksa ovih svojstava je sledeća:
    
```js
{ 
    $<svojstvo>: { 
        <polje1>: <vrednost1>, 
        ... 
    } 
}
```

gde se redom navode imena polja čije se vrednosti menjaju na prethodno opisan način i nove vrednosti za ta polja.

Za više informacija o operatorima ažuriranja možete pogledati [ovde](https://docs.mongodb.com/manual/reference/operator/update-field/).

> Zadatak 10. U kolekciji `Student` izmeniti napomenu u `Izvanredni studenti informatike` svim studentima smera `Informatika` ili `Racunarstvo i informatika` čiji je prosek veći od `9.5`, a zatim izlistati sav sadržaj kolekcije.

```js
> db.Student.updateMany(
    // Prvo navodimo upit koja dokumenta azuriramo
    { 
        $and: [ 
            { $or: [{major: 'Informatika'}, { major: 'Racunarstvo i informatika'}] }, 
            { avg_grade: {$gt: 9.5} }
        ]
    }, 
    // A zatim navodimo upit na koji nacin ta dokumenta azuriramo
    {
        $set: { 
            note: "Izvanredni studenti informatike"
        }
    }
)

> db.Student.find()
```


<!--

## 8.5. Razvojno okruženje Mongoose.js

Iako je moguće komunicirati iz Node.js aplikacije ka MongoDB bazi podataka pomoću zvaničnog MongoDB drajvera koji se razvija od strane razvijača MongoDB baze podataka\footnote{Više informacije se može pronaći na zvaničnoj stranici projekta [ovde](https://mongodb.github.io/node-mongodb-native/), mi ćemo u našim aplikacijama koristiti razvojno okruženje Mongoose.js\footnote{Zvanična veb prezentacija projekta se nalazi [ovde](https://mongoosejs.com/), dok je dokumentaciju moguće pronaći [ovde](https://mongoosejs.com/docs/api.html). Razlog za ovu odluku jeste što nam Mongoose.js omogućava da pišemo kod koji se poprilično dobro uklapa u ono što već znamo. Drugim rečima, na ovom času ćemo moći da upotrebimo kod koji smo napisali na prethodnom času bez i jedne konceptualne promene. Pređimo na naredni primer.



Kada imamo povezane kolekcije, kao što su u ovom primeru `Orders` i `Products` - u `Orders` čuvamo identifikator proizvoda koji je naručen, može nam biti od koristi da iz baze dohvatimo i informacije o proizvodu na osnovu identifikatora. Na rezultat funkcije `find` i `findById` možemo nadovezati poziv funkcije
    `populate(path [, select][, model][, match][, options])` \footnote[Dokumentacija](https://mongoosejs.com/docs/api.html\#query_Query-populate) koja će umesto identifikatora prosleđen kroz parametar \inlineKod{path} ubaciti objekat sa podacima o proizvodu koji tražimo. U pozadini se vrši pretraga kolekcije koja je zadata kao vrednost svojstva \inlineKod{ref} u shemi. Dakle, sve što treba da prosledimo funkciji jesu nazivi polja koje treba dopuniti razdvojeni blanko karakterom:

-->
-----

[Knjiga](../../README.md)

[Vežbe](../../../README.md)

<!--
<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/.png" alt="">
</div>
-->
