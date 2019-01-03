
const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
    if (err)
        throw err;
    const dbo = db.db("mydb");
    dbo.collection('studenti-napomene').aggregate([
        {
            $lookup:
            {
                from: 'studenti',
                localField: 'student_id',
                foreignField: '_id',
                as: 'studentinfo'
            }
        }
    ]).toArray(function (err, res) {
        if (err)
            throw err;
        console.log(JSON.stringify(res));
        db.close();
    });
});

