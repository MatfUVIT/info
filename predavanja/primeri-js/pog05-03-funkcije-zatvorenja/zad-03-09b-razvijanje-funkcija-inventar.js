/* 
Napredak u razvijanju funkcija

Treba za dati broj kokšaka i krava koje su trenutno na farmi 
prilkazati broj kokošaka i krava na farmi, tako da je broj od tri
cifre, a da iza broja sledi reč Kokoški ili Krava

Stampa dopunjena nulama sa početka je izdvojena u posebnu funkciju
*/
function prikaziDopunjenNulamaOdPocetka(broj, tekst) {
    var linija = String(broj);
    while (linija.length < 3)
        linija = "0" + linija;
    console.log(linija + " " + tekst);
}

function prikazStanjaNaFarmi(brojKrava, brojKokoski, brojSvinja) {
    prikaziDopunjenNulamaOdPocetka(brojKrava, "Krava");
    prikaziDopunjenNulamaOdPocetka(brojKokoski, "Kokoški");
    prikaziDopunjenNulamaOdPocetka(brojSvinja, "Svinja");
}

prikazStanjaNaFarmi(7, 11, 29);

