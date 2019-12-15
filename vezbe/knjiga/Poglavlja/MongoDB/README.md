[Vežbe](../../../README.md)

[Knjiga](../../README.md)

-----

# 8. MongoDB baza podataka i Mongoose.js ORM

Cilj ovog poglavlja je upoznavanje studenata sa kreiranjem serverskih aplikacija koji komuniciraju sa *MongoDB* bazom podataka. Nakon ovog poglavlja, student bi trebalo da razume način funkcionisanja MongoDB baze podataka, kao i da samostalno kreira modele podataka, i da upravlja njima kroz četiri osnovne operacije: pravljenje novih podataka, kao i čitanje, menjanje i brisanje postojećih podataka (engl. Create, Read, Update, Delete, skr. *CRUD*).

## 8.1. MongoDB

MongoDB je NoSQL baza dokumenata. Podaci se čuvaju kao par ključ-vrednost gde je vrednost dokument. Dokument se čuva u JSON ili XML formatu. Bazu čine kolekcije dokumenata. Svaki dokument može biti različit, sa proizvoljenim brojem polja, veličine i sadržaja. 

Sledeći pojmovi su bitni za razumevanje MongoDB:


-  `_id` - Ovo je polje obavezno za svaki dokument u MongoDB bazi. Predstavlja jedinstvenu vrednost po kojoj razlikujemo dokumente u bazi. Pošto je polje obavezno, ukoliko pokušamo da napravimo novi dokument bez njega, biće automatski dodato.
	
-  `Kolekcija` - Predstavlja grupisane dokumente. Kolekcija postoji unutar jedne baze. Kao što smo već napomenuli, kolekcije nemaju definisanu strukturu, svaki dokument može biti različit.
	
-  `Kursor` - Pokazivač na rezultijući skup našeg upita. Klijenti mogu iterirati kroz ovaj skup kako bi dobili rezultate.
	
-  `Baza podataka` - Skladište za kolekcije. Svaka baza ima svoj skup datoteka.
	
-  `Dokument` - Jedan zapis u kolekciji. Sastoji se od naziva polja i vrednosti.
	
-  `Polje` - Par *(ime, vrednost)* jednog dokumenta. Dokument može imati *0* ili više polja. 
	
-  `JSON` - Notacija za predstavljanje strukturiranih podataka u čitljivom formatu.



## 8.2. Instalacija

