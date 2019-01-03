let fs = require('fs')

let myRead = fs.readFileSync('test.txt', 'utf8');
console.log(myRead);

let myWrite = fs.writeFileSync('test2.txt', 
`Ovo je proba!

I treba pokušavati! 
`
, 'utf8');
console.log(myWrite);