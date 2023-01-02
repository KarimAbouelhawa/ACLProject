const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
  },
  Password: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,

  },
  LastName: {
    type: String,

  },
  Gender: {
    type: String,
    enum: ["Male", "Female"],

  },
  Type: {
    type: String,
    enum: ["Instructor", "Individual", "Corporate", "Admin"],
    required: true
  },
  Country: {
    type: String,

  },
Courses: {
    type: Array,
  },
  Rating:{
    type: Number,
  },
  Biography:{
    type: String,
  },
  Reviews:{
    type: Array,
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;