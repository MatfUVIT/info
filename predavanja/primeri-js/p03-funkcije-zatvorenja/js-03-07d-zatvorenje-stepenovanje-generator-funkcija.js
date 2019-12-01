const stepenovanje = function (izlozilac = 2) {
    return function (osnova = 10) {
        let ret = 1;
        for (let i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;
    };
}
const kvadriranje = stepenovanje(2);
console.log(kvadriranje(4.5));
console.log(kvadriranje(10));
const naKub = stepenovanje(3);
console.log(naKub(4));
const naDeseti = stepenovanje(10);
console.log(naDeseti(2));

console.log("---");
const stepenovanje2 = (izlozilac = 2) =>
    osnova => {
        let ret = 1;
        for (let i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;

    }
const kvadriranje2 = stepenovanje2(2);
console.log(kvadriranje2(4.5));
console.log(kvadriranje2(10));
const naKub2 = stepenovanje2(3);
console.log(naKub2(4));
const naDeseti2 = stepenovanje2(10);
console.log(naDeseti2(2));