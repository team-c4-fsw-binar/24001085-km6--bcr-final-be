"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
  
    static associate(models) {
      Seat.belongsTo(models.Booking, { foreignKey : 'booking_id' })
      Seat.belongsTo(models.Flight, { foreignKey : 'flight_id'})
    }
  }
  Seat.init(
    {
      seat_number: DataTypes.INTEGER,
      flight_id: DataTypes.INTEGER,
      booking_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Seat",
      paranoid: true,
    }
  );
  return Seat;
};
