const Midtrans = require("midtrans-client");
const axios = require("axios");
const { config } = require("../../config/cloudinary");

exports.getTokenAndRedirectPaymentUrl = async (payload) => {
  const { order_id, price_amount } = payload;

  let data = JSON.stringify({
    transaction_details: {
      order_id: order_id,
      gross_amount: price_amount,
    },
    expiry: {
      unit: "minutes",
      duration: 60,
    },
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://app.sandbox.midtrans.com/snap/v1/transactions",
    headers: {
      Authorization: `Basic ${process.env.SECRET}`,
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
    throw new Error(error);
  }
};
