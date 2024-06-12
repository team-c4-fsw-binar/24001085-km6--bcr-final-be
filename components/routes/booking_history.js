const router = require("express").Router();
const { authMiddleware } = require("../../src/middleware/auth");

const {
  getBookingHistoriesByFlightIDandDateRange,
} = require("../controllers/booking_history");

router
  .route("/")
  .get(authMiddleware(), getBookingHistoriesByFlightIDandDateRange);

module.exports = router;
