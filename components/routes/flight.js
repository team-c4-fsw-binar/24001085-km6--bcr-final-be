const express = require("express");

const router = express.Router();
const {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
} = require("../controllers/flight");

router.route("/").get(getFlights).post(addFlight);
router.route("/:id").get(getFlightById).put(updateFlight).delete(deleteFlight);

module.exports = router;
