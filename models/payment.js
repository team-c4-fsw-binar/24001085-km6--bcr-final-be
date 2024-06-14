"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    static associate(models) {
      Payment.belongsTo(models.Booking, { foreignKey: "booking_id" });
    }
  }
  Payment.init(
    {
      booking_id: DataTypes.INTEGER,
      payment_method: DataTypes.STRING,
      booking_price: DataTypes.INTEGER,
      discount: DataTypes.INTEGER,
      tax_price: DataTypes.INTEGER,
      total_price: DataTypes.INTEGER,
      status: DataTypes.STRING,
      expired_at: DataTypes.DATE,
      token: DataTypes.STRING,
      redirect_url: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Payment",
      paranoid: true,
    }
  );
  return Payment;
};
