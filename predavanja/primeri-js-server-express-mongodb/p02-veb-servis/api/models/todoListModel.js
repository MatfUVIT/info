'use strict';

console.log("uspesno ucitao todoListModels")

let mongoose = require('mongoose');
let Schema = mongoose.Schema;


let TaskSchema = new Schema({
  name: {
    type: String,
    required: 'Unesite naziv zadatka'
  },
  Created_date: {
    type: Date,
    default: Date.now
  },
  status: {
    type: [{
      type: String,
      enum: ['na cekanju', 'u toku', 'zavrsen']
    }],
    default: ['na cekanju']
  }
});

module.exports = mongoose.model('Tasks', TaskSchema);