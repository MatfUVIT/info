const dFaktFor = function (n) {
    let rezultat = 1;
    for (let i = n; i >= 1; i-=2)
        rezultat *= i;
    return rezultat;
};

let broj = 8;
console.log(dFaktFor(broj));
broj = 7;
console.log(dFaktFor(broj));

const dFaktRek = function (n){
    if( n<= 1)
        return 1;
    return n * dFaktRek(n-2);
}

broj = 8;
console.log(dFaktRek(broj));
broj = 7;
console.log(dFaktRek(broj));
