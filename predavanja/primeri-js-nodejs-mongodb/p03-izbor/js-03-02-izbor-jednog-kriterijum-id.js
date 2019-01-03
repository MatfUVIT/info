const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    let dbo = db.db("mydb");
    const id = new mongodb.ObjectID("5c2e1a7aaaee1649b071ccd9");
    dbo.collection("studenti").findOne({'_id':id}, function (err, result) {
            if (err)
                throw err;
            console.log(result);
            db.close();
        });
});

