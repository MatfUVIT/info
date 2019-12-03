// Node.js packages

// For creating paths independent of operating system
const path = require('path');

// Third-party packages

// For creating expressjs applications
const express = require('express');

// Custom modules

// Handles routes to /
const indexRoutes = require('./routes/index');
const studentRoutes = require('./routes/student');

// Global data
const app = express();

// Module implementation

// Serving public files statically
app.use(express.static(path.join(__dirname, 'public')));

// Registering routes
app.use('/', indexRoutes);
app.use('/student', studentRoutes);

// Handling request for unknown path
app.use(function (req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

// Handling errors (unknown request, dynamic code errors, ...)
app.use(function (error, req, res, next) {
    console.error(error.stack);

    // Alternatively, send a 500 html page
    res.status(error.status || 500).json({
        errorMessage: error.message
    });
});

// Module exports

module.exports = app;