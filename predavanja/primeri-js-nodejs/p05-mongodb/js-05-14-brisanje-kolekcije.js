const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    dbo.collection("customers").drop(function (err, delOK) {
        if (err)
            throw err;
        if (delOK)
            console.log("Kolekcija je obrisana");
        db.close();
    });
});