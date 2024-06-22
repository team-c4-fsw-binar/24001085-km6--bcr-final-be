const { getFilteredTickets } = require("../services/find_ticket");

exports.getFilteredTickets = async (req, res, next) => {
  try {
    const validSeatClasses = ["economy", "premium", "business", "first_class"];
    const validFilters = [
      "harga_termurah",
      "durasi_terpendek",
      "keberangkatan_paling_awal",
      "keberangkatan_paling_akhir",
      "kedatangan_paling_awal",
      "kedatangan_paling_akhir",
    ];
    const findTicketsPayload = req.body;

    if (!findTicketsPayload.from || findTicketsPayload.from == "") {
      return next({
        message: "Departure City must be provided",
        statusCode: 400,
      });
    }

    if (!findTicketsPayload.to || findTicketsPayload.to == "") {
      return next({
        message: "Arrival City must be provided",
        statusCode: 400,
      });
    }

    if (
      !findTicketsPayload.departure_date ||
      findTicketsPayload.departure_date == ""
    ) {
      return next({
        message: "Departure Date must be provided",
        statusCode: 400,
      });
    }

    if (
      !findTicketsPayload.total_passengers ||
      findTicketsPayload.total_passengers == "" ||
      findTicketsPayload.total_passengers < 0
    ) {
      return next({
        message: "Total Passengers must be provided",
        statusCode: 400,
      });
    }

    if (!validSeatClasses.includes(findTicketsPayload.seat_class)) {
      return next({
        message:
          "Invalid Seat's class. Must be one of: " +
          validSeatClasses.join(", "),
      });
    }
    if (findTicketsPayload.filter) {
      if (!validFilters.includes(findTicketsPayload.filter)) {
        return next({
          message:
            "Invalid Filters. Must be one of: " + validFilters.join(", "),
        });
      }
    } else {
      findTicketsPayload.filter = "harga_termurah";
    }

    let departure_results = {};
    let return_results = {};
    const { departure_flight, return_flight } = await getFilteredTickets(
      findTicketsPayload
    );

    const page = parseInt(req.query?.page);
    const limit = parseInt(req.query?.limit);
    if (page && limit) {
      const startIndex = (page - 1) * limit;
      const endIndex = page * limit;

      departure_results.totalPage = Math.ceil(departure_flight.length / limit);
      return_results.totalPage = Math.ceil(return_flight.length / limit);

      if (endIndex < departure_flight.length) {
        departure_results.next = {
          page: page + 1,
          limit: limit,
        };
      }
      if (endIndex < return_flight.length) {
        return_results.next = {
          page: page + 1,
          limit: limit,
        };
      }

      if (startIndex > 0 && page < departure_results.totalPage > 0) {
        departure_results.previous = {
          page: page - 1,
          limit: limit,
        };
      }
      if (startIndex > 0 && page < return_results.totalPage) {
        return_results.previous = {
          page: page - 1,
          limit: limit,
        };
      }

      departure_results.results = departure_flight.slice(startIndex, endIndex);
      return_results.results = return_flight.slice(startIndex, endIndex);
    } else {
      departure_results.results = departure_flight.slice();
      return_results.results = return_flight.slice();
    }

    res.status(201).json({
      message: "Success",
      data: { departure_results, return_results },
    });
  } catch (error) {
    next(error);
  }
};
