const EventEmitter = require('events');

class EmitorDogadjaja extends EventEmitter {}

const emitor = new EmitorDogadjaja();

emitor.once('newListener', (event, listener) => {
  if (event === 'dogadjaj') {
    // Ubaci novi dogadjaj na pocetak
    emitor.on('dogadjaj', () => {
      console.log('B');
    });
  }
});

emitor.on('dogadjaj', () =>{
  console.log('A');
});


emitor.emit('dogadjaj');
emitor.emit('dogadjaj');

