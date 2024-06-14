"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      Booking.belongsTo(models.User, { foreignKey: "user_id" });
      Booking.hasOne(models.Payment, { foreignKey: "booking_id" });
      Booking.belongsTo(models.Flight, {
        as: "departure_flight_respon",
        foreignKey: "departure_flight_id",
      });
      Booking.belongsTo(models.Flight, {
        as: "return_flight_respon",
        foreignKey: "return_flight_id",
      });
      Booking.hasMany(models.BookingPassenger, { foreignKey: "booking_id" });
      Booking.hasMany(models.BookingSeat, { foreignKey: "booking_id" });
    }
  }
  Booking.init(
    {
      user_id: DataTypes.INTEGER,
      departure_flight_id: DataTypes.INTEGER,
      return_flight_id: DataTypes.INTEGER,
      order_date: DataTypes.DATE,
      price_amount: DataTypes.INTEGER,
      code: DataTypes.STRING,
      adultCount: DataTypes.INTEGER,
      childCount: DataTypes.INTEGER,
      babyCount: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Booking",
      paranoid: true,
    }
  );
  return Booking;
};
