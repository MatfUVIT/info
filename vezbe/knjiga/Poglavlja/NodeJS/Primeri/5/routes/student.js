// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules
const studentsRoutes = require('../controllers/students');

// Global data
const router = express.Router();

// Module implementation
router.post('/', 
    studentsRoutes.displayStudent);
router.post('/update', 
    studentsRoutes.updateStudent,
    studentsRoutes.displayStudent);
router.post('/delete', 
    studentsRoutes.deleteStudent);

// Module exports
module.exports = router;