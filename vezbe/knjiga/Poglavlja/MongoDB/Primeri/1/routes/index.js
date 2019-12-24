// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules
const controllers = require('../controllers/index');

// Global data
const router = express.Router();

// Module implementation

// Implements GET request on /
router.get('/', 
    controllers.login);

// Module exports
module.exports = router;