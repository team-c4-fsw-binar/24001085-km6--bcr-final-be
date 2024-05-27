const seatUsecase = require("../services/seat");

exports.getSeats = async (req, res, next) => {
  try {
    const data = await seatUsecase.getSeats();
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.getSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await seatUsecase.getSeat(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.createSeat = async (req, res, next) => {
  try {
    const { seat_number, flight_id, booking_id } = req.body;
    if (!seat_number || seat_number == "") {
      return next({
        message: "Seat Number must be provided",
        statusCode: 400,
      });
    }
    if (!flight_id || flight_id == "") {
      return next({
        message: "Flight ID must be provided",
        statusCode: 400,
      });
    }
    if (!booking_id || booking_id == "") {
      return next({
        message: "Booking ID must be provided",
        statusCode: 400,
      });
    }

    const data = await seatUsecase.createSeat({
      seat_number,
      flight_id,
      booking_id,
    });

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.updateSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { seat_number, flight_id, booking_id } = req.body;
    if (!seat_number || seat_number == "") {
      return next({
        message: "Seat Number must be provided",
        statusCode: 400,
      });
    }
    if (!flight_id || flight_id == "") {
      return next({
        message: "Flight ID must be provided",
        statusCode: 400,
      });
    }
    if (!booking_id || booking_id == "") {
      return next({
        message: "Booking ID must be provided",
        statusCode: 400,
      });
    }

    const data = await seatUsecase.updateSeat(id, {
      seat_number,
      flight_id,
      booking_id,
    });
    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};

exports.deleteSeat = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await seatUsecase.deleteSeat(id);
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
