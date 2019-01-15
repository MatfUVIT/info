
let niz = [1, 3, "Mika", "pera", false];

console.log("---");
for (let i = 0; i < niz.length; i++)
   console.log(niz[i]);

console.log("---");
for (let i in niz)
   console.log(niz[i]);

console.log("---");
for (let x of niz)
   console.log(x);