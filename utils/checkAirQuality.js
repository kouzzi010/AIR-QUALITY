const { AirQuality } = require("../models");
const axios = require("axios");

const { API_KEY } = process.env;
const LATITUDE = 48.856613;
const LONGITUDE = 2.352222;
const URL = "http://api.airvisual.com/v2/nearest_city";

const checkAirQuality = async () => {
  try {
    const response = await axios.get(
      `${URL}?lat=${LATITUDE}&lon=${LONGITUDE}&key=${API_KEY}`
    );
    const { data } = response.data;
    const { current } = data;

    const newAirQuality = await AirQuality.create(current);
    console.log("created successfully");
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  checkAirQuality,
};
