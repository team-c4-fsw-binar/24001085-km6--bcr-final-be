"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
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
    },
    {
      sequelize,
      modelName: "Payment",
      paranoid: true,
    }
  );
  return Payment;
};
