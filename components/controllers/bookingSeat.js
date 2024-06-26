const bookingSeatUsecase = require("../services/bookingSeat");

exports.getBookingSeats = async (req, res, next) => {
  try {
    const data = await bookingSeatUsecase.getBookingSeats();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getBookingSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await bookingSeatUsecase.getBookingSeat(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createBookingSeat = async (req, res, next) => {
  try {
    const { booking_code, seat_id } = req.body;
    if (!booking_code || booking_code == "") {
      return next({
        message: "Booking code is required",
        statusCode: 400,
      });
    }
    if (!seat_id || seat_id == "") {
      return next({
        message: "Seat id is required",
        statusCode: 400,
      });
    }

    const data = await bookingSeatUsecase.createBookingSeat({
      booking_code,
      seat_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateBookingSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { booking_code, seat_id } = req.body;
    if (!booking_code || booking_code == "") {
      return next({
        message: "Booking code is required",
        statusCode: 400,
      });
    }
    if (!seat_id || seat_id == "") {
      return next({
        message: "Seat id is required",
        statusCode: 400,
      });
    }

    const data = await bookingSeatUsecase.updateBookingSeat(id, {
      booking_code,
      seat_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteBookingSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await bookingSeatUsecase.deleteBookingSeat(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
