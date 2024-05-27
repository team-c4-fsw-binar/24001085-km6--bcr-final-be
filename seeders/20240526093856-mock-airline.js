"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Airlines", [
      {
        name: "Batik Air",
        code: "BTK - 001",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batik Air",
        code: "BTK - 002",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Batik Air",
        code: "BTK - 003",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 001",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 002",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Citilink",
        code: "CTV - 003",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 001",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 002",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Garuda",
        code: "GIA - 003",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 001",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 002",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Indonesia Air Asia",
        code: "AWG - 003",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 001",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 002",
        baggage: 20,
        cabinBaggage: 20,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Lion Air",
        code: "LNI - 003",
        baggage: 25,
        cabinBaggage: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Airlines", null, {});
  },
};
