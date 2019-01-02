// primer poziva sa izostavljenim argumentima
let stepen = (osnova, izlozilac) => {
    if (izlozilac == undefined)
        izlozilac = 2;
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen(1.25));

stepen = (osnova, izlozilac = 2) => {
    let ret = 1;
    for (let i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen(1.25));