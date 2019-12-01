let nizBrojeva = ["Paja Patak", 1, 2, 3, "Miki Maus"];

// opštiji, način, pomoću  povratnog poziva
function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizBrojeva, console.log);

