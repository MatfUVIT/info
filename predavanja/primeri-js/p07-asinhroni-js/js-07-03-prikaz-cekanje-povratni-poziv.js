function prikaziNisku(niska, povratniPoziv){
    setTimeout(
      () => {
        console.log(niska)
        povratniPoziv()
      }, 
      Math.floor(Math.random() * 50) + 1
    )
  }

  function prikaziSve(){
    prikaziNisku("A", ()=>{})
    prikaziNisku("B", ()=>{})
    prikaziNisku("C", ()=>{prikaziNisku("D", ()=>{})})
    prikaziNisku("E", ()=>{})
  }

  prikaziSve()
  
  
 