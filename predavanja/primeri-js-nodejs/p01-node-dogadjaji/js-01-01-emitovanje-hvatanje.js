const Dogadjaj = require('events')

class EmiterDogadjaja extends Dogadjaj {}

const emiter = new EmiterDogadjaja()

emiter.on('dogadjaj', () => {
  console.log('Odgovaram na emitovani dogadjaj!')
})

emiter.emit('dogadjaj')
