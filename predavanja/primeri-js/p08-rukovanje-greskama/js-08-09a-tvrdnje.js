"use strict";

function AssertionFailed(message) {
  this.message = message;
}
AssertionFailed.prototype = Object.create(Error.prototype);

function assert(test, message) {
  if (!test)
    throw new AssertionFailed(message);
}

function lastElement(array) {
  assert(array.length > 0, "niz ne sme biti prazan");
  return array[array.length - 1];
}

function element(array, index) {
  assert(array.length > 0, "niz ne sme biti prazan");
  assert( typeof(index) == Number, "indeks niza mora biti broj" )
  assert(index >= 0, "indeks niza ne sme biti negativan");
  assert(index < array.length, "indeks niza mora biti manji od broja clanova");
  return array[index];
}

let niz1 = [];
let niz2 = ["Paja", "Miki", "Mini", "Silja"];

console.log(lastElement(niz2));
//console.log(lastElement(niz1));

//console.log(element(niz1, 1));
//console.log(element(niz1, 0));
console.log(element(niz2, 2));
//console.log(element(niz2, "Miki"));
//console.log(element(niz2, "2"));
//console.log(element(niz2, -2));
//console.log(element(niz2, 4));