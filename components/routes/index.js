const router = require("express").Router();

const authRoutes = require("./auth");
const notifRoutes = require("./notif");
const bookingRoutes = require("./booking");
const bookingPassengerRoutes = require("./bookingPassenger");
const bookingSeatRoutes = require("./bookingSeat");
const paymentRoutes = require("./payment");
const passengerRoutes = require("./passenger");
const seatRoutes = require("./seat");
const airportRoutes = require("./airport");
const airlineRoutes = require("./airline");
const flightRoutes = require("./flight");
const midtransRoutes = require("./midtrans");

router.use("/auth", authRoutes);
router.use("/notifications", notifRoutes);
router.use("/bookings", bookingRoutes);
router.use("/bookingpassengers", bookingPassengerRoutes);
router.use("/bookingseats", bookingSeatRoutes);
router.use("/payments", paymentRoutes);
router.use("/passengers", passengerRoutes);
router.use("/seats", seatRoutes);
router.use("/airports", airportRoutes);
router.use("/airlines", airlineRoutes);
router.use("/flights", flightRoutes);
router.use("/midtrans", midtransRoutes);

module.exports = router;
