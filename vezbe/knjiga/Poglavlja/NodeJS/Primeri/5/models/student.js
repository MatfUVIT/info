let students = [
    { username: 'mi10050', password: 'veb', name: 'Marija', major: 'Computer Science' },
    { username: 'mr85050', password: 'vis', name: 'Jovana', major: 'Probability and Statistics' },
    { username: 'mi84050', password: 'profesor', name: 'Milica', major: 'Professor of Mathematics and Computer Science' },
];

module.exports.getStudent = function (studentUsername, studentPassword) {
    for (let student of students) {
        if (student.username === studentUsername && student.password === studentPassword) {
            return student;
        }
    }

    return null;
};

module.exports.changeStudentInfo = function (searchStudent) {
    for (let student of students) {
        if (student.username === searchStudent.username) {
            student.name = searchStudent.name;
            student.major = searchStudent.major;
            student.password = searchStudent.password;
        }
    }
};

module.exports.deleteStudent = function (studentUsername) {
    let i = -1;
    for (i = 0; i < students.length; ++i) {
        if (students[i].username === studentUsername) {
            break;
        }
    }

    const beforeI = students.splice(0, i);
    const afterI = students.splice(i+1, students.length - (i+1));
    students = beforeI.concat(afterI);
}