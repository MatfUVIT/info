const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

moongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const myquery = { mestoRodjenje: /^S/ };
    const novevrednosti = { $set: { napomena: "Rođen(a) u S*********** " } };
    dbo.collection("studenti").updateMany(myquery, newvalues, function (err, res) {
        if (err)
            throw err;
        console.log(`Azurirani su dokumenti u kolekciji. Broj aziriranih: ${res.result.nModified}`);
        db.close();
    });
});