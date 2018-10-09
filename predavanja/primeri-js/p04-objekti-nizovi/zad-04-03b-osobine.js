var nizBrojeva = [2, 3, 5, 7, 11, 13, 17];
// osobini se moze pristupiti pomoću 
// operatora-tačke
console.log(nizBrojeva.length);

// osobini se moze pristupiti pomoću 
// uglastih zagrada i niske koja predstavlja 
// naziv osobine 
console.log(nizBrojeva["length"]);

console.log(nizBrojeva["le" + 'ng' + "th"]);


// ako ne postoji osobina sa prosleđenim 
// imenov, vraće se odgovarajući odgovor
console.log(nizBrojeva["dužina"]);
