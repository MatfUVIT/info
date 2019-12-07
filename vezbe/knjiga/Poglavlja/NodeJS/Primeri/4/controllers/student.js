let students = [
    { username: 'mi10050', password: 'veb', name: 'Marija', major: 'Computer Science' },
    { username: 'mr85050', password: 'vis', name: 'Jovana', major: 'Probability and Statistics' },
    { username: 'mi84050', password: 'profesor', name: 'Milica', major: 'Professor of Mathematics and Computer Science' },
];

module.exports.displayStudent = function (req, res, next) {
    // Searching for a student in the array
    for (let studentElement of students) {
        // If we find the student with the given username,
        // check if the passwords match.
        // If they do, render the student.ejs page,
        // with the student data
        if (studentElement.username === req.body.username && studentElement.password === req.body.password) {
            return res.render('student.ejs', {
                student: studentElement
            });
        }
    }

    // If we get here, that means that we could not find the student,
    // so render the student page with NULL data
    return res.render('student.ejs', {
        student: null
    });
};

module.exports.updateStudent = function (req, res, next) {
    // Find the student by the username,
    // and update its data
    for (let studentElement of students) {
        if (studentElement.username === req.body.username) {
            studentElement.name = req.body.name;
            studentElement.major = req.body.major;
            studentElement.password = req.body.password;
        }
    }

    // Call the next middleware
    next();
};

module.exports.deleteStudent = function (req, res, next) {
    // Find the index i of the student we want to delete
    let i = -1;
    for (i = 0; i < students.length; ++i) {
        if (students[i].username === req.body.username) {
            // We found the index i
            break;
        }
    }

    // Removing the i-th student in the array
    const beforeI = students.splice(0, i);
    const afterI = students.splice(i+1, students.length - (i+1));
    students = beforeI.concat(afterI);

    // Redirect to the index page
    return res.redirect('/');
};