// visestruko grananje koriscenjem naredbe switch
let godisnjeDoba = Math.floor( (Math.random() * 40) % 5 );
console.log( `Vrednost indikatora je ${godisnjeDoba}` );
switch (godisnjeDoba) {
    case 0:
        console.log("Ponesite kišobran.");
        break;
    case 1:
        console.log("Ponesite naočari za sunce.");
    case 2:
        console.log(`Ponesite rukavice.`);
    case 3:
        console.log("Obucite patike za šetnju.");
        break;
    default:
        console.log("Ovo je neko nemoguće doba...");
        break; 
}
