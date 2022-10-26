const express = require("express");
const app = express();
const cron = require("node-cron");
const notFound = require("./middleware/not-found");
const airQualityRoutes = require("./routes/airQuality");
const { checkAirQuality } = require("./utils/checkAirQuality");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());
app.use("/api/v1/AirQualityCountry", airQualityRoutes);
app.use(notFound);
app.use(errorHandlerMiddleware);

cron.schedule("* * * * *", async () => {
  checkAirQuality();
});

const PORT = process.env.PORT || 8001;
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
