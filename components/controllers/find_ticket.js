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
    }

    const data = await getFilteredTickets(findTicketsPayload);

    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
