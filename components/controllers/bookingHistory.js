const {
  getBookingHistoriesByFlightIDandDateRange,
} = require("../services/bookingHistory");

exports.getBookingHistoriesByFlightIDandDateRange = async (req, res, next) => {
  try {
    const userId = req?.user?.id;
    const bookingHistoryPayload = req.body;
    const page = parseInt(req.query?.page);
    const limit = parseInt(req.query?.limit);

    let results = {};
    const data = await getBookingHistoriesByFlightIDandDateRange(
      userId,
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
