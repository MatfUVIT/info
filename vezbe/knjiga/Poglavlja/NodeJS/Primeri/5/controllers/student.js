const models = require('../models/student');

module.exports.displayStudent = function (req, res, next) {
    const studentObject = models.getStudent(req.body.username, req.body.password);

    return res.render('student.ejs', {
        student: studentObject
    });
};

module.exports.updateStudent = function (req, res, next) {
    models.changeStudentInfo(req.body);
    
    return next();
};

module.exports.deleteStudent = function (req, res, next) {
    models.deleteStudent(req.body.username);
    
    return res.redirect('/');
};