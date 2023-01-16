const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  Username: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: String,
    required: true,
  },
  FirstName: {
    type: String,
    required: true,
  },
  LastName: {
    type: String,
    required: true,
  },
  Gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  Type: {
    type: String,
    enum: ["Instructor", "Individual", "Corporate", "Admin"],
    required: true
  },
  Country: {
    type: String,
    required: true,
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