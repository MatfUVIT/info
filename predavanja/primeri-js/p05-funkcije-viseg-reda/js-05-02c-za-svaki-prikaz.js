var nizBrojeva = ["Paja Patak", 1, 2, 3, "Miki Maus"];

// treći, najopštiji, način, pomoću alert
function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizBrojeva, alert);

