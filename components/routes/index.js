const express = require("express");
const router = express.Router();

const auth = require("./auth");
const payment = require("./payment");
const passenger = require("./passenger");
const seat = require("./seat");


router.use("/auth", auth);
router.use("/payments", payment);
router.use("/passengers", passenger);
router.use("/seats", seat);


module.exports = router;
