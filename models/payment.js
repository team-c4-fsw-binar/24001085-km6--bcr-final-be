"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Booking, { foreignKey: "booking_code" });
    }
  }
  Payment.init(
    {
      booking_code: DataTypes.STRING,
      total_price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      token: DataTypes.STRING,
      redirect_url: DataTypes.STRING,
      start_at: DataTypes.DATE,
      expired_at: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Payment",
      paranoid: true,
    }
  );
  return Payment;
};
