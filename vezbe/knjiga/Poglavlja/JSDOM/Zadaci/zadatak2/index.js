function prikaziPodatke(tipovi, prelivi) {
  const tipoviTabela = document.querySelector("#tipovi tbody");
  for (const tip of tipovi) {
    const tipRed = document.createElement("tr");
    tipoviTabela.appendChild(tipRed);

    const idPolje = document.createElement("td");
    const idTekst = document.createTextNode(tip.id);
    idPolje.appendChild(idTekst);
    tipRed.appendChild(idPolje);

    const typePolje = document.createElement("td");
    const typeTekst = document.createTextNode(tip.type);
    typePolje.appendChild(typeTekst);
    tipRed.appendChild(typePolje);
  }

  const preliviLista = document.querySelector("#prelivi");
  for (const preliv of prelivi) {
    const prelivStavka = document.createElement("li");
    const typeTekst = document.createTextNode(preliv.type);
    prelivStavka.appendChild(typeTekst);
    preliviLista.appendChild(prelivStavka);
  }
}

let xhr = new XMLHttpRequest();
xhr.open("GET", "https://codepen.io/chriscoyier/pen/EAIJj.js");
xhr.addEventListener("readystatechange", function () {
  switch (xhr.readyState) {
    case XMLHttpRequest.DONE:
      if (xhr.status === 200) {
        const podaci = JSON.parse(xhr.response);
        console.log(podaci);
        prikaziPodatke(podaci.batters.batter, podaci.topping);
      } else {
        window.alert(xhr.statusText);
      }
  }
});
xhr.send();
