var nizBrojeva = [1, 2, 3];

// treći, najopštiji, način, pomoću alert
function zaSvaki(niz, akcija) {
    for (var i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizBrojeva, alert);

