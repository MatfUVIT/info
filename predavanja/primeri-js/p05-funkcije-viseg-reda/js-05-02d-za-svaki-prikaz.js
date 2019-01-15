var nizBrojeva = [1, 2, 3, 4];

function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

prikazNaKonzolu = function(x){
    console.log(x);
};
zaSvaki(nizBrojeva, prikazNaKonzolu);


prikazNaKonzolu2 = x => console.log(x)
zaSvaki(nizBrojeva, prikazNaKonzolu2);

