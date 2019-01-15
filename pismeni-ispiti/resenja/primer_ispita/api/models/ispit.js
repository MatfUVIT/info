const mongoose = require('mongoose');

const ispitSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    predmet: String,
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    bodovi: Number
});

module.exports = mongoose.model('Ispit', ispitSchema);