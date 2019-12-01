function bucna(f) {
    return function(arg) {
        console.log("poziv sa argumentom ", arg);
        var val = f(arg);
        console.log("pozvana sa argumentom ", arg, " - rezultat ", val);
        return val;
    };
}

bucna(Boolean)(0);
bucna(Math.sin)(Math.PI/2);
bucna(Math.cos)(Math.PI/2);