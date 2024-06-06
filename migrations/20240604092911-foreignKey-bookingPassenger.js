"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("BookingPassengers", {
      fields: ["booking_id"],
      type: "foreign key",
      name: "fk-to-BookingPassengers-booking_id",
      references: {
        table: "Bookings",
        field: "id",
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
      "fk-to-BookingPassengers-booking_id"
    );
    await queryInterface.removeConstraint(
      "BookingPassengers",
      "fk-to-BookingPassengers-passenger_id"
    );
  },
};
