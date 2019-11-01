function Zec(tip = "непознат") {
    this.tip = tip;
}


Zec.prototype.govori = function (tekst) {
    console.log("Овај зец " + this.tip + " каже '" +
        tekst + "'");
};

let zec = new Zec();
zec.govori("Ко сам ја?");
// >>> Овај зец непознат каже 'Ко сам ја?'

let zecUbica = new Zec("убица");
zecUbica.govori("Готов си!");
// >>> Овај зец убица каже 'Готов си!

Zec.prototype.predstaviSe = function () {
    console.log("Зец: " + this.tip + ".");
}

let zecDebeljuca = new Zec("дебељуца");
zecDebeljuca.predstaviSe();
// >>> Зец: дебељуца
zecDebeljuca.govori("Баш сам гладан!");
// >>> Овај зец дебељуца каже 'Баш сам гладан!'

zec.predstaviSe = () => { console.log("------") };
zecUbica.predstaviSe();
// >>> Зец: убица
zec.predstaviSe();
// >>> ------
