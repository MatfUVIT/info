function Zec(tip = "непознат") {
    this.tip = tip;

    this.govori = function (tekst) {
        console.log("Овај зец " + this.tip + " каже '" +
            tekst + "'");
    }
}

let zec = new Zec();
zec.govori("Ко сам ја?");
// >>> Овај зец непознат каже 'Ко сам ја?'

let zecUbica = new Zec("убица");
zecUbica.govori("Готов си!");
// >>> Овај зец убица каже 'Готов си!

let zecDebeljuca = new Zec("дебељуца");
zecDebeljuca.govori("Баш сам гладан!");
// >>> Овај зец дебељуца каже 'Баш сам гладан!'