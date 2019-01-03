const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const upit = { mestoRodjenja: 'Podgorica' };
    dbo.collection("studenti").deleteOne(upit, function (err, obj) {
        if (err)
            throw err;
        console.log("Jedan dokument je izbrisan iz kolekcije.");
        db.close();
    });
});
