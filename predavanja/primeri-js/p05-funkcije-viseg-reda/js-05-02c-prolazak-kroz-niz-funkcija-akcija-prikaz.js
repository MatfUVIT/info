let nizSvacega = ["Paja Patak", 1, 2, 3, "Miki Maus"];

// opštiji, način, pomoću  povratnog poziva
const zaSvaki = function (niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizBrojeva, console.log);

