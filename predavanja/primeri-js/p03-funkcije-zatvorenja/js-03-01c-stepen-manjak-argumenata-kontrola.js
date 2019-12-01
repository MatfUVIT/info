const stepen = function (osnova, izlozilac) {
    if (osnova == undefined)
        osnova = 10;
    if (izlozilac == undefined)
        izlozilac = 2;
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(3, 4));
console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen());