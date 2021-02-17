// Node.js packages

// For creating paths independent of operating system
const path = require('path');

// Third-party packages

// For creating expressjs applications
const express = require('express');
// For parsing request body
const bodyParser = require('body-parser');
// For manipulating connexting to database
const mongoose = require('mongoose');


// Connect to database
mongoose.connect("mongodb://127.0.0.1:27017/Fakultet", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Custom modules

// Handles routes to /
const indexRoutes = require('./routes/index');
const studentRoutes = require('./routes/student');

// Global data
const app = express();

// Module implementation

// Registering a template rendering engine and template directories
app.set('view engine', 'ejs');
app.set('views', 'views');

// Parsing request body
app.use(bodyParser.urlencoded({extended: false}));

// Serving public files statically
app.use(express.static(path.join(__dirname, 'public')));

// Registering routes
app.use('/', indexRoutes);
app.use('/student', studentRoutes);

// Handling request for unknown path
app.use(function (req, res, next) {
    res.status(404).render('404.ejs');
});

// Handling errors (unknown request, dynamic code errors, ...)
app.use(function (error, req, res, next) {
    console.error(error.stack);

    const statusCode = error.status || 500;
    res.status(statusCode).render('error.ejs', {
        errorMessage: error.message,
        errorCode: statusCode
    });
});

// Module exports

module.exports = app;