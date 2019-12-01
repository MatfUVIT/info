let x = 12;
console.log('x: ', x);
let y = '13';
console.log('y: ', y);

let z = (x < y);
console.log('x < y: ', z);

let u = '';
if (z)
    u = 'x<y';
else
    u = 'x>=y';
console.log('u: ', u);

let u1 = (x < y) ? 'x<y' : 'x>=y';
console.log('u1: ', u1);


console.log('---');
if (x)
    console.log("TACNO");
else
    console.log('NETACNO');

console.log('---');
if (x - y == true)
    console.log("TACNO");
else
    console.log('NETACNO');

console.log('---');
if (y - x == true)
    console.log("TACNO");
else
    console.log('NETACNO');