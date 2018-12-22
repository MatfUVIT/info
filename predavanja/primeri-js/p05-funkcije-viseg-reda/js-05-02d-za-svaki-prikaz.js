var nizBrojeva = [1, 2, 3, 4];

// treći, najopštiji, način, pomoću vrednosti funkcije
function zaSvaki(niz, akcija) {
    for (var i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

prikazNaKonzolu = function(x){
    console.log(x);
};

zaSvaki(nizBrojeva, prikazNaKonzolu);


prikazNaKonzolu2 = (x) =>{
    console.log(x)}
    zaSvaki(nizBrojeva, prikazNaKonzolu2);
