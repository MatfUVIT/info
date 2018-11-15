/* 
Napredak u razvijanju funkcija

Treba za dati broj kokšaka i krava koje su trenutno na farmi 
prilkazati broj kokošaka i krava na farmi, tako da je broj od tri
cifre, a da iza broja sledi reč Kokoški ili Krava

Dopuna nulama od početka je izdvojena u posebnu funkciju
*/
function dopuniNulamaOdPocetka(broj, sirina) {
    var linija = String(broj);
    while (linija.length < sirina)
        linija = "0" + linija;
    return linija;
}

function prikazStanjaNaFarmi(brojKrava, brojKokoski, brojSvinja) {
    console.log(dopuniNulamaOdPocetka(brojKrava, 3), " Krava");
    console.log(dopuniNulamaOdPocetka(brojKokoski, 3), " Kokoški");
    console.log(dopuniNulamaOdPocetka(brojSvinja, 3), " Svinja");
}

prikazStanjaNaFarmi(7, 11, 29);

