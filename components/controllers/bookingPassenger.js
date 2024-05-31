const { createBookingPassenger, getBookingPassengerById, getBookingPassengersByBookingId, updateBookingPassenger, deleteBookingPassenger, getAllBookingPassenger } = require("../services/bookingPassenger");


exports.createBookingPassenger = async (req, res, next) => {
  try {
    const { booking_id, passenger_id } = req.body
    if (typeof booking_id != 'number') {
      return next({
        message : "Booking ID must Be Number!",
        statusCode : 400
      })
    }

    if (typeof passenger_id != 'number') {
      return next({
        message : "Passenger ID must Be Number!",
        statusCode : 400
      })
    }

    const data = await createBookingPassenger({
      booking_id, passenger_id
    });
    res.status(201).json({
      message : "Create Booking Passenger Success",
      data
    });

  } catch (error) {
    next(error)
  }
}

exports.getAllBookingPassenger = async (req, res, next) => {
  try {
    const data = await getAllBookingPassenger()
    res.status(200).json({
      data,
      message: "Get All Booking Passenger successfully",
    });
  } catch (error) {
    next(error)
  }
}

exports.getBookingPassengerById = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await getBookingPassengerById(id);
    res.status(200).json({
      message : "Get Booking Passenger By ID Success",
      data
    });
  } catch (error) {
    next(error)
  }
}


exports.updateBookingPassenger = async (req, res, next) => {
  try {
    const { id } = req.params
    const { booking_id, passenger_id } = req.body
    if (typeof booking_id != 'number') {
      return next({
        message : "Booking ID must Be Number!",
        statusCode : 400
      })
    }

    if (typeof passenger_id != 'number') {
      return next({
        message : "Passenger ID must Be Number!",
        statusCode : 400
      })
    }
    const data = await updateBookingPassenger(id, {
      booking_id, passenger_id
    });

    res.status(200).json({
      message : "Update Booking Passenger Success",
      data
    });
  } catch (error) {
    next(error)
  }
}

exports.deleteBookingPassenger = async (req, res, next) => {
  try {
    const { id } = req.params
    const data = await deleteBookingPassenger(id);
    res.status(200).json({
      message : "Delete Booking Passenger Success",
      data
    });
  } catch (error) {
    next(error)
  }
}
