"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    
    static associate(models) {
      Airport.hasMany(models.Flight, { foreignKey: "departureAirport" });
      Airport.hasMany(models.Flight, { foreignKey: "arrivalAirport" });
    }
  }
  Airport.init(
    {
      name: DataTypes.STRING,
      city: DataTypes.STRING,
      country: DataTypes.STRING,
      imgUrl: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Airport",
      paranoid: true,
    }
  );
  return Airport;
};
