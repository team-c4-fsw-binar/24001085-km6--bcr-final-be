"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Seats", [
      {
        seat_number: 1,
        flight_id: 2,
        booking_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seat_number: 4,
        flight_id: 5,
        booking_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seat_number: 7,
        flight_id: 8,
        booking_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
