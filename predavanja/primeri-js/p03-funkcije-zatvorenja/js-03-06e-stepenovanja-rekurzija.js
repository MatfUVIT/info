const stepen1 = function (x = 10, n = 3) {
    let rezultat = 1;
    for (let i = 0; i < n; i++)
        rezultat *= x;
    return rezultat;
};

console.log('---');
console.log(stepen1(2.5, 4));
console.log(stepen1(3, 3));
console.log(stepen1(7));

const stepen2 = function (x = 10, n = 3) {
    if (n == 0)
        return 1;
    if (n == 1)
        return x;
    // ovde n ne moze biti 1
    let p = stepen2(x, n-1);
    return x*p;
};

console.log('---');
console.log(stepen2(2.5, 4));
console.log(stepen2(3, 3));
console.log(stepen2(7));

const stepen3 = function (x = 10, n = 3) {
    if (n == 0)
        return 1;
    return x*stepen3(x, n-1);
};
