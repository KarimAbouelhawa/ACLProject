const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    Title: {
        type: String,
        required: true,
    },
    Subtitles: {
        type: Array,
        required: true,
    },
    Price: {
        type: Number,
        required: true,
    },
    Summary: {
        type: String,
        Required: true,
    },
    Rating: {
        type: Number,
        required: true,
    },
    Reviews: {
        type: Array,
    },
    Instructor: {
        type: String,
        required: true,
    },
    Hours: {
        type: Number,
        required: true,
    },
    Subject: {
        type: String,
        required: true,
    },
    Exercise: {
        type: Array,
        required: true,
    },
    Discount: {
        type: Number,
        required: false,
        default: 0,
    },
    DiscountDuration: {
        type: String,
    }
}, { timestamps: true });

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;