// umetnuti opsezi
const pejsaz = function() {
    let rezultat = "";
    const ravnica = function(velicina) {
        for (let br = 0; br < velicina; br++)
            rezultat += "_";
    };
    const planina = function(velicina) {
        rezultat += "/";
        for (let br = 0; br < velicina; br++)
            rezultat += "'";
        rezultat += "\\";
    };
    ravnica(1);
    planina(3);
    planina(2);
    ravnica(4);
    planina(2);
    return rezultat;
};
console.log(pejsaz());
