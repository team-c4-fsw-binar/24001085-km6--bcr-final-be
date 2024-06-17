"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("BookingPassengers", {
      fields: ["booking_code"],
      type: "foreign key",
      name: "fk-to-BookingPassengers-booking_code",
      references: {
        table: "Bookings",
        field: "code",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("BookingPassengers", {
      fields: ["passenger_id"],
      type: "foreign key",
      name: "fk-to-BookingPassengers-passenger_id",
      references: {
        table: "Passengers",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "BookingPassengers",
      "fk-to-BookingPassengers-booking_code"
    );
    await queryInterface.removeConstraint(
      "BookingPassengers",
      "fk-to-BookingPassengers-passenger_id"
    );
  },
};
