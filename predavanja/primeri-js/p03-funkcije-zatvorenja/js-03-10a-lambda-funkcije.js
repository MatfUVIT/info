// пример дефиниције и позива функције - старији начин
let square = function(x){return x*x}
console.log(square(12))

// пример дефиниције и позива функције - новији начин
let square2 = (x)=> {return x*x}
console.log(square2(12))

// пример дефиниције и позива функције - новији начин
let square3 = (x)=> x*x
console.log(square3(12))


let pamet = ()=> console.log("Sto sam pametan")

for(let i=0; i< 5; i++)
    pamet()