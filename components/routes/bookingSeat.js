const {
  getBookingSeats,
  getBookingSeat,
  createBookingSeat,
  updateBookingSeat,
  deleteBookingSeat,
} = require("../controllers/bookingSeat");

const router = require("express").Router();

router
  .route("/")
  .post(authMiddleware(), createBookingSeat)
  .get(getBookingSeats);

router
  .route("/:id")
  .get(getBookingSeat)
  .put(authMiddleware(), updateBookingSeat)
  .delete(authMiddleware(), deleteBookingSeat);

module.exports = router;
