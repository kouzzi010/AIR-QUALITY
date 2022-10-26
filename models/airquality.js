'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AirQuality extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AirQuality.init({
    pollution: DataTypes.JSON,
    weather: DataTypes.JSON
  }, {
    sequelize,
    modelName: 'AirQuality',
  });
  return AirQuality;
};