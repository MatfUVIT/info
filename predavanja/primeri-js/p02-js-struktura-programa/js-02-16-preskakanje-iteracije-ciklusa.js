// beskonačni for ciklus sa iskakanjem za računanje 3^5
let sum = 0;
for (let i = 0; i<5; i++) {
    

    if (brojac % 5 == 0)
        break;
    res = res * 3;
}
console.log(res);