console.log('---');
// monolitan pristup
let total = 0, count = 1;
while (count <= 10) {
    total += count;
    count += 1;
}
console.log(total);
// prikazuje 55

console.log('---');
// funkcionalna dekompozicija problema
function opseg(start, end) {
    let niz = [];
    for (let i = start; i <= end; i++)
        niz.push(i);
    return niz;
}

function suma(niz) {
    let suma = 0;
    for (let i = 0; i < niz.length; i++)
        suma += niz[i];
    return suma;
}

console.log(suma(opseg(1, 10)));
// prikazuje 55

