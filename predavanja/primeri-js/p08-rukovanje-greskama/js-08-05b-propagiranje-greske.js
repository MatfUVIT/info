"use strict";

let slucajanBrojIliMiki = function () {
  if (Math.random() < 0.4)
    return Math.floor(Math.random() * 10);
  if (Math.random() < 0.8)
    return Math.floor(-Math.random() * 10);
  return "Miki Maus";
}

function kvadratniKoren(izvorPodataka) {
  let broj = Number(izvorPodataka());
  if (isNaN(broj)) {
    let rezultat = "nemoguce korenovati nesto sto nije broj";
    return { "broj": broj, "rezultat": rezultat };
  }
  if (broj < 0) {
    let rezultat = "nemoguce korenovati negativan broj";
    return { "broj": broj, "rezultat": rezultat };
  }
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
