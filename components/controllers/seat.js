const seatUsecase = require("../services/seat");

exports.getSeats = async (req, res, next) => {
  try {
    let results = {};
    const data = await seatUsecase.getSeats();

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
      message: "Success",
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
    const validSeatClasses = ["economy", "premium", "business", "first_class"];
    const { seat_number, airline_id, seat_class } = req.body;
    if (!seat_number || seat_number == "") {
      return next({
        message: "Seat Number must be provided",
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
    if (!airline_id || airline_id == "") {
      return next({
        message: "Flight ID must be provided",
        statusCode: 400,
      });
    }

    const data = await seatUsecase.createSeat({
      seat_number,
      seat_class,
      airline_id,
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
    const validSeatClasses = ["economy", "premium", "business", "first_class"];
    const { id } = req.params;
    const { seat_number, airline_id, seat_class } = req.body;
    if (!seat_number || seat_number == "") {
      return next({
        message: "Seat Number must be provided",
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
    if (!airline_id || airline_id == "") {
      return next({
        message: "Flight ID must be provided",
        statusCode: 400,
      });
    }

    const data = await seatUsecase.updateSeat(id, {
      seat_number,
      seat_class,
      airline_id,
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

exports.getFilteredSeats = async (req, res, next) => {
  try {
    const flightId = req.query.flightId;
    const seatClass = req.query.seatClass;
    if (!flightId || isNaN(parseInt(flightId) || parseInt(flightId) < 0)) {
      return next({
        message: "Departure Flight ID must be provided",
        statusCode: 400,
      });
    }
    if (!seatClass || seatClass == "") {
      return next({
        message: "Seat Class must be provided",
        statusCode: 400,
      });
    }
    const data = await seatUsecase.getFilteredSeats(
      parseInt(flightId),
      seatClass
    );
    res.status(200).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
