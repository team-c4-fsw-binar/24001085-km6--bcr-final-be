"use strict";

const seats = require("../data/seat");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Seats", seats);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Seats", null, {});
  },
};
