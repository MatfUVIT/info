// primer zatvorenja
stepenovanje = (izlozilac) => {
    return (osnova) => {
        var ret = 1;
        for (var i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;
    };
}

var kvadriranje = stepenovanje(2);
console.log(kvadriranje(4.5));
var naKub = stepenovanje(3);
console.log(naKub(4));
var naDeseti = stepenovanje(10);
console.log(naDeseti(2));
