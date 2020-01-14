const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    username: {
        type: String,
        required: true  
    },
    password: {
        type: String,
        required: true  
    },
    name: String,
    surname: String,
    major: String,
    avg_grade: Number,
    note: {
        type: String,
        default: ""
    }
});

const studentModel = mongoose.model('Student', studentSchema);

module.exports.model = studentModel;

module.exports.getStudent = async function (studentUsername, studentPassword) {
    let students = await studentModel.find({username: studentUsername}).exec();
    if (students.length > 0) {
        return students[0];
    }
    else {
        return null;
    }
};

module.exports.changeStudentInfo = async function (searchStudent) {

    let newData = {
        'password': searchStudent.password,
        'name': searchStudent.name,
        'surname': searchStudent.surname,
        'major': searchStudent.major
    };

    await studentModel.updateOne(
        {username: searchStudent}, 
        {$set: newData}).exec();
};

module.exports.deleteStudent = async function (studentUsername) {
    await studentModel.deleteOne({username: studentUsername});
};