"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Airline extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Airline.hasMany(models.Flight, { foreignKey: "airlineId" });
    }
  }
  Airline.init(
    {
      name: DataTypes.STRING,
      code: DataTypes.STRING,
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
