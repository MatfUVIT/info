// Node.js packages
const path = require('path');

// Third-party packages
const express = require('express');

// Custom modules

// Global data
const router = express.Router();

// Module implementation

// Implements GET request on /
router.get('/', function (req, res, next) {
    res.sendFile(path.join(__dirname, '..', 'views', 'student.html'));
});

// Module exports
module.exports = router;