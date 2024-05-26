const { register, verifyOtp } = require("../controllers/auth");
const express = require("express");

const router = express.Router();

router.post("/register", register);
router.post("/verify-otp", verifyOtp);

module.exports = router;
