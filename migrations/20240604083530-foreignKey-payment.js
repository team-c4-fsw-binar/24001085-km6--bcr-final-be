"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("Payments", {
      fields: ["booking_code"],
      type: "foreign key",
      name: "fk-to-Payments-booking_code",
      references: {
        table: "Bookings",
        field: "code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "Payments",
      "fk-to-Payments-booking_code"
    );
  },
};
