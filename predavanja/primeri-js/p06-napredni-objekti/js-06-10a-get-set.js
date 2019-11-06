const gomila = {
  elementi: ["ljuska jajeta", "kora pomorandze", "crv", "stara novina"],
  
  get visina() {
    return this.elementi.length;
  },
  
  set visina(vrednost) {
    console.log(`Pokusaj da visina gomile bude ${vrednost} je ignorisan.`);
  }
};

console.log(gomila.visina);
//>>> 4

gomila.visina = 100;
//>>> Pokusaj da visina gomile bude 100 je ignorisan.