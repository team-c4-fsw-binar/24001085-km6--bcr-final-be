const express = require("express");

const router = express.Router();
const {
  getAirports,
  getAirportById,
  addAirport,
  updateAirport,
  deleteAirport,
  getAllCities,
} = require("../controllers/airport");

router.route("/").get(getAirports).post(authMiddleware(), addAirport);
router.get("/cities", getAllCities);
router
  .route("/:id")
  .get(getAirportById)
  .put(authMiddleware(), updateAirport)
  .delete(authMiddleware(), deleteAirport);

module.exports = router;
