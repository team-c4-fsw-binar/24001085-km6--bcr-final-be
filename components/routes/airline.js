const express = require("express");

const router = express.Router();
const {
  getAirlines,
  getAirlineById,
  addAirline,
  updateAirline,
  deleteAirline,
} = require("../controllers/airline");

router.route("/").get(getAirlines).post(addAirline);
router
  .route("/:id")
  .get(getAirlineById)
  .put(updateAirline)
  .delete(deleteAirline);

module.exports = router;
