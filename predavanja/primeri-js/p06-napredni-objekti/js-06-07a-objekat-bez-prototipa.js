let mapa = Object.create(null);

const smesti = function (kljuc, vrednost) {
  mapa[kljuc] = vrednost;
}

smesti("olovka", 0.069);
smesti("sveska", -0.081);

Object.prototype.nesto = "bez veze!";

console.log("nesto" in mapa);
//>>> false

console.log("toString" in mapa);
//>>> false

console.log("sveska" in mapa);
//>>> true

for (let kljuc in mapa)
  console.log(kljuc);
//>>> olovka
//>>> sveska

delete Object.prototype.nesto;