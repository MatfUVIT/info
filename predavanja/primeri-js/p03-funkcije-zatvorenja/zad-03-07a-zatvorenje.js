// primer zatvorenja
function omotajVrednost(n) {
    var lokalnaPromenljiva = n;
    return function() {
        return lokalnaPromenljiva;
    };
}

var omotacZa1 = omotajVrednost(1);
var omotacZa2 = omotajVrednost(2);
console.log(omotacZa1());
console.log(omotacZa2());
