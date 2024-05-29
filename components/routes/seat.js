const router = require("express").Router();
const {
  getSeats,
  getSeat,
  createSeat,
  updateSeat,
  deleteSeat,
} = require("../controllers/seat");

router.route("/").get(getSeats).post(createSeat);

router.route("/:id").get(getSeat).put(updateSeat).delete(deleteSeat);

module.exports = router;
