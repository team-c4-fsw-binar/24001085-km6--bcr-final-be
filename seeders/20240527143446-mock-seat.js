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
        seat_class: "economy",
        airline_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seat_number: 4,
        seat_class: "economy",
        airline_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        seat_number: 7,
        seat_class: "economy",
        airline_id: 1,
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
