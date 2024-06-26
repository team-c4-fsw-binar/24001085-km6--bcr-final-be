const router = require("express").Router();
const {
  getPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
} = require("../controllers/payment");

router.route("/").get(getPayments).post(createPayment);

router.route("/:id").get(getPayment).put(updatePayment).delete(deletePayment);

module.exports = router;
