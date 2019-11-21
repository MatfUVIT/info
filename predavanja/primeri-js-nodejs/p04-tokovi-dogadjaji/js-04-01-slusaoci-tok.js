let fs = require('fs');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');

let brojac = 0;
tokZaCitanje.addListener('data', brojiCitanja);
tokZaCitanje.addListener('data', prikazujeCitanja);

function brojiCitanja(prispeliPodaci) {
    brojac = brojac + 1;
    console.log("Citanje broj: " + brojac);
}

function prikazujeCitanja(prispeliPodaci) {
    console.log('Duzina prispelih podataka: ' + prispeliPodaci.length);
}

tokZaCitanje.addListener('end',
    function () {
        console.log("---\nUkupno citanja: " + brojac);
    });

