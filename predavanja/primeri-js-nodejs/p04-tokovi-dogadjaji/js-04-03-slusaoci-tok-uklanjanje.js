let fs = require('fs');

let tokZaCitanje = fs.createReadStream('lorem.txt');
tokZaCitanje.setEncoding('utf8');

let brojObracanja = 0;
let brojacObracanja = (prispeliPodaci) => {
    brojObracanja = brojObracanja + 1;
    if (brojObracanja == 3)
        tokZaCitanje.removeListener('data', brojacObracanja);
};
tokZaCitanje.addListener('data',
    brojacObracanja);
tokZaCitanje.addListener('data',
    (prispeliPodaci) => console.log('дужина приспелих података: ' + prispeliPodaci.length));
tokZaCitanje.addListener('end',
    () => console.log(brojObracanja));
