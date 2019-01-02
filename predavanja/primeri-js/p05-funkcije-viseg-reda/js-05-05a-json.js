/*
Kreira nisku pomoću JSON-a 
*/

var person = {
    name: "Miki Maus", 
    born: 1980, 
    father:"Volt Dizni"
};

var niska = JSON.stringify(person);

console.log(niska);
