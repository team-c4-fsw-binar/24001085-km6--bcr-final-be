const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../services/booking");

exports.createBooking = async (req, res, next) => {
  try {
    const {
      departure_flight_id,
      return_flight_id,
      seats_id,
      seat_class,
      passengers,
      adultCount,
      childCount,
      babyCount,
    } = req.body;
    const user_id = req?.user?.id;

    const validSeatClasses = ["economy", "premium", "business", "first_class"];

    if (
      !departure_flight_id ||
      isNaN(parseInt(departure_flight_id) || parseInt(departure_flight_id) < 0)
    ) {
      return next({
        message: "Departure flight id is required",
        statusCode: 400,
      });
    }

    if (
      return_flight_id &&
      isNaN(parseInt(return_flight_id) || parseInt(return_flight_id) < 0)
    ) {
      return next({
        message: "Return flight id is not valid",
        statusCode: 400,
      });
    }

    if (seats_id.length == 0) {
      return next({
        message: "Seats id is required",
        statusCode: 400,
      });
    }

    if (!validSeatClasses.includes(seat_class)) {
      return next({
        message:
          "Invalid seat class. Must be one of: " + validSeatClasses.join(", "),
      });
    }

    if (passengers.length == 0) {
      return next({
        message: "At least one adult / child passenger is required",
        statusCode: 400,
      });
    }

    if (!seat_class || seat_class == "") {
      return next({
        message: "Seat class is required",
        statusCode: 400,
      });
    }

    if (
      !adultCount ||
      isNaN(parseInt(adultCount) || parseInt(adultCount) < 0)
    ) {
      return next({
        message: "Adult count is required",
        statusCode: 400,
      });
    }

    const data = await createBooking({
      user_id,
      departure_flight_id,
      return_flight_id,
      seats_id,
      seat_class,
      passengers,
      adultCount,
      childCount,
      babyCount,
    });

    res.status(201).json({
      message: `Booking created successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBookingsByUserId = async (req, res, next) => {
  try {
    const user_id = req?.user?.id;
    let results = {};
    const data = await getBookingsByUserId(user_id);

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
      message: `Booking by user fetched successfully`,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBookingById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getBookingById(id);
    res.status(200).json({
      message: `Booking by id fetched successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { flight_id, order_date, price_amount } = req.body;

    const data = await updateBooking(id, {
      flight_id,
      order_date,
      price_amount,
    });
    res.status(200).json({
      message: `Booking updated successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBooking = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await deleteBooking(id);
    res.status(200).json({
      message: `Booking deleted successfully`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
