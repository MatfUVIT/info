function prikaziNisku(niska){
    setTimeout(
      () => {
        console.log(niska)
      }, 
      Math.floor(Math.random() * 50) + 1
    );
  }

  function prikaziSve(){
    prikaziNisku("А");
    prikaziNisku("Б");
    prikaziNisku("В");
    prikaziNisku("Г");
    prikaziNisku("Д");
  }

  prikaziSve();