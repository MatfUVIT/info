function opseg(start, end) {
    var niz = [];
    for (var i = start; i <= end; i++)
        niz.push(i);
    return niz;
}

function suma(niz) {
    var suma = 0;
    for (var i = 0; i < niz.length; i++)
        suma += niz[i];
    return suma;
}

console.log(suma(opseg(100, 1)));
