const {
  createBooking,
  getBookingsByUserId,
  getBookingById,
  updateBooking,
  deleteBooking,
} = require("../services/booking");

exports.createBooking = async (req, res, next) => {
  try {
    // get body
    const {
      departure_flight_id,
      return_flight_id,
      order_date,
      price_amount,
      seats_id,
      seat_class,
    } = req.body;
    const user_id = req?.user?.id;

    const validSeatClasses = ["economy", "premium", "business", "first_class"];

    if (
      !departure_flight_id ||
      isNaN(parseInt(departure_flight_id) || parseInt(departure_flight_id) < 0)
    ) {
      return next({
        message: "Departure flight Id is required!",
        statusCode: 400,
      });
    }

    if (
      return_flight_id &&
      isNaN(parseInt(return_flight_id) || parseInt(return_flight_id) < 0)
    ) {
      return next({
        message: "Return flight Id is not valid!",
        statusCode: 400,
      });
    }
    if (!order_date || order_date == "") {
      return next({
        message: "Order Date is required!",
        statusCode: 400,
      });
    }

    if (
      !price_amount ||
      isNaN(parseInt(price_amount) || parseInt(price_amount) < 0)
    ) {
      return next({
        message: "Price Amount is required!",
        statusCode: 400,
      });
    }

    if (seats_id.length == 0) {
      return next({
        message: "Seats Id is required!",
        statusCode: 400,
      });
    }

    if (!validSeatClasses.includes(seat_class)) {
      return next({
        message:
          "Invalid Seat's class. Must be one of: " +
          validSeatClasses.join(", "),
      });
    }
    const data = await createBooking({
      user_id,
      departure_flight_id,
      return_flight_id,
      order_date,
      price_amount,
      seats_id,
      seat_class,
    });

    res.status(201).json({
      message: `Success Create Booking`,
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

      results.results = data.slice(startIndex, endIndex);
    } else {
      results.results = data.slice();
    }
    res.status(200).json({
      data: results,
      message: `Success Get Booking By User`,
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
      message: `Success Get Booking By ID`,
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
      message: `Success Update Booking`,
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
      message: `Success Delete Notification`,
      data,
    });
  } catch (error) {
    next(error);
  }
};
