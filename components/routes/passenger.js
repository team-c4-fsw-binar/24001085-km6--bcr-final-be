const router = require("express").Router();
const {
  getPassengers,
  getPassenger,
  createPassenger,
  updatePassenger,
  deletePassenger,
} = require("../controllers/passenger");

router.route("/").get(getPassengers).post(authMiddleware(), createPassenger);

router
  .route("/:id")
  .get(getPassenger)
  .put(authMiddleware(), updatePassenger)
  .delete(authMiddleware(), deletePassenger);

module.exports = router;
