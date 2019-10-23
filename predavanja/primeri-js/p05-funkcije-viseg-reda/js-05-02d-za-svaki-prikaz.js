let nizBrojeva = [1, 2, 3, 4, "mika", "zika"];

function zaSvaki(niz, akcija) {
    for (let x of niz)
        akcija(x);
}

prikazNaKonzolu = function (x) {
    console.log(x);
};
zaSvaki(nizBrojeva, prikazNaKonzolu);
console.log("---");

prikazNaKonzolu2 = (x) => console.log(x)
zaSvaki(nizBrojeva, prikazNaKonzolu2);
console.log("---");

zaSvaki(nizBrojeva, function (x) {
    console.log(x)
});
console.log("---");

zaSvaki(nizBrojeva, (x) => console.log(x));
