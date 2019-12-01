let godisnjeDoba = Math.floor((Math.random() * 40) % 5);
switch (godisnjeDoba) {
    case 0:
        console.log("Ponesite kišobran.");
        break;
    case 1:
        console.log("Ponesite naočari za sunce.");
        break;
    case 2:
        console.log(`Ponesite rukavice.`);
        break;
    case 3:
        console.log("Obucite patike za šetnju.");
        break;
    default:
        console.log("Ovo je neko nemoguće doba...");
        break;
}
console.log(`Vrednost indikatora je ${godisnjeDoba}`);