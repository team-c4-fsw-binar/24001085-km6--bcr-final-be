"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Payments", {
      fields: ["booking_id"],
      type: "foreign key",
      name: "fk-to-Payments-booking_id",
      references: {
        table: "Bookings",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Payments",
      "fk-to-Payments-booking_id"
    );
  },
};
