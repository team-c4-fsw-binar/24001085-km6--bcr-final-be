'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    
    static associate(models) {
      
    }
  }
  Booking.init({
    user_id: DataTypes.INTEGER,
    flight_id: DataTypes.INTEGER,
    passenger_id: DataTypes.INTEGER,
    orderDate: DataTypes.DATE,
    priceAmount: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Booking',
    paranoid: true
  });
  return Booking;
};