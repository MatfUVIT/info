// visestruko grananje koriscenjem naredbe switch
switch (prompt(" Kakvo je vreme napolju ?")) {
    case "kiša":
        alert("Ponesite kišobran.");
        break;
    case "sunce":
        alert("Ponesite naočari za sunce.");
    case "vetar":
        alert("Ponesite vetrovku.");
        break;
    default:
        alert("Čuće se...")
        break;
}