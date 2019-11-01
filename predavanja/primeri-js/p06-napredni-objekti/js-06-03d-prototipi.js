let prototipZeca = {
    tip: "непознат",

    govori: function (tekst) {
        console.log("Овај зец " + this.tip + " каже '" +
            tekst + "'");
    }
};

let zec = Object.create(prototipZeca);
zec.govori("Ко сам ја?");
// >>> Овај зец непознат каже 'Ко сам ја?'

let zecUbica = Object.create(prototipZeca);
zecUbica.tip = "убица";
zecUbica.govori("Готов си!");
// >>> Овај зец убица каже 'Готов си!

let zecDebeljuca = Object.create(prototipZeca);
zecDebeljuca.tip = "дебељуца";
zecDebeljuca.govori("Баш сам гладан!");
// >>> Овај зец дебељуца каже 'Баш сам гладан!'
