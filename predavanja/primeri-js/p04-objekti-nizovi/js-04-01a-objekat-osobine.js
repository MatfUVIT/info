// jedan jednostavan objekat
let obj = {
    ime: 'Miki',
    length: 4
};

// pristup osobinama objekta pomocu operatora-tacke
console.log(obj.length);
console.log(obj.ime);

// pokusaj pristupa nepostojecoj osobini vrace undefined
console.log(obj.duzina);

console.log(obj['ime']);
console.log(obj[ String.fromCharCode(105) + 'me']);

console.log(obj.prezime);
obj.prezime = 'Maus';
console.log(obj.prezime);
console.log(obj);
let s =obj.toString();
console.log(s);

let obj2 = {
    height: 12,
};
obj2.unutra = obj;
console.log(obj2);


