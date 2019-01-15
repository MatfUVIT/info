const operacija = require('./racun')

for(let i=0; i<10; i++){
    let x = Math.random()
    console.log(`${i} ${x} ${operacija.naKvadrat(x)}`)
}