const express = require("express");

const router = express.Router();
const {
  getFlights,
  getFlightById,
  addFlight,
  updateFlight,
  deleteFlight,
} = require("../controllers/flight");

router.route("/").get(getFlights).post(authMiddleware(), addFlight);
router
  .route("/:id")
  .get(getFlightById)
  .put(authMiddleware(), updateFlight)
  .delete(authMiddleware(), deleteFlight);

module.exports = router;
