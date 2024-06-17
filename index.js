require("dotenv").config();

const express = require("express");

const cron = require("node-cron");
const { Payment, BookingSeat, BookingPassenger } = require("./models");
const { Op } = require("sequelize");

const router = require("./components/routes");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: process.env.NODE_ENV == "development" ? "./tmp" : "/tmp",
  })
);

app.use("/api", router);

app.use("*", (req, res) => {
  res.status(404).json({
    data: null,
    message: "Route not found!",
  });
});

// Error Middleware
app.use((err, req, res, next) => {
  let statusCode = 500;
  let message = "Internal Server Error";

  if (err.statusCode) {
    statusCode = err.statusCode;
  }
  if (err.message) {
    message = err.message;
  }

  res.status(statusCode).json({
    data: null,
    message,
  });
});

// cron.schedule("*/1 * * * *", async () => {
//   const now = new Date();

//   // Temukan transaksi yang telah melewati waktu expiry dan masih dalam status pending
//   try {
//     const [numberOfAffectedRows, affectedPayments] = await Payment.update(
//       { status: "Expired" },
//       {
//         where: {
//           status: "Pending",
//           expired_at: {
//             [Op.lte]: now,
//           },
//         },
//         returning: true,
//       }
//     );

//     if (numberOfAffectedRows > 0) {
//       console.log(`${numberOfAffectedRows} transaksi telah kedaluwarsa.`);

//       const bookingIds = affectedPayments.map(
//         (payment) => payment.booking_code
//       );

//       await BookingSeat.destroy({
//         where: {
//           booking_code: {
//             [Op.in]: bookingIds,
//           },
//         },
//       });

//       await BookingPassenger.destroy({
//         where: {
//           booking_code: {
//             [Op.in]: bookingIds,
//           },
//         },
//       });

//       console.log(
//         `BookingSeats terkait dengan booking_id ${bookingIds.join(
//           ", "
//         )} telah dihapus.`
//       );
//       console.log(
//         `BookingPassengers terkait dengan booking_id ${bookingIds.join(
//           ", "
//         )} telah dihapus.`
//       );
//     }
//   } catch (error) {
//     console.error("Error updating expired transactions:", error);
//   }
// });

app.listen(port, () => console.log(`Server running on port ${port}`));
