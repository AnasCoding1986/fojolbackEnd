const express = require("express");
const { fetchStockData } = require("../controllers/stockController");

const router = express.Router();

// Route to fetch stock data
router.get("/", fetchStockData);

module.exports = router;
