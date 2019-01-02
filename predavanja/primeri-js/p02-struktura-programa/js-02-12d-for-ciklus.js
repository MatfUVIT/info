// for ciklus
const n = 200
let prosecnoPokusaja = 0
for (let i = 0; i < n; i++) {
    var slucajan = Math.random();
    for (var pokusaja = 1; slucajan >= 0.1; pokusaja++) {
        slucajan = Math.random();
    }
    console.log(`Извучен је случајан број ${slucajan} мањи од 0.1 из покушаја бр. ${pokusaja}`);
    prosecnoPokusaja += pokusaja
}
console.log(`Просечан број покушаја је ${prosecnoPokusaja/n}`);