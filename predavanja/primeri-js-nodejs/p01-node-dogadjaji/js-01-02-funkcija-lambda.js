const EventEmitter = require('events');

class EmitorDogadjaja extends EventEmitter {}

const emitor = new EmitorDogadjaja();

emitor.on('dogadjaj', function(a, b) {
  console.log(`--------------------------------`);
  console.log(`rukovalac dogadjajem je funkcija`);
  console.log(a, b, this, this === emitor);
});

emitor.on('dogadjaj', (a, b) =>{
  console.log(`------------------------------------`);
  console.log(`rukovalac dogadjajem je lambda-izraz`);
  console.log(a, b, this, this === emitor);
});

emitor.emit('dogadjaj', 'a', 'b');
emitor.emit('dogadjaj', 'a');
emitor.emit('dogadjaj');
