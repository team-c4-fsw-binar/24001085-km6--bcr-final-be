const {
  getBookingHistoriesByFlightIDandDateRange,
} = require("../services/booking_history");

exports.getBookingHistoriesByFlightIDandDateRange = async (req, res, next) => {
  try {
    const user_id = req?.user?.id;
    const bookingHistoryPayload = req.body;
    const page = parseInt(req.query?.page);
    const limit = parseInt(req.query?.limit);

    console.log(page);

    let results = {};
    const data = await getBookingHistoriesByFlightIDandDateRange(
      user_id,
      bookingHistoryPayload
    );

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

    res.status(201).json({
      message: "Success",
      data: results,
    });
  } catch (error) {
    next(error);
  }
};
