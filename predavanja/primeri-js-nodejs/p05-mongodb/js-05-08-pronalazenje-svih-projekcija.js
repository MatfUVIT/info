const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    let dbo = db.db("mydb");
    dbo.collection("studenti").find({},
        { projection: { _id: 0, ime: 1, prezime: 1, mestoRodjenja:1 } }
    ).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    let dbo = db.db("mydb");
    dbo.collection("studenti").find({},
        { projection: { _id: 0, mestoRodjenja:0, datumRodjenja:0 } }
    ).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});
