[Vežbe](../../../README.md)

[Radni priručnik](../../README.md)

-----

# 12. Sedmica 12

## 12.1 Teme

- Poglavlje 8. MongoDB baza podataka i Mongoose.js ORM

   - Sekcija 5. Razvojno okruženje Mongoose.js
   
## 10.2 Domaći zadaci

U zadacima 1 i 2 nije eksplicitno navedeno da svaka Mongoose shema mora u svojoj definiciji da sadrži identifikator koji svaki dokument u MongoDB bazi podataka mora da ima (polje `_id`). Od Vas se očekuje da ste ovo razumeli i da znate da treba da bude dodato pored ostalih informacija koje su Vam date. Pogledajte primere shema u knjizi da biste videli kako se ovo radi.

#### Zadatak 1

Napisati Mongoose shemu `artikalShema` koja sadrži naredne informacije:

- naziv (niska)
- cena (broj)
- broj artikala (broj)

Kreirati Mongoose model `Artikal` na osnovu date sheme.

#### Zadatak 2

Napisati Mongoose shemu `porudzbinaShema` koja sadrži naredne informacije:

- ime i prezime korisnika (niska)
- broj artikala (broj)
- datum naručivanja (datum) - ova vrednost se automatski generiše na serveru u trenutku kreiranja nove porudžbine
- datum isporuke (datum)
- identifikator artikla na koji se porudžbina odnosi (tj. identifikator koji referiše na `Artikal`)

Kreirati Mongoose model `Porudzbina` na osnovu date sheme.

#### Zadatak 3

Koristeći implementaciju Node.js i Express.js serverske aplikacije napisane u duhu MVC arhitekture iz [prethodne sedmice](../Sedmica11/README.md), ispraviti implementaciju modela tako da važi:

- Umesto nizova objekata koji se čuvaju na serveru, koriste se napisane sheme iz 1. i 2. zadatka iznad, kako bi se omogućilo trajno skladištenje podataka u MongoDB bazu podataka sa nazivom `Prodavnica`.

- Sve funkcije modela se implementiraju nad modelima `Artikal` i `Porudzbina` umesto nad nizovima objekata koji se čuvaju na serveru.

- Koristi se `async`-`await` paradigma asinhronog programiranja za rad sa bazom podataka i modelom MVC aplikacije (samim tim, biće potrebno izvršiti manje izmene u kontroleru, kao što smo radili na časovima, odn. kao što stoji u knjizi).

-----

[Radni priručnik](../../README.md)

[Vežbe](../../../README.md)
