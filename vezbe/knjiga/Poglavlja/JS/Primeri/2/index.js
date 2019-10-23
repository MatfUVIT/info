(function(){

// Kljucnim recima var i let definisemo promenljive.
// Postoje suptilne razlike izmedju opsega vazenja promenljivih
// definisanih ovim kljucnim recima.
// Mi cemo preferirati "let" u nastavku kursa.
var x = 1;
let y = 'Niska';
console.log('x =', x, 'y =', y);

// Tip promenljive se moze odrediti operatorom typeof.
// Njegova vrednost je niska sa nazivom tipa.
console.log('Tip od x:', typeof x);
console.log('Tip od y:', typeof y);

// Promenljive su dinamicki-tipizirane,
// sto znaci da im mozemo dinamicki menjati tipove.
y = 2;
console.log('y =', y, '\nTip od y:', typeof y);
y = false;
console.log('y =', y, '\nTip od y:', typeof y);

})();