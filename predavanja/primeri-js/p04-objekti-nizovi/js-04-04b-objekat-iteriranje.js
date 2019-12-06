// kreiranje objekta
let obj = {
   drvo: 'Grljenje drveća',
   pica: 'Jedenje pice',
   trcanje: 'Trčanje kroz park',
   rad: {
      odlazak: 'Odlazak na posao',
      aktivnost: 'Rad na poslu',
      sati: 8
   },
   televizija: 'Gledanje televizije',
   brojSati: 14,
   umoran: false,
   satnica: 10.45,
   uraditi: (x, y) => x + y
}

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`)

// console.log('---')

// obj = {
//    ime: 'Miki',
//    length: 4
// }

// for (let osobina in obj)
//    console.log(`${osobina} - ${obj[osobina]}`)

