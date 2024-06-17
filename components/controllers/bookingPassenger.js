const {
  createBookingPassenger,
  getBookingPassengerById,
  getBookingPassengersByBookingId,
  updateBookingPassenger,
  deleteBookingPassenger,
  getAllBookingPassenger,
} = require("../services/bookingPassenger");

exports.createBookingPassenger = async (req, res, next) => {
  try {
    const { booking_id, passenger_id } = req.body;
    if (typeof booking_id != "number") {
      return next({
        message: "Booking ID must Be Number!",
        statusCode: 400,
      });
    }

    if (typeof passenger_id != "number") {
      return next({
        message: "Passenger ID must Be Number!",
        statusCode: 400,
      });
    }

    const data = await createBookingPassenger({
      booking_id,
      passenger_id,
    });
    res.status(201).json({
      message: "Create Booking Passenger Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getAllBookingPassenger = async (req, res, next) => {
  try {
    let results = {};
    const data = await getAllBookingPassenger();

    const page = parseInt(req.query?.page);
    const limit = parseInt(req.query?.limit);
    if (page && limit) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      if (endIndex < data.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      results.totalPage = Math.ceil(data.length / limit);

      results.results = data.slice(startIndex, endIndex);
    } else {
      results.results = data.slice();
    }
    res.status(200).json({
      data: results,
      message: "Get All Booking Passenger successfully",
    });
  } catch (error) {
    next(error);
  }
};

exports.getBookingPassengerById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getBookingPassengerById(id);
    res.status(200).json({
      message: "Get Booking Passenger By ID Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBookingPassenger = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { booking_id, passenger_id } = req.body;
    if (typeof booking_id != "number") {
      return next({
        message: "Booking ID must Be Number!",
        statusCode: 400,
      });
    }

    if (typeof passenger_id != "number") {
      return next({
        message: "Passenger ID must Be Number!",
        statusCode: 400,
      });
    }
    const data = await updateBookingPassenger(id, {
      booking_id,
      passenger_id,
    });

    res.status(200).json({
      message: "Update Booking Passenger Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBookingPassenger = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await deleteBookingPassenger(id);
    res.status(200).json({
      message: "Delete Booking Passenger Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
