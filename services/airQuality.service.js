require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const URL = "http://api.airvisual.com/v2/nearest_city";

const getAirQualityCountry = async (params) => {
  const { latitude, longitude } = params;
  const response = await axios.get(
    `${URL}?lat=${latitude}&lon=${longitude}&key=${API_KEY}`
  );
  const { data } = response.data;
  const { current: Rusult } = data;
  delete Rusult.weather;

  return Rusult;
};

module.exports = {
  getAirQualityCountry,
};
