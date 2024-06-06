const {
  getBookingSeats,
  getBookingSeat,
  createBookingSeat,
  updateBookingSeat,
  deleteBookingSeat,
} = require("../controllers/bookingSeat");

const router = require("express").Router();

router.route("/").post(createBookingSeat).get(getBookingSeats);

router
  .route("/:id")
  .get(getBookingSeat)
  .put(updateBookingSeat)
  .delete(deleteBookingSeat);

module.exports = router;
