const mongoose = require('mongoose');

const student = require('./student');

const examSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        require: true
    },
    subject: String,
    date: Date,
    grade: Number
});

const examModel = mongoose.model('Exam', examSchema);

module.exports.model = examModel;

module.exports.getExams = async function(studentUsername) 
{
    let studentId = await student.getStudentId(studentUsername);
    let exams = await examModel.find({student: studentId}).exec();

    if (exams.length > 0) 
    {
        return exams;
    }
    else 
    {
        return null;
    }
};

module.exports.addNewExam = async function(examData) 
{
    let studentId = await student.getStudentId(examData.username);
    let newExam = new examModel({
        _id: new mongoose.Types.ObjectId(),
        student: studentId,
        subject: examData.subject,
        date: examData.date,
        grade: examData.grade
    });

    await newExam.save();
};

module.exports.changeDates = async function(studentUsername) 
{
    let studentId = await student.getStudentId(studentUsername);
    await examModel.updateMany(
        {student: studentId},
        {$currentDate: {date: true}}).exec();
};

module.exports.deleteExams = async function(data) 
{
    let studentId = await student.getStudentId(data.username);
    await examModel.deleteMany({student: studentId, subject: data.subject});
};

module.exports.getResults = async function() {
    let results = await examModel.find({}).populate('student', 'username name surname').sort({subject: 1, grade: -1}).exec();

    if (results.length > 0) {
        return results;
    }
    else {
        return null;
    }
};