// beskonačni for ciklus sa iskakanjem za računanje 3^5
var slucajan = Math.random();
console.log(slucajan);
for(var pokusaja = 1; ; pokusaja++){
    slucajan = Math.random();
    console.log(slucajan);
    if( slucajan < 0.1)
      break;
}
console.log(`Извучен је случајан број ${slucajan} мањи од 0.1 из покушаја бр. ${pokusaja+1}`);