"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      Flight.belongsTo(models.Airline, { foreignKey: "airline_id" });
      Flight.hasMany(models.Booking, {
        foreignKey: "departure_flight_id",
      });
      Flight.hasMany(models.Booking, {
        foreignKey: "return_flight_id",
      });
      Flight.belongsTo(models.Airport, {
        as: "departureAirport_respon",
        foreignKey: "departureAirport",
      });
      Flight.belongsTo(models.Airport, {
        as: "arrivalAirport_respon",
        foreignKey: "arrivalAirport",
      });
    }
  }
  Flight.init(
    {
      airline_id: DataTypes.INTEGER,
      departureAirport: DataTypes.INTEGER,
      arrivalAirport: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      economyPrice: DataTypes.INTEGER,
      premiumPrice: DataTypes.INTEGER,
      businessPrice: DataTypes.INTEGER,
      firstClassPrice: DataTypes.INTEGER,
      numberOfEconomySeatsLeft: DataTypes.INTEGER,
      numberOfPremiumSeatsLeft: DataTypes.INTEGER,
      numberOfBusinessSeatsLeft: DataTypes.INTEGER,
      numberOfFirstClassSeatsLeft: DataTypes.INTEGER,
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
