const { authMiddleware } = require('../../src/middleware/auth')
const { getUserNotifications, createNotification, readNotification, delNotification } = require('../controllers/notif')

const router = require('express').Router()

router
  .route('/')
  .get(authMiddleware(), getUserNotifications)
  .post(authMiddleware(), createNotification)

router
  .route('/:id')
  .put(authMiddleware(), readNotification)
  .delete(delNotification)

module.exports = router