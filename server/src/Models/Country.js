const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const countrySchema = new Schema({
    Country: {
        type: String,
        required: true,
    },
    Currency: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;