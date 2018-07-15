// primer definicje i poziva funkcije
// vidimo da su funkcije istovremeno i vrednosti
var stepen = function(osnova, izlozilac) {
    var ret = 1;
    for (var i = 0; i < izlozilac; i++)
        ret *= osnova;
    return ret;
};

console.log(stepen(2, 10));
