const EventEmitter = require('events');

class EmitorDogadjaja extends EventEmitter {}

const emitor = new EmitorDogadjaja();

emitor.on('dogadjaj', () =>{
  console.log('A');
});

emitor.on('error', (err) => {
  console.error(`Paznja! doslo je do greske. Greska: ${err}`);
});

emitor.emit('dogadjaj');
emitor.emit('error');
emitor.emit('dogadjaj');
emitor.emit('dogadjaj');

