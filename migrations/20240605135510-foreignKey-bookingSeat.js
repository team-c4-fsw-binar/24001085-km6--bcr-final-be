"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint("BookingSeats", {
      fields: ["booking_id"],
      type: "foreign key",
      name: "fk-to-BookingSeats-booking_id",
      references: {
        table: "Bookings",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
    await queryInterface.addConstraint("BookingSeats", {
      fields: ["seat_id"],
      type: "foreign key",
      name: "fk-to-BookingSeats-seat_id",
      references: {
        table: "Seats",
        field: "id",
      },
      onDelete: "CASCADE",
      onUpdate: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint(
      "BookingPassengers",
      "fk-to-BookingSeats-booking_id"
    );
    await queryInterface.removeConstraint(
      "BookingPassengers",
      "fk-to-BookingSeats-seat_id"
    );
  },
};
