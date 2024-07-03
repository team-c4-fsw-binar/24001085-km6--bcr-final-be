const { createBookingPassenger, getAllBookingPassenger, getBookingPassengerById, getBookingPassengersByBooking_code, updateBookingPassenger, deleteBookingPassenger } = require("../controllers/bookingPassenger");

const router = require("express").Router();

router.route("/").postauthMiddleware(),
  createBookingPassenger.get(getAllBookingPassenger);

router
  .route("/:id")
  .get(getBookingPassengerById)
  .put(authMiddleware(), updateBookingPassenger)
  .delete(authMiddleware(), deleteBookingPassenger);

module.exports = router