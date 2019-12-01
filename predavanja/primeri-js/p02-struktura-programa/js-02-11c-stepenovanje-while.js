// while ciklus za računanje 2^10
const x = 2;
const n = 10;

let res = 1;
let brojac = 0;
while (brojac < n) {
    res *= x;
    brojac++;
}
console.log(res);

