let fs = require('fs');

let sadrzina = fs.readFileSync('test.txt', 'utf8');
console.log(sadrzina);

let mojPisac = fs.writeFileSync('test2.txt',
`Ovo je proba!

I treba pokušavati! 
`
, 'utf8');
