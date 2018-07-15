/* automatska konveryija tipova pri izvršenju aritmetičkih operacija */
// prikazaće 0
console.log(8 * null);

// prikazaće 4
console.log("5" - 1);

// prikazaće 51
console.log("5" + 1);

// prikazaće NaN
console.log("pet" * 2);

/* automatska konverzija tipova pri izvršenju operacija poređenja*/
// prikazaće true
console.log(false == 0);

/* poređenje jednakosti za vrednosti null i/ili undefined se realizuje na pomalo specifičan način  */
// prikazaće true
console.log(null == undefined);

// prikazaće false
console.log(null == 0);

/* logički operatori se "skraćeno" izvršavaju */
// prikazaće Karlo
console.log(undefined || "Karlo");

// prikazaće Karlo
console.log("Karlo" || "Korisnik");


console.log( 2!= 1 && 4!=3 && 0==4 && 2!=3 )