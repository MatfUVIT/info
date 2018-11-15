// primer zatvorenja
function naStepen(izlozilac) {
    return function(osnova) {
        var ret = 1;
        for (var i = 0; i < izlozilac; i++)
            ret *= osnova;
        return ret;
    };
}

var kvadriraj = naStepen(2);
console.log(kvadriraj(4.5));
var naKub = naStepen(3);
console.log(naKub(4));
var naDeseti = naStepen(10);
console.log(naDeseti(2));
