const student = require('../models/student');
const exam = require('../models/exam');

module.exports.displayExams = async function(req, res, next) {
    const examsObject = await exam.getExams(req.body.username);

    return res.render('exam.ejs', {
        student: {
            username: req.body.username,
            password: req.body.password
        },
        exams: examsObject
    });
};

module.exports.addExam = async function(req, res, next) {
    await exam.addNewExam(req.body);

    return next();
};


module.exports.updateExams = async function(req, res, next) {
    await exam.changeDates(req.body.username);

    return next();
};


module.exports.deleteExams = async function(req, res, next) {
    await exam.deleteExams(req.body);

    return next();
};

