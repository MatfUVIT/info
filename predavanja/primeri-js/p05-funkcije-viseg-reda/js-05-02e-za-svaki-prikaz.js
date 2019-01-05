var nizBrojeva = [1, 2, 3, "mika", "zika"];

function zaSvaki(niz, akcija) {
    for (let i = 0; i < niz.length; i++)
        akcija(niz[i]);
}

zaSvaki(nizBrojeva, function(x) {
    console.log(x)
});

zaSvaki(nizBrojeva, (x)=>console.log(x));

// resenje koje se oslanja na postojeci metod kod nizova
nizBrojeva.forEach( (x) => console.log(x) )
