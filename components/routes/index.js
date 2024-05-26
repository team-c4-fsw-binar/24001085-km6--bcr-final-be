const express = require("express");
const router = express.Router();

const authRoutes = require("./auth");
const airportRoutes = require("./airport");
const airlineRoutes = require("./airline");
const flightRoutes = require("./flight");

router.use("/auth", authRoutes);
router.use("/airports", airportRoutes);
router.use("/airlines", airlineRoutes);
router.use("/flights", flightRoutes);

module.exports = router;
