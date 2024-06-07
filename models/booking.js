"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: "user_id" });
      Booking.hasOne(models.Payment, { foreignKey: "booking_id" });
      Booking.belongsTo(models.Flight, { foreignKey: "flight_id" });
      Booking.hasMany(models.BookingPassenger, { foreignKey: "booking_id" });
      Booking.hasMany(models.BookingSeat, { foreignKey: "booking_id" });

    }
  }
  Booking.init(
    {
      user_id: DataTypes.INTEGER,
      flight_id: DataTypes.INTEGER,
      orderDate: DataTypes.DATE,
      priceAmount: DataTypes.INTEGER,
      code: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
      paranoid: true,
    }
  );
  return Booking;
};
