// primer definicje i poziva funkcije
// vidimo da su funkcije istovremeno i vrednosti
var stepen = function(osnova, izlozilac) {
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(2, 10));

console.log(stepen(10, 2));

console.log(stepen(10));

console.log(stepen());