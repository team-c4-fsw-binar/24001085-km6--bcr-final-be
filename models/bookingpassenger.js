"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingPassenger extends Model {
    static associate(models) {
      BookingPassenger.belongsTo(models.Passenger, {
        foreignKey: "passenger_id",
      });
      BookingPassenger.belongsTo(models.Booking, {
        foreignKey: "booking_code",
      });
    }
  }
  BookingPassenger.init(
    {
      booking_code: DataTypes.STRING,
      passenger_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "BookingPassenger",
      paranoid: true,
    }
  );
  return BookingPassenger;
};
