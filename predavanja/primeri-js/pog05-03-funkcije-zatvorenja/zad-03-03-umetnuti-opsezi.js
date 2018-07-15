// umetnuti opsezi
var pejsaz = function() {
    var ret = "";
    var ravnica = function(velicina) {
        for (var br = 0; br < velicina; br++)
            ret += " _ ";
    };
    var planina = function(velicina) {
        ret += "/";
        for (var br = 0; br < velicina; br++)
            ret += " ' ";
        ret += "\\";
    };
    ravnica(3);
    planina(4);
    ravnica(6);
    planina(1);
    ravnica(1);
    return ret;
};
console.log(pejsaz());