Kako bi rad sa MongoDB serverom bio moguć potrebno je preuzeti [instalaciju](https://www.mongodb.com/download-center/community?jmp=docs). Odabrati verziju 4.2.2, odgovarajući operativni sistem i paket. Detaljna uputstva za instalaciju možete pogledati [ovde](https://docs.mongodb.com/manual/administration/install-community/).


## 8.3. Upiti

Pretpostavimo da imamo kolekciju `Student` u kojoj se čuvaju dokumenti sa podacima o pojedinačnim studentima. Da bismo dohvatili podatke iz baze moramo napisati upit koji specifikuje kakvi podaci su nam potrebni. Upite pišemo kao objekte.

### 8.3.1. Upiti čitanja

Ako bismo želeli da dohvatimo podatke o svim studentima u kolekciji, koristili bismo prazan upit, odnosno

```js
{}
```

Često nije potrebno da dohvatimo sve podatke, već neke specifične, odnosno, sa određenim vrednostima za neka polja. U tom slučaju, upit je ***objekat*** sa svojstvima, koja odgovaraju poljima u dokumentima, i vrednostima koje tražimo

```js
{ <ime1> : <vrednost1>, <ime2>: <vrednost2>, ...}
```

Na primer, ako bismo iz kolekcije student želeli da izvučemo podatke o svim studentima sa imenom "Jovan", koristili bismo upit:

```js
{ime : "Jovan"}
```

Ako su nam potrebni još precizniji detalji o studentma, možemo dodati još svojstava u objekat. Na primer, ako bismo želeli sve studente koji se zovu "Jovan", i imaju prosek jednak *8.5*, napisali bismo upit:

```js
{
	ime : "Jovan", 
	prosek: "8.5"
}
```

Na ovaj način dobijamo poređenje vrednosti po jednakosti. Nekada će nam biti potrebno da pronađemo dokumente sa vrednostima koje su manje ili veće od zadate, ili koje su u nekom intervalu, itd. Definisana su posebna svojstva koja možemo pisati u upitu koja se tiču ovog problema:


-  `$gt` - traži vrednosti veće od zadate
-  `$gte` - traži vrednosti veće ili jednake zadatoj
-  `$lt` - traži vrednosti majne od zadate
-  `$lte` - traži vrednosti manje ili jednake zadatoj
-  `$ne` - traži vrednosti koje nisu jednake zadatoj
-  `$eq` - traži vrednosti jednake zadatoj
-  `$in` - traži vrednosti jednake nekoj iz zadatog niza vrednosti
-  `$nin` - traži vrednosti nisu jednake nijednoj iz zadatog niza vrednosti


Ako želimo studente sa prosekom većim od *8.5*, pisali bismo upit

```js
{
	prosek : {
		$gt : "8.5"
	}
}
```

Studente sa prosekom iz intervala [8.0, 9.0] možemo dohvatiti upitom

```js
{
	prosek : {
		$gte : "8.0",
		$lte : "9.0"
	}
}
```

Ukoliko želimo da dohvatimo studente I i R smerova, koristili bismo upit

```js
{
	smer : {
		$in : ['I', 'R']
	}
}
```

Pored toga, možemo koristiti i svojstva koja imaju ulogu logičkih operatora:


-  `$and` - vraća sve dokumente koji su ispunili uslove oba upita
-  `$or` - vraća sve dokumente koji su ispunili uslove bar jedan od upita
-  `$not` - vraća sve dokumente koji nisu ispunili uslove upita
-  `$nor` - vraća sve dokumente koji nisu ispunili uslove nijednog upita


Vrednosti ovih svojstava su nizovi koji predstavljaju logičke jedinice koje se povezuju odgovarajućim logičkim operatorom. Na primer, ako želimo da dohvatimo sve studente čiji je prosek veći od *8.0* i čija je godina upisa *2018*, koristili bismo upit

```js
{
	$and: [ 
		{ prosek: { $gt: 8.0 } }, 
		{ godinaStudija: 2018 } 
	]
}
```

Prethodni upit predstavlja konjunkciju, i on se jednostavnije zapisuje navođenjem zapete između uslova poređenja:

```js
{
	prosek: { $gt: 8.0 }, 
	godinaStudija: 2018
}
```

Ukoliko imamo uslove koji su nešto kompleksniji, onda moramo koristiti `$and` eksplicitno. Na primer, ako je potrebno izdvojiti informacije o studentima čiji je prosek jednak *9.0* *ili* *10.0* **i** čija je godina studija *2017* *ili* *2018*, onda možemo napisati upit:

```js
{
	$and: [
		$or: [ { prosek: 9.0 }, { prosek: 10.0 } ],
		$or: [ { godinaStudija: 2017 }, { godinaStudija: 2018 } ]
	]
}
```

### 8.3.2. Upiti za ažuriranje vrednosti polja

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
{ $<svojstvo>: { <ime1>: <vrednost1>, ... } }
```

gde se redom navode imena polja čije se vrednosti menjaju na prethodno opisan način i nove vrednosti za ta polja.

Za više informacija o operatorima ažuriranja možete pogledati [ovde](https://docs.mongodb.com/manual/reference/operator/update-field/).


## 8.3.3. MongoDB shell

Korišćenjem MongoDB shell-a možemo se povezati sa bazom i izvršavati različite upite nad kolekcijama koje sadrži. Potrebno je pokrenuti shell skript koji dolazi uz `mongo` server (<instalacioni_direktorijum>/Server/4.2/bin/mongo). 

Na raspolaganju su naredne naredbe:

- `show dbs` - Izlistava nazive svih baza na serveru.

- `use <db>` - Pristupa bazi sa nazivom koji se zadaje. Svi upiti se vrše nad odabranom bazom sve dok se ova naredba ne ponovi sa nazivom druge baze.

- `show tables` - Izlistava sve kolekcije iz odabrane baze.

- `db.<collection>.find()` - Izlistava sve dokumente iz zadate kolekcije.

- `db.<collection>.find(<upit>)` - Izlistava sve dokumente iz zadate kolekcije koji ispunjavaju uslove zadate upitom.

- `db.<collection>.insert(<dokument>)` - Dodaje jedan nov dokument u zadatu kolekciju. 

- `db.<collection>.insert([<dokument1>, <dokument2>, ...])` - Dodaje više novih dokumenata u zadatu kolekciju.

- `db.<collection>.update(<upit>, <objekat sa izmenama>)` - Menja polja jednog dokumenta koji ispunjava uslove zadatog upita.

- `db.<collection>.updateMany(<upit>, <objekat sa izmenama>)` - Menja polja svih dokumenata koji ispunjavu uslove zadatog upita.

- `db.<collection>.deleteOne(<upit>)` - Briše jedan dokument koji ispunjava uslove zadatog upita.

- `db.<collection>.deleteMany(<upit>)` - Briše sve dokumente koji ispunjavu uslove zadatog upita.


<!--

## 8.4. Razvojno okruženje Mongoose.js

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
