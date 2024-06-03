const Midtrans = require("midtrans-client");

exports.getToken = async (payload) => {
  let snap = new Midtrans.Snap({
    isProduction: false,
    serverKey: process.env.SECRET,
    clientKey: process.env.NEXT_PUBLIC_CLIENT,
  });
  const data = await snap.createTransactionToken(payload);
  return data;
};
