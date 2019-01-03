const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    let dbo = db.db("mydb");
    dbo.collection("studenti").findOne({}, function (err, result) {
        if (err)
            throw err;
        console.log(result);
        db.close();
    });
});

