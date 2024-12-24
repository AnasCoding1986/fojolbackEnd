const { getStockData } = require("../utils/alphaVantage");

// Controller function to fetch stock data
const fetchStockData = async (req, res) => {
    const { symbol, interval } = req.query;

    if (!symbol || !interval) {
        return res.status(400).json({ error: "Stock symbol and interval are required." });
    }

    try {
        const data = await getStockData(symbol, interval);
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { fetchStockData };
