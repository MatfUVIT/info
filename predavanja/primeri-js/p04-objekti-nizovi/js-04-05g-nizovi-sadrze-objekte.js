// objekat koji predstavlja dnevnik
let dnevnik = [
  {
    preobrazajVeverica: true,
    aktivnosti: ["rad", "drvo", "pica", "trčanje", "televizija"]
  },
  {
    preobrazajVeverica: false,
    aktivnosti: ["hleb", "puding", "pranje zuba", "vikend", "drvo"]
  },
  {
    "preobrazajVeverica": false,
    "aktivnosti": ["lazanja", "naćosi", "pranje zuba", "rad"]
  }];

console.log("=== Prvi dan ===")
let prvi = dnevnik[0];
console.log(prvi.preobrazajVeverica);
console.log(prvi.aktivnosti);

console.log("=== Poslednji dan ===")
poslednji = dnevnik[dnevnik.length-1];
console.log(poslednji.preobrazajVeverica);
console.log(poslednji.aktivnosti);

console.log("=== Ceo dnevnik ===")
for (let i =0; i<dnevnik.length; i++) {
  console.log(dnevnik[i].preobrazajVeverica);
  console.log(dnevnik[i].aktivnosti);
}

console.log("=== Ceo dnevnik ===")
for (let i in dnevnik) {
  console.log(dnevnik[i].preobrazajVeverica);
  console.log(dnevnik[i].aktivnosti);
}


console.log("=== Ceo dnevnik ===")
for (let x of dnevnik) {
  console.log(x.preobrazajVeverica);
  console.log(x.aktivnosti);
}