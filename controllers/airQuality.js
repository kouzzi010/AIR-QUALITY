const asyncWrapper = require("../middleware/async");
const { airQualityService } = require("../services");

const getAirQualityCountry = asyncWrapper(async (req, res, next) => {
  const { params } = req;
  const Rusult = await airQualityService.getAirQualityCountry(params);

  res.status(200).json({ Rusult });
});

module.exports = {
  getAirQualityCountry,
};
