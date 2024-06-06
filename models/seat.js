"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      Seat.belongsTo(models.Airline, { foreignKey: "airline_id" });
      Seat.hasMany(models.BookingSeat, { foreignKey: "seat_id" });
    }
  }
  Seat.init(
    {
      seat_number: DataTypes.INTEGER,
      seat_class: DataTypes.ENUM(
        "economy",
        "premium",
        "business",
        "first_class"
      ),
      airline_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
      paranoid: true,
    }
  );
  return Seat;
};
