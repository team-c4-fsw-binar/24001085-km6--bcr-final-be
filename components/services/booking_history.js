const { getBookingsByUserId } = require("../repositories/booking_history");

exports.getBookingHistoriesByFlightIDandDateRange = async (
  user_id,
  payload
) => {
  const { flight_id, startDate, endDate } = payload;

  // Ambil semua booking berdasarkan user_id
  const data = await getBookingsByUserId(user_id);

  let filteredData = data;

  // Filter berdasarkan flight_id
  if (flight_id) {
    filteredData = filteredData.filter(
      (booking) => booking.flight_id === flight_id
    );
  }

  // Jika rentang tanggal diberikan, filter berdasarkan rentang tanggal
  if (startDate && endDate) {
    const start = new Date(startDate);
    const end = new Date(endDate);
    filteredData = filteredData.filter((booking) => {
      const bookingDate = new Date(booking.createdAt);
      return bookingDate >= start && bookingDate <= end;
    });
  }

  return filteredData;
};
