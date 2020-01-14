[Vežbe](../../../README.md)

[Radni priručnik](../../README.md)

-----

# 11. Sedmica 11

## 11.1 Teme

- Poglavlje 7. Node.js i Express.js

   - Sekcija 4. Arhitektura “Model-Pogled-Kontroler”

- Poglavlje 8. MongoDB baza podataka i Mongoose.js ORM

   - Sekcija 1. MongoDB

   - Sekcija 2. Instalacija

   - Sekcija 3. MongoDB shell

   - Sekcija 4. Upiti
   
## 11.2 Domaći zadaci

#### Zadatak 1

Napisati Node.js i Express.js serversku aplikaciju iz [prethodne sedmice](../Sedmica10/README.md) u duhu MVC arhitekture.


#### Zadatak 2

U kolekciju `artikals` baze podataka `Prodavnica` uvesti podatke o artiklima iz datoteke [artkli](./Resursi/artiki.json). U kolekciju `porudzbinas` baze podataka `Prodavnica` uvesti podatke o porudžbinama iz datoteke [porudzbina](./Resursi/porudzbine.json).


#### Zadatak 3

Napisati upit kojim se izdvajaju nazivi artikala čiji je `broj_artikala` veći od 0. Napisani upit testirati nad kolekcijom `artikals` u mongo shell-u.

#### Zadatak 4

Napisati upit kojim se izdvajaju informacije o artiklu sa identifikatorom `5e0e28d07bf8582054b53cac`. Napisani upit testirati nad kolekcijom `artikals` u mongo shell-u.

#### Zadatak 5

Napisati upit koji `broj_artikala` smanjuje za 5 onom artiklu čiji je identifikator `5e0e28d07bf8582054b53cac` i koji ima više od 4 artikla. Napisani upit testirati nad kolekcijom `artikals` u mongo shell-u.

#### Zadatak 6

Napisati upit koji iz kolekcije `artikals` briše sve artikle čiji je broj_artikala jednak 0. Napisani upit testirati nad kolekcijom `artikals` u mongo shell-u.

#### Zadatak 7

Napisati upit kojim se u kolekciju `porudzbinas` dodaje informacija o novoj porudžbini:  Bojan Petrović je 22. decembra 2019. godine poručio 5 artikla sa identifikatorom `5e0e289200bc1b20545a43a3`, a isporuka je izvršena 25. decembra 2019. godine. Napisani upit testirati nad kolekcijom `porudzbinas` u mongo shell-u.


#### Zadatak 8 

Napisati upit kojim se iz kolekcije `porudzbinas` izdvajaju porudzbine proizvoda sa identifikatorom `5e0e289200bc1b20545a43a3`. Napisani upit testirati nad kolekcijom `porudzbinas` u mongo shell-u.
 

#### Zadatak 9 

Napisati upit kojim se iz kolekcije `porudzbinas` izdvajaju porudžbine svih ljudi koji se prezivaju `Peric`. Napisani upit testirati nad kolekcijom `porudzbinas` u mongo shell-u.


-----

[Radni priručnik](../../README.md)

[Vežbe](../../../README.md)
