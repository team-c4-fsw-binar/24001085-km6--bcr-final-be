'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class BookingPassenger extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  BookingPassenger.init({
    booking_id: DataTypes.INTEGER,
    passenger_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'BookingPassenger',
    paranoid: true
  });
  return BookingPassenger;
};