const { Op } = require("sequelize");
const { Payment, BookingSeat, BookingPassenger } = require("../../models");

const updatePaymentStatusScheduled = async () => {
  const now = new Date();

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
    }
  } catch (error) {
    console.error("Error updating expired transactions:", error);
  }
};

module.exports = { updatePaymentStatusScheduled };
