const router = require("express").Router();
const { authMiddleware } = require("../../src/middleware/auth");

const {
  getBookingHistoriesByFlightIDandDateRange,
} = require("../controllers/bookingHistory");

router
  .route("/")
  .post(authMiddleware(), getBookingHistoriesByFlightIDandDateRange);

module.exports = router;
