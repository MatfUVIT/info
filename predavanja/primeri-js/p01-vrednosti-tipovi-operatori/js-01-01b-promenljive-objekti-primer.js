console.log("---");
let x = { poruka: " Trla baba lan, da joj prođe dan ", ocena: 10 };
console.log(x);

x.poruka = ' Trla baba lan, \n\n da joj prođe dan !!!';
console.log(x);

console.log("---");
let y = [2,3];
console.log(y);
y[0] = x.poruka;
console.log(y);

