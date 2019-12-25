"use strict";

let slucajanBrojIliMiki = function () {
  const slucajan = Math.random();
  if (slucajan < 0.4)
    return Math.floor(slucajan * 10);
  if (slucajan < 0.8)
    return Math.floor(-slucajan * 10);
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
