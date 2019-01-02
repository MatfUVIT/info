const n = 20
let ukupnoPokusaja = 0
centralna:
for (let i = 0; i < n; i++) {
  var slucajan = Math.random();
  for(; ; ){
      slucajan = Math.random();
      ukupnoPokusaja++;
      if( slucajan < 0.1)
        break centralna;
  }
}
console.log(`Укупан број покушаја је ${ukupnoPokusaja}`);