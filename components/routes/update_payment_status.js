const router = require("express").Router();

const { updatePaymentStatus } = require("../controllers/update_payment_status");

router.route("/").put(updatePaymentStatus);

module.exports = router;
