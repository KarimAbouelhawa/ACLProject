// External variables
const express = require("express");
const mongoose = require("mongoose");
const axios = require("axios");
const { MongoURI, ExchangeRatesAPIKey } = require("./settings.json");
const cors = require('cors');

//App variables
const app = express();
const port = process.env.PORT || "8000";

try {
    (async () => {
        await mongoose.connect(MongoURI);
        console.log("MongoDB is now connected!");

        const ExchangeRates = require("./Models/ExchangeRate");
        const dbRate = await ExchangeRates.findOne();

        const dbRateUpdated = Date.parse(dbRate.updatedAt);
        const now = Date.now();

        // if difference between dates > 1 day
        if (now - dbRateUpdated > 1000 * 3600 * 24) {
            // request & save new rates
            console.log("Updating Rates");
            const newRatesRes = await axios.get(
                `https://v6.exchangerate-api.com/v6/${ExchangeRatesAPIKey}/latest/USD`
            );
            const rates = newRatesRes.data.conversion_rates;
            const rateKeys = Object.keys(rates);

            rateKeys.forEach(async key => {
                await ExchangeRates.updateOne({
                    Currency: key,
                    Rate: rates[key],
                });
            });
        }

        app.listen(port, () => {
            console.log(`Listening to requests on http://localhost:${port}`);
        });
    })();
} catch (err) {
    console.log(err);
}

app.get("/home", (req, res) => {
    res.status(200).send("You have everything installed!");
});

app.use(express.json());
app.use(cors());

app.use("/user", require("./Routes/userController"));
app.use("/instructor", require("./Routes/instructorController"));
app.use("/course", require("./Routes/courseController"));
