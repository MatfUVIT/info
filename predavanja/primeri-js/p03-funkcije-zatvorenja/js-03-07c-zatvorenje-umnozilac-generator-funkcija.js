// primer zatvorenja
const umnozilac = function (faktor) {
    return function (broj) {
        return broj * faktor;
    };
}

const dupliraj = umnozilac(2);
console.log(dupliraj(4.5));
console.log(dupliraj(5.5));
const utrostruci = umnozilac(3);
console.log(utrostruci(4.5));
console.log(utrostruci(5.5));
const pomnoziSa2_25 = umnozilac(2.25);
console.log(pomnoziSa2_25(4.5));
console.log(pomnoziSa2_25(5.5));
