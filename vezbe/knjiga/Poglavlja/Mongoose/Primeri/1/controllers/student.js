const models = require('../models/student');

module.exports.displayStudent = async function (req, res, next) {
    try {
        const studentObject = await models.getStudent(req.body.username, req.body.password);

        return res.render('student.ejs', {
            student: studentObject
        });
    } catch (err) {
        next(err);
    }
};

module.exports.updateStudent = async function (req, res, next) {
    try {
        await models.changeStudentInfo(req.body);
        
        return next();
    } catch (err) {
        next(err);
    }
};

module.exports.deleteStudent = async function (req, res, next) {
    try {
        await models.deleteStudent(req.body.username);
        
        return res.redirect('/');
    } catch (err) {
        next(err);
    }
};