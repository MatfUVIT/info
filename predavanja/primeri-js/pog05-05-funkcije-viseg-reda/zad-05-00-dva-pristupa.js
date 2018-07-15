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

// prikazuje 55
console.log(suma(opseg(1, 10)));

// prikazuje 55
var total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
