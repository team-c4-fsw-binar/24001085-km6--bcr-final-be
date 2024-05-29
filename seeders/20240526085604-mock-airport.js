"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Airports", [
      {
        name: "Hang Nadim",
        city: "Batam",
        country: "Indonesia",
        imgUrl:
          "https://asset.kompas.com/crops/bp8MibSIifzJ5-a2XKwloZuWjOk=/11x0:965x636/750x500/data/photo/2023/05/05/645479bf9b6a7.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Soekarno Hatta",
        city: "Jakarta",
        country: "Indonesia",
        imgUrl:
          "https://nb-img.imgix.net/images-cgk/Jakarta-Airport-CGK12.jpg?auto=compress,enhance,format",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "I Gusti Ngurah Rai International Airport",
        city: "Bali",
        country: "Indonesia",
        imgUrl:
          "https://media.suara.com/pictures/970x544/2022/06/07/44006-bandara-ngurah-rai-bali.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Changi Airport",
        city: "Singapore",
        country: "Singapore",
        imgUrl:
          "https://static01.nyt.com/images/2019/12/02/travel/02singapore-sub/merlin_164028534_c51c096d-a0f9-4b9b-be7d-1f8d11bbf72c-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Bandara Internasional Kuala Lumpur",
        city: "Kuala Lumpur",
        country: "Malaysia",
        imgUrl:
          "https://lh3.googleusercontent.com/p/AF1QipPe73oDVZlQixpQKHZWg71KgVxSkbdNkNPfWoEb=s1360-w1360-h1020",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Airports", null, {});
  },
};
