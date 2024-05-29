const { createBooking, getBookingsByUserId, getBookingById, updateBooking, deleteBooking } = require("../services/booking");

exports.createBooking = async (req, res, next) => {
  try {
    // get body
    const { flight_id, passenger_id, orderDate, priceAmount } = req.body
    const user_id = req?.user?.id

    if (!flight_id || flight_id == "") {
      return next({
        message : "Flight Id Must Be Filled!",
        statusCode : 400
      })
    }

    if (!passenger_id || passenger_id == "") {
      return next({
        message : "Passenger Id Must Be Filled!",
        statusCode : 400
      })
    }

    if (!orderDate || orderDate == "") {
      return next({
        message : "Order Date Must Be Filled!",
        statusCode : 400
      })
    }

    if (!priceAmount || priceAmount == "") {
      return next({
        message : "Price Amount Must Be Filled!",
        statusCode : 400
      })
    }

    const data = await createBooking({
      flight_id, passenger_id, orderDate, priceAmount, user_id
    });
    
    res.status(201).json({
      message : `Success Create Booking`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.getBookingsByUserId = async (req, res, next) => {
  try {
    const user_id = req?.user?.id

    const data = await getBookingsByUserId(user_id);
    res.status(200).json({
      message : `Success Get Booking By User`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.getBookingById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await getBookingById(id);
    res.status(200).json({
      message : `Success Get Booking By ID`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params
    const { flight_id, passenger_id, orderDate, priceAmount } = req.body

    const data = await updateBooking(id, {
      flight_id, passenger_id, orderDate, priceAmount
    });
    res.status(200).json({
      message : `Success Update Booking`,
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.deleteBooking = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await deleteBooking(id);
    res.status(200).json({
      message : `Success Delete Notification`,
      data
    });
  } catch (error) {
    next(error)
  }
}
