function brojačArgumenata () {
    console.log("---")
    let s = ""
    for(let i in arguments)
        s += arguments[i]
    console.log(s)
    console.log ("Prilikom poziva su prosleđena " , arguments.length , " argumenta.") 
}

// Prikazuje "Prilikom poziva su prosleđena 4 argumenta."
brojačArgumenata ("Ako kaniš " , "pobijediti" , " ne smiješ ", "izgubiti")
brojačArgumenata ("Ako kaniš pobijediti" , " ne smiješ izgubiti")
brojačArgumenata ("Ako kaniš pobijediti ne smiješ izgubiti")