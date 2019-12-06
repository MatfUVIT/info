[Vežbe](../../../README.md)

[Radni priručnik](../../README.md)

-----

# 9. Sedmica 9

## 9.1 Teme

- Poglavlje 6. jQuery biblioteka

   - Sekcija 2. Instalacija jQuery biblioteke
   
   - Sekcija 3. Osnovna jQuery sintaksa
   
   - Sekcija 4. jQuery selektori
   
   - Sekcija 5. jQuery metodi zasnovani na događajima
   
   - Sekcija 6. jQuery efekti i animacije
   
   - Sekcija 7. Lančanje metoda
   
   - Sekcija 8. Upravljanje DOM stablom
   
   - Sekcija 9. Upravljanje stilovima
   

## 9.2 Domaći zadaci

#### Zadatak 1

Korišćenjem Bootstrap biblioteku doderati [formular](./Resursi/zadatak1.html) tako da izgleda kao na slici:
	

<div style="max-width: 98%;">
<img style="max-width: 100%;" src="./Slike/zadatak1_vesti.png" alt="">
</div>


Koristeći biblioteku jQuery omogućiti da se klikom na "Prijavi se za vesti" prikazuje i skriva deo formulara, kao na slici:

<figure style="max-width: 98%;">
	<figcaption> 
		Pre odabira polja "Prijavite se za vesti":
	</figcaption>
	<img style="max-width: 100%;" src="./Slike/zadatak1_bez_vesti.png" alt="">
</figure>

<figure style="max-width: 98%;">
	<figcaption> 
		Nakon odabira polja "Prijavite se za vesti":
	</figcaption>
	<img style="max-width: 100%;" src="./Slike/zadatak1_vesti.png" alt="">
</figure>

Na početku polje nije odabrano pa treba podesiti da je na početku ovaj deo formulara skriven odgovarajućim CSS svojstvom.

Koristeći biblioteku jQuery omogućiti naredne funkcionalnosti u formularu:
	
-  Kada element za unos korisničkog imena izgubi fokus, proveriti da li je polje prazno. Ukoliko jeste, upisati poruku o grešci u za to pripremljeno polje uz dodavanje klase "greska}. Ukoliko nije, obrisati poruku o grešci iz za to predviđenog polja i ukloniti klasu "greska}.

-  Kada element za unos elektronske adrese izgubi fokus, proveriti da li je polje prazno. Ukoliko je polje prazno, proveriti da li posle njega postoji polje sa porukom o grešci i ako ne postoji, kreirati ga. Ukoliko postoji, ne treba ništa preduzimati. Ukoliko polje nije prazno, proveriti da li posle njega postoji polje sa porukom o grešci i ako postoji obrisati ga. Ukoliko ne postoji, nista ne preduzimati.

-  Prilikom svakog unosa preko tastature u elementu za unos lozinke, obezbediti da se vrši provera da li uneta lozinka ima više od *5* karaktera. Ukoliko lozinka nije korektna, proveriti da li posle njega postoji polje sa porukom o grešci i ako ne postoji, kreirati ga. Ukoliko postoji, ne treba ništa preduzimati. Ukoliko je lozinka korektna, proveriti da li posle njega postoji polje sa porukom o grešci i ako postoji obrisati ga. Ukoliko ne postoji, nista ne preduzimati.
		
-  Prilikom svake promene stanja checkbox dugmeta, proveriti da li je dugme selektovano. Ako jeste, prikazati dodatna polja za odabir vesti efektom slajdera na dole u trajanju od *1* sekunde. Ukoliko nije, sakriti dodatna polja za odabir vesti efektom slajdera na gore u trajanju od *1* sekunde.
		
-  Pri slanju podataka iz formulara:
	-  Proveriti da li je korisničko ime prazno. Ako jeste, ispisati odgovarajuću poruku u delu za izveštaj, fokusirati element za unos korisničkog imena i prekinuti dalju validaciju.
	
	-  Proveriti unos za elektronsku adresu. Polje ne sme da bude prazno i mora da bude zadovoljavajućeg formata. Ako unos nije korektan, ispisati odgovarajuću poruku u delu za izveštaj, fokusirati element za unos elektronske pošte i prekinuti dalju validaciju.
	
	-  Proveriti originalnu i ponovljenu šifru. Obe moraju biti unete, minimalna dozvoljena dužina je *6* i moraju se poklapati. Ako unos nije korektan, ispisati odgovarajuću poruku u delu za izveštaj, fokusirati element za unos originalne lozinke i prekinuti dalju validaciju.
	
	-  Proveriti da li se korisnik prijavio na vesti. Ako jeste, proveriti da li je odabrao oblast. Ako jeste, očitati vrednost dinamike isporučivanja i prikazati prozor sa porukom o odabranoj dinamici. Ako nije odabrao oblast, prikazati prozor sa odgovarajućom porukom i prekinuti dalju validaciju.



-----

[Radni priručnik](../../README.md)

[Vežbe](../../../README.md)
