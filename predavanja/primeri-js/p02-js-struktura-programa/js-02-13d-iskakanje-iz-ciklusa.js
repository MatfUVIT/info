const n = 20
let prosecnoPokusaja = 0
for (let i = 0; i < n; i++) {
  var slucajan = Math.random();
  for(var pokusaja = 1; ; pokusaja++){
      slucajan = Math.random();
      if( slucajan < 0.1)
        break;
  }
  prosecnoPokusaja += pokusaja
}
console.log(`Просечан број покушаја је ${prosecnoPokusaja/n}`);