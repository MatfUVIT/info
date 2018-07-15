function opseg(start, end, step) {
    if (step == undefined)
        step = 1;
    if (step == 0)
        return undefined;
    if (step > 0) {
        if (start > end)
            return [];
        var niz = [];
        for (var i = start; i <= end; i += step)
            niz.push(i);
        return niz;
    }
    if (step < 0) {
        if (start < end)
            return [];
        var niz = [];
        for (var i = start; i >= end; i += step)
            niz.push(i);
        return niz;
    }
}

function suma(niz) {
    var suma = 0;
    for (var i = 0; i < niz.length; i++)
        suma += niz[i];
    return suma;
}

console.log(opseg(1, 10, 2));
console.log(opseg(1, 10, 3));
console.log(opseg(1, 10));
console.log(opseg(1, 10, -1));
console.log(opseg(20, 10, -2));
console.log(opseg(20, 10, -3));
console.log(opseg(20, 10, 1));
console.log(opseg(7, 10, 0));

