const router = require("express").Router();
const {
  getPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/payment");

router.route("/").get(getPayments).post(authMiddleware(), createPayment);

router
  .route("/:id")
  .get(getPayment)
  .put(authMiddleware(), updatePayment)
  .delete(authMiddleware(), deletePayment);

module.exports = router;
