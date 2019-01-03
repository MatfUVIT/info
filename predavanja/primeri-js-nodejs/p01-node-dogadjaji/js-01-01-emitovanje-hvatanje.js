const EventEmitter = require('events');

class EmitorDogadjaja extends EventEmitter {}

const emitor = new EmitorDogadjaja();

emitor.on('dogadjaj', () => {
  console.log('Desio se dogadjaj!');
});

emitor.emit('dogadjaj');
