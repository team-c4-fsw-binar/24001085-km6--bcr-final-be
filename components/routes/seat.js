const router = require("express").Router();
const {
  getSeats,
  getSeat,
  createSeat,
  updateSeat,
  deleteSeat,
  getFilteredSeats,
} = require("../controllers/seat");

router.route("/").get(getSeats).post(createSeat);
router.get("/filter", getFilteredSeats);
router.route("/:id").get(getSeat).put(updateSeat).delete(deleteSeat);

module.exports = router;
