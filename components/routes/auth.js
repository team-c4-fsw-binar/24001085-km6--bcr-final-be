const {
  register,
  verifyOtp,
  login,
  profile,
  edit,
  delUser,
  resendOtp,
  forgotPassword,
  resetPassword,
  googleLogin,
} = require("../controllers/auth");

const { authMiddleware } = require("../../src/middleware/auth");

const router = require("express").Router();

router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/login", login);
router.post("/google-login", googleLogin);
router.post("/forgot-password", forgotPassword);
router.patch("/reset-password/:id/:token", resetPassword);
router.post("/resend-otp", authMiddleware(), resendOtp);

router
  .route("/")
  .get(authMiddleware(), profile)
  .put(authMiddleware(), edit)
  .delete(authMiddleware(), delUser);

module.exports = router;
