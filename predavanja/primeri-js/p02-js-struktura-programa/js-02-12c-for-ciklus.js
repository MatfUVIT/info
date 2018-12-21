// for ciklus
let slucajan = Math.random();
console.log(slucajan);
for(var pokusaja = 1; slucajan >= 0.1; pokusaja++){
    slucajan = Math.random();
    console.log(slucajan);
}
console.log(`Извучен је случајан број ${slucajan} мањи од 0.1 из покушаја бр. ${pokusaja}`);