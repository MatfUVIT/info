function prikaziNisku(niska){
    setTimeout(
      () => {
        console.log(niska)
      }, 
      Math.floor(Math.random() * 50) + 1
    )
  }

  function prikaziSve(){
    prikaziNisku("A")
    prikaziNisku("B")
    prikaziNisku("C")
    prikaziNisku("D")
    prikaziNisku("E")
  }

  prikaziSve()