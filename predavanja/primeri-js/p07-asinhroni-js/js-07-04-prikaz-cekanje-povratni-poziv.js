function prikaziNisku(niska, povratniPoziv){
    setTimeout(
      () => {
        console.log(niska)
        if(typeof povratniPoziv === 'function')
          povratniPoziv()
      }, 
      Math.floor(Math.random() * 50) + 1
    )
  }

  function prikaziSveRedom(){
    prikaziNisku("A", 
    ()=>{
      prikaziNisku("B", 
      ()=>{
        prikaziNisku("C", 
        ()=>{
          prikaziNisku("D", 
          ()=>{
            prikaziNisku("E")
          })
        })
      })
    })
  }

  prikaziSveRedom()