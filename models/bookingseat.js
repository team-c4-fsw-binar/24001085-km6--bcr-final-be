"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BookingSeat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      BookingSeat.belongsTo(models.Booking, { foreignKey: "booking_id" });
      BookingSeat.belongsTo(models.Seat, { foreignKey: "seat_id" });
    }
  }
  BookingSeat.init(
    {
      booking_id: DataTypes.INTEGER,
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
