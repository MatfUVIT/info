prom = 10;

// prikazuje true
// kad se izvrsava u node.js 
console.log ("prom" in global ) ;

// prikazuje true
// kad se izvrsava u pregledacu
//console.log ("prom" in window ) ;


// prikazuje 10
// kad se izvrsava u node.js 
console.log ( global.prom ) ;

// prikazuje 10
// kad se izvrsava u pregledacu
//console.log ( window.prom ) ; 
