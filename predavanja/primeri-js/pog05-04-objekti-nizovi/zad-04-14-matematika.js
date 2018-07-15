
console.log ( Math.random () ) ;
console.log ( Math.random () ) ;
console.log ( Math.random () ) ;
console.log ( Math.random () ) ;
console.log ( Math.random () ) ;

function slucajnaTackaNaKrugu( poluprecnik ) {
var ugao = Math.random() * 2 * Math.PI ;
return { 
    x : poluprecnik * Math.cos ( ugao ) ,
    y : poluprecnik * Math.sin ( ugao ) };
}

console.log ( slucajnaTackaNaKrugu(2) ) ;

console.log ( Math.floor( Math.random() * 10) ) ;
console.log ( Math.floor( Math.random() * 10) ) ;
console.log ( Math.floor( Math.random() * 10) ) ;
console.log ( Math.floor( Math.random() * 10) ) ;
console.log ( Math.floor( Math.random() * 10) ) ;
