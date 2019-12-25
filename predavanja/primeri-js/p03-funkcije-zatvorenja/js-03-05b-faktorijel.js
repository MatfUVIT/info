const broj = 5;

const faktFor = function (n) {
    let rezultat = 1;
    for (let i = 1; i <= n; i++)
        rezultat *= i;
    return rezultat;
};

console.log(faktFor(broj));

const faktRek = function (n) {
    if (n == 0)
        return 1;
    let x = faktRek(n - 1);
    return x * n;
}
console.log(faktRek(broj));

const faktRek2 = function (n) {
    if (n == 0)
        return 1;
    return faktRek2(n - 1) * n;
}
console.log(faktRek2(broj));

const faktRek3 = n => {
    if (n == 0)
        return 1;
    return faktRek3(n - 1) * n;
}
console.log(faktRek3(broj));

const faktRek4 = n => n == 0 ? 1: faktRek4(n - 1) * n;
console.log(faktRek4(broj));
