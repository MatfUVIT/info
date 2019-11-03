// https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd

let express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);

console.log('Pokrenuti RESTful API servis za toDo slusa na portu: ' + port);