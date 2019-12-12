const bucna2 = function (f) {
    return function () {
        console.log( `poziv '${f.name}' sa argumentima `, arguments);
        let rezultat = f.apply(null, arguments);
        console.log( `rezultat koji vrace '${f.name}' je `, rezultat);
        return rezultat;
    };
}

console.log(bucna2(Boolean)(0));
console.log(bucna2(Math.sin)(Math.PI / 2));
console.log(bucna2(Math.max)(0, -3, 2, 3));
