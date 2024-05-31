"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Passenger extends Model {
    
    static associate(models) {
      Passenger.hasOne(models.BookingPassenger, { foreignKey : 'passenger_id'})
    }
  }
  Passenger.init(
    {
      name: DataTypes.STRING,
      born_date: DataTypes.DATE,
      citizenship: DataTypes.STRING,
      identity_number: DataTypes.STRING,
      publisher_country: DataTypes.STRING,
      expired_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Passenger",
      paranoid: true,
    }
  );
  return Passenger;
};
