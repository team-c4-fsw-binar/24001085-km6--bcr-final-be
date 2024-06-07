const {
  getBookingHistoriesByFlightIDandDateRange,
} = require("../services/booking_history");

exports.getBookingHistoriesByFlightIDandDateRange = async (req, res, next) => {
  try {
    const user_id = req?.user?.id;
    const bookingHistoryPayload = req.body;
    const data = await getBookingHistoriesByFlightIDandDateRange(
      user_id,
      bookingHistoryPayload
    );
    res.status(201).json({
      message: "Success",
      data,
    });
  } catch (error) {
    next(error);
  }
};
