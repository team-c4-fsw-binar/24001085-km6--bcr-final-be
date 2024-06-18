const router = require("express").Router();

const { updatePaymentStatus } = require("../controllers/update_payment_status");
const {
  validateIP,
  validateSignature,
} = require("../../src/middleware/midtrans");

router.route("/").post(validateSignature, updatePaymentStatus);

module.exports = router;
