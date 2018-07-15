/*
Kreira objekat iz niske pomoću JSON-a 
*/
var opis = '{"name":"Miki Maus","born":1980}';

var person = JSON.parse(opis);

console.log(person);
