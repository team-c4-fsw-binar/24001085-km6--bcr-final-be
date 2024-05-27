const express = require("express");

const router = express.Router();
const {
  getAirports,
  getAirportById,
  addAirport,
  updateAirport,
  deleteAirport,
} = require("../controllers/airport");

router.route("/").get(getAirports).post(addAirport);
router
  .route("/:id")
  .get(getAirportById)
  .put(updateAirport)
  .delete(deleteAirport);

module.exports = router;
