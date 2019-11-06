class Zec {

    constructor(tip = "непознат", boja = "непознатa") {

        this.tip = tip;
        this.boja = boja;
    }

    govori(tekst) {
        console.log("Овај зец " + this.tip + " боје " + this.boja
            + " каже '" + tekst + "'" + "\n");
    }

    predstaviSe() {
        console.log("Зец: " + this.tip + " боја: " + this.boja + "." + "'\n");
    }
}

let zec = new Zec();
zec.predstaviSe();
zec.govori("Ko сам ја?");

let duskoDugousko = new Zec("паметан", "сив");
duskoDugousko.predstaviSe();
duskoDugousko.govori("Који ти је враг, шефе?");

