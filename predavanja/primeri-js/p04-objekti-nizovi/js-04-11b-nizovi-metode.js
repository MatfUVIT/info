let podsetnik = [];

const podsetiMe = function(zadatak) {
    podsetnik.push(zadatak);
}

const staJeSledece = function() {
    return podsetnik.shift();
}

const hitnoMePodseti= function(zadatak) {
    podsetnik.unshift(zadatak);
}


podsetiMe("priprema slajdova za predavanja");
podsetiMe("priprema zadataka");
hitnoMePodseti("odgovoriti na pisma");
podsetiMe("kupovina knjige");

while (podsetnik.length != 0) {
    console.log(staJeSledece());
}

