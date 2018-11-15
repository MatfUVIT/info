// primer zatvorenja
function umnozilac(faktor) {
    return function(broj) { return broj * faktor; };
}

var dupliraj = umnozilac(2);
console.log(dupliraj(4.5));
console.log(dupliraj(5.5));
var utrostruci = umnozilac(3);
console.log(utrostruci(4.5));
console.log(utrostruci(5.5));
var pomnoziSa2_25 = umnozilac(2.25);
console.log(pomnoziSa2_25(4.5));
console.log(pomnoziSa2_25(5.5));
