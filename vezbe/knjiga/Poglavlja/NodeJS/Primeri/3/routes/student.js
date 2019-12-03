// Node.js packages
const path = require('path');

// Third-party packages
const express = require('express');

// Custom modules

// Global data
const router = express.Router();
const students = [
    { username: 'mi13050', name: 'Nikola', major: 'Computer Science' },
    { username: 'mr85050', name: 'Jovana', major: 'Probability and Statistics' },
    { username: 'mi84050', name: 'Milica', major: 'Professor of Mathematics and Computer Science' },
];

// Module implementation

// Implements GET request on /
router.get('/', function (req, res, next) {
    console.log(req.query);

    let studentObject = null;
    for (let student of students) {
        if (student.username === req.query.username) {
            studentObject = student;
        }
    }

    res.render('student.ejs', {
        student: studentObject
    });
});

// Module exports
module.exports = router;