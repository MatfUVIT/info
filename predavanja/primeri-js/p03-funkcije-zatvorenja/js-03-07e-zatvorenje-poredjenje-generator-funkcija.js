function veciOd(n) {
    return function(m) { 
        return m > n; };
}
var veciOd10 = veciOd(10);

// Prikazuje true
console.log(veciOd10(11));

// Prikazuje false
console.log(veciOd10(9.5));
