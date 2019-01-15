// kreiranje objekta
let obj = {
   rad: "Odlazak na posao",
   drvo: "Grljenje drveća",
   pica: "Jedenje pice",
   trcanje: "Trčanje kroz park",
   televizija: "Gledanje televizije"
}

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`)

console.log("---")

obj = {
   ime: "Miki",
   length: 4
}

for (let osobina in obj)
   console.log(`${osobina} - ${obj[osobina]}`)

