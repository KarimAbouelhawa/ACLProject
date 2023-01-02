const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const exchangeRateSchema = new Schema({
    Currency: {
        type: String,
        required: true,
    },
    Rate: {
        type: Number,
        required: true
    }
}, { timestamps: true });

const ExchangeRate = mongoose.model('ExchangeRate', exchangeRateSchema);
module.exports = ExchangeRate;