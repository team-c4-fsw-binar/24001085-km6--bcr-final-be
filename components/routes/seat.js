const router = require("express").Router();
const {
  getSeats,
  getSeat,
  createSeat,
  updateSeat,
  deleteSeat,
  getFilteredSeats,
} = require("../controllers/seat");

router.route("/").get(getSeats).post(authMiddleware(), createSeat);
router.get("/filter", getFilteredSeats);
router
  .route("/:id")
  .get(getSeat)
  .put(authMiddleware(), updateSeat)
  .delete(authMiddleware(), deleteSeat);

module.exports = router;
