let students = [
    { username: 'mi13050', password: 'veb', name: 'Nikola', major: 'Computer Science' },
    { username: 'mr85050', password: 'vis', name: 'Jovana', major: 'Probability and Statistics' },
    { username: 'mi84050', password: 'profesor', name: 'Milica', major: 'Professor of Mathematics and Computer Science' },
];

module.exports.getStudent = function (studentUsername) {
    for (let student of students) {
        if (student.username === studentUsername) {
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

    // Removing the i-th student in the array
    students = students.splice(0, i).concat(students.splice(i+1, students.length - (i+1)));
}