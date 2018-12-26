
let x = [1, 2, 3]
// niz je objekat
console.log(`${x} - ${typeof(x)}`)

x = {x:1.7, y:5.6}
console.log(`${x} - ${typeof(x)}`)

delete x.x
delete x.y
console.log(`${x} - ${typeof(x)}`)


x = 1
console.log(`${x} - ${typeof(x)}`)

x = -1.7
console.log(`${x} - ${typeof(x)}`)


x =-Infinity
console.log(`${x} - ${typeof(x)}`)

x = NaN
console.log(`${x} - ${typeof(x)}`)

x = '1'
console.log(`${x} - ${typeof(x)}`)

x = "1"
console.log(`${x} - ${typeof(x)}`)

x = true
console.log(`${x} - ${typeof(x)}`)

x = undefined
console.log(`${x} - ${typeof(x)}`)

x = null
console.log(`${x} - ${typeof(x)}`)
