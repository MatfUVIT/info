const mongodb = require('mongodb')

const mongoClient = mongodb.MongoClient;
const url = "mongodb://localhost:27017/";

mongoClient.connect(url, function (err, db) {
  if (err)
    throw err;
  let dbo = db.db("mydb");
  let studenti = [
    {
      ime: "Janko",
      prezime: "Janković",
      brojIndeksa: "17/2017",
      godinaStudija: 2,
      datumRodjenja: {
        dan: 15,
        mesec: 3,
        godina: 1999
      },
      mestoRodjenja: "Beograd"
    },
    {
      ime: "Mirko",
      prezime: "Mirković",
      brojIndeksa: "24/2017",
      godinaStudija: 2,
      datumRodjenja: {
        dan: 15,
        mesec: 11,
        godina: 1999
      },
      mestoRodjenja: "Užice"
    },
    {
      ime: "Milan",
      prezime: "Milanović",
      brojIndeksa: "123/2018",
      godinaStudija: 1,
      datumRodjenja: {
        dan: 15,
        mesec: 12,
        godina: 1999
      },
      mestoRodjenja: "Beograd"
    },
    {
      ime: "Žarko",
      prezime: "Marković",
      brojIndeksa: "28/2018",
      godinaStudija: 1,
      datumRodjenja: {
        dan: 15,
        mesec: 3,
        godina: 2000
      },
      mestoRodjenja: "Beograd"
    },
    {
      ime: "Milena",
      prezime: "Marković",
      brojIndeksa: "78/2018",
      godinaStudija: 1,
      datumRodjenja: {
        dan: 17,
        mesec: 6,
        godina: 2000
      },
      mestoRodjenja: "Beograd"
    },
    {
      ime: "Ivana",
      prezime: "Ivanović",
      brojIndeksa: "7/2018",
      godinaStudija: 1,
      datumRodjenja: {
        dan: 17,
        mesec: 11,
        godina: 2000
      },
      mestoRodjenja: "Čačak"
    }];
  dbo.collection("studenti").insertMany(studenti, function (err, res) {
    if (err)
      throw err;
    console.log(`Umetnuti su dokumenti u kolekciju. Broj umetnutih dokumenata: ${res.insertedCount}`);
    db.close();
  });
});