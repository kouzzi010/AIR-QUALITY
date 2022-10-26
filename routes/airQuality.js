const express = require("express");
const router = express.Router();
const { getAirQualityCountry } = require("../controllers/airQuality");

router.route("/:latitude/:longitude").get(getAirQualityCountry);

module.exports = router;
