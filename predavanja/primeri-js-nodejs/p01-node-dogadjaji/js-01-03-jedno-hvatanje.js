const KlasaZaEmitovanjeDogadjaja = require('events');

class EmitorDogadjaja extends KlasaZaEmitovanjeDogadjaja {}

const emitor = new EmitorDogadjaja();

let m = 0;

emitor.on('dogadjaj1', () =>{
  console.log(++m);
});

emitor.emit('dogadjaj1');
emitor.emit('dogadjaj1');
emitor.emit('dogadjaj1');


console.log('---');

let n = 0;

emitor.once('dogadjaj2', () =>{
  console.log(++n);
});

emitor.emit('dogadjaj2');
emitor.emit('dogadjaj2');
emitor.emit('dogadjaj2');
emitor.emit('dogadjaj2');