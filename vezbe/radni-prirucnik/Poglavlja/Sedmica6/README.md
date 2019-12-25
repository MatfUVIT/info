[Vežbe](../../../README.md)

[Radni priručnik](../../README.md)

-----

# 6. Sedmica 6

## 6.1 Teme

- Poglavlje 6. Programski jezik JavaScript

   - Sekcija 1. Izvršavanje JavaScript koda

   - Sekcija 2. Osnovni elementi jezika

   - Sekcija 3. Rad sa brojevima i niskama

   - Sekcija 4. Rad sa funkcijama, nedostajućim vrednostima i kontrolama toka izbora

   - Sekcija 5. Rad sa nizovima i ponavljajućim kontrolama toka

   - Sekcija 6. Rad sa objektima

## 6.2 Domaći zadaci

#### Zadatak 1

{:start="1"}
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

{:start="2"}
2. Napisati funkciju `spoji_ime_i_prezime(studenti)` koja menja podatke iz promenljive `studenti` tako što kolone `ime` i `prezime` spaja u novu kolonu `ime_prezime`, a ujedno i eliminiše kolone `ime` i `prezime`. <br> 
Napomena: Imati u vidu da funkcija treba da radi korektno, čak i ako se izmene podaci. Na primer, ako podacima u promenljivoj `student` "dodamo" kolonu `prosek` koja predstavlja prosečnu ocenu tih studenata tokom studija, onda nakon ponovnog poziva funkcije `spoji_ime_i_prezime` rezultat mora da sadrži i tu kolonu. Drugim rečima, jedino što treba pretpostaviti je da će podaci u promenljivoj `studenti` sigurno imati kolone `ime` i `prezime`, a za ostale kolone ne praviti nikakve pretpostavke.

{:start="3"}
3. Napisati funkciju `filter_indeks(studenti, godina)` koja za dati parametar `godina` vraća samo one studente koji su upisali fakultet u datoj godini. Funkcija ne sme da menja promenljivu `studenti`.

{:start="4"}
4. Napisati funkciju `filter_f(studenti, f)` koja za datu funkciju `f` koja predstavlja predikat vraća samo one studente koji zadovoljavaju taj predikat. Predikat je funkcija koja prihvata jednu vrednost i vraća Bulovu vrednost, tj. `f: tip_vrednosti -> boolean`. Funkcija ne sme da menja promenljivu `studenti`.

{:start="5"}
5. Napisati funkciju `nema_nepoznate_vrednosti(student)` koja prihvata jednog studenta i ispituje da li taj student ima sve podatke poznate. Ukoliko student ima neki podatak koji je nedostajuća vrednost (prazno polje u tabeli iznad), funkcija vraća `false`, a inače `true`. Funkcija ne sme da menja parametar `student`.

{:start="6"}
6. Napisati funkciju `pročisti_podatke(studenti)` koja vraća samo one studente koji imaju sve podatke poznate. Nije dozvoljeno koristiti ponavljajuće kontrole toka (`for`, `while-do`, ...), kontrole toka izbora (`for`, `switch`, ...) niti rekurziju. Funkcija ne sme da menja promenljivu `studenti`. (Pomoć: iskoristiti funkcije iz zahteva 4 i 5).

{:start="7"}
7. Napisati funkciju `generiši_html(studenti)` koja generiše nisku koja sadrži HTML kod kojim se podaci iz promenljive `studenti` prikazuju u vidu HTML tabele (na primer, kao u tabeli iz 1. zahteva, s tim da nije potrebno stilizovati tabelu CSS-om, ali može se i to uraditi za vežbu). Funkcija ne sme da menja promenljivu `studenti`.

-----

[Radni priručnik](../../README.md)

[Vežbe](../../../README.md)
