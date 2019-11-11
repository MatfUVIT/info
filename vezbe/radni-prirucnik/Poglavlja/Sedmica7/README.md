[Vežbe](../../../README.md)

[Radni priručnik](../../README.md)

-----

# 6. Sedmica 6

## 6.1 Teme

- Poglavlje 5. JavaScript i DOM

   - Sekcija 1. Osnovni koncepti DOM stabla

   - Sekcija 2. Pretraga elemenata

   - Sekcija 3. Upravljanje elementima

   - Sekcija 4. Dinamičko dodavanje i brisanje elemenata

   - Sekcija 5. Pridruživanje osluškivača događaja elementima

## 6.2 Domaći zadaci

Za naredne zadatke je potrebno kreirati datoteku `index.html` sa narednim sadržajem:

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Podaci o studentima</title>

    <style>
        table {
            border: 2px solid black;
            border-collapse: collapse;
            margin: 20px 0;
        }

        td {
            border: 1px solid black;
            padding: 10px;
        }

        .podaci {
            display: inline-block;
            width: 40%;
            height: 500px;
            vertical-align: top;
        }
    </style>
</head>
<body>
    <input type="button" id="prikazi_podatke" value="Prikaži podatke">
    <br>

    <div id="podaci" class="podaci"></div>
    <div id="odabran_student" class="podaci"></div>

    <script src="index.js"></script>
</body>
</html>
```

Sva rešenja čuvati u datoteci `index.js`.

***Kratak opis veb aplikacije koja se implementira kroz naredne zadatke***

> Želimo da se klikom na dugme "Prikaži podatke" na stranici prikažu informacije o studentima u vidu tabele. Prelaskom miša preko neke od ćelija u prvoj koloni (odnosno, ćelija koje sadrže indekse), želimo da se postavi pozadinska boja te ćelije na sivu. Klikom na neku od ćelija koja sadrži indeks, želimo da se u elementu pored tabele prikažu informacije o odabranom studentu.

***Tekstovi zadataka***

1. Kreirati promenljivu `studenti` koja treba da sadrži podatke o studentima iz naredne tabele. Koristiti odgovarajuće tipove podataka za predstavljanje datih vrednosti. Ova promenljiva se koristi u narednim zadacima.

| indeks | ime | prezime | datum_rodjenja | mesto_rodjenja | datum_upisa | 
| ------ | ----| ------ | ----------- | -------------- | -------------- |
| 20140021 | Milos    | Peric       | 20.01.1995. | Beograd | 06.07.2014.  | 
| 20140022 | Marijana | Savkovic    | 11.03.1995. | Kraljevo | 05.07.2014. | 
| 20130023 | Sanja    | Terzic      | 09.11.1994. | Beograd | 04.07.2013.  | 
| 20130024 | Nikola   | Vukovic     | 17.09.1994. |   | 04.07.2013. | 
| 20140025 | Marijana | Savkovic    | 04.02.1995. | Kraljevo | 06.07.2014. | 
| 20140026 | Zorica   | Miladinovic | 08.10.1995. | Vranje | 06.07.2014. | 
| 20130027 | Milena   | Stankovic   |  |  | |

2. Napisati funkciju `kreiraj_red_tabele(student)` koja kreira objekat koji predstavlja red tabele, pri čemu svaka ćelija u redu odgovara vrednostima koje su sadržane u promenljivoj `student`. Ne koristiti svojstva `innerHTML` i `outerHTML` za dinamičko dodavanje elemenata.

3. Napisati funkciju `postavi_hover_stil()` koja nad *objektom koji je poziva kao metod* (`this`) postavlja pozadinsku boju na sivu.

4. Napisati funkciju `ukloni_hover_stil()` koja nad *objektom koji je poziva kao metod* (`this`) postavlja pozadinsku boju na belu.

5. Napisati funkciju `odaberi_studenta()` koja redom:
   - Briše sadržaj elementa sa identifikatorom `odabran_student`.
   - U element sa identifikatorom `odabran_student` dodaje naslov sa tekstom.
   - Pronalazi studenta iz niza `studenti` na osnovu indeksa koji se nalazi kao sadržaj *objekta nad kojim se funkcija poziva kao metod* (`this`).
   - U element sa identifikatorom `odabran_student`, za svaku vrednost koja se sadrži u pronađenom studentu, dodaje po jedan paragraf čiji je sadržaj kao na narednoj slici.
   ![Odabran student](./Slike/odabran_student.png)

6. Napisati funkciju `postavi_osluškivače_nad_prvom_kolonom()` koja nad prvom tabelom u dokumentu pronalazi prve ćelije u svakom redu tabele, i za svaku od tih ćelija redom:
   - Postavlja osluškivač `postavi_hover_stil` za događaj `'mouseenter'`
   - Postavlja osluškivač `ukloni_hover_stil` za događaj `'mouseleave'`
   - Postavlja osluškivač `odaberi_studenta` za događaj `'click'`

7. Napisati funkciju `prikaži_podatke()` koja redom:
   - Kreira tabelu na osnovu podataka iz promenljive `studenti` kao na narednoj slici. Dozvoljeno je korišćenje funkcije `kreiraj_red_tabele`. Ne koristiti svojstva `innerHTML` i `outerHTML` za dinamičko dodavanje elemenata.
   ![Prikazani podaci](./Slike/prikazani_podaci.png)
   - Postavlja osluškivače pozivom funkcije `postavi_osluškivače_nad_prvom_kolonom`.

   Takođe, postaviti osluškivač `prikaži_podatke` za događaj `'click'` nad dugmetom čiji je identifikator `prikazi_podatke`.

-----

[Radni priručnik](../../README.md)

[Vežbe](../../../README.md)
