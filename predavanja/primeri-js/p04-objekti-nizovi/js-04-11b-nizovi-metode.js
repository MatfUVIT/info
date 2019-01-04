var podsetnik = [];

function podsetiMe(zadatak) {
    podsetnik.push(zadatak);
}

function staJeSledece() {
    return podsetnik.shift();
}

function hitnoMePodseti(zadatak) {
    podsetnik.unshift(zadatak);
}


podsetiMe("priprema slajdova za predavanja");
podsetiMe("priprema zadataka");
hitnoMePodseti("odgovoriti na pisma");
podsetiMe("kupovina knjige");

while (podsetnik.length != 0) {
    console.log(staJeSledece());
}

