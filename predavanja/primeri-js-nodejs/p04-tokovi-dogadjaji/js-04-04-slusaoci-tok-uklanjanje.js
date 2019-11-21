let fs = require('fs');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');

let brojCitanja = 0;
let brojacCitanja = (prispeliPodaci) => {
    brojCitanja = brojCitanja + 1;
    if (brojCitanja == 3)
        tokZaCitanje.removeAllListeners('data');
};
tokZaCitanje.addListener('data',
    brojacCitanja);
tokZaCitanje.addListener('data',
    (prispeliPodaci) => console.log('дужина приспелих података: ' + prispeliPodaci.length));
tokZaCitanje.addListener('end',
    () => console.log(brojCitanja));
