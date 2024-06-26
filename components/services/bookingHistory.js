const { getBookingsByUserId } = require("../repositories/bookingHistory");

exports.getBookingHistoriesByFlightIDandDateRange = async (
  user_id,
  payload
) => {
  const { code, startDate, endDate } = payload;

  const data = await getBookingsByUserId(user_id);

  let filteredData = data;

  if (code) {
    filteredData = filteredData.filter((booking) =>
      booking.code.includes(code)
    );
  }

  if (startDate && endDate) {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    filteredData = filteredData.filter((booking) => {
      const bookingDate = new Date(booking.order_date);
      return bookingDate >= start && bookingDate <= end;
    });
  }

  return filteredData;
};
