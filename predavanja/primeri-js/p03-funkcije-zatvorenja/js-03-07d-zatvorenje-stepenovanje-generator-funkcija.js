// const stepenovanje1 = function (izlozilac = 2) {
//     return function (osnova = 10) {
//         let ret = 1;
//         for (let i = 0; i < izlozilac; i++)
//             ret *= osnova;
//         return ret;
//     };
// }
// const kvadriranje1 = stepenovanje1(2);
// console.log(kvadriranje1(4.5));
// console.log(kvadriranje1(10));
// const naKub1 = stepenovanje1(3);
// console.log(naKub1(4));
// const naDeseti1 = stepenovanje1(10);
// console.log(naDeseti1(2));

console.log("---");
const stepenovanje = (izlozilac = 2) =>
    osnova => {
        let ret = 1;
        for (let i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;
    }
const kvadriranje = stepenovanje(2);
console.log(kvadriranje(4.5));
console.log(kvadriranje(10));
const naKub = stepenovanje(3);
console.log(naKub(4));
const naDeseti = stepenovanje(10);
console.log(naDeseti(2));