(function(){

// Definisanje promenljivih (vrednosti su literali odgovarajuceg tipa):
var x = 1;       // tip 'number'
let y = 'Niska'; // tip 'string' (mogu se koristiti jednostruki ili dvostruki navodnici)

// JavaScript okruzenje (engl. engine) nam omogucava specijalan objekat console
// pomocu kojeg mozemo pristupiti konzoli (slicno standardnom izlazu u jeziku C).
/*
    U veb pregledacima, konzola je dostupna kroz alate za razvijace (engl. developer tools).
    Na primer, u veb pregledacu Firefox je potrebno otvoriti:
        > Menu (hamburger ikonica u gornjem desnom uglu) > Web Developer > Web Console
    U veb pregledacu Chrome je potrebno otvoriti:
        > Menu (tri tackice u gornjem desnom uglu) > More tools > Developer tools > Console tab
*/

// Ispisivanje na konzolu se radi pozivom metoda (engl. method) log nad console objektom.
// Mozemo ispisati koliko god zelimo promenljivih, literala, i dr.
console.log(x, y, z, 2, 'Druga niska', false);
// Metodi su specijalne funkcije koje su definisane u okviru objekata.
// Gornji metod log ne postoji sam za sebe, 
// vec je dostupan iskljucivo kroz objekat console,
// upravo zato sto je definisam u okviru tog objekta.
// Naredna linija proizvodi gresku koja se ispisuje u konzoli veb pregledaca (otkomentarisati je i uveriti se!)
// log('Pokusavam da ispisem tekst u konzolu "funkcijom" log');

// Kljucnom reci const definisemo promenljivu cija se vrednost ne moze menjati.
const z = true;
console.log(z);
// Naredna linija proizvodi gresku
// z = false;
console.log(z);

})();