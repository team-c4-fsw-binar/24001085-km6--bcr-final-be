const express = require("express");
const router = express.Router();

const auth = require('./auth')
const notification = require('./notif')

router.use('/auth', auth)
router.use('/notification', notification)

module.exports = router;
