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
  let rezultat = Math.sqrt(broj);
  return { "broj": broj, "rezultat": rezultat };
}

console.log(kvadratniKoren(slucajanBrojIliMiki));
