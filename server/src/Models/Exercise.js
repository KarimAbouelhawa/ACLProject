const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const exerciseQuestionsSchema = new Schema({
    Question: {
        type: String,
        required: true,
    },
    Answers: {
        type: Array,
        required: true,
    },
});

const exerciseSchema = new Schema({
    Questions: {
        type: [exerciseQuestionsSchema],
        required: true,
    },
});

const Exercise = mongoose.model("Exercise", exerciseSchema);
module.exports = Exercise;
