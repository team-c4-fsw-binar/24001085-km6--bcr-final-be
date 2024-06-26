const {
  createBookingPassenger,
  getBookingPassengerById,
  getBookingPassengersByBookingCode,
  updateBookingPassenger,
  deleteBookingPassenger,
  getAllBookingPassenger,
} = require("../services/bookingPassenger");

exports.createBookingPassenger = async (req, res, next) => {
  try {
    const { booking_code, passenger_id } = req.body;

    if (typeof passenger_id != "number") {
      return next({
        message: "Passenger id is not valid",
        statusCode: 400,
      });
    }

    const data = await createBookingPassenger({
      booking_code,
      passenger_id,
    });
    res.status(201).json({
      message: "Booking Passenger created successfully",
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

      results.totalPage = Math.ceil(data.length / limit);

      if (endIndex < data.length) {
        results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0 && page < results.totalPage) {
        results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      results.results = data.slice(startIndex, endIndex);
    } else {
      results.results = data.slice();
    }
    res.status(200).json({
      data: results,
      message: "Booking passengers fetched successfully",
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
      message: "Booking passengers by id fetched successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBookingPassenger = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { booking_code, passenger_id } = req.body;

    if (typeof passenger_id != "number") {
      return next({
        message: "Passenger id is not valid",
        statusCode: 400,
      });
    }
    const data = await updateBookingPassenger(id, {
      booking_code,
      passenger_id,
    });

    res.status(200).json({
      message: "Booking passengers updated successfully",
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
      message: "Booking passengers deleted successfully",
      data,
    });
  } catch (error) {
    next(error);
  }
};
