// umetnuti opsezi
var pejsaz = function() {
    let ret = "";
    let ravnica = function(velicina) {
        for (var br = 0; br < velicina; br++)
            ret += "_";
    };
    let planina = function(velicina) {
        ret += "/";
        for (var br = 0; br < velicina; br++)
            ret += "'";
        ret += "\\";
    };
    ravnica(1);
    planina(3);
    planina(2);
    ravnica(4);
    planina(2);
    return ret;
};
console.log(pejsaz());
