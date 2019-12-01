const uvecajBrojac = () => {
    let brojac = 0;
    return () => brojac++;
}

const izbroj1 = uvecajBrojac();

const izbroj2 = uvecajBrojac();

console.log(1, izbroj1());
console.log(1, izbroj1());
console.log(2, izbroj2());
console.log(1, izbroj1());
console.log(1, izbroj1());
console.log(2, izbroj2());
console.log(2, izbroj2());
console.log(2, izbroj2());
console.log(2, izbroj2());
