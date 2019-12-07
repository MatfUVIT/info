// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules
const controllers = require('../controllers/student');

// Global data
const router = express.Router();

// Module implementation
router.post('/', 
    controllers.displayStudent);
router.post('/update', 
    controllers.updateStudent,
    controllers.displayStudent);
router.post('/delete', 
    controllers.deleteStudent);

// Module exports
module.exports = router;