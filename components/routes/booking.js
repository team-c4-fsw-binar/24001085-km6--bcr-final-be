const { authMiddleware } = require("../../src/middleware/auth")
const { createBooking, getBookingsByUserId, getBookingById, updateBooking, deleteBooking } = require("../controllers/booking")

const router = require('express').Router()

router
  .route('/')
  .post(authMiddleware(), createBooking)
  .get(authMiddleware(), getBookingsByUserId)

router
  .route('/:id')
  .get(getBookingById)
  .put(updateBooking)
  .delete(deleteBooking)

module.exports = router