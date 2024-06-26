"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingSeat extends Model {
    static associate(models) {
      BookingSeat.belongsTo(models.Booking, { foreignKey: "booking_code" });
      BookingSeat.belongsTo(models.Seat, { foreignKey: "seat_id" });
    }
  }
  BookingSeat.init(
    {
      booking_code: DataTypes.STRING,
      seat_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BookingSeat",
      paranoid: true,
    }
  );
  return BookingSeat;
};
