function bucna2(f) {
    return function() {
        console.log("poziv sa argumentima ", arguments);
        return f.apply(null, arguments);
    };
}

console.log(bucna2(Boolean)(0));
console.log(bucna2(Math.max)(Math.PI / 2, 2, 3));
