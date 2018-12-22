var nizBrojeva = [1, 2, 3, "mika", "zika"];

// treći, najopštiji, način, uz umetanje funkcije 
function zaSvaki(niz, akcija) {
    for (var i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizBrojeva, function(x) {
    console.log(x)
});

zaSvaki(nizBrojeva, (x)=>{console.log(x)});