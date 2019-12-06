const studentModel = require('../models/student');

module.exports.displayStudent = function (req, res, next) {
    const studentObject = studentModel.getStudent(req.body.username);

    return res.render('student.ejs', {
        student: studentObject
    });
};

module.exports.updateStudent = function (req, res, next) {
    studentModel.changeStudentInfo(req.body);
    
    return next();
};

module.exports.deleteStudent = function (req, res, next) {
    studentModel.deleteStudent(req.body.username);
    
    return res.redirect('/');
};