const router = require("express").Router();
const {
  getPayments,
  getPayment,
  createPayment,
  updatePayment,
  deletePayment,
  updateStatus,
} = require("../controllers/payment");

router.route("/").get(getPayments).post(createPayment);
// router.get("/update_status", updateStatus);

router.route("/:id").get(getPayment).put(updatePayment).delete(deletePayment);

module.exports = router;
