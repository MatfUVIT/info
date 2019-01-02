// beskonačni for ciklus sa iskakanjem za računanje 3^5
let res = 3;
for (let brojac = 1; true; brojac = brojac + 1) {
    if (brojac % 5 == 0)
        break;
    res = res * 3;
}
console.log(res);