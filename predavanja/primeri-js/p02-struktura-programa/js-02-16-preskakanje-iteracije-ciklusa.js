const n = 20
let ukupnoPokusaja = 0
centralna:
for (let i = 0; i < n; i++) {
  var slucajan = Math.random();
  for(let j=0; j<100; j++){
      slucajan = Math.random();
      ukupnoPokusaja++;
      if( slucajan < 0.1)
        continue;
  }
}
console.log(`Укупан број покушаја је ${ukupnoPokusaja}`);