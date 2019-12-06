
// objekat
let x = { x: 1.7, y: 5.6 }
console.log(`${x} - ${typeof (x)}`)

// "prazan" objekat
delete x.x
delete x.y
console.log(`${x} - ${typeof (x)}`)

// "prazan" objekat
x = {}
console.log(`${x} - ${typeof (x)}`)

// funkcija 
x = function () {
    console.log("Sreca, sreca, radost")
}
console.log(`${x} - ${typeof (x)}`)

// lambda izraz 
x = () => console.log("Sreca, sreca, radost")
console.log(`${x} - ${typeof (x)}`)

// niz
x = [1, 2, 3]
console.log(`${x} - ${typeof (x)}`)

x = 1
console.log(`${x} - ${typeof (x)}`)

x = -1.7
console.log(`${x} - ${typeof (x)}`)

x = -Infinity
console.log(`${x} - ${typeof (x)}`)

x = NaN
console.log(`${x} - ${typeof (x)}`)

x = '1'
console.log(`${x} - ${typeof (x)}`)

x = "1"
console.log(`${x} - ${typeof (x)}`)

x = true
console.log(`${x} - ${typeof (x)}`)

x = undefined
console.log(`${x} - ${typeof (x)}`)

x = null
console.log(`${x} - ${typeof (x)}`)
