// sve vrednosti imaju osobine, pa i nizovi
let nizBrojeva = [2, 3, 5, 7, 11];

// osobini se moze pristupiti pomoću 
// operatora-tačke
console.log(nizBrojeva.length);

// osobini se moze pristupiti pomoću 
// uglastih zagrada i niske koja predstavlja 
// naziv osobine 
console.log(nizBrojeva["length"]);

console.log(nizBrojeva["le" + 'ng' + "th"]);

// pokusaj pristupa osobini koja ne postoji
console.log(nizBrojeva.lenght);

// pokusaj pristupa osobini koja ne postoji
console.log(nizBrojeva.duzina);


