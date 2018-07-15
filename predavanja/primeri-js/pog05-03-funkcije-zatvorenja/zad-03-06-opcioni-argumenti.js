// primer poziva sa izostavljenim argumentima
function stepen(osnova, izlozilac) {
    if (izlozilac == undefined)
        izlozilac = 2;
    var ret = 1;
    for (var i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(4, 3));
console.log(stepen(4));
console.log(stepen(1.25));