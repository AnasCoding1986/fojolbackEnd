const axios = require("axios");

// Fetch stock data from Alpha Vantage API
const getStockData = async (symbol, interval) => {
    const API_KEY = process.env.ALPHA_VANTAGE_API_KEY;
    const BASE_URL = "https://www.alphavantage.co/query";

    try {
        const response = await axios.get(BASE_URL, {
            params: {
                function: "TIME_SERIES_INTRADAY",
                symbol,
                interval,
                apikey: API_KEY,
            },
        });

        const data = response.data;

        if (data["Error Message"]) {
            throw new Error("Invalid stock symbol or API error.");
        }

        return data;
    } catch (error) {
        throw new Error("Failed to fetch stock data. " + error.message);
    }
};

module.exports = { getStockData };
