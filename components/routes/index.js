const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const paymentRoutes = require("./payment");
const passengerRoutes = require("./passenger");
const seatRoutes = require("./seat");
const airportRoutes = require("./airport");
const airlineRoutes = require("./airline");
const flightRoutes = require("./flight");

router.use("/auth", authRoutes);
router.use("/payments", paymentRoutes);
router.use("/passengers", passengerRoutes);
router.use("/seats", seatRoutes);
router.use("/airports", airportRoutes);
router.use("/airlines", airlineRoutes);
router.use("/flights", flightRoutes);

module.exports = router;
