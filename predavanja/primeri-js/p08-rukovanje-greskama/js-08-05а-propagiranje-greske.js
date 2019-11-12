"use strict";

function izvor(){
  return 10 * Math.random() -5;
}

function obradiIzvor(question) {
  var result = Number(prompt(question, ""));
  if (isNaN(result))
    return null;
  else
    return result;
}

console.log(promptNumber("How many trees do you see?"));
