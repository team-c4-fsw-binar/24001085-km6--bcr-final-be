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

router.route("/").get(getAirports).post(addAirport);
router.get("/cities", getAllCities);
router
  .route("/:id")
  .get(getAirportById)
  .put(updateAirport)
  .delete(deleteAirport);

module.exports = router;
