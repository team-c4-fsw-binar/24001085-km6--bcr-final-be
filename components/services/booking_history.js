const { getBookingsByUserId } = require("../repositories/booking_history");

exports.getBookingHistoriesByFlightIDandDateRange = async (
  user_id,
  payload
) => {
  const { code, startDate, endDate } = payload;

  // Ambil semua booking berdasarkan user_id
  const data = await getBookingsByUserId(user_id);

  let filteredData = data;

  // Filter berdasarkan code
  if (code) {
    filteredData = filteredData.filter((booking) =>
      booking.code.includes(code)
    );
  }

  // Jika rentang tanggal diberikan, filter berdasarkan rentang tanggal
  if (startDate && endDate) {
    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const end = new Date(endDate);
    end.setHours(23, 59, 59, 999);

    filteredData = filteredData.filter((booking) => {
      const bookingDate = new Date(booking.createdAt);
      return bookingDate >= start && bookingDate <= end;
    });
  }

  return filteredData;
};
