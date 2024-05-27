const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const payment = require("./payment");
const passenger = require("./passenger");
const seat = require("./seat");
const airportRoutes = require("./airport");
const airlineRoutes = require("./airline");
const flightRoutes = require("./flight");

router.use("/auth", authRoutes);
router.use("/payments", payment);
router.use("/passengers", passenger);
router.use("/seats", seat);
router.use("/airports", airportRoutes);
router.use("/airlines", airlineRoutes);
router.use("/flights", flightRoutes);

module.exports = router;
