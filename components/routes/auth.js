const { register, verifyOtp } = require('../controllers/auth')

const router = require('express').Router()

router.post('/register', register)
router.post('/verify-otp', verifyOtp)

module.exports = router