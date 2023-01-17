const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const subTitleSchema = new Schema(
    {
        Name: {
            type: String,
            required: true,
        },
        Hours: {
            type: Number,
            required: true,
        },
        Video: {
            type: String,
        },
        VideoDescription: {
            type: String,
        },
    },
    { timestamps: true }
);

const Subtitle = mongoose.model("Subtitle", subTitleSchema);
module.exports = Subtitle;
