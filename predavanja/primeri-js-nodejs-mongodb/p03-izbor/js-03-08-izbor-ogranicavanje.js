
const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    const granica = 5;
    dbo.collection("studenti").find({}).limit(granica).toArray(function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});

