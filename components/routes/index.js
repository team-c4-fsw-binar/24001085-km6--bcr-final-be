const express = require("express");
const router = express.Router();

const auth = require('./auth')
const notification = require('./notif')
const booking = require('./booking')

router.use('/auth', auth)
router.use('/notification', notification)
router.use('/booking', booking)

module.exports = router;
