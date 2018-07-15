// parametri i opsezi
var x = "van";
var f1 = function() {
    var x = "unutar f1";
    // prikazaće: unutar f1
    console.log(x);
};
f1();
// prikazaće: van
console.log(x);

var f2 = function() {
    x = "unutar f2";
    // prikazaće: unutar f2
    console.log(x);
};
f2();
// prikazaće: unutar f2
console.log(x);
