// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules
const controllers = require('../controllers/results');

// Global data
const router = express.Router();

// Module implementation

// Implements POST request on /
router.post('/', 
    controllers.displayResults);

// Module exports
module.exports = router;