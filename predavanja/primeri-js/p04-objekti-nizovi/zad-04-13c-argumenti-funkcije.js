function sumaBrojeva() {
    var ret = 0.0;
    for (i = 0; i < arguments.length; i++) {
        var elem = Number(arguments[i]);
        if (!isNaN(elem))
            ret += elem;
    }
    return ret;
}

console.log(sumaBrojeva(1, 2, 3));
console.log(sumaBrojeva(1, 2, 3, [1,2]));
console.log(sumaBrojeva("Miki", "1", 2, "100.5", 3));
