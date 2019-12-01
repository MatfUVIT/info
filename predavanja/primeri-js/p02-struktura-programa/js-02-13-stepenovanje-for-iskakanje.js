// beskonačni for ciklus sa iskakanjem za računanje x^n
const x = 3;
const n = 5;

let res = x;
for (let brojac = 1; true; brojac++) {
    if (brojac % n == 0)
        break;
    res *= x;
}
console.log(res);