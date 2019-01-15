const Dogadjaj = require('events');

class EmiterDogadjaja extends Dogadjaj {}

const emiter = new EmiterDogadjaja();

emiter.on('dogadjaj', function(a, b) {
  console.log(`--- rukovalac dogadjajem je funkcija ---`);
  console.log(a, b, this, this === emiter);
});

emiter.on('dogadjaj', (a, b) =>{
  console.log(`--- rukovalac dogadjajem je lambda-izraz ---`);
  console.log(a, b, this, this === emiter);
});

emiter.emit('dogadjaj', 'a', 'b');
emiter.emit('dogadjaj', 'mika');
emiter.emit('dogadjaj');
