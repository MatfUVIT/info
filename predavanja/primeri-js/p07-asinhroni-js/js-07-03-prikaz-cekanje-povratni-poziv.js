function prikaziNisku(niska, povratniPoziv){
    setTimeout(
      () => {
        console.log(niska);
        povratniPoziv();
      }, 
      Math.floor(Math.random() * 50) + 1
    );
  }

  function prikaziSve(){
    prikaziNisku("А", ()=>{});
    prikaziNisku("Б", ()=>{});
    prikaziNisku("В", ()=>{prikaziNisku("Г", ()=>{})});
    prikaziNisku("Д", ()=>{});
  }

  prikaziSve();
  
  
 