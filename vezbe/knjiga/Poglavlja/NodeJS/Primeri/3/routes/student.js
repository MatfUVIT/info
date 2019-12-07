// Node.js packages

// Third-party packages
const express = require('express');

// Custom modules

// Global data
const router = express.Router();

const students = [
    { username: 'mi10050', name: 'Marija', major: 'Computer Science' },
    { username: 'mr85050', name: 'Jovana', major: 'Probability and Statistics' },
    { username: 'mi84050', name: 'Milica', major: 'Professor of Mathematics and Computer Science' },
];

// Module implementation

// Implements GET request on /
router.get('/', function (req, res, next) {
    const usernameForSearching = req.query.username;

    let studentObject = null;
    for (let student of students) {
        if (student.username === usernameForSearching) {
            studentObject = student;
        }
    }

    res.render('student.ejs', {
        student: studentObject
    });
});

// Module exports
module.exports = router;