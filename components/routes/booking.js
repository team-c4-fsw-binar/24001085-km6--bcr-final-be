const { authMiddleware } = require("../../src/middleware/auth");
const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../controllers/booking");

const router = require("express").Router();

router
  .route("/")
  .post(authMiddleware(), createBooking)
  .get(authMiddleware(), getBookingsByUserId);

router
  .route("/:id")
  .get(authMiddleware(), getBookingById)
  .put(authMiddleware(), updateBooking)
  .delete(authMiddleware(), deleteBooking);

module.exports = router;
