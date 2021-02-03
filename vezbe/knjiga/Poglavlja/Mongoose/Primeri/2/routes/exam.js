// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules
const controllers = require('../controllers/exam');

// Global data
const router = express.Router();

// Module implementation
router.post('/', 
    controllers.displayExams);

router.post('/create', 
    controllers.addExam, 
    controllers.displayExams);
    
router.post('/update', 
    controllers.updateExams, 
    controllers.displayExams);

router.post('/delete', 
    controllers.deleteExams, 
    controllers.displayExams);

// Module exports
module.exports = router;