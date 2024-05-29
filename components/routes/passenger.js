const router = require("express").Router();
const {
  getPassengers,
  getPassenger,
  createPassenger,
  updatePassenger,
  deletePassenger,
} = require("../controllers/passenger");

router.route("/").get(getPassengers).post(createPassenger);

router
  .route("/:id")
  .get(getPassenger)
  .put(updatePassenger)
  .delete(deletePassenger);

module.exports = router;
