let izgovara = function (tekst) {
    console.log(`${this.tip} зец каже '${tekst}'`);
}
let beliZec = { tip: "бели", govor: izgovara };
let debeliZec = { tip: "дебели", govor: izgovara };

beliZec.govor("Касним, касним, краљица ће бити љута!");
debeliZec.govor("Ал'сам гладан.");