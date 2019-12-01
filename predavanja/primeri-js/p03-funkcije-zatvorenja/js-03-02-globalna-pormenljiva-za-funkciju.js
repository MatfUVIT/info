console.log('---');
// parametri i opsezi
let x = 'van';
const f1 = function() {
    let x = 'unutar f1';
    console.log(x);
    // prikazaće: unutar f1
};
f1();
console.log(x);
// prikazaće: van

console.log('---');
const f2 = function() {
    x = 'unutar f2';
    console.log(x);
    // prikazaće: unutar f2
};
f2();
console.log(x);
// prikazaće: unutar f2
