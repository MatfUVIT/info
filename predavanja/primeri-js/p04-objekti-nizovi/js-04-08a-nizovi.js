
let nizBrojeva = [2, 3, 5, 7, 11];

console.log(nizBrojeva[1]);
console.log(nizBrojeva[1 - 1]);

console.log(nizBrojeva[17 - 1]);
console.log(nizBrojeva[- 1]);

console.log(nizBrojeva[1.7]);
console.log(nizBrojeva['miki maus']);

nizBrojeva[7] = 45;
console.log(nizBrojeva[7]);

console.log('---');
for (let i = 0; i < nizBrojeva.length; i++)
    console.log(nizBrojeva[i]);

console.log('---');
for (let i in nizBrojeva)
    console.log(nizBrojeva[i]);

console.log('---');
for (let x of nizBrojeva)
    console.log(x);

 nizBrojeva[8.5] = 45;
 console.log(nizBrojeva[8.5]);

 console.log('---');
 console.log('---');
for (let i = 0; i < nizBrojeva.length; i++)
    console.log(nizBrojeva[i]);

console.log('---');
for (let i in nizBrojeva)
    console.log(nizBrojeva[i]);

console.log('---');
for (let x of nizBrojeva)
    console.log(x);
