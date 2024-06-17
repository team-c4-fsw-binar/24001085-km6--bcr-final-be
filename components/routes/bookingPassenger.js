const { createBookingPassenger, getAllBookingPassenger, getBookingPassengerById, getBookingPassengersByBooking_code, updateBookingPassenger, deleteBookingPassenger } = require("../controllers/bookingPassenger");

const router = require("express").Router();

router
  .route("/")
  .post(createBookingPassenger)
  .get(getAllBookingPassenger)

router
  .route("/:id")
  .get(getBookingPassengerById)
  .put(updateBookingPassenger)
  .delete(deleteBookingPassenger)

module.exports = router