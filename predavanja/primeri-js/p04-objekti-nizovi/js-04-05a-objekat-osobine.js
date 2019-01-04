// jedan jednostavan objekat
let obj = {
    ime: "Miki",
    length: 4
};

// pristup osobinama objekta pomocu operatora-tacke
console.log(obj.length);
console.log(obj.ime);

// pokusaj pristupa nepostojecoj osobini vrace undefined
console.log(obj.duzina);

console.log(obj["ime"]);
console.log(obj[ String.fromCharCode(105) + "me"]);

// vrednosti null i undefined ne poseduju osobine
// pokusaj pristupa ma kojoj njihovoj osobini dovodi do greske u izvrsavanju
console.log(null.length);
console.log(null.duzina);
console.log(undefined.length);
console.log(undefined.duzina);
