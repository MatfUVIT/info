const Dogadjaj = require('events');

class EmiterDogadjaja extends Dogadjaj {}

const emiter = new EmiterDogadjaja();

emiter.on('pokrenut', function(a, b) {
  console.log(`--- rukovalac dogadjajem je funkcija ---`);
  console.log(a, b, this, this === emiter);
});

emiter.on('pokrenut', (a, b) =>{
  console.log(`--- rukovalac dogadjajem je lambda-izraz ---`);
  console.log(a, b, this, this === emiter);
});

emiter.emit('pokrenut', 'a', 6);

emiter.emit('pokrenut', 'mika');

emiter.emit('pokrenut');
