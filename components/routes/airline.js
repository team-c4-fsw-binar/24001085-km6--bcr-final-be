const express = require("express");

const router = express.Router();
const {
  getAirlines,
  getAirlineById,
  addAirline,
  updateAirline,
  deleteAirline,
} = require("../controllers/airline");

router.route("/").get(getAirlines).post(authMiddleware(), addAirline);
router
  .route("/:id")
  .get(getAirlineById)
  .put(authMiddleware(), updateAirline)
  .delete(authMiddleware(), deleteAirline);

module.exports = router;
