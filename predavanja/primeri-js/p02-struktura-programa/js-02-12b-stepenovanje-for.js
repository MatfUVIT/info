// for ciklus za računanje 2^10
const x = 2;
const n = 10;

let res = 1;
for (let brojac = 0; brojac < n; brojac++) 
    res *= x;
console.log(res);