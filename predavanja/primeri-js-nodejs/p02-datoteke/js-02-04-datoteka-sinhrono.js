let fs = require('fs');

let mojCitac = fs.readFileSync('test.txt', 'utf8');
console.log(mojCitac);

let mojPisac = fs.writeFileSync('test2.txt',
`Ovo je proba!

I treba pokušavati! 

XXX
`
, 'utf8');
