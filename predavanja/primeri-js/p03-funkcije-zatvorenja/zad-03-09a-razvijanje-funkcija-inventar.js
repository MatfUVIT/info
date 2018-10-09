/* 
Monolitni pristup u razvijanju funkcija

Treba za dati broj kokšaka i krava koje su trenutno na farmi 
prilkazati broj kokošaka i krava na farmi, tako da je broj od tri
cifre, a da iza broja sledi reč Kokoški ili Krava
*/

function prikazStanjaNaFarmi(brojKrava, brojKokoski) {
    var linijaZaKrave = String(brojKrava);
    while (linijaZaKrave.length < 3)
        linijaZaKrave = "0" + linijaZaKrave;
    console.log(linijaZaKrave + " Krava");
    var linijaZaKokoske = String(brojKokoski);
    while (linijaZaKokoske.length < 3)
        linijaZaKokoske = "0" + linijaZaKokoske;
    console.log(linijaZaKokoske + " Kokoški");
}

prikazStanjaNaFarmi(7, 11);

