const router = require("express").Router();

const { updatePaymentStatus } = require("../controllers/updatePaymentStatus");
const {
  validateIP,
  validateSignature,
} = require("../../src/middleware/midtrans");

router.route("/").post(validateSignature, updatePaymentStatus);

module.exports = router;
