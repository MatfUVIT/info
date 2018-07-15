// primer steka poziva
function kokoska() {
    return jaje();
};

function jaje() {
    return kokoska();
}

console.log("Starija je ", kokoska());