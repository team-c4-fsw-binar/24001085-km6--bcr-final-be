const Midtrans = require("midtrans-client");
const axios = require("axios");
const { config } = require("../../config/cloudinary");

exports.getTokenAndRedirectPaymentUrl = async (payload) => {
  // let snap = new Midtrans.Snap({
  //   isProduction: false,
  //   serverKey: process.env.SECRET,
  //   clientKey: process.env.NEXT_PUBLIC_CLIENT,
  // });
  // const data = await snap.createTransactionToken(payload);
  // return data;

  const { order_id, price_amount } = payload;

  let data = JSON.stringify({
    transaction_details: {
      order_id: order_id,
      gross_amount: price_amount,
    },
    callbacks: {
      finish: "https://google.com",
    },
    expiry: {
      unit: "minute",
      duration: 60,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
    headers: {
      Authorization: process.env.SECRET,
      "Content-Type": "application/json",
    },
    data: data,
  };

  try {
    const response = await axios.request(config);
    return {
      token: response.data.token,
      redirect_url: response.data.redirect_url,
    };
  } catch (error) {
    next(error);
  }
};
