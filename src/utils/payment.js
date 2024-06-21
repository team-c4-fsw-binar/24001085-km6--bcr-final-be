const updatePaymentStatusScheduled = async () => {
  const now = new Date();

  // Temukan transaksi yang telah melewati waktu expiry dan masih dalam status pending
  try {
    const [numberOfAffectedRows, affectedPayments] = await Payment.update(
      { status: "Expired" },
      {
        where: {
          status: "Need Method",
          expired_at: {
            [Op.lte]: now,
          },
        },
        returning: true,
      }
    );

    if (numberOfAffectedRows > 0) {
      console.log(`${numberOfAffectedRows} transaksi telah kedaluwarsa.`);

      const bookingIds = affectedPayments.map(
        (payment) => payment.booking_code
      );

      await BookingSeat.destroy({
        where: {
          booking_code: {
            [Op.in]: bookingIds,
          },
        },
      });

      await BookingPassenger.destroy({
        where: {
          booking_code: {
            [Op.in]: bookingIds,
          },
        },
      });

      console.log(
        `BookingSeats terkait dengan booking_id ${bookingIds.join(
          ", "
        )} telah dihapus.`
      );
      console.log(
        `BookingPassengers terkait dengan booking_id ${bookingIds.join(
          ", "
        )} telah dihapus.`
      );
    }
  } catch (error) {
    console.error("Error updating expired transactions:", error);
  }
};

module.exports = { updatePaymentStatusScheduled };
