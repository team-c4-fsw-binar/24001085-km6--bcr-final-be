const { register, verifyOtp, login, profile, edit, delUser, resendOtp } = require('../controllers/auth')
const { authMiddleware } = require('../../src/middleware/auth')

const router = require('express').Router()

router.post('/register', register)
router.post('/verify-otp', verifyOtp)
router.post('/login', login)
router.post('/resendOtp', authMiddleware(), resendOtp)


router
  .route('/')
  .get(authMiddleware(), profile)
  .put(authMiddleware(), edit)
  .delete(authMiddleware(), delUser)

module.exports = router