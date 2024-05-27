"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Flight.belongsTo(models.Airline, { foreignKey: "airlineId" });
      Flight.belongsTo(models.Airport, { foreignKey: "departureAirport" });
      Flight.belongsTo(models.Airport, { foreignKey: "arrivalAirport" });
    }
  }
  Flight.init(
    {
      code: DataTypes.STRING,
      airlineId: DataTypes.INTEGER,
      departureAirport: DataTypes.INTEGER,
      arrivalAirport: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      economyPrice: DataTypes.INTEGER,
      premiumPrice: DataTypes.INTEGER,
      businessPrice: DataTypes.INTEGER,
      firstClassPrice: DataTypes.INTEGER,
      departureTime: DataTypes.DATE,
      arrivalTime: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Flight",
      paranoid: true,
    }
  );
  return Flight;
};
