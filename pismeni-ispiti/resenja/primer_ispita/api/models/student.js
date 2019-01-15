const mongoose = require('mongoose');

const studentSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    ime: String,
    prezime: String,
    indeks: String,

});

module.exports = mongoose.model('Student', studentSchema);