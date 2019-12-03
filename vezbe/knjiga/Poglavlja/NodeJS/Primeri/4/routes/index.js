// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules
const systemRoutes = require('../controllers/system');

// Global data
const router = express.Router();

// Module implementation

// Implements GET request on /
router.get('/', systemRoutes.login);

// Module exports
module.exports = router;