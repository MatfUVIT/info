let mapa = {};

const smesti = function (kljuc, vrednost) {
  mapa[kljuc] = vrednost;
}

Object.prototype.nesto = "bez veze!";

smesti("olovka", 0.069);
smesti("sveska", -0.081);

console.log("nesto" in mapa);
//>>> true
console.log(mapa.hasOwnProperty("nesto"));
//>>> false

console.log("toString" in mapa);
//>>> true
console.log(mapa.hasOwnProperty("toString"));
//>>> false

for (let kljuc in mapa)
  if (mapa.hasOwnProperty(kljuc))
    console.log(kljuc);
//>>> olovka
//>>> sveska

delete Object.prototype.nesto;
