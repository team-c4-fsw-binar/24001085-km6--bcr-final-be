"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    static associate(models) {
      Airline.hasMany(models.Flight, { foreignKey: "airline_id" });
      Airline.hasMany(models.Seat, { foreignKey: "airline_id" });
    }
  }
  Airline.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
      imgUrl: DataTypes.TEXT,
      baggage: DataTypes.INTEGER,
      cabinBaggage: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Airline",
      paranoid: true,
    }
  );
  return Airline;
};
