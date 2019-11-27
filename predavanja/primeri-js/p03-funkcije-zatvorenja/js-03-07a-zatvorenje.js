function uvecajBrojac() {
    let brojac = 0;
    return function () {
        return brojac++;
    };
}

const izbroj = uvecajBrojac();

console.log(izbroj());
console.log(izbroj());
console.log(izbroj());

console.log("---");
let uvecaj = () => {
    let brojac = 0;
    return () => brojac++;
}

const izbroj2 = uvecaj();

console.log(izbroj2());
console.log(izbroj2());
console.log(izbroj2());